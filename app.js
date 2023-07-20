// Escucha el scroll
window.addEventListener('scroll', function() {
  
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('opaque');
  } else {
    header.classList.remove('opaque');
  }
});

// activación de menú
document.addEventListener('DOMContentLoaded', function() {

  var menuBtn = document.querySelector('.menu-btn');
  var menuOptions = document.querySelector('.menu-options');
  var menuLinks = document.querySelectorAll('.menu-options a');

  menuBtn.addEventListener('click', function() {
    menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
  });

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuOptions.style.display = 'none';
    });
  });
});

// llegar a una posición determinada al invocar la opción en el menú
function scrollToPosition(position) {

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

// escuchando el evento clic. Llamando a la clase detalle-btn
const detalleBtn1 = document.querySelector('#detalle-btn-1');
const detalleBtn2 = document.querySelector('#detalle-btn-2');

detalleBtn1.addEventListener('click', function() {
  // Al hacer clic en el botón 1, llamamos a la función para mostrar/ocultar el detalle del producto 1
  toggleDetalleProductos(1);
});

detalleBtn2.addEventListener('click', function() {
  // Al hacer clic en el botón 2, llamamos a la función para mostrar/ocultar el detalle del producto 2
  toggleDetalleProductos(2);
});

function toggleDetalleProductos(conjunto) {
  // Obtenemos el contenedor de detalles del producto seleccionado
  const detalleProductosContainer = document.querySelector(`.detalle-productos-container-${conjunto}`);
  
  // Mostramos u ocultamos el contenedor según su estado actual
  if (detalleProductosContainer.style.display === 'none') {
    detalleProductosContainer.style.display = 'block';
  } else {
    detalleProductosContainer.style.display = 'none';
  }
}







