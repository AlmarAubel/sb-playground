import { within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import MyPage from './Component.vue'
import { getPetsMock } from '@/api/pets/pets.msw'

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const meta = {
  component: MyPage,
  render: args => ({
    components: { MyPage },
    setup: () => {
      return { args }
    },
    template: `
      <my-page v-bind="args" /> `,
  }),
  parameters: {
    msw: {
      handlers: [getPetsMock()],
    },
  },
  argTypes: {
    demoMode: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof MyPage & { demoMode: boolean }>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { id: 'Default 2' },
}

export const Case1: Story = {
  args: { id: '2', demoMode: true },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', {name:'Klik hier'}))
    await userEvent.type(canvas.getByLabelText('Naam'), 'Pietje puk')
    await userEvent.click(canvas.getByRole('button', {name:'Klik dan hier'}))
    await userEvent.click(canvas.getByRole('button', {name:'Click me'}))
  },
}
