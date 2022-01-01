const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name);
    super(id);
    super(email);

    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
