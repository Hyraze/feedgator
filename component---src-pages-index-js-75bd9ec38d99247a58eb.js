(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"094J":function(e,t,n){"use strict";(function(e){n("8+KV"),n("V+eJ");var r=n("q1tI"),a=n("puqk"),c={},o=function(e,t,n){return c[e]||(c[e]={callbacks:[],value:n}),c[e].callbacks.push(t),{deregister:function(){var n=c[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){c[e].value!==n&&(c[e].value=n,c[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};t.a=function(t,n){if(void 0===n&&(n=e.localStorage),n){var c=(i=n,{get:function(e,t){var n=i.getItem(e);return null===n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,n){var c=n.get,i=n.set,u=Object(r.useRef)(null),s=Object(r.useState)((function(){return c(t,e)})),l=s[0],f=s[1];return Object(a.a)("storage",(function(e){var n=e.key,r=JSON.parse(e.newValue);n===t&&l!==r&&f(r)})),Object(r.useEffect)((function(){return u.current=o(t,f,e),function(){u.current.deregister()}}),[]),Object(r.useEffect)((function(){i(t,l),u.current.emit(l)}),[l]),[l,f]}(e,t,c)}}var i;return r.useState}}).call(this,n("yLpj"))},"8Lv4":function(e,t,n){},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),c=n("vhPU"),o=/"/g,i=function(e,t,n,r){var a=String(c(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),i+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",(function(){return l})),n.d(t,"query",(function(){return f}));n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("Z2Ku"),n("L9s1"),n("tUrg"),n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Vd3H");var r=n("q1tI"),a=n.n(r),c=function(e){var t=e.checked,n=e.onChange;return a.a.createElement("span",{className:"toggle-control"},a.a.createElement("input",{className:"dmcheck",type:"checkbox",checked:t,onChange:n,id:"dmcheck"}),a.a.createElement("label",{htmlFor:"dmcheck"}))},o=n("g+62"),i=function(){var e=Object(o.a)(!1);return a.a.createElement("div",{className:"dark-mode-toggle"},a.a.createElement("button",{type:"button",onClick:e.disable},"☀"),a.a.createElement(c,{checked:e.value,onChange:e.toggle}),a.a.createElement("button",{type:"button",onClick:e.enable},"☾"))};n("8Lv4"),n("U/bY");function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){var t=e.data;return a.a.createElement("div",{id:"root",className:"lh-copy mw6 center ph3"},a.a.createElement("header",{className:"tc"},a.a.createElement("h1",{className:"awesome 1 lh-title mb0"},"Feedgator"),a.a.createElement("h2",{className:"cent"},a.a.createElement(i,null)),a.a.createElement("h2",{className:"f5 fw1"},"A minimalistic Gatsby blog rendering my favourite RSS feeds(Firefox,Github Trending,CSS Tricks)")),a.a.createElement("main",{role:"main"},a.a.createElement("ul",{className:"list pa0"},"undefined"!=typeof window?function e(t){for(var n=[],r=0;r<t.length;r++)Array.isArray(t[r])?n=n.concat(e(t[r])):n.push(t[r]);return n}(Object.keys(t.oneGraph).map((function(e){var n=t.oneGraph[e].rss2Feed;return n.items.map((function(e){return{source:n.title,content:e}}))}))).sort((function(e,t){var n=e.content;return t.content.pubDate-n.pubDate})).map((function(e){e.source;var t,n,r,c,o,i=e.content,s=i.title.split(" ").map((function(e){return e.toLowerCase()})).join("-"),l=localStorage.getItem("opened_articles");return a.a.createElement("li",{key:s,className:"pv3 dim"},a.a.createElement("a",{href:i.link,onClick:function(){if(l){var e=JSON.parse(l).data;e.includes(s)||localStorage.setItem("opened_articles",JSON.stringify({data:[s].concat(u(e))}))}else localStorage.setItem("opened_articles",JSON.stringify({data:[s]}))},className:"link  "+(l&&JSON.parse(l).data.includes(s)?"strike":""),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("small",null,(t=new Date(i.pubDate),n=t.getHours(),r=t.getMinutes(),c=n>=12?"pm":"am",o=(n=(n%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+c,t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+o)),a.a.createElement("h3",{className:"ma0"},i.title)))})):null)),a.a.createElement("footer",null))},f=(t.default=l,"3840557406")},"U/bY":function(e,t,n){},"g+62":function(e,t,n){"use strict";(function(e){var r=n("puqk"),a=n("q1tI"),c=n("094J"),o=function(){},i={classList:{add:o,remove:o}},u=function(t,n,r){void 0===r&&(r=e);var o=t?Object(c.a)(t,n):a.useState,u=r.matchMedia?r.matchMedia("(prefers-color-scheme: dark)"):{},s={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},l="(prefers-color-scheme: dark)"===u.media,f=r.document&&r.document.body||i;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=f),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:s,getInitialValue:function(e){return l?u.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,c=t.classNameDark,o=t.classNameLight,i=t.onChange,s=t.storageKey;void 0===s&&(s="darkMode");var l=t.storageProvider,f=t.global,m=Object(a.useMemo)((function(){return u(s,l,f)}),[s,l,f]),d=m.getDefaultOnChange,v=m.mediaQueryEventTarget,g=(0,m.usePersistedDarkModeState)((0,m.getInitialValue)(e)),p=g[0],b=g[1],h=Object(a.useMemo)((function(){return i||d(n,c,o)}),[i,n,c,o,d]);return Object(a.useEffect)((function(){h(p)}),[h,p]),Object(r.a)("change",(function(e){return b(e.matches)}),v),{value:p,enable:Object(a.useCallback)((function(){return b(!0)}),[b]),disable:Object(a.useCallback)((function(){return b(!1)}),[b]),toggle:Object(a.useCallback)((function(){return b((function(e){return!e}))}),[b])}}}).call(this,n("yLpj"))},puqk:function(e,t,n){"use strict";(function(e){var r=n("q1tI");t.a=function(t,n,a){void 0===a&&(a=e);var c=Object(r.useRef)();Object(r.useEffect)((function(){c.current=n}),[n]),Object(r.useEffect)((function(){if(a&&a.addEventListener){var e=function(e){return c.current(e)};return a.addEventListener(t,e),function(){a.removeEventListener(t,e)}}}),[t,a])}}).call(this,n("yLpj"))},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-75bd9ec38d99247a58eb.js.map