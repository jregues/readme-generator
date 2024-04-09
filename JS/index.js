// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const lB = colors.lightBlue;

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt (
        {
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
            name: 'intallation',
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
            type:'input',
            message: 'Please enter the liscense you have',
            name: 'liscense',
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
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Please put any test you made for your application',
            name: 'application',
        }
    )
    

    .then(response) (

    )    
    
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
