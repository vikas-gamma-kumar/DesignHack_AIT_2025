
const menuBtn = document.querySelector('.menu-btn');
const options = document.querySelector('.options');

menuBtn.addEventListener('click', () => {
  options.classList.toggle('active');
  menuBtn.classList.toggle('open');
});


