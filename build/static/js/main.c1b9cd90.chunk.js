(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/o-mnie.6d20e94c.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/skills.9823a0a5.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/projects.a8be8a29.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/resume.38e4aead.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/contact.15cc47b3.jpg"},25:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),i=a(1),o=a(2),m=a(4),s=a(3),u=a(5),d=a(6),E=a(9),b=a(7),v=a.n(b),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={showNavMobile:!1,widthNavMobile:1024},a.handleNav=function(){var e=a.state.widthNavMobile;if(document.body.clientWidth>=e)return null;a.setState({showNavMobile:!a.state.showNavMobile})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.widthNavMobile;document.body.clientWidth>=t&&this.setState({showNavMobile:!0}),window.addEventListener("resize",function(a){a.target.outerWidth>=t&&e.setState({showNavMobile:!0})})}},{key:"render",value:function(){var e=this.state.showNavMobile;return l.a.createElement("nav",{className:"nav"},l.a.createElement("header",null,l.a.createElement(d.b,{to:"/"},l.a.createElement("h1",null,"Marek Ficht: Portfolio"))),l.a.createElement("button",{className:e?"showCloseBtn":"",onClick:this.handleNav},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("ul",{style:{display:e?"flex":"none"},onClick:this.handleNav},l.a.createElement("li",null,l.a.createElement(d.c,{to:"/o-mnie",activeClassName:"active-nav"},l.a.createElement("button",null,"O mnie"))),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/skills",activeClassName:"active-nav"},l.a.createElement("button",null,"Skills"))),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/projekty",activeClassName:"active-nav"},l.a.createElement("button",null,"Projekty"))),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/cv",activeClassName:"active-nav"},l.a.createElement("button",null,"CV"))),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/kontakt",activeClassName:"active-nav"},l.a.createElement("button",null,"Kontakt")))))}}]),t}(n.Component),p=a(20),g=a.n(p),j=a(21),f=a.n(j),y=a(22),N=a.n(y),O=a(23),k=a.n(O),w=a(24),M=a.n(w),C=["Hej, jestem Marek! M\u0142odszy programista JS. Moja przygoda z \u015bwiatem IT zacz\u0119\u0142a si\u0119 2 lata temu, po godzinach.",""],T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},1e3)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"grid-item grid-item-1 read-more"},l.a.createElement("h3",null,"O MNIE"),l.a.createElement("p",null,C[0]),l.a.createElement("button",null,l.a.createElement(d.b,{to:"/o-mnie"},"Czytaj wi\u0119cej")),l.a.createElement("div",{className:"pic",style:{backgroundImage:'url("'.concat(g.a,'")')}})),l.a.createElement("div",{className:"grid-item grid-item-2"},l.a.createElement("h3",null,"PROJEKTY"),l.a.createElement("p",null,C[0]),l.a.createElement("button",null,l.a.createElement(d.b,{to:"/projekty"},"Zobacz")),l.a.createElement("div",{className:"pic",style:{backgroundImage:'url("'.concat(N.a,'")')}})),l.a.createElement("div",{className:"grid-item grid-item-3"},l.a.createElement("h3",null,"CV"),l.a.createElement("button",null,l.a.createElement(d.b,{to:"/cv"},"Pobierz")),l.a.createElement("div",{className:"pic",style:{backgroundImage:'url("'.concat(k.a,'")')}})),l.a.createElement("div",{className:"grid-item grid-item-4"},l.a.createElement("h3",null,"KONTAKT"),l.a.createElement("p",null,C[0]),l.a.createElement("button",null,l.a.createElement(d.b,{to:"/kontakt"},"Zobacz wi\u0119cej")),l.a.createElement("div",{className:"pic",style:{backgroundImage:'url("'.concat(M.a,'")')}})),l.a.createElement("div",{className:"grid-item grid-item-5"},l.a.createElement("h3",null,"SKILLS"),l.a.createElement("button",null,l.a.createElement(d.b,{to:"/skills"},"Zobacz")),l.a.createElement("div",{className:"pic",style:{backgroundImage:'url("'.concat(f.a,'")')}})),l.a.createElement("div",{className:"grid-item grid-item-6"},l.a.createElement("h3",null,"P1"),l.a.createElement("button",null,"Read more")),l.a.createElement("div",{className:"grid-item grid-item-7"},l.a.createElement("h3",null,"P2"),l.a.createElement("button",null,"Read more")),l.a.createElement("div",{className:"grid-item grid-item-8"},l.a.createElement("h3",null,"P3"),l.a.createElement("button",null,"Read more")),l.a.createElement("div",{className:"grid-item grid-item-9"},l.a.createElement("h3",null,"P4"),l.a.createElement("button",null,"Read more")),l.a.createElement("div",{className:"grid-item grid-item-10"},l.a.createElement("h3",null,"P5"),l.a.createElement("button",null,"Read more")),l.a.createElement("div",{className:"grid-item grid-item-11"},l.a.createElement("h3",null,"P6"),l.a.createElement("button",null,"Read more")))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null," ",l.a.createElement("span",null,"Marek Ficht - Front End Dev")," ",l.a.createElement("span",null,"\xa9 ALL RIGHTS RESERVED")," ")}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},500)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"O mnie"))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},500)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"Skills"))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},500)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"Projekty"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},500)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"CV"))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loading:!1}),clearTimeout(t)},500)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"container-loader"},l.a.createElement(v.a,{type:"spinningBubbles",color:"#bdbec7",width:100})):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"Kontakt"))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement("div",{className:"container"},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:T}),l.a.createElement(E.a,{exact:!0,path:"/o-mnie",component:x}),l.a.createElement(E.a,{exact:!0,path:"/skills",component:z}),l.a.createElement(E.a,{exact:!0,path:"/projekty",component:P}),l.a.createElement(E.a,{exact:!0,path:"/cv",component:A}),l.a.createElement(E.a,{exact:!0,path:"/kontakt",component:I}))),l.a.createElement(S,null)))}}]),t}(n.Component);a(38);r.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.c1b9cd90.chunk.js.map