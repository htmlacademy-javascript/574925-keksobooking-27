
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

export {
  getRandomInt,
  getRandomFloat,
  getRandomValue,
  createRandomUniqArray
};
