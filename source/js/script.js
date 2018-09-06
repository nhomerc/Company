var showHideButton = document.querySelector(".page-header__button");
var mainMenu = document.querySelector(".page-header__menu-list");
var headerMobile = document.querySelector(".page-header__wapper");
var logo = document.querySelector(".page-header__logo");
var notice = document.querySelector(".page-header__notification-wrapper");
var perconalRoom = document.querySelector(".page-header__personal-area");
var phoneNumber = document.querySelector(".page-header__phone");

headerMobile.classList.remove("show");
mainMenu.classList.remove("show");
showHideButton.classList.remove("open");

showHideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("show");
  showHideButton.classList.toggle("open");
  headerMobile.classList.toggle("show");
  logo.classList.toggle("open");
  notice.classList.toggle("open");
  perconalRoom.classList.toggle("open");
  phoneNumber.classList.toggle("open");
})



