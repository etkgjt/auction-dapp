/*! For license information please see Authenticate-Components-AuthWrapper.1b9c35d6.chunk.js.LICENSE.txt */
(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[77,203],{295:function(e,t,n){"use strict";n.r(t);n(455),n(5);var r=n(855),o=n(856),a=n(857),c=n(833),i=n(854),s=n(586),u=n(14);t.default=function(e){var t=e.children,n=e.title,d=e.extra,l=Object(s.useHistory)();return Object(u.jsxs)("div",{className:"auth-page",children:[Object(u.jsxs)("div",{className:"background-auth row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("div",{className:"wrap-cloud-auth",children:Object(u.jsx)("div",{className:"cloud-auth"})})}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("div",{className:"right-img"})}),Object(u.jsx)("div",{className:"cloud-bottom"}),Object(u.jsx)("div",{className:"bottom-background"})]}),Object(u.jsxs)("div",{className:"auth-wrapper",children:[Object(u.jsx)("div",{className:"auth-arrow",onClick:function(){return l.goBack()},children:Object(u.jsx)(c.a,{bordered:!0,size:"lg",rounded:!0,color:"primary",className:"bg-white mb-1",Icon:i.a})}),Object(u.jsx)("div",{className:"auth-form",children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(a.a,{className:"card-head-title pt-2",children:n}),Object(u.jsx)("div",{className:"card-head-extra",children:d}),t]})})})]})]})}},455:function(e,t,n){},569:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},570:function(e,t,n){"use strict";n.d(t,"p",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return l})),n.d(t,"s",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"r",(function(){return j})),n.d(t,"q",(function(){return h})),n.d(t,"e",(function(){return y})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"f",(function(){return w})),n.d(t,"k",(function(){return E})),n.d(t,"j",(function(){return R})),n.d(t,"h",(function(){return S}));var r,o=n(264),a=n.n(o);function c(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&c(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function l(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var p="object"===typeof window&&window.Element||function(){};function m(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var j=a.a.oneOfType([a.a.string,a.a.func,m,a.a.shape({current:a.a.any})]),h=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],v={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],w=!("undefined"===typeof window||!window.document||!window.document.createElement);function N(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function E(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function k(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!E(e))return!1;var t=N(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&w){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function T(e){return null!==e&&(Array.isArray(e)||w&&"number"===typeof e.length)}function R(e,t){var n=k(e);return t?T(n)?n:null===n?[]:[n]:T(n)?n[0]:n}var S=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},833:function(e,t,n){"use strict";var r=n(8),o=n(0),a=(n(5),n(569)),c=n.n(a),i=(n(839),n(14)),s={sm:17,md:20,lg:36};t.a=function(e){var t,n=e.size,a=e.bordered,u=e.rounded,d=e.Icon,l=e.onClick,f=e.className,b=void 0===f?"":f,p=e.color,m=e.width,j=e.height,h=e.marginRight,y=e.iconSize,g=e.style,v=e.centered;return Object(i.jsx)("span",{style:Object(o.a)(Object(o.a)({},g),{},{width:n?s[n]:m,height:n?s[n]:j}),className:c()((t={},Object(r.a)(t,b,!0),Object(r.a)(t,"flex-center justify-content-center",v),Object(r.a)(t,"custom-icon",!0),Object(r.a)(t,"custom-icon-btn",a&&u),Object(r.a)(t,"text-".concat(p),p),Object(r.a)(t,"rounded-circle",u),Object(r.a)(t,"mr-1",h),Object(r.a)(t,"rounded-circle",u),Object(r.a)(t,"bordered",a),t)),onClick:function(){return"function"===typeof l&&l()},children:Object(i.jsx)(d,{size:y||void 0})})}},839:function(e,t,n){},854:function(e,t,n){"use strict";var r=n(5),o=n.n(r),a=n(264),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,u=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},u.displayName="ChevronLeft",t.a=u},855:function(e,t,n){"use strict";var r=n(18),o=n(34),a=n(5),c=n.n(a),i=n(264),s=n.n(i),u=n(569),d=n.n(u),l=n(570),f={tag:l.q,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},b=function(e){var t=e.className,n=e.cssModule,a=e.color,i=e.body,s=e.inverse,u=e.outline,f=e.tag,b=e.innerRef,p=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(l.m)(d()(t,"card",!!s&&"text-white",!!i&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return c.a.createElement(f,Object(r.a)({},p,{className:m,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},856:function(e,t,n){"use strict";var r=n(18),o=n(34),a=n(5),c=n.n(a),i=n(264),s=n.n(i),u=n(569),d=n.n(u),l=n(570),f={tag:l.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},b=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,i=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),u=Object(l.m)(d()(t,"card-body"),n);return c.a.createElement(i,Object(r.a)({},s,{className:u,ref:a}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},857:function(e,t,n){"use strict";var r=n(18),o=n(34),a=n(5),c=n.n(a),i=n(264),s=n.n(i),u=n(569),d=n.n(u),l=n(570),f={tag:l.q,className:s.a.string,cssModule:s.a.object},b=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),s=Object(l.m)(d()(t,"card-title"),n);return c.a.createElement(a,Object(r.a)({},i,{className:s}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=Authenticate-Components-AuthWrapper.1b9c35d6.chunk.js.map