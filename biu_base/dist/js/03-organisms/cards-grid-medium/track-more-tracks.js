"use strict";(function(a){"use strict";Drupal.behaviors.trackMoreTracks={attach:function attach(b,c){c.biu_data&&c.biu_data.node_id&&jQuery.ajax({type:"GET",url:"/track/more-tracks/"+c.biu_data.node_id,cache:!1},b).done(function(c){jQuery(".track-more-tracks",b).html(c);var d=a(".track-more-tracks .card-grid-medium .animation-container").one();d.has("svg").length||Drupal.updateLottie(d)})}},Drupal.behaviors.linkLists={attach:function attach(b,c){c.biu_data&&c.biu_data.node_id&&jQuery.ajax({type:"GET",url:"/track/link-list/"+c.biu_data.node_id,cache:!1},b).done(function(c){jQuery(".link-list-link",b).html(c);var d=a(".link-list-link .animation-container").one();d.has("svg").length||Drupal.updateLottie(d)})}},Drupal.behaviors.trackRegisterLink={attach:function attach(){a(".track-medium-hero .medium-hero .cta-link a.link").click(function(){a(".header .header__inner .menu-wrap-left .menu-left-bottom .search-wrap .register-wrap .open-register-links").click()})}}})(jQuery);