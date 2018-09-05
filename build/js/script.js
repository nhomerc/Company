var showHideButton = document.querySelector(".page-heade__button");
var mainMenu = document.querySelector(".page-header__menu");
var showHideMenu=document.querySelector(".page-header__menu-button");

showHideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("show");
})
showHideMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainMenu.classList.remove("show");
})

showHideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  showHideButton.classList.toggle("open");
})
