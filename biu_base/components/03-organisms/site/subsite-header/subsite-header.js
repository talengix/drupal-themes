(function ($) {
  Drupal.behaviors.subsiteAccessibilityIcon = {
    attach: function attach(context) {
      $(".accessibility-icon", context).on('click', function () {
        // Open accessibility plugin when clicking on the icon.
        $('#INDmenu-btn', context).click();
      });

    },
  };
})(jQuery);