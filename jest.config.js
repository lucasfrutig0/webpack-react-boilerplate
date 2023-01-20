module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  bail: 1,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],

  // testResultsProcessor: 'jest-sonar-reporter',

  testTimeout: 30000,

  transform: {
    '\\.[t]sx?$': 'ts-jest',
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/webpack/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/webpack/jest/fileTransform.js',
  },

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/webpack/jest/setupTests.js'],
};