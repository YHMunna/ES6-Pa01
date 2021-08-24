// 01 declare a function with one parameter

const arrowFunction = x => (x / 5);
console.log(arrowFunction(2));

// 02 declare a function with two parameter and multiply 2 with each parameter and the will be both of the sum
const multiplyFunction = (x, y) => (x * 2) + (y * 2);
console.log(multiplyFunction(2, 3));
// 03 declare a function with three parameter and they will multiply eash other
const threeFunction = (x, y, z) => x * y * z;
console.log(threeFunction(2, 3, 5));

// 03 declare a function with two parameter and they will multiply eash other in multiline
const doMath = (x, y) => {
    const sum = x + y;
    return sum
}
console.log(doMath(10, 5))