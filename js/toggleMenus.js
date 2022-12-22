const menuMobile = document.querySelector('.menu-ctr-mobile')
const orderDetail = document.querySelector('.aside-resume')
const productDetail =  document.querySelector('.details-ctr')
const menuDesktop = document.querySelector('.menu-dropdown')

export function mobileMenu () {
    menuMobile.classList.toggle('hidden') 
    orderDetail.classList.add('hidden')
    productDetail.classList.add('hidden')
}
export function toggleDesktopMenu () {
    menuDesktop.classList.toggle('hidden')
    orderDetail.classList.add('hidden')
    productDetail.classList.add('hidden') 
}
export function toggleProductDetail () {
    productDetail.classList.toggle('hidden')
    orderDetail.classList.add('hidden')
    menuMobile.classList.add('hidden')
    menuDesktop.classList.add('hidden')
}
export function toggleorderDetail(){
    orderDetail.classList.toggle('hidden')
    menuMobile.classList.add('hidden')
    menuDesktop.classList.add('hidden')
    productDetail.classList.add('hidden')
}
export function remove () {
    productDetail.classList.remove('hidden')
    orderDetail.classList.add('hidden')
    menuMobile.classList.add('hidden')
    menuDesktop.classList.add('hidden')
}