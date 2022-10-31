/* eslint-disable no-console */
import { renderCardOffer } from './template.js';
import { disabledAdForm } from './form.js';
import { disabledMapFilter } from './filter.js';
renderCardOffer();
// disabledAdForm();
disabledMapFilter();

const adFormElement = document.querySelector('.ad-form');
const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(adFormElement.querySelector('#title'), validateTitle,
  'Длинна заголовка должна быть от 30 до 100 символов');


adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
