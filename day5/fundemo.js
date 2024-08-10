let nameList = [
  "Rose",
  "Eswari",
  "Murali",
  "Shanmuk",
  "Phani",
  "Angel",
  "Theresa",
];
let genderList = ["F", "F", "M", "M", "M", "F", "F"];
//function declaration
function greet(user, gender) {
  let title = "";
  if (user && gender) {
    if (gender === "F") {
      title = "Ms.";
    } else {
      title = "Mr.";
    }
    console.log(`Good Morning ${title} ${user}!`);
  }
}

//function call
// greet(nameList[0]);
for (let index = 0; index < nameList.length; index++) {
  greet(nameList[index], genderList[index]);
}
