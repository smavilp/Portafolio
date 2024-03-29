// Variables
const menu = document.getElementById("menu")
const openMenuBtn = document.getElementById("open-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")
const menuLinks = document.querySelectorAll(".menu__a")

// Functions
const toggleMenu = () => {menu.classList.toggle("hidden")}

// Events
openMenuBtn.addEventListener("click", () => toggleMenu())
closeMenuBtn.addEventListener("click", () => toggleMenu())
menuLinks.forEach(link => {link.addEventListener("click", () => toggleMenu())});