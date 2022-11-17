/* eslint-disable no-console */
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
import { disabledMapFilter, enabledMapFilter } from './filter.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';

const START_COORDINATE = {
  lat: 35.70000,
  lng: 139.42500,
};

const resetCoordinate = () => {
  setMainPinCoordinate(START_COORDINATE);
  setAddress(START_COORDINATE);
};

const onGetDataSuccess = (offers) => {
  setOtherPins(offers);
  enabledMapFilter();
};

const onSendDataSuccess = () => {
  resetForm();
  resetCoordinate();
  showSuccessMessage();
};

setOnMapLoad(() => {
  setOnMainPinMove(setAddress);
  enabledAdForm();
  setAvatar();
  setPhotos();
  resetCoordinate();
});

setOnFormReset(resetCoordinate);

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, showErrorMessage, data);
});

disabledAdForm();
disabledMapFilter();
initMap(START_COORDINATE);
getData(onGetDataSuccess, showAlert);
