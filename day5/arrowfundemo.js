// let greet = function (user) {
//   console.log(`${user} is sooo good`);
// };

// greet("Rose");

// Arrow function
// const greet = () => {
//   console.log("You are all very very interactive!");
// };
// const greet = user => {
//   console.log(user + " is very very interactive!");
// };
const greet = (user, gender) => {
  if (user && gender) {
    if (gender === "F") {
      console.log("Ms. " + user + " is very very interactive!");
    } else {
      console.log("Mr. " + user + " is very very interactive!");
    }
  }
};
// greet("Hafeeza", "F");
// greet("Veerababu", "M");
