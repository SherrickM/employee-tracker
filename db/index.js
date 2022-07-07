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
}
// Return all emp, update, add emp
module.exports = new Data(connection);
