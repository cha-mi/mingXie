"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if(function(p){p.jqPagination=function(e,t){var r=this;r.$el=p(e),r.el=e,r.$input=r.$el.find("input"),r.$el.data("jqPagination",r),r.init=function(){r.options=p.extend({},p.jqPagination.defaultOptions,t),null===r.options.max_page&&(void 0!==r.$input.data("max-page")?r.options.max_page=r.$input.data("max-page"):r.options.max_page=1),void 0!==r.$input.data("current-page")&&r.isNumber(r.$input.data("current-page"))&&(r.options.current_page=r.$input.data("current-page")),r.$input.removeAttr("readonly"),r.updateInput(!0),r.$input.on("focus.jqPagination mouseup.jqPagination",function(e){if("focus"===e.type){var t=parseInt(r.options.current_page,10);p(this).val(t).select()}if("mouseup"===e.type)return!1}),r.$input.on("blur.jqPagination keydown.jqPagination",function(e){var t=p(this),n=parseInt(r.options.current_page,10);27===e.keyCode&&(t.val(n),t.blur()),13===e.keyCode&&t.blur(),"blur"===e.type&&r.setPage(t.val())}),r.$el.on("click.jqPagination","a",function(e){var t=p(this);if(t.hasClass("disabled"))return!1;e.metaKey||e.ctrlKey||(e.preventDefault(),r.setPage(t.data("action")))})},r.setPage=function(e,t){if(void 0===e)return r.options.current_page;var n=parseInt(r.options.current_page,10),a=parseInt(r.options.max_page,10);if(isNaN(parseInt(e,10)))switch(e){case"first":e=1;break;case"prev":case"previous":e=n-1;break;case"next":e=n+1;break;case"last":e=a}if(e=parseInt(e,10),isNaN(e)||e<1||a<e)return r.setInputValue(n),!1;r.options.current_page=e,r.$input.data("current-page",e),r.updateInput(t)},r.setMaxPage=function(e,t){return void 0===e?r.options.max_page:r.isNumber(e)?e<r.options.current_page?(console.error("jqPagination: max_page lower than current_page"),!1):(r.options.max_page=e,r.$input.data("max-page",e),void r.updateInput(t)):(console.error("jqPagination: max_page is not a number"),!1)},r.updateInput=function(e){var t=parseInt(r.options.current_page,10);r.setInputValue(t),r.setLinks(t),!0!==e&&r.options.paged(t)},r.setInputValue=function(e){var t=r.options.page_string,n=r.options.max_page;t=t.replace("{current_page}",e).replace("{max_page}",n),r.$input.val(t)},r.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},r.setLinks=function(e){var t=r.options.link_string,n=parseInt(r.options.current_page,10),a=parseInt(r.options.max_page,10);if(""!==t){var o=n-1;o<1&&(o=1);var i=n+1;a<i&&(i=a),r.$el.find("a.first").attr("href",t.replace("{page_number}","1")),r.$el.find("a.prev, a.previous").attr("href",t.replace("{page_number}",o)),r.$el.find("a.next").attr("href",t.replace("{page_number}",i)),r.$el.find("a.last").attr("href",t.replace("{page_number}",a))}r.$el.find("a").removeClass("disabled"),n===a&&r.$el.find(".next, .last").addClass("disabled"),1===n&&r.$el.find(".previous, .first").addClass("disabled")},r.callMethod=function(e,t,n){switch(e.toLowerCase()){case"option":if(void 0===n&&"object"!==_typeof(t))return r.options[t];var a={trigger:!0},o=!1;p.isPlainObject(t)&&!n?p.extend(a,t):a[t]=n;var i=!1===a.trigger;return void 0!==a.current_page&&(o=r.setPage(a.current_page,i)),void 0!==a.max_page&&(o=r.setMaxPage(a.max_page,i)),!1===o&&console.error("jqPagination: cannot get / set option "+t),o;case"destroy":r.$el.off(".jqPagination").find("*").off(".jqPagination");break;default:return console.error('jqPagination: method "'+e+'" does not exist'),!1}},r.init()},p.jqPagination.defaultOptions={current_page:1,link_string:"",max_page:null,page_string:"Page {current_page} of {max_page}",paged:function(){}},p.fn.jqPagination=function(){var e=p(this),t=Array.prototype.slice.call(arguments),n=!1;if("string"==typeof t[0])return void 0===t[2]?n=e.first().data("jqPagination").callMethod(t[0],t[1]):e.each(function(){n=p(this).data("jqPagination").callMethod(t[0],t[1],t[2])}),n;this.each(function(){new p.jqPagination(this,t[0])})}}(jQuery),!console){var console={},func=function(){return!1};console.log=func,console.info=func,console.warn=func,console.error=func}