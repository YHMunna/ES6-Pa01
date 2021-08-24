// templeteString by using variable
let text = "hey ,i love you";
let name = "munna";

const templeteString = `${text},${name}`;
console.log(templeteString);

// templeteString by using object


let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
const temObjString = `This is ${person.firstName}`;
console.log(temObjString);