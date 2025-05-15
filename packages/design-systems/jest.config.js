module.exports = {  
    testEnvironment: 'jest-environment-jsdom',  
    moduleFileExtensions: ['ts', 'tsx', 'js'],  
    transform: {  
      '^.+\\.(ts|tsx)$': 'ts-jest'  
    },  
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],  
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts']  
  };  