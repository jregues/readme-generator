// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
export const questions = [{
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
    type: 'list',
    message: 'Please select the liscense you have',
    name: 'license',
    choices: ['MIT', 'Apache 2.0']
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

// TODO: Create a function to initialize app
const init = () => console.log('npm init -y');

// Function call to initialize app
// init();

init();
