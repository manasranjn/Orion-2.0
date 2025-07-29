let arr = [10, 20, 30, 40, true, undefined, "Hello"]
// console.log(arr);

//? splice()
// arr.splice(3, 3) //delete
// console.log(arr);
// arr.splice(1, 2, "Hi") //replace
// console.log(arr);
// arr.splice(3, 0, 1, 2, 3, 4, 5) // insert
// console.log(arr);
// arr.splice(5, 1, 2)
// console.log(arr);

//? slice()
// let subArr = arr.slice(1, 5)
// console.log(subArr);

//? includes()
// console.log(arr.includes(10));
// console.log(arr.includes(100));

//? toString()
// console.log(arr.toString());

// arr.reverse()
// console.log(arr);

//! String
//! String Literals
let name = "ABCD"
let price = 200
// console.log("Product name is ", name, "and the price is " + price);
// console.log(`The product name is `, name, "and the price is", price);

//! Template Literals
// ${variableName}
// console.log(`The product name is ${name} and the price is ${price}`);

//! String Inbuilt methods
let str = "   Lorem, elit ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat elit beatae omnis perferendis doloremque deleniti! Delectus magni iure elit obcaecati expedita pariatur necessitatibus ut modi nulla qui enim. Totam, error incidunt.   "
//? indexOf()
// console.log(str.indexOf("elit"));

//? lastIndexOf()
// console.log(str.lastIndexOf("elit"));

//? charAt()
// console.log(str.charAt(99));

//? replace()
// let subStr = str.replace("elit", "JavaScript")
// console.log(subStr);

//? replaceAll()
// let replacedStr = str.replaceAll("elit", "JS")
// console.log(replacedStr);

//? slice()
// console.log(str.slice(3, 11));

//? trim
// console.log(str.trim());

//? length
console.log(str.length);

//? toUpperCase()
// console.log(str.toUpperCase());

//? toLowerCase()
// console.log(str.toLowerCase());

//? split()
console.log(str.split("elit"));
