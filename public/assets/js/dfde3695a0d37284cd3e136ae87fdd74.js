!function(t){woodmartThemeModule.menuStickyOffsets=function(){var d=t(".wd-sticky-nav"),n=t(".wd-close-side");function o(e,o=!0){e.addClass("wd-opened"),d.addClass("wd-opened"),n.addClass("wd-close-side-opened").addClass("wd-location-sticky-nav"),o&&d.on("mouseout",function(){s(),d.off("mouseout")})}function s(){t(".wd-header-sticky-nav").removeClass("wd-opened"),d.removeClass("wd-opened"),n.removeClass("wd-close-side-opened").removeClass("wd-location-sticky-nav")}t(".wd-sticky-nav .wd-nav-sticky.wd-nav-vertical").each(function(){var e=t(this),o=(e.on("mouseenter mousemove",function(){e.hasClass("wd-offsets-calculated")||(e.find("> .menu-item-has-children").each(function(){o(t(this))}),e.addClass("wd-offsets-calculated"))}),void 0!==woodmart_settings.clear_menu_offsets_on_resize&&"yes"!==woodmart_settings.clear_menu_offsets_on_resize||setTimeout(function(){woodmartThemeModule.$window.on("resize",woodmartThemeModule.debounce(function(){e.removeClass("wd-offsets-calculated"),e.find(" > .menu-item-has-children > .wd-dropdown-menu").attr("style","")},300))},2e3),function(e){var e=e.find(" > .wd-dropdown-menu"),o=e.innerHeight(),d=e.offset().top-woodmartThemeModule.$window.scrollTop(),n=woodmartThemeModule.$window.height();e.attr("style",""),o&&d&&n<=d+o&&e.css({top:-(d+o-n)})})}),woodmartThemeModule.$document.on("click",".wd-header-sticky-nav",function(e){e.preventDefault();e=t(this);o(e,e.hasClass("wd-close-menu-mouseout"))}),woodmartThemeModule.$document.on("mouseenter mousemove",".wd-header-sticky-nav.wd-event-hover",function(){o(t(this))}),woodmartThemeModule.$document.on("click",".wd-close-side.wd-location-sticky-nav",function(){s()})},t(document).ready(function(){woodmartThemeModule.menuStickyOffsets()})}(jQuery);
;