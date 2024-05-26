//SETUP TEST ENVIRONNEMENT

//installer d'abord nodejs
https://nodejs.org/en/
//suivre les instructions

//les commandes pour installer typescript, jest:
//install typescript globaly in your machine
npm install -g typescript
//install jest in your machine for doing test in typescript
npm install --save-dev jest
npm i -D jest ts-jest @types/jest @jest/globals
//install jest-date to work with date for testing typescript
npm install --save-dev jest-date
//Create a config file named jest.config.js at the same level as package.json by running the following command:
npx ts-jest config:init
//The file should have the following code:

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node"
};

//add the following snippet in package.json:

"scripts": {
    "test": "jest"
  }
  
//you can add The --watch flag tells Jest to run tests every time our code changes
"scripts": {
    "test": "jest --watch"
  }
  
//Create a folder named tests at the same level as package.json and place your test files under this folder. 
//Test files should follow the naming convention {file_name}.test.ts . Execute the tests by running the following command:
npm t 
npm test