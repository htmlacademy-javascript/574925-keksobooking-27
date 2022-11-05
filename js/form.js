const adFormElement = document.querySelector('.ad-form');
const adFormInputElements = adFormElement.querySelectorAll('fieldset');
const addressElement = document.querySelector('#address');
const roomsElement = document.querySelector('#room_number');
const capacityElement = document.querySelector('#capacity');

const roomsForGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const guetsForRooms = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['1', '2'],
  3: ['3'],
};

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

const onAddressFocus = () => {
  addressElement.blur();
};

const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
}, true);

const validateCapacity = () => roomsForGuests[roomsElement.value].includes(capacityElement.value);

const getCapacityErrorMessage = () => `Указанное количество комнат вмещает ${roomsForGuests[roomsElement.value].join(' или ')} ${Number(roomsForGuests[roomsElement.value]) === 0 ? 'гостей' : 'гостя'}.`;

const getRoomsErrorMessage = () => `Для указанного количества гостей требуется ${guetsForRooms[capacityElement.value].join(' или ')} ${Number(guetsForRooms[capacityElement.value]) === 100 ? 'комнат' : 'комнаты'}.`;

const onCapacityChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomsElement);
};

const onRoomsChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomsElement);
};

pristine.addValidator(roomsElement, validateCapacity, getCapacityErrorMessage);

pristine.addValidator(capacityElement, validateCapacity, getRoomsErrorMessage);

addressElement.addEventListener('focus', onAddressFocus);
roomsElement.addEventListener('change', onRoomsChange);
capacityElement.addEventListener('change', onCapacityChange);

const setAddress = ({ lat, lng }) => {
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

export { disabledAdForm, enabledAdForm, setAddress };
