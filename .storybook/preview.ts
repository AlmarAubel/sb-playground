import { type Preview, setup } from '@storybook/vue3'
import { fakerEN as faker } from '@faker-js/faker'
import {  VueQueryPlugin } from '@tanstack/vue-query'
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize({
  quiet: false,
  onUnhandledRequest: ({ url, method }) => {
    const pathname = new URL(url).pathname
    if (pathname.startsWith('/pets')) {
      console.error(`Unhandled ${method} request to ${url}.

        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `)
    }
  },
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],

  beforeEach: async () => {
    console.log('beforeEach')
    faker.seed(2)
  },
}



setup(app => {
  app.use(VueQueryPlugin)
})
export default preview
