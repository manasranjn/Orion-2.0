// const imageElement = document.getElementById("image")
// let attribute = imageElement.getAttribute("src")
// console.log(attribute);

// imageElement.setAttribute("src", "https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg")
// imageElement.setAttribute("class", "image image2 image3")
// console.log(imageElement);

const paragraph = document.querySelector(".para")
console.log(paragraph);

paragraph.style.color = "red"
paragraph.style.fontSize = "25px"
paragraph.style.backgroundColor = "black"
paragraph.innerText = "This is a paragraph"

const newElement = document.createElement("h1")
console.log(newElement);
newElement.innerHTML = "This is a Heading"
const box = document.querySelector(".box")
// box.append(newElement)
// box.prepend(newElement)
// box.before(newElement)
box.after(newElement)

box.remove()