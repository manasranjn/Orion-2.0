let arr = [10, 20, 30, false, null, true, undefined, "Hi", 50, 60]

// arr.unshift(1, 2, 3)
// console.log(arr);
// arr.pop()
let subArr = arr.slice(1, 5)
// console.log(subArr);
// arr.splice(5,1,1)
// arr.splice(1,0,1)
// arr.splice(0, 0, 0)
// arr.splice(0, 5)
// console.log(arr);

let str = "Hello everyone"
// console.log(str.replace("l", "a"));
// console.log(str.split("e"));
// console.log(str.length);
// console.log(str.indexOf("o"));

//! Functions in JS
//? Normal Function
function example() {
    let a = 10
    let b = 20
    console.log(a + b);
}
// example()
//* Without parameter
function sum() {
    return 10 + 20
}
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());

//* With parameter
function addition(a = 0, b = 0) {
    return a + b
}
// console.log(addition(10, 30));
// console.log(addition(100, 3));
// console.log(addition(40, 30));
// console.log(addition(10,));


//? Arrow Function
const arrowFunc = (a, b) => {
    return a - b
}
// console.log(arrowFunc(10, 1));

//? Anonymous Function
const ano = function () {
    console.log("Anonymous function");
}
// ano()

//? Callback function
// ()=>{

// }

//? forEach()
arr.forEach((i, index) => {
    console.log(i);
    console.log("index value", index);
})