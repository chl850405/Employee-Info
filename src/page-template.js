  // create the manager html
  const managerHTML = (manager) => {
    `  
<div class=" employee employee-card " style="width: 18rem;">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${manager.name}</h2>
      <h3 class="title h6"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${manager.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item office">Office number:${manager.officeNumber}</li>
      </ul>
    </div>
    </div>
    `;
  };
  // create the html for engineers
  module.exports = function (engineer){
    `  
    <div class="employee employee-card " style="width: 18rem">
    <div class="cardHeader text-white text-center bg-primary">
      <h2 class="title h6">${engineer.name}</h2>
      <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${engineer.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${engineer.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${engineer.email}"></a></li>
        <li class="list-group-item github">Github: github.com/${engineer.github}" target="_blank" 
      </ul>
    </div>
    </div>
    `;
  }

  // create the html for interns
  module.exports = function (intern) {
    `  
    <div class="employee employee-card " style="width: 18rem;">
    <div class="cardHeader bg-primary text-white text-center">
      <h2 class="title h6">${intern.name}</h2>
      <h3 class="title h6"><i class="fas fa-user-graduate mr-2"></i>${intern.role}</h3>
    </div>
    <div class="card-body border">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${intern.id}</li>
        <li class="list-group-item email">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item school">School:${intern.school}</li>
      </ul>
    </div>
    </div>
`;
  }


  // generate html page
  module.exports = function () {
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
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${managerHTML} 
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


