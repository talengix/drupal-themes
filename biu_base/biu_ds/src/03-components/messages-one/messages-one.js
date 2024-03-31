(function ($) {
  const autoplay = 6000;
  const messagesSwiper = new Swiper('.messages__wrap--one .swiper', {
    watchSlidesProgress: true,
    autoplay: {
      delay: autoplay,
      disableOnInteraction: false,
      waitForTransition: false
    },
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: '.messages__control--next-button',
      prevEl: '.messages__control--prev-button',
    },
  });

})(jQuery);
