  // Función para mostrar u ocultar el menú en dispositivos móviles
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');

    // Si tiene la clase, lo oculta; si no la tiene, lo muestra
    if (mobileMenu.classList.contains('mobile-menu-hidden')) {
      mobileMenu.classList.remove('mobile-menu-hidden');
    } else {
      mobileMenu.classList.add('mobile-menu-hidden');
    }
  }

  // Asignar el evento de clic al botón del menú
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
