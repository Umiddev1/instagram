let elInpHeader = document.querySelector('.insta-header__inp');
let elSearchHeader = document.querySelector('.insta-header__search');
let elCloseHeader = document.querySelector('.insta-header__close');
let elHeart = document.querySelector('.insta-post__heart');
let elImgs = document.querySelector('.insta-post__imgs');
elInpHeader.addEventListener("click",funcNone);
elImgs.addEventListener("dblclick",output);
function funcNone() {
    elSearchHeader.classList.toggle('d-none');
    elCloseHeader.classList.toggle('d-block');
}
function output() {
    elHeart.style.display = "block"
}