// import { toggle } from "./js/menuDesktop.js"
// import { toggleMenu } from "./js/menuMobile.js"
// import { toggleCart } from "./js/shoppingCart.js"
import { card, nodeCard } from "./js/gallery.js"
// import { close } from "./js/orderDetails.js"

// global vars
const dropdown = document.querySelector('.dropdown')
const menuBtn = document.querySelector('.menu-btn')
const cart = document.querySelector('.cart')
const closeBtn= document.querySelector('.close')

// menu dropdown desktop
dropdown.addEventListener('click', async () => {
    const { toggle } = await import('./js/menuDesktop.js')
    toggle()
})
// mobile menu
menuBtn.addEventListener('click', async () => {
    const { toggleMenu } = await import('./js/menuMobile.js')
    toggleMenu()
})
//aside shopping cart
cart.addEventListener('click', async () => {
    const { toggleCart } = await import('./js/shoppingCart.js')
    toggleCart()
})
//close article orders Details
// closeBtn.addEventListener('click', close)
closeBtn.addEventListener('click', async () => {
    const { close }= await import('./js/orderDetails.js')
    close()
})


// gallery function
const cardNode = nodeCard(card)
cardNode

// loop()

// article 


