import { toggle } from "./js/menuDesktop.js"
import { toggleMenu } from "./js/menuMobile.js"

// global vars
const dropdown = document.querySelector('.dropdown')
const menuBtn = document.querySelector('.menu-btn')

// menu dropdown
dropdown.addEventListener('click', toggle)
// mobile menu
menuBtn.addEventListener('click', toggleMenu)