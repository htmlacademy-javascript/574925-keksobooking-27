import { getOffers } from './data.js';
const renderCardOffer = () => {
  const offers = getOffers();
  const TypesEngToRus = {
    FLAT: 'Квартира',
    BUNGALOW: 'Бунгало',
    HOUSE: 'Дом',
    PALACE: 'Дворец',
    HOTEL: 'Отель',
  };
  const mapElement = document.querySelector('#map-canvas');
  const offerTemplateElement = document.querySelector('#card').content.querySelector('.popup');
  const offerFragment = document.createDocumentFragment();

  const renderData = (data, dataElement) => {
    if (data && data.length) {
      dataElement.textContent = data;
    } else {
      dataElement.remove();
    }
  };

  offers.forEach((offerItem) => {
    const offerElement = offerTemplateElement.cloneNode(true);

    offerElement.querySelector('.popup__avatar').src = offerItem.author.avatar;

    offerElement.querySelector('.popup__title').textContent = offerItem.offer.title;

    offerElement.querySelector('.popup__text--address').textContent = offerItem.offer.address;

    offerElement.querySelector('.popup__type').textContent = TypesEngToRus[offerItem.offer.type];

    offerElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} ${offerItem.offer.rooms > 1 ? 'комнаты' : 'комната'} для ${offerItem.offer.guests} ${offerItem.offer.guests > 1 ? 'гостей' : 'гостя'}`;

    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;

    offerElement.querySelector('[data-price]').textContent = offerItem.offer.price;

    const renderCardDescription = (cardElement, description) => {
      const descriptionElement = cardElement.querySelector('.popup__description');

      descriptionElement.textContent = description;

      renderData(description, descriptionElement);
    };
    renderCardDescription(offerElement, offerItem.offer.description);

    const renderCardFeatures = (cardElement, offerFeatures) => {
      const offerFeaturesContainerElement = cardElement.querySelector('.popup__features');

      const offerFeaturesElements = offerFeaturesContainerElement.querySelectorAll('.popup__feature');

      if (offerFeatures && offerFeatures.length) {
        const modifiers = offerFeatures.map((offerFeature) => `popup__feature--${offerFeature}`);

        offerFeaturesElements.forEach((offerFeatureItem) => {
          const modifier = offerFeatureItem.classList[1];

          if (!modifiers.includes(modifier)) {
            offerFeatureItem.remove();
          }
        });
      } else {
        offerFeaturesContainerElement.remove();
      }
    };
    renderCardFeatures(offerElement, offerItem.offer.features);

    const renderCardPhotos = (cardElement, photos, title) => {
      const photoTemplateElement = cardElement.querySelector('.popup__photo');
      const photoContainerElement = cardElement.querySelector('.popup__photos');

      const photofragment = document.createDocumentFragment();
      if (photos && photos.length) {
        photoContainerElement.removeChild(photoTemplateElement);

        photos.forEach((photo) => {
          const photoElement = photoTemplateElement.cloneNode(true);

          photoElement.src = photo;
          photoElement.alt = `Фото из объявления: ${title}`;

          photofragment.append(photoElement);
        });

        offerElement.querySelector('.popup__photos').append(photofragment);
      } else {
        photoContainerElement.remove();
      }
    };
    renderCardPhotos(offerElement, offerItem.offer.photos, offerItem.offer.title);

    offerFragment.append(offerElement);
  });
  mapElement.append(offerFragment);
};

export { renderCardOffer };
