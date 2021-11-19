// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === 'Perl') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
  else { return '' }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
  else if (license === 'ISC') {
    return `https://opensource.org/licenses/ISC`
  }
  else if (license === 'IBM') {
    return `https://opensource.org/licenses/IPL-1.0`
  }
  else if (license === 'Perl') {
    return `https://opensource.org/licenses/Artistic-2.0`
  }
  else { return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Table of Contents

[Description](#description)

[Installation](#installation)

[Examples](#examples)

[Collaborator Credits](#collab)

[License Badge and Link](#license)

[Features](#features)

[Contribution](#contriubte)

## Description {#description}

${data.description}

## Installation Instructions {#installation}

${data.installation}

## Examples for use {#examples}

${data.examples}

## Collaborator Credits {#collab}

${data.collab}

## License Badge and Link {#license}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

## Features {#features}

${data.features}

## How can others contribute? {#contribute}

${data.contribute}

## Questions, comments concerns? {#questions}

Please get in touch with me via github or my email below.

[Github](https://www.github.com/${data.github})

${data.email}


`;
}

module.exports = generateMarkdown;
