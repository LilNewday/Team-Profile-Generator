const { Engineer, Intern, Manager } = require("../lib/classes");

// Creates the manager card
const generateManager = (manager) => {
  return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `;
};

// Creates the engineer card
const generateEngineer = (engineer) => {
  return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-wrench mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
  `;
};

// Creates the intern card
const generateIntern = (intern) => {
  return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  `;
};

// Creates the team
const generateTeam = (team) => {
  const manager = team
    .filter((employee) => employee instanceof Manager)
    .map((manager) => generateManager(manager))
    .join("");
  const engineer = team
    .filter((employee) => employee instanceof Engineer)
    .map((engineer) => generateEngineer(engineer))
    .join("");
  const intern = team
    .filter((employee) => employee instanceof Intern)
    .map((intern) => generateIntern(intern))
    .join("");
  return manager + engineer + intern;
};

// Exports the team
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="output.css">
        </head>
        
        <body>
            <header class="container-fluid">
                <div class="row">
                    <div class="col-12 p-5 mb-3 bg-danger text-white">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </header>
            <div class="container my-5">
                <div class="row">
                    <div class="team-cards">
                        ${generateTeam(team)}
                    </div>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </body>
        </html>
            `;
};
