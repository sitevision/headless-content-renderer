import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    specPattern: '**/*.test.tsx',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
