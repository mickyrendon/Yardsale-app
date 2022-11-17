const menuBtn = document.querySelector('.menu-btn')

const toggleMenu = () => {
    const dropdownMobile = document.querySelector('.menu-ctr-mobile')

    dropdownMobile.classList.toggle('hidden')
}

menuBtn.addEventListener('click', toggleMenu)