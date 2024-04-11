// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

import inquirer from 'inquirer';
import fs from 'fs';
import { questions } from './index/index.js';
function renderLicenseSection() {
  renderLicenseBadge();
  renderLicenseLink();
}
  function renderLicenseBadge(license) {
 switch (license) {
   case 'MIT':
     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
   case 'Apache 2.0':
     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
   default:
     return '';
 }
}
function renderLicenseLink(license) {
 switch (license) {
   case 'MIT':
     return '(https://opensource.org/licenses/MIT)';
   case 'Apache 2.0':
     return '(https://opensource.org/licenses/Apache-2.0)';
   default:
     return '';
 }
}

inquirer
  .prompt(questions)

  .then((answers) => {

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
 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}
## Badges
${data.badges}
## Features
${data.features}
## Contributions
${data.contribution}
## Application
${data.application}`
  }
    fs.writeFile('README.md', file(answers), function (err) {
      err ? console.error(err) : console.log("Succesfully Written!");
    })

  })