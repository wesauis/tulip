(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5024:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9450)}])},1655:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),u.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u({},r,e));var o,l;var s=r=u({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=u({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(n,r);delete r.ssr}return n(r)};o(n(9496));var i=o(n(9799));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}},1142:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(9496))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},9799:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(9496))&&o.__esModule?o:{default:o},l=n(6413),s=n(1142);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,u;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),u&&r(t,u),e}();function y(e){return function(e,t){var n=function(){if(!u){var t=new h(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=a.default.lazy(r.loader));var u=null;if(!d&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&f.push((function(e){var t=!0,r=!1,u=void 0;try{for(var i,a=o[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,u=s}finally{try{t||null==a.return||a.return()}finally{if(r)throw u}}}))}var c=r.suspense?function(e,t){return a.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=a.default.useContext(s.LoadableContext),o=l.useSubscription(u);return a.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),a.default.useMemo((function(){return o.loading||o.error?a.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:u.retry}):o.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",a.default.forwardRef(c)}(p,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};b(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var v=y;t.default=v},9450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(6058),u=n.n(r),i=n(4637),o=n(809),a=n(9496),l=n(7595),s=function(e){var t=e.children,n=e.title;return n=n?"Tulip | ".concat(n):"Tulip",(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{children:(0,i.jsx)("title",{children:n})}),t]})},c="0.9.1",f=n(9229),d=n.n(f);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,u,i,o){try{var a=e[i](o),l=a.value}catch(s){return void n(s)}a.done?t(l):Promise.resolve(l).then(r,u)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){h(i,r,u,o,a,"next",e)}function a(e){h(i,r,u,o,a,"throw",e)}o(void 0)}))}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(l){a=!0,u=l}finally{try{o||null==n.return||n.return()}finally{if(a)throw u}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=(0,o.default)((function(){return Promise.all([n.e(182),n.e(206),n.e(670)]).then(n.bind(n,3670)).then((function(e){return e.default}))}),{loadableGenerated:{webpack:function(){return[3670]}},ssr:!1}),m=function(){var e=(0,a.useRef)(null),t=(0,a.useState)(null),n=t[0],r=t[1];function o(){return(o=y(u().mark((function t(){var n,i,o,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,window.showOpenFilePicker({id:"open",types:[{description:"Tulip File",accept:{"tulip/json":[".tulip"]}}],excludeAcceptAllOption:!0,multiple:!1});case 3:return t.t1=t.sent,n=(0,t.t0)(t.t1,1),i=n[0],t.next=8,i.getFile();case 8:return o=t.sent,t.next=11,o.text();case 11:(a=t.sent).length?e.current=JSON.parse(a):e.current={time:Date.now(),blocks:[]},r(i);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=y(u().mark((function t(){var r,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createWritable();case 2:return r=t.sent,i=JSON.stringify(e.current),t.next=6,r.write(i);case 6:return t.next=8,r.close();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(null==n)return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:d().home,children:[(0,i.jsxs)("section",{className:d().info,children:[(0,i.jsx)("div",{className:d().logo,children:"\ud83c\udf37"}),(0,i.jsx)("h2",{children:"Tulip"}),(0,i.jsx)("p",{children:c})]}),(0,i.jsx)("section",{className:d().picker,children:(0,i.jsx)("button",{onClick:function(){return o.apply(this,arguments)},children:"Open"})})]})});var f=n.name.substring(0,n.name.lastIndexOf("."));return(0,i.jsx)(s,{title:f,children:(0,i.jsx)(v,{data:e.current,onChange:function(t){e.current=t,function(){l.apply(this,arguments)}()}})})}},9229:function(e){e.exports={home:"Home_home__V_V4i",info:"Home_info__dvX16",logo:"Home_logo__27_tb",picker:"Home_picker__ZZU1y"}},809:function(e,t,n){e.exports=n(1655)},7595:function(e,t,n){e.exports=n(8532)},7641:function(e,t,n){"use strict";var r=n(6906),u=n(9496);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=u.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),o({getCurrentValue:t,subscribe:n,value:i})),u.useDebugValue(i),u.useEffect((function(){function e(){if(!u){var e=t();o((function(u){return u.getCurrentValue!==t||u.subscribe!==n||u.value===e?u:r({},u,{value:e})}))}}var u=!1,i=n(e);return e(),function(){u=!0,i()}}),[t,n]),i}},6413:function(e,t,n){"use strict";e.exports=n(7641)}},function(e){e.O(0,[774,888,179],(function(){return t=5024,e(e.s=t);var t}));var t=e.O();_N_E=t}]);