const menu = document.getElementById("menu")
const mobileNavbar = document.getElementById("mobilelinks")
const close = document.getElementById("close")

menu.onclick = () => {
    mobileNavbar.style.display = mobileNavbar.style.display === "block" ? "none" : "block"
}

close.onclick = () => {
    mobileNavbar.style.display = "none"
}