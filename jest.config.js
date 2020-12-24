module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/app/**/*.{js,jsx}',
    '!**/app/**/*[t|T]est*.{js,jsx}',
    '!**/node_modules/**',
    '!**/build/**'
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(svg|png|jpg)$': 'jest-transform-stub'
  },
  globals: {
    isProduction: false,
    isDev: true,
    command: 'start',
    testAPI: 'dummy'
  },
  moduleNameMapper: {
    '^.*[.](css|CSS)$': 'identity-obj-proxy',
    '^.+.(svg|png|jpg)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'css'
  ],
  testMatch: ["<rootDir>/app/**/*.test.js"],
  modulePaths: [
    '/app'
  ],
  moduleDirectories: [
    'node_modules',
    'app'
  ],
  setupFiles: ['./setupJest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!react-state-form)'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
}

