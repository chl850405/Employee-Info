const fs = require('fs');
const generatePage = require('./src/page-template');

const myTeamDataArgs = process.argv.slice(2);

const [name, position, id, email, github, school, officeNumber] = myTeamDataArgs;

// const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', generatePage(name, position, id, email, github, school, officeNumber), err => {
    if (err) throw err;

    console.log('My Team complete! Check out index.html to see the output!');
});