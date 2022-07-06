INSERT INTO department (name)
VALUES ("Customer Service"),
       ("Sales"),
       ("I.T."),
       ("Security");
       ("Board of Directors")
    
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Manger", 50000.00, 1),
       ("CSR", 36000.00, 1 ),
       ("Sales Manager", 55000.00,2),
       ("Sales Rep", 45000.00,2),
       ("I.T. Manager", 90000.00,3),
       ("Support", 50000.00,3),
       ("Director of Security", 60000.00,4),
       ("Security Guard", 40000.00,4);
       ("C.E.O)", 100000,5 )

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("First_name","last_name", 1, 9),
       ("First_name","last_name", 2, 1),
       ("First_name","last_name", 3, 9),
       ("First_name","last_name", 4, 3),
       ("First_name","last_name", 5, 9),
       ("First_name","last_name", 6, 5),
       ("First_name","last_name", 7, 9),
       ("First_name","last_name", 8, 7),
       ("First_name","last_name", 9, 9),