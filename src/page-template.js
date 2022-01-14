class PageTmpl {
  constructor(data) {
    this.employees = data;
  }
  
  myTeam(employee) {
    return `<div class="employee employee-card" style="width: 18rem">
  <div class="cardHeader text-white text-center bg-primary">
    <h2 class="title h6">${employee.name}</h2>
    <h3 class="title h6"><i class="fas fa-glasses mr-2"></i>${employee.getRole()}</h3>
  </div>
  <div class="card-body border">
    <ul class="list-group list-group-flush">
      <li class="list-group-item id">ID:${employee.id}</li>
      <li class="list-group-item email">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>
      ${employee.office ? `<li class="list-group-item office">Office number:${employee.office}</li>` : ""}
      ${employee.github ? `<li class="list-group-item github ">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>` : ""}
      ${employee.school ? `<li class="list-group-item school">School:${employee.school}</li>` : ""}
    </ul>
  </div>
  </div>
  `;
  }
  
  generateHTML() {
    // array for cards
    let cardArray = [];
    
    for (let i = 0; i < this.employees.length; i++) {
      const employee = this.employees[i];
      console.log(this.employees);
      console.log(employee);
      // const role = employee.getRole();
      const managerCard = this.myTeam(employee);
      cardArray.push(managerCard);
    }
    // joining cards
    const employeeCards = cardArray.join('')
    
    //return to generated page
    return this.pageStruct(employeeCards);
  }
  
  pageStruct(innerHtml) {
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
              ${innerHtml}
          </div>
      </div>
  </main>
  
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
  }
}

// generate html page
module.exports = PageTmpl;
