const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site.js')

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

var manager = [];
var engineer = [];
var intern = [];
var teamArray = {manager, engineer, intern};


const promptQuestions = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Team member role:",
            choices: ['Manager', 'Engineer', 'Intern', 'Complete']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter team memeber's id (if applicable):",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team member's email:",
        },   
    ])
    .then (({ role, name,id, email }) => {
        if (role === 'Manager') {
          return inquirer.prompt ([
            
            {
                type: 'number',
                name: 'phone',
                message: "Enter team manager's office number:",
            },
            {   
                name: "additionalMem",
                message: "Do you want to add another team member?",
                type: "confirm",
                default: false
            }
          ])
          .then (({phone, additionalMem}) => {
              manager.push(new Manager(name, id, email, phone));
              console.log(teamArray)
              if (additionalMem) {
                  return promptQuestions();
              }
              
          });
          
        } else if (role === 'Engineer') {
            return inquirer.prompt ([
                {
                    type: 'input',
                    name: 'git',
                    message: "What is your Engineer's github username?",
                },
                {   
                    name: "additionalMem",
                    message: "Do you want to add another team member?",
                    type: "confirm",
                    default: false
                }
            ])
                .then (({git, additionalMem}) => {
                    engineer.push(new Engineer(name, id, email, git));
                    console.log(teamArray);
                    if (additionalMem) {
                        return promptQuestions();
                    }
                });

        } else if (role === 'Intern') {
                return inquirer.prompt ([
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is your Intern's school name?",
                    },
                    {   
                        name: "additionalMem",
                        message: "Do you want to add another team member?",
                        type: "confirm",
                        default: false
                    }
                ])
                .then (({school, additionalMem}) => {
                    intern.push(new Intern(name, id, email, school));
                    console.log(teamArray);
                    if (additionalMem) {
                        return promptQuestions();
                    }
                })
        }
    })
};


promptQuestions()
    .then(teamData => {
        return generatePage(teamArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    });
  