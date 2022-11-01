/* eslint-disable no-console */
import { renderCardOffer } from './template.js';
import { disabledAdForm } from './form.js';
import { disabledMapFilter } from './filter.js';
renderCardOffer();
// disabledAdForm();
disabledMapFilter();

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};
const guetsToRooms = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['1', '2'],
  3: ['3'],
};

const adFormElement = document.querySelector('.ad-form');

const addressElement = document.querySelector('#address');
const roomsElement = document.querySelector('#rooms');
const capacityElement = document.querySelector('#capacity');

const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
}, true);


adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
