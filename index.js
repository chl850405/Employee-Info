function init() {
    import 'bootstrap';
    
    const inquirer = require("inquirer");
    const fs = require('fs');
    const generateMarkdown = require('./utils/generateMarkdown.js')

    const myTeam = [
        {


        }
    ]



    inquirer.prompt(myTeam)
.then(answers => {
    writeToFile('index.html', generateMarkdown(answers))
})
// writeToFile('README.md',)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) throw err;

    console.log('README.md complete! Check out README.md to see the output!');
    });
}
}

init()