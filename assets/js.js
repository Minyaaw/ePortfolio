// Nav bar hide on scroll
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
  
// Switch colors
document.addEventListener("DOMContentLoaded", () => {
  const colors = ["#ff7600", "#b600ff", "#ff009b", "#00caff"];
  let current = 0;

  const logo = document.getElementById("logo");
  const button = document.getElementById("cv-button");

  setInterval(() => {
    const color = colors[current];
    current = (current + 1) % colors.length;

    // Change button background color
    button.style.backgroundColor = color;

    // Tint the black SVG with a CSS filter (best if logo is solid black)
    logo.style.filter = `brightness(0) saturate(100%) sepia(100%) hue-rotate(0deg) drop-shadow(0 0 0 ${color})`;

  }, 2000);
});