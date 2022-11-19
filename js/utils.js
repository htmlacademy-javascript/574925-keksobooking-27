const ALERT_SHOW_RIME = 5000;

const getRandomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const randomInt = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(randomInt);
};

const getRandomFloat = (min, max, count = 1) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if (min < 0 || max < 0 || count < 0) {
    return NaN;
  }
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const randomFloat = Math.random() * (upper - lower) + lower;
  return Number(randomFloat.toFixed(count));
};

const getRandomValue = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const createRandomUniqArray = (array) => {
  const arr = Array.from(array);
  const arrayNew = new Array(getRandomInt(1, arr.length));
  for (let i = 0; i < arrayNew.length; i++) {
    arrayNew[i] = arr.splice(getRandomInt(0, arr.length - 1), 1).join();
  }
  return arrayNew;
};

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '20px 15px';
  alert.style.fontSize = '24px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_RIME);
};

const setImage = (chooserElement, previewElement) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];

  const file = chooserElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewElement.src = URL.createObjectURL(file);
  }
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomInt,
  getRandomFloat,
  getRandomValue,
  createRandomUniqArray,
  showAlert,
  setImage,
  debounce
};
