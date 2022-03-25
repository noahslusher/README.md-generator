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
    type: 'checkbox',
    name: 'contents',
    message: 'Please check the boxes of the headers you would like to include in your Table of Contents',
    choices: ['Installation', 'Usage', 'Credits', 'Licenses', 'Badge', 'Features', 'Contribution', 'Tests', 'Questions'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
    default: 'npm i',
    // when: ({contents}) => {
    //   if (contents[0]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. If needed, add screenshots by adding the images to an "assets/images" folder in your repository and upload the photo. Use a relative filepath to add it to your README using the syntax "```md![alt text](assets/images/screenshot.png)```"',
    default: 'Please contact me',
    // when: ({contents}) => {
    //   if (contents[1]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    default: 'None',
    // when: ({contents}) => {
    //   if (contents[2]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license if you would like. refer to "[https://choosealicense.com/](https://choosealicense.com/)" for help.',
    choices: ['mit', 'apache-2.0', 'isc', 'gpl-3.0', 'none'],
    // when: ({contents}) => {
    //   if (contents[3]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'badge',
    message: 'Please add the badge you would like to use',
    default: 'None',
    // when: ({contents}) => {
    //   if (contents[4]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'features',
    message: 'List your features here if you would like to.',
    default: 'None',
    // when: ({contents}) => {
    //   if (contents[5]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'If you would like others to contribute, please leave guidelines here for how to do so.',
    default: 'If you would like to contribute please add repo to your GitHub account and create a pull request',
    // when: ({contents}) => {
    //   if (contents[6]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide them here.',
    default: 'npm test',
    // when: ({contents}) => {
    //   if (contents[7]) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter a good email address to be contacted at with any questions (Required)',
    validate: questions => {
      if (questions) {
        return true
      } else {
        console.log('please enter an email')
        return false
      }
    },
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?(Required)',
    validate: username => {
    if (username) {
      return true
    } else {
      console.log('Please enter a GitHub username')
      return false 
    }
  }
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'What is your GitHub repository name?(Required)',
    validate: repoName => {
      if (repoName) {
        return true
      } else {
        console.log('please enter a repo name')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'year',
    message: 'What is the current year? (Required)',
    validate: year => {
      if (year) {
        return true
      } else {
        console.log('please enter a year')
        return false
      }
    }
  },
]

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
