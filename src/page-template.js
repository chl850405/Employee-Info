const myTeam = () => {
  
  function managerHTML(name, role, id, email, office) {
  return `<div class="employee employee-card" style="width: 18rem">
  <div class="cardHeader text-white text-center bg-primary">
    <h2 class="title h6">${name}</h2>
    <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${role}</h3>
  </div>
  <div class="card-body border">
    <ul class="list-group list-group-flush">
      <li class="list-group-item id">ID:${id}</li>
      <li class="list-group-item email">Email:<a href="mailto:${email}"></a></li>
      <li class="list-group-item office">Office number:${office}</li>
    </ul>
  </div>
  </div>
  `;
}
//create the html for engineers
function engineerHTML(name, role, id, email, github){
  return `<div class="employee employee-card" style="width: 18rem">
  <div class="cardHeader text-white text-center bg-primary">
    <h2 class="title h6">${name}</h2>
    <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${role}</h3>
  </div>
  <div class="card-body border">
    <ul class="list-group list-group-flush">
      <li class="list-group-item id">ID:${id}</li>
      <li class="list-group-item email">Email:<a href="mailto:${email}"></a></li>
      <li class="list-group-item github">Github: github.com/${github}" target="_blank" 
    </ul>
  </div>
  </div>
  `}
//create the html for interns
function internHTML(name, role, id, email, school) {
  return `<div class="employee employee-card" style="width: 18rem">
  <div class="cardHeader text-white text-center bg-primary">
    <h2 class="title h6">${name}</h2>
    <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${role}</h3>
  </div>
  <div class="card-body border">
    <ul class="list-group list-group-flush">
      <li class="list-group-item id">ID:${id}</li>
      <li class="list-group-item email">Email:<a href="mailto:${email}"></a></li>
      <li class="list-group-item school">School:${school}</li>
    </ul>
  </div>
  </div>
`};

generateHTML = (data) => {
  // array for cards 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'Manager') {
          const managerCard = managerHTML();

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
        const engineerCard = engineerHTML();
    
          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === `'${engineer}', 'name', 'role', 'id', 'email', 'school'`) {
          const internCard = internHTML();

          pageArray.push(internCard);
      }

  }
      // joining strings 
      const employeeCards = pageArray.join('')

      //return to generated page
      const generateTeam = generateTeam(employeeCards); 
      return generateTeam;
}
}
// generate html page
module.exports = (myTeam) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
      <nav class="navbar" id="navbar">
          <span class="navbar-brand mb-0 h1 w-100 text-center bg-danger" id="navbar-text">My Team</span>
      </nav>
  </header>
  <main>
      <div class="container">
          <div class="row justify-content-center" id="team-cards">
              <!--Team Cards-->
              ${myTeam}
          </div>
      </div>
  </main>
  
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
};


