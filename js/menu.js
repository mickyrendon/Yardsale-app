const dropdown = document.querySelector('.dropdown')

const toggle = () => {
    const menu = document.querySelector('.menu-dropdown')
    return menu.classList.toggle('hidden')
}

dropdown.addEventListener('click', toggle)