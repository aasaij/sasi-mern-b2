// // let person = {
// //   firstName: "Aasaithambi",
// //   lastName: "Jay",
// //   gender: "Male",
// //   salary: 2000000,
// // };
// // // document.write(typeof person);
// // document.write(person.firstName + " " + person.lastName);
// // let employee = {};
// // employee.firstName = "Phani";
// // employee.lastName = "D";
// // employee.age = 19;
// // employee.salary = 5000000;
// // document.write("<br/>" + employee.firstName + " " + employee.lastName);
// function Employee(firstName, lastName, gender, salary) {
//   //States of the employee
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.salary = salary;
//   //Member function for employee
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }
// let emp1 = new Employee("Eswari", "M", "Female", 5000000);
// let emp2 = new Employee("Sudha", "N", "Female", 6000000);
// let emp3 = new Employee("Sahithi", "M", "Female", 7000000);

// let employees = [emp1, emp2, emp3];
// //sorting employee based on their salary
// employees.sort((emp1, emp2) => emp2.salary - emp1.salary);
// for (let emp of employees) {
//   document.write("<br/>" + emp.fullName() + ", " + emp.salary);
// }
// // document.write("<br/>" + emp1.fullName());
// // document.write("<br/>" + emp2.fullName());
// // document.write("<br/>" + emp3.fullName());
//Array of employees
let emps = [
  { firstName: "Eswari", lastName: "M", gender: "Female", salary: 5000000 },
  { firstName: "Sudha", lastName: "N", gender: "Female", salary: 6000000 },
  { firstName: "Sahithi", lastName: "M", gender: "Female", salary: 7000000 },
  { firstName: "Phani", lastName: "D", gender: "Male", salary: 4000000 },
  { firstName: "Suresh", lastName: "K", gender: "Male", salary: 8000000 },
  { firstName: "Ramesh", lastName: "K", gender: "Male", salary: 9000000 },
  {
    firstName: "Yasaswini",
    lastName: "S",
    gender: "Female",
    salary: 100000000,
  },
];
emps
  .filter((emp) => emp.gender === "Female")
  .forEach((emp) => {
    document.write(
      `<br/>${emp.firstName} ${emp.lastName}, ${emp.gender}, ${emp.salary}`
    );
  });
