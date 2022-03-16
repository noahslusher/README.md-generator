// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log('Please enter a project name!')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description for your project. What was the motivation? Why did you build this project? What problem does it solve? What did you learn?'
  },
  {
    type: 'confirm',
    name: 'confirmContents',
    message: 'Would you like to add a table of contents',
    default: false
  },
  {
    type: 'checkbox',
    name: 'contents',
    message: 'Please check the boxes of the headers you would like to include in your Table of Contents',
    choices: ['Installation', 'Usage', 'Credits', 'Licenses', 'Badge', 'Features', 'Contribution', 'Tests', 'Questions'],
    when: ({ confirmContents }) => {
      if (confirmContents) {
        return true;
      } else {
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. If needed, add screenshots by adding the images to an "assets/images" folder in your repository and upload the photo. Use a relative filepath to add it to your README using the syntax "```md![alt text](assts/images/screenshot.png)```"'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license if you would like. refer to "[https://choosealicense.com/](https://choosealicense.com/)" for help.',
    choices: ['MIT', 'none']
  },
  {
    type: 'confirm',
    name: 'confirmBadge',
    message: 'Would you like to add a badge',
    default: false
  },
  {
    type: 'input',
    name: 'badge',
    message: 'Please add the badge you would like to use',
    when: ({ confirmBadge }) => {
      if (confirmBadge) {
        return true
      } else {
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'features',
    message: 'List your features here if you would like to.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'If you would like others to contribute, please leave guidelines here for how to do so.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide them here.',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter a good email address to be contacted at with any questions',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'What is your GitHub repository name?',
  },
]

//promptUser().then(answers => console.log(answers))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err)
    } else {
      return console.log("success")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
