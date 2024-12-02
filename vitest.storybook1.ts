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
      name: 'storybook-1',
      isolate: true,
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright',
        isolate: true,
        fileParallelism: false,
      },
      // Make sure to adjust this pattern to match your stories files.
      include: ['./src/stories/component/**/*.stories.?(m)[jt]s?(x)'],
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  }),
)
