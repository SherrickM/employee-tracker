const inquirer = require("inquirer");
require("console.table");
const db = require("./db");

function start() {
  inquirer
    .prompt([
      {
        name: "user_choice",
        type: "list",
        message: "Please select one of the following: ",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.user_choice) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        default:
          process.exit();
          break;
      }
    });
}

function viewAllDepartments() {
  db.returnAllDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function addDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What is the name of the department you are adding?",
    })
    .then((res) => {
      db.insertDepartment(res).then(() => start());
    });
}

function viewAllRoles() {
  db.returnAllRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function addRole() {
  db.returnAllDepartments().then(([data])=>{
     const departmentOption = data.map(({id, name})=>({
      name: name,
      value: id
     }));

     inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What is the name of the role you are adding?",
      }, 
      {
        name: "salary",
        type: "input",
        message: "What is the name of the department you are adding?",
      }, 
      {
        name: "department_id",
        type: "list",
        message: "What is the name of the department you are adding?",
        choices: departmentOption
      }
     ]).then((res)=>{
      db.insertRole(res).then(()=> start())
     })

  });
}
// Employee Functions

function viewAllEmployee() {
  db.returnAllEmployee()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}


function addEmployee(){
  inquirer
  .prompt([{
    
      type: "input",
      message: "Enter employee's first name:",
      name: "f_name"
  },
  {
      type: "input",
      message: "Enter employee's last name:",
      name: "l_name"
  },
  {
      type: "input",
      message: "Enter the role ID for employee:",
      name: "role_id"
  },
  {
      type: "input",
      message: "Enter the Manager ID for the employee:",
      name: "mgr_id"

  }])
  .then((res) => {
    db.addEmployee(res).then(() => start())
  });
};



start()

// 3 additinal functions view all emp add emp, update emp