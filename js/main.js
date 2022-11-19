import { initMap, setOnMapLoad, setOnMainPinMove, setOtherPins, setMainPinCoordinate } from './map.js';
import {
  enabledAdForm,
  disabledAdForm,
  setAddress,
  resetForm,
  setOnFormSubmit,
  setOnFormReset,
  setAvatar,
  setPhotos
} from './form.js';
import { disabledMapFilter, enabledMapFilter, setOnFilterChange, getFilteredOffers, resetFilter } from './filter.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './utils.js';

const START_COORDINATE = {
  lat: 35.70000,
  lng: 139.42500,
};

disabledAdForm();
disabledMapFilter();

const resetCoordinate = () => {
  setMainPinCoordinate(START_COORDINATE);
  setAddress(START_COORDINATE);
};

const onGetDataSuccess = (offers) => {
  setOtherPins(offers);
  setOnFilterChange(debounce(() => {
    setOtherPins(getFilteredOffers(offers));
  }));
  setOtherPins(getFilteredOffers(offers));
  enabledMapFilter();
};

const onSendDataSuccess = () => {
  resetForm();
  resetFilter();
  resetCoordinate();
  showSuccessMessage();
  getData(onGetDataSuccess, showAlert);
};

setOnMapLoad(() => {
  enabledAdForm();
  setOnMainPinMove(setAddress);
  setAvatar();
  setPhotos();
  resetCoordinate();
});

setOnFormReset(() => {
  resetFilter();
  getData(onGetDataSuccess, showAlert);
});
setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, showErrorMessage, data);
});

initMap(START_COORDINATE);
getData(onGetDataSuccess, showAlert);
