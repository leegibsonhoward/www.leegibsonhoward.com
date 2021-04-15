module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.docusaurus`, `<rootDir>/build`],
  transformIgnorePatterns: [`node_modules/(?!(@babel)/)`],
  verbose: true,
};
