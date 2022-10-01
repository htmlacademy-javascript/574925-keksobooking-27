const getRandomInt = (min, max) => {
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
  if (min < 0 || max < 0 || count < 0) {
    return NaN;
  }
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const randomFlaot = Math.random() * (upper - lower) + lower;
  return Number(randomFlaot.toFixed(count));
};

getRandomFloat(1, 3, 2);
