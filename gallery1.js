const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: {},
    effect: 'cube',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  // Add these modifications to your existing JavaScript code
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  mousewheel: {},
  effect: 'slide', // Change effect to 'slide' for better mobile performance
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  slidesPerView: 'auto', // Allow multiple slides per view on mobile
  spaceBetween: 10, // Add spacing between slides
  breakpoints: {
    768: {
      slidesPerView: 1, // Change to 1 slide per view on screens <= 768px width
      spaceBetween: 20 // Increase spacing between slides for better readability
    }
  }
});
