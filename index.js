// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
        console.log(`README.md generated successfully! File path: ${path.resolve(fileName)}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content using the user's answers
      const readmeContent = generateReadmeContent(answers);

      // Write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// TODO: Create a function to generate README content based on user input
function generateReadmeContent(answers) {
    // Use the user's answers to construct the README content
    const {
      title,
      description,
      installation,
      usage,
      license,
      contributing,
      tests,
      githubUsername,
      email,
    } = answers;
  
    // Construct the README content using Markdown syntax
    let readmeContent = `# ${title}
  
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is covered under the ${license} license.
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  If you have any questions, you can reach out to me via GitHub or email:
  - GitHub: [${githubUsername}](https://github.com/${githubUsername})
  - Email: ${email}
  `;
  
    // Return the generated README content as a string
    return readmeContent;
  }
  
  // Function call to initialize app
  init();
  
