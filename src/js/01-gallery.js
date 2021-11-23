import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    }).join('');
};

function onGalleryContainerClick(evt) {

    evt.preventDefault();

    const isGalleryImageEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    };
    
    const instance = basicLightbox.create(`<img src="assets/images/image.png" width="800" height="600">`, {
        onShow: instance => {
            ('onShow', instance);
            window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: instance => ('onClose', instance),
    });

    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    };

    instance.element().querySelector('img').src = evt.target.getAttribute('data-source');
    instance.show();
};