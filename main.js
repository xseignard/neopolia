!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([486,0]),n()}({177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"About"))}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Contact"))}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Company"))}},180:function(e,t,n){(e.exports=n(87)(!1)).push([e.i,"",""])},181:function(e,t,n){var r=n(180);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(86)(r,o);r.locals&&(e.exports=r.locals)},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var a,i,u="https://wp.pow.cool/wp-json/wp/v2/member";t.getAllMembers=(a=o(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(u),e.next=3,fetch(u);case 3:return t=e.sent,console.log(t),e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.map(function(e){return r({id:e.id},e.acf)}));case 9:case"end":return e.stop()}},e,void 0)})),function(){return a.apply(this,arguments)}),t.getMemberById=(i=o(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,e.abrupt("return",r({id:o.id},o.acf));case 7:case"end":return e.stop()}},e,void 0)})),function(e){return i.apply(this,arguments)})},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=(r=a)&&r.__esModule?r:{default:r},u=n(182);n(181);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllMembers)();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Companies"))}}]),t}();t.default=l},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var a,i,u="https://wp.pow.cool/wp-json/wp/v2/work";t.getAllWorks=(a=o(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(u),e.next=3,fetch(u);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.map(function(e){return r({id:e.id,title:e.title.rendered},e.acf)}));case 8:case"end":return e.stop()}},e,void 0)})),function(){return a.apply(this,arguments)}),t.getWorkById=(i=o(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,e.abrupt("return",r({id:o.id,title:o.title.rendered},o.acf));case 7:case"end":return e.stop()}},e,void 0)})),function(e){return i.apply(this,arguments)})},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=(r=a)&&r.__esModule?r:{default:r},u=n(184);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllWorks)();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Detail"))}}]),t}();t.default=l},186:function(e,t,n){(e.exports=n(87)(!1)).push([e.i,"",""])},187:function(e,t,n){var r=n(186);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(86)(r,o);r.locals&&(e.exports=r.locals)},188:function(e,t,n){e.exports=n.p+"4418dde3f6abc21dc32506acf5f5b093.jpg"},189:function(e,t,n){e.exports=n.p+"5fc6c2a3d4936b99eb762c9bc5046447.dae"},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(37));n(258);var o=i(n(257)),a=i(n(256));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var n=(0,a.default)({renderer:{alpha:!0,shadowMap:!1},camera:{fov:75,nearPlane:.1,farPlane:1e3,x:0,y:2,z:20},ambient:{color:16777215},axesHelper:!0},t),i=document.querySelector("#root"),u=new o.default;u.domElement.style.bottom="0px",u.domElement.style.top="",i.appendChild(u.domElement);var l=new r.WebGLRenderer({antialias:!0,alpha:n.renderer.alpha,canvas:e});l.setSize(window.innerWidth,window.innerHeight),l.domElement.style.position="absolute",l.domElement.style.top="0px",l.domElement.style.left="0px",n.renderer.shadowMap&&(l.shadowMap.enabled=!0,l.shadowMap.type=r.PCFShadowMap),i.appendChild(l.domElement);var c=new r.Scene,s=new r.PerspectiveCamera(n.camera.fov,window.innerWidth/window.innerHeight,n.camera.nearPlane,n.camera.farPlane);s.position.x=n.camera.x,s.position.y=n.camera.y,s.position.z=n.camera.z;var f=new r.OrbitControls(s,l.domElement),p=new r.AxesHelper(50);n.axesHelper&&c.add(p);var d=new r.AmbientLight(n.ambient.color);c.add(d);return addEventListener("resize",function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}),{stats:u,renderer:l,scene:c,camera:s,controls:f}}},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=s(o),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(37));n(262),n(261),n(260);n(119);var u=s(n(259)),l=s(n(189)),c=s(n(188));function s(e){return e&&e.__esModule?e:{default:e}}n(187);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this,t=(0,u.default)(this.canvas,{camera:{x:0,y:3,z:-6},axesHelper:!1}),n=t.stats,r=t.renderer,o=t.scene,a=t.camera;t.controls;this.renderer=r,this.stats=n;var s=new i.DirectionalLight(16777215,.2);o.add(s),(new i.ColladaLoader).load(l.default,function(e){e.scene.position.set(0,0,-30),o.add(e.scene)});var f=new i.PlaneBufferGeometry(1e4,1e4),p=new i.Water(f,{textureWidth:512,textureHeight:512,waterNormals:(new i.TextureLoader).load(c.default,function(e){e.wrapS=e.wrapT=i.RepeatWrapping}),sunDirection:s.position.clone().normalize(),sunColor:16777215,waterColor:7695,fog:void 0!==o.fog});p.rotation.x=-Math.PI/2,p.material.uniforms.distortionScale.value=2,p.material.uniforms.size.value=6,p.material.uniforms.alpha.value=.95,console.log(p.material.uniforms),o.add(p);var d=new i.Sky;d.scale.setScalar(1e4),d.material.uniforms.turbidity.value=10,d.material.uniforms.rayleigh.value=2,d.material.uniforms.luminance.value=1,d.material.uniforms.mieCoefficient.value=.005,d.material.uniforms.mieDirectionalG.value=.8,o.add(d);var m=400,v=.55,h=.75,y=new i.CubeCamera(1,2e4,256);y.renderTarget.texture.minFilter=i.LinearMipMapLinearFilter;var w,b;w=Math.PI*(v-.5),b=2*Math.PI*(h-.5),s.position.x=m*Math.cos(b),s.position.y=m*Math.sin(b)*Math.sin(w),s.position.z=m*Math.sin(b)*Math.cos(w),d.material.uniforms.sunPosition.value=s.position.copy(s.position),p.material.uniforms.sunDirection.value.copy(s.position).normalize(),y.update(r,o);requestAnimationFrame(function t(i){e.rafID=requestAnimationFrame(t),n.begin(),p.material.uniforms.time.value+=.002,r.render(o,a),n.end()})}},{key:"componentWillUnmount",value:function(){this.renderer.dispose(),this.canvas.outerHTML="",this.stats.domElement.outerHTML="",delete this.canvas,delete this.stats.domElement,window.cancelAnimationFrame(this.rafID)}},{key:"render",value:function(){var e=this;return a.default.createElement("div",null,a.default.createElement("canvas",{id:"canvas",ref:function(t){e.canvas=t}}))}}]),t}();t.default=f},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(2)),o=n(119),a=p(n(118)),i=p(n(263)),u=p(n(185)),l=p(n(183)),c=p(n(179)),s=p(n(178)),f=p(n(177));function p(e){return e&&e.__esModule?e:{default:e}}(0,a.default)();t.default=function(e){return r.default.createElement(o.HashRouter,null,r.default.createElement("div",null,r.default.createElement(o.Route,{exact:!0,path:"/",component:i.default}),r.default.createElement(o.Route,{path:"/detail/:id",component:u.default}),r.default.createElement(o.Route,{exact:!0,path:"/companies",component:l.default}),r.default.createElement(o.Route,{path:"/companies/:id",component:c.default}),r.default.createElement(o.Route,{exact:!0,path:"/contact",component:s.default}),r.default.createElement(o.Route,{exact:!0,path:"/about",component:f.default})))}},270:function(e,t,n){(t=e.exports=n(87)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700,900);",""]),t.push([e.i,"body {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n",""])},271:function(e,t,n){var r=n(270);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(86)(r,o);r.locals&&(e.exports=r.locals)},283:function(e,t,n){"use strict";var r=i(n(2)),o=i(n(281));n(271);var a=i(n(268));function i(e){return e&&e.__esModule?e:{default:e}}o.default.render(r.default.createElement(function(){return r.default.createElement(a.default,null)},null),document.getElementById("root"))},486:function(e,t,n){n(485),e.exports=n(283)}});
//# sourceMappingURL=main.js.map