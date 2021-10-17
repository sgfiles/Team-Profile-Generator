const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//  import additional classes
const inquirer = require("inquirer");
const fs = require("fs");


menu = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the managers name",
            // validation her
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
            // validation here
        },
        {
            type: "input",
            name:"email",
            message: "What is the manager's email?",
            // validation here
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
            // validation here
        },
    ]).then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
    }).then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
    }).then(({name, id, email, school}) => {
        const intern = new intern(name, id, email, school);
        console.log(intern)
    })
}
menu();
