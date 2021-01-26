const countries = {
  MX: {
    region: 'the americas',
    name: 'Mexico',
    desc:
      'Every year, an estimated 400,000 people flee violence and poverty in El Salvador, Honduras and Guatemala and enter Mexico with the hope of reaching the United States. In Mexico, they are systematically exposed to further episodes of violence. ',
    impacted: {
      qty: 37500,
      subtext: 'outpatient consultations',
    },
    media: [
      {
        brand: 'tw',
        url: 'https://twitter.com/MSF_Mexico',
        tag: '@MSF_Mexico',
      },
      {
        brand: 'fb',
        url: 'https://www.facebook.com/MSF.Mexico',
        tag: 'MSF.Mexico',
      },
    ],
  },
  BR: {
    region: 'the americas',
    name: 'Brazil',
    desc:
      "Learn about MSF's activities in northern Brazil, where we are working to improve medical care for Venezuelan migrants and asylum seekers and the local population. ",
    impacted: {
      qty: 37500,
      subtext: 'outpatient consultations',
    },
    media: [
      {
        brand: 'tw',
        url: 'https://twitter.com/MSF_Mexico',
        tag: '@MSF_Mexico',
      },
      {
        brand: 'fb',
        url: 'https://www.facebook.com/MSF.Mexico',
        tag: 'MSF.Mexico',
      },
    ],
  },
};

const createValuesConfig = (countriesObj, value) => {
  let selectable = {};
  Object.keys(countriesObj).forEach((isoCode) => {
    selectable[isoCode] = value;
  });
  return selectable;
};

const mapConfig = {
  map: 'world_merc',
  zoomOnScroll: false,
  regionsSelectable: true,
  regionsSelectableOne: true,
  backgroundColor: 'transparent',
  regionStyle: {
    initial: {
      fill: '#d6d6d6',
      'fill-opacity': 1,
      stroke: 'none',
      'stroke-width': 0,
      'stroke-opacity': 1,
    },
    hover: {
      'fill-opacity': 1,
      fill: '#373737',
      // cursor: 'grab',
    },
    selected: {
      fill: '#373737',
    },
  },
  series: {
    regions: [
      {
        values: createValuesConfig(countries, '#ec1d24'),
        attribute: 'fill',
      },
    ],
  },
};

const mapContainer = $('#jvector-map');
const countryCard = document.querySelector('.country-card');

$(function () {
  mapContainer.vectorMap(mapConfig);
});

function handleCountryClick(e) {
  const isoCode = e.target.dataset.code;
  if (isoCode) {
    if (countries[isoCode]) {
      const { region, name, desc, impacted, media } = countries[isoCode];
      countryCard.style.display = 'flex';
      countryCard.querySelector('.region').textContent = region;
      countryCard.querySelector('.name').textContent = name;
      countryCard.querySelector('.desc').textContent = desc;
    }
  }
}

mapContainer[0].addEventListener('click', handleCountryClick);
