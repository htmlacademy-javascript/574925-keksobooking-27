const offerTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const TypesEngToRus = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const renderData = (data, dataElement) => {
  if (data && data.length) {
    dataElement.textContent = data;
  } else {
    dataElement.remove();
  }
};

const renderCardDescription = (cardElement, description) => {
  const descriptionElement = cardElement.querySelector('.popup__description');

  descriptionElement.textContent = description;

  renderData(description, descriptionElement);
};

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

    photoContainerElement.append(photofragment);
  } else {
    photoContainerElement.remove();
  }
};

const renderCardOffer = (offerItem) => {
  const offerCardElement = offerTemplateElement.cloneNode(true);

  offerCardElement.querySelector('.popup__avatar').src = offerItem.author.avatar;

  offerCardElement.querySelector('.popup__title').textContent = offerItem.offer.title;

  offerCardElement.querySelector('.popup__text--address').textContent = offerItem.offer.address;

  offerCardElement.querySelector('[data-price]').textContent = offerItem.offer.price;

  offerCardElement.querySelector('.popup__type').textContent = TypesEngToRus[offerItem.offer.type];

  offerCardElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} ${offerItem.offer.rooms > 1 ? 'комнаты' : 'комната'} для ${offerItem.offer.guests} ${offerItem.offer.guests > 1 ? 'гостей' : 'гостя'}`;

  offerCardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;

  renderCardDescription(offerCardElement, offerItem.offer.description);

  renderCardFeatures(offerCardElement, offerItem.offer.features);

  renderCardPhotos(offerCardElement, offerItem.offer.photos, offerItem.offer.title);

  return offerCardElement;
};


export { renderCardOffer };
