import { renderCardOffer } from './template.js';
import { OFFERS_COUNT } from './filter.js';

const mapElement = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(mapElement);
const mapLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const otherPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const initMap = (coordinate) => {
  mapElement.setView(coordinate, 10);

  L.tileLayer(
    mapLayer,
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapElement);

  mainPinMarker.setLatLng(coordinate);
  mainPinMarker.addTo(mapElement);
};

const createOtherPinMakers = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: otherPinIcon,
      }
    );
    marker.addTo(markerGroup).bindPopup(renderCardOffer(offer));
  });
};

const setOtherPins = (offers) => {
  markerGroup.clearLayers();
  createOtherPinMakers(offers.slice(0, OFFERS_COUNT));
};

const setOnMapLoad = (cb) => {
  mapElement.on('load', cb);
};

const setOnMainPinMove = (cb) => {
  mainPinMarker.on('move', (evt) => cb(evt.target.getLatLng()));
};

const setMainPinCoordinate = (coordinate) => {
  mainPinMarker.setLatLng(coordinate);
};

export { initMap, setOnMapLoad, setOnMainPinMove, setOtherPins, setMainPinCoordinate };
