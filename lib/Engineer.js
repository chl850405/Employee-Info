const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name , id , email) {
        super(name);
        super(id);
        super(email);

        this.github = github
    }
    getRole() {
        return `<i class="fas fa-glasses"></i>Engineer`
    }
    getGithub() {
        return `GitHub: https://github.com/${github}`
    }
}

module.exports = Engineer