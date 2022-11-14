import { setImages } from './utils.js';

const setPhotos = () => {
  const fileChooserElement = document.querySelector('#images');

  const photoContainerElement = document.querySelector('.ad-form__photo');
  photoContainerElement.style.overflow = 'hidden';

  const previewElement = document.createElement('img');
  previewElement.style.height = 'auto';
  previewElement.style.maxWidth = '100%';

  fileChooserElement.addEventListener('change', () => {
    setImages(fileChooserElement, previewElement);
  });
  photoContainerElement.append(previewElement);
};

export { setPhotos };
