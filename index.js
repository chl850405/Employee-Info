const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const generatePage = require('./src/page-template');

const teamArray = [];


  const inquirer = require("inquirer");
  const fs = require('fs');
  const generatePage = require('./src/page-template');

  const managerInfo = () => {[

    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this team?', 
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter the manager's name!");
              return false; 
          }
      }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter manager ID', 
    validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log ("Please enter the manager's ID!");
            return false; 
        }
    }
},
      {
        type:'input',
        name:'email',
        message:'Pleasec enter manager email address (Required)',
        validate: emailInput=> {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter manager email!');
            return false;
          }
        }
      },
      {
        type:'input',
        name:'office',
        message:'What is the managers office number? (Required)',
        validate: officeInput=> {
            if (officeInput) {
            return true;
            } else {
            console.log('Please enter a office number!');
            return false;
          }
        }
      }
      .then(managerInput => {
        const {name, id, email, office} = managerInput;
        const manager = new Manager (name, id, email, office);

        teamArray.push(manager);
        console.log(manager);
      })
  
  ]};

  const employeeInfo = () => {[
    console.log(`
    ========================
    adding employees to team
    ========================
    `),

    {
      type: 'list',
      name: 'role',
      message: "Please choose your employee's role",
      choices: ['Engineer', 'Intern']
  },
  {
      type: 'input',
      name: 'name',
      message: "What's the name of the employee?", 
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter an employee's name!");
              return false; 
          }
      }
  },
  {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID.",
      validate: nameInput => {
          if  (isNaN(nameInput)) {
              console.log ("Please enter the employee's ID!")
              return false; 
          } else {
              return true;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: emailInput=> {
        if (emailInput) {
        return true;
        } else {
        console.log('Please enter employee email!');
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
          if (nameInput ) {
              return true;
          } else {
              console.log ("Please enter the employee's github username!")
          }
      }
  },
  {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter the intern's school!")
          }
      }
  },
  {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
  }
]}

.then(employeeData => {

  let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
  let employee; 

  if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

  } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);

      console.log(employee);
  }

  teamArray.push(employee); 

  if (confirmAddEmployee) {
      return addEmployee(teamArray); 
  } else {
      return teamArray;
  }
});

  inquirer.prompt(managerInfo)
.then(answers => {
  writeToFile('index.html', generatePage(answers))
})

inquirer.prompt(addEmployee)
.then(answers => {
  writeToFile('index.html', generatePage(answers))
})

addManager()
  .then(employeeInfo)
  .then(teamArray => {
    return generatePage(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
console.log(err);
  })
