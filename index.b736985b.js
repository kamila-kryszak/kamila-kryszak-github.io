!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);r(1);function t(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,c=function(){};return{s:c,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw a}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}console.log("Hello, it's Kamila here - nice to meet You 😁 🚀"),fetch("https://api.github.com/users/kamila-kryszak/repos?sort=created&direction=asc").then((function(e){return e.json()})).then((function(e){var n,r=document.querySelector(".projects-grid--js"),o=t(e);try{for(o.s();!(n=o.n()).done;){var c=n.value,a=c.description,l=c.homepage,i=c.html_url,s=c.name,p='<article class="project">\n            <div class="project__window">\n              <span class="project__circle"></span>\n              <span class="project__circle"></span>\n              <span class="project__circle"></span>\n            </div>\n            <div class="project__content-box">\n            <img src="img/githubIcon.svg" alt="" target="_blank" rel="noopener noreferrer">\n              <h3 class="project__grid project__title">\n                <span class="project__label">project: </span><span class="project__name">'.concat(s,'</span>\n              </h3>\n              <p class="project__grid project__grid--description">\n                <span class="project__label">description:</span>\n                <span class="project__description">').concat(a,'</span>\n              </p>\n              <p class="project__grid">\n                <span class="project__label">demo:</span>\n                <span>&lt;<a href="').concat(l,'" title="').concat(s,'" target="_blank" rel="noopener noreferrer" class="project__link">see_here</a>&gt;</span>\n              </p>\n              <p class="project__grid">\n                <span class="project__label">github:</span>\n                <span>&lt;<a href="').concat(i,'" title="').concat(s,'" target="_blank" rel="noopener noreferrer" class="project__link">source_code</a>&gt;</span>\n              </p>\n            </div>\n          </article>');a&&(r.innerHTML+=p)}}catch(e){o.e(e)}finally{o.f()}})).catch((function(e){return console.log(e)}))},function(e,n,r){}]);