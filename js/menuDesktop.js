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
export const toggleMenu = () => {
    // getting dropdown menu mobile, shopping cart and order details
    const dropdownMobile = document.querySelector('.menu-ctr-mobile')
    const aside = document.querySelector('.aside-resume')
    const orderDetails =  document.querySelector('.details-ctr')

    
    const asideClosed = aside.classList.contains('hidden')  
    const odClosed = orderDetails.classList.contains('hidden')  
    
    if(asideClosed){
        return dropdownMobile.classList.toggle('hidden')
    }else{
        aside.classList.toggle('hidden')
        // debugger
        dropdownMobile.classList.toggle('hidden')
        
        if(odClosed){
            return dropdownMobile.classList.toggle('hidden')
        }else{
            orderDetails.classList.toggle('hidden')
            // debugger
            return dropdownMobile.classList.toggle('hidden')
        }
    }
 }