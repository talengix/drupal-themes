"use strict";(function(a){a(".main-sidebar .subsite-menu .main-menu__link--with-sub").on("click",function(b){b.preventDefault(),a(this).parent().toggleClass("active")}),a(".subsite-menu .main-menu__link--with-sub").on("click",function(b){1200>window.innerWidth&&(b.preventDefault(),a(this).parent().toggleClass("has-sub-menu"))}),a(".subsite-menu .main-menu__link--with-sub + img").on("click",function(b){1200>window.innerWidth&&(b.preventDefault(),a(this).parent().toggleClass("has-sub-menu"))})})(jQuery);