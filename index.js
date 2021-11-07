const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//  import additional classes
const inquirer = require("inquirer");
const path = require("path");
const render = require("./src/card-template");
const fs = require("fs");
const teamMembers = []
const idArray = []

menu = () => {
  
    
        inquirer.prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the employee name?",
            },
            {
                type: "input",
                name: "Id",
                message: "What is the employee's id?",
            },
            {
                type: "input",
                name: "Email",
                message: "What is the employee's email?",
            },
            {
                type: "input",
                name: "Role",
                message: "What is the employee's role?",
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.managerId, answers.email, answers.officeNumber);
            teamMembers.push(manager)
            idArray.push(answers.managerId)
            createTeam()
        })
}
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamChoice",
                message: "Who would you like to add to your team?",
                choices: ["Engineer", "Intern", "Manager", "I don't want any more team members"]
                // validation her
            },

        ])
        
      
    }
        // ]).then(userChoice => {
        //     switch (userChoice.teamChoice) {
        //         case "Engineer":
        //             addEngineer();
        //             break;
        //         case "Intern":
        //             addIntern();
        //         default:
        //             buildTeam();
        //     }
        //})
        function newEngineer () {
            inquirer.prompt(newEngineerPrompt).then(answers => {
                teamMembers.push(new Engineer(answers.name, answers.github, answers.email, answers.Id));
                // ask if they want to keep adding team members
                createTeam()
            })
        }
        
    
    
    function addIntern() {
        // prompt with questions for intern .then build intern
        const intern = new Intern(answers.name, answers.school, answers.email, answers.internId)
        teamMembers.push(intern)
        // adding intern to team
        idArray.push(answers.internId)
        // ask if they want to keep adding team members
        createTeam()
    }

    //    todo change to  a function that utilizes template.js
    // .then((answers) => {
    //     const htmlPageContent = generateHTML(answers);
    // },
    //     function writeToFile(fileName, render) {
    //         fs.writeFile(index.html, answers(render), (err) => err ?
    //             console.log(err) :
    //             console.log('Successfully created Team!'))
    //     },
    // ),

        // function menu() {
        //     inquirer.prompt(questions).then((answers) => {
        //         console.log(answers);
        //         writeFile("index.html", answers)
        //     })
        // },
        
    


menu();