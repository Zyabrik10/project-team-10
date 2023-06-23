var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=s),s.register("9OeKo",(function(t,n){var i="Expected a function",s=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,h="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=h||c||Function("return this")(),d=Object.prototype.toString,_=Math.max,p=Math.min,f=function(){return u.Date.now()};function g(e,t,n){var s,r,o,a,l,h,c=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=s,i=r;return s=r=void 0,c=t,a=e.apply(i,n)}function C(e){return c=e,l=setTimeout(T,t),u?v(e):a}function w(e){var n=e-h;return void 0===h||n>=t||n<0||d&&e-c>=o}function T(){var e=f();if(w(e))return b(e);l=setTimeout(T,function(e){var n=t-(e-h);return d?p(n,o-(e-c)):n}(e))}function b(e){return l=void 0,g&&s?v(e):(s=r=void 0,a)}function I(){var e=f(),n=w(e);if(s=arguments,r=this,h=e,n){if(void 0===l)return C(h);if(d)return l=setTimeout(T,t),v(h)}return void 0===l&&(l=setTimeout(T,t)),a}return t=y(t)||0,m(n)&&(u=!!n.leading,o=(d="maxWait"in n)?_(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),I.cancel=function(){void 0!==l&&clearTimeout(l),c=0,s=h=r=l=void 0},I.flush=function(){return void 0===l?a:b(f())},I}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=o.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}t.exports=function(e,t,n){var s=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return m(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:s,maxWait:t,trailing:r})}})),s.register("jAzyG",(function(e,n){t(e.exports,"getDatabase",(function(){return s("8NPS8").getDatabase})),t(e.exports,"update",(function(){return s("8NPS8").update})),t(e.exports,"ref",(function(){return s("8NPS8").ref})),t(e.exports,"set",(function(){return s("8NPS8").set})),s("8NPS8")})),s.register("8NPS8",(function(e,n){t(e.exports,"ref",(function(){return Yi})),t(e.exports,"set",(function(){return $i})),t(e.exports,"update",(function(){return Qi})),t(e.exports,"getDatabase",(function(){return ts}));var i=s("ix4Jr"),r=s("4a6xH"),o=s("ffjl9"),a=s("7vF8m"),l=s("4TNnu");const h="@firebase/database",c="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new _},f=p("localStorage"),g=p("sessionStorage"),m=new(0,a.Logger)("@firebase/database"),y=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const i=n.digest();return o.base64.encodeByteArray(i)},C=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=C.apply(null,i):t+="object"==typeof i?(0,o.stringify)(i):i,t+=" "}return t};let w=null,T=!0;const b=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a.LogLevel.VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},I=function(...e){if(!0===T&&(T=!1,null===w&&!0===g.get("logging_enabled")&&b(!0)),w){const t=C.apply(null,e);w(t)}},k=function(e){return function(...t){I(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+C(...e);m.error(t)},E=function(...e){const t=`FIREBASE FATAL ERROR: ${C(...e)}`;throw m.error(t),new Error(t)},N=function(...e){const t="FIREBASE WARNING: "+C(...e);m.warn(t)},R=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P="[MIN_NAME]",x="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===P||t===x)return-1;if(t===P||e===x)return 1;{const n=U(e),i=U(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},M=function(e,t){return e===t?0:e<t?-1:1},O=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},A=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.stringify)(t[i]),n+=":",n+=A(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){(0,o.assert)(!R(e),"Invalid JSON number");const t=1023;let n,i,s,r,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const h=l.join("");let c="";for(a=0;a<64;a+=8){let e=parseInt(h.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const W=new RegExp("^-?(0*)\\d{1,10}$"),U=function(e){if(W.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},j=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw N("Exception was thrown by user callback.",t),e}),Math.floor(0))}},H=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){N(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',N(e)}}class B{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}B.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K="5",Y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G="websocket",$="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function X(e,t,n){let i;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===G)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==$)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return L(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={},ee={};function te(e){const t=e.toString();return Z[t]||(Z[t]=new J),Z[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&j((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="start";class se{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=te(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),X(t,$,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ne(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new re(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ie)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=K,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){se.forceAllow_=!0}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!se.forceAllow_||!(se.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),i=F(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class re{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=y(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=re.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){I("frame writing exception"),e.stack&&I(e.stack),I(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe=null;"undefined"!=typeof MozWebSocket?oe=MozWebSocket:"undefined"!=typeof WebSocket&&(oe=WebSocket);class ae{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=te(t),this.connURL=ae.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r.v=K,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),X(e,G,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${u}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new oe(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==oe&&!ae.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2,ae.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[se,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable();let n=t&&!ae.previouslyFailed();if(e.webSocketOnly&&(t||N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ae];else{const e=this.transports_=[];for(const t of le.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);le.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}le.globalTransportInitialized_=!1;class he{constructor(e,t,n,i,s,r,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new le(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=H((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=O("t",e),n=O("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=O("t",e),n=O("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=O("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),K!==n&&N("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),H((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):H((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ue{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new de}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function pe(){return new _e("")}function fe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ge(e){return e.pieces_.length-e.pieceNum_}function me(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new _e(e.pieces_,t)}function ye(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ve(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ce(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new _e(t,0)}function we(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof _e)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new _e(n,0)}function Te(e){return e.pieceNum_>=e.pieces_.length}function be(e,t){const n=fe(e),i=fe(t);if(null===n)return t;if(n===i)return be(me(e),me(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ie(e,t){const n=ve(e,0),i=ve(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=D(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ke(e,t){if(ge(e)!==ge(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Se(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ge(e)>ge(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ee{constructor(e,t){this.errorPrefix_=t,this.parts_=ve(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Ne(this)}}function Ne(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Re(e))}function Re(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends ue{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Pe}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1e3;class De extends ce{constructor(e,t,n,i,s,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=De.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xe,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pe.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&de.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,o.stringify)(s)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;De.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();N(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=xe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+De.nextConnectionId_++,s=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,n())},h=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:h};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new he(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{N(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&N(e),l())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>A(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new _e(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=de.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}De.nextPersistentConnectionId_=0,De.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Me(P,e),i=new Me(P,t);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ae;class Fe extends Oe{static get __EMPTY_NODE(){return Ae}static set __EMPTY_NODE(e){Ae=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(x,Ae)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Me(e,Ae)}toString(){return".key"}}const Le=new Fe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:We.RED,this.left=null!=i?i:Ue.EMPTY_NODE,this.right=null!=s?s:Ue.EMPTY_NODE}copy(e,t,n,i,s){return new We(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ue.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0,We.BLACK=!1;class Ue{constructor(e,t=Ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qe(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e,t){return D(e.name,t.name)}function He(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze;Ue.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new We(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ve=function(e){return"number"==typeof e?"number:"+q(e):"string:"+e},Be=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===ze||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===ze||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ke,Ye,Ge;class $e{constructor(e,t=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Be(this.priorityNode_)}static set __childrenNodeConstructor(e){Ke=e}static get __childrenNodeConstructor(){return Ke}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:".priority"===fe(e)?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=fe(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ge(e),".priority must be the last token in a path"),this.updateImmediateChild(n,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ve(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(t),s=$e.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(i>=0,"Unknown leaf type: "+t),(0,o.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qe=new class extends Oe{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(x,new $e("[PRIORITY-POST]",Ge))}makePost(e,t){const n=Ye(e);return new Me(t,new $e("[PRIORITY-POST]",n))}toString(){return".priority"}},Xe=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Xe,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ze=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new We(a,o.node,We.BLACK,null,null);{const l=parseInt(r/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new We(a,o.node,We.BLACK,h,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),c=e[r],u=n?n(c):c;l(new We(u,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,We.BLACK):(a(i,We.BLACK),a(i,We.RED))}return r}(new Je(e.length));return new Ue(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et;const tt={};class nt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.assert)(tt&&Qe,"ChildrenNode.ts has not been loaded"),et=et||new nt({".priority":tt},{".priority":Qe}),et}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ue?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==Le,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Me.Wrap);let r,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();r=i?Ze(n,e.getCompare()):tt;const l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;const c=Object.assign({},this.indexes_);return c[l]=r,new nt(c,h)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,i)=>{const s=(0,o.safeGet)(this.indexSet_,i);if((0,o.assert)(s,"Missing index implementation for "+i),n===tt){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Me.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ze(n,s.getCompare())}return tt}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Me(e.name,i))),s.insert(e,e.node)}}));return new nt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===tt)return n;{const i=t.get(e.name);return i?n.remove(new Me(e.name,i)):n}}));return new nt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it;class st{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Be(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return it||(it=new st(new Ue(He),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||it}updatePriority(e){return this.children_.isEmpty()?this:new st(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?it:t}}getChild(e){const t=fe(e);return null===t?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Me(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?it:this.priorityNode_;return new st(i,r,s)}}updateChild(e,t){const n=fe(e);if(null===n)return t;{(0,o.assert)(".priority"!==fe(e)||1===ge(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(me(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Qe,((r,o)=>{t[r]=o.val(e),n++,s&&st.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ve(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rt?-1:0}withIndex(e){if(e===Le||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new st(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Le||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Le?null:this.indexMap_.get(e.toString())}}st.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const rt=new class extends st{constructor(){super(new Ue(He),st.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return st.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Me,{MIN:{value:new Me(P,st.EMPTY_NODE)},MAX:{value:new Me(x,rt)}}),Fe.__EMPTY_NODE=st.EMPTY_NODE,$e.__childrenNodeConstructor=st,ze=rt,function(e){Ge=e}(rt);function ot(e,t=null){if(null===e)return st.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new $e(e,ot(t))}if(e instanceof Array){let n=st.EMPTY_NODE;return L(e,((t,i)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=ot(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ot(t))}{const n=[];let i=!1;if(L(e,((e,t)=>{if("."!==e.substring(0,1)){const s=ot(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Me(e,s)))}})),0===n.length)return st.EMPTY_NODE;const s=Ze(n,je,(e=>e.name),He);if(i){const e=Ze(n,Qe.getCompare());return new st(s,ot(t),new nt({".priority":e},{".priority":Qe}))}return new st(s,ot(t),nt.Default)}}!function(e){Ye=e}(ot);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends Oe{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!Te(e)&&".priority"!==fe(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}makePost(e,t){const n=ot(e),i=st.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(t,i)}maxPost(){const e=st.EMPTY_NODE.updateChild(this.indexPath_,rt);return new Me(x,e)}toString(){return ve(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new class extends Oe{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const n=ot(e);return new Me(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return{type:"value",snapshotNode:e}}function ct(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ut(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function dt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new _t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Qe?n="$priority":e.index_===lt?n="$value":e.index_===Le?n="$key":((0,o.assert)(e.index_ instanceof at,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ft(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ce{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=gt.getListenId_(e,n),a={};this.listens_[r]=a;const l=pt(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,o.safeGet)(this.listens_,r)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=gt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=pt(e._queryParams),n=e._path.toString(),i=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){N("Failed to parse JSON response for "+r+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&N("Got unsuccessful REST response for "+r+" Status: "+a.status),n(a.status);n=null}},a.open("GET",r,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.rootNode_=st.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return{value:null,children:new Map}}function vt(e,t,n){if(Te(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=fe(t);e.children.has(i)||e.children.set(i,yt());vt(e.children.get(i),t=me(t),n)}}function Ct(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ct(i,new _e(t.toString()+"/"+e),n)}))}class wt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wt(e);const n=1e4+2e4*Math.random();H(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,((e,i)=>{i>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),H(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,It;function kt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(It=bt||(bt={}))[It.OVERWRITE=0]="OVERWRITE",It[It.MERGE=1]="MERGE",It[It.ACK_USER_WRITE=2]="ACK_USER_WRITE",It[It.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class St{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=bt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Te(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new _e(e));return new St(pe(),t,this.revert)}}return(0,o.assert)(fe(this.path)===e,"operationForChild called for unrelated child."),new St(me(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=bt.OVERWRITE}operationForChild(e){return Te(this.path)?new Et(this.source,pe(),this.snap.getImmediateChild(e)):new Et(this.source,me(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=bt.MERGE}operationForChild(e){if(Te(this.path)){const t=this.children.subtree(new _e(e));return t.isEmpty()?null:t.value?new Et(this.source,pe(),t.value):new Nt(this.source,pe(),t)}return(0,o.assert)(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const t=fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t,n,i,s,r){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const i=new Me(t.childName,t.snapshotNode),s=new Me(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function xt(e,t){return{eventCache:e,serverCache:t}}function Dt(e,t,n,i){return xt(new Rt(t,n,i),e.serverCache)}function Mt(e,t,n,i){return xt(e.eventCache,new Rt(t,n,i))}function Ot(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function At(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;class Lt{constructor(e,t=(()=>(Ft||(Ft=new Ue(M)),Ft))()){this.value=e,this.children=t}static fromObject(e){let t=new Lt(null);return L(e,((e,n)=>{t=t.set(new _e(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:pe(),value:this.value};if(Te(e))return null;{const n=fe(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(me(e),t);if(null!=s){return{path:we(new _e(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Te(e))return this;{const t=fe(e),n=this.children.get(t);return null!==n?n.subtree(me(e)):new Lt(null)}}set(e,t){if(Te(e))return new Lt(t,this.children);{const n=fe(e),i=(this.children.get(n)||new Lt(null)).set(me(e),t),s=this.children.insert(n,i);return new Lt(this.value,s)}}remove(e){if(Te(e))return this.children.isEmpty()?new Lt(null):new Lt(null,this.children);{const t=fe(e),n=this.children.get(t);if(n){const i=n.remove(me(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Lt(null):new Lt(this.value,s)}return this}}get(e){if(Te(e))return this.value;{const t=fe(e),n=this.children.get(t);return n?n.get(me(e)):null}}setTree(e,t){if(Te(e))return t;{const n=fe(e),i=(this.children.get(n)||new Lt(null)).setTree(me(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Lt(this.value,s)}}fold(e){return this.fold_(pe(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(we(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,pe(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Te(e))return null;{const i=fe(e),s=this.children.get(i);return s?s.findOnPath_(me(e),we(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pe(),t)}foreachOnPath_(e,t,n){if(Te(e))return this;{this.value&&n(t,this.value);const i=fe(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),we(t,i),n):new Lt(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(we(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Lt(null))}}function Wt(e,t,n){if(Te(t))return new qt(new Lt(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=be(s,t);return r=r.updateChild(o,n),new qt(e.writeTree_.set(s,r))}{const i=new Lt(n),s=e.writeTree_.setTree(t,i);return new qt(s)}}}function Ut(e,t,n){let i=e;return L(n,((e,n)=>{i=Wt(i,we(t,e),n)})),i}function jt(e,t){if(Te(t))return qt.empty();{const n=e.writeTree_.setTree(t,new Lt(null));return new qt(n)}}function Ht(e,t){return null!=zt(e,t)}function zt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(be(n.path,t)):null}function Vt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new Me(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Me(e,n.value))})),t}function Bt(e,t){if(Te(t))return e;{const n=zt(e,t);return new qt(null!=n?new Lt(n):e.writeTree_.subtree(t))}}function Kt(e){return e.writeTree_.isEmpty()}function Yt(e,t){return Gt(pe(),e.writeTree_,t)}function Gt(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,o.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Gt(we(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(we(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){return hn(t,e)}function Qt(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Xt(t,i.path)?s=!1:Se(i.path,t.path)&&(r=!0)),a--}if(s){if(r)return function(e){e.visibleWrites=Zt(e.allWrites,Jt,pe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=jt(e.visibleWrites,i.path);else{L(i.children,(t=>{e.visibleWrites=jt(e.visibleWrites,we(i.path,t))}))}return!0}return!1}function Xt(e,t){if(e.snap)return Se(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Se(we(e.path,n),t))return!0;return!1}function Jt(e){return e.visible}function Zt(e,t,n){let i=qt.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Se(n,e)?(t=be(n,e),i=Wt(i,t,r.snap)):Se(e,n)&&(t=be(e,n),i=Wt(i,pe(),r.snap.getChild(t)));else{if(!r.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Se(n,e))t=be(n,e),i=Ut(i,t,r.children);else if(Se(e,n))if(t=be(e,n),Te(t))i=Ut(i,pe(),r.children);else{const e=(0,o.safeGet)(r.children,fe(t));if(e){const n=e.getChild(me(t));i=Wt(i,pe(),n)}}}}}return i}function en(e,t,n,i,s){if(i||s){const r=Bt(e.visibleWrites,t);if(!s&&Kt(r))return n;if(s||null!=n||Ht(r,pe())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Se(e.path,t)||Se(t,e.path))};return Yt(Zt(e.allWrites,r,t),n||st.EMPTY_NODE)}return null}{const i=zt(e.visibleWrites,t);if(null!=i)return i;{const i=Bt(e.visibleWrites,t);if(Kt(i))return n;if(null!=n||Ht(i,pe())){return Yt(i,n||st.EMPTY_NODE)}return null}}}function tn(e,t,n,i){return en(e.writeTree,e.treePath,t,n,i)}function nn(e,t){return function(e,t,n){let i=st.EMPTY_NODE;const s=zt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Qe,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Bt(e.visibleWrites,t);return n.forEachChild(Qe,((e,t)=>{const n=Yt(Bt(s,new _e(e)),t);i=i.updateImmediateChild(e,n)})),Vt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Vt(Bt(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function sn(e,t,n,i){return function(e,t,n,i,s){(0,o.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=we(t,n);if(Ht(e.visibleWrites,r))return null;{const t=Bt(e.visibleWrites,r);return Kt(t)?s.getChild(n):Yt(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function rn(e,t){return function(e,t){return zt(e.visibleWrites,t)}(e.writeTree,we(e.treePath,t))}function on(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Bt(e.visibleWrites,t),h=zt(l,pe());if(null!=h)a=h;else{if(null==n)return[];a=Yt(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function an(e,t,n){return function(e,t,n,i){const s=we(t,n),r=zt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Yt(Bt(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ln(e,t){return hn(we(e.treePath,t),e.writeTree)}function hn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,dt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ut(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,ct(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,dt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class dn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return an(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:At(this.viewCache_),s=on(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e,t,n,i,s){const r=new cn;let a,l;if(n.type===bt.OVERWRITE){const h=n;h.source.fromUser?a=gn(e,t,h.path,h.snap,i,s,r):((0,o.assert)(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered()&&!Te(h.path),a=fn(e,t,h.path,h.snap,i,s,l,r))}else if(n.type===bt.MERGE){const h=n;h.source.fromUser?a=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const h=we(n,i);mn(t,fe(h))&&(a=gn(e,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=we(n,i);mn(t,fe(h))||(a=gn(e,a,h,l,s,r,o))})),a}(e,t,h.path,h.children,i,s,r):((0,o.assert)(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered(),a=vn(e,t,h.path,h.children,i,s,l,r))}else if(n.type===bt.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,i,s,r){let a;if(null!=rn(i,n))return t;{const l=new dn(i,t,s),h=t.eventCache.getNode();let c;if(Te(n)||".priority"===fe(n)){let n;if(t.serverCache.isFullyInitialized())n=tn(i,At(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof st,"serverChildren would be complete if leaf node"),n=nn(i,e)}c=e.filter.updateFullNode(h,n,r)}else{const s=fe(n);let o=an(i,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=h.getImmediateChild(s)),c=null!=o?e.filter.updateChild(h,s,o,me(n),l,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,st.EMPTY_NODE,me(n),l,r):h,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=tn(i,At(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,r)))}return a=t.serverCache.isFullyInitialized()||null!=rn(i,pe()),Dt(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=rn(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fn(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Te(n)){let i=new Lt(null);return l.getNode().forEachChild(Le,((e,t)=>{i=i.set(new _e(e),t)})),vn(e,t,n,i,s,r,a,o)}return t}{let h=new Lt(null);return i.foreach(((e,t)=>{const i=we(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))})),vn(e,t,n,h,s,r,a,o)}}(e,t,l.path,l.affectedTree,i,s,r)}else{if(n.type!==bt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,i,s){const r=t.serverCache,o=Mt(t,r.getNode(),r.isFullyInitialized()||Te(n),r.isFiltered());return pn(e,o,n,i,un,s)}(e,t,n.path,i,r)}const h=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ot(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ht(Ot(t)))}}(t,a,h),{viewCache:a,changes:h}}function pn(e,t,n,i,s,r){const a=t.eventCache;if(null!=rn(i,n))return t;{let l,h;if(Te(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=At(t),s=nn(i,n instanceof st?n:st.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=tn(i,At(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=fe(n);if(".priority"===c){(0,o.assert)(1===ge(n),"Can't have a priority with additional path components");const s=a.getNode();h=t.serverCache.getNode();const r=sn(i,n,s,h);l=null!=r?e.filter.updatePriority(s,r):a.getNode()}else{const o=me(n);let u;if(a.isCompleteForChild(c)){h=t.serverCache.getNode();const e=sn(i,n,a.getNode(),h);u=null!=e?a.getNode().getImmediateChild(c).updateChild(o,e):a.getNode().getImmediateChild(c)}else u=an(i,c,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),c,u,o,s,r):a.getNode()}}return Dt(t,l,a.isFullyInitialized()||Te(n),e.filter.filtersNodes())}}function fn(e,t,n,i,s,r,o,a){const l=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(Te(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),e,null)}else{const e=fe(n);if(!l.isCompleteForPath(n)&&ge(n)>1)return t;const s=me(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);h=".priority"===e?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),e,r,s,un,null)}const u=Mt(t,h,l.isFullyInitialized()||Te(n),c.filtersNodes());return pn(e,u,n,s,new dn(s,u,r),a)}function gn(e,t,n,i,s,r,o){const a=t.eventCache;let l,h;const c=new dn(s,t,r);if(Te(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Dt(t,h,!0,e.filter.filtersNodes());else{const s=fe(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),l=Dt(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=me(n),h=a.getNode().getImmediateChild(s);let u;if(Te(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===ye(r)&&e.getChild(Ce(r)).isEmpty()?e:e.updateChild(r,i):st.EMPTY_NODE}if(h.equals(u))l=t;else{l=Dt(t,e.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function mn(e,t){return e.eventCache.isCompleteForChild(t)}function yn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function vn(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,h=t;l=Te(n)?i:new Lt(null).setTree(n,i);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=yn(0,t.serverCache.getNode().getImmediateChild(n),i);h=fn(e,h,new _e(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){const l=yn(0,t.serverCache.getNode().getImmediateChild(n),i);h=fn(e,h,new _e(n),l,s,r,o,a)}})),h}function Cn(e,t){const n=At(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Te(t)&&!n.getImmediateChild(fe(t)).isEmpty())?n.getChild(t):null}function wn(e,t,n,i){t.type===bt.MERGE&&null!==t.source.queryId&&((0,o.assert)(At(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(Ot(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=_n(e.processor_,s,t,n,i);var a,l;return a=e.processor_,l=r.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Tn(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Tn(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Pt(e,s,"child_removed",t,i,n),Pt(e,s,"child_added",t,i,n),Pt(e,s,"child_moved",r,i,n),Pt(e,s,"child_changed",t,i,n),Pt(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn,In;function kn(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,o.assert)(null!=r,"SyncTree gave us an op for an invalid query."),wn(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(wn(r,t,n,i));return s}}function Sn(e,t){let n=null;for(const i of e.views.values())n=n||Cn(i,t);return n}class En{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Lt(null),this.pendingWriteTree_={visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nn(e,t,n,i,s){return function(e,t,n,i,s){(0,o.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Wt(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?On(e,new Et({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Rn(e,t,n,i){!function(e,t,n,i){(0,o.assert)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Ut(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const s=Lt.fromObject(n);return On(e,new Nt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,s))}function Pn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Qt(e.pendingWriteTree_,t)){let t=new Lt(null);return null!=i.snap?t=t.set(pe(),!0):L(i.children,(e=>{t=t.set(new _e(e),!0)})),On(e,new St(i.path,t,n))}return[]}function xn(e,t,n){return On(e,new Et({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Dn(e,t,n,i){const s=Ln(e,i);if(null!=s){const i=qn(s),r=i.path,o=i.queryId,a=be(r,t);return Wn(e,r,new Et(kt(o),a,n))}return[]}function Mn(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Sn(n,be(e,t));if(i)return i}));return en(i,t,s,n,!0)}function On(e,t){return An(t,e.syncPointTree_,null,$t(e.pendingWriteTree_,pe()))}function An(e,t,n,i){if(Te(e.path))return Fn(e,t,n,i);{const s=t.get(pe());null==n&&null!=s&&(n=Sn(s,pe()));let r=[];const o=fe(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ln(i,o);r=r.concat(An(a,l,e,t))}return s&&(r=r.concat(kn(s,e,i,n))),r}}function Fn(e,t,n,i){const s=t.get(pe());null==n&&null!=s&&(n=Sn(s,pe()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=ln(i,t),l=e.operationForChild(t);l&&(r=r.concat(Fn(l,s,o,a)))})),s&&(r=r.concat(kn(s,e,i,n))),r}function Ln(e,t){return e.tagToQueryMap.get(t)}function qn(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new _e(e.substr(0,t))}}function Wn(e,t,n){const i=e.syncPointTree_.get(t);(0,o.assert)(i,"Missing sync point for query tag that we're tracking");return kn(i,n,$t(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Un(t)}node(){return this.node_}}class jn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e);return new jn(this.syncTree_,t)}node(){return Mn(this.syncTree_,this.path_)}}const Hn=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?zn(e[".sv"],t,n):"object"==typeof e[".sv"]?Vn(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},zn=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},Vn=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,o.assert)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,o.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Bn=function(e,t,n,i){return Yn(t,new jn(n,e),i)},Kn=function(e,t,n){return Yn(e,new Un(t),n)};function Yn(e,t,n){const i=e.getPriority().val(),s=Hn(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Hn(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new $e(r,ot(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new $e(s))),i.forEachChild(Qe,((e,i)=>{const s=Yn(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function $n(e,t){let n=t instanceof _e?t:new _e(t),i=e,s=fe(n);for(;null!==s;){const e=(0,o.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new Gn(s,i,e),n=me(n),s=fe(n)}return i}function Qn(e){return e.node.value}function Xn(e,t){e.node.value=t,ni(e)}function Jn(e){return e.node.childCount>0}function Zn(e,t){L(e.node.children,((n,i)=>{t(new Gn(n,e,i))}))}function ei(e,t,n,i){n&&!i&&t(e),Zn(e,(e=>{ei(e,t,!0,i)})),n&&i&&t(e)}function ti(e){return new _e(null===e.parent?e.name:ti(e.parent)+"/"+e.name)}function ni(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Qn(e)&&!Jn(e)}(n),s=(0,o.contains)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ni(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,ni(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const ii=/[\[\].#$\/\u0000-\u001F\u007F]/,si=/[\[\].#$\u0000-\u001F\u007F]/,ri=10485760,oi=function(e){return"string"==typeof e&&0!==e.length&&!ii.test(e)},ai=function(e){return"string"==typeof e&&0!==e.length&&!si.test(e)},li=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!R(e)||e&&"object"==typeof e&&(0,o.contains)(e,".sv")},hi=function(e,t,n,i){i&&void 0===t||ci((0,o.errorPrefix)(e,"value"),t,n)},ci=function(e,t,n){const i=n instanceof _e?new Ee(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Re(i));if("function"==typeof t)throw new Error(e+"contains a function "+Re(i)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+Re(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>ri)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Re(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(L(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!oi(t)))throw new Error(e+" contains an invalid key ("+t+") "+Re(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=i).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),Ne(a),ci(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Re(i)+" in addition to actual children.")}},ui=function(e,t,n,i){if(i&&void 0===t)return;const s=(0,o.errorPrefix)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];L(t,((e,t)=>{const i=new _e(e);if(ci(s,t,we(n,i)),".priority"===ye(i)&&!li(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=ve(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!oi(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ie);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&Se(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(s,r)},di=function(e,t,n,i){if(!(i&&void 0===n||ai(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_i=function(e,t){if(".info"===fe(t))throw new Error(e+" failed = Can't modify data under /.info/")},pi=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!oi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ai(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gi(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ke(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function mi(e,t,n){gi(e,n),yi(e,(e=>Se(e,t)||Se(t,e)))}function yi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(vi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function vi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&I("event: "+n.toString()),j(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="repo_interrupt";class wi{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fi,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yt(),this.transactionQueueTree_=new Gn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ti(e,t,n){if(e.stats_=te(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new gt(e.repoInfo_,((t,n,i,s)=>{ki(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Si(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new De(e.repoInfo_,t,((t,n,i,s)=>{ki(e,t,n,i,s)}),(t=>{Si(e,t)}),(t=>{!function(e,t){L(t,((t,n)=>{Ei(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ee[n]||(ee[n]=t()),ee[n]}(e.repoInfo_,(()=>new Tt(e.stats_,e.server_))),e.infoData_=new mt,e.infoSyncTree_=new En({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=xn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Ei(e,"connected",!1),e.serverSyncTree_=new En({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);mi(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function bi(e){const t=e.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ii(e){return(t=(t={timestamp:bi(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function ki(e,t,n,i,s){e.dataUpdateCount++;const r=new _e(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=(0,o.map)(n,(e=>ot(e)));a=function(e,t,n,i){const s=Ln(e,i);if(s){const i=qn(s),r=i.path,o=i.queryId,a=be(r,t),l=Lt.fromObject(n);return Wn(e,r,new Nt(kt(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=ot(n);a=Dn(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,o.map)(n,(e=>ot(e)));a=function(e,t,n){const i=Lt.fromObject(n);return On(e,new Nt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=ot(n);a=xn(e.serverSyncTree_,r,t)}let l=r;a.length>0&&(l=Ai(e,r)),mi(e.eventQueue_,l,a)}function Si(e,t){Ei(e,"connected",t),!1===t&&function(e){xi(e,"onDisconnectEvents");const t=Ii(e),n=yt();Ct(e.onDisconnect_,pe(),((i,s)=>{const r=Bn(i,s,e.serverSyncTree_,t);vt(n,i,r)}));let i=[];Ct(n,pe(),((t,n)=>{i=i.concat(xn(e.serverSyncTree_,t,n));const s=Ui(e,t);Ai(e,s)})),e.onDisconnect_=yt(),mi(e.eventQueue_,pe(),i)}(e)}function Ei(e,t,n){const i=new _e("/.info/"+t),s=ot(n);e.infoData_.updateSnapshot(i,s);const r=xn(e.infoSyncTree_,i,s);mi(e.eventQueue_,i,r)}function Ni(e){return e.nextWriteId_++}function Ri(e,t,n,i,s){xi(e,"set",{path:t.toString(),value:n,priority:i});const r=Ii(e),o=ot(n,i),a=Mn(e.serverSyncTree_,t),l=Kn(o,a,r),h=Ni(e),c=Nn(e.serverSyncTree_,t,l,h,!0);gi(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||N("set at "+t+" failed: "+n);const o=Pn(e.serverSyncTree_,h,!r);mi(e.eventQueue_,t,o),Di(e,s,n,i)}));const u=Ui(e,t);Ai(e,u),mi(e.eventQueue_,u,[])}function Pi(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ci)}function xi(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function Di(e,t,n,i){t&&j((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function Mi(e,t,n){return Mn(e.serverSyncTree_,t,n)||st.EMPTY_NODE}function Oi(e,t=e.transactionQueueTree_){if(t||Wi(e,t),Qn(t)){const n=Li(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Mi(e,t,i);let r=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,o.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=be(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const l=r.val(!0),h=t;e.server_.put(h.toString(),l,(i=>{xi(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Pn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Wi(e,$n(e.transactionQueueTree_,t)),Oi(e,e.transactionQueueTree_),mi(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)j(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{N("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ai(e,t)}}),a)}(e,ti(t),n)}else Jn(t)&&Zn(t,(t=>{Oi(e,t)}))}function Ai(e,t){const n=Fi(e,t),i=ti(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const h=t[l],c=be(n,h.path);let u,d=!1;if((0,o.assert)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===h.status)d=!0,u=h.abortReason,s=s.concat(Pn(e.serverSyncTree_,h.currentWriteId,!0));else if(0===h.status)if(h.retryCount>=25)d=!0,u="maxretry",s=s.concat(Pn(e.serverSyncTree_,h.currentWriteId,!0));else{const n=Mi(e,h.path,r);h.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){ci("transaction failed: Data returned ",i,h.path);let t=ot(i);"object"==typeof i&&null!=i&&(0,o.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=h.currentWriteId,l=Ii(e),c=Kn(t,n,l);h.currentOutputSnapshotRaw=t,h.currentOutputSnapshotResolved=c,h.currentWriteId=Ni(e),r.splice(r.indexOf(a),1),s=s.concat(Nn(e.serverSyncTree_,h.path,c,h.currentWriteId,h.applyLocally)),s=s.concat(Pn(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",s=s.concat(Pn(e.serverSyncTree_,h.currentWriteId,!0))}mi(e.eventQueue_,n,s),s=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}var a;Wi(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)j(i[e]);Oi(e,e.transactionQueueTree_)}(e,Li(e,n),i),i}function Fi(e,t){let n,i=e.transactionQueueTree_;for(n=fe(t);null!==n&&void 0===Qn(i);)i=$n(i,n),n=fe(t=me(t));return i}function Li(e,t){const n=[];return qi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function qi(e,t,n){const i=Qn(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Zn(t,(t=>{qi(e,t,n)}))}function Wi(e,t){const n=Qn(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Xn(t,n.length>0?n:void 0)}Zn(t,(t=>{Wi(e,t)}))}function Ui(e,t){const n=ti(Fi(e,t)),i=$n(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{ji(e,t)})),ji(e,i),ei(i,(t=>{ji(e,t)})),n}function ji(e,t){const n=Qn(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Pn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Xn(t,void 0):n.length=r+1,mi(e.eventQueue_,ti(t),s);for(let e=0;e<i.length;e++)j(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=function(e,t){const n=zi(e),i=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Q(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new _e(n.pathString)}},zi=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):N(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;const _=t.slice(0,h);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},Vi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Te(this._path)?null:ye(this._path)}get ref(){return new Ki(this._repo,this._path)}get _queryIdentifier(){const e=ft(this._queryParams),t=A(e);return"{}"===t?"default":t}get _queryObject(){return ft(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof Bi))return!1;const t=this._repo===e._repo,n=ke(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ki extends Bi{constructor(e,t){super(e,t,new _t,!1)}get parent(){const e=Ce(this._path);return null===e?null:new Ki(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}function Yi(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Gi(e._root,t):e._root}function Gi(e,t){var n,i,s,r;return null===fe((e=(0,o.getModularInstance)(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),di(n,i,s,r)):di("child","path",t,!1),new Ki(e._repo,we(e._path,t))}function $i(e,t){e=(0,o.getModularInstance)(e),_i("set",e._path),hi("set",t,e._path,!1);const n=new(0,o.Deferred);return Ri(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Qi(e,t){ui("update",t,e._path,!1);const n=new(0,o.Deferred);return function(e,t,n,i){xi(e,"update",{path:t.toString(),value:n});let s=!0;const r=Ii(e),o={};if(L(n,((n,i)=>{s=!1,o[n]=Bn(we(t,n),ot(i),e.serverSyncTree_,r)})),s)I("update() called with empty data.  Don't do anything."),Di(0,i,"ok",void 0);else{const s=Ni(e),r=Rn(e.serverSyncTree_,t,o,s);gi(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||N("update at "+t+" failed: "+n);const a=Pn(e.serverSyncTree_,s,!o),l=a.length>0?Ai(e,t):t;mi(e.eventQueue_,l,a),Di(0,i,n,r)})),L(n,(n=>{const i=Ui(e,we(t,n));Ai(e,i)})),mi(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){(0,o.assert)(!bn,"__referenceConstructor has already been defined"),bn=e}(Ki),function(e){(0,o.assert)(!In,"__referenceConstructor has already been defined"),In=e}(Ki);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xi={};let Ji=!1;function Zi(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=Hi(r,s),c=h.repoInfo;void 0!==l&&l.env&&(a=l.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,h=Hi(r,s),c=h.repoInfo):o=!h.repoInfo.secure;const u=s&&o?new B(B.OWNER):new V(e.name,e.options,t);pi("Invalid Firebase Database URL",h),Te(h.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Xi[t.name];s||(s={},Xi[t.name]=s);let r=s[e.toURLString()];r&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new wi(e,Ji,n,i),s[e.toURLString()]=r,r}(c,e,u,new z(e.name,n));return new es(d,e)}class es{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ti(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ki(this._repo,pe())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Xi[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Pi(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function ts(e=(0,i.getApp)(),t){const n=(0,i._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,i={}){(e=(0,o.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&E("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&E('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new B(B.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:(0,o.createMockUserToken)(i.mockUserToken,e.app.options.projectId);r=new B(t)}!function(e,t,n,i){e.repoInfo_=new Q(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}De.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},De.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns,is;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is=i.SDK_VERSION,u=is,(0,i._registerComponent)(new(0,r.Component)("database",((e,{instanceIdentifier:t})=>Zi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(h,c,ns),(0,i.registerVersion)(h,c,"esm2017")}));
//# sourceMappingURL=sign-up.0149a89f.js.map
