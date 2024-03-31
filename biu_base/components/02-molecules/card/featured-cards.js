(function ($) {
  "use strict";
  Drupal.behaviors.calendarButton = {
    attach: function attach(context) {
      $(".calendar-links .calendar-links-toggle", context).click(function () {
        $('.calendar-links-dropdown', $(this).parent()).toggle();
      });
    }
  }
})(jQuery);
