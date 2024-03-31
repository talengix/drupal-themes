(function ($) {
  const eventsSwiper = new Swiper('.events-strip', {
    // Optional parameters
    loop: true,

    // Transition effect
    effect: 'fade',
    speed: 600,
    fadeEffect: {
      crossFade: true
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    preloadImages: false,
    // Enable lazy loading
    lazy: {
      loadPrevNext: true,
    },

    // Navigation arrows
    watchSlidesProgress: true,
  });
  $(".events-strip .event-calendar-links--toggle a").click(function (e) {
    e.stopPropagation();
    $('.event-calendar-links--dropdown', $(this).parent().parent).toggle();
  });
})(jQuery);
