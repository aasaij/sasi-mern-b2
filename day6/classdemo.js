class Employee {
  constructor(id, firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.department = department;
  }
  fullName = () => {
    return this.firstName + " " + this.lastName;
  };
}

let e1 = new Employee(101, "Sudha", "N", "CSE");
document.write(e1.fullName());
Attendance : https://bit.ly/CC--100824
Trainer : Tambi
Session : FN