!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9)},function(e,t,n){},function(e,t){var n=document.querySelector(".brands__btn-more"),o=document.querySelectorAll(".brands__item");n.addEventListener("click",function(){if(n.classList.contains("btn-more--show")){for(var e=0;e<o.length;e++)o[e].classList.add("brands__btn-more--hidden");n.classList.add("btn-more--hide"),n.classList.remove("btn-more--show"),n.innerHTML="Показать все"}else{for(var t=0;t<o.length;t++)o[t].classList.remove("brands__btn-more--hidden");n.classList.add("btn-more--show"),n.classList.remove("btn-more--hide"),n.innerHTML="Скрыть"}})},function(e,t){var n=document.querySelector(".about-company__btn-more"),o=document.querySelectorAll(".about-company__text");n.addEventListener("click",function(){if(n.classList.contains("btn-more--show")){for(var e=0;e<o.length;e++)o[e].classList.add("about-company__btn-more--hidden");n.classList.add("btn-more--hide"),n.classList.remove("btn-more--show"),n.innerHTML="Читать далее"}else{for(var t=0;t<o.length;t++)o[t].classList.remove("about-company__btn-more--hidden");n.classList.add("btn-more--show"),n.classList.remove("btn-more--hide"),n.innerHTML="Скрыть"}})},function(e,t){var n=document.querySelector(".types-tech__btn-more"),o=document.querySelectorAll(".types-tech__item");n.addEventListener("click",function(){if(n.classList.contains("btn-more--show")){for(var e=0;e<o.length;e++)o[e].classList.add("types-tech__btn-more--hidden");n.classList.add("btn-more--hide"),n.classList.remove("btn-more--show"),n.innerHTML="Показать все"}else{for(var t=0;t<o.length;t++)o[t].classList.remove("types-tech__btn-more--hidden");n.classList.add("btn-more--show"),n.classList.remove("btn-more--hide"),n.innerHTML="Скрыть"}})},function(e,t){var n=document.querySelector(".btn--burger"),o=document.querySelector(".overlay"),c=document.querySelector(".sidebar-menu__btn--close"),r=document.querySelector(".sidebar-menu"),s=document.querySelector(".sidebar-menu__btn--phone"),a=document.querySelector(".modal-call"),i=document.querySelector(".sidebar-menu__btn--message"),l=document.querySelector(".modal-feel");n.addEventListener("click",function(){r.classList.add("sidebar-menu--active"),o.classList.add("overlay--active"),document.body.classList.add("fixed")}),c.addEventListener("click",function(){r.classList.remove("sidebar-menu--active"),o.classList.remove("overlay--active")}),o.addEventListener("click",function(){r.classList.remove("sidebar-menu--active"),o.classList.remove("overlay--active")}),s.addEventListener("click",function(){a.classList.add("modal-call--active"),r.classList.remove("sidebar-menu--active")}),i.addEventListener("click",function(){l.classList.add("modal-feel--active"),r.classList.remove("sidebar-menu--active")})},function(e,t){var n=document.querySelectorAll(".btn--phone"),o=document.querySelector(".overlay"),c=document.querySelector(".modal-call__btn--close"),r=document.querySelector(".modal-call");n.forEach(function(e){e.addEventListener("click",function(){r.classList.add("modal-call--active"),o.classList.add("overlay--active"),document.body.classList.add("fixed")})}),c.addEventListener("click",function(){r.classList.remove("modal-call--active"),o.classList.remove("overlay--active")}),o.addEventListener("click",function(){r.classList.remove("modal-call--active"),o.classList.remove("overlay--active")})},function(e,t){var n=document.querySelectorAll(".btn--message"),o=document.querySelector(".overlay"),c=document.querySelector(".modal-feel__btn--close"),r=document.querySelector(".modal-feel");n.forEach(function(e){e.addEventListener("click",function(){r.classList.add("modal-feel--active"),o.classList.add("overlay--active"),document.body.classList.add("fixed")})}),c.addEventListener("click",function(){r.classList.remove("modal-feel--active"),o.classList.remove("overlay--active")}),o.addEventListener("click",function(){r.classList.remove("modal-feel--active"),o.classList.remove("overlay--active")})},function(e,t){new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}})}]);
//# sourceMappingURL=bundle.js.map