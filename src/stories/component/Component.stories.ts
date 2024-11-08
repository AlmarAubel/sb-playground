import { expect, waitFor, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import MyPage from './Component.vue'
import { getPetsMock } from '@/api/pets/pets.msw'


const meta = {
  component: MyPage,
  render: args => ({
    components: { MyPage },
    setup: () => {
      return {args}
    },
    template: `
      <my-page v-bind="args" /> `
  }),
  parameters: {
    msw: {
      handlers: [getPetsMock()]
    }
  }
} satisfies Meta<typeof MyPage >

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { id: 'Default 2' },
}

export const Case1: Story = {
  args: { id: '2' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Can find text', async ()=> {
      const text = await waitFor(() => canvas.getByText(/slurp/i),{ timeout: 10000 })
      await expect(text).toBeVisible()
    })

  }
}

