// console.log(window);
// console.log(document);

//! DOM Selcetion Methods
//? getElementByID()
let paragraph = document.getElementById("paragraph")
// console.log(paragraph);

//? getElementsByClassName()
let para = document.getElementsByClassName("para")
// console.log(para);

//? getElementsByTagName()
const elements = document.getElementsByTagName('p')
// console.log(elements);

//? getElementsByName()
const inputs = document.getElementsByName("email")
// console.log(inputs);

//? querySelector()
const paragraphElement = document.querySelector(".para")
console.log(paragraphElement);

//? querySelectorAll()
let paragraphElem = document.querySelectorAll(".para")
console.log(paragraphElem);
