(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=(n(12),n(2)),o=n(3),d=n(5),h=n(4),u=n(0),l=function(e){return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"photos",src:e.isrc,style:{width:"150px",height:"150px",objectfit:"cover"}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{children:e.contact})]})]})},b=function(e){return Object(u.jsx)("div",{children:e.robot.map((function(e){return Object(u.jsx)(l,{id:e.id,name:e.name,contact:e.cont,isrc:e.isrc},e.id)}))})},j=function(e){return Object(u.jsx)("input",{className:"bg-light-blue b--green pa3 ba ma2",type:"search",placeholder:"Search ",onChange:e.changefunction})},p=(n(14),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Opps! There is something wrong "}):this.props.children}}]),n}(c.Component),g=[{id:1,name:"Abdullah",cont:"+923075489805",isrc:n.p+"static/media/Abdullah.1b70b8ac.jpg"},{id:2,name:"Afras",cont:"+923157496269",isrc:n.p+"static/media/Afras.602202d7.jpg"},{id:3,name:"Rashid",cont:"+923434185778",isrc:n.p+"static/media/Rashid.104e2c03.jpg"},{id:4,name:"Yusuf",cont:"+923168438612",isrc:n.p+"static/media/Yusuf.075a18bf.jpg"},{id:5,name:"Hassan",cont:"+923488360539",isrc:n.p+"static/media/Hassan.02cd4567.jpg"},{id:6,name:"Hashim",cont:"+923048862472",isrc:n.p+"static/media/Hash.14260f26.jpg"}],m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onChangeFunction=function(t){e.setState({searchField:t.target.value})},e.state={buddies:g,searchField:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.buddies.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return this.state.buddies.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"Buddies"}),Object(u.jsx)(j,{changefunction:this.onChangeFunction}),Object(u.jsx)(p,{children:Object(u.jsx)(f,{children:Object(u.jsx)(b,{robot:t})})}),Object(u.jsx)("h2",{className:"white",children:" New Features will be Added Soon.."})]}):Object(u.jsx)("h1",{children:"Loading"})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(15);a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.e449cfdd.chunk.js.map