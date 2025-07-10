const $= document
const menuButton=$.querySelector('.nav-right__menu')
const menuMobile=$.querySelector(".nav__menu-mobile")


menuButton.addEventListener("click",()=>{
    menuButton.classList.toggle("nav-right__menu--active")
    menuMobile.classList.toggle("nav__menu-mobile--active")
})