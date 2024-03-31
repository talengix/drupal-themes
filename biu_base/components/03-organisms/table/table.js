(function ($) {
  "use strict";
  Drupal.behaviors.tableView = {
    attach: function attach(context) {
      $('.col_3', context ).each(function () {
        var showChar = 180;  // How many characters are shown by default
        var ellipsestext = "...";
        var content = $(this).html();
        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = '<img class="up" height="16" width="16" src="http://www.pngmart.com/files/3/Down-Arrow-PNG-HD.png" /><img class="down" height="16" width="16" src="http://www.pngmart.com/files/3/Down-Arrow-PNG-HD.png" />' + c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent">' + h + '</span>';
          $(this).html(html);
        }
      });
      $(".down", context).click(function () {
        $(this).siblings('.up').toggle();
        $(this).toggle();
        $(this).siblings('.morecontent').toggle();
        $(this).siblings('.moreellipses').toggle();
        return false;
      });
      $(".up", context).click(function () {
        $(this).siblings('.down').toggle();
        $(this).toggle();
        $(this).siblings('.morecontent').toggle();
        $(this).siblings('.moreellipses').toggle();
        return false;
      });

      $('table', context).find("th").each(function (i) {
        $('.table td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + '</span> ');
        $('.table-responsive-stack-thead').hide();
      });
      $('table', context).each(function () {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
      });

      function flexTable() {
        if ($(window).width() < 768) {
          $(this).find(".table-responsive-stack-thead").show();
          $(this).find('thead').hide();
        } else {
          $(".table").each(function (i) {
            $(this).find(".table-responsive-stack-thead").hide();
            $(this).find('thead').show();
          });
        }
      }
      flexTable();
      window.onresize = function (event) {
        flexTable();
      };
    }
  }
})(jQuery);
