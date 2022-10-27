const adForm = document.querySelector('.ad-form');
const adFormInputs = adForm.querySelectorAll('fieldset');

const disabledAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormInputs.forEach((adFormInput) => {
    adFormInput.disabled = true;
  });
};

const enabledAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormInputs.forEach((adFormInput) => {
    adFormInput.disabled = false;
  });
};

export { disabledAdForm, enabledAdForm };
