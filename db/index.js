const connection = require("./connection");

class Data {
  constructor(connection) {
    this.connection = connection;
  }

  returnAllDepartments() {
    //department names and department ids
    return this.connection
      .promise()
      .query("SELECT * FROM department ORDER BY id;");
  }

  insertDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  returnAllRoles() {
    // job title, role id, the department that role belongs to, and the salary for that role
    return this.connection
      .promise()
      .query(
        "SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
      );
  }

  insertRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
  returnAllEmployees() {
    // employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
       return this.connection
      .promise()
      .query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name,' ', manager.last_name) AS managerName FROM employee LEFT JOIN role ON employee.role_id = role.id  LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;");
  }

  insertEmployee(employee){
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  updateEmployee(empID, roleId){
    return this.connection.promise().query(" UPDATE employee SET role_id = ? WHERE id = ?", [roleId,empID]);
  }


}
// Return all emp, update, add emp
module.exports = new Data(connection);
