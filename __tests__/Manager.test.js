const Employee = require('../lib/Employee');
const Manager = require("../lib/Manager");

// test("Successfully instantiates instance of Manager Class", () => {
//     const manager = new Manager();    
//     expect(manager).toBe("Object");
//    })

test("Successfully set a name via constructor arguments", () => {
    const name = "Angelina";
    const manager = new Manager(name);
    expect(manager.id).toEqual(this.name);
})
test("Successfully set an id via constructor arguments", () => {
    const id = "1223";
    const manager = new Manager(id);
    expect(manager.id).toEqual(this.id);
})
test("Successfully set email via constructor arguments", () => {
    const email = "angelina@email.com";
    const manager = new Manager(email);
    expect(manager.email).toEqual(this.email);
})
test("Successfully sets officeNumber via constructor arguments", () => {
    const officeNumber = "23";
    const manager = new Manager(officeNumber);
    expect(manager.officeNumber).toEqual(this.officeNumber);
})