"use strict";(function(){"use strict";Drupal.behaviors.peopleStrip={attach:function attach(a){jQuery.ajax({type:"GET",url:"/track/peoplestrip",cache:!1},a).done(function(b){jQuery(".track-person-strip",a).html(b);new Swiper(".people-strip-slider",{loop:!1,slidesPerView:"auto",breakpoints:{0:{pagination:{el:".swiper-pagination",clickable:!0}},1200:{pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"}}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})}}})(jQuery);