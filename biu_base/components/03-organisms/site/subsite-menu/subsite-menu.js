(function ($) {
  $('.main-sidebar .subsite-menu .main-menu__link--with-sub').on('click', function (event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');
  });

  $('.subsite-menu .main-menu__link--with-sub').on('click', function (event) {
    if (window.innerWidth < 1200) {
      event.preventDefault();
      $(this).parent().toggleClass('has-sub-menu');
    }
  });

  $('.subsite-menu .main-menu__link--with-sub + img').on('click', function (event) {
    if (window.innerWidth < 1200) {
      event.preventDefault();
      $(this).parent().toggleClass('has-sub-menu');
    }
  });
})(jQuery);