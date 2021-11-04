
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require('./src/page-template');
const {writeFile} = require('./utils/generate-site');



const promptManager = () => {

return inquirer
.prompt([
{
    type: 'list',
    name: 'role',
    message: "Please choose your employee's role",
    choices: ['Manager', 'other']
    },

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
    },
])
}
const promptEmployee = addEmployeeData => {
console.log(`
========================
adding employees to team
========================
`);

if(!addEmployeeData.employees) {
    addEmployeeData.employees = [];
}

return inquirer
.prompt ([
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
])
// function employeeCard() {
//     return new Promise(function(resolve, reject) {
//         const name = member.getName();
//         const role = member.getRole();
//         const id = member.getId();
//         const email = member.getEmail();
//         let data = "";
//         if (role === "Engineer") {
//             const gitHub = member.getGithub();
//             data = `  <div class="container d-flex flex-wrap">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <div class="card-top bg-primary">
//                     <h5 class="card-title text-center">${name}</h5>
//                     <h6 class="card-subtitle mb-2 text-center">${position}</h6>
//                     <ul class="list-group list-group-flush">
//                     </div>
//                     <li class="list-group-item">ID:${id}</li>
//                     <li class="list-group-item">Email:${email}</li>
//                     <li class="list-group-item">${gitHub}</li>
//                     </ul>
//                 </div>
//             </div>;`
//         } else if (role === "Intern") {
//             const school = member.getSchool();
//             data = `  <div class="container d-flex flex-wrap">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <div class="card-top bg-primary">
//                     <h5 class="card-title text-center">${name}</h5>
//                     <h6 class="card-subtitle mb-2 text-center">${position}</h6>
//                     <ul class="list-group list-group-flush">
//                     </div>
//                     <li class="list-group-item">ID:${id}</li>
//                     <li class="list-group-item">Email:${email}</li>
//                     <li class="list-group-item">${school}</li>
//                     </ul>
//                 </div>
//             </div>`;
//         } else {
//             const officeNumber = member.getOfficeNumber();
//             data = `<  <div class="container d-flex flex-wrap">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <div class="card-top bg-primary">
//                     <h5 class="card-title text-center">${name}</h5>
//                     <h6 class="card-subtitle mb-2 text-center">${position}</h6>
//                     <ul class="list-group list-group-flush">
//                     </div>
//                     <li class="list-group-item">ID:${id}</li>
//                     <li class="list-group-item">Email:${email}</li>
//                     <li class="list-group-item">${'officeNumber'}</li>
//                     </ul>
//                 </div>
//             </div>`
//         }
//         console.log("adding team member");
//         fs.appendFile("./output/team.html", data, function (err) {
//             if (err) {
//                 return reject(err);
//             };
//             return resolve();
//         });
//     });

// // .then(employeeData => {

// // let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
// // let employee; 

// // if (role === "Engineer") {
// //     employee = new Engineer (name, id, email, github);

// //     console.log(employee);

// // } else if (role === "Intern") {
// //     employee = new Intern (name, id, email, school);

// //     console.log(employee);
// // }

// // teamArray.push(employee); 

// // if (confirmAddEmployee) {
// //     return addEmployee(teamArray); 
// // } else {
// //     return teamArray;
// // }
// // })

// ]

// inquirer.prompt(managerInfo)
// .then(answers => {
// writeToFile('index.html', generatePage(answers))

// });

// inquirer.prompt(employeeInfo)
// .then(answers => {
// writeToFile('index.html', generatePage(answers))
// });

// function writeToFile(fileName, data) {
// fs.writeFile(fileName,data, err => {
//     if (err) throw err;

// console.log('My team complete! Check out html.index to see the output!');
// });
// }
.then(employeeData => {
    addEmployeeData.employees.push(employeeData);
    if (employeeData.confirmAddemployee) {
    return promptEmployee(employeeData);
} else {
    return employeeData;
}
});

};

promptManager()
    .then(promptEmployee)
    .then(employeeData => {
    return generatePage(employeeData);
    })
    .then(pageHTML => {
    return writeFile(pageHTML);
    })
    // .then(writeFileResponse => {
    // console.log(writeFileResponse);
    // return copyFile();
    // })
    // .then(copyFileResponse => {
    // console.log(copyFileResponse);
    // })
    .catch(err => {
    console.log(err);
    });