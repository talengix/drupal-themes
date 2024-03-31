"use strict";function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}(function(a,b){"use strict";b.behaviors.viewsSubmitFilters={attach:function(){var c,d,e=a(".publications-list-page form .animation-container, .articles-list-page form .animation-container, .students-list-page form .animation-container, .researchers-list-page form .animation-container, .podcasts-list-page form .animation-container");if(e.length&&!e.has("svg").length){for(d=!1,c=0;c<e[0].classList.length;c++)e[0].classList[c].startsWith("anim-")&&(d=!0);if(!d){var f=e[0];b.updateLottie([f])}}var g=a(".publications-list-page .views-infinite-scroll-content-wrapper .featured-card .animation-container, .articles-list-page .views-infinite-scroll-content-wrapper .featured-card .animation-container, .students-list-page .views-infinite-scroll-content-wrapper .card-people .animation-container, .researchers-list-page .views-infinite-scroll-content-wrapper .card-people .animation-container"),h=[];for(c=0;c<g.length;c++){d=!1;for(var k=0;k<g[c].classList.length;k++)g[c].classList[k].startsWith("anim-")&&(d=!0);d||h.push(g[c])}b.updateLottie(h)}},b.behaviors.personLobbyAllOption={attach:function(){if(a(document).find(".students-list-page").length||a(document).find(".researchers-list-page").length){var b=function(b){var c,d=_createForOfIteratorHelper(b);try{for(d.s();!(c=d.n()).done;){var j=c.value;if("childList"===j.type)for(var e,f=a(".shs-widget-container select.shs-select"),g=0;g<f.length;g++)if(e=a(f[g]).parent().find("label"),"0"!==e.css("opacity")){var h=a(f[g]).find("option[value=\"All\"]");h.text(e.text()),e.css("opacity",0)}}}catch(a){d.e(a)}finally{d.f()}},c=document.getElementsByClassName("shs-field-container")[0],d=new MutationObserver(b);d.observe(c,{attributes:!0,childList:!0,subtree:!0})}}}})(jQuery,Drupal);