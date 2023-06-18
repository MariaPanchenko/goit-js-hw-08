import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

for (const item of galleryItems) {
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
  img.className = 'gallery__image';

  const a = document.createElement('a');
  a.className = 'gallery__link';
  a.href = item.original;
  a.appendChild(img);

  const li = document.createElement('li');
  li.className = 'gallery__item';
  li.appendChild(a);

  galleryEl.appendChild(li);
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
