!function(w){woodmartThemeModule.$document.on("wdShopPageInit",function(){woodmartThemeModule.ajaxSearch()}),w.each(["frontend/element_ready/wd_search.default"],function(e,t){woodmartThemeModule.wdElementorAddAction(t,function(){woodmartThemeModule.ajaxSearch()})}),woodmartThemeModule.ajaxSearch=function(){void 0!==w.fn.devbridgeAutocomplete&&w("form.woodmart-ajax-search").each(function(){var o=w(this),n=parseInt(o.data("count")),s=parseInt(o.data("thumbnail")),d=parseInt(o.data("symbols_count")),r=o.find('[name="product_cat"]'),e=o.parent(),i=e.find(".wd-dropdown-results > .wd-scroll-content"),l=o.data("post_type"),c=woodmart_settings.ajaxurl+"?action=woodmart_ajax_search",u=parseInt(o.data("price")),p=o.data("sku"),m=o.parents(".wd-search-full-screen-2").length,h=e.find(".wd-dropdown-results");0<n&&(c+="&number="+n),c+="&post_type="+l,i.on("click",".view-all-results",function(){o.submit()}),r.length&&""!==r.val()&&(c+="&product_cat="+r.val()),o.find('[type="text"]').on("focus keyup",function(){var e,t,a=w(this);m&&h.removeClass("wd-no-results"),a.hasClass("wd-search-inited")||(a.devbridgeAutocomplete({serviceUrl:c,appendTo:i,minChars:d,deferRequestBy:woodmart_settings.ajax_search_delay,onSelect:function(e){0<e.permalink.length&&(window.location.href=e.permalink)},onHide:function(){h.removeClass("wd-opened")},onSearchStart:function(){o.addClass("search-loading")},beforeRender:function(e){w(e).find(".suggestion-divider-title").parent().addClass("suggestion-divider"),w(e).find(".no-found-msg").parent().addClass("suggestion-no-found"),2<e[0].childElementCount&&w(e).append('<div class="view-all-results"><span>'+woodmart_settings.all_results+"</span></div>"),w(e).removeAttr("style")},onSearchComplete:function(){o.removeClass("search-loading"),woodmartThemeModule.$document.trigger("wood-images-loaded")},formatResult:function(e,t){var t="("+(t="&"===t?"&#038;":t).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+")",a="";return e.divider&&(a+=' <h5 class="suggestion-divider-title">'+e.divider+"</h5>"),s&&e.thumbnail&&(a+=' <div class="suggestion-thumb">'+e.thumbnail+"</div>"),e.value&&(a=(a+=' <div class="suggestion-content set-cont-mb-s reset-last-child">')+'<h4 class="wd-entities-title">'+e.value.replace(new RegExp(t,"gi"),"<strong>$1</strong>").replace(/&lt;(\/?strong)&gt;/g,"<$1>")+"</h4>"),p&&e.sku&&(a+=' <p class="suggestion-sku">'+e.sku+"</p>"),u&&e.price&&(a+=' <p class="price">'+e.price+"</p>"),e.value&&(a+=" </div>"),e.products_not_found&&(a='<span class="no-found-msg">'+e.value+"</span>"),m&&e.no_results&&h.addClass("wd-no-results"),h.addClass("wd-opened"),o.parents("div[class*='wd-search-full-']").addClass("wd-searched"),a}}),r.length&&(e=o.find('[type="text"]').devbridgeAutocomplete(),t=woodmart_settings.ajaxurl+"?action=woodmart_ajax_search",0<n&&(t+="&number="+n),t+="&post_type="+l,r.on("cat_selected",function(){""!==r.val()?e.setOptions({serviceUrl:t+"&product_cat="+r.val()}):e.setOptions({serviceUrl:t}),e.hide(),e.onValueChange()})),a.addClass("wd-search-inited"))}),woodmartThemeModule.$document.on("click",function(e){e=e.target;w(e).is(".wd-search-form")||w(e).parents().is(".wd-search-form")||w(e).is(".wd-search-full-screen")||w(e).parents().is(".wd-search-full-screen")||o.find('[type="text"]').devbridgeAutocomplete("hide")}),w(".wd-dropdown-results > .wd-scroll-content").on("click",function(e){e.stopPropagation()})})},w(document).ready(function(){woodmartThemeModule.ajaxSearch()})}(jQuery);
;