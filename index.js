const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// const Employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
var teamArray = [];


const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Add a team member:",
            choices: ['Manager', 'Engineer', 'Intern', 'No, thank you']
        }
    ])
    .then (function(member) {
        if (member.role === 'Manager') {
          inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "Enter team manager's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter team manager's employee id (if applicable)",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter team manager's email:",
            },   
            {
                type: 'number',
                name: 'phone',
                message: "Enter team manager's office number:",
            }
          ])
          .then (function(mgrRole) {
            //   var newMgr = new Manager(mgrRole.name, mgrRole.id, mgrRole.email, mgrRole.phone)
            //   teamArray.push(newMgr);
              console.log(mgrRole)
              addMember();
          });
          
        } else if (member.role === 'Engineer') {
            inquirer.prompt ([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your Engineer's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your Engineer's ID?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your Engineer's email?",
                },
                {
                    type: 'input',
                    name: 'git',
                    message: "What is your Engineer's github username?",
                }
            ])
                .then (function(engRole) {
                    // var newEng = new Engineer(engRole.name, engRole.id, engRole.email, engRole.git)
                    // teamArray.push(newEng);
                    console.log(engRole);
                    addMember();
                });

        } else if (member.role === 'Intern') {
                inquirer.prompt ([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is your Intern's name?",
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is your Intern's ID?",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is your Intern's email?",
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is your Intern's school name?",
                    },
                ])
                .then (function(intRole) {
                    // var newInt = new Intern(intRole.name, intRole.id, intRole.email, intRole.school)
                    // teamArray.push(newInt);
                    console.log(intRole);
                    addMember();
                });
        }
       
    });
}; 

function addMember () {
    inquirer.prompt([
    {   
        name: "additionalMem",
        message: "Do you want to add another team member?",
        type: "confirm",
        default: false
    }   
    ])
    .then(function(addMore){
        if(addMore.additionalMem) {
            return promptQuestions();
        }  
    });
}

promptQuestions()
    .then(memberData => {
        return generatePage(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    });