export const toggleMenu = () => {
    const dropdownMobile = document.querySelector('.menu-ctr-mobile')
    const aside = document.querySelector('.aside-resume')
    
    const asideClosed = aside.classList.contains('hidden')  
    
    if(asideClosed){
        return dropdownMobile.classList.toggle('hidden')
    }else{
        aside.classList.toggle('hidden')
        return dropdownMobile.classList.toggle('hidden')
    }
 }