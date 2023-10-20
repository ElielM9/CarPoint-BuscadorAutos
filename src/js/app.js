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
  fillYearSelect();
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
  });

  yearSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.year = selectedValue;
  });

  minPrice.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.minPrice = selectedValue;
  });

  maxPrice.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.maxPrice = selectedValue;
  });

  doorsSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.doors = selectedValue;
  });

  transmissionSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.transmission = selectedValue;
  });

  colorSelect.addEventListener(`change`, (e) => {
    const selectedValue = e.target.value;

    searchData.color = selectedValue;
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
  const scrollPosition = window.scrollY;

  if (scrollPosition > 90) {
    header.style.backgroundColor = "White";
    searchIcon.style.color = `Black`;
    return;
  }

  header.style.backgroundColor = `transparent`;
  searchIcon.style.color = `White`;
}

function showCars(cars) {
  cars.forEach((car) => {
    const { img, year, brand, model, price, doors, transmission } = car;
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
            <i class="bx bxs-star car__price--reviews">(5 Reseñas)</i>
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

  fillBrandsSelect(cars);
}

function fillBrandsSelect(cars) {
  cars.forEach((car) => {
    const { brand } = car;
    const brandOptions = Array.from(brandSelect.options)
      .map((brandOption) => brandOption.value)
      .includes(brand);

    if (!brandOptions) {
      const option = document.createElement(`option`);
      option.value = brand;
      option.textContent = brand;

      brandSelect.appendChild(option);
    }
  });
}

function fillYearSelect() {
  const yearMax = new Date().getFullYear();
  const yearMin = yearMax - 10;

  for (let i = yearMax; i >= yearMin; i--) {
    const option = document.createElement(`option`);
    option.value = i;
    option.textContent = i;

    yearSelect.appendChild(option);
  }
}
