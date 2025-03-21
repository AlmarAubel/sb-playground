import { defineConfig, mergeConfig } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookVuePlugin } from '@storybook/vue3-vite/vite-plugin'
import vitestConfig from './vitest.config'

export default mergeConfig(
  vitestConfig,
  defineConfig({
    root:__dirname,
    plugins: [
      storybookTest({ configDir: '.storybook', tags: { skip: ['flaky'] } }),
      storybookVuePlugin(),
    ],
    test: {
      name: 'storybook',
      isolate: true,
      browser: {
        provider: 'playwright',
        enabled: true,
        instances: [{ browser: 'chromium' }],
        headless: true,
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  }),
)
