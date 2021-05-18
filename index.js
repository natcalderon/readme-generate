// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide your project's description"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide the installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the app usage"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the correct license:',
            choices: ['MIT', 'Apache', 'GPL-3.0', 'BSD-3', 'None']
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide the contributing parties"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide the project tests"
        },
        {
            type: "input",
            name: "username",
            message: "What is your github user name?"
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// Create a new directory 
// __dirname as the first argument and the name of the new directory as the second
    return fs.writeFile(path.join(__dirname, fileName), data, err => {
        console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
// Write the user response to a file    
        .then(response => {
            writeToFile('README.md', generateMarkdown(response));
            console.log('README success!')
        });
};

// Function call to initialize app
init();