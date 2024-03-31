(function ($) {
  "use strict";
  Drupal.behaviors.headerDropdown = {
    attach: function attach(context) {
      $('.language-menu .is-active', context).on('click', function (e) {
        e.preventDefault();
        $('.language-menu .show').toggle();
      });
      $('body').click(function (evt) {
        if (!$(evt.target).is('.language-menu, .language-menu *')) {
          $('.language-menu .show').hide();
        }

        //close menu menu when click outside
        const $menu = $('.header__menu .main-menu__item--with-sub');
        $(document).mouseup(e => {
          if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
            $menu.removeClass('arrow-active');
          }
        });
      });

      jQuery(".header__menu #toggle-expand", context).click(function () {
        if ($(this).hasClass("toggle-expand--open")) {
          jQuery(".header__menu .main-nav").addClass("main-nav--open");
          jQuery(".d-flex").addClass("show-flex");
          jQuery(".menu-wrap-left").addClass("scroll");
          jQuery(".mobile-register").addClass("show-register");
        } else {
          jQuery(".header__menu .main-nav.main-nav--open").removeClass("main-nav--open");
          jQuery(".d-flex.show-flex").removeClass("show-flex");
          jQuery(".menu-wrap-left.scroll").removeClass("scroll");
          jQuery(".mobile-register.show-register").removeClass("show-register");
        }
      });
    },
  };
  Drupal.behaviors.arrowImg = {
    attach: function attach(context) {
      if($(window).width() < 1200) {
        $("header .main-menu", context).find("li.main-menu__item--with-sub").prepend('<img class="arrow-img" height="16" width="16" src="/themes/custom/biu_base/assets/images/arrows/dropdown.svg" />');
        jQuery(".arrow-img", context).on('click', function () {
          jQuery(this).parent().toggleClass("has-sub-menu");
          if(jQuery(this).parent().parent().parent().hasClass('main-nav--open')) {
            jQuery(".menu-left-top .main-nav--open").toggle();
            jQuery(".menu-left-top .show-flex").toggle();
            jQuery(".mobile-register").toggle();
          }
          var sub_ul = jQuery(this).siblings("ul");
          sub_ul.toggleClass("show-submenu");
        });
      }

      if($(window).width() >= 1200) {
        $("header", context).find(".main-nav > .main-menu > li.main-menu__item--with-sub").prepend('<img class="arrow-img-desktop" alt="' + Drupal.t("Open / Close") + '" height="16" width="16" src="/themes/custom/biu_base/assets/images/arrows/dropdown.svg" />');
        $("header", context).find(".main-nav > .main-menu > li.main-menu__item--with-sub > ul.main-menu--sub-1").prepend('<img class="arrow-img-desktop close" role="button" tabindex="0" height="16" width="16" alt="' + Drupal.t("Close") + '"src="/themes/custom/biu_base/assets/images/icons/close.svg" />');
        jQuery(".header__menu .main-menu__item--with-sub .main-menu__link--with-sub", context).on('click', function () {
          jQuery(".arrow-active").not(this.parentElement).removeClass("arrow-active");
          jQuery(this.parentElement).toggleClass('arrow-active');
        });
        jQuery(".header__menu .main-menu__item--with-sub span.main-menu__link--with-sub", context).on('keyup', function (e) {
          // Click on Enter.
          if (e.keyCode === 13) {
            jQuery(".arrow-active").not(this.parentElement).removeClass("arrow-active");
            jQuery(this.parentElement).toggleClass('arrow-active');
          }
        });
        jQuery(".header__menu .main-menu--sub-1 , .main-menu__link--sub-1", context).on('click', function(e) {
          e.stopPropagation();
        });
        jQuery('.header__menu .main-menu__link--with-sub:not(.main-menu__link--sub-1)', context).click(function (e) {
          e.preventDefault();
        });
        jQuery('.arrow-img-desktop.close', context).click(function (e) {
          jQuery(".arrow-active").not(this).removeClass("arrow-active");
        });
        jQuery('.arrow-img-desktop.close', context).keyup(function (e) {
          // Click on Enter.
          if (e.keyCode === 13) {
            jQuery(".arrow-active").not(this).removeClass("arrow-active");
          }
        });
      }

      $('.animation-registration-link-container', context).each(function () {
        if (!$(this).has('svg').length) {
          Drupal.updateLottie($(this));
        }
      });
    },
  };
  Drupal.behaviors.accessibilityIcon = {
    attach: function attach(context) {
      $(".accessibility-icon", context).on('click', function () {
        // Open accessibility plugin when clicking on the icon.
        $('#INDmenu-btn', context).click();
      });

    },
  };
  Drupal.behaviors.desktopLastMenuItem = {
    attach: function attach(context) {
      if($(window).width() >= 1200) {
        // Desktop.
        // Get the last item from the menu.
        var $lastItem = $("header", context).find(".menu-left-bottom .main-nav > .main-menu > li.main-menu__item:last-child");
        $lastItem.insertBefore($("header", context).find(".menu-left-top .d-flex .block"));
      }
    },
  };
})(jQuery);
