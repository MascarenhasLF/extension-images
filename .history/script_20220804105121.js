const form = document.querySelector('form');
const input = document.querySelector('input');

const replaceImages = (url) => {
    const images = document.querySelectorAll('img');
    images.forEach((image) => image.src = url);
}

form.addEventListener('submit', as