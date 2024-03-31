Drupal.behaviors.largeHero = {
  attach(context) {
    var initWaves = false;
    var waveAnimations = [];
    var isPaused = false;
    var $scrollDown = jQuery(".scroll-down-link", context);
    $scrollDown.attr('tabindex', '0');
    $scrollDown.click(function () {
      jQuery('html,body').animate({
            scrollTop: jQuery(this).closest('.layout').find('+ .layout').offset().top - jQuery('.header').height()
          },
          'slow');
    });

    var autoplay = 7000;
    var interval;
    var mySwiper = new Swiper('.large-hero.main-slider', {
      // Optional parameters
      loop: true,

      // Transition effect
      effect: 'fade',
      speed: 600,
      fadeEffect: {
        crossFade: true
      },

      autoplay: {
        delay: autoplay,
        disableOnInteraction: false
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
        slideNextTransitionStart: function () {
          var swiper = this;
          if (swiper.slides[swiper.activeIndex].querySelector('video')) {
            swiper.slides[swiper.activeIndex].querySelector('video').currentTime = 0;
            if(!isPaused) {
              swiper.slides[swiper.activeIndex].querySelector('video').play();
            }
          }
        },
        setTransition: function () {
          var swiper = this;
          // For the begining, change the animation.
          /* if ((swiper.activeIndex === 0 || swiper.previousIndex === 0) && !initWaves) {
            for (var i = 0; i < swiper.slides.length; i++) {
              initWaves = true;
              var wave = swiper.slides[i].querySelector('.wave-anim');
              if (wave) {
                wave.classList.add('wave-' + i);
                var waveAnim = bodymovin.loadAnimation({
                  wrapper: wave,
                  renderer: "svg",
                  loop: false,
                  autoplay: true,
                  prerender: true,
                  path: wave.dataset.src,
                });
                waveAnimations[i] = waveAnim;
              }
            }
          } */
          for (var i = 0; i < swiper.slides.length; i++) {
            var textWrapper = swiper.slides[i].getElementsByClassName('text-wrapper');
            if (textWrapper.length) {
              if (swiper.activeIndex === 0 || swiper.previousIndex === 0) {
                textWrapper[0].classList.add('first-frame-hero');
              } else {
                textWrapper[0].classList.remove('first-frame-hero');
              }

              textWrapper[0].getElementsByClassName('h1')[0].style.transform = 'translateY(0)';
              if (textWrapper[0].getElementsByTagName('h6').length) {
                textWrapper[0].getElementsByTagName('h6')[0].style.transform = 'translateY(0)';
              }

              var btnWrapper = textWrapper[0].getElementsByClassName('large-hero-link');
              if (btnWrapper.length) {
                btnWrapper[0].style.transform = 'translateY(0)';
              }
            }
            // In mobile - do not load the desktop media.
            if (window.matchMedia("(min-width: 960px)").matches) {
              // Play the videos in first loading
              if (swiper.activeIndex === 0) {
                if (swiper.slides[i].querySelector('video')) {
                  swiper.slides[i].querySelector('video').play();
                }
              }
            }
            else {
              // Remove the video video in mobile.
              if (swiper.activeIndex === 0) {
                if (swiper.slides[i].querySelector('.desktop-media video')) {
                  swiper.slides[i].querySelector('.desktop-media video').remove();
                }
              }
            }
          }
         /* if (swiper.previousIndex !== 0 && waveAnimations[swiper.activeIndex]) {
            waveAnimations[swiper.activeIndex].goToAndPlay(1);
          }*/
        },
        progress: function (data) {
          clearInterval(interval);
          var width = 1;
          var autoplayTime = autoplay / 100;
          interval = setInterval(frame, autoplayTime);

          function frame() {
            var progress;
            if (width < 100) {
              if (mySwiper.autoplay.running) {
                width++;
                if (width < 50) {
                  progress = (width / 50) * 180 - 135;
                  document.getElementsByClassName("circle__right")[0].style.transform = 'rotate(' + progress + 'deg)';
                  document.getElementsByClassName("circle__left")[0].style.transform = 'rotate(-135deg)';
                } else {
                  progress = ((width - 50) / 50) * 180 - 135;
                  document.getElementsByClassName("circle__right")[0].style.transform = 'rotate(45deg)';
                  document.getElementsByClassName("circle__left")[0].style.transform = 'rotate(' + progress + 'deg)';
                }
              } else {
                width = 0;
                progress = (width / 50) * 180 - 135;
                document.getElementsByClassName("circle__right")[0].style.transform = 'rotate(' + progress + 'deg)';
                document.getElementsByClassName("circle__left")[0].style.transform = 'rotate(-135deg)';
              }
            }
          }
        },
      }
    });

    jQuery(".large-hero-control .pause").click(function () {
      var video = jQuery('.media-wrapper--video video');
      for (var i = 0; i < video.length; i++) {
        video[i].pause();
      }
      mySwiper.autoplay.stop();
      jQuery(this).hide();
      jQuery(".large-hero-control .play").show();
      isPaused = true;
    });

    jQuery(".large-hero-control .play").click(function () {
      var video = jQuery('.media-wrapper--video video');
      for (var i = 0; i < video.length; i++) {
        video[i].play();
      }
      mySwiper.autoplay.start();
      jQuery(this).hide();
      jQuery(".large-hero-control .pause").show();
      isPaused = false;
    });
  }
};
