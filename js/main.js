/* eslint-disable no-console */
import { getOffers } from './data.js';
// import { createOffer } from './template.js';
console.log(getOffers());
const map = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerFragment = document.createDocumentFragment();
const offers = getOffers();

offers.forEach((offerItem) => {
  const offerElement = offerTemplate.cloneNode(true);

  // offerElement.querySelector('.popup__description').textContent = offerItem.offer.description;
  const renderCardDescription = (description) => {
    const descriptionElement = offerElement.querySelector('.popup__description');
    descriptionElement.textContent = description;
    if (description && description.length) {
      descriptionElement.textContent = description;
    } else {
      descriptionElement.remove();
    }
  };
  renderCardDescription(offerItem.offer.description);

  offerElement.querySelector('.popup__title').textContent = offerItem.offer.title;

  offerElement.querySelector('.popup__text--address').textContent = offerItem.offer.address;

  offerElement.querySelector('.popup__text--price').textContent = `${offerItem.offer.price} ₽/ночь`;

  offerElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} ${offerItem.offer.rooms > 1 ? 'комнаты' : 'комната'} для ${offerItem.offer.guests} ${offerItem.offer.guests > 1 ? 'гостей' : 'гостя'}`;

  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;


  offerElement.querySelector('.popup__avatar').src = offerItem.author.avatar;

  const photoTemplate = offerElement.querySelector('.popup__photo');
  const photofragment = document.createDocumentFragment();

  offerElement.querySelector('.popup__photos').removeChild(photoTemplate);

  const getPhotos = () => {
    const photos = offerItem.offer.photos;

    for (let i = 0; i < photos.length; i++) {
      const photoElement = photoTemplate.cloneNode(true);

      photoElement.src = photos[i];

      photofragment.append(photoElement);
    }
    offerElement.querySelector('.popup__photos').append(photofragment);
  };
  getPhotos();

  const getFeatures = () => {
    const offerFeatures = offerItem.offer.features;

    const offerFeaturesContainer = offerElement.querySelector('.popup__features');

    const offerFeaturesList = offerFeaturesContainer.querySelectorAll('.popup__feature');

    const modifiers = offerFeatures.map((offerFeature) => `popup__feature--${offerFeature}`);

    offerFeaturesList.forEach((offerFeatureItem) => {
      const modifier = offerFeatureItem.classList[1];

      if (!modifiers.includes(modifier)) {
        offerFeatureItem.remove();
      }
    });
  };
  getFeatures();


  // const typesEngToRus = {
  //   flat: 'Квартира',
  //   bungalow: 'Бунгало',
  //   house: 'Дом',
  //   palace: 'Дворец',
  //   hotel: 'Отель',
  // };

  offerFragment.append(offerElement);
});
map.append(offerFragment);
