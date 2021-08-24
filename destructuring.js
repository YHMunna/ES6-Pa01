// 01.suppose u have an object.now use destructuring to create a variable of nay property
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
let fName = person.firstName;
console.log(fName);
// 02.suppose u have an array object.now use destructuring to create a variable of the third property

let three = ["I", "am", "Munna"];
let [, , name] = three;

console.log(name); //"munna"