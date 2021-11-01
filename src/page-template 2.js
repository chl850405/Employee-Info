  const generatePage = (name, position, id, email, github, school, officeNumber) => {
  return `
  <!doctype html>
  <html lang="en">
      <head> 
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">

      <!-- Bootstrap CSS -->
      <script src="https://kit.fontawesome.com/12ce71a7d2.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="./css/style.css>

      <title>My Team</title>
      </head>
      <body>

      <div class="container-fluid bg-danger text-white text-center d-flex justify-content-evenly align-items-center" style="height: 100px">
        <h1> My Team </h1>
      </div>
      
      <div class="container d-flex justify-content-around"

      <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="card-top bg-primary">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
            <ul class="list-group list-group-flush">
            </div>
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email:${email}</li>
              <li class="list-group-item">${github} ${school} ${officeNumber}</li>
            </ul>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
      <div class="card-body">
          <div class="card-top bg-primary">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
          <ul class="list-group list-group-flush">
          </div>
            <li class="list-group-item">ID:${id}</li>
            <li class="list-group-item">Email:${email}</li>
            <li class="list-group-item">${github} ${school} ${officeNumber}</li>
          </ul>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-top bg-primary">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
        <ul class="list-group list-group-flush">
        </div>
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">Email:${email}</li>
          <li class="list-group-item">${github} ${school} ${officeNumber}</li>
        </ul>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
      <div class="card-top bg-primary">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
      <ul class="list-group list-group-flush">
      </div>
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">Email:${email}</li>
        <li class="list-group-item">${github} ${school} ${officeNumber}</li>
      </ul>
  </div>
</div>
      </div>
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
  </html> 
  `;
  };

module.exports = generatePage;