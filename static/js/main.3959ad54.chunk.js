(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),s=(a(22),a(2)),i=a(3),o=a(6),u=a(4),p=a(7),d=a(5),m=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.getTitle.value,n=a.getMessage.value,r={id:new Date,title:t,message:n,editing:!1};a.props.dispatch({type:"ADD_POST",data:r}),a.getTitle.value="",a.getMessage.value=""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post-container"},r.a.createElement("h1",{className:"post_heading"},"Create Post"),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},placeholder:"Enter Post Title"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getMessage=t},cols:"28",placeholder:"Enter Post"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Post")))}}]),t}(n.Component),b=Object(d.b)()(m),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post"},r.a.createElement("h2",{className:"post_title"},this.props.post.title),r.a.createElement("p",{className:"post_message"},this.props.post.message),r.a.createElement("div",{className:"control-buttons"},r.a.createElement("button",{className:"edit",onClick:function(){return e.props.dispatch({type:"EDIT_POST",id:e.props.post.id})}},"Edit"),r.a.createElement("button",{className:"delete",onClick:function(){return e.props.dispatch({type:"DELETE_POST",id:e.props.post.id})}},"Delete")))}}]),t}(n.Component),h=Object(d.b)()(E),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleEdit=function(e){e.preventDefault();var t={newTitle:a.getTitle.value,newMessage:a.getMessage.value};a.props.dispatch({type:"UPDATE",id:a.props.post.id,data:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{key:this.props.post.id,className:"post"},r.a.createElement("form",{className:"form",onSubmit:this.handleEdit},r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},defaultValue:this.props.post.title,placeholder:"Enter Post Title"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getMessage=t},defaultValue:this.props.post.message,cols:"28",placeholder:"Enter Post"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),t}(n.Component),O=Object(d.b)()(f),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"post_heading"},"All Posts"),this.props.posts.map(function(e){return r.a.createElement("div",{key:e.id},e.editing?r.a.createElement(O,{post:e,key:e.id}):r.a.createElement(h,{post:e,key:e.id}))}))}}]),t}(n.Component),v=Object(d.b)(function(e){return{posts:e}})(g),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navbar"},r.a.createElement("h2",{className:"center "},"Notes App")),r.a.createElement(b,null),r.a.createElement(v,null))}}]),t}(n.Component),y=a(8),T=a(12),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return e.concat([t.data]);case"DELETE_POST":return e.filter(function(e){return e.id!==t.id});case"EDIT_POST":return e.map(function(e){return e.id===t.id?Object(T.a)({},e,{editing:!e.editing}):e});case"UPDATE":return e.map(function(e){return e.id===t.id?Object(T.a)({},e,{title:t.data.newTitle,message:t.data.newMessage,editing:!e.editing}):e});default:return e}},N=Object(y.b)(w);l.a.render(r.a.createElement(d.a,{store:N},r.a.createElement(j,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.3959ad54.chunk.js.map