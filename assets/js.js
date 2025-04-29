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

  // Color switch logo and button
  document.addEventListener("DOMContentLoaded", () => {
    const images = [
      "assets/images/other/logo/Naranja.png",
      "assets/images/other/logo/Morado.png",
      "assets/images/other/logo/Rosa.png",
      "assets/images/other/logo/Azul.png"
    ];
  
    const buttonColors = [
      "#ff7600",
      "#b600ff",
      "#ff009b",
      "#00caff"
    ];
  
    const logoImg = document.getElementById("logo-img");
    const button = document.getElementById("cv-button");
  
    let lastImgIndex = -1;
    let lastColorIndex = -1;
  
    function getNewIndex(lastIndex, excludeIndex) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * images.length);
      } while (newIndex === lastIndex || newIndex === excludeIndex);
      return newIndex;
    }
  
    // 🟡 Initial randomization (to prevent blue-blue)
    const initialImgIndex = Math.floor(Math.random() * images.length);
    let initialColorIndex;
    do {
      initialColorIndex = Math.floor(Math.random() * buttonColors.length);
    } while (initialColorIndex === initialImgIndex);
  
    logoImg.src = images[initialImgIndex];
    button.style.backgroundColor = buttonColors[initialColorIndex];
  
    lastImgIndex = initialImgIndex;
    lastColorIndex = initialColorIndex;
  
    // 🔁 Continue switching every 2s
    setInterval(() => {
      logoImg.classList.add("opacity-0");
  
      setTimeout(() => {
        const newImgIndex = getNewIndex(lastImgIndex, lastColorIndex);
        const newColorIndex = getNewIndex(lastColorIndex, newImgIndex);
  
        logoImg.src = images[newImgIndex];
        lastImgIndex = newImgIndex;
  
        button.style.backgroundColor = buttonColors[newColorIndex];
        lastColorIndex = newColorIndex;
  
        logoImg.classList.remove("opacity-0");
      }, 200);
    }, 2000);
  });
  