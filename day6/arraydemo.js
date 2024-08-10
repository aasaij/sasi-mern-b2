// // function compare(x, y) {
// //   return x - y;
// // }
// const nums = [10, 200, 9, 19, 29, 7, 49];
// // const nums = ["Sudha", "Eawari", "Teja", "Abhinav", "Aasai"];
// // nums.sort(compare);
// // nums.sort((a, b) => b - a);
// // nums.forEach(function (data) {
// //   document.write("<h1>" + data + "</h1>");
// // });
// function sum(x, y) {
//   return x + y;
// }

// // let total = nums.reduce(sum);
// // let total = nums.reduce((x, y) => x + y);
// // document.write(total);
// nums.shift();
// nums.unshift(77);
// // nums.splice(2, 2);
// nums.splice(2, 0, 44, 33, 22);
// nums.forEach(function (data) {
//   document.write("<h1>" + data + "</h1>");
// });
// let str = nums.join(" ");
// document.write(str);
// let x = nums.indexOf(44);
// nums.lastIndexOf(44);
// nums.includes(22)
// document.write("<br/>" + x);
// Array <Methods>
// let x = [10, 20, 3, 4, 5];
// let cube = [];
// for (let i = 0; i < x.length; i++) {
//   cube.push(Math.pow(x[i], 3));
// }
// let cube = x.map((x) => x * x * x);
// document.write("<br/>" + cube.toString());
let names = ["a", "b", "c", "d", "e"];
// for (let index in names) {
//   document.write("<br/>" + names[index]);
// }
for (let name of names) {
  document.write("<br/>" + name);
}
