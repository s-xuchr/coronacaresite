(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,a){e.exports=a(62)},49:function(e,t,a){},50:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(49),a(50),a(51),a(17)),l=a(3),s=a(10),u=a(65),m=a(66),d=a(8);function p(){var e=Object(s.a)(["\n  .navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]);return p=function(){return e},e}var h=d.a.div(p()),f=function(){return r.a.createElement(h,null,r.a.createElement(u.a,{expand:"lg"},r.a.createElement(u.a.Brand,{href:"coronacaresite/"},"coronacare.ai"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"ml-auto"},r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{exact:!0,href:"coronacaresite/"},"Home")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{href:"coronacaresite/about"},"About the Product")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{href:"coronacaresite/contact"},"Contact Us"))))))};function v(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return v=function(){return e},e}d.a.div(v());var g=function(e){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana",backgroundColor:"lightgray"}},"Welcome"),r.a.createElement("p",{style:{fontFamily:"Verdana"}},"Feel free to use our chatbot at (paste link here)"))};a(59);function b(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return b=function(){return e},e}d.a.div(b());var y=r.a.createElement("w",{style:{color:"green",fontSize:"110%",fontFamily:"Verdana"}},"coronacare.ai"),E=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana",backgroundColor:"lightgray"}},"About"),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," ",y," is a Facebook Messenger chatbot tailored specifically for those in need of assistance during the COVID-19 pandemic. "),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," Ask it questions about COVID-19 to get the latest news and data about the pandemic or simply prompt it for ways to spend your time while in quarantine. "),r.a.createElement("p",{style:{fontFamily:"Verdana"}}," Using the bot, you can: "),r.a.createElement("ul",{style:{fontFamily:"Verdana"}},r.a.createElement("li",null," Ask questions about COVID-19 "),r.a.createElement("li",null," Find local therapists and other resources to suit your needs "),r.a.createElement("li",null," Request to join a support group ")),r.a.createElement("p",{style:{fontFamily:"Verdana"}},' To get started, message "Hello" to Coronacare.ai on Facebook Messenger! '))},k=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",{style:{fontFamily:"Verdana",backgroundColor:"lightgray"}},"Contact Us"))},w=a(18),F=a(19),C=a(22),O=a(20);function j(){var e=Object(s.a)(["\n  height: 70px;\n  width: 75px; /* width must be same size as NavBar to center */\n  text-align: center; /* Aligns <a> inside of NavIcon div */\n  margin-bottom: 0;   /* Puts space between NavItems */\n  a {\n    font-size: 2.7em;\n    color: ",";\n    :hover {\n      opacity: 0.7;\n      text-decoration: none; /* Gets rid of underlining of icons */\n    }  \n  }\n"]);return j=function(){return e},e}function x(){var e=Object(s.a)(["\n"]);return x=function(){return e},e}var I=d.a.div(x()),V=d.a.div(j(),(function(e){return e.active?"white":"#9FFFCB"})),B=function(e){Object(C.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,a=t.path;(0,t.onItemClick)(a)},e}return Object(F.a)(a,[{key:"render",value:function(){var e=this.props.active;return r.a.createElement(V,{active:e},r.a.createElement(i.b,{to:this.props.path,className:this.props.css,onClick:this.handleClick},r.a.createElement(I,null)))}}]),a}(r.a.Component);function N(){var e=Object(s.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 75px;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  top: 3.4em;      /* Stay at the top */\n  background-color: #222; /* Black */\n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]);return N=function(){return e},e}var A=d.a.div(N()),S=function(e){Object(C.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).onItemClick=function(e){n.setState({activePath:e})},n.state={activePath:e.location.pathname,items:[{path:"/coronacaresite/",name:"Home",css:"fa fa-fw fa-home",key:1},{path:"/coronacaresite/about",name:"About the Product",css:"fa fa-fw fa-cog",key:2},{path:"/coronacaresite/contact",name:"Contact Us",css:"fas fa-address-book",key:3}]},n}return Object(F.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.activePath;return r.a.createElement(A,null,a.map((function(t){return r.a.createElement(B,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===n,key:t.key})})))}}]),a}(r.a.Component),z=Object(l.f)(S),P=function(e){Object(C.a)(a,e);var t=Object(O.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return r.a.createElement(z,null)}}]),a}(r.a.Component);var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f,null),r.a.createElement(P,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:g}),r.a.createElement(l.a,{path:"/about",component:E}),r.a.createElement(l.a,{component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d8dafa90.chunk.js.map