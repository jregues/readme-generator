// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please enter the title for your README file',
    name: 'title',
},
{
    type: 'input',
    message: 'Please enter the table of contents for your README file',
    name: 'table',
},
{
    type: 'input',
    message: 'Please explain how to install your application',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please enter instructions for how to use your application',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please enter any collaboraters, if you had any',
    name: 'credits',
},
{
    type: 'input',
    message: 'Please enter the liscense you have',
    name: 'license',
},
{
    type: 'input',
    message: 'Please enter any badges you have',
    name: 'badges'
},
{
    type: 'input',
    message: 'Please type any features you have',
    name: 'features',
},
{
    type: 'input',
    message: 'Please enter any ways the user can contribute',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Please put any test you made for your application',
    name: 'application',
}];

inquirer
    .prompt(questions)

    .then((answers) => {
        fs.writeFile('README.md', file(answers), function(err){
            err ? console.error(err): console.log("Succesfully Written!");
        })
      })
      const file = (data) => {
    return `
# ${data.title}

## Table of Contents
${data.table}
## Installation
${data.installation}
 ## Usage
${data.usage}
## Credits
 ${data.credits}
 ## License
 ${data.license}
## Badges
${data.badges}
## Features
${data.features}
## Contributions
${data.contribution}
## Application
${data.application}`
}

// TODO: Create a function to initialize app
const init = () => console.log('npm init -y');

// Function call to initialize app
// init();
