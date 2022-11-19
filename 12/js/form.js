import { setImage } from './utils.js';
const DEFAULT_AVATAR = 'img/muffin-grey.svg';
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
const typeToPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
  max: 100000,
};
const adFormElement = document.querySelector('.ad-form');
const resetButtonElement = adFormElement.querySelector('.ad-form__reset');
const adFormInputElements = adFormElement.querySelectorAll('fieldset');
const addressElement = document.querySelector('#address');
const capacityElement = document.querySelector('#capacity');
const roomsElement = document.querySelector('#room_number');
const priceElement = document.querySelector('#price');
const timeInElement = document.querySelector('#timein');
const timeOutElement = document.querySelector('#timeout');
const typeElement = document.querySelector('#type');
const sliderElement = document.querySelector('.ad-form__slider');
const submitButtonElement = document.querySelector('.ad-form__submit');
const avatarChooserElement = document.querySelector('#avatar');
const previewAvatarElement = document.querySelector('.ad-form-header__preview img');
const photoChooserElement = document.querySelector('#images');
const photoContainerElement = document.querySelector('.ad-form__photo');
const SliderConfig = {
  MIN: 0,
  MAX: 100000,
  START: priceElement.placeholder,
  STEP: 1,
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

const setAddress = ({ lat, lng }) => {
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
}, true);

noUiSlider.create(sliderElement, {
  range: {
    min: SliderConfig.MIN,
    max: SliderConfig.MAX
  },
  start: SliderConfig.START,
  step: SliderConfig.STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return value;
    }
  }
});

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

const onAddressFocus = () => {
  addressElement.blur();
};

pristine.addValidator(roomsElement, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacityElement, validateCapacity, getRoomsErrorMessage);
addressElement.addEventListener('focus', onAddressFocus);
roomsElement.addEventListener('change', onRoomsChange);
capacityElement.addEventListener('change', onCapacityChange);

const onPriceChange = () => {
  pristine.validate(typeElement);
};

const validatePrice = (value) => value >= typeToPrices[typeElement.value] && value <= typeToPrices.max;

const getPriceErrorMessage = () => `Минимальная цена для этого жилья ${typeToPrices[typeElement.value]} руб.`;
priceElement.addEventListener('change', onPriceChange);
pristine.addValidator(priceElement, validatePrice, getPriceErrorMessage);

const setElementValue = (element, newValue) => {
  element.value = newValue.target.value;
};

timeInElement.addEventListener('change', (evt) => {
  setElementValue(timeOutElement, evt);
});

timeOutElement.addEventListener('change', (evt) => {
  setElementValue(timeInElement, evt);
});

typeElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set(typeToPrices[typeElement.value]);
  SliderConfig.MIN = typeToPrices[typeElement.value];
  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': typeToPrices[typeElement.value],
      'max': SliderConfig.MAX
    }
  });
  sliderElement.noUiSlider.set(typeToPrices[typeElement.value]);
});

sliderElement.noUiSlider.on('update', () => {
  priceElement.value = sliderElement.noUiSlider.get();
  priceElement.placeholder = typeToPrices[typeElement.value];
});

priceElement.addEventListener('input', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});

const disableSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};

const enableSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const resetForm = () => {
  adFormElement.reset();
  sliderElement.noUiSlider.set(SliderConfig.START);
  priceElement.value = SliderConfig.START;
  priceElement.placeholder = SliderConfig.START;
  previewAvatarElement.src = DEFAULT_AVATAR;
  photoContainerElement.innerHTML = '';
};

const setOnFormSubmit = (cb) => {
  adFormElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      disableSubmitButton();
      await cb(new FormData(evt.target));
      enableSubmitButton();
    }
  });
};

const setOnFormReset = (reset) => {
  resetButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    reset();
  });
};

const setAvatar = () => {
  avatarChooserElement.addEventListener('change', () => {
    setImage(avatarChooserElement, previewAvatarElement);
  });
};

const setPhotos = () => {
  photoChooserElement.addEventListener('change', () => {
    photoContainerElement.innerHTML = '';
    const previewPhotoElement = document.createElement('img');
    setImage(photoChooserElement, previewPhotoElement);
    previewPhotoElement.style.width = '100%';
    previewPhotoElement.style.height = '70px';
    previewPhotoElement.style.objectFit = 'cover';
    photoContainerElement.append(previewPhotoElement);
  });
};

export { disabledAdForm, enabledAdForm, setAddress, resetForm, setOnFormSubmit, setOnFormReset, setAvatar, setPhotos };
