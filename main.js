const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let slideWidth = slider.clientWidth;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

window.addEventListener('resize', () => {
  slideWidth = slider.clientWidth;
  goToSlide(currentIndex);
});

setInterval(nextSlide, 2000); 
