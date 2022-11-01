const adFormElement = document.querySelector('.ad-form');
const adFormInputElements = adFormElement.querySelectorAll('fieldset');

const disabledAdForm = () => {
  adFormElement.classList.add('ad-form--disabled');
  adFormInputElements.forEach((adFormInput) => {
    adFormInput.disabled = true;
  });
};

const enabledAdForm = () => {
  adFormElement.classList.remove('ad-form--disabled');
  adFormInputElements.forEach((adFormInput) => {
    adFormInput.disabled = false;
  });
};


// const roomsToGuests = {
//   1: ['1'],
//   2: ['1', '2'],
//   3: ['1', '2', '3'],
//   100: ['0'],
// };
// const guetsToRooms = {
//   0: ['100'],
//   1: ['1', '2', '3'],
//   2: ['1', '2'],
//   3: ['3'],
// };

// const addressElement = document.querySelector('#address');
// const roomsElement = document.querySelector('#rooms');
// const capacityElement = document.querySelector('#capacity');

// const pristine = new Pristine(adFormElement, {
//   classTo: 'ad-form__element',
//   errorClass: 'ad-form__element--invalid',
//   successClass: 'ad-form__element--valid',
//   errorTextParent: 'ad-form__element',
//   errorTextTag: 'span',
//   errorTextClass: 'text-help'
// });


// adFormElement.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Можно отправлять');
//   } else {
//     console.log('Форма невалидна');
//   }
// });
export { disabledAdForm, enabledAdForm };
