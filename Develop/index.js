// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = ({gitRepo, email, name, description, license, dependance, test, use, contribute}) => `### ${name}
![GitHub license](https://img.shields.io/badge/license-LICENSE_NAME-<COLOR>.svg)
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

\`\`\`bash
${dependance}
\`\`\`

## Usage
${use}

## License
This project is licensed under the ${license} license.

## Contributing
${contribute}

## Tests
To run the tests, use the following command:

\`\`\`bash
${test}
\`\`\`

## Questions
If you have any questions about this repo, open an issue or email me at ${email}. You can find more of my work at ${gitRepo}.`;
// TODO: Create an array of questions for user input
function promptUser() {
return inquirer
  .prompt([
    {
      type: 'input',
      name: 'gitRepo',
      message: 'What is your GitHub user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
          'MIT',
          'Apache 2.0',
          'GPL 3.0',
          'BSD 3',
          'None'
        ],
        default: 'None'
    },      
    {
        type: 'input',
        name: 'dependance',
        message: 'What commands should be run to install dependencies?',
        default: 'npm i',
        suffix: ' (default: "npm i")'
    },      
    {
        type: 'input',
        name: 'test',
        message: 'What commands should be run to run test?',
        default: 'npm test',
        suffix: ' (default: "npm test")'
    },
    {
        type: 'input',
        name: 'use',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ]);
    }

 // Function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
  }
  
  // Function to initialize the app
  async function init() {
    try {
      // Prompt the user for information
      const answers = await promptUser();
  
      // Generate the README content based on the user's answers
      const readmeContent = generateReadMe(answers);
  
      // Write the README file
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Call the init function to initialize the app
  init();