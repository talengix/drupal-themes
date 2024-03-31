/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

    'use strict';

    Drupal.behaviors.training_sass = {
        attach: function(context, settings) {
            // Custom code here
            // subscribe page
            $("#mailchimp-response-mailchimp_signup_subscribe_block_subscribe_to_newsletter_form-wrapper", context).on("DOMSubtreeModified", function() {
                $(this).find(".toast-wrapper .toast").addClass("show");
            });

            function getQueryParam(param) {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                return urlParams.get(param);
            }

            let listPartnerGroup = {
                'trainingaid': 2521,
                'green stay': 2295,
                'gstc': 58,
                'visitberlin': 2294,
                'pm4sd': 59
            };

            $(document).ready(function() {

                if (getQueryParam('completed') == 1) {
                    $('#order-completed').modal('show');
                }

                // Check utm source
                let utm_source = getQueryParam('utm_source');
                let utm_content = getQueryParam('utm_content');
                if (utm_source != null && $('#edit-field-partner-group').length) {
                    let partner = listPartnerGroup[utm_source.toLowerCase()] ?? 2521;
                    $('#edit-field-partner-group').val(partner);
                    $('#edit-field-partner-group').trigger("chosen:updated");
                }

                if (utm_content != null && $('#edit-field-hkey-0-value').length) {
                    $('#edit-field-hkey-0-value').val(utm_content);
                }

                $(".topic-comment-count-like-wrapper.forum-page .like-comment").hover(
                    function() {
                        $(this)
                            .parents(".topic-comment-count-like-wrapper")
                            .find(".likes-dropdown")
                            .collapse("show");
                    },
                    function() {
                        $(this)
                            .parents(".topic-comment-count-like-wrapper")
                            .find(".likes-dropdown")
                            .collapse("hide");
                    }
                );

                $(".topic-comment-count-like-wrapper.forum-page .likes-dropdown").hover(
                    function() {
                        $(this)
                            .parents(".topic-comment-count-like-wrapper")
                            .find(".likes-dropdown")
                            .collapse("show");
                    },
                    function() {
                        $(this)
                            .parents(".topic-comment-count-like-wrapper")
                            .find(".likes-dropdown")
                            .collapse("hide");
                    }
                );

                // For tears page

                $("body").on(
                    "mouseenter",
                    ".topic-comment-count-like-wrapper .like-comment",
                    function() {
                        $($(this).attr("href")).collapse("show");
                    }
                );

                $("body").on(
                    "mouseleave",
                    ".topic-comment-count-like-wrapper .like-comment",
                    function() {
                        $($(this).attr("href")).collapse("hide");
                    }
                );

                $("body").on(
                    "mouseenter",
                    ".topic-comment-count-like-wrapper .likes-dropdown",
                    function() {
                        $(this).collapse("show");
                    }
                );

                $("body").on(
                    "mouseleave",
                    ".topic-comment-count-like-wrapper .likes-dropdown",
                    function() {
                        $(this).collapse("hide");
                    }
                );
                // Owl Carousels

                $(".owl-carousel.front-swipe").owlCarousel({
                    loop: true,
                    margin: 15,
                    items: 4,
                    autoplay: false,
                    responsive: {
                        0: {
                            items: 1.3,
                            loop: true,
                        },
                        600: {
                            items: 2,
                        },
                        1000: {
                            items: 4,
                        },
                    },
                });

                $(".owl-carousel.owl-2").owlCarousel({
                    loop: false,
                    margin: 15,
                    nav: true,
                    items: 4,
                    autoplay: false,
                    navText: [
                        '<i class="angle-left"></i>',
                        '<i class="angle-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1.3,
                            loop: true,
                        },
                        600: {
                            items: 2,
                        },
                        1000: {
                            items: 4,
                        },
                    },
                });

                $(".owl-carousel.partners").owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 6,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 3,
                            loop: true,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 6,
                        },
                    },
                });

                $(".owl-carousel", context).owlCarousel({
                    loop: false,
                    margin: 15,
                    nav: true,
                    items: 4,
                    autoplay: false,
                    navText: [
                        '<i class="angle-left"></i>',
                        '<i class="angle-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1.3,
                            loop: true,
                        },
                        600: {
                            items: 2,
                        },
                        1000: {
                            items: 4,
                        },
                    },
                });

                $('.btn-register').on('click', function () {
                    let productId = $(this).attr('data-product-target');
                    $('.enroll-course-link').attr('href', '/free-course-order/' + productId);
                });

                $('.btn-register-external').on('click', function () {
                    let productUrl = $(this).attr('data-product-url');
                    $('.enroll-course-external-link').attr('href', productUrl);
                });
            });
        },
    };

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
})(jQuery, Drupal);