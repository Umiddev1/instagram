let elInpHeader = document.querySelector('.insta-header__inp');
let elSearchHeader = document.querySelector('.insta-header__search');
let elCloseHeader = document.querySelector('.insta-header__close');
let elHeart = document.querySelector('.insta-post__heart');
let elImgs = document.querySelector('.insta-post__imgs');
let elBtnPrev = document.querySelector('.insta-stores__prev');
let elBtnNext = document.querySelector('.insta-stores__next');
let elItem = document.querySelectorAll('.insta-stores__list li');
let elItems = document.querySelector('.insta-stores__list');
elBtnPrev.addEventListener("click",prevEl);
elBtnNext.addEventListener("click",nextEl)
elInpHeader.addEventListener("focus",funcNone);
elImgs.addEventListener("dblclick",output);

let x = 0;
function funcNone() {
    elSearchHeader.classList.add('d-none');
    elCloseHeader.classList.add('d-block');
}
function output() {
    elHeart.style.display = "block"
}
function changeEl() {
    if(x > elItem.length -1) {
        x = 0;
    }
    else if (x < 0) {
        x = elItem.length;
    }
    elItems.style.transform = `translateX(${-x * 60}px)`;
    elItems.classList.add('tr');
} 
function prevEl(e) {
    x--;
    changeEl();
}
function nextEl(e) {
    x++;
    changeEl();
}