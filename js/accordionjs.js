
/* accordionjs */
!function(e){"use strict";e.fn.accordionjs=function(n){if(this.length>1)return this.each(function(){e(this).accordionjs(n)}),this;var c=this,t={isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isObject:function(e){return"[object Object]"===Object.prototype.toString.call(e)},sectionIsOpen:function(e){return e.hasClass("acc_active")},getHash:function(){return window.location.hash?window.location.hash.substring(1):!1}},o=e.extend({closeAble:!1,closeOther:!0,slideSpeed:150,activeIndex:1,openSection:!1,beforeOpenSection:!1},n);e.each(o,function(e){var n=e.replace(/([A-Z])/g,"-$1").toLowerCase().toString(),t=c.data(n);(t||!1===t)&&(o[e]=t)}),(o.activeIndex===!1||o.closeOther===!1)&&(o.closeAble=!0);var i=function(){c.create(),c.openOnClick(),e(window).on("load",function(){c.openOnHash()}),e(window).on("hashchange",function(){c.openOnHash()})};return this.openSection=function(n,c){e(document).trigger("accjs_before_open_section",[n]),"function"==typeof o.beforeOpenSection&&o.beforeOpenSection.call(this,n),c=c>=0?c:o.slideSpeed;var t=n.children().eq(1);t.slideDown(c,function(){e(document).trigger("accjs_open_section",[n]),"function"==typeof o.openSection&&o.openSection.call(this,n)}),n.addClass("acc_active")},this.closeSection=function(n,c){e(document).trigger("accjs_before_close_section",[n]),"function"==typeof o.beforeCloseSection&&o.beforeCloseSection.call(this,n),c=c>=0?c:o.slideSpeed;var t=n.children().eq(1);t.slideUp(c,function(){e(document).trigger("accjs_close_section",[n]),"function"==typeof o.closeSection&&o.closeSection.call(this,n)}),n.removeClass("acc_active")},this.closeOtherSections=function(n,t){var o=n.closest(".accordionjs").children();e(o).each(function(){c.closeSection(e(this).not(n),t)})},this.create=function(){c.addClass("accordionjs");var n=c.children();if(e.each(n,function(n,t){c.createSingleSection(e(t))}),t.isArray(o.activeIndex))for(var i=o.activeIndex,s=0;s<i.length;s++)c.openSection(n.eq(i[s]-1),0);else o.activeIndex>1?c.openSection(n.eq(o.activeIndex-1),0):!1!==o.activeIndex&&c.openSection(n.eq(0),0)},this.createSingleSection=function(n){var c=n.children();n.addClass("acc_section"),e(c[0]).addClass("acc_head"),e(c[1]).addClass("acc_content"),n.hasClass("acc_active")||n.children(".acc_content").hide()},this.openOnClick=function(){c.on("click",".acc_head",function(n){n.stopImmediatePropagation();var i=e(this).closest(".acc_section");t.sectionIsOpen(i)?o.closeAble?c.closeSection(i):1===c.children().length&&c.closeSection(i):o.closeOther?(c.closeOtherSections(i),c.openSection(i)):c.openSection(i)})},this.openOnHash=function(){if(t.getHash()){var n=e("#"+t.getHash());n.hasClass("acc_section")&&(c.openSection(n),o.closeOther&&c.closeOtherSections(n),e("html, body").animate({scrollTop:parseInt(n.offset().top)-50},150))}},i(),this}}(jQuery);
(function ($) {
    "use strict";
     $(".accordionjs").accordionjs();
})(jQuery);