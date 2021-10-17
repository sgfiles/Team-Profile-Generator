const Employee = require('../lib/Employee');
const Engineer = require("../lib/Engineer");

// test("Successfully instantiates instance of Engineer Class", () => {
//     const engineer = new Engineer();    
//     expect(engineer).toEqual("Object");
//    })

test("Successfully set a name via constructor arguments", () => {
    const name = "David";
    const engineer = new Engineer(name);
    expect(engineer.id).toEqual(this.name);
})
test("Successfully set an id via constructor arguments", () => {
    const id = "1206";
    const engineer = new Engineer(id);
    expect(engineer.id).toEqual(this.id);
})
test("Successfully set email via constructor arguments", () => {
    const email = "david@email.com";
    const engineer = new Engineer(email);
    expect(engineer.email).toEqual(this.email);
})
test("Successfully sets github via constructor arguments", () => {
    const github = "david12";
    const engineer = new Engineer(github);
    expect(engineer.github).toEqual(this.github);
})
