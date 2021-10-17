const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email);
        this.college;
    }

    getRole() {
        return "Intern"
    }

    getCollege() {
        return this.college;
    }
}

module.exports = Intern;