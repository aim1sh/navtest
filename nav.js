document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('js-navbar-toggle');
    var menu = document.getElementById('js-menu');
  
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
  });