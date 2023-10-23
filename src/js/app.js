// Variables navegacion
const searchIcon = document.querySelector(`#search-icon`);
const hamburguerBtn = document.querySelector(`.hamburguer`);

// Variables filtro de busqueda
const brandSelect = document.querySelector(`#brand`);
const yearSelect = document.querySelector(`#year`);
const minPrice = document.querySelector(`#min`);
const maxPrice = document.querySelector(`#max`);
const doorsSelect = document.querySelector(`#doors`);
const transmissionSelect = document.querySelector(`#transmission`);
const colorSelect = document.querySelector(`#color`);

// Contenedor de resultados
const results = document.querySelector(`#results`);

const searchData = {
  year: ``,
  brand: ``,
  minPrice: ``,
  maxPrice: ``,
  doors: ``,
  transmission: ``,
  color: ``,
};

// Eventos
document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  eventListeners();
  showCars(cars);
  fillCarsSelects(cars);
}

function eventListeners() {
  // Eventos del searchBar y Nav.

  searchIcon.addEventListener(`click`, openSearchbar);
  hamburguerBtn.addEventListener(`click`, openNav);

  // Cerrar el searchbar y el nav al hacer click en cualquier parte del documento.
  window.addEventListener(`click`, closeOutsideClick);
  // Cambiar el color del header al hacer scroll.
  window.addEventListener(`scroll`, colorHeaderScroll);

  // Eventos para el filtro de búsqueda.
  brandSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.brand = selectedValue;

    filterCar();
  });

  yearSelect.addEventListener(`change`, (e) => {
    const selectedValue = parseInt(e.target.value);

    searchData.year = selectedValue;

    filterCar();
  });

  minPrice.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.minPrice = selectedValue;

    filterCar();
  });

  maxPrice.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.maxPrice = selectedValue;

    filterCar();
  });

  doorsSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.doors = selectedValue;

    filterCar();
  });

  transmissionSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.transmission = selectedValue;

    filterCar();
  });

  colorSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.color = selectedValue;

    filterCar();
  });

  // console.log(searchData);
}

// Funciones
function openSearchbar() {
  const searchBox = document.querySelector(`#search-box`);

  searchBox.classList.toggle(`search-box--active`);
  searchBox.classList.toggle(`search-box__contenedor`);
}

function openNav() {
  const nav = document.querySelector(`.nav`);

  nav.classList.toggle(`nav--active`);
}

function closeOutsideClick(e) {
  const reference = e.target;
  const searchBox = document.querySelector(`#search-box`);
  const nav = document.querySelector(`.nav`);

  /* 
     1- Verifica si el searchbar está abierto.
     2- Revisa si el click no ocurrió en el icono. 
     3- Ve si el click no ocurrió dentro del searchbar.
  */
  if (
    searchBox.classList.contains(`search-box--active`) &&
    reference !== searchIcon &&
    !searchBox.contains(reference)
  ) {
    // Cierra el searchBar al eliminar la clase que lo hace visible
    searchBox.classList.remove(`search-box--active`, `search-box__contenedor`);
  }

  /* 
    1- Verifica si la clase `nav--active` existe.
    2- Revisa si el click no ocurrió en el boton hamburguesa.
  */
  if (nav.classList.contains(`nav--active`) && reference !== hamburguerBtn) {
    nav.classList.remove(`nav--active`);
  }

  closeOnScroll(nav, searchBox);
}

function closeOnScroll(nav, searchBox) {
  window.addEventListener(`scroll`, () => {
    nav.classList.remove(`nav--active`);
    searchBox.classList.remove(`search-box--active`, `search-box__contenedor`);
  });
}

function colorHeaderScroll() {
  const header = document.querySelector(`.header`);
  const scrollPosY = window.scrollY;

  header.classList.toggle(`header__bg`, scrollPosY > 100);
}

function showCars(cars) {
  // Limpia el HTML previo
  cleanHTML();

  cars.forEach((car) => {
    const { img, year, brand, model, price, doors, transmission } = car;
    let randomNumber = Math.floor(Math.random() * 100);
    const carCard = `
        <picture>
          <source srcset="${img}.avif" type="image/avif" />
          <source srcset="${img}.webp" type="image/webp" />
          <img
            class="car__img"
            loading="lazy"
            width="500"
            height="300"
            src="${img}.jpg"
            alt=""
          />
        </picture>
        <span class="car__year">${year}</span>
        <div class="car__content">
          <h2 class="car__model">${brand} ${model}</h2>
          <p class="car__price">
            $${price.toLocaleString()}
            <i class="bx bxs-star car__price--reviews">(${randomNumber} Reseñas)</i>
          </p>
          <p class="car__character">
            <i class="bx bxs-door-open car__icon"></i>
            ${doors} Puertas
          </p>
          <p class="car__character">
            <i class="bx bxs-car car__icon"></i>
            ${transmission}
          </p>
          <div class="car__btns">
            <a href="#" class="car__btn">Comprar</a>
            <a href="#" class="car__details">Ver detalles</a>
          </div>
        </div>
`;

    const carHTML = document.createElement(`div`);
    carHTML.classList.add(`car`);
    carHTML.innerHTML = carCard;

    results.appendChild(carHTML);
  });
}

function cleanHTML() {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}

function fillCarsSelects(cars) {
  let carBrands = cars
    .map(({ brand }) => brand)
    .filter((brand, index, carBrands) => carBrands.indexOf(brand) === index);

  fillSelect(carBrands, brandSelect);

  let carDoors = cars
    .map(({ doors }) => doors)
    .filter((doors, index, carDoors) => carDoors.indexOf(doors) === index);

  fillSelect(carDoors, doorsSelect);

  let carColors = cars
    .map(({ color }) => color)
    .filter((color, index, carColors) => carColors.indexOf(color) === index);

  fillSelect(carColors, colorSelect);

  fillYearSelect();
}

function fillYearSelect() {
  const yearMax = new Date().getFullYear();
  const yearMin = yearMax - 10;

  for (let i = yearMax; i >= yearMin; i--) {
    const option = createOption(i);
    yearSelect.appendChild(option);
  }
}

function fillSelect(carsData, selectElement) {
  carsData.forEach((carData) => {
    const option = createOption(carData);
    selectElement.appendChild(option);
  });
}

function createOption(value) {
  const option = document.createElement(`option`);
  option.value = value;
  option.textContent = value;

  return option;
}

function filterCar() {
  const result = cars
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterPrice)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor);

  if (result.length) {
    showCars(result);
  } else {
    noResults();
  }
}

function noResults() {
  cleanHTML();

  const noResult = document.createElement(`p`);
  noResult.classList.add(`alerta`, `error`);
  noResult.textContent = `No se encontraron resultados, prueba de nuevo`;

  results.appendChild(noResult);
}

function filterBrand(car) {
  const { brand } = searchData;
  if (brand) {
    return car.brand === brand;
  }

  return car;
}

function filterYear(car) {
  const { year } = searchData;

  if (year) {
    return car.year === year;
  }

  return car;
}

function filterPrice(car) {
  const { minPrice, maxPrice } = searchData;

  if (minPrice && maxPrice) {
    return car.price >= minPrice && car.price <= maxPrice;
  }

  if (minPrice) {
    return car.price >= minPrice;
  } else if (maxPrice) {
    return car.price <= maxPrice;
  }

  return car;
}

function filterDoors(car) {
  const { doors } = searchData;

  if (doors) {
    return car.doors === parseInt(doors);
  }

  return car;
}

function filterTransmission(car) {
  const { transmission } = searchData;

  if (transmission) {
    return car.transmission.toLowerCase() == transmission;
  }

  return car;
}

function filterColor(car) {
  const { color } = searchData;

  if (color) {
    return car.color === color;
  }

  return car;
}
