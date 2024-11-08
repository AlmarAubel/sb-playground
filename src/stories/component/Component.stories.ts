import { expect, waitFor, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import Component from './Component.vue'
import { getPetsMock } from '@/api/pets/pets.msw'

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const meta = {
  component: Component,
  render: args => ({
    components: { Component },
    setup: () => {
      return { args }
    },
    template: `
      <Component v-bind="args" /> `,
  }),
  parameters: {
    msw: {
      handlers: [getPetsMock()],
    },
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { id: 'Default 2' },
}

export const Case1: Story = {
  args: { id: '2' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Can find text', async () => {
      const text = await waitFor(() => canvas.getByText(/slurp/i), {
        timeout: 10000,
      })
      await expect(text).toBeVisible()
    })
  },
}

export const Case1WithoutStep: Story = {
  args: { id: '2' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const text = await waitFor(() => canvas.getByText(/slurp/i), {
      timeout: 10000,
    })
    await expect(text).toBeVisible()
  },
}

export const Case2: Story = {
  args: { id: '2' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Can find text', async () => {
      await sleep(5000)
      const text = canvas.getByText(/slurp/i)
      await expect(text).toBeVisible()
    })
  },
}
