import {
  getRandomInt,
  getRandomFloat,
  getRandomValue,
  createRandomUniqArray
} from './utils.js';

const ANNOUNCEMENT_COUNT = 10;

const offerTitle = ['Объявление аренды квартиры', 'Объявление аренды дворца', 'Объявление аренды комнаты', 'Объявление аренды дома', 'Объявление аренды бунгало', 'Объявление аренды коттеджа', 'Объявление аренды палатки', 'Объявление аренды гостиничного номера', 'Объявление аренды картонной коробки', 'Объявление аренды собачьей будки'];

const offerDescription = ['Красивая квартира для встреч на сутки', 'Норма хата загудеть на выходные', 'Дешманский номер в захудалой гостиннице', 'Брезентовая палатка для отдыха на природе', 'Переносная коробка для ночевок на улице', 'Домик с комарами в лесу', 'Крутой дворец мажориков', 'Будка вместе с собачьей охраной', 'Крыша из сена, но зато у моря', 'Специально для вас, наша конура по цене дворца',];

const Price = {
  MIN: 1,
  MAX: 100000
};

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const Location = {
  MIN_LATITUDE: LAT_MIN,
  MAX_LATITUDE: LAT_MAX,
  MIN_LONGITUDE: LNG_MIN,
  MAX_LONGITUDE: LNG_MAX,
};

const typeOfBuilding = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const randomIntUrl = (String(getRandomInt(1, 10)).padStart(2, '0'));

const createAuthorData = () => ({
  avatar: `img/avatars/user${randomIntUrl}.png`
});

const createLocationData = () => ({
  lat: getRandomFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5),
  lng: getRandomFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5),
});

const createOfferData = () => ({
  title: getRandomValue(offerTitle),
  address: `${getRandomFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5)}, ${getRandomFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5)}`,
  price: getRandomInt(Price.MIN, Price.MAX),
  rooms: getRandomInt(1, 3),
  type: getRandomValue(typeOfBuilding),
  guests: getRandomInt(1, 3),
  checkin: getRandomValue(checkinTime),
  checkoutTime: getRandomValue(checkoutTime),
  description: getRandomValue(offerDescription),
  features: createRandomUniqArray(features),
  photos: createRandomUniqArray(photos)
});

const getOffer = () => ({
  author: createAuthorData(),
  offer: createOfferData(),
  location: createLocationData()
});

const getOffers = () => Array.from({ length: ANNOUNCEMENT_COUNT }, getOffer);

export { getOffers };
