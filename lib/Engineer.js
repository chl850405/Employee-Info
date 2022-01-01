const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name , id , email, github) {
        super(name);
        super(id);
        super(email);

        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer