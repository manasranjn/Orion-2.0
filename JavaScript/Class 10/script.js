//! Event in JS
const button = document.getElementById("btn")

function handleClick() {
    console.log("Button Clicked....");
}

const newElement = document.createElement("h1")
newElement.innerText = "Button Clicked"
const box = document.querySelector(".box")
// box.append(newElement)
button.onclick = () => {
    // newElement.style.color = "red"
    // console.log("Button Clicked");
    // box.append(newElement)
    box.style.backgroundColor = box.style.backgroundColor === "black" ? "white" : "black"
}

const eventBtn = document.getElementById("event")
eventBtn.onmouseenter = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);

}

const input = document.getElementById("input")
input.onchange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
}

// let name = prompt("Enter your name")
// console.log(name);

// alert("Warning")