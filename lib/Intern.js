const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name , id , email) {
        super(name);
        super(id);
        super(email);

        this.school= school
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return `School:${school}`
    }
}

module.exports = Intern