// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // licenses 
    const licenseBadges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    };

    return licenseBadges[license] || '';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Map the license to the corresponding URL
    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    };

    return licenseLinks[license] || '';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is covered under the [${license}](${renderLicenseLink(
      license
    )}) license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;

