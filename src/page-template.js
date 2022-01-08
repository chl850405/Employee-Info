const generateTeam = () => {
  const Engineer = require("../lib/Engineer");
  const Intern = require("../lib/Intern");
  const Manager = require("../lib/Manager");
  // create the manager html
  module.exports = () => {
    return `
    <div class=" employee employee-card " style="width: 18rem;">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${Manager.getName()}</h2>
      <h3 class="title h6"><i class="fas fa-mug-hot mr-2"></i>${Manager.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${Manager.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${Manager.email}">${Manager.email}</a></li>
        <li class="list-group-item office">Office number:${Manager.officeNumber}</li>
      </ul>
    </div>
    </div>
    `;
  };

  // create the html for engineers
  module.exports = () => {
    return `
    <div class="employee employee-card " style="width: 18rem">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${Engineer.name}</h2>
      <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${Engineer.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${Engineer.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${Engineer.email}"></a></li>
        <li class="list-group-item github">Github: github.com/${Engineer.github}" target="_blank" 
      </ul>
    </div>
    </div>
        `;
  };

  // create the html for interns
  module.exports = () => {
    return `
    <div class="employee employee-card " style="width: 18rem;">
    <div class="cardHeader bg-primary text-white text-center">
      <h2 class="title h6">${Intern.name}</h2>
      <h3 class="title h6"><i class="fas fa-user-graduate mr-2"></i>${Intern.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${Intern.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${Intern.email}">${Intern.email}</a></li>
        <li class="list-group-item school">School:${Intern.school}</li>
      </ul>
    </div>
    </div>
`;
  };
};

module.exports = () => {
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
          <div class="card-deck">
              ${generateTeam()}
              </div>
          </div>
      </div>
      
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
</body>
</html>
  `;
};
generateTeam();
