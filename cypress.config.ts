import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    screenshotOnRunFailure: false,
    video: false,
    specPattern: '**/*.test.tsx',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
