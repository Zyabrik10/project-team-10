function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("nBUN1",(function(e,t){e.exports=new URL(i("kyEFX").resolve("ljO2x"),import.meta.url).toString()})),i.register("8RnQs",(function(e,t){e.exports=new URL(i("kyEFX").resolve("fSzNj"),import.meta.url).toString()})),i.register("iPeWv",(function(e,t){e.exports=new URL(i("kyEFX").resolve("6Uqd4"),import.meta.url).toString()})),i.register("2KXPt",(function(e,t){e.exports=new URL(i("kyEFX").resolve("dKtMY"),import.meta.url).toString()})),i.register("k5UXN",(function(e,t){e.exports=new URL(i("kyEFX").resolve("6stEj"),import.meta.url).toString()})),i.register("emoxQ",(function(e,t){e.exports=new URL(i("kyEFX").resolve("5f6GY"),import.meta.url).toString()})),i.register("8WEXf",(function(e,t){e.exports=new URL(i("kyEFX").resolve("aloXU"),import.meta.url).toString()})),i.register("26otC",(function(e,t){e.exports=new URL(i("kyEFX").resolve("elRwJ"),import.meta.url).toString()})),i.register("6Cxrw",(function(e,t){e.exports=new URL(i("kyEFX").resolve("kBTEi"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.b04e96d0.js","ljO2x":"saveCh.860ac920.png","fSzNj":"hope.eb3e2d48.png","6Uqd4":"medical.5ced0213.png","dKtMY":"razom.bc5033cc.png","6stEj":"action.f2b3200d.png","5f6GY":"serhiy.6da46b5d.png","aloXU":"united.585e7897.png","elRwJ":"sans.244ad31c.png","kBTEi":"vision.4e4d0563.png"}'));const o=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:i("nBUN1"),id:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:i("8RnQs"),id:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:i("iPeWv"),id:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:i("2KXPt"),id:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:i("k5UXN"),id:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:i("emoxQ"),id:"06"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:i("8WEXf"),id:"07"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:i("26otC"),id:"08"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:i("6Cxrw"),id:"09"}],s=document.querySelector("ul.support-list"),l=o.map((({title:e,url:t,img:r,id:n},i)=>{return`<li class="support-item"><span class="item-number">${o=i+1,o.toString().padStart(2,"0")}</span>\n     <a class="support-link global-link" href=${t} target="_blank">\n  <img src=${r} class="support-img-${n}"  alt="${e}">\n</a>\n</li>\n    `;var o})).join("");s.insertAdjacentHTML("afterbegin",l);const a=document.querySelector(".js-sup-btn");let u=!1;a.addEventListener("click",(function(){u?(s.scrollTop=0,a.classList.remove("support-button-rotate")):(s.scrollTop=s.scrollHeight,a.classList.add("support-button-rotate"));u=!u}));JSON.parse(localStorage.getItem("client-info"));
//# sourceMappingURL=shopping-list.b04e96d0.js.map