const createTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card employee-card">
    <div class="card-header">
         <h2 class=card-title">${manager.getName()}</h2>
         <h3 class="card-title"><i class="fas fa-mug mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${manager.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}
             </a></li>
             <li class="list-group-item">Office number: ${manager.getOfficeNumber()}"</li>
         </ul>
    </div>
    </div>
             `;
    };
    
    
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
         <h2 class=card-title">${engineer.getName()}</h2>
         <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${engineer.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}
             </a></li>
             <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}"
             target="_blank" rel="">${engineer.getGithub()}</a></li>
         </ul>
    </div>
    </div>
             `;
    };
    // create for intern
    const generateIntern = intern => {
        return ` 
        <div class=
        <div class="card-header">
         <h2 class=card-title">${intern.getName()}</h2>
         <h3 class="card-title"><i class="fas fa-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${intern.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}
             </a></li>
             <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
    </div>
    </div>
         `;
    };
    
       const html =[];
         html.push(Team
             .filter(employee => employee.getRole() == "Manager")
             .map(manager => generateManager(manager))
            );
    
         html.push(Team
            .filter(employee => employee.getRole() == "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join("")
            );
    
         html.push(Team
            .filter(employee => employee.getRole() == "Intern")
            .map(intern => generateIntern(intern))
            .join("")
             );
               
            return html.join("");    
}
//  export to generate a new page--to do enter html and bootstrap info
    module.exports = team => {
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link href="<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
             rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">">
            <link rel="stylesheet" href="/dist/style.css">
        </head>
        <body>
       <div class="container-fluid">
       <div class="row"><h1>My Team</h1></div>
       </div>
       <div class="container">${createTeam(team)}</div>
        </body>
        </html>`
    }
        



