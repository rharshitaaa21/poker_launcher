const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Transition every 5 seconds (adjust as needed)
