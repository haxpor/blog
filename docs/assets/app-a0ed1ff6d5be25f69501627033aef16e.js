function consoleListOfAllPosts(){console.log(" China and Thailand Individual & Corporate Tax in Comparison "),console.log(" Reference on Configuring VPN Server via IPSec + L2TP on Ubuntu 14.04 "),console.log(" Estimated Cost of Living in Shenzhen, China "),console.log(" Locpeed, Devlog #1 "),console.log(" Locpeed, Devlog #2 "),console.log(" SSH Key-based Authentication on Ubuntu "),console.log(" How to Enable Fast TCP Open on Ubuntu "),console.log(" How to Verify GPG Signature via Command-line "),console.log(" 2016 Year In Review "),console.log(" Hands-On Fastlane "),console.log(" Scripting in Blender "),console.log(" When I Let My Girlfriend Interacts With My WeChat Bot "),console.log(" As Developers You Don't Need Normal Social Account Verified, But You Might Need This Instead ")}function showMainPagePicker(e){var t=1;window.location.href.search("things-i-built")!=-1?t=2:window.location.href.search(e)!=-1&&(t=0),weui.picker([{label:"Back to Dashboard",value:0},{label:"Blog Home",value:1},{label:"Things I Built",value:2}],{defaultValue:[t],onChange:function(){},onConfirm:function(t){var n=t[0].value;0==n?window.location=e:1==n?window.location="/":2==n&&(window.location="/things-i-built/")},id:"hamburgerBtn"})}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.weui=t():e.weui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=i(o),r=n(7),u=i(r),l=n(8),s=i(l),d=n(9),f=i(d),c=n(11),p=i(c),h=n(13),v=i(h),m=n(15),g=i(m),w=n(17),_=i(w),y=n(18),b=i(y),k=n(19),x=i(k),C=n(20),M=i(C),E=n(24),j=n(30),S=i(j),O=n(32),P=i(O);t["default"]={dialog:a["default"],alert:u["default"],confirm:s["default"],toast:f["default"],loading:p["default"],actionSheet:v["default"],topTips:g["default"],searchBar:_["default"],tab:b["default"],form:x["default"],uploader:M["default"],picker:E.picker,datePicker:E.datePicker,gallery:S["default"],slider:P["default"]},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){function e(t){e=r["default"].noop,u.addClass("weui-animate-fade-out"),a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s)return s;var i=r["default"].os.android;n=r["default"].extend({title:null,content:"",className:"",buttons:[{label:"\u786e\u5b9a",type:"primary",onClick:r["default"].noop}],isAndroid:i},n);var o=(0,r["default"])(r["default"].render(l["default"],n)),a=o.find(".weui-dialog"),u=o.find(".weui-mask");return(0,r["default"])("body").append(o),u.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),o.on("click",".weui-dialog__btn",function(e){var i=(0,r["default"])(this).index();n.buttons[i].onClick?n.buttons[i].onClick.call(this,e)!==!1&&t():t()}),s=o[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(6),l=i(u),s=void 0;t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=this.os={},n=e.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(t.android=!0,t.version=n[2])}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(3);var r=n(4),u=i(r),l=n(5),s=i(l);o.call(s["default"],navigator.userAgent),(0,u["default"])(s["default"].fn,{append:function(e){return e instanceof HTMLElement||(e=e[0]),this.forEach(function(t){t.appendChild(e)}),this},remove:function(){return this.forEach(function(e){e.parentNode.removeChild(e)}),this},find:function(e){return(0,s["default"])(e,this)},addClass:function(e){return this.forEach(function(t){t.classList.add(e)}),this},removeClass:function(e){return this.forEach(function(t){t.classList.remove(e)}),this},eq:function(e){return(0,s["default"])(this[e])},show:function(){return this.forEach(function(e){e.style.display="block"}),this},hide:function(){return this.forEach(function(e){e.style.display="none"}),this},html:function(e){return this.forEach(function(t){t.innerHTML=e}),this},css:function(e){var t=this;return Object.keys(e).forEach(function(n){t.forEach(function(t){t.style[n]=e[n]})}),this},on:function(e,t,n){var i="string"==typeof t&&"function"==typeof n;return i||(n=t),this.forEach(function(o){e.split(" ").forEach(function(e){o.addEventListener(e,function(e){i?this.contains(e.target.closest(t))&&n.call(e.target,e):n.call(this,e)})})}),this},off:function(e,t,n){return"function"==typeof t&&(n=t,t=null),this.forEach(function(i){e.split(" ").forEach(function(e){"string"==typeof t?i.querySelectorAll(t).forEach(function(t){t.removeEventListener(e,n)}):i.removeEventListener(e,n)})}),this},index:function(){var e=this[0],t=e.parentNode;return Array.prototype.indexOf.call(t.children,e)},offAll:function(){var e=this;return this.forEach(function(t,n){var i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),e[n]=i}),this},val:function(){var e=arguments;return arguments.length?(this.forEach(function(t){t.value=e[0]}),this):this[0].value},attr:function(){var e=arguments,t=this;if("object"==a(arguments[0])){var n=function(){var n=e[0],i=t;return Object.keys(n).forEach(function(e){i.forEach(function(t){t.setAttribute(e,n[e])})}),{v:t}}();if("object"===(void 0===n?"undefined":a(n)))return n.v}return"string"==typeof arguments[0]&&arguments.length<2?this[0].getAttribute(arguments[0]):(this.forEach(function(t){t.setAttribute(e[0],e[1])}),this)}}),(0,u["default"])(s["default"],{extend:u["default"],noop:function(){},render:function(e,t){var n="var p=[];with(this){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(t)},getStyle:function(e,t){var n,i=(e.ownerDocument||document).defaultView;return i&&i.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),i.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle?(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],/^\d+(em|pt|%|ex)?$/i.test(n)?function(t){var n=e.style.left,i=e.runtimeStyle.left;return e.runtimeStyle.left=e.currentStyle.left,e.style.left=t||0,t=e.style.pixelLeft+"px",e.style.left=n,e.runtimeStyle.left=i,t}(n):n):void 0}}),t["default"]=s["default"],e.exports=t["default"]},function(){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),i=0;n[i]&&n[i]!==t;)++i;return Boolean(n[i])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e){"use strict";function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}var i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e){for(var n,a,r=t(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)i.call(n,l)&&(r[l]=n[l]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(n);for(var s=0;s<a.length;s++)o.call(n,a[s])&&(r[a[s]]=n[a[s]])}}return r}},function(e,t){var n,i;!function(o,a){a=function(e,t,n){function i(o,a,r){return r=Object.create(i.fn),o&&r.push.apply(r,o[t]?[o]:""+o===o?/</.test(o)?((a=e.createElement(a||t)).innerHTML=o,a.children):a?(a=i(a)[0])?a[n](o):r:e[n](o):"function"==typeof o?e.readyState[7]?o():e[t]("DOMContentLoaded",o):o),r}return i.fn=[],i.one=function(e,t){return i(e,t)[0]||null},i}(document,"addEventListener","querySelectorAll"),n=[],i=function(){return a}.apply(t,n),void 0!==i&&(e.exports=i)}(this)},function(e){e.exports='<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u["default"].noop,n=arguments[2];return"object"===(void 0===t?"undefined":a(t))&&(n=t,t=u["default"].noop),n=u["default"].extend({content:e,buttons:[{label:"\u786e\u5b9a",type:"primary",onClick:t}]},n),(0,s["default"])(n)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u["default"].noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u["default"].noop,i=arguments[3];return"object"===(void 0===t?"undefined":a(t))?(i=t,t=u["default"].noop):"object"===(void 0===n?"undefined":a(n))&&(i=n,n=u["default"].noop),i=u["default"].extend({content:e,buttons:[{label:"\u53d6\u6d88",type:"default",onClick:n},{label:"\u786e\u5b9a",type:"primary",onClick:t}]},i),(0,s["default"])(i)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;"number"==typeof t&&(t={duration:t}),"function"==typeof t&&(t={callback:t}),t=r["default"].extend({content:e,duration:3e3,callback:r["default"].noop,className:""},t);var n=(0,r["default"])(r["default"].render(l["default"],t)),i=n.find(".weui-toast"),o=n.find(".weui-mask");return(0,r["default"])("body").append(n),i.addClass("weui-animate-fade-in"),o.addClass("weui-animate-fade-in"),setTimeout(function(){o.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),s=!1,t.callback()})},t.duration),s=n[0],n[0]}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(10),l=i(u),s=void 0;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){function e(t){e=r["default"].noop,u.addClass("weui-animate-fade-out"),a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r["default"].extend({content:n,className:""},i);var o=(0,r["default"])(r["default"].render(l["default"],i)),a=o.find(".weui-toast"),u=o.find(".weui-mask");return(0,r["default"])("body").append(o),a.addClass("weui-animate-fade-in"),u.addClass("weui-animate-fade-in"),s=o[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(12),l=i(u),s=void 0;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){function e(t){e=r["default"].noop,d.addClass(a?"weui-animate-fade-out":"weui-animate-slide-down"),f.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){u.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s)return s;var a=r["default"].os.android;o=r["default"].extend({menus:n,actions:i,className:"",isAndroid:a},o);var u=(0,r["default"])(r["default"].render(l["default"],o)),d=u.find(".weui-actionsheet"),f=u.find(".weui-mask");return(0,r["default"])("body").append(u),r["default"].getStyle(d[0],"transform"),d.addClass(a?"weui-animate-fade-in":"weui-animate-slide-up"),f.addClass("weui-animate-fade-in").on("click",function(){t()}),u.find(".weui-actionsheet__menu").on("click",".weui-actionsheet__cell",function(e){n[(0,r["default"])(this).index()].onClick.call(this,e),t()}),u.find(".weui-actionsheet__action").on("click",".weui-actionsheet__cell",function(e){i[(0,r["default"])(this).index()].onClick.call(this,e),t()}),s=u[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(14),l=i(u),s=void 0;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(e){t=r["default"].noop,o.remove(),e&&e(),i.callback(),s=null}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"number"==typeof i&&(i={duration:i}),"function"==typeof i&&(i={callback:i}),i=r["default"].extend({content:e,duration:3e3,callback:r["default"].noop,className:""},i);var o=(0,r["default"])(r["default"].render(l["default"],i));return(0,r["default"])("body").append(o),s&&(clearTimeout(s.timeout),s.hide()),s={hide:n},s.timeout=setTimeout(n,i.duration),o[0].hide=n,o[0]}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(16),l=i(u),s=null;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(0,r["default"])(e);return t.forEach(function(e){function t(){o.val(""),n.removeClass("weui-search-bar_focusing")}var n=(0,r["default"])(e),i=n.find(".weui-search-bar__label"),o=n.find(".weui-search-bar__input"),a=n.find(".weui-icon-clear"),u=n.find(".weui-search-bar__cancel-btn");i.on("click",function(){n.addClass("weui-search-bar_focusing"),o[0].focus()}),o.on("blur",function(){this.value.length||t()}),a.on("click",function(){o.val(""),o[0].focus()}),u.on("click",function(){t(),o[0].blur()})}),t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r["default"])(e);return t=r["default"].extend({defaultIndex:0,onChange:r["default"].noop},t),n.forEach(function(e){var n=(0,r["default"])(e),i=n.find(".weui-navbar__item, .weui-tabbar__item"),o=n.find(".weui-tab__content");i.eq(t.defaultIndex).addClass("weui-bar__item_on"),o.eq(t.defaultIndex).show(),i.on("click",function(){var e=(0,r["default"])(this),n=e.index();i.removeClass("weui-bar__item_on"),e.addClass("weui-bar__item_on"),o.hide(),o.eq(n).show(),t.onChange.call(this,n)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e&&e.classList?e.classList.contains("weui-cell")?e:o(e.parentNode):null}function a(e,t,n){var i=e[0],o=e.val();if("INPUT"==i.tagName||"TEXTAREA"==i.tagName){var a=i.getAttribute("pattern")||"";if("radio"==i.type){for(var r=t.find('input[type="radio"][name="'+i.name+'"]'),u=0,l=r.length;u<l;++u)if(r[u].checked)return null;return"empty"}if("checkbox"!=i.type){if(e.val().length){if(a){if(/^REG_/.test(a)){if(!n)throw"RegExp "+a+" is empty.";if(a=a.replace(/^REG_/,""),!n[a])throw"RegExp "+a+" has not found.";a=n[a]}return new RegExp(a).test(o)?null:"notMatch"}return null}return"empty"}if(!a)return i.checked?null:"empty";var d=function(){var e=t.find('input[type="checkbox"][name="'+i.name+'"]'),n=a.replace(/[{\s}]/g,"").split(","),o=0;if(2!=n.length)throw i.outerHTML+" regexp is wrong.";return e.forEach(function(e){e.checked&&++o}),o?""===n[1]?o>=parseInt(n[0])?{v:null}:{v:"notMatch"}:parseInt(n[0])<=o&&o<=parseInt(n[1])?{v:null}:{v:"notMatch"}:{v:"empty"}}();if("object"===(void 0===d?"undefined":s(d)))return d.v}else if(o.length)return null;return"empty"}function r(e){if(e){var t=(0,f["default"])(e.ele),n=e.msg,i=t.attr(n+"Tips")||t.attr("tips")||t.attr("placeholder");if(i&&(0,p["default"])(i),"checkbox"==e.ele.type||"radio"==e.ele.type)return;var a=o(e.ele);a&&a.classList.add("weui-cell_warn")}}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f["default"].noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,f["default"])(e).forEach(function(e){var i=(0,f["default"])(e),o=i.find("[required]");"function"!=typeof t&&(t=r);for(var u=0,l=o.length;u<l;++u){var s=o.eq(u),d=a(s,i,n.regexp),c={ele:s[0],msg:d};if(d)return void(t(c)||r(c))}t(null)}),this}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,f["default"])(e).forEach(function(e){var n=(0,f["default"])(e);n.find("[required]").on("blur",function(){if("checkbox"!=this.type&&"radio"!=this.type){var e=(0,f["default"])(this);if(!(e.val().length<1)){var i=a(e,n,t.regexp);i&&r({ele:e[0],msg:i})}}}).on("focus",function(){var e=o(this);e&&e.classList.remove("weui-cell_warn")})}),this}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(2),f=i(d),c=n(15),p=i(c);t["default"]={validate:u,checkIfBlur:l},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(e,t){var n=e.find('[data-id="'+t+'"]'),i=n.find(".weui-uploader__file-content");return i.length||(i=(0,r["default"])('<div class="weui-uploader__file-content"></div>'),n.append(i)),n.addClass("weui-uploader__file_status"),i}function i(e,t){e.find('[data-id="'+t+'"]').removeClass("weui-uploader__file_status").find(".weui-uploader__file-content").remove()}function o(e){e.url=u.createObjectURL(e),e.status="ready",e.upload=function(){(0,f["default"])(r["default"].extend({$uploader:a,file:e},t))},e.stop=function(){this.xhr.abort()},t.onQueued(e),t.auto&&e.upload()}var a=(0,r["default"])(e),u=window.URL||window.webkitURL||window.mozURL;t=r["default"].extend({url:"",auto:!0,type:"file",fileVal:"file",onBeforeQueued:r["default"].noop,onQueued:r["default"].noop,onBeforeSend:r["default"].noop,onSuccess:r["default"].noop,onProgress:r["default"].noop,onError:r["default"].noop},t),t.compress!==!1&&(t.compress=r["default"].extend({width:1600,height:1600,quality:.8},t.compress)),t.onBeforeQueued&&function(){var e=t.onBeforeQueued;t.onBeforeQueued=function(t,n){var i=e.call(t,n);if(i===!1)return!1;if(i!==!0){var o=(0,r["default"])(r["default"].render(l["default"],{id:t.id}));a.find(".weui-uploader__files").append(o)}}}(),t.onQueued&&function(){var e=t.onQueued;t.onQueued=function(n){if(!e.call(n)){a.find('[data-id="'+n.id+'"]').css({backgroundImage:'url("'+(n.base64||n.url)+'")'}),t.auto||i(a,n.id)}}}(),t.onBeforeSend&&function(){var e=t.onBeforeSend;t.onBeforeSend=function(t,n,i){if(e.call(t,n,i)===!1)return!1}}(),t.onSuccess&&function(){var e=t.onSuccess;t.onSuccess=function(t,n){t.status="success",e.call(t,n)||i(a,t.id)}}(),t.onProgress&&function(){var e=t.onProgress;t.onProgress=function(t,i){e.call(t,i)||n(a,t.id).html(i+"%")}}(),t.onError&&function(){var e=t.onError;t.onError=function(t,i){t.status="fail",e.call(t,i)||n(a,t.id).html('<i class="weui-icon-warn"></i>')}}(),a.find('input[type="file"]').on("change",function(e){var n=e.target.files;0!==n.length&&(t.compress===!1&&"file"==t.type?Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&o(e)}):Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&(0,s.compress)(e,t,function(e){e&&o(e)})}),this.value="")})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(21),l=i(u),s=n(22),d=n(23),f=i(d),c=0;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '},function(e,t){"use strict";function n(e){var t,n=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=n;var o=i.getContext("2d");o.drawImage(e,0,0);try{t=o.getImageData(0,0,1,n).data}catch(e){return 1}for(var a=0,r=n,u=n;u>a;){0===t[4*(u-1)+3]?r=u:a=u,u=r+a>>1}var l=u/n;return 0===l?1:l}function i(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return n}function o(e){var t=e.split(",")[0].split(":")[1].split(";")[0],n=i(e);return new Blob([n],{type:t})}function a(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,i=2;i<n;){var o=t.getUint16(i,!1);if(i+=2,65505==o){if(1165519206!=t.getUint32(i+=2,!1))return-1;var a=18761==t.getUint16(i+=6,!1);i+=t.getUint32(i+4,a);var r=t.getUint16(i,a);i+=2;for(var u=0;u<r;u++)if(274==t.getUint16(i+12*u,a))return t.getUint16(i+12*u+8,a)}else{if(65280!=(65280&o))break;i+=t.getUint16(i,!1)}}return-1}function r(e,t,n){var i=e.width,o=e.height;switch(n>4&&(e.width=o,e.height=i),n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,o),t.rotate(Math.PI);break;case 4:t.translate(0,o),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-o);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-o),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}}function u(e,t,u){var l=new FileReader;l.onload=function(l){if(t.compress===!1)return e.base64=l.target.result,void u(e);var s=new Image;s.onload=function(){var l=n(s),d=a(i(s.src)),f=document.createElement("canvas"),c=f.getContext("2d"),p=t.compress.width,h=t.compress.height,v=s.width,m=s.height,g=void 0;if(v<m&&m>h?(v=parseInt(h*s.width/s.height),m=h):v>=m&&v>p&&(m=parseInt(p*s.height/s.width),v=p),f.width=v,f.height=m,d>0&&r(f,c,d),c.drawImage(s,0,0,v,m/l),g=/image\/jpeg/.test(e.type)||/image\/jpg/.test(e.type)?f.toDataURL("image/jpeg",t.compress.quality):f.toDataURL(e.type),"file"==t.type)if(/;base64,null/.test(g)||/;base64,$/.test(g))u(e);else{var w=o(g);w.id=e.id,w.name=e.name,w.lastModified=e.lastModified,w.lastModifiedDate=e.lastModifiedDate,u(w)}else/;base64,null/.test(g)||/;base64,$/.test(g)?(t.onError(e,new Error("Compress fail, dataURL is "+g+".")),u()):(e.base64=g,u(e))},s.src=l.target.result},l.readAsDataURL(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={compress:u},e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=e.url,n=e.file,i=e.fileVal,o=e.onBeforeSend,a=e.onProgress,r=e.onError,u=e.onSuccess,l=n.name,s=n.type,d=n.lastModifiedDate,f={name:l,type:s,size:"file"==e.type?n.size:n.base64.length,lastModifiedDate:d},c={};if(o(n,f,c)!==!1){n.status="progress",a(n,0);var p=new FormData,h=new XMLHttpRequest;n.xhr=h,Object.keys(f).forEach(function(e){p.append(e,f[e])}),"file"==e.type?p.append(i,n,l):p.append(i,n.base64),h.onreadystatechange=function(){if(4==h.readyState)if(200==h.status)try{var e=JSON.parse(h.responseText);u(n,e)}catch(e){r(n,e)}else r(n,new Error("XMLHttpRequest response status is "+h.status))},h.upload.addEventListener("progress",function(e){if(0!=e.total){a(n,100*Math.ceil(e.loaded/e.total))}},!1),h.open("POST",t),Object.keys(c).forEach(function(e){h.setRequestHeader(e,c[e])}),h.send(p)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){this.label=e.label,this.value=e.value}function r(){function e(){(0,s["default"])("body").append(h),s["default"].getStyle(h[0],"transform"),h.find(".weui-mask").addClass("weui-animate-fade-in"),h.find(".weui-picker").addClass("weui-animate-slide-up")}function t(e){t=s["default"].noop,h.find(".weui-mask").addClass("weui-animate-fade-out"),h.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd",function(){h.remove(),w=!1,e&&e()})}function n(e){t(e)}function i(e,t){if(void 0===c[t]&&r.defaultValue&&void 0!==r.defaultValue[t]){for(var n=r.defaultValue[t],o=0,u=e.length;o<u&&n!=e[o].value;++o);o<u&&(c[t]=o)}h.find(".weui-picker__group").eq(t).scroll({items:e,temp:c[t],onChange:function(e,n){if(f[t]=e?new a(e):null,c[t]=n,l)r.onChange(f);else if(e.children&&e.children.length>0)h.find(".weui-picker__group").eq(t+1).show(),!l&&i(e.children,t+1);else{var o=h.find(".weui-picker__group");o.forEach(function(e,n){n>t&&(0,s["default"])(e).hide()}),f.splice(t+1),r.onChange(f)}},onConfirm:r.onConfirm})}if(w)return w;var o=arguments[arguments.length-1],r=s["default"].extend({id:"default",className:"",onChange:s["default"].noop,onConfirm:s["default"].noop},o),u=void 0,l=!1;if(arguments.length>2){var d=0;for(u=[];d<arguments.length-1;)u.push(arguments[d++]);l=!0}else u=arguments[0];_[r.id]=_[r.id]||[];for(var f=[],c=_[r.id],h=(0,s["default"])(s["default"].render(v["default"],r)),m=o.depth||(l?u.length:p.depthOf(u[0])),y="";m--;)y+=g["default"];return h.find(".weui-picker__bd").html(y),e(),l?u.forEach(function(e,t){i(e,t)}):i(u,0),h.on("click",".weui-mask",function(){n()}).on("click",".weui-picker__action",function(){n()}).on("click","#weui-picker-confirm",function(){r.onConfirm(f)}),w=h[0],w.hide=n,w}function u(e){var t=s["default"].extend({id:"datePicker",onChange:s["default"].noop,onConfirm:s["default"].noop,start:2e3,end:2030,cron:"* * *"},e);"number"==typeof t.start?t.start=new Date(t.start+"-01-01"):"string"==typeof t.start&&(t.start=new Date(t.start)),"number"==typeof t.end?t.end=new Date(t.end+"-12-31"):"string"==typeof t.end&&(t.end=new Date(t.end));var n=function(e,t,n){for(var i=0,o=e.length;i<o;i++){var a=e[i];if(a[t]==n)return a}},i=[],o=f["default"].parse(t.cron,t.start,t.end),a=void 0;do{a=o.next();var u=a.value.getFullYear(),l=a.value.getMonth()+1,d=a.value.getDate(),c=n(i,"value",u);c||(c={label:u+"\u5e74",value:u,children:[]},i.push(c));var p=n(c.children,"value",l);p||(p={label:l+"\u6708",value:l,children:[]},c.children.push(p)),p.children.push({label:d+"\u65e5",value:d})}while(!a.done);return r(i,t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),s=o(l),d=n(25),f=o(d);n(26);var c=n(27),p=i(c),h=n(28),v=o(h),m=n(29),g=o(m);a.prototype.toString=function(){return this.value},a.prototype.valueOf=function(){return this.value};var w=void 0,_={};t["default"]={picker:r,datePicker:u},e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=t[0],i=t[1],o=[],a=void 0;e=e.replace(/\*/g,n+"-"+i);for(var u=e.split(","),l=0,s=u.length;l<s;l++){var d=u[l];d.match(r)&&d.replace(r,function(e,t,r,u){u=parseInt(u)||1,t=Math.min(Math.max(n,~~Math.abs(t)),i),r=r?Math.min(i,~~Math.abs(r)):t,a=t;do o.push(a),a+=u;while(a<=r)})}return o}function o(e,t,n){var o=e.replace(/^\s\s*|\s\s*$/g,"").split(/\s+/),a=[];return o.forEach(function(e,t){var n=u[t];a.push(i(e,n))}),new l(a,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g,u=[[1,31],[1,12],[0,6]],l=function(){function e(t,i,o){n(this,e),this._dates=t[0],this._months=t[1],this._days=t[2],this._start=i,this._end=o,this._pointer=i}return a(e,[{key:"_findNext",value:function(){for(var e=void 0;;){if(this._end.getTime()-this._pointer.getTime()<=0)throw new Error("out of range, end is "+this._end+", current is "+this._pointer);var t=this._pointer.getMonth(),n=this._pointer.getDate(),i=this._pointer.getDay();if(this._months.indexOf(t+1)!==-1)if(this._dates.indexOf(n)!==-1){if(this._days.indexOf(i)!==-1){e=new Date(this._pointer);break}this._pointer.setDate(n+1)}else this._pointer.setDate(n+1);else this._pointer.setMonth(t+1),this._pointer.setDate(1)}return e}},{key:"next",value:function(){var e=this._findNext();return this._pointer.setDate(this._pointer.getDate()+1),{value:e,done:!this.hasNext()}}},{key:"hasNext",value:function(){try{return this._findNext(),!0}catch(e){return!1}}}]),e}();t["default"]={parse:o},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),a=i(o),r=function(e,t){return e.css({"-webkit-transition":"all "+t+"s",transition:"all "+t+"s"})},u=function(e,t){return e.css({"-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"})},l=function(e){for(var t=Math.floor(e.length/2),n=0;e[t]&&e[t].disabled;)if(t=++t%e.length,n++,n>e.length)throw new Error("No selectable item.");return t},s=function(e,t,n){return(e-l(n))*t},d=function(e,t){return e*t},f=function(e,t,n){return-(t*(n-e-1))};a["default"].fn.scroll=function(e){function t(e){m=e,w=+new Date}function n(e){g=e;var t=g-m;r(v,0),u(v,_+t),w=+new Date,y.push({time:w,y:g}),y.length>40&&y.shift()}function i(e){if(m){var t=(new Date).getTime(),n=b-c.bodyHeight/2;if(g=e,t-w>100)C(Math.abs(g-m)>10?g-m:n-g);else if(Math.abs(g-m)>10){for(var i=y.length-1,o=i,a=i;a>0&&w-y[a].time<100;a--)o=a;if(o!==i){var r=y[i],u=y[o],l=r.time-u.time,s=r.y-u.y,d=s/l,f=150*d+(g-m);C(f)}else C(0)}else C(n-g);m=null}}var o=this,c=a["default"].extend({items:[],scrollable:".weui-picker__content",offset:3,rowHeight:34,onChange:a["default"].noop,temp:null,bodyHeight:238},e),p=c.items.map(function(e){return'<div class="weui-picker__item'+(e.disabled?" weui-picker__item_disabled":"")+'">'+e.label+"</div>"}).join(""),h=(0,a["default"])(this);h.find(".weui-picker__content").html(p)
;var v=h.find(c.scrollable),m=void 0,g=void 0,w=void 0,_=void 0,y=[],b=window.innerHeight;if(null!==c.temp&&c.temp<c.items.length){var k=c.temp;c.onChange.call(this,c.items[k],k),_=(c.offset-k)*c.rowHeight}else{var x=l(c.items);c.onChange.call(this,c.items[x],x),_=s(c.offset,c.rowHeight,c.items)}u(v,_);var C=function(e){_+=e,_=Math.round(_/c.rowHeight)*c.rowHeight;var t=d(c.offset,c.rowHeight),n=f(c.offset,c.rowHeight,c.items.length);_>t&&(_=t),_<n&&(_=n);for(var i=c.offset-_/c.rowHeight;c.items[i]&&c.items[i].disabled;)e>0?++i:--i;_=(c.offset-i)*c.rowHeight,r(v,.3),u(v,_),c.onChange.call(o,c.items[i],i)};v=h.offAll().on("touchstart",function(e){t(e.changedTouches[0].pageY)}).on("touchmove",function(e){n(e.changedTouches[0].pageY),e.preventDefault()}).on("touchend",function(e){i(e.changedTouches[0].pageY)}).find(c.scrollable),"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||h.on("mousedown",function(e){t(e.pageY),e.stopPropagation(),e.preventDefault()}).on("mousemove",function(e){m&&(n(e.pageY),e.stopPropagation(),e.preventDefault())}).on("mouseup mouseleave",function(e){i(e.pageY),e.stopPropagation(),e.preventDefault()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.depthOf=function e(t){var n=1;return t.children&&t.children[0]&&(n=e(t.children[0])+1),n}},function(e){e.exports='<div class="<%= className %>"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>\u53d6\u6d88</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>\u786e\u5b9a</a> </div> <div class=weui-picker__bd></div> </div> </div> '},function(e){e.exports="<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(e){t=r["default"].noop,o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,e&&e()})}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r["default"].extend({className:"",onDelete:r["default"].noop},i);var o=(0,r["default"])(r["default"].render(l["default"],r["default"].extend({url:e},i)));return(0,r["default"])("body").append(o),o.find(".weui-gallery__img").on("click",function(){n()}),o.find(".weui-gallery__del").on("click",function(){i.onDelete.call(this,e)}),o.show().addClass("weui-animate-fade-in"),s=o[0],s.hide=n,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(31),l=i(u),s=void 0;t["default"]=o,e.exports=t["default"]},function(e){e.exports='<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r["default"])(e);if(t=r["default"].extend({step:void 0,defaultValue:0,onChange:r["default"].noop},t),void 0!==t.step&&(t.step=parseFloat(t.step),!t.step||t.step<0))throw new Error("Slider step must be a positive number.");if(void 0!==t.defaultValue&&t.defaultValue<0||t.defaultValue>100)throw new Error("Slider defaultValue must be >= 0 and <= 100.");return n.forEach(function(e){function n(){var e=r["default"].getStyle(l[0],"left");return e=/%/.test(e)?s*parseFloat(e)/100:parseFloat(e)}function i(n){var i=void 0,o=void 0;t.step&&(n=Math.round(n/p)*p),i=f+n,i=i<0?0:i>s?s:i,o=100*i/s,u.css({width:o+"%"}),l.css({left:o+"%"}),t.onChange.call(e,o)}var o=(0,r["default"])(e),a=o.find(".weui-slider__inner"),u=o.find(".weui-slider__track"),l=o.find(".weui-slider__handler"),s=parseInt(r["default"].getStyle(a[0],"width")),d=a[0].offsetLeft,f=0,c=0,p=void 0;t.step&&(p=s*t.step/100),t.defaultValue&&i(s*t.defaultValue/100),o.on("click",function(e){e.preventDefault(),f=n(),i(e.pageX-d-f)}),l.on("touchstart",function(e){f=n(),c=e.changedTouches[0].clientX}).on("touchmove",function(e){e.preventDefault(),i(e.changedTouches[0].clientX-c)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t["default"]=o,e.exports=t["default"]}])});