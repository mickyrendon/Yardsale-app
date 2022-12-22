import { card, nodeCard } from "./js/gallery.js"

// global vars
const dropdown = document.querySelector('.dropdown')
const menuBtn = document.querySelector('.menu-btn')
const orderDetail = document.querySelector('.cart')
const closeBtn= document.querySelector('.close')

// mobile menu
menuBtn.addEventListener('click', async () => {
    const { mobileMenu } = await import('./js/toggleMenus.js')
    mobileMenu()
})
// menu dropdown desktop
dropdown.addEventListener('click', async () => {
    const { toggleDesktopMenu } = await import('./js/toggleMenus.js')   
    toggleDesktopMenu()
})
//close product Details
closeBtn.addEventListener('click', async () => {
    const { toggleProductDetail }= await import('./js/toggleMenus.js')
    toggleProductDetail()
})
//order details
orderDetail.addEventListener('click', async () => {
    const { toggleorderDetail } = await import('./js/toggleMenus.js')
    toggleorderDetail()
})

// gallery function
const cardNode = nodeCard(card)
cardNode
