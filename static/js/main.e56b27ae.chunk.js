(this["webpackJsonptry-react-rt"]=this["webpackJsonptry-react-rt"]||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),s=t.n(l),c=(t(15),t(1)),o=t(2),i=t(4),m=t(3),u=t(6),d=t(9),p=t.n(d),h=(t(18),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description),t=(this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("img",{className:"logov1",src:"..\\images\\logov1.png",alt:"Prowerse",width:"100",align:"left"}),r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Services")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h3",null,a),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",null,r.a.createElement("h2",{className:"footer"},"Contact Us")),r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2020 Prowerse"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.image;var e=this.props.data.bio,a=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload,this.props.data.companyvalues.people),t=this.props.data.companyvalues.journey,n=this.props.data.companyvalues.progress}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns main-col"},r.a.createElement("h2",null,"About Prowerse"),r.a.createElement("p",null,e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h2",null,"Prowerse Values"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"four columns"},r.a.createElement("h3",null,"People"),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"four columns"},r.a.createElement("h3",null,"Journey"),r.a.createElement("p",null,t)),r.a.createElement("div",{className:"four columns"},r.a.createElement("h3",null,"Progress"),r.a.createElement("p",null,n))))))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"justified"},e.description))})),a=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"justified"},e.description))})),t=this.props.data.skills.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("h3",{className:"resume"},e.name),r.a.createElement("p",{className:"resume"},e.stacknames))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Software Product Development"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Software Development Outsourcing"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Techstacks"))),r.a.createElement("div",{className:"nine columns main-col"},t)))}}]),t}(n.Component),w=(n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return r.a.createElement("div",{key:e.user},r.a.createElement("p",{className:"justified"},e.text),r.a.createElement("cite",null,e.user))}));return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Testimonials"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))))}}]),t}(n.Component)),N=(n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.resume}),r.a.createElement(w,{data:this.state.resumeData.testimonials}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");b?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.e56b27ae.chunk.js.map