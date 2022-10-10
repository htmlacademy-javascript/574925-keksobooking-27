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

// const ANNOUNCEMENT_COUNT = 10;
/**
 *  *
 * const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
 * const createOffer = () => ({
    author: '',
    offer:  '',
    location:  '',
  });
 * const announcements = Array.from({length: ANNOUNCEMENT_COUNT}, createOffer);
 */

const randomIntUrl = (String(getRandomInt(1, 10)).padStart(2, '0'));
const createAuthor = () => ({
  avatar: `img/avatars/user${randomIntUrl}.png`
});
const offerTitle = 'Объявление арены жилья';
const offerDescription = 'Специально для вас, наша конура по цене дворца';
const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;
const Location = function (lat, lng) {
  this.lat = lat;
  this.lng = lng;
};
const someLocation = new Location(
  getRandomFloat(latMin, latMax, 5),
  getRandomFloat(lngMin, lngMax, 5)
);
const typeOfBuilding = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const createOffer = () => ({
  title: offerTitle,
  address: `${someLocation.lat}, ${someLocation.lng}`,
  price: getRandomInt(0, 100000),
  rooms: getRandomInt(1, 3),
  guests: getRandomInt(1, 3),
  description: offerDescription,
});

const getOffer = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: someLocation
});
getOffer();
console.log(getOffer());
