// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed and informative Project Description'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps and requirements for installing your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions, helpful tips, examples, demos and/or screenshots here'
    },
    {
        type: 'input',
        name: 'features',
        message: "Describe your project's noteworthy features (optional)"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? If so, include them here'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and any assets used that require attribution'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Can users contribute? Describe instuctions and guidelines for contributing to this project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            }
              else {
                  console.log('Please enter your GitHub username');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            }
              else {
                console.log('Please enter your email address');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license type for your repository (select one)',
        choices: [
            'GNU GPLv2' ,
            'GNU GPLv3' ,
            'MIT' ,
            'Academic Free License v3.0' ,
            'Apache-2.0' ,
            'BSD' ,
            'BSD 2' ,
            'BSD 3' ,
            'Eclipse 1.0' ,
            'Eclipse 2.0' ,
            'LGPLv2.1' ,
            'Microsoft Public']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed and informative Project Description'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps and requirements for installing your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions, helpful tips, examples, demos and/or screenshots here'
    },
    {
        type: 'input',
        name: 'features',
        message: "Describe your project's noteworthy features (optional)"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? If so, include them here'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and any assets used that require attribution'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Can users contribute? Describe instuctions and guidelines for contributing to this project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            }
              else {
                  console.log('Please enter your GitHub username');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            }
              else {
                console.log('Please enter your email address');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license type for your repository (select one)',
        choices: [
            'GNU GPLv2' ,
            'GNU GPLv3' ,
            'MIT' ,
            'Academic Free License v3.0' ,
            'Apache-2.0' ,
            'BSD' ,
            'BSD 2' ,
            'BSD 3' ,
            'Eclipse 1.0' ,
            'Eclipse 2.0' ,
            'LGPLv2.1' ,
            'Microsoft Public']
    },
  ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });