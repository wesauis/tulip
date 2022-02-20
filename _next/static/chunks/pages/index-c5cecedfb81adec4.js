(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5024:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4491)}])},1655:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),u.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u({},r,e));var a,l;var s=r=u({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=u({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};a(n(9496));var o=a(n(9799));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},1142:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(9496))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},9799:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(9496))&&a.__esModule?a:{default:a},l=n(6413),s=n(1142);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,u;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),u&&r(t,u),e}();function y(e){return function(e,t){var n=function(){if(!u){var t=new h(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=i.default.lazy(r.loader));var u=null;if(!d&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&f.push((function(e){var t=!0,r=!1,u=void 0;try{for(var o,i=a[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,u=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw u}}}))}var c=r.suspense?function(e,t){return i.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=i.default.useContext(s.LoadableContext),a=l.useSubscription(u);return i.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),i.default.useMemo((function(){return a.loading||a.error?i.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:u.retry}):a.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(p,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};b(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var v=y;t.default=v},4491:function(e,t,n){"use strict";n.r(t);var r=n(6058),u=n.n(r),o=n(4637),a=n(809),i=n(9229),l=n.n(i),s=n(9496);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,u,o,a){try{var i=e[o](a),l=i.value}catch(s){return void n(s)}i.done?t(l):Promise.resolve(l).then(r,u)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function a(e){f(o,r,u,a,i,"next",e)}function i(e){f(o,r,u,a,i,"throw",e)}a(void 0)}))}}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){i=!0,u=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw u}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=(0,a.default)((function(){return Promise.all([n.e(182),n.e(206),n.e(670)]).then(n.bind(n,3670)).then((function(e){return e.default}))}),{loadableGenerated:{webpack:function(){return[3670]}},ssr:!1});Date.now();t.default=function(){var e=(0,s.useRef)(null),t=(0,s.useState)(null),n=t[0],r=t[1];function a(){return(a=d(u().mark((function t(){var n,o,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,window.showOpenFilePicker({id:"open",types:[{description:"Tulip File",accept:{"tulip/json":[".tulip"]}}],excludeAcceptAllOption:!0,multiple:!1});case 3:return t.t1=t.sent,n=(0,t.t0)(t.t1,1),o=n[0],t.next=8,o.getFile();case 8:return a=t.sent,t.next=11,a.text();case 11:(i=t.sent).length?e.current=JSON.parse(i):e.current={time:Date.now(),blocks:[]},r(o);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=d(u().mark((function t(){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createWritable();case 2:return r=t.sent,o=JSON.stringify(e.current),t.next=6,r.write(o);case 6:return t.next=8,r.close();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return null==n?(0,o.jsxs)("div",{className:l().home,children:[(0,o.jsxs)("section",{className:l().info,children:[(0,o.jsx)("div",{className:l().logo,children:"\ud83c\udf37"}),(0,o.jsx)("h2",{children:"Tulip"}),(0,o.jsx)("p",{children:"v0.0.1"})]}),(0,o.jsx)("section",{className:l().picker,children:(0,o.jsx)("button",{onClick:function(){return a.apply(this,arguments)},children:"Open"})})]}):(0,o.jsx)(h,{data:e.current,onChange:function(t){e.current=t,function(){i.apply(this,arguments)}()}})}},9229:function(e){e.exports={home:"Home_home__V_V4i",info:"Home_info__dvX16",logo:"Home_logo__27_tb",picker:"Home_picker__ZZU1y"}},809:function(e,t,n){e.exports=n(1655)},7641:function(e,t,n){"use strict";var r=n(6906),u=n(9496);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,o=u.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=o[0];var a=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===n||(o=t(),a({getCurrentValue:t,subscribe:n,value:o})),u.useDebugValue(o),u.useEffect((function(){function e(){if(!u){var e=t();a((function(u){return u.getCurrentValue!==t||u.subscribe!==n||u.value===e?u:r({},u,{value:e})}))}}var u=!1,o=n(e);return e(),function(){u=!0,o()}}),[t,n]),o}},6413:function(e,t,n){"use strict";e.exports=n(7641)}},function(e){e.O(0,[774,888,179],(function(){return t=5024,e(e.s=t);var t}));var t=e.O();_N_E=t}]);