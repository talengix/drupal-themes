"use strict";Drupal.behaviors.imageStrip={attach:function attach(){new Swiper(".image-strip-slider",{loop:!1,slidesPerView:"auto",pagination:{el:".image-strip-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".image-strip-nav .swiper-button-next",prevEl:".image-strip-nav .swiper-button-prev"}})}};