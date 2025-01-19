import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchPixabay } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

loader.style.display = 'none';

const searchSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  gallery.innerHTML = '';

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      titleColor: '#FAFAFB',
      iconColor: '#FAFAFB',
    });
    return;
  }
  loader.style.display = 'block';
  searchPixabay(searchQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
          iconColor: '#FAFAFB',
        });

        gallery.innerHTML = '';
        loader.style.display = 'none';
        searchForm.reset();

        return;
      }

      gallery.innerHTML = renderGallery(data.hits);

      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
      } else {
        lightbox.refresh();
      }
      loader.style.display = 'none';
    })
    .catch(err => {
      console.log(err);
    });
};

searchForm.addEventListener('submit', searchSubmit);
