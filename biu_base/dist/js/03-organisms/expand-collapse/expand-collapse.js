"use strict";(function(a){Drupal.behaviors.expandCollapse={attach:function attach(b){var c,d=a(".accordion",b);for(c=0;c<d.length;c++)d[c].addEventListener("click",function(){this.classList.toggle("active");var a=this.nextElementSibling;a.style.maxHeight=a.style.maxHeight?null:a.scrollHeight+"px"})}}})(jQuery);