export const toggleCart = () => {
    const aside = document.querySelector('.aside-resume')
    const menuMb = document.querySelector('.menu-ctr-mobile')
    const menuDsktp = document.querySelector('.menu-dropdown')
    
    const menuMblClosed = menuMb.classList.contains('hidden')
    const menuDsktpClosed = menuDsktp.classList.contains('hidden')

    aside.classList.toggle('hidden') 

    if(menuMblClosed){
        aside.classList.toggle('hidden') 
    }else {
        aside.classList.toggle('hidden') 
        menuMb.classList.toggle('hidden')
    }
    if(menuDsktpClosed){
        aside.classList.toggle('hidden') 
    }else{
        menuDsktp.classList.toggle('hidden')
        aside.classList.toggle('hidden') 
    }
}