//! Loops
//? for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//? while loop
let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

//? do-while loop
let j = 10
// do {
//     console.log(j);
//     j++
// } while (j < 10)

//? for-of
// let arr = [1, 2, 3, 4, 5, 56, 6, 7, 8, 9, 78, 6]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// for (let e of arr) {
//     console.log(e);
// }

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit suscipit ducimus explicabo dolorem! Adipisci culpa sequi facilis nulla, incidunt, laudantium sit doloribus aut eligendi ullam eos nobis necessitatibus dolorum."

// for (let s of str) {
//     console.log(s);
// }

//? for-in loop
let product = {
    name: "ABCD",
    price: 250,
    rating: 4.5,
    discount: 30
}
// for (let k in product) {
//     console.log(k);
//     console.log(product[k]);
// }

//! Array inbuilt methods
let arr = [1, 2, 3, 4, 5, 56, 6, 7, 8, 9, 78, 6]
console.log(arr);

//? push()
// arr.push("hi", true)
// console.log(arr);

//? pop()
// arr.pop()
// console.log(arr);

//? unshift()
// arr.unshift("Hello", 20, 30)
// console.log(arr);

//? shift()
arr.shift()
console.log(arr);
