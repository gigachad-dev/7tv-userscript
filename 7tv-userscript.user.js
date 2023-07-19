// ==UserScript==
// @name        7tv-userscript
// @version     0.1.0
// @author      crashmax <userscript@crashmax.ru>
// @license     MIT
// @homepage    https://gigachad-dev.github.io/7tv-userscript/
// @match       https://7tv.app/*
// @grant       GM_addStyle
// @updateURL   https://gigachad-dev.github.io/7tv-userscript/7tv-userscript.meta.js
// @downloadURL https://gigachad-dev.github.io/7tv-userscript/7tv-userscript.user.js
// ==/UserScript==

(function(){"use strict";function i(t,e,...n){const r=document.createElement(t);return e instanceof Node?r.append(e):typeof e=="string"?r.append(s(e)):Array.isArray(e)?r.append(...e):(Object.assign(r,e),Object.assign(r.style,e?.style)),r.append(...n),r}function s(t){return document.createTextNode(t)}function a(t,e,n){const r=new MutationObserver((y,h)=>{for(const E of y)e(E,h)});return r.observe(t,{childList:!0,subtree:!0,...n}),()=>r.disconnect()}function u(){return typeof window<"u"}const d={info:"#2ecc71",debug:"#7f8c8d",warn:"#f39c12",error:"#c0392b"};function p(t,e){return[`%c${t}`,`background:${d[e]};border-radius:0.5em;color:white;font-weightbold;padding:2px 0.5em;font-family:cursive`]}const f={info:"\x1B[32m",debug:"\x1B[90m",warn:"\x1B[33m",error:"\x1B[31m"};function m(t,e){return`${f[e]}${t}\x1B[0m`}class l{#e;info;debug;warn;error;constructor(e){this.#e=e;for(const n of["info","debug","warn","error"])this[n]=(...r)=>this.print(n,...r)}print(e,...n){const r=console[e];u()?r(...p(this.#e,e),...n):r(m(this.#e,e),...n)}}const b=new l("7tv-userscript"),o=".preview-size",c=".emote-card-wrapper";function g(t){if(t.classList.contains(o)||t.classList.contains(c))return!0;const e=t.closest(o),n=t.closest(c);return!!(e||n)}function w(t){const e=t.target;if(!g(e))return;const n=e.querySelector("video");!n||Number.isNaN(n.duration)||n.play()}const x="";function v(){const t=document.querySelector("#app");if(!t){b.error("App is not defined");return}document.body.addEventListener("mouseover",e=>{w(e)}),a(t,()=>{const e=document.querySelectorAll("img");for(const n of e){const r=i("video",{loop:!0,src:n.src.replace(".webp",".avif"),poster:n.src.replace(".webp",".png")});r.currentTime=.01,n.replaceWith(r)}})}v(),GM_addStyle(".emote-card>a .img-wrapper video{margin-top:1em;min-width:5em;max-width:55%;object-fit:contain;pointer-events:none}")})();
