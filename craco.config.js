const path = require('path');
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');
const { compilerOptions } = require('./tsconfig.paths.json');
const { pathsToModuleNameMapper } = require('ts-jest');
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'});

module.exports = {
  plugins: [
    { plugin: BabelRcPlugin },
  ],
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper,
    }
  },
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@data': path.resolve(__dirname, './src/data/'),
      '@helpers': path.resolve(__dirname, './src/helpers/'),
      '@screens': path.resolve(__dirname, './src/screens/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    }
  }
};
