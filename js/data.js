import {
  getRandomInt,
  getRandomFloat,
  getRandomValue,
  createRandomUniqArray
} from './utils.js';

const ANNOUNCEMENT_COUNT = 1;

const OFFER_TITLE = ['Аренда квартиры', 'Аренда дворца', 'Аренда комнаты', 'Аренда дома', 'Аренда бунгало', 'Аренда коттеджа', 'Аренда палатки', 'Аренда гостиничного номера', 'Аренда картонной коробки', 'Аренда собачьей будки'];

const OFFER_DESCRIPTION = ['Красивая квартира для встреч на сутки', 'Норма хата загудеть на выходные', 'Дешманский номер в захудалой гостиннице', 'Брезентовая палатка для отдыха на природе', 'Переносная коробка для ночевок на улице', 'Домик с комарами в лесу', 'Крутой дворец мажориков', 'Будка вместе с собачьей охраной', 'Крыша из сена, но зато у моря', 'Специально для вас, наша конура по цене дворца',];

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

const TYPE_OF_BUILDING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const randomIntUrl = (String(getRandomInt(1, 10)).padStart(2, '0'));

const createAuthorData = () => ({
  avatar: `img/avatars/user${randomIntUrl}.png`
});


const createLocationData = () => ({
  lat: getRandomFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5),
  lng: getRandomFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5),
});

const createOfferData = () => ({
  title: getRandomValue(OFFER_TITLE),
  address: `${getRandomFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5)}, ${getRandomFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5)}`,
  price: getRandomInt(Price.MIN, Price.MAX),
  rooms: getRandomInt(1, 3),
  type: getRandomValue(TYPE_OF_BUILDING),
  guests: getRandomInt(1, 3),
  checkin: getRandomValue(CHECKIN_TIME),
  checkout: getRandomValue(CHECKOUT_TIME),
  description: getRandomValue(OFFER_DESCRIPTION),
  features: createRandomUniqArray(FEATURES),
  photos: createRandomUniqArray(PHOTOS)
});

const getOffer = () => ({
  author: createAuthorData(),
  offer: createOfferData(),
  location: createLocationData()
});

const getOffers = () => Array.from({ length: ANNOUNCEMENT_COUNT }, getOffer);

export { getOffers };
