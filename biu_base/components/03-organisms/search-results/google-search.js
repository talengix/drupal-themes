(function ($) {
  "use strict";
  Drupal.behaviors.searchBar = {
    attach: function attach(context) {
      $("#google-cse-results .gsc-control-cse-iw").hide();
      setTimeout(function(){
        var no_result = $("#google-cse-results .gsc-control-cse-iw .gsc-resultsRoot .gsc-webResult .gsc-expansionArea .gs-no-results-result");
        if(no_result.length != 1) {
          $("#google-cse-results .gsc-control-cse-iw").show();
          setTimeout(()=>{
            $('.gsc-tabhInactive').trigger('click');
            $('.gsc-tabsArea').hide();
          }, 300)
        } else {
          $("#google-cse-results .result-message").show();
        }
      }, 1500);
      // Add icons to submit button.
      $('.search-google-page .search-form #edit-submit').wrap('<div class="submit-search-wrapper animation-container" data-src="/themes/custom/biu_base/assets/animations/white-arrow.json"></div>');
      $('.submit-search-wrapper').append("<span id='submit-search-icon'></span>");
      Drupal.updateLottie([$('.submit-search-wrapper')[0]]);
      if (window.matchMedia("(max-width: 1200px)").matches) {
        $(window, context).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll >= 100) {
            if (!$("#mobile-search-icon").length) {
              $("#edit-keys", context).before("<span id=\"mobile-search-icon\"  class=\"search-icon\"><img src=\"/themes/custom/biu_base/assets/images/icons/green-search-icon.svg\" alt=\"{{ 'Search'|t }}\" class=\"pale-green\"></span>");
              $('#mobile-search-icon .pale-green', context).click(function () {
                $('#search-form').submit();
              });
            }
            $("#edit-keys", context).addClass("mobile-sticky-search");
            $("#mobile-search-icon", context).show();
          } else {
            $("#mobile-search-icon", context).hide();
            $("#edit-keys", context).removeClass("mobile-sticky-search");
          }
        });
      }
    }
  }
  })(jQuery);
