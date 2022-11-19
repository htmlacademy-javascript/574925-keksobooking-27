const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.querySelector('body');

const getIsEsc = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onMessageEscKeydown = (evt) => {
  if (getIsEsc(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const onOverlayClick = () => {
  hideMessage();
};

const onErrorButtonClick = () => {
  hideMessage();
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
}

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorButtonElement = errorMessageElement.querySelector('.error__button');
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButtonElement.addEventListener('click', onErrorButtonClick);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};

export { showErrorMessage, showSuccessMessage };
