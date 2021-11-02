const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name , id , email) {
        super(name);
        super(id);
        super(email);

        this.github = github
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return `GitHub: https://github.com/${github}`
    }
}

module.exports = Engineer