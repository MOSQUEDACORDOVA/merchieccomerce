!function(s){woodmartThemeModule.cookiesPopup=function(){var o,e,t=woodmart_settings.cookies_version;"undefined"!=typeof Cookies&&"accepted"!==Cookies.get("woodmart_cookies_"+t)&&(o=s(".wd-cookies-popup"),setTimeout(function(){o.addClass("popup-display"),o.on("click",".cookies-accept-btn",function(o){o.preventDefault(),e()})},2500),e=function(){o.removeClass("popup-display").addClass("popup-hide"),Cookies.set("woodmart_cookies_"+t,"accepted",{expires:60,path:"/",secure:woodmart_settings.cookie_secure_param})})},s(document).ready(function(){woodmartThemeModule.cookiesPopup()})}(jQuery);
;