// Nav bar hide on scroll
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) {
        // Scrolling down → hide navbar
        navbar.classList.add('-translate-y-full', 'opacity-0');
      } else {
        // Scrolling up → show navbar
        navbar.classList.remove('-translate-y-full', 'opacity-0');
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
  });
  