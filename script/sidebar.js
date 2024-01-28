const burgerMenu = document.querySelector('.header__burger-menu')
const sidebar = document.querySelector('.side-menu')
const overlay = document.querySelector('.overlay')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})

const sideBarId = document.getElementById('side-bar')

function adjustHeight() {
    sideBarId.style.height = document.body.clientHeight + 20 + "px";
}

window.addEventListener("load", adjustHeight);
adjustHeight();
console.log(document.body.clientHeight)