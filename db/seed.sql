INSERT INTO department (name)
VALUES ("Customer Service"),
       ("Sales"),
       ("I.T."),
       ("Security");
    
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Manger", 50000.00, 1),
       ("CSR", 36000.00, 1 ),
       ("Sales Manager", 55000.00,2),
       ("Sales Rep", 45000.00,2),
       ("I.T. Manager", 90000.00,3),
       ("Support", 50000.00,3),
       ("Director of Security", 60000.00,4),
       ("Security Guard", 40000.00,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("First_name", 50000.00, 1),
       ("CSR", 36000.00, 1 ),
       ("Sales Manager", 55000.00,2),
       ("Sales Rep", 45000.00,2),
       ("I.T. Manager", 90000.00,3),
       ("Support", 50000.00,3),
       ("Director of Security", 60000.00,4);
       ("Security Guard", 40000.00,4);