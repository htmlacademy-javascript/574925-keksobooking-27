import { getOffers } from './data.js';
const renderCardOffer = () => {
  const offers = getOffers();
  const typesEngToRus = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  const map = document.querySelector('#map-canvas');
  const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerFragment = document.createDocumentFragment();

  offers.forEach((offerItem) => {
    const offerElement = offerTemplate.cloneNode(true);

    offerElement.querySelector('.popup__avatar').src = offerItem.author.avatar;

    offerElement.querySelector('.popup__title').textContent = offerItem.offer.title;

    offerElement.querySelector('.popup__text--address').textContent = offerItem.offer.address;

    offerElement.querySelector('.popup__type').textContent = typesEngToRus[offerItem.offer.type];

    offerElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} ${offerItem.offer.rooms > 1 ? 'комнаты' : 'комната'} для ${offerItem.offer.guests} ${offerItem.offer.guests > 1 ? 'гостей' : 'гостя'}`;

    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;

    offerElement.querySelector('[data-price]').textContent = offerItem.offer.price;

    const renderCardDescription = (cardElement, description) => {
      const descriptionElement = cardElement.querySelector('.popup__description');
      descriptionElement.textContent = description;
      if (description && description.length) {
        descriptionElement.textContent = description;
      } else {
        descriptionElement.remove();
      }
    };
    renderCardDescription(offerElement, offerItem.offer.description);

    const renderCardFeatures = (cardElement, offerFeatures) => {
      const offerFeaturesContainer = cardElement.querySelector('.popup__features');

      const offerFeaturesList = offerFeaturesContainer.querySelectorAll('.popup__feature');
      if (offerFeatures && offerFeatures.length) {
        const modifiers = offerFeatures.map((offerFeature) => `popup__feature--${offerFeature}`);

        offerFeaturesList.forEach((offerFeatureItem) => {
          const modifier = offerFeatureItem.classList[1];

          if (!modifiers.includes(modifier)) {
            offerFeatureItem.remove();
          }
        });
      } else {
        offerFeaturesContainer.remove();
      }
    };
    renderCardFeatures(offerElement, offerItem.offer.features);

    const renderCardPhotos = (cardElement, photos) => {
      const photoTemplate = cardElement.querySelector('.popup__photo');
      const photoContainer = cardElement.querySelector('.popup__photos');

      const photofragment = document.createDocumentFragment();
      if (photos && photos.length) {
        photoContainer.removeChild(photoTemplate);

        for (let i = 0; i < photos.length; i++) {
          const photoElement = photoTemplate.cloneNode(true);

          photoElement.src = photos[i];

          photofragment.append(photoElement);
        }
        offerElement.querySelector('.popup__photos').append(photofragment);
      } else {
        photoContainer.remove();
      }
    };
    renderCardPhotos(offerElement, offerItem.offer.photos);

    offerFragment.append(offerElement);
  });
  map.append(offerFragment);
};

export { renderCardOffer };
