//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Fulfilled this in for loop
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [Licenses](#Licenses)`
  } else return ""
}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'none') {
    return `Copyright ${data.year} [${data.username}]
    This product is licensed under the ${data.license} license`
  } else return ""
}

function tableOfContents(data) {
  let tableOfContents = ""
  if (data.contents) {
    for (const contents of data.contents) {
      tableOfContents += `* [${contents}](#${contents})\n`
    }
    return tableOfContents
  } else {
    return ""
  }
}


// functions to populate readme section titles if user selected them in table of contents
function installation(data) {
  if (data.installation) {
    return `## Installation
  ${data.installation}
  `
  } else {
    return ""
  }
}
function usage(data) {
  if (data.usage) {
    return `## Usage
  ${data.usage}
  `
  } else {
    return ""
  }
}
function credits(data) {
  if (data.credits) {
    return `## Credits
  ${data.credits}
  `
  } else {
    return ""
  }
}

function license(data) {
  if (data.license) {
    return `## License
  ${renderLicenseSection(data)}
  `
  } else {
    return ""
  }
}
function badge(data) {
  if (data.badge) {
    return `## Badge
  ${data.badge}
  `
  } else {
    return ""
  }
}
function features(data) {
  if (data.features) {
    return `## Features
  ${data.features}
  `
  } else {
    return ""
  }
}
function contribution(data) {
  if (data.contribution) {
    return `## Contribution
  ${data.contribution}
  `
  } else {
    return ""
  }
}
function tests(data) {
  if (data.tests) {
    return `## Tests
  ${data.tests}
  `
  } else {
    return ""
  }
}
function questions(data) {
  if (data.questions) {
    return `## Questions
  Profile Link: https://github.com/${data.username}
  For any questions or concerns, please contact ${data.questions} with any questions.`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Live URL
  https://${data.username}.github.io/${data.repoName}/

  ## Table of Contents
${tableOfContents(data)}

${installation(data)}
${usage(data)}
${credits(data)}
${license(data)}
${badge(data)}
${features(data)}
${contribution(data)}
${tests(data)}
${questions(data)}
`;
}

module.exports = generateMarkdown;


