(function ($) {
  const autoplay = 6000;
  const messagesSwiper = new Swiper('.messages__wrap--two .swiper', {
    loop: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: autoplay,
      disableOnInteraction: false,
      waitForTransition: false
    },
    slidesPerView: 1,
    breakpoints: {
      720: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    }
  });

})(jQuery);
