const obj = {
    name: "Manas",
    age: 24,
    city: "BBSR"
}
// console.log(obj);
//? Add new key
obj.state = "Odisha"
// console.log(obj);
//? Update value
obj.city = "Baripada"
// console.log(obj);
//? Delete a key
delete obj.age
// console.log(obj);

//! Hoisting
// sum()

// console.log(b);
// console.log(a);
// let a = 10
// console.log(a);

var b = 10
// console.log(b);
// add() //not allowed

const add = () => {
    console.log(10 + 20);
}
// add()

function sum() {
    console.log(40 + 20);
}
// sum()

//? sort()
let marks = [50, 60, 35, 54, 45, 90, 70, 62]
marks.sort((a, b) => a - b)
// [50,35,54,45,60,70,62,90]
//[35,50,45,54,60,70,90]
//[35,45,50,54,60,70,90]
// marks.sort()
marks.sort((a, b) => b - a)
//[60,50,54,45,90,70,62,35]
//[60,54,50,90,70,62,45,35]
console.log(marks);
