const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name , id , email) {
        super(name);
        super(id);
        super(email);

        this.school= school
    }
    getRole() {
        return `<i class="fas fa-user-graduate"></i>Intern`
    }
    getSchool() {
        return `School:${school}`
    }
}

module.exports = Intern