const carousel = document.querySelector('.project-carousel');
const projectCards = document.querySelectorAll('.project-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
    const projectWidth = document.querySelector('.project-card').offsetWidth;
    carousel.style.transform = `translateX(-${index * projectWidth}px)`;
    
    // Agregar clase 'visible' a los tres proyectos visibles
    projectCards.forEach((card, i) => {
        if (i >= index && i < index + 3) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 5; // 5 es el número total de proyectos
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 5) % 5;
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200); // Delay escalonado para cada card
  });
});
// Mostrar los primeros proyectos al cargar la página
showSlide(currentIndex);
