(function ($) {
    let height = 0;
    $('.block--information .information__title').each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });

    $('.block--information .information__title').height(height);
  
})(jQuery);