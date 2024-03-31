(function ($, Drupal) {
  "use strict";
  Drupal.behaviors.viewsSubmitFilters = {
    attach: function attach(context, settings) {
      var i;
      var foundAnimClass;
      // Make sure arrow appears in search button.
      var $submitButton = $('.publications-list-page form .animation-container, .articles-list-page form .animation-container, .students-list-page form .animation-container, .researchers-list-page form .animation-container, .podcasts-list-page form .animation-container');
      if ($submitButton.length && !$submitButton.has('svg').length) {
        foundAnimClass = false;
        for (i = 0; i < $submitButton[0].classList.length; i++) {
          if ($submitButton[0].classList[i].startsWith('anim-')) {
            foundAnimClass = true;
          }
        }
        if (!foundAnimClass) {
          var animSearchContainer = $submitButton[0];
          Drupal.updateLottie([animSearchContainer]);
        }
      }

      // Make sure arrow appears in the items cards.
      var animContainerTemp = $('.publications-list-page .views-infinite-scroll-content-wrapper .featured-card .animation-container, .articles-list-page .views-infinite-scroll-content-wrapper .featured-card .animation-container, .students-list-page .views-infinite-scroll-content-wrapper .card-people .animation-container, .researchers-list-page .views-infinite-scroll-content-wrapper .card-people .animation-container');
      var animContainer = [];
      for (i = 0; i < animContainerTemp.length; i++) {
        foundAnimClass = false;
        for (var j = 0; j < animContainerTemp[i].classList.length; j++) {
          if (animContainerTemp[i].classList[j].startsWith('anim-')) {
            foundAnimClass = true;
          }
        }
        if (!foundAnimClass) {
          animContainer.push(animContainerTemp[i]);
        }
      }
      Drupal.updateLottie(animContainer);
    }
  };

  Drupal.behaviors.personLobbyAllOption = {
    attach: function attach(context, settings) {
      if ($(document).find('.students-list-page').length || $(document).find('.researchers-list-page').length) {
        var callback = function (mutationsList, curr_observer) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              var $selectLists = $(".shs-widget-container select.shs-select");
              for (var i = 0; i < $selectLists.length; i++) {
                var $label = $($selectLists[i]).parent().find('label');
                if ($label.css('opacity') !== '0') {
                  var $allOption = $($selectLists[i]).find('option[value="All"]');
                  $allOption.text($label.text());
                  $label.css('opacity', 0);
                }
              }
            }
          }
        };
        var targetNode = document.getElementsByClassName('shs-field-container')[0];
        var config = {attributes: true, childList: true, subtree: true};
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      }
    }
  };
})(jQuery, Drupal);
