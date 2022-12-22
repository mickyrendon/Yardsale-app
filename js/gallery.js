import { remove } from "./toggleMenus.js"

export const card = [{
    name: 'Round',
    price: '$120,00',
    imgPath: './assets/curso-frontend-developer-practico-main/imgs/bufanda-sm.jpg',
    btnPath: './assets/curso-frontend-developer-practico-main/icons/bt_add_to_cart.svg'   
}]

export const nodeCard = (param) => {
    //creating node card 
    for(const data of param ){
    const galleryCtr = document.querySelector('.gallery-ctr')

    const figure = document.createElement('figure')
          figure.classList.add('card-ctr')
    const img = document.createElement('img')
          img.classList.add('product-img')
          img.setAttribute('src', data.imgPath)
          img.addEventListener('click', remove)
    const figcaption = document.createElement('figcaption')
    const div = document.createElement('div')
          div.classList.add('details-ctr-titles')
    const span1 = document.createElement('span')
          span1.innerText = data.price
    const span2 = document.createElement('span')
          span2.innerText = data.name
    const imgIcon = document.createElement('img')
          imgIcon.classList.add('icon-img')
          imgIcon.setAttribute('src', data.btnPath)
    
    galleryCtr.append(figure)
    figure.append(img, figcaption)    
    figcaption.append(div, imgIcon)
    div.append(span1, span2)      

    }
}