// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = ({gitRepo, email, name, description, license, dependance, test, use, contribute}) => `### ${name}
<!--![GitHub license](https://img.shields.io/badge/)-->
## Description
${description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
To install nescessary dependencies, run the following command:
...
${dependance}
...

## Usage
${use}

## License
This project is licensed under the ${license} license.

## Contributing
${contribute}

## Tests
To run the tests, use the following command:
...
${test}
...

## Questions
If you have any questions about this repo, open an issue or email me at ${email}. You can find more of my work at ${gitRepo}.`;
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
