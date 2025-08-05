var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequire0688;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequire0688=o),o.register;var i=o("je8ct");(async()=>{let e=await (0,i.getAllBooksCategories)(),r=document.querySelector(".category-list");e.forEach(({list_name:e})=>{e&&r.insertAdjacentHTML("beforeend",`<li>
        <input type='radio' name='categories' id='${e}' />
        <label data-category="${e}" for='${e}'>${e}</label>
       </li>
       `)})})();
//# sourceMappingURL=project-team-10.9531c02a.js.map
