const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber;
    }

    getRole() {
        return "Engineer"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Engineer;