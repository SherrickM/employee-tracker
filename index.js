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
          "add a employee",
          "update an employee role",
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
          viewAllEmployee();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add a employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployee();
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
  db.returnAllDepartments().then(([data]) => {
    const departmentOption = data.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the name of the role you are adding?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary?",
        },
        {
          name: "department_id",
          type: "list",
          message: "What is the name of the department you are adding?",
          choices: departmentOption,
        },
      ])
      .then((res) => {
        db.insertRole(res).then(() => start());
      });
  });
}
// Employee Functions

function viewAllEmployee() {
  db.returnAllEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function addEmployee() {
  db.returnAllRoles().then(([roles]) => {
    const roleChoices = roles.map(({ title, id }) => ({
      name: title,
      value: id,
    }));

    db.returnAllEmployees().then(([emps]) => {
      const managerChoices = emps.map(({ first_name, last_name, id }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
      }));

      managerChoices.unshift({ name: "None", value: null });

      inquirer
        .prompt([
          {
            type: "input",
            message: "Enter employee's first name:",
            name: "first_name",
          },
          {
            type: "input",
            message: "Enter employee's last name:",
            name: "last_name",
          },
          {
            type: "list",
            message: "please select the role for this Employee",
            name: "role_id",
            choices: roleChoices,
          },
          {
            type: "list",
            message: "Please select the manager for this Employee:",
            name: "manager_id",
            choices: managerChoices,
          },
        ])
        .then((res) => {
          db.insertEmployee(res).then(() => start());
        });
    });
  });
}

function updateEmployee() {
  db.returnAllEmployees().then(([emps]) => {
    const employeeChoices = emps.map(({ first_name, last_name, id }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    db.returnAllRoles().then(([roles])=>{

      const roleChoices = roles.map(({ title, id }) => ({
        name: title,
        value: id,
      }));

      inquirer.prompt([
        {
          name: "employee_id",
          type: "list",
          message: "What employee would you like to update?",
          choices: employeeChoices,
        },
        {
          name: "role_id",
          type: "list",
          message: "What is thier new role?",
          choices: roleChoices,
        }

      ]).then((res)=> {
        const emp = res.employee_id
        const role = res.role_id

        db.updateEmployee(emp,role).then(() => start());
      
     
    })

  
    })
  });
}

start();

// 3 additinal functions view all emp add emp, update emp
