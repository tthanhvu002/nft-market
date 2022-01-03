const moreBtns = document.querySelectorAll('.more')
const popups = document.querySelectorAll('.popup')
Array.from(moreBtns).map((btn,index) => {
    btn.onclick = () => {
        popups[index].classList.toggle('active')
    }
})

const mobileMenuBtn = document.querySelector('.mobile-menu__icon')
mobileMenuBtn.onclick = () => {
    document.querySelector('.mobile-overflow').classList.toggle('active')
    mobileMenuBtn.classList.toggle('active')
    console.log(1);
}
document.querySelector('.header__mobile-menu-icon').onclick = () => {
    document.querySelector('.header__mobile-menu').classList.toggle('active')
}