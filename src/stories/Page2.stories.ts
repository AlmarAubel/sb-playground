import { expect, userEvent, waitFor, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3';

import MyPage from './Page2.vue';

const meta = {
  title: 'Example/Page2',

  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: '<my-page />',
  }),
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Case1: Story = {
  play: async ({ canvasElement }) => {
    console.log('Start: page2 case 1');
    const canvas = within(canvasElement)
    const usernameHeader = await waitFor(() =>
      canvas.getByRole('heading', { name: 'Phyllis Waters' }),
    )
    expect(usernameHeader).toBeVisible()
    console.log('End: page2 case 1');
  },
}

export const Case2: Story = {
  play: async ({ canvasElement }) => {
    console.log('Start: page2 case 2')
    const canvas = within(canvasElement);
    const usernameHeader = await waitFor(()=>canvas.getByRole('heading', { name: 'Phyllis Waters' }));
    expect(usernameHeader).toBeVisible()
    console.log('End: page2 case 2')
  },
};

export const Case3: Story = {
  play: async ({ canvasElement }) => {
    console.log('Start: page2 case 3')
    const canvas = within(canvasElement);
    const usernameHeader = await waitFor(()=>canvas.getByRole('heading', { name: 'Phyllis Waters' }));
    expect(usernameHeader).toBeVisible()
    console.log('End: page2 case 3')
  },
};
