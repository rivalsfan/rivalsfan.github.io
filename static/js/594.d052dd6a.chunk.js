(self.webpackChunkrivals_deck_generator=self.webpackChunkrivals_deck_generator||[]).push([[594],{7757:function(t,r,n){t.exports=n(8937)},8937:function(t){var r=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(A){c=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),u=new P(e||[]);return i._invoke=function(t,r,n){var e=l;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===y){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=O(u,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===l)throw e=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=p;var c=s(t,r,n);if("normal"===c.type){if(e=n.done?y:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=y,n.method="throw",n.arg=c.arg)}}}(t,n,u),i}function s(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=f;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function m(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==n&&e.call(E,i)&&(b=E);var Z=g.prototype=d.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function n(o,i,u,a){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"===typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,O(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return u.next=u}}return{next:k}}function k(){return{value:r,done:!0}}return m.prototype=g,c(Z,"constructor",g),c(g,"constructor",m),m.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(Z),t},t.awrap=function(t){return{__await:t}},L(S.prototype),c(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var u=new S(f(r,n,e,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},L(Z),c(Z,a,"Generator"),c(Z,i,(function(){return this})),c(Z,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return a.type="throw",a.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=e.call(u,"catchLoc"),f=e.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},907:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}n.d(r,{Z:function(){return e}})},3878:function(t,r,n){"use strict";function e(t){if(Array.isArray(t))return t}n.d(r,{Z:function(){return e}})},5057:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(907);function o(t){if(Array.isArray(t))return(0,e.Z)(t)}},7326:function(t,r,n){"use strict";function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(r,{Z:function(){return e}})},5861:function(t,r,n){"use strict";function e(t,r,n,e,o,i,u){try{var a=t[i](u),c=a.value}catch(f){return void n(f)}a.done?r(c):Promise.resolve(c).then(e,o)}function o(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var u=t.apply(r,n);function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}a(void 0)}))}}n.d(r,{Z:function(){return o}})},5671:function(t,r,n){"use strict";function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}n.d(r,{Z:function(){return e}})},5647:function(t,r,n){"use strict";n.d(r,{Z:function(){return i}});var e=n(9611),o=n(8814);function i(t,r,n){return i=(0,o.Z)()?Reflect.construct:function(t,r,n){var o=[null];o.push.apply(o,r);var i=new(Function.bind.apply(t,o));return n&&(0,e.Z)(i,n.prototype),i},i.apply(null,arguments)}},3144:function(t,r,n){"use strict";function e(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(r,{Z:function(){return o}})},7762:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(181);function o(t,r){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,e.Z)(t))||r&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}},9388:function(t,r,n){"use strict";n.d(r,{Z:function(){return u}});var e=n(1120),o=n(8814),i=n(2963);function u(t){var r=(0,o.Z)();return function(){var n,o=(0,e.Z)(t);if(r){var u=(0,e.Z)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,i.Z)(this,n)}}},4942:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}n.d(r,{Z:function(){return e}})},1120:function(t,r,n){"use strict";function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}n.d(r,{Z:function(){return e}})},136:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(9611);function o(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&(0,e.Z)(t,r)}},8814:function(t,r,n){"use strict";function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(r,{Z:function(){return e}})},9199:function(t,r,n){"use strict";function e(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n.d(r,{Z:function(){return e}})},1902:function(t,r,n){"use strict";function e(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}n.d(r,{Z:function(){return e}})},5267:function(t,r,n){"use strict";function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(r,{Z:function(){return e}})},2786:function(t,r,n){"use strict";function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(r,{Z:function(){return e}})},2963:function(t,r,n){"use strict";n.d(r,{Z:function(){return i}});var e=n(1002),o=n(7326);function i(t,r){if(r&&("object"===(0,e.Z)(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}},9611:function(t,r,n){"use strict";function e(t,r){return e=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},e(t,r)}n.d(r,{Z:function(){return e}})},3324:function(t,r,n){"use strict";n.d(r,{Z:function(){return a}});var e=n(3878),o=n(1902),i=n(181),u=n(5267);function a(t,r){return(0,e.Z)(t)||(0,o.Z)(t,r)||(0,i.Z)(t,r)||(0,u.Z)()}},9062:function(t,r,n){"use strict";n.d(r,{Z:function(){return a}});var e=n(5057),o=n(9199),i=n(181),u=n(2786);function a(t){return(0,e.Z)(t)||(0,o.Z)(t)||(0,i.Z)(t)||(0,u.Z)()}},1002:function(t,r,n){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}n.d(r,{Z:function(){return e}})},181:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(907);function o(t,r){if(t){if("string"===typeof t)return(0,e.Z)(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,e.Z)(t,r):void 0}}},8784:function(t,r,n){"use strict";n.d(r,{Jj:function(){return y}});var e=n(7762),o=n(3324),i=n(4942),u=n(5647),a=n(9062),c=Symbol("Comlink.proxy"),f=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),l=Symbol("Comlink.thrown"),h=function(t){return"object"===typeof t&&null!==t||"function"===typeof t},p=new Map([["proxy",{canHandle:function(t){return h(t)&&t[c]},serialize:function(t){var r=new MessageChannel,n=r.port1,e=r.port2;return y(t,n),[e,[e]]},deserialize:function(t){return t.start(),m(t,[],r);var r}}],["throw",{canHandle:function(t){return h(t)&&l in t},serialize:function(t){var r=t.value;return[r instanceof Error?{isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:{isError:!1,value:r},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function y(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;r.addEventListener("message",(function n(e){if(e&&e.data){var c,f=Object.assign({path:[]},e.data),s=f.id,h=f.type,p=f.path,d=(e.data.argumentList||[]).map(L);try{var m=p.slice(0,-1).reduce((function(t,r){return t[r]}),t),g=p.reduce((function(t,r){return t[r]}),t);switch(h){case"GET":c=g;break;case"SET":m[p.slice(-1)[0]]=L(e.data.value),c=!0;break;case"APPLY":c=g.apply(m,d);break;case"CONSTRUCT":var b;c=E((0,u.Z)(g,(0,a.Z)(d)));break;case"ENDPOINT":var S=new MessageChannel,O=S.port1,j=S.port2;y(t,j),c=w(O,[O]);break;case"RELEASE":c=void 0;break;default:return}}catch(b){c=(0,i.Z)({value:b},l,0)}Promise.resolve(c).catch((function(t){return(0,i.Z)({value:t},l,0)})).then((function(t){var e=Z(t),i=(0,o.Z)(e,2),u=i[0],a=i[1];r.postMessage(Object.assign(Object.assign({},u),{id:s}),a),"RELEASE"===h&&(r.removeEventListener("message",n),v(r))}))}})),r.start&&r.start()}function v(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function d(t){if(t)throw new Error("Proxy has been released and is not useable")}function m(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=!1,i=new Proxy(n,{get:function(n,o){if(d(e),o===s)return function(){return S(t,{type:"RELEASE",path:r.map((function(t){return t.toString()}))}).then((function(){v(t),e=!0}))};if("then"===o){if(0===r.length)return{then:function(){return i}};var u=S(t,{type:"GET",path:r.map((function(t){return t.toString()}))}).then(L);return u.then.bind(u)}return m(t,[].concat((0,a.Z)(r),[o]))},set:function(n,i,u){d(e);var c=Z(u),f=(0,o.Z)(c,2),s=f[0],l=f[1];return S(t,{type:"SET",path:[].concat((0,a.Z)(r),[i]).map((function(t){return t.toString()})),value:s},l).then(L)},apply:function(n,i,u){d(e);var a=r[r.length-1];if(a===f)return S(t,{type:"ENDPOINT"}).then(L);if("bind"===a)return m(t,r.slice(0,-1));var c=g(u),s=(0,o.Z)(c,2),l=s[0],h=s[1];return S(t,{type:"APPLY",path:r.map((function(t){return t.toString()})),argumentList:l},h).then(L)},construct:function(n,i){d(e);var u=g(i),a=(0,o.Z)(u,2),c=a[0],f=a[1];return S(t,{type:"CONSTRUCT",path:r.map((function(t){return t.toString()})),argumentList:c},f).then(L)}});return i}function g(t){var r,n=t.map(Z);return[n.map((function(t){return t[0]})),(r=n.map((function(t){return t[1]})),Array.prototype.concat.apply([],r))]}var b=new WeakMap;function w(t,r){return b.set(t,r),t}function E(t){return Object.assign(t,(0,i.Z)({},c,!0))}function Z(t){var r,n=(0,e.Z)(p);try{for(n.s();!(r=n.n()).done;){var i=(0,o.Z)(r.value,2),u=i[0],a=i[1];if(a.canHandle(t)){var c=a.serialize(t),f=(0,o.Z)(c,2);return[{type:"HANDLER",name:u,value:f[0]},f[1]]}}}catch(s){n.e(s)}finally{n.f()}return[{type:"RAW",value:t},b.get(t)||[]]}function L(t){switch(t.type){case"HANDLER":return p.get(t.name).deserialize(t.value);case"RAW":return t.value}}function S(t,r,n){return new Promise((function(e){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function r(n){n.data&&n.data.id&&n.data.id===o&&(t.removeEventListener("message",r),e(n.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},r),n)}))}}}]);