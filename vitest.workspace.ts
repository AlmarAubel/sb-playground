import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'vitest.storybook.ts', //<- this running all the browser test in one single instance
  //'vitest.storybook1.ts',
  //'vitest.storybook2.ts',
])
