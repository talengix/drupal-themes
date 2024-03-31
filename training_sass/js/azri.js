/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.training_aid = {
    attach: function (context, settings) {
      // $('.view-articles .views-exposed-form .js-form-type-radio .form-radio').click(function () {
      //   alert('alert');
      //   if ($(this).is(':checked')) {
      //     console.log('add');
      //     $('.view-articles .views-exposed-form .js-form-type-radio').addClass('check-active');
      //   } else {
      //     console.log('remove');
      //     $('.view-articles .views-exposed-form .js-form-type-radio').removeClass('check-active');
      //   }
      // });
      // $('.trng-vws-slider .view-content').slick({
      //   dots: true,
      //   infinite: false,
      //   speed: 300,
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      //   arrows: false,
      //   autoplay: true,
      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true
      //       }
      //     },
      //     {
      //       breakpoint: 600,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
      // });
      if ($('.view-course-information-page-title-desc-image .views-field-field-ci-image .no-banner').length > 0) {
        $('.view-course-information-page-title-desc-image .img-overlay').css('display', 'none');
      }

      if ($('.node--type-course-information-page .field--name-field-ci-syllabus').length < 1) {
        $('.node--type-course-information-page .course-information-nav-pills .course-syllabus').remove();
      } else {
        $('.node--type-course-information-page .course-information-nav-pills .course-syllabus').css('display', 'block');
      }

      if ($('.node--type-course-information-page .field--name-field-ci-schedule').length < 1) {
        $('.node--type-course-information-page .course-information-nav-pills .course-schedule').remove();
        $('.block-trainingaid-customisations-course-schedule-register-button').css('display', 'none');
      } else {
        $('.node--type-course-information-page .course-information-nav-pills .course-schedule').css('display', 'block');
        $('.block-trainingaid-customisations-course-schedule-register-button').css('display', 'block');
      }

      if ($('.node--type-course-information-page .field--name-field-ci-contributors').length < 1) {
        $('.node--type-course-information-page .course-information-nav-pills .course-contributors').remove();
      } else {
        $('.node--type-course-information-page .course-information-nav-pills .course-contributors').css('display', 'block');
      }

      if ($('.block-views-blockcourse-information-page-icons-block-1 .views-field-field-ci-icons .field-content').children().length > 0) {
        $('.block-views-blockcourse-information-page-icons-block-1').css('display', 'block');
      } else {
        $('.block-views-blockcourse-information-page-icons-block-1').remove();
      }

      if ($('.block-views-blockcourse-information-page-partnership-block-1 .views-field-field-ci-partner .field-content').children().length > 0) {
        $('.block-views-blockcourse-information-page-partnership-block-1').css('display', 'block');
      } else {
        $('.block-views-blockcourse-information-page-partnership-block-1').remove();
      }

      if ($('.block-views-blockcourse-information-page-additional-info-block-1 .views-field-field-ci-additionalinfo .field-content').children().length > 0) {
        $('.block-views-blockcourse-information-page-additional-info-block-1').css('display', 'block');
      } else {
        $('.block-views-blockcourse-information-page-additional-info-block-1').remove();
      }

      // Nav Pills active class on click
      $(".nav-pills li.nav-item a.nav-link").click(function () {
        $(".nav-pills li.nav-item a.nav-link").removeClass('active');
        $(this).addClass('active');
      });

      // Search bar open collapse on click of search icon
      // var search_icon = $('.search-block-form .search-form-icon');
      // var searchbar = $('.search-form .form-type-search input.form-search');
      // var is_open = false;
      // var search_close_icon = $('.active-serach-block-form .search-form-icon');

      // search_icon.click(function (e) {
      //   e.preventDefault();
      //   if (is_open == false) {
      //     searchbar.addClass('searchbar-open');
      //     $('.search-form .form-type-search').addClass('active-searchbar');
      //     $('.search-block-form').addClass('active-serach-block-form');
      //     searchbar.focus();
      //     is_open = true;
      //   } else {
      //     $('.search-form').submit();
      //     searchbar.removeClass('searchbar-open');
      //     $('.search-form .form-type-search').removeClass('active-searchbar');
      //     searchbar.focusout();
      //     is_open = false;
      //     $('.search-block-form').removeClass('active-serach-block-form');
      //   }
      // });
      // search_close_icon.click(function () {
      //   searchbar.removeClass('searchbar-open');
      //   $('.search-form .form-type-search').removeClass('active-searchbar');
      //   searchbar.focusout();
      //   is_open = false;
      //   $('.search-block-form').removeClass('active-serach-block-form');
      // });




      $(".site-footer__sm .nav-item-toggle", context).click(function (e) {
        //getting the dropdown menu element
        var content = $(this).find('.menu');
        if ($(this).hasClass('expanded')) {
          $(this).removeClass('expanded');
        } else {
          $(this).addClass('expanded');
        }
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        content.slideToggle(500, function () {
        });
        $(this).siblings().each(function (element) {
          $(this).find('.menu').removeClass('expanded');
          $(this).find('.menu').hide();
        });
      });
      // $('.dropdown-menu .menu-item--expanded a.dropdown-toggle', context).click(function () {
      //   if ($(this).hasClass('expanded')) {
      //     $(this).removeClass('expanded');
      //     $(this).parent().find('.dropdown-menu').removeClass('show');
      //   } else {
      //     $(this).addClass('expanded');
      //     $(this).parent().find('.dropdown-menu').addClass('show');
      //     $(this).parent().find('.dropdown-menu').css('display', 'block');
      //   }
      //   $(this).parent().siblings().each(function (element) {
      //     $(this).find('.dropdown-menu').hide();
      //     $(this).find('.dropdown-menu').removeClass('expanded');
      //     $(this).find('.dropdown-menu').removeClass('show');
      //   });
      // });
      var confirm_related_target = '';

      $('.remove-order-item-icon', context).click(function () {
        confirm_related_target = $(this);
        var order_items_count = confirm_related_target.closest('.view-content').find('.views-row').length;
        if (order_items_count <= 1) {
          $("#confirm-dialog").find('.btn-ok').html('Remove and Search Courses');
        }
        $("#confirm-dialog").find('.modal-body').html("<p>Are you sure, you want to remove the course from cart?</p>");
        $("#confirm-dialog").addClass('remove-order-item-confirm-dialog');
        $("#confirm-dialog").modal('show');
      });

      var removeOrderItem = function (callback) {
        $("#confirm-dialog .remove-button").on("click", function () {
          if ($(this).closest('#confirm-dialog').hasClass('remove-order-item-confirm-dialog')) {
            callback(true);
            $("#confirm-dialog").modal('hide');
          }
        });

        $("#confirm-dialog .cancel-button").on("click", function () {
          callback(false);
          $("#confirm-dialog").modal('hide');
        });
      };

      removeOrderItem(function (confirm) {
        if (confirm) {
          if (confirm_related_target.length) {
            var order_item_id = confirm_related_target.find('.order-item-id').html();
            // Remove Order Item through ajax.
            $.ajax({
              url: Drupal.url('remove-order-item-ajax/' + order_item_id),
              type: "POST",
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (data) {
                if (data.status == 'success') {
                  var order_items_count = confirm_related_target.closest('.view-content').find('.views-row').length;
                  if (order_items_count <= 1) {
                    window.location.href = Drupal.url('courses/');
                  } else {
                    $('.view-commerce-checkout-order-summary').trigger('RefreshView');
                  }
                }
              },
              error: function (xmlhttp) {
                console.log('An error ocurred: ' + xmlhttp.status);
              }
            });
          }
        } else {
          $("#confirm-dialog").modal('hide');
        }
      });

      $('.sign-out', context).click(function (e) {
        e.preventDefault();
        confirm_related_target = $(this);
        $("#confirm-dialog").find('.btn-ok').html('Yes');
        $("#confirm-dialog").find('.modal-body').html("<p>Are you sure you want to Sign out?</p>");
        $("#confirm-dialog").find('.modal-header').hide();
        $("#confirm-dialog").addClass('sign-out-confirm-dialog');
        $("#confirm-dialog").modal('show');
      });

      $('.share-course', context).click(function (e) {
        e.preventDefault();
        $("#share-modal-dialog").modal('show');
      });

      $('.copy-course-url', context).click(function () {
        copyToClipboard('course-url');
      });

      function copyToClipboard(element_id) {
        var copyText = document.getElementById(element_id);

        /* Select the text field */
        copyText.select();
        document.execCommand("copy");
      };

      $("#share-modal-dialog .close").on("click", function () {
        $("#share-modal-dialog").modal('hide');
      });

      var signout = function (callback) {
        $("#confirm-dialog .remove-button").on("click", function () {
          if ($(this).closest('#confirm-dialog').hasClass('sign-out-confirm-dialog')) {
            callback(true);
            $("#confirm-dialog").modal('hide');
          }
        });

        $("#confirm-dialog .cancel-button").on("click", function () {
          callback(false);
          $("#confirm-dialog").modal('hide');
        });
      };

      signout(function (confirm) {
        if (confirm) {
          window.location.href = $('.sign-out a').attr('href');
        } else {
          $("#confirm-dialog").modal('hide');
        }
      });

      if ($('select[name="field_user_expertise[]"] option:selected').val() == '_none') {
        $('select[name="field_user_expertise[]"] option:selected').removeAttr("selected");
      }
      $('select[name="field_user_expertise[]"]').attr('data-placeholder', "Which area are you interested in? (Select up to 8 areas)");
      // $('select[name="field_user_expertise[]"]').chosen({ max_selected_options: 8 });
      // $("select").chosen({ disable_search_threshold: 10 });

      /*$("select").selectmenu({
        change: function (event, data) {
          $(this).closest('select').trigger('change');
        }
      });*/

      /*$('select.country', context).change(function () {
        $.ajax({
          url: Drupal.url('update-order-billing-profile'),
          type: "POST",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: JSON.stringify({ "country": $(this).val() }),
          success: function (data) {
            if (data.status == 'success') {
              $('.view-commerce-checkout-order-summary').trigger('RefreshView');
            }
          },
          error: function (xmlhttp) {
            console.log('An error ocurred: ' + xmlhttp.status);
          }
        });
      });

      $('.form-item-payment-information-add-payment-method-payment-details-card-number iframe').
        contents().find("head").append(
          $("<style type='text/css'>" + ".InputContainer .InputElement {" + "font-size: 16px;" + "color: #495057;" + "} </style>")
      );*/

      $('.navbar-toggler-icon', context).click(function () {
        $(this).toggleClass("close");
      });

      $('.course-notif-msg-item .notif-msg-close', context).click(function () {
        $(this).closest('.course-notif-msg-item').remove();
        var course_id = $('input[name="course_id"]').val();
        $.ajax({
          url: Drupal.url('course-tip-closed/' + course_id + "/" + $(this).attr('id')),
          type: "POST",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            /*if (data.status == 'success') {
              var order_items_count = confirm_related_target.closest('.view-content').find('.views-row').length;
              if (order_items_count <= 1) {
                window.location.href = Drupal.url('courses/');
              } else {
                $('.view-commerce-checkout-order-summary').trigger('RefreshView');
              }
            }*/
          },
          error: function (xmlhttp) {
            console.log('An error ocurred: ' + xmlhttp.status);
          }
        });
      });

      /*if ($('.book-block-menu .course-module').length > 0) {
        $('.book-block-menu .course-module', context).each(function () {
          if ($(this).hasClass('menu-item--collapsed')) {
            $(this).find('ul.menu').slideUp();
          }
        });
      }

      $('.book-block-menu .course-module>a', context).click(function (e) {
        e.preventDefault();
        var current_element = $(this).closest('li.course-module');
        var current_element_id = current_element.attr('id');

        $('.book-block-menu .course-module').each(function () {
          if ($(this).attr('id') != current_element_id) {
            $(this).removeClass('menu-item--expanded');
            $(this).addClass('menu-item--collapsed');
            $(this).find('ul.menu').slideUp();
          }
        });
        if (current_element.hasClass('menu-item--expanded')) {
          current_element.removeClass('menu-item--expanded');
          current_element.addClass('menu-item--collapsed');
          current_element.find('ul.menu').slideUp();
        } else {
          current_element.addClass('menu-item--expanded');
          current_element.removeClass('menu-item--collapsed');
          current_element.find('ul.menu').slideDown();
        }
      });*/

      var get_course_completion_progress = function () {
        var completed_units = $('.book-block-menu .course-unit-completed').length;
        var total_units = $('.book-block-menu .course-unit').length;

        if (completed_units <= 0) {
          return 0;
        }

        var current_progress = (completed_units / total_units) * 100;
        return Math.round(current_progress);

      };

      var set_course_completion_progress = function (percentage) {
        var course_percentage = percentage + '%';
        $('.progress-bar').css('width', course_percentage);
        $('.progress-bar-with-text .course-completion-perc-text').html(course_percentage + ' Complete');
      }

      var save_course_completed_info = function() {
        var course_id = $("input[name='course_id']").val();
        $.ajax({
          url: Drupal.url('save-course-completed-info-ajax/' + course_id),
          type: "POST",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
          },
          error: function (xmlhttp) {
            console.log('An error ocurred: ' + xmlhttp.status);
          }
        });
      };

      var get_course_completion_dialog = function () {
        var course_id = $("input[name='course_id']").val();
        $.ajax({
          url: Drupal.url('course-completion-text-ajax/' + course_id),
          type: "POST",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            if (data.course_completed_earlier == false) {
              if (data.course_completion_text) {
                $("#confirm-dialog").find('.modal-body').html("<div class='title-line'>Congratulations</div><div class='body-text'>You have successfully completed the course!</div><div class='course-completed-text'>" + data.course_completion_text + "</div>");
              } else {
                $("#confirm-dialog").find('.modal-body').html("<div class='title-line'>Congratulations</div><div class='body-text'>You have successfully completed the course!</div>");
              }
              $("#confirm-dialog").modal('show');
              $("#confirm-dialog").find('.modal-header .modal-title').hide();
              $("#confirm-dialog .modal-footer").hide();
              $("#confirm-dialog").addClass('course-completion-dialog');
            }
          },
          error: function (xmlhttp) {
            console.log('An error ocurred: ' + xmlhttp.status);
            /*$("#confirm-dialog").find('.modal-body').html("<div class='title-line'>Congratulations</div><div class='body-text'>You have successfully completed the course!</div>");
            $("#confirm-dialog").modal('show');
            $("#confirm-dialog").find('.modal-header .modal-title').hide();
            $("#confirm-dialog .modal-footer").hide();
            $("#confirm-dialog").addClass('course-completion-dialog');*/
          }
        });
      };

      if ($('.progress-bar').length > 0) {
        var course_completion_progress = get_course_completion_progress();
        set_course_completion_progress(course_completion_progress);
        if (course_completion_progress == 100) {
          save_course_completed_info();
          get_course_completion_dialog();
          return;
        }
      }

      if ($('.flag').length > 0) {
        $('.flag').each(function () {
          if ($(this).hasClass('action-unflag')) {
            $(this).attr('title', 'Remove');
          } else {
            $(this).attr('title', 'Save');
          }
        });
      }

      $('.flag').click(function () {
        $(this).find('a').trigger('click');
      });

      $('.flag-course-unit-completed a').click(function () {
        if ($(this).closest('div.flag-course-unit-completed').hasClass('action-flag')) {
          $('.active-course-unit').addClass('course-unit-completed');
        } else {
          $('.active-course-unit').removeClass('course-unit-completed');
        }
      });

      /*if ($('.course-unit-disc-tab').length > 0) {
        $('.course-unit-disc-tab').hide();
        $('#course-unit-discussions').show();
      }*/

      $('.course-unit-disc-tabs-wrapper a.nav-link', context).click(function () {
        var active_tab = $(this).attr('href');
        $('.course-unit-disc-tab').hide();
        $(active_tab).show();
      });

      $(".content-actions .menu-dots-icon", context).once().click(function (e) {
        e.preventDefault();
        $(this).closest('.content-actions').find('.action-links').toggleClass("toggled");
      });
      $('.view-course-live-sessions .ui-accordion-content').css('height', '100%');
      $('.course-tabs-select select', context).change(function (e) {
        var selected_tab = $(this).val();
        var redirect_url = $('.course-specific-tabs').find('.' + selected_tab + ' a').attr('href');
        window.location = redirect_url;
      });

      $(".view-course-discussions .views-exposed-form fieldset", context).each(function () {
        var placeholder_txt = $(this).find('label').html();
        if (placeholder_txt == 'Serach') {
          placeholder_txt += '...';
        }
        $(this).find('input').attr('placeholder', placeholder_txt);
      });

      if ($('.view-course-discussions .view-filters button[name="op"]').length == 0) {
        $('.view-course-discussions .view-empty .reset-filters-button').hide();
      }
      $('.view-course-discussions .view-empty .reset-filters-button .btn', context).click(function () {
        $(this).closest('.view-course-discussions').find('.view-filters button[name="op"]').trigger('click');
      });

      var $el, $ps, $up, totalHeight;

      $(".view-course-announcements .view-content .views-row").each(function () {
        if ($(this).outerHeight() < 300) {
          $(this).find('.read-more').hide();
        }
      });

      $(".view-course-announcements .view-content .views-row .announcement-wrapper .button", context).click(function () {

        totalHeight = 0

        var el = $(this);
        var p = el.parent();
        var up = p.parent();
        var ps = up.find("div");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        ps.each(function () {
          totalHeight += $(this).outerHeight() + 16;
        });

        p.closest('.announcement-wrapper')
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": up.height(),
            "max-height": 9999
          })
          .animate({
            "height": totalHeight
          });

        // fade out read-more
        p.fadeOut();

        // prevent jump-down
        return false;

      });

      if ($('.flag-save-user-contact').length > 0) {
        $('.flag-save-user-contact').each(function () {
          if ($(this).hasClass('action-unflag')) {
            $(this).attr('title', 'Remove from saved contacts');
          } else {
            $(this).attr('title', 'Save contact');
          }
        });
      }

      $('.save-contact-flag-wrapper .field-content').click(function () {
        $(this).find('a').trigger('click');
      });

      /*$('select[name="field_user_country_state_city[0][address][country_code]"] option[value=""]').html("I am from...");
      $('select[name="field_user_country_state_city[0][address][country_code]"]').next('span').find('span.ui-selectmenu-text').html("I am from...");*/
      $('.user-register-form input[name="field_user_first_name[0][value]"]', context).change(function () {
        $(this).closest('form').find('.crm-profile-name-unknown input[name="first_name"]').val($(this).val());
      });

      $('.user-register-form input[name="field_user_last_name[0][value]"]', context).change(function () {
        $(this).closest('form').find('.crm-profile-name-unknown input[name="last_name"]').val($(this).val());
      });

      $('input[name="pass[pass1]"]').attr('placeholder', 'Create a password');
      $('input[name="pass[pass2]"]').attr('placeholder', 'Confirm password');

      $('.view-courses .view-header').insertBefore('.courses-page .row-offcanvas-left');
      $('.mb-filter-courses').click(function () {
        $('body').toggleClass('filter-show');
      });
      if ($('#views-exposed-form-courses-page-1').length) {
        $(".block-views-exposed-filter-blockcourses-page-1").append('<div class="close-icon">close</div>');
      }
      $('.close-icon').click(function () {
        if ($('body').hasClass('filter-show')) {
          $('body').removeClass('filter-show');
        }
      });

      /*$('.commerce-checkout-flow').find('.form-submit').removeClass('payment-processing');
      $('.commerce-checkout-flow', context).submit(function(e) {
        if ($('.dot-flashing').length == 0) {
          $(this).find('.form-submit').addClass('payment-processing');
          $(this).find('.form-submit').after("<div class='dot-flashing'><div>");
        }
      });*/

      if ($('.field--name-comment-forum input[name="wrapper_html_id"]').length > 0) {
        $('.field--name-comment-forum input[name="wrapper_html_id"]').each(function() {
          var wrapper_id = $(this).closest("section.field--name-comment-forum").attr('id');
          //console.log(wrapper_id);
          $(this).val(wrapper_id);
        });
      }

      /*if ($('.js-ajax-comments-reply').length > 0) {
        $('.js-ajax-comments-reply').each(function () {
          var wrapper_id = $(this).closest("section").attr('id');
          $(this).attr('data-wrapper-html-id', wrapper_id);
          //console.log(wrapper_id);
        });
      }*/
    }
  };

})(jQuery, Drupal);
