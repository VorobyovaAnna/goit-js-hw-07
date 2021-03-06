import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarkup);
galleryList.addEventListener('click', onGalleryListClick);

function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join('');
};

function onGalleryListClick(evt) {

    evt.preventDefault();

    const isGalleryImageEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    };
    
    let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
};