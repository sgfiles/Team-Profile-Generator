const Employee = require('../lib/Employee');
const Intern = require("../lib/Intern");

// test("Successfully instantiates instance of Intern Class", () => {
//     const intern = new Intern();    
//     expect(typeof(Intern).toBe("object"));
//    })

test("Successfully set a name via constructor arguments", () => {
    const name = "Lynette";
    const intern = new Intern(name);
    expect(Intern.id).toEqual(this.name);
})
test("Successfully set an id via constructor arguments", () => {
    const id = "0725";
    const intern = new Intern(id);
    expect(Intern.id).toEqual(this.id);
})
test("Successfully set email via constructor arguments", () => {
    const email = "lynette@email.com";
    const intern = new Intern(email);
    expect(Intern.email).toEqual(this.email);
})
test("Successfully set school via constructor arguments", () =>{
    const school = "UCF";
    const intern = new Intern(school);
    expect(Intern.school).toEqual(this.school)
})