const searchIcon=document.querySelector("#search-icon"),hamburguerBtn=document.querySelector(".hamburguer"),brandSelect=document.querySelector("#brand"),yearSelect=document.querySelector("#year"),minPrice=document.querySelector("#min"),maxPrice=document.querySelector("#max"),doorsSelect=document.querySelector("#doors"),transmissionSelect=document.querySelector("#transmission"),colorSelect=document.querySelector("#color"),results=document.querySelector("#results"),searchData={year:"",brand:"",minPrice:"",maxPrice:"",doors:"",transmission:"",color:""};function startApp(){eventListeners(),showCars(cars)}function eventListeners(){searchIcon.addEventListener("click",openSearchbar),hamburguerBtn.addEventListener("click",openNav),window.addEventListener("click",closeOutsideClick),window.addEventListener("scroll",colorHeaderScroll),brandSelect.addEventListener("change",e=>{const c=e.target.value;searchData.brand=c}),yearSelect.addEventListener("change",e=>{const c=e.target.value;searchData.year=c}),minPrice.addEventListener("change",e=>{const c=e.target.value;searchData.minPrice=c}),maxPrice.addEventListener("change",e=>{const c=e.target.value;searchData.maxPrice=c}),doorsSelect.addEventListener("change",e=>{const c=e.target.value;searchData.doors=c}),transmissionSelect.addEventListener("change",e=>{const c=e.target.value;searchData.transmission=c}),colorSelect.addEventListener("change",e=>{const c=e.target.value;searchData.color=c})}function openSearchbar(){const e=document.querySelector("#search-box");e.classList.toggle("search-box--active"),e.classList.toggle("search-box__contenedor")}function openNav(){document.querySelector(".nav").classList.toggle("nav--active")}function closeOutsideClick(e){const c=e.target,t=document.querySelector("#search-box"),n=document.querySelector(".nav");t.classList.contains("search-box--active")&&c!==searchIcon&&!t.contains(c)&&t.classList.remove("search-box--active","search-box__contenedor"),n.classList.contains("nav--active")&&c!==hamburguerBtn&&n.classList.remove("nav--active"),closeOnScroll(n,t)}function closeOnScroll(e,c){window.addEventListener("scroll",()=>{e.classList.remove("nav--active"),c.classList.remove("search-box--active","search-box__contenedor")})}function colorHeaderScroll(){const e=document.querySelector(".header");if(window.scrollY>90)return e.style.backgroundColor="White",void(searchIcon.style.color="Black");e.style.backgroundColor="transparent",searchIcon.style.color="White"}function showCars(e){e.forEach(e=>{const{img:c,year:t,brand:n,model:r,price:a,doors:s,transmission:o}=e,l=`\n        <picture>\n          <source srcset="${c}.avif" type="image/avif" />\n          <source srcset="${c}.webp" type="image/webp" />\n          <img\n            class="car__img"\n            loading="lazy"\n            width="500"\n            height="300"\n            src="${c}.jpg"\n            alt=""\n          />\n        </picture>\n        <span class="car__year">${t}</span>\n        <div class="car__content">\n          <h2 class="car__model">${n} ${r}</h2>\n          <p class="car__price">\n            $${a.toLocaleString()}\n            <i class="bx bxs-star car__price--reviews">(5 Reseñas)</i>\n          </p>\n          <p class="car__character">\n            <i class="bx bxs-door-open car__icon"></i>\n            ${s} Puertas\n          </p>\n          <p class="car__character">\n            <i class="bx bxs-car car__icon"></i>\n            ${o}\n          </p>\n          <div class="car__btns">\n            <a href="#" class="car__btn">Comprar</a>\n            <a href="#" class="car__details">Ver detalles</a>\n          </div>\n        </div>\n`,i=document.createElement("div");i.classList.add("car"),i.innerHTML=l,results.appendChild(i)}),fillSelects(e)}function fillCarsSelects(e){let c=[],t=[],n=[];e.forEach(e=>{const{brand:r,doors:a,color:s}=e;c.includes(r)||c.push(r),t.includes(a)||t.push(a),n.includes(s)||n.push(s)}),fillYearSelect(),fillSelect(c,brandSelect),fillSelect(t,doorsSelect),fillSelect(n,colorSelect)}function fillYearSelect(){const e=(new Date).getFullYear(),c=e-10;for(let t=e;t>=c;t--){const e=createOption(t);yearSelect.appendChild(e)}}function fillSelect(e,c){e.forEach(e=>{const t=createOption(e);c.appendChild(t)})}function createOption(e){const c=document.createElement("option");return c.value=e,c.textContent=e,c}document.addEventListener("DOMContentLoaded",startApp);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hJY29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ3VlckJ0biIsImJyYW5kU2VsZWN0IiwieWVhclNlbGVjdCIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJkb29yc1NlbGVjdCIsInRyYW5zbWlzc2lvblNlbGVjdCIsImNvbG9yU2VsZWN0IiwicmVzdWx0cyIsInNlYXJjaERhdGEiLCJ5ZWFyIiwiYnJhbmQiLCJkb29ycyIsInRyYW5zbWlzc2lvbiIsImNvbG9yIiwic3RhcnRBcHAiLCJldmVudExpc3RlbmVycyIsInNob3dDYXJzIiwiY2FycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuU2VhcmNoYmFyIiwib3Blbk5hdiIsIndpbmRvdyIsImNsb3NlT3V0c2lkZUNsaWNrIiwiY29sb3JIZWFkZXJTY3JvbGwiLCJlIiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoQm94IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVmZXJlbmNlIiwibmF2IiwiY29udGFpbnMiLCJyZW1vdmUiLCJjbG9zZU9uU2Nyb2xsIiwiaGVhZGVyIiwic2Nyb2xsWSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9yRWFjaCIsImNhciIsImltZyIsIm1vZGVsIiwicHJpY2UiLCJjYXJDYXJkIiwidG9Mb2NhbGVTdHJpbmciLCJjYXJIVE1MIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZmlsbFNlbGVjdHMiLCJmaWxsQ2Fyc1NlbGVjdHMiLCJjYXJCcmFuZHMiLCJjYXJEb29ycyIsImNhckNvbG9ycyIsImluY2x1ZGVzIiwicHVzaCIsImZpbGxZZWFyU2VsZWN0IiwiZmlsbFNlbGVjdCIsInllYXJNYXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ5ZWFyTWluIiwiaSIsIm9wdGlvbiIsImNyZWF0ZU9wdGlvbiIsImNhcnNEYXRhIiwic2VsZWN0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cEIsTUFBTXVDLEVBQVNyRSxTQUFTbUQsY0FBYyxVQUl0QyxPQUhBa0IsRUFBT3ZDLE1BQVFBLEVBQ2Z1QyxFQUFPSyxZQUFjNUMsRUFFZHVDLEVBbk9UckUsU0FBU3FCLGlCQUFpQixtQkFBb0JKIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZhcmlhYmxlcyBuYXZlZ2FjaW9uXHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VhcmNoLWljb25gKTtcclxuY29uc3QgaGFtYnVyZ3VlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYW1idXJndWVyYCk7XHJcblxyXG4vLyBWYXJpYWJsZXMgZmlsdHJvIGRlIGJ1c3F1ZWRhXHJcbmNvbnN0IGJyYW5kU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JyYW5kYCk7XHJcbmNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjeWVhcmApO1xyXG5jb25zdCBtaW5QcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtaW5gKTtcclxuY29uc3QgbWF4UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWF4YCk7XHJcbmNvbnN0IGRvb3JzU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rvb3JzYCk7XHJcbmNvbnN0IHRyYW5zbWlzc2lvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFuc21pc3Npb25gKTtcclxuY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29sb3JgKTtcclxuXHJcbi8vIENvbnRlbmVkb3IgZGUgcmVzdWx0YWRvc1xyXG5jb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jlc3VsdHNgKTtcclxuXHJcbmNvbnN0IHNlYXJjaERhdGEgPSB7XHJcbiAgeWVhcjogYGAsXHJcbiAgYnJhbmQ6IGBgLFxyXG4gIG1pblByaWNlOiBgYCxcclxuICBtYXhQcmljZTogYGAsXHJcbiAgZG9vcnM6IGBgLFxyXG4gIHRyYW5zbWlzc2lvbjogYGAsXHJcbiAgY29sb3I6IGBgLFxyXG59O1xyXG5cclxuLy8gRXZlbnRvc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgc3RhcnRBcHApO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XHJcbiAgZXZlbnRMaXN0ZW5lcnMoKTtcclxuICBzaG93Q2FycyhjYXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgLy8gRXZlbnRvcyBkZWwgc2VhcmNoQmFyIHkgTmF2LlxyXG5cclxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgb3BlblNlYXJjaGJhcik7XHJcbiAgaGFtYnVyZ3VlckJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIG9wZW5OYXYpO1xyXG5cclxuICAvLyBDZXJyYXIgZWwgc2VhcmNoYmFyIHkgZWwgbmF2IGFsIGhhY2VyIGNsaWNrIGVuIGN1YWxxdWllciBwYXJ0ZSBkZWwgZG9jdW1lbnRvLlxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGNsb3NlT3V0c2lkZUNsaWNrKTtcclxuICAvLyBDYW1iaWFyIGVsIGNvbG9yIGRlbCBoZWFkZXIgYWwgaGFjZXIgc2Nyb2xsLlxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCBjb2xvckhlYWRlclNjcm9sbCk7XHJcblxyXG4gIC8vIEV2ZW50b3MgcGFyYSBlbCBmaWx0cm8gZGUgYsO6c3F1ZWRhLlxyXG4gIGJyYW5kU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgc2VhcmNoRGF0YS5icmFuZCA9IHNlbGVjdGVkVmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHllYXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBzZWFyY2hEYXRhLnllYXIgPSBzZWxlY3RlZFZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICBtaW5QcmljZS5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHNlYXJjaERhdGEubWluUHJpY2UgPSBzZWxlY3RlZFZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICBtYXhQcmljZS5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHNlYXJjaERhdGEubWF4UHJpY2UgPSBzZWxlY3RlZFZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICBkb29yc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHNlYXJjaERhdGEuZG9vcnMgPSBzZWxlY3RlZFZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICB0cmFuc21pc3Npb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBzZWFyY2hEYXRhLnRyYW5zbWlzc2lvbiA9IHNlbGVjdGVkVmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgc2VhcmNoRGF0YS5jb2xvciA9IHNlbGVjdGVkVmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHNlYXJjaERhdGEpO1xyXG59XHJcblxyXG4vLyBGdW5jaW9uZXNcclxuZnVuY3Rpb24gb3BlblNlYXJjaGJhcigpIHtcclxuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VhcmNoLWJveGApO1xyXG5cclxuICBzZWFyY2hCb3guY2xhc3NMaXN0LnRvZ2dsZShgc2VhcmNoLWJveC0tYWN0aXZlYCk7XHJcbiAgc2VhcmNoQm94LmNsYXNzTGlzdC50b2dnbGUoYHNlYXJjaC1ib3hfX2NvbnRlbmVkb3JgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2YCk7XHJcblxyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKGBuYXYtLWFjdGl2ZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU91dHNpZGVDbGljayhlKSB7XHJcbiAgY29uc3QgcmVmZXJlbmNlID0gZS50YXJnZXQ7XHJcbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlYXJjaC1ib3hgKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2YCk7XHJcblxyXG4gIC8qIFxyXG4gICAgIDEtIFZlcmlmaWNhIHNpIGVsIHNlYXJjaGJhciBlc3TDoSBhYmllcnRvLlxyXG4gICAgIDItIFJldmlzYSBzaSBlbCBjbGljayBubyBvY3VycmnDsyBlbiBlbCBpY29uby4gXHJcbiAgICAgMy0gVmUgc2kgZWwgY2xpY2sgbm8gb2N1cnJpw7MgZGVudHJvIGRlbCBzZWFyY2hiYXIuXHJcbiAgKi9cclxuICBpZiAoXHJcbiAgICBzZWFyY2hCb3guY2xhc3NMaXN0LmNvbnRhaW5zKGBzZWFyY2gtYm94LS1hY3RpdmVgKSAmJlxyXG4gICAgcmVmZXJlbmNlICE9PSBzZWFyY2hJY29uICYmXHJcbiAgICAhc2VhcmNoQm94LmNvbnRhaW5zKHJlZmVyZW5jZSlcclxuICApIHtcclxuICAgIC8vIENpZXJyYSBlbCBzZWFyY2hCYXIgYWwgZWxpbWluYXIgbGEgY2xhc2UgcXVlIGxvIGhhY2UgdmlzaWJsZVxyXG4gICAgc2VhcmNoQm94LmNsYXNzTGlzdC5yZW1vdmUoYHNlYXJjaC1ib3gtLWFjdGl2ZWAsIGBzZWFyY2gtYm94X19jb250ZW5lZG9yYCk7XHJcbiAgfVxyXG5cclxuICAvKiBcclxuICAgIDEtIFZlcmlmaWNhIHNpIGxhIGNsYXNlIGBuYXYtLWFjdGl2ZWAgZXhpc3RlLlxyXG4gICAgMi0gUmV2aXNhIHNpIGVsIGNsaWNrIG5vIG9jdXJyacOzIGVuIGVsIGJvdG9uIGhhbWJ1cmd1ZXNhLlxyXG4gICovXHJcbiAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoYG5hdi0tYWN0aXZlYCkgJiYgcmVmZXJlbmNlICE9PSBoYW1idXJndWVyQnRuKSB7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShgbmF2LS1hY3RpdmVgKTtcclxuICB9XHJcblxyXG4gIGNsb3NlT25TY3JvbGwobmF2LCBzZWFyY2hCb3gpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU9uU2Nyb2xsKG5hdiwgc2VhcmNoQm94KSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsICgpID0+IHtcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKGBuYXYtLWFjdGl2ZWApO1xyXG4gICAgc2VhcmNoQm94LmNsYXNzTGlzdC5yZW1vdmUoYHNlYXJjaC1ib3gtLWFjdGl2ZWAsIGBzZWFyY2gtYm94X19jb250ZW5lZG9yYCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9ySGVhZGVyU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oZWFkZXJgKTtcclxuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBpZiAoc2Nyb2xsUG9zaXRpb24gPiA5MCkge1xyXG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiV2hpdGVcIjtcclxuICAgIHNlYXJjaEljb24uc3R5bGUuY29sb3IgPSBgQmxhY2tgO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdHJhbnNwYXJlbnRgO1xyXG4gIHNlYXJjaEljb24uc3R5bGUuY29sb3IgPSBgV2hpdGVgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Q2FycyhjYXJzKSB7XHJcbiAgY2Fycy5mb3JFYWNoKChjYXIpID0+IHtcclxuICAgIGNvbnN0IHsgaW1nLCB5ZWFyLCBicmFuZCwgbW9kZWwsIHByaWNlLCBkb29ycywgdHJhbnNtaXNzaW9uIH0gPSBjYXI7XHJcbiAgICBjb25zdCBjYXJDYXJkID0gYFxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCIke2ltZ30uYXZpZlwiIHR5cGU9XCJpbWFnZS9hdmlmXCIgLz5cclxuICAgICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiJHtpbWd9LndlYnBcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyX19pbWdcIlxyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgc3JjPVwiJHtpbWd9LmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhcl9feWVhclwiPiR7eWVhcn08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcl9fY29udGVudFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzPVwiY2FyX19tb2RlbFwiPiR7YnJhbmR9ICR7bW9kZWx9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FyX19wcmljZVwiPlxyXG4gICAgICAgICAgICAkJHtwcmljZS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4cy1zdGFyIGNhcl9fcHJpY2UtLXJldmlld3NcIj4oNSBSZXNlw7Fhcyk8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcl9fY2hhcmFjdGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYnhzLWRvb3Itb3BlbiBjYXJfX2ljb25cIj48L2k+XHJcbiAgICAgICAgICAgICR7ZG9vcnN9IFB1ZXJ0YXNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FyX19jaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieHMtY2FyIGNhcl9faWNvblwiPjwvaT5cclxuICAgICAgICAgICAgJHt0cmFuc21pc3Npb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyX19idG5zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjYXJfX2J0blwiPkNvbXByYXI8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjYXJfX2RldGFpbHNcIj5WZXIgZGV0YWxsZXM8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuYDtcclxuXHJcbiAgICBjb25zdCBjYXJIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XHJcbiAgICBjYXJIVE1MLmNsYXNzTGlzdC5hZGQoYGNhcmApO1xyXG4gICAgY2FySFRNTC5pbm5lckhUTUwgPSBjYXJDYXJkO1xyXG5cclxuICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQoY2FySFRNTCk7XHJcbiAgfSk7XHJcblxyXG4gIGZpbGxTZWxlY3RzKGNhcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsQ2Fyc1NlbGVjdHMoY2Fycykge1xyXG4gIGxldCBjYXJCcmFuZHMgPSBbXTtcclxuICBsZXQgY2FyRG9vcnMgPSBbXTtcclxuICBsZXQgY2FyQ29sb3JzID0gW107XHJcblxyXG4gIGNhcnMuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICBjb25zdCB7IGJyYW5kLCBkb29ycywgY29sb3IgfSA9IGNhcjtcclxuXHJcbiAgICBpZiAoIWNhckJyYW5kcy5pbmNsdWRlcyhicmFuZCkpIHtcclxuICAgICAgY2FyQnJhbmRzLnB1c2goYnJhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2FyRG9vcnMuaW5jbHVkZXMoZG9vcnMpKSB7XHJcbiAgICAgIGNhckRvb3JzLnB1c2goZG9vcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2FyQ29sb3JzLmluY2x1ZGVzKGNvbG9yKSkge1xyXG4gICAgICBjYXJDb2xvcnMucHVzaChjb2xvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZpbGxZZWFyU2VsZWN0KCk7XHJcbiAgZmlsbFNlbGVjdChjYXJCcmFuZHMsIGJyYW5kU2VsZWN0KTtcclxuICBmaWxsU2VsZWN0KGNhckRvb3JzLCBkb29yc1NlbGVjdCk7XHJcbiAgZmlsbFNlbGVjdChjYXJDb2xvcnMsIGNvbG9yU2VsZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFllYXJTZWxlY3QoKSB7XHJcbiAgY29uc3QgeWVhck1heCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCB5ZWFyTWluID0geWVhck1heCAtIDEwO1xyXG5cclxuICBmb3IgKGxldCBpID0geWVhck1heDsgaSA+PSB5ZWFyTWluOyBpLS0pIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZU9wdGlvbihpKTtcclxuICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxTZWxlY3QoY2Fyc0RhdGEsIHNlbGVjdEVsZW1lbnQpIHtcclxuICBjYXJzRGF0YS5mb3JFYWNoKChjYXJEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVPcHRpb24oY2FyRGF0YSk7XHJcbiAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbih2YWx1ZSkge1xyXG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYG9wdGlvbmApO1xyXG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cclxuICByZXR1cm4gb3B0aW9uO1xyXG59XHJcbiJdfQ==
