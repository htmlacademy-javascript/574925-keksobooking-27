import { getOffers } from './data.js';
import { disabledAdForm, enabledAdForm, setAddress } from './form.js';
import { disabledMapFilter, enabledMapFilter } from './filter.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setOtherPins } from './map.js';

const START_COORDINATE = {
  lat: 35.70000,
  lng: 139.42500,
};

const offers = getOffers();

setOnMapLoad(() => {
  enabledAdForm();
  enabledMapFilter();
  setOtherPins(offers);
  setOnMainPinMove(setAddress);
  setAddress(START_COORDINATE);
});

disabledAdForm();
disabledMapFilter();
initMap(START_COORDINATE);
