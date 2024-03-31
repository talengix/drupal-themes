(function($, Drupal) {
  let thumbnail = new Swiper(".thumbnail-swiper", {
    spaceBetween: 13,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
  });

  let gallery = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    thumbs: {
      swiper: thumbnail,
    },
  });


  var gallery_modal = $('.gallery-modal').dialog({
    autoOpen: false,
    draggable: false,
    resizable: false,
    modal: true,
    open: function( event, ui ) {
      $('.page-node-type-gallery').addClass('gallery-open');
    },
    close: function( event, ui ) {
      $('.page-node-type-gallery').removeClass('gallery-open');
    }
  });

  $('.gallery-modal-close').on('click', function(){
    gallery_modal.dialog('close');
  })

  $('.gallery-item').on('click', function(){
    let itemId = $(this).attr('data-item');
    gallery.slideTo(itemId,0);
    gallery_modal.dialog('open');
  });

})(jQuery, Drupal);