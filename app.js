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

// activación de menu
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

  // llegaer a una posicion determinada al invocar la opcion en emnu
  function scrollToPosition(position) {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }
  