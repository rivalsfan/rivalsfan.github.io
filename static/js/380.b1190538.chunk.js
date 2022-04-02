!function(){"use strict";var t={4380:function(t,n,e){var i=e(5861),r=e(5671),a=e(3144),o=e(136),u=e(9388),s=e(7757),c=e.n(s),h=e(9062);function f(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iid";return t.map((function(t,e){return t[n]=e,t}))}function d(t,n){n=Math.min(t-n,n);for(var e=1,i=1;i<=n;i++)e*=t-n+i,e/=i;return e}var l=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random;(0,r.Z)(this,t),this.k=void 0,this.randFn=void 0,this.r=void 0,this.i=void 0,this.finished=void 0,this.k=n,this.randFn=e,this.r=[],this.i=0,this.finished=!1}return(0,a.Z)(t,[{key:"next",value:function(t){if(this.finished&&console.log("warning: call next after finalSample"),"undefined"!==typeof t){if(this.r.length<this.k)this.r.push(t);else{var n=Math.floor(this.randFn()*(this.i+1));n<this.k&&(this.r[n]=t)}this.i+=1}}},{key:"sample",value:function(){return this.r}},{key:"finalSample",value:function(){return function(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),i=[t[e],t[n]];t[n]=i[0],t[e]=i[1]}}(this.r),this.finished=!0,this.r}}]),t}();var v=function(){function t(n){(0,r.Z)(this,t),this.data=void 0,this.data=n.toString()}return(0,a.Z)(t,[{key:"deserialize",value:function(){return Function("'use strict'; return (".concat(this.data,")"))()}}],[{key:"deserialize",value:function(t){return Function("'use strict'; return (".concat(t.data,")"))()}}]),t}(),m=function(){function t(n,e,i){(0,r.Z)(this,t),this.faction=void 0,this.commander=void 0,this.units=void 0,this.faction=n,this.commander=e,this.units=i}return(0,a.Z)(t,[{key:"hasCommander",value:function(t){return this.commander.name===t}},{key:"containsUnitsByName",value:function(t){var n=this;return t.every((function(t){return n.units.map((function(t){return t.name})).includes(t)}))}},{key:"containsUnitByName",value:function(t){return this.containsUnitsByName([t])}},{key:"allUnitsThat",value:function(t){return this.units.every(t)}},{key:"someUnitsThat",value:function(t){return this.units.some(t)}},{key:"nUnitsThat",value:function(t,n){return this.units.filter(n).length===t}},{key:"rangeUnitsThat",value:function(t,n){var e=this.units.filter(n).length;return e>=t[0]&&e<=t[1]}},{key:"atLeastNUnitsThat",value:function(t,n){return this.rangeUnitsThat([t,6],n)}},{key:"atMostNUnitsThat",value:function(t,n){return this.rangeUnitsThat([0,t],n)}},{key:"totalUnitsCost",value:function(t){return this.units.reduce((function(t,n){return t+=n.cost}),0)}}]),t}(),g=function(){function t(n){(0,r.Z)(this,t),this.request=void 0,this.validateFn=void 0,this.sampler=void 0,this.count=void 0,this.request=n,this.validateFn=v.deserialize(n.validateFn)(),this.sampler=new l(n.numDecks),this.count=0}return(0,a.Z)(t,[{key:"finalize",value:function(){return new p(this.request,this.sampler.finalSample(),this.count)}},{key:"finalizeWithError",value:function(t){return new p(this.request,[],-1,t)}}]),t}(),p=(0,a.Z)((function t(n,e,i,a){(0,r.Z)(this,t),this.request=void 0,this.result=void 0,this.count=void 0,this.error=void 0,this.request=n,this.result=e,this.count=i,this.error=a})),y={Infantry:0,Vehicle:1,Air:2,Tech:3,Commander:4},k=function(t,n){return y[t.building]!==y[n.building]?y[t.building]-y[n.building]:t.cost!==n.cost?t.cost-n.cost:t.name>n.name?1:-1},w=["Seth","Kane","Jade","Oxanna"],D=["Lt. Strongarm","Dr. Liang","Cdr. McNeil","Gen. Solomon","Col. Jackson"],b=function(t,n){if("Commander"!==t.building||"Commander"!==n.building||t.faction!==n.faction)throw console.log(t),console.log(n),new Error("Invalid comparison");var e="GDI"===t.faction?D:w,i=e.findIndex((function(n){return n===t.name})),r=e.findIndex((function(t){return t===n.name}));if(-1===i||-1===r)throw new Error("Commander ".concat(t.name," or ").concat(n.name," not found"));return i-r},E=function(){function t(n,e){(0,r.Z)(this,t),this.units=void 0,this.commanders=void 0,this.size=void 0,this.unitsReverseMap=void 0,this.commandersReverseMap=void 0,this.units=f(n.sort(k)),this.commanders=f(e.sort(b)),this.size=d(n.length,6)*e.length;var i=new Map;n.forEach((function(t,n){return i.set(t.name,n)})),this.unitsReverseMap=i,i=new Map,e.forEach((function(t,n){return i.set(t.name,n)})),this.commandersReverseMap=i}return(0,a.Z)(t,[{key:"get",value:function(t){var n=this;if(t<0||t>=this.size)throw new Error("index out of bound: ".concat(t," is not in range [0, ").concat(this.size,")"));var e=Math.floor(t/this.commanders.length),i=t%this.commanders.length,r=function(t,n,e){for(var i=[],r=0;r<t+1;r++){var a=d(t-r-1,n-1);if(e<a){if(i.push(r),(n-=1)<=0)break}else e-=a}return i}(this.units.length,6,e).map((function(t){return n.units[t]})),a=this.commanders[i];return new m(a.faction,a,r)}},{key:"getIndex",value:function(t){var n=this,e=t.units.map((function(t){return n.unitsReverseMap.get(t.name)})).filter((function(t){return void 0!==typeof t})),i=this.commandersReverseMap.get(t.commander.name);if(6!==e.length||void 0===i)throw new Error("invalid deck or not part of this database");return function(t,n){var e=t.length;n-=1;for(var i=0,r=0,a=0;a<e;a++){for(var o=a+1,u=t[a];r<u;)i+=d(n-r,e-o),r+=1;r+=1}return i}(e,this.units.length)*this.commanders.length+i}}]),t}(),I=function(){function t(n){(0,r.Z)(this,t),this.units=void 0,this.commanders=void 0,this.size=void 0,this.dbs=void 0,this.dbs=n;var e=n.reduce((function(t,n){return t+=n.size}),0);this.size=e;var i=[];i.concat.apply(i,(0,h.Z)(this.dbs.map((function(t){return t.units})))),this.units=i;var a=[];a.concat.apply(a,(0,h.Z)(this.dbs.map((function(t){return t.commanders})))),this.commanders=a}return(0,a.Z)(t,[{key:"get",value:function(t){if(t<0||t>=this.size)throw new Error("index out of bound");for(var n=0;t>=this.dbs[n].size;)t-=this.dbs[n].size,n+=1;return this.dbs[n].get(t)}},{key:"getIndex",value:function(t){throw new Error("operation not supported")}}]),t}(),C=function(){function t(){(0,r.Z)(this,t)}return(0,a.Z)(t,[{key:"generateCustom",value:function(t,n,e){if(t.length>0){for(var i=t.map((function(t){return new g(t)})),r=1,a=function(t){var a=n.get(t);try{i.forEach((function(t){t.validateFn(a)&&(t.sampler.next(a),t.count+=1)}))}catch(o){return{v:i.map((function(t){return t.finalizeWithError("Error in ".concat(t.request.name,": ").concat(o))}))}}t/n.size*100>=r&&(void 0!==e&&e(r),r+=1)},o=0;o<n.size;o++){var u=a(o);if("object"===typeof u)return u.v}return void 0!==e&&e(100),i.map((function(t){return t.finalize()}))}return[]}},{key:"generate",value:function(t){throw console.log("cannot call generate() on abstractDeckGenerator"),new Error("cannot call generate() on abstractDeckGenerator")}}]),t}(),S=e(3324),Z=["name","squadSize","unitType","cost","building","speed","faction","rarity","antiInfantry","antiVehicle","antiAir"],x=function(){function t(n){(0,r.Z)(this,t),this.name=void 0,this.faction=void 0,this.building=void 0,this.cost=void 0,this.unitType=void 0,this.rarity=void 0,this.speed=void 0,this.squadSize=void 0,this.antiInfantry=void 0,this.antiVehicle=void 0,this.antiAir=void 0,this.name=n.name,this.faction=n.faction,this.building=n.building,this.cost=n.cost,this.unitType=n.unitType,this.rarity=n.rarity,this.speed=n.speed,this.squadSize=n.squadSize,this.antiInfantry=n.antiInfantry,this.antiVehicle=n.antiVehicle,this.antiAir=n.antiAir;for(var e=0,i=Object.entries(n);e<i.length;e++){var a=(0,S.Z)(i[e],2),o=a[0],u=a[1];Z.includes(o)||(this[o]=u)}}return(0,a.Z)(t,[{key:"isInfantry",value:function(){return"Infantry"===this.unitType}},{key:"isVehicle",value:function(){return"Vehicle"===this.unitType}},{key:"isAir",value:function(){return"Air"===this.unitType}},{key:"isTech",value:function(){return"Tech"===this.building}},{key:"canAttackInfantry",value:function(){return this.antiInfantry>=0}},{key:"canAttackVehicle",value:function(){return this.antiVehicle>=0}},{key:"canAttackAir",value:function(){return this.antiAir>=0}},{key:"strongAgainstInfantry",value:function(){return this.antiInfantry>=1}},{key:"strongAgainstVehicle",value:function(){return this.antiVehicle>=1}},{key:"strongAgainstAir",value:function(){return this.antiAir>=1}},{key:"isSquad",value:function(){return this.squadSize>1}}]),t}(),z=function(t){(0,o.Z)(e,t);var n=(0,u.Z)(e);function e(t,i,a,o){var u;return(0,r.Z)(this,e),(u=n.call(this)).GDI_DECKS=void 0,u.NOD_DECKS=void 0,u.ALL_DECKS=void 0,u.GDI_DECKS=new E(t.map((function(t){return new x(t)})),i.map((function(t){return new x(t)}))),u.NOD_DECKS=new E(a.map((function(t){return new x(t)})),o.map((function(t){return new x(t)}))),u.ALL_DECKS=new I([u.GDI_DECKS,u.NOD_DECKS]),u}return(0,a.Z)(e,[{key:"generate2",value:function(){var t=(0,i.Z)(c().mark((function t(n,e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e){t.next=3;break}return t.next=3,e(0);case 3:return t.abrupt("return",this.generate(n,e));case 4:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"generate",value:function(t,n){var e=new Map;t.forEach((function(t,n){e.set(t,n)}));var i=t.filter((function(t){return"GDI"===t.faction})),r=t.filter((function(t){return"Nod"===t.faction})),a=t.filter((function(t){return"random"===t.faction})),o=this.generateCustom(i,this.GDI_DECKS,n),u=this.generateCustom(r,this.NOD_DECKS,n),s=this.generateCustom(a,this.ALL_DECKS,n),c=[];return o.forEach((function(t){c[e.get(t.request)]=t})),u.forEach((function(t){c[e.get(t.request)]=t})),s.forEach((function(t){c[e.get(t.request)]=t})),c}},{key:"generateAsync",value:function(t,n,e){n(this.generate(t,e))}},{key:"cancel",value:function(){throw new Error("cannot cancel")}},{key:"getDeckId",value:function(t){var n="GDI"===t.faction?"gdi":"nod",e="GDI"===t.faction?this.GDI_DECKS.getIndex(t):this.NOD_DECKS.getIndex(t);return"".concat(n,"-").concat(e)}},{key:"getDeck",value:function(t){var n=/^(gdi|nod)-([0-9]+)$/i.exec(t);if(null===n)throw new Error("invalid deckID");var e=n[1],i=parseInt(n[2]);return"gdi"===e?this.GDI_DECKS.get(i):this.NOD_DECKS.get(i)}}]),e}(C);e(1555).Jj(z)}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={exports:{}};return t[i](a,a.exports,e),a.exports}e.m=t,e.x=function(){var t=e.O(void 0,[4],(function(){return e(4380)}));return t=e.O(t)},function(){var t=[];e.O=function(n,i,r,a){if(!i){var o=1/0;for(h=0;h<t.length;h++){i=t[h][0],r=t[h][1],a=t[h][2];for(var u=!0,s=0;s<i.length;s++)(!1&a||o>=a)&&Object.keys(e.O).every((function(t){return e.O[t](i[s])}))?i.splice(s--,1):(u=!1,a<o&&(o=a));if(u){t.splice(h--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[i,r,a]}}(),e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,i){return e.f[i](t,n),n}),[]))},e.u=function(t){return"static/js/"+t+".a58f482c.chunk.js"},e.miniCssF=function(t){},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",function(){var t={380:1};e.f.i=function(n,i){t[n]||importScripts(e.p+e.u(n))};var n=self.webpackChunkrivals_deck_generator=self.webpackChunkrivals_deck_generator||[],i=n.push.bind(n);n.push=function(n){var r=n[0],a=n[1],o=n[2];for(var u in a)e.o(a,u)&&(e.m[u]=a[u]);for(o&&o(e);r.length;)t[r.pop()]=1;i(n)}}(),function(){var t=e.x;e.x=function(){return e.e(4).then(t)}}();e.x()}();
//# sourceMappingURL=380.b1190538.chunk.js.map