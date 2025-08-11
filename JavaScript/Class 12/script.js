const heading = document.getElementById("head")
heading.onmouseenter = (x) => {
    heading.style.color = "green"
}

const button = document.getElementById("btn")
// button.onclick = () => {
//     console.log("button is clicked");
// }
function buttonClicked() {
    heading.style.color = "red"
    heading.style.fontSize = "50px"
    console.log("Button clicked");

}
// button.addEventListener("click", buttonClicked)

// setTimeout(() => {
//     button.removeEventListener("click", buttonClicked)
// }, 5000)

// setTimeout(() => {
//     console.log("Set timeout function");

// }, 3000)

//! Prototype
const person = {
    name: "XYZ",
    age: 20,
    address: "India"
}

const ram = {
    __proto__: person,
    name: "Ram",
    gender: "Male"
}
// console.log(person.name);
// console.log(ram.gender);

let sita = Object.create(person)
// console.log(sita.name);
sita.name = "Sita"
// console.log(sita.name);
sita = {
    gender: "Female"
}
// console.log(sita.gender);

class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`My name is ${this.name}, and my age is ${this.age}`);
    }
}
const person1 = new Example("Manas", 24)
person1.greet()