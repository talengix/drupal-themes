Drupal.behaviors.cardsGridStrip = {
  attach(context) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      var mySwiper = new Swiper('.swiper-cards-grid', {

        loop: false,
        slidesPerView: "auto",

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
};
