
const Employee = require('../lib/Employee');
//  test("Successfully instantiates instance of Employee Class", () => {
//     const employee = new Employee();    
//     expect(employee).toEqual("object")
//    })

test("Successfully set a name via constructor arguments", () => {
    const name = "Virginia";
    const employee = new Employee(name);
    expect(employee.id).toEqual(this.name);
})
test("Successfully set an id via constructor arguments", () => {
    const id = "0127";
    const employee = new Employee(id);
    expect(employee.id).toEqual(this.id);
})
test("Successfully set email via constructor arguments", () => {
    const email = "virginia@email.com";
    const employee = new Employee(email);
    expect(employee.email).toEqual(this.email);
})