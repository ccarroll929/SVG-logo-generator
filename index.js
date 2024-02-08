const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const setShape = require('./lib/setShape.js')

// Creating new SVG file using input from inquirer
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

// Initialize questions then createLogo with responses and catch any errors
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();
