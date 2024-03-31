Drupal.behaviors.socialFeed = {
  attach(context) {
    var mySwiper = new Swiper('.social-feed-slider', {

      loop: true,
      slidesPerView: "auto",
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    });
  }
};
