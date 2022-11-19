const OFFERS_COUNT = 10;
const Price = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const mapFilterElement = document.querySelector('.map__filters');
const mapFilterSelectElements = mapFilterElement.querySelectorAll('.map__filter');
const mapFilterfeatureElements = mapFilterElement.querySelector('.map__features');
const featuresCheckboxElements = mapFilterElement.querySelectorAll('.map__checkbox');
const housingTypeElement = mapFilterElement.querySelector('#housing-type');
const housingPriceElement = mapFilterElement.querySelector('#housing-price');
const housingRoomsElement = mapFilterElement.querySelector('#housing-rooms');
const housingGuestsElement = mapFilterElement.querySelector('#housing-guests');

const disabledMapFilter = () => {
  mapFilterElement.classList.add('map__filters--disabled');
  mapFilterfeatureElements.disabled = true;
  mapFilterSelectElements.forEach((mapFilterInput) => {
    mapFilterInput.disabled = true;
  });
};

const enabledMapFilter = () => {
  mapFilterElement.classList.remove('map__filters--disabled');
  mapFilterfeatureElements.disabled = false;
  mapFilterSelectElements.forEach((mapFilterInput) => {
    mapFilterInput.disabled = false;
  });
};
/**
 *
 *
 */
const filterByType = (offer, type) =>
  type === 'any' || offer.offer.type === type;

const filterByRooms = (offer, rooms) =>
  rooms === 'any' || offer.offer.rooms === Number(rooms);

const filterByGuests = (offer, guests) =>
  guests === 'any' || offer.offer.guests === Number(guests);

const filterByPrice = (offer, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price < Price.MIDDLE;
    case 'middle':
      return (offer.offer.price < Price.HIGH && offer.offer.price > Price.MIDDLE);
    case 'high':
      return offer.offer.price > Price.HIGH;
  }
};

const filterByFeatures = (offer, features) => {
  if (!features.length) {
    return true;
  }
  if (!offer.offer.features) {
    return false;
  }
  return features.every((feature) => offer.offer.features.includes(feature));
};

const getFilteredOffers = (offers) => {
  const selectedTypeValue = housingTypeElement.value;
  const selectedPriceValue = housingPriceElement.value;
  const selectedRoomsValue = housingRoomsElement.value;
  const selectedGuestsValue = housingGuestsElement.value;
  const selectedFeatures = [];

  featuresCheckboxElements.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeatures.push(checkbox.value);
    }
  });

  const filteredOffers = [];
  for (const offer of offers) {
    if (filteredOffers.length >= OFFERS_COUNT) {
      break;
    }
    if (
      filterByType(offer, selectedTypeValue) &&
      filterByPrice(offer, selectedPriceValue) &&
      filterByRooms(offer, selectedRoomsValue) &&
      filterByGuests(offer, selectedGuestsValue) &&
      filterByFeatures(offer, selectedFeatures)
    ) {
      filteredOffers.push(offer);
    }
  }
  return filteredOffers;
};

const resetFilter = () => mapFilterElement.reset();

const setOnFilterChange = (cb) => {
  mapFilterElement.addEventListener('change', () => cb());
};
/**
 *
 *
 */
export { disabledMapFilter, enabledMapFilter, setOnFilterChange, getFilteredOffers, resetFilter, OFFERS_COUNT };
