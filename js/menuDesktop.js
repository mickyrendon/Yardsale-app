const dropdown = document.querySelector('.dropdown')

const toggle = () => {
    const menu = document.querySelector('.menu-dropdown')
    menu.classList.toggle('hidden')
}

dropdown.addEventListener('click', toggle)