const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateSite = require('./src/generate-site.js')
const jest = require('jest');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee Id for the manager?",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee Id of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the email for the manager.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email for the manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number for the manager',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add an Engineer":
                    promptEngineer();
                    break;
                case "Add an Intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log('Add a New Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee Id for the engineer??",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee Id of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the email for the engineer.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email for the engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter the Github user name for the engineer',
            validate: gitHub => {
                if (gitHub) {
                    return true;
                } else {
                    console.log('Please enter Github user name for engineer.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log('Add a New Intern');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee Id for the intern??",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee Id of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the email for the intern.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email for the intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the name of the school the intern attends',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the name of the school the intern attends');
                    return false;
                }
            }
        }
    ]).then(answer => {
        console.log(answers);
        const intern = new Intern(answer.name, answer.employeeId, answer.email, answer.school);
        teamMembers.push(intern);
        promptMenu();
    })
    };

    const buildTeam = () => {
        console.log('Build the Team');

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
    }

    promptManager();

// use inquirer to prompt for team member class information

// take answers and push to class js

// generate class info into html site that links to stylesheet

