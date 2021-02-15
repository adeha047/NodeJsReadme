const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([

        //added prompts for each question/section needed in the readme.md file. 

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },


        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of this project.',
        },


        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
        },

        {
            type: 'input',
            name: 'links',
            message: 'Please provide the links to this project',
        },

        {
            type: 'input',
            name: 'Usage',
            message: 'What is the usage of your project?',
        },

        {
            type: 'input',
            name: 'contributing parties',
            message: 'Were there any other contributing parties?',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please provide tests used in this project',
        },

        {
            type: 'list',
            message: 'Please choose a license for this application from the list.',
            name: 'license',
            choices: ['afl-3.0', 'mit', 'mpl-2.0'],
        },

        {
            type: 'input',
            name: 'Questions',
            message: 'What is your github username?',
        },

        {
            type: 'input',
            name: 'Questions',
            message: 'What is your email address?',
        },

    ])

    .then((response) =>{

        console.log(response)

            if(response.license === "mit"){
                // * [Questions](#)
                fs.writeFile("README.md", "* [license]", (err) => {
                  if(err) console.error(err);
                  console.log("Written to file...");
                });

            }

    });



//     GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README