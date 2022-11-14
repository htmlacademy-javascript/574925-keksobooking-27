import { setImages } from './utils.js';

const setAvatar = () => {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];

  const fileChooserElement = document.querySelector('#avatar');
  const previewElement = document.querySelector('.ad-form-header__preview img');

  fileChooserElement.addEventListener('change', () => {
    setImages(fileChooserElement, previewElement);
  });
};

export { setAvatar };
