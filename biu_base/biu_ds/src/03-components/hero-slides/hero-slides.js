(function ($) {
  const autoplay = 6000;
  let options;
  if ($(".hero-slides-wrapper .hero-item").length === 1) {
    options = {
      loop: false,
      autoplay: false,
    }
  }
  else {
    options = {
      loop: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: autoplay,
        disableOnInteraction: false,
        waitForTransition: false
      },
      pagination: {
        el: '.hero-slides .swiper-pagination',
        clickable: true
      },
    }
  }

  const media_slider = new Swiper('.hero-slides-wrapper', options);

  $('.swiper-button-pause').click(function () {
    let media = $(this).parents('.swiper')[0].swiper;
    media.autoplay.stop();
  });


  $('.swiper-button-play').click(function(){
    let media = $(this).parents('.swiper')[0].swiper;
    media.autoplay.start();
  });

  function heroText() {
    // Control hero two
    let isDesktop = window.matchMedia("(min-width: 960px)").matches;
    let heroContainerOffset = $('.hero-empty-container').offset();
    if (isDesktop) {
      $('body[dir="rtl"] .hero-slides--hero-two .hero-text').css('padding-right', `calc(${heroContainerOffset['left']}px + 1.5rem * .5`);
      $('body[dir="ltr"] .hero-slides--hero-two .hero-text').css('padding-left', `calc(${heroContainerOffset['left']}px + 1.5rem * .5`);
    } else {
      $('body[dir="rtl"] .hero-slides--hero-two .hero-text').removeAttr('style');
    }
  }

  heroText();

  $(window).on('resize', function () {
    heroText();
  });

})(jQuery);
