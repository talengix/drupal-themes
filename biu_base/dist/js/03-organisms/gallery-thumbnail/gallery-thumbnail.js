"use strict";(function(a){var b=new Swiper(".thumbnail-swiper",{spaceBetween:13,slidesPerView:8,freeMode:!0,watchSlidesProgress:!0}),c=new Swiper(".gallery-swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},thumbs:{swiper:b}}),d=a(".gallery-modal").dialog({autoOpen:!1,draggable:!1,resizable:!1,modal:!0,open:function open(){a(".page-node-type-gallery").addClass("gallery-open")},close:function close(){a(".page-node-type-gallery").removeClass("gallery-open")}});a(".gallery-modal-close").on("click",function(){d.dialog("close")}),a(".gallery-item").on("click",function(){var b=a(this).attr("data-item");c.slideTo(b,0),d.dialog("open")})})(jQuery,Drupal);