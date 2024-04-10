// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import questions from './JS/index.JS';
data = questions.response;
const license = data.license
console.log(license)
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}
renderLicenseBadge(license);
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;
