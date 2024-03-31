(function ($) {
  "use strict";
Drupal.behaviors.mediaSlides = {
  attach(context) {
    var autoplay = 6000;
    var interval;
    var media_slider = new Swiper('.media-slides-slider', {

      loop: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: autoplay,
        disableOnInteraction: false,
        waitForTransition: false
      },
      on: {
        init: function () {
          // Find animation-container in duplicated slides
          var swiper = this;
          var containers = [];
          for (var i = 0; i < swiper.slides.length; i++) {
            if (swiper.slides[i].classList.contains('swiper-slide-duplicate')) {
              var elem = swiper.slides[i].querySelector('.animation-container');
              if (elem) {
                elem.classList = 'animation-container';
                containers.push(elem);
              }
            }
          }
          Drupal.updateLottie(containers);
        },
        progress: function(data)  {
          clearInterval(interval);
          var elem = document.getElementById("progress");
          var width = 1;
          var autoplayTime = autoplay / 100;
          interval = setInterval(frame, autoplayTime);
          function frame() {
            if (width < 100) {
              if (media_slider.autoplay.running) {
                width++;
                elem.style.width = width + '%';
              }
              else {
                width = 1;
                elem.style.width = width + '%';
              }
            }
          }
        }
      },

      breakpoints: {
        0: {
          pagination: {
            el: '.media-slider-nav-page .swiper-pagination',
            clickable: true,
          },
        },
        1200: {
          pagination: {
            el: '.media-slider-nav-page .swiper-pagination',
            clickable: true,
            type: 'fraction',
          },
          slidesPerView: "auto",
          centeredSlides: true,
        }
      },

      // Navigation arrows
      navigation: {
        nextEl: '.media-slides-nav .swiper-button-next',
        prevEl: '.media-slides-nav .swiper-button-prev',
      },
    });

    $(".media-slider-control .pause").click(function() {
      media_slider.autoplay.stop();
      $(this).hide();
      $(".media-slider-control .play").show();
    });

    $(".media-slider-control .play").click(function() {
      media_slider.autoplay.start();
      $(this).hide();
      $(".media-slider-control .pause").show();
    });
  }
};
})(jQuery);
