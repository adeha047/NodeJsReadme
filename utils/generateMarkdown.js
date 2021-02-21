// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
switch (license) {
  case 'MIT':
    return `![Badge](https://img.shields.io/badge/license-MIT-blue)`;
  
    case 'GPL':
    return `![Badge](https://img.shields.io/badge/license-GPL-blue)`;
    
    case 'APACHE':
    return `![Badge](https://img.shields.io/badge/license-APACHE-blue)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license) {

  case 'MIT':
    return `https://choosealicense.com/licenses/mit/`;
  
    case 'GPL':
    return `https://choosealicense.com/licenses/gpl-3.0/`;
    
    case 'APACHE':
    return `https://choosealicense.com/licenses/apache-2.0/`;

}

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {

    case 'MIT':
      return `#[License](https://choosealicense.com/licenses/mit/)`;
    
      case 'GPL':
      return `#[License](https://choosealicense.com/licenses/gpl-3.0/)`;
      
      case 'APACHE':
      return `#[License](https://choosealicense.com/licenses/apache-2.0/)`; 

  }


 };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 

${data.description}



## Table of Contents

* [Installation](#installation)
* [Description](#Description)
* [links](#links)
* [Usage](#Usage)
* [tests](#tests)
* [licenses](#licenses)
* [Questions](#Questions)


## Installation

${data.installation}

## Links 

${data.links}

## Usage

${data.usage}

## Tests

${data.tests}

## Licenses

#${renderLicenseSection(data.license)}

Please click on the license tab or please check out the URL here for more information on the requested license: ${renderLicenseLink(data.license)}


## Questions

Please reach out to me if you have any further questions 

github: https://github.com/${data.username}

email: ${data.email}


`;
}

module.exports = generateMarkdown;