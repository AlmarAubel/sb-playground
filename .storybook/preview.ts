import { type Preview, setup } from '@storybook/vue3'
import { fakerEN as faker } from '@faker-js/faker'
import { VueQueryPlugin } from '@tanstack/vue-query'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  beforeEach: () => {
   faker.seed(2)
  },
}

setup((app) => {
  app.use(VueQueryPlugin)
});
export default preview
