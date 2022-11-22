export const toggle = () => {
    const menu = document.querySelector('.menu-dropdown')
    const aside = document.querySelector('.aside-resume')

    const asideClosed = aside.classList.contains('hidden')

    if(asideClosed){
        return menu.classList.toggle('hidden')
    }else{
        aside.classList.toggle('hidden')
        return menu.classList.toggle('hidden')
    }
}