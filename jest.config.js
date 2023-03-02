const esModules = ['lodash-es', 'axios'].join('|')

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
   
    transform: {
        [`^(${esModules}).+\\.js$`]: 'babel-jest',
    },
    transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
   
};