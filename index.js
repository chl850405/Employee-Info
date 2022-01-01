const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const role = ( Engineer, Intern, Manager)

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

const promptTeam = () => {
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
          message: "Please enter manager ID",
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
          message: "Please enter manager email address (Required)",
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
          message: "What is the managers office number? (Required)",
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
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        promptTeam();
      });
  }

  const createTeam = () => {
    console.log(`
    ========================
    adding employees to team
    ========================
    `);

    if (!addEmployeeData.employees) {
      addEmployeeData.employees = [];
    }

    return inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern", "No more team members"],
      
        if (role = "Engineer") {
          addEngineer()
          }, else (role = "Intern") {
            addIntern() 
        } 
      }    
  ])

  function addEngineer() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter employee email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
  },

    function addIntern () {
      inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What's the name of the employee?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter an employee's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the employee's ID.",
          validate: (nameInput) => {
            if (isNaN(nameInput)) {
              console.log("Please enter the employee's ID!");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee's email.",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter employee email!");
              return false;
            }
          }
        },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
},
}
//   promptManager()
//     .then(promptEmployee)
//     .then((addEmployeeData) => {
//       promptEmployee.employees.push(addEmployeeData);
//       if (addEmployeeData.confirmAddemployee) {
//         return promptEmployee(addEmployeeData);
//       } else {
//         return addEmployeeData;
//       }
//     })
//     .then((pageHTML) => {
//       return writeFile(pageHTML);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   promptManager();
// };


function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

},
promptManager();
}
}
promptTeam();
