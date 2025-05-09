import { type Meta, type StoryObj } from '@storybook/vue3';
import VLabelInput from './VLabelInput.vue';
import { userEvent } from '@storybook/test';


const meta: Meta<typeof VLabelInput> = {
  component: VLabelInput,
};

export default meta;

type Story = StoryObj<typeof VLabelInput>;

const Template: Story = {
  render: (args) => ({
    components: { VLabelInput },
    setup() {
      return { args };
    },
    template: '<VLabelInput v-bind="args" />',
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Naam',
  },
  async play({ canvas,  }) {
    const field = await canvas.getByRole('textbox');
    await userEvent.type(field, '1');
  },
};

