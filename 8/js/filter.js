const mapFilterElement = document.querySelector('.map__filters');
const mapFilterSelectElements = mapFilterElement.querySelectorAll('.map__filter');
const mapFilterfeatureElements = mapFilterElement.querySelector('.map__features');

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

export { disabledMapFilter, enabledMapFilter };
