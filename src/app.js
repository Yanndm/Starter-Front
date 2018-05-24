var trigger = document.querySelector('.menu-trigger');
var lines = document.querySelectorAll('.line');
var navDown = document.querySelector('.list');
var inputBtn = document.querySelector('.header-container-btn-search');
var inputHide = document.querySelector('.header-container-input-close');
var closeBtn = document.querySelector('.header-container-close');


trigger.addEventListener('click', function() {
  trigger.classList.toggle('active');
  navDown.classList.toggle('navDown');
});
inputBtn.addEventListener('click', function() {
  inputBtn.classList.add('-none');
  inputHide.classList.add('navDown');
});
closeBtn.addEventListener('click', function() {
  inputHide.classList.remove('navDown');
  inputBtn.classList.remove('-none');
});
