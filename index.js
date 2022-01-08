const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(OUTPUT_DIR, "index.html");

const generatePage = require("./src/page-template.js");

const employees = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager ID.",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager email address.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter manager email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "What is the managers office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter a office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      employees.push(manager);
      employees.push(answers.managerId);
      //initiates createTeam() function
      createTeam();
    });
};

const createTeam = () => {
  console.log(`
    ========================
    adding employees to team
    ========================
    `);
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a team member?",
        name: "role",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then(({ role }) => {
      if (role === "Engineer") {
        //initiates addEngineer() function when selected
        addEngineer();
      } else if (role === "Intern") {
        //initiates addIntern() function when selected
        addIntern();
      } 
       //Exit the inquirer
      else {
        //writes the html
        const html = generatePage();
        fs.writeFile(distPath, html, function (err) {
            if (err) {
                return console.log(err);
            };

        });
        console.log("Team successfully created!");
      }
    });
};

//add engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the engineer?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an engineers's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the engineer's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineers's github username.",
      },
    ]).then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      employees.push(engineer);
      employees.push(answers.engineerId);

    });
    //initiates createTeam() function
    createTeam();
}

//add intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the intern?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an interns's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the intern's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the interns's email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school.",
      },
    ])
    //new Intern includes the answers from above prompts
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      employees.push(intern);
      employees.push(answers.internId);
    });
    //initiates createTeam() function
      createTeam();
}
//initiates promptManager() function
promptManager()

