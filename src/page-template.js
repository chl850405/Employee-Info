const generateTeam = team => {

  // create the manager html
  const generateManager = manager => {
    return `
    <div class=" employee employee-card " style="width: 18rem;">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${manager.getName()}</h2>
      <h3 class="title h6"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${manager.getId()}</li>
        <li class="list-group-item email">Email:${manager.getEmail()}</li>
        <li class="list-group-item office">Office number:${manager.getOfficeNumber()}</li>
      </ul>
    </div>
    </div>
    `;
};

// create the html for engineers
const generateEngineer = engineer => {
  return `
    <div class="employee employee-card " style="width: 18rem">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${engineer.getName()}</h2>
      <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${engineer.getId()}</li>
        <li class="list-group-item email">Email:${engineer.getEmail()}</li>
        <li class="list-group-item github">Github:<a href="https://github.com/${engineer.getGithub()}" target="_blank"</li>
      </ul>
    </div>
    </div>
        `;
  };  

     // create the html for interns
    const generateIntern = intern => {
      return `
    <div class="employee employee-card " style="width: 18rem;">
    <div class="cardHeader bg-primary text-white text-center">
      <h2 class="title h6">${intern.getName()}</h2>
      <h3 class="title h6"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${intern.getRole()}</li>
        <li class="list-group-item email">Email:${intern.getEmail()}</li>
        <li class="list-group-item school">School:${intern.getSchool()}</li>
      </ul>
    </div>
    </div>
`;
};
generateHTML = (data)
=> {
  // array for cards 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }
      // joining strings 
      const employeeCards = pageArray.join('')

      // return to generated page
      const generateTeam = generateTeamPage(employeeCards); 
      return generateTeam;
  
}
}

module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">
      <head> 
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">

      <!-- Bootstrap CSS -->
      <script src="https://kit.fontawesome.com/12ce71a7d2.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">

      <title>My Team</title>
      </head>
      <body>

      <div class="container-fluid d-flex bg-danger text-white" style="height: 100px">
        <div class="row justify-content-evenly align-self-center mx-auto">
        <h1> My Team </h1>
        </div>
      </div>
      
      <div class="container">
        <div class="row>
          <div d-flex teamArea col-12 justify-content-center" 
              ${generateTeam(team)}
              <div class="card-deck">
              </div>
          </div>
      </div>
  </div>
</body>
</html>
  `;
};
