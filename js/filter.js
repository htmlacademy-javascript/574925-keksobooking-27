const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('.map__filter');
const mapFilterfeatures = mapFilter.querySelector('.map__features');

const disabledMapFilter = () => {
  mapFilter.classList.add('map__filters--disabled');
  mapFilterfeatures.disabled = true;
  mapFilterSelects.forEach((mapFilterInput) => {
    mapFilterInput.disabled = true;
  });
};

const enabledMapFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterfeatures.disabled = false;
  mapFilterSelects.forEach((mapFilterInput) => {
    mapFilterInput.disabled = false;
  });
};

export { disabledMapFilter, enabledMapFilter };
