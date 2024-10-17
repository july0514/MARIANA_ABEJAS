let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function moveSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (sliderId === 'beeSlider1') {
        currentIndex1 = (currentIndex1 + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    } else if (sliderId === 'beeSlider2') {
        currentIndex2 = (currentIndex2 + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex2 * 100}%)`;
    } else if (sliderId === 'beeSlider3') {
        currentIndex3 = (currentIndex3 + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex3 * 100}%)`;
    }
}

document.getElementById('infoButton').addEventListener('click', () => {
    const infoDiv = document.getElementById('info');
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('commentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentList = document.getElementById('commentList');
    const newComment = document.createElement('div');
    newComment.style.border = '1px solid #ccc';
    newComment.style.padding = '10px';
    newComment.style.marginTop = '10px';
    newComment.style.borderRadius = '5px';
    newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;
    commentList.appendChild(newComment);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});


let currentIndex = 0;

// Selecciona todos los sliders del encabezado
const headerSlides = document.querySelectorAll('#headerSlider .slide');

function showHeaderSlide(index) {
    const totalSlides = headerSlides.length;

    // Asegúrate de que el índice actual esté dentro de los límites
    if (index >= totalSlides) {
        currentIndex = 0; // Reinicia al primer slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Va al último slide
    } else {
        currentIndex = index;
    }

    // Calcula el desplazamiento y aplica la transformación
    const offset = -currentIndex * 100; // Suponiendo que cada slide ocupa el 100% del ancho
    document.querySelector('#headerSlider .slides').style.transform = `translateX(${offset}%)`;
}

// Cambia de imagen automáticamente cada 2 segundos
setInterval(() => {
    showHeaderSlide(currentIndex + 1); // Avanza al siguiente slide
}, 2000);

// Inicializa el primer slide al cargar la página
showHeaderSlide(currentIndex);

