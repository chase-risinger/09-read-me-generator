// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project Title?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the Description of the project?',

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add any installation instructions',

        },
        {
            type: 'input',
            name: 'examples',
            message: 'Provide instructions and examples for use',

        },
        {
            type: 'input',
            name: 'collab',
            message: 'List your collaborators credits',

        },
        {
            type: 'list',
            name: 'license',
            message: 'Specify the license',
            choices: ['MIT', 'Mozilla', 'ISC', 'IBM', 'Perl']

        },
        {
            type: 'input',
            name: 'features',
            message: 'what features does your project contain?',

        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can other developers contribute?',
        },
        {

            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',

        }
    ]).then(data => fs.writeFileSync('./NEWREADME.md', generateMarkdown(data), err => {

    }))

};
promptUser()
// TODO: Create a function to write README file

//write file to NEWREADME.md
/* const appendFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./NEWREADME.md', generateMarkdown, err => {
            //iff there's an error, reject promise and send error to catch method
            if (err) {
                reject(err);
                //return out of function to make sure the promise doesn't complete
                return;
            }

            //if everything works, resolve the promise and send the successful data to .then
            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
}; */


// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

