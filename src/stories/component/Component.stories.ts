import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent } from '@storybook/test'
import Component from './Component.vue'

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
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { id: 'Default 2' },
}

export const Case1: Story = {
  args: { id: 'Default 2' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Push me!' })
    await userEvent.click(button)
  },
}
