const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card col" style="width: 18rem">
            <div class="card-header bg-primary">
            <h5>${manager.name}</h5> <br/>
            <h6>Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">"Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
            `;
        html.push(managerHtml); 
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card col" style="width: 18rem">
            <div class="card-header bg-primary">
            <h5>${engineer.name}</h5> </br>
            <h6>Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="http://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
                </ul>
            </div>
            `;
            html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card col" style="width: 18rem">
            <div class="card-header bg-primary">
            <h5>${intern.name}</h5> <br/>
            <h6>Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
            `;
            html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/css/stylesheet.css" />
    <title>Team Generator</title>
</head>
<body>
    <header class="text-center header bg-danger">
    <h1>The Team</h1>
    </header>
    <div class="row">
    <main> ${generateTeam(team)} </main>
    </div>
</body>
</html>
`;
}