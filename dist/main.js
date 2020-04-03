!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function r(e){return 1===(e+="").length?e="0"+e:e}!function(){const c=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60),r=Math.floor(t/60/60);return(c={timeRemaining:t,hours:r,minutes:n,seconds:o}).timeRemaining<0?{timeRemaining:c.timeRemaining,hours:0,minutes:0,seconds:0}:c;var c}();t.textContent=r(c.hours),o.textContent=r(c.minutes),n.textContent=r(c.seconds)}()};var r=()=>{const e=document.body,t=document.querySelector("menu"),o=()=>t.classList.toggle("active-menu");e.addEventListener("click",e=>{const n=e.target;(n.matches(".close-btn, a, .menu")||n.closest(".menu")||!n.closest("menu")&&t.classList.contains("active-menu"))&&o()})};var c=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");t.forEach(t=>t.addEventListener("click",()=>{e.style.display="block",window.innerWidth>768&&(o.style.transition="opacity .4s",o.style.opacity="0",setTimeout(()=>o.style.opacity="1",10))})),e.addEventListener("click",t=>{let{target:o}=t;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),!o&&(e.style.display="none"))})};var a=()=>{const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})})};var l=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let{target:n}=e;n=n.closest(".service-header-tab"),n.classList.contains("service-header-tab")&&t.forEach((e,r)=>{n===e&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var s=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");let o,n=0;(()=>{const t=document.querySelector(".portfolio-dots");for(let o=0;o<e.length;o++){const e=document.createElement("li");e.classList.add("dot"),t.appendChild(e)}})();const r=document.querySelectorAll(".dot");r[0].classList.add("dot-active");const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},l=()=>{c(e,n,"portfolio-item-active"),c(r,n,"dot-active"),n++,n>=e.length&&(n=0),a(e,n,"portfolio-item-active"),a(r,n,"dot-active")},s=(e=2e3)=>{o=setInterval(l,e)};t.addEventListener("click",t=>{const{target:o}=t;if(!o.matches(".portfolio-btn, .dot"))return!1;c(e,n,"portfolio-item-active"),c(r,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&r.forEach((e,t)=>{e===o&&(n=t)}),n>=e.length&&(n=0),n<0&&(n=n=e.length-1),a(e,n,"portfolio-item-active"),a(r,n,"dot-active")}),t.addEventListener("mouseover",e=>{const{target:t}=e;(t.matches(".portfolio-btn")||t.matches(".dot"))&&clearInterval(o)}),t.addEventListener("mouseout",e=>{const{target:t}=e;(t.matches(".portfolio-btn")||t.matches(".dot"))&&s()}),s(2e3)};var i=()=>{let e;document.querySelectorAll(".command__photo").forEach(t=>{t.addEventListener("mouseover",()=>{e=t.src,t.src=t.dataset.img}),t.addEventListener("mouseleave",()=>t.src=e)})};var u=e=>{e.forEach(e=>{e.addEventListener("input",()=>{const t=e.value;e.classList.contains("form-phone")?e.value=t.match(/^\+?\d{0,11}/g,""):(e.classList.contains("form-name")||e.classList.contains("mess"))&&(e.value=t.replace(/[^а-яё ]/i,""))})}),document.querySelectorAll(".calc-item").forEach(e=>{e.addEventListener("input",()=>{const t=e.value;e.value=t.replace(/^\W/i,"")})})};var d=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.querySelector("#total");t.addEventListener("change",t=>{const{target:l}=t;l!==o&&l!==n&&l!==r&&l!==c||(()=>{let t=0,l=1,s=1;const i=o.options[o.selectedIndex].value,u=+n.value;r.value>1&&(l+=(r.value-1)/10),c.value&&c.value<5?s*=2:c.value&&c.value<10&&(s*=1.5),i&&u&&(t=Math.ceil(e*i*u*l*s)),a.textContent=t})()})};var m=()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");let o,n=0;const r=()=>{if(o=requestAnimationFrame(r),!(n<350))return cancelAnimationFrame(o),!1;n+=5,t.style.width=n+"px"};e.forEach(e=>{e.addEventListener("submit",t=>{c(t,e)})});const c=(e,n)=>{e.preventDefault(),document.body.appendChild(t),t.classList.add("show-modal-data"),t.textContent="Загрузка...",o=requestAnimationFrame(r);const c=new FormData(n);let l={};for(let e of c.entries())l[e[0]]=e[1];n.querySelectorAll("input").forEach(e=>e.value=""),a(l).then(e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(e=>{t.classList.add("show-modal-data"),t.textContent="Что-то пошло не так...",o=requestAnimationFrame(r),console.log(e)}).finally(()=>setTimeout(()=>t.remove(),6e3))},a=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};n("10 March 2020"),setInterval(n,1e3,"10 March 2020"),r(),c(),a(),l(),s(),i(),u(document.querySelectorAll(".form-phone")),u(document.querySelectorAll(".form-name")),u(document.querySelectorAll(".mess")),d(100),m()}]);