/* eslint-disable no-console */
import { renderCardOffer } from './template.js';
import { disabledAdForm, enabledAdForm } from './form.js';
import { disabledMapFilter, enabledMapFilter } from './filter.js';
renderCardOffer();
disabledAdForm();
disabledMapFilter();


const resetButtonElement = document.querySelector('.ad-form__reset');

const mapElement = L.map('map-canvas')
  .on('load', () => {
    enabledAdForm();
    enabledMapFilter();
    console.log('load map');

  })
  .setView({
    lat: 35.70000,
    lng: 139.42500,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapElement);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.70000,
    lng: 139.42500,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(mapElement);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

resetButtonElement.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.70000,
    lng: 139.42500,
  });

  mapElement.setView({
    lat: 35.70000,
    lng: 139.42500,
  }, 16);
});
