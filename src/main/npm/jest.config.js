const config = require('@indeed/node-common-npm-scripts/config/jest.config');

module.exports = {
    ...config,
    collectCoverageFrom: [
        ...config.collectCoverageFrom,
        '!**/**/*.d.ts',
        '!web/static/js/app.tsx',
        '!**/*.stories.tsx',
        '!babel.config.js',
        '!jest.transform.js',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
};
