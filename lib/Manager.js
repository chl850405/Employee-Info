const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name , id , email) {
        super(name);
        super(id);
        super(email);

        this.office= office
    }
    getRole() {
        return 'Manager'
    }
    getGithub() {
        return `Office: ${office}`
    }
}

module.exports = Manager