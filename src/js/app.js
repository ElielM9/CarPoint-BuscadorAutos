// Variables
const searchIcon = document.querySelector(`#search-icon`);
const hamburguerBtn = document.querySelector(`.hamburguer`);

// Eventos
document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  eventListeners();
}

function eventListeners() {
  // Eventos del searchBar y Nav.
  
  searchIcon.addEventListener(`click`, openSearchbar);
  hamburguerBtn.addEventListener(`click`, openNav);

  // Cerrar el searchbar y el nav al hacer click en cualquier parte del documento.
  window.addEventListener(`click`, closeOutsideClick);
  // Cambiar el color del header al hacer scroll.
  window.addEventListener(`scroll`, colorHeaderScroll);
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
    searchBox.classList.remove(`search-box--active`);
    searchBox.classList.remove(`search-box__contenedor`);
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
    searchBox.classList.remove(`search-box--active`);
    searchBox.classList.remove(`search-box__contenedor`);
  });
}

function colorHeaderScroll() {
  const header = document.querySelector(`.header`);
  const scrollPosition = window.scrollY;

  if (scrollPosition > 90) {
    header.style.backgroundColor = "White";

    return;
  }

  header.style.backgroundColor = `transparent`;
}
