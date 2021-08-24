// 01.take a number of arry and then multiply each elemnt of arry by 5(by using arrow function)
let numbers = [5, 10, 15, 20];
// pass a function to map
const arrayMap = numbers.map(number => number * 5);
console.log(arrayMap);
// expected output: Array [25, 50, 75, 100]


// 02.take a number of arry and then filter odd or even number(by using arrow function)
let newNumbers = [5, 10, 15, 20];
// pass a function to map
const newArrayMap = newNumbers.filter(number => number % 2 == 1);
console.log(newArrayMap);
// expected output: Array [5, 15]

// 03.take arry object and then us find to get price=5000 (by using arrow function)

const arrayObject = [{
        name: "samsung",
        color: 'red',
        price: 5000
    },
    {
        name: "xiomi",
        color: 'black',
        price: 50000
    },
    {
        name: "htc",
        color: 'blue',
        price: 15000
    },
    {
        name: "nokia",
        color: 'purple',
        price: 5000
    }

]

const productPrice = arrayObject.find(product => product.price == 5000)
console.log(productPrice);