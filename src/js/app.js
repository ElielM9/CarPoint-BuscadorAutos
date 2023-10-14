// Variables

// Eventos
document.addEventListener(`DOMContentLoaded`, () => {
  openCloseSearchbar();
  openCloseNav();
  closeOutsideClick();
});

// Funciones
function openCloseSearchbar() {
  const searchIcon = document.querySelector(`#search-icon`);
  const searchBox = document.querySelector(`#search-box`);

  searchIcon.onclick = () => {
    searchBox.classList.toggle(`search-box--active`);
    searchBox.classList.toggle(`search-box__contenedor`);
  };
}

function openCloseNav() {
  const hamburguerBtn = document.querySelector(`.hamburguer`);
  const nav = document.querySelector(`.nav`);

  hamburguerBtn.onclick = () => {
    nav.classList.toggle(`nav--active`);
  };

}

function closeOutsideClick() {
  const searchIcon = document.querySelector(`#search-icon`);
  const searchBox = document.querySelector(`#search-box`);
  const hamburguerBtn = document.querySelector(`.hamburguer`);
  const nav = document.querySelector(`.nav`);

  // Agregar evento onclick al documento para cerrar searchBar y nav cuando se hace clic en cualquier parte
  window.onclick = (e) => {
    const reference = e.target;

    // Verifica si el searchBar está abierto, si el click no ocurrió en el icono de búsqueda y sino ocurrió dentro del searchbar
    if (
      searchBox.classList.contains(`search-box--active`) &&
      reference !== searchIcon &&
      !searchBox.contains(reference)
    ) {
      searchBox.classList.remove(`search-box--active`); // Cierra el searchBar al eliminar la clase que lo hace visible
      searchBox.classList.remove(`search-box__contenedor`);
    }

    // Verifica si la clase `nav--active` existe, despues revisa si el click no ocurrió en el boton hamburguesa para despúes ver si no ocurrió dentro del nav.
    if (
      nav.classList.contains(`nav--active`) &&
      reference !== hamburguerBtn &&
      !nav.contains(reference)
    ) {
      nav.classList.remove(`nav--active`);
    }

  };

  closeOnScroll(nav, searchBox);
}

function closeOnScroll(nav, searchBox) {
  window.onscroll = () => {
    nav.classList.remove(`nav--active`);
    searchBox.classList.remove(`search-box--active`);
    searchBox.classList.remove(`search-box__contenedor`);
  };
}
