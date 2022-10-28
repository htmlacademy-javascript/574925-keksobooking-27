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

export { disabledAdForm, enabledAdForm };
