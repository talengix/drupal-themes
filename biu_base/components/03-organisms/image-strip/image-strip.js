Drupal.behaviors.imageStrip = {
  attach(context) {
    var mySwiper = new Swiper('.image-strip-slider', {

      loop: false,
      slidesPerView: "auto",
      pagination: {
        el: '.image-strip-slider .swiper-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.image-strip-nav .swiper-button-next',
          prevEl: '.image-strip-nav .swiper-button-prev',
      },
    });
  }
};
