// Import required modules
const { Manager, Engineer, Intern } = require("./lib/classes");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const outputHTML = require("./src/template.js");

// Set output path
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "output.html");

// Team object constructor
function Team() {
  this.teamProfile = [];
  this.getteamProfile = function () {
    return this.teamProfile;
  };
}

// Questions function using Inquirer module to prompt user with questions
async function questions() {
  const { employeeChoice } = await inquirer.prompt({
    type: "list",
    name: "employeeChoice",
    message: "Which type of employee would you like to add to the team?",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I finished creating my team",
    ],
  });
  
  // If user selects "Manager", ask questions specific to a manager and create new manager object
  if (employeeChoice === "Manager") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the manager's name",
        validate: (nameInput) =>
          !!nameInput || "At least one character must be entered!",
      },
      {
        type: "number",
        name: "ID",
        message: "Please enter the manager's employee ID",
        validate: (IDInput) =>
          !!IDInput || "Please enter a number greater than zero!",
      },
      {
        type: "input",
        name: "Email",
        message: "Please enter the manager's Email",
        validate: (EmailInput) =>
          !!EmailInput || "Please enter a valid Email!",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (officeNumberInput) =>
          !!officeNumberInput || "Please enter the correct office number!",
      },
    ]);

    const newManager = new Manager(
      answers.name,
      answers.ID,
      answers.Email,
      answers.officeNumber
    );
    // Add new manager object to the team profile
    this.teamProfile.push(newManager);
    // Sends user back to menu
    questions();
  } // If user selects "Engineer", ask questions specific to an engineer and create new engineer object
  else if (employeeChoice === "Engineer") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name",
        validate: (nameInput) =>
          !!nameInput || "At least one character must be entered!",
      },
      {
        type: "number",
        name: "ID",
        message: "Please enter the engineer's employee ID",
        validate: (IDInput) =>
          !!IDInput || "Please enter a number greater than zero!",
      },
      {
        type: "input",
        name: "Email",
        message: "Please enter the engineer's Email",
        validate: (EmailInput) =>
          !!EmailInput || "Please enter a valid Email!",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub username",
        validate: (githubInput) =>
          !!githubInput || "At least one character must be entered!",
      },
    ]);

    const newEngineer = new Engineer(
      answers.name,
      answers.ID,
      answers.Email,
      answers.github
    );
    // Add new engineer object to the team profile
    this.teamProfile.push(newEngineer);
    // Sends user back to menu
    questions();
  } // If user selects "Intern", ask questions specific to an intern and create new intern object
  else if (employeeChoice === "Intern") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the intern's name",
        validate: (nameInput) =>
          !!nameInput || "At least one character must be entered!",
      },
      {
        type: "number",
        name: "ID",
        message: "Please enter the intern's employee ID",
        validate: (IDInput) =>
          !!IDInput || "Please enter a number greater than zero!",
      },
      {
        type: "input",
        name: "Email",
        message: "Please enter the intern's Email",
        validate: (EmailInput) =>
          !!EmailInput || "Please enter a valid Email!",
      },
      {
        type: "input",
        name: "School",
        message: "Please enter the intern's School name",
        validate: (SchoolInput) =>
          !!SchoolInput || "At least one character must be entered!",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.ID,
      answers.Email,
      answers.School
    );
    // Add new intern object to the team profile
    this.teamProfile.push(newIntern);
    // Sends user back to menu
    questions();
  } // If user selects "I finished entering my team info", ends the questions and creates the page
  else if (employeeChoice === "I finished creating my team") {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, outputHTML(teamProfile), "utf-8");
    const pagehtml = outputHTML(this.getteamProfile());
    fs.writeFile("./dist/output.html", pagehtml, (err) => {
      if (err) throw new Error(err);

      console.log("Page created successfully!");
    });
  }
}

Team(questions());
