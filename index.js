import { toggle } from "./js/menuDesktop.js"
import { toggleMenu } from "./js/menuMobile.js"
import { toggleCart } from "./js/shoppingCart.js"
import { ar } from "./js/gallery.js"

// global vars
const dropdown = document.querySelector('.dropdown')
const menuBtn = document.querySelector('.menu-btn')
const cart = document.querySelector('.cart')
// menu dropdown desktop
dropdown.addEventListener('click', toggle)
// dropdown.classList.contains('hidden') ? console.log('algo') : console.log('?');
// mobile menu
menuBtn.addEventListener('click', toggleMenu)
//aside shopping cart
cart.addEventListener('click', toggleCart)

// gallery
ar()
// loop()

