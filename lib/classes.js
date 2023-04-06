class Employee {
  // Constructor method that takes in a name, id, and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // returns the name of the employee
  getName() {
    return this.name;
  }
  // returns the ID of the employee
  getId() {
    return this.id;
  }
  // returns the email of the employee
  getEmail() {
    return this.email;
  }
  // returns the role of the employee
  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the super method to inherit the properties of the Employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
// returns the role of the manager
  getRole() {
    return "Manager";
  }
// returns the office number of the manager
  getOfficeNumber() {
    return this.officeNumber;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // inherit the properties of the Employee class
    super(name, id, email);
    this.github = github;
  }
// returns the role of the engineer
  getRole() {
    return "Engineer";
  }
// returns the github username of the engineer
  getGithub() {
    return this.github;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    // inherit the properties of the Employee class
    super(name, id, email);
    this.school = school;
  }
// returns the role of the intern
  getRole() {
    return "Intern";
  }
// returns the school of the intern
  getSchool() {
    return this.school;
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
