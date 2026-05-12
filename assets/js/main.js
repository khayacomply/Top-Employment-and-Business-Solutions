document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // WOW.js Init
  new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 50,
    mobile: true,
    live: true
  }).init();

  // Swiper Init
  new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  // Lightbox Config
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    albumLabel: "Image %1 of %2"
  });
});