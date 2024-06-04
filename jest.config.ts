import type { Config } from '@jest/types';

// Or directly use inline config
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    "./tests/helpers/integrationSetup.ts"
  ],
  globals: {
    "__APP__": undefined
  }
};

export default config;
