(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,a){e.exports=a(62)},49:function(e,t,a){},50:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(49),a(50),a(51),a(11)),l=a(3),s=a(10),m=a(65),u=a(66),d=a(8);function p(){var e=Object(s.a)(["\n  .navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]);return p=function(){return e},e}var f=d.a.div(p()),h=function(){return r.a.createElement(f,null,r.a.createElement(m.a,{expand:"lg"},r.a.createElement(m.a.Brand,{as:i.b,to:"/"},"coronacare.ai"),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{as:i.b,to:"/"},"Home")),r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{as:i.b,to:"/about"},"About the Product")),r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{as:i.b,to:"/contact"},"Contact Us"))))))};function v(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return v=function(){return e},e}d.a.div(v());var b=function(e){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana"}},"Welcome"),r.a.createElement("p",{style:{fontFamily:"Verdana"}},"Feel free to use our chatbot at ",r.a.createElement("a",{href:"https://www.m.me/coronacareai"},"m.me/coronacareai"),". "))};a(61);function g(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return g=function(){return e},e}d.a.div(g());var E=r.a.createElement("w",{style:{color:"green",fontSize:"110%",fontFamily:"Verdana"}},"coronacare.ai"),y=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana"}},"About"),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," ",E," is a Facebook Messenger chatbot tailored specifically for those in need of assistance during the COVID-19 pandemic. "),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," Ask it questions about COVID-19 to get the latest news and data about the pandemic or simply prompt it for ways to spend your time while in quarantine. "),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," Using the bot, you can: "),r.a.createElement("ul",{style:{fontFamily:"Verdana"}},r.a.createElement("li",null," Ask questions about COVID-19 "),r.a.createElement("li",null," Find local therapists and other resources to suit your needs "),r.a.createElement("li",null," Request to join a support group ")),r.a.createElement("p",{style:{fontFamily:"Verdana"}},' To get started, message "Hello" to Coronacare.ai on Facebook Messenger! '))},w=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana"}},"Contact Us"))},k=a(18),F=a(19),O=a(22),C=a(20);function j(){var e=Object(s.a)(["\n  height: 70px;\n  width: 75px; /* width must be same size as NavBar to center */\n  text-align: center; /* Aligns <a> inside of NavIcon div */\n  margin-bottom: 0;   /* Puts space between NavItems */\n  a {\n    font-size: 2.7em;\n    color: ",";\n    :hover {\n      opacity: 0.7;\n      text-decoration: none; /* Gets rid of underlining of icons */\n    }  \n  }\n"]);return j=function(){return e},e}function x(){var e=Object(s.a)(["\n"]);return x=function(){return e},e}var I=d.a.div(x()),V=d.a.div(j(),(function(e){return e.active?"white":"#9FFFCB"})),B=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,a=t.path;(0,t.onItemClick)(a)},e}return Object(F.a)(a,[{key:"render",value:function(){var e=this.props.active;return r.a.createElement(V,{active:e},r.a.createElement(i.b,{to:this.props.path,className:this.props.css,onClick:this.handleClick},r.a.createElement(I,null)))}}]),a}(r.a.Component);function N(){var e=Object(s.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 75px;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  top: 3.4em;      /* Stay at the top */\n  background-color: #222; /* Black */\n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]);return N=function(){return e},e}var A=d.a.div(N()),S=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).onItemClick=function(e){n.setState({activePath:e})},n.state={activePath:e.location.pathname,items:[{path:"/",name:"Home",css:"fa fa-fw fa-home",key:1},{path:"/about",name:"About the Product",css:"fa fa-fw fa-cog",key:2},{path:"/contact",name:"Contact Us",css:"fas fa-address-book",key:3}]},n}return Object(F.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.activePath;return r.a.createElement(A,null,a.map((function(t){return r.a.createElement(B,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===n,key:t.key})})))}}]),a}(r.a.Component),z=Object(l.f)(S),P=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return r.a.createElement(z,null)}}]),a}(r.a.Component);var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{basename:"/coronacaresite"},r.a.createElement(h,null),r.a.createElement(P,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:b}),r.a.createElement(l.a,{path:"/about",component:y}),r.a.createElement(l.a,{path:"/contact",component:w}),r.a.createElement(l.a,{path:"/bot",render:function(){return window.location="m.me/coronacareai"}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.8f4dd6ad.chunk.js.map