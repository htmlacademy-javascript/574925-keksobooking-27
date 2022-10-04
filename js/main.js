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

getRandomInt(1, 5);

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

getRandomFloat(1, 3, 2);
