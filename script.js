const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active'); // ← adiciona active no botão também
});

// Fecha o menu quando clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active'); // ← remove active no botão
    });
});

let currentIndex = 0;
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Botão anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

// Botão próximo
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Garante que o carrossel esteja na posição inicial
window.addEventListener('load', updateCarousel);
