// TODO: make the readme generate if ToC is not generated. Create for loop for ToC. fix the undefined issue when some contents are not added.


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
    return `Copyright ${data.year} [${data.username}]`
  } else return ""
}


// Functions to populate user input into Table of Contents based on choices chosen
function renderToc(data) {
  if (data.confirmContents) {
    return `## Table of Contents`
  } else {
    return ""
  }
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




// function installation(data) {
//   if (data.contents[0]) {
//     return `* [${data.contents[0]}](#${data.contents[0]})`
//   } else {
//     return ""
//   }
// }
// function usage(data) {
//   if (data.contents[1]) {
//     return `* [${data.contents[1]}](#${data.contents[1]})`
//   } else {
//     return ""
//   }
// }
// function credits(data) {
//   if (data.contents[2]) {
//     return `* [${data.contents[2]}](#${data.contents[2]})`
//   } else {
//     return ""
//   }
// }

// function licenses(data) {
//   if (data.contents[3]) {
//     return `* [${data.contents[3]}](#${data.contents[3]})`
//   } else {
//     return ""
//   }
// }
// function badge(data) {
//   if (data.contents[4]) {
//     return `* [${data.contents[4]}](#${data.contents[4]})`
//   } else {
//     return ""
//   }
// }
// function features(data) {
//   if (data.contents[5]) {
//     return `* [${data.contents[5]}](#${data.contents[5]})`
//   } else {
//     return ""
//   }
// }
// function contribution(data) {
//   if (data.contents[6]) {
//     return `* [${data.contents[6]}](#${data.contents[6]})`
//   } else {
//     return ""
//   }
// }
// function tests(data) {
//   if (data.contents[7]) {
//     return `* [${data.contents[7]}](#${data.contents[7]})`
//   } else {
//     return ""
//   }
// }
// function questions(data) {
//   if (data.contents[8]) {
//     return `* [${data.contents[8]}](#${data.contents[8]})`
//   } else {
//     return ""
//   }
// }




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


// ${installationTitle(data)}
// ${usageTitle(data)}
// ${creditsTitle(data)} 

// ${licensesTitle(data)}
// ${badgeTitle(data)}
// ${featuresTitle(data)}
// ${contributionTitle(data)}
// ${testsTitle(data)}
// ${questionsTitle(data)}











//displayTitle = () => {
  // write a function that will only display the table of contents selected in the user prompt
//}



// *[${data.contents.choices[0]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[0]})
// *[${data.contents.choices[1]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[1]})
// *[${data.contents.choices[2]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[2]})
// *[${data.contents.choices[3]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[3]})
// *[${data.contents.choices[4]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[4]})
// *[${data.contents.choices[5]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[5]})
// *[${data.contents.choices[6]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[6]})
// *[${data.contents.choices[7]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[7]})
// *[${data.contents.choices[8]}](https://github.com/${data.username}/${data.repoName}#${data.contents.choices[8]})


// * [${data.contents[1]}](#${data.contents[1]})
// * [${data.contents[2]}](#${data.contents[2]})
// * [${data.contents[3]}](#${data.contents[3]})
// * [${data.contents[4]}](#${data.contents[4]})
// * [${data.contents[5]}](#${data.contents[5]})
// * [${data.contents[6]}](#${data.contents[6]})
// * [${data.contents[7]}](#${data.contents[7]})
// * [${data.contents[8]}](#${data.contents[8]})

