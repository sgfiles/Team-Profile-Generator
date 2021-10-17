const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

test("Succesfully instantiates instance of Employee Class", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Dan";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})