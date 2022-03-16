//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [Licenses](#Licenses)`
  } else return ""
}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `Copyright ${year} [${data.username}]`
  } else return ""
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
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  * [Features](#Features)
  * [Contribution](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}

  ## Credits 
  ${data.credits}

  ## Licenses
  ${renderLicenseSection(data.license)}
  This product is licensed under the ${data.license} license
  
  ## Features
  ${data.features}
  
  ## Contributions
  Contributors: ${data.contribution}
  
  ## Tests
  ${data.tests}

  ## Questions
  Profile Link: https://github.com/${data.username}
  For any questions or concerns, please contact ${data.questions} with any questions.

`;
}

module.exports = generateMarkdown;


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
