const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
 if(menu.classList.contains('hidden')){
  menu.classList.remove('hidden');
 }else{
  menu.classList.add('hidden');
 }
})