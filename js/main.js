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

/**
 * const roomsField = orderForm.querySelector('[name="rooms"]');
 * const capacityField = orderForm.querySelector('[name="capacity"]');
const capacityOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей' ,'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей'],
};
function validateRooms () {
  return capacityOption[capacityField.value].includes(capacityField.value);
function getRoomsErrorMessage () {
  return `
    ${roomsField.value}
    ${dateField.value.toLowerCase()}
    ${roomsField.value === 'Доставка' ? 'невозможна' : 'невозможен'}
  `;
}

pristine.addValidator(roomsField, validateRooms);
pristine.addValidator(capacityField, validateRooms);
 */


adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
