# Instructions for Setting Up Vitest with Storybook

## Standard Setup

1. Run `npm install`.
2. Ensure that the `node_modules/.vite` folder is cleaned.
3. Start Vitest using the following command:
   ```bash
   vitest --workspace vitest.workspace.ts
   ```
4. Occasionally, you might see the message `new dependencies optimized` appear once.
5. For example, if you modify a file like `src/stories/component2/component.vue`, the test will automatically rerun due to the watch mode. However, the `new dependencies optimized` message typically does not reappear.

---

## Flaky Test Setup

This setup uses two Storybook Vitest configurations, as defined in `vitest.workspace.flaky.ts`. This configuration will start two Vitest browser processes.

1. Ensure that the `node_modules/.vite` folder is cleaned.
2. Start Vitest using the following command:
   ```bash
   vitest --workspace vitest.workspace.flaky.ts
   ```
3. In this setup, you will frequently see the `new dependencies optimized` message appearing once.
4. For instance, if you modify a file like `src/stories/component2/component.vue`, the test will automatically rerun due to the watch mode.
    - In most cases, the message `new dependencies optimized: vue-router` will now reappear.
    - The test will then run again.

