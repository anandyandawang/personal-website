(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"054a":function(t,e,o){"use strict";o("8d58")},1002:function(t,e,o){t.exports=o.p+"img/ANDY.svg"},"21bb":function(t,e,o){"use strict";o("7a98")},"2d28":function(t,e,o){t.exports=o.p+"img/logo2.svg"},"35f8":function(t,e,o){t.exports=o.p+"img/hex.svg"},"387e":function(t,e,o){t.exports=o.p+"img/github.svg"},"3ce7":function(t,e,o){t.exports=o.p+"img/fab.svg"},"5c0b":function(t,e,o){"use strict";o("e332")},"6ba7":function(t,e,o){t.exports=o.p+"img/fab-close.svg"},"7a98":function(t,e,o){},"8d58":function(t,e,o){},"953d":function(t,e,o){t.exports=o.p+"img/linkedin.svg"},"9b19":function(t,e,o){t.exports=o.p+"img/logo.svg"},"9dab":function(t,e,o){"use strict";o("a6d0")},a01c:function(t,e,o){"use strict";o("a1ed")},a1ed:function(t,e,o){},a6d0:function(t,e,o){},b445:function(t){t.exports=JSON.parse('{"Portfolio":{"name":"Portfolio","type":"Personal Website","desc":"A website that I created to showcase myself and some of the awesome projects that I have worked on. Personally designed by myself in Sketch, and built using HTML, CSS, and JavaScript with Bootstrap and Vue.js frameworks.","github":"https://github.com/AndyWang99/personal-website","imagePath":"/projects/personal-website.png"},"YIKES!":{"name":"YIKES!","type":"2D Arcade Game","desc":"An endless vertical runner where, you, the player, guides a ball through a maze of platforms by tilting and tapping on your phone. This game is also available in multiplayer! Created in Java using the LibGDX framework with the Box2D physics engine. Multiplayer support added using a Node.js server with Express.js and Socket.io.","github":"https://github.com/AndyWang99/YIKES","gplay":"https://play.google.com/store/apps/details?id=com.sodirea.yikes&hl=en_SG","imagePath":"/projects/yikes.webp"}}')},babd:function(t,e,o){t.exports=o.p+"img/WANG.svg"},c496:function(t,e,o){t.exports=o.p+"img/portrait.jpg"},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],r=o("b445"),i=n["default"].extend({name:"home",components:{},data:function(){return{json:{}}},mounted:function(){this.json=r,console.log(r)}}),c=i,l=(o("5c0b"),o("2877")),u=Object(l["a"])(c,a,s,!1,null,null,null),d=u.exports,p=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("home"),o("about"),o("projects")],1)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{id:"home"}},[n("b-container",{staticClass:"p-4",attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"mb-4 text-left",attrs:{md:"8"}},[n("b-row",[n("b-col",{attrs:{cols:"4",sm:"2",md:"2"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("9b19")}})]),n("b-col",{staticClass:"d-flex align-items-center",attrs:{cols:"8",sm:"10",md:"10"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("2d28")}})])],1)],1),n("b-col",{staticClass:"mb-4 d-flex align-items-center",attrs:{md:"4"}},[n("div",{staticClass:"position-fixed fab",on:{click:function(e){return t.toggleMenu()}}},[t.showMenu?n("img",{staticClass:"img-fluid",attrs:{src:o("6ba7")}}):n("img",{staticClass:"img-fluid",attrs:{src:o("3ce7")}})]),1==t.showMenu?n("nav-menu",{on:{"menu-item-clicked":function(e){return t.toggleMenu()}}}):t._e()],1)],1),n("b-row",{staticClass:"home-graphic"},[n("b-col",{staticClass:"text-left andy-container",attrs:{md:"4"}},[n("transition",{attrs:{name:"slide-right-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("1002")}})])],1),n("b-col",{staticClass:"my-5 hex",attrs:{md:"4"}},[n("transition",{attrs:{name:"rotate-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("35f8")}})])],1),n("b-col",{staticClass:"text-right wang-container",attrs:{md:"4"}},[n("transition",{attrs:{name:"slide-left-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("babd")}})])],1)],1)],1)],1)},g=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"expand"}},[n("div",{staticClass:"nav-menu"},[n("b-container",[n("b-row",[n("b-col",[n("b-row",[n("b-col",{on:{click:function(e){return t.scrollToSection("home")}}},[n("div",{staticClass:"menu-item"},[t._v("HOME")])])],1),n("b-row",[n("b-col",{on:{click:function(e){return t.scrollToSection("about")}}},[n("div",{staticClass:"menu-item"},[t._v("ABOUT")])])],1),n("b-row",[n("b-col",{on:{click:function(e){return t.scrollToSection("projects")}}},[n("div",{staticClass:"menu-item"},[t._v("PROJECTS")])])],1),n("b-row",{staticClass:"social-media"},[n("b-col",[n("a",{attrs:{href:"https://linkedin.com/in/andy-w-94b896126/",target:"_blank"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("953d")}})]),n("a",{attrs:{href:"https://github.com/AndyWang99",target:"_blank"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("387e")}})])])],1)],1)],1)],1)],1)])},v=[],w=n["default"].extend({name:"nav-menu",methods:{scrollToSection:function(t){var e=document.getElementById(t);if(null!=e){var o=e.offsetTop;window.scrollTo(0,o)}else console.log("The element associated with the menu item is null / could not be found.");this.$emit("menu-item-clicked")}}}),y=w,j=(o("a01c"),Object(l["a"])(y,h,v,!1,null,null,null)),C=j.exports,x=n["default"].extend({name:"home",components:{NavMenu:C},data:function(){var t=!1;return{showMenu:t}},methods:{toggleMenu:function(){this.showMenu=!this.showMenu;var t=getComputedStyle(document.body,null).overflow;document.body.style.overflow="hidden"!=t?"hidden":"visible"}}}),_=x,k=(o("21bb"),Object(l["a"])(_,b,g,!1,null,null,null)),O=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",attrs:{id:"about"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"mb-4 text-left"},[n("b-row",{staticClass:"mb-4"},[n("b-col",[n("h2",[t._v("ABOUT ME")])])],1),n("b-row",{staticClass:"mb-3"},[n("b-col",[n("h3",[t._v("Developer. Wanderer.")])])],1),n("b-row",[n("b-col",[n("p",[t._v("Hi there! I'm a second year student studying Computer Science at the University of Waterloo. I have a keen interest in bringing responsive web applications to life in the browser with HTML, CSS, and JavaScript.")])])],1),n("b-row",[n("b-col",[n("p",[t._v("On my spare time, I love to take long walks and jogs around my neighbourhood as well as on community trails. I am also just beginning to dip my feet into learning visual art.")])])],1)],1),n("b-col",{staticClass:"text-right"},[n("img",{staticClass:"img-fluid portrait",attrs:{src:o("c496")}})])],1)],1)],1)},M=[],P=n["default"].extend({name:"about"}),E=P,T=(o("f26d"),Object(l["a"])(E,S,M,!1,null,null,null)),A=T.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projects",attrs:{id:"projects"}},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"mb-4 text-left"},[o("b-row",{staticClass:"mb-4"},[o("b-col",[o("h2",[t._v("PROJECTS")])])],1)],1)],1),o("b-row",t._l(t.json,(function(e){return o("b-col",{key:e.name,staticClass:"mb-5 text-left project-pic-container",attrs:{md:"6"}},[o("div",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"project-modal"+e.name,expression:"'project-modal' + project.name"}]},[o("div",{staticClass:"px-5"},[o("img",{staticClass:"img-fluid project-pic",attrs:{src:e.imagePath}})]),o("div",{staticClass:"project-caption"},[o("h3",[t._v(t._s(e.name))]),o("p",[t._v(t._s(e.type))])])]),o("b-modal",{attrs:{id:"project-modal"+e.name,size:"lg","hide-header":"true","hide-footer":"true"}},[o("project-clicked",{attrs:{project:e}}),o("div",{staticClass:"px-5 mb-3"},[o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return t.hideModal("project-modal"+e.name)}}},[t._v("Close")])],1)],1)],1)})),1)],1)],1)},I=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-clicked"},[o("b-container",{staticClass:"p-4",attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"mb-4 text-left"},[o("b-row",[o("b-col",[o("h2",[t._v(t._s(t.project.name))])])],1),o("b-row",{staticClass:"mb-3"},[o("b-col",[o("h3",[t._v(t._s(t.project.type))])])],1),o("b-row",[o("b-col",[o("p",[t._v(t._s(t.project.desc))])])],1),o("b-row",[o("b-col",[o("a",{attrs:{href:t.project.github,target:"_blank"}},[o("p",[t._v("Checkout the GitHub repo here!")])])])],1),null!=t.project.gplay?o("b-row",[o("b-col",[o("a",{attrs:{href:t.project.gplay,target:"_blank"}},[o("p",[t._v("Checkout the app on Google Play here!")])])])],1):t._e()],1),o("b-col",{staticClass:"text-right"},[o("img",{staticClass:"img-fluid project-image",attrs:{src:t.project.imagePath}})])],1)],1)],1)},J=[],W=n["default"].extend({name:"project-clicked",props:{project:{type:Object,required:!0}}}),B=W,G=(o("9dab"),Object(l["a"])(B,N,J,!1,null,null,null)),H=G.exports,D=o("b445"),Y=n["default"].extend({name:"projects",components:{ProjectClicked:H},data:function(){return{json:{}}},mounted:function(){this.json=D,console.log(D)},methods:{hideModal:function(t){this.$root.$emit("bv::hide::modal",t)}}}),K=Y,L=(o("054a"),Object(l["a"])(K,$,I,!1,null,null,null)),U=L.exports,q=n["default"].extend({components:{Home:O,About:A,Projects:U}}),z=q,F=Object(l["a"])(z,f,m,!1,null,null,null),R=F.exports;n["default"].use(p["a"]);var V=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:R}]}),X=o("9483");Object(X["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("21b6");var Q=o("5f5b");n["default"].use(Q["a"]),n["default"].config.productionTip=!1,new n["default"]({router:V,render:function(t){return t(d)}}).$mount("#app")},e332:function(t,e,o){},e9ad:function(t,e,o){},f26d:function(t,e,o){"use strict";o("e9ad")}});
//# sourceMappingURL=app.js.map