Drupal.behaviors.swiperAlumni = {
  attach() {
    global.swiperAlumniStrip = new global.Swiper(".alumni-strip", {
      effect: "horizontal",
      loop: false,
      speed: 600,
      freemode: {
        enabled: true,
        sticky: true,
      },
      setWrapperSize: true,
      spaceBetween: 0,
      slidesOffsetBefore: 0,
      direction: 'horizontal',
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".alumni-strip__next",
        prevEl: ".alumni-strip__prev",
      },
    });
  },
};
