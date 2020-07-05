(this["webpackJsonpreact-play"]=this["webpackJsonpreact-play"]||[]).push([[0],{27:function(e,t,n){e.exports=n(59)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),u=n(6),s=n(8),l=n(26),i=n(1),p="https://localhost:3000",d=n(12),f=Object(s.c)({Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loginUser":return Object(i.a)(Object(i.a)({},e),{},{userAuth:[t.payload,t.payloadId,t.username]});case"logoutUser":return Object(i.a)(Object(i.a)({},e),{},{userAuth:null});case"userRegister":return Object(i.a)(Object(i.a)({},e),{},{userRegister:t.payload});case"userRegisterSuccess":return Object(i.a)(Object(i.a)({},e),{},{userRegistrationSuccess:t.payload});default:return e}},Notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addNote":return console.log(t.payload),Object(i.a)(Object(i.a)({},e),{},{notesData:[].concat(Object(d.a)(e.notesData),[t.payload])});case"clearNotes":return{};case"compileNotes":return Object(i.a)(Object(i.a)({},e),{},{notesData:t.payload});case"editCurrent":return Object(i.a)(Object(i.a)({},e),{},{currentNote:t.payload});case"updateNote":return console.log("UPDATE_NOTE"),Object(i.a)(Object(i.a)({},e),{},{notesData:e.notesData.map((function(e){return e._id!==t.payload[0]?e:(console.log("PAYLOAD:"),console.log(t.payload[1]),Object(i.a)(Object(i.a)({},e),{},{content:t.payload[1]}))}))});case"deleteNote":return Object(i.a)(Object(i.a)({},e),{},{notesData:e.notesData.filter((function(e){return e._id!==t.payload}))});default:return e}}}),m=Object(s.d)(f,Object(s.a)(l.a)),g=n(3),b=n(2),h=n.n(b),v=n(5),E=n(7),j=n.n(E),O={get:function(){var e=localStorage.getItem("userToken"),t=localStorage.getItem("userId"),n=localStorage.getItem("userName");return!(!e||!t)&&[e,t,n]},set:function(e,t,n){return!(!e||!t)&&(localStorage.setItem("userToken",e),localStorage.setItem("userId",t),localStorage.setItem("userName",n),!0)},clear:function(){localStorage.clear()}},y=function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("".concat(p,"/notesGetUser/").concat(e[1]),{headers:{authorization:e[0],Accept:"application/json","Content-Type":"application/json"}});case 3:a=t.sent,n(k(a.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("".concat(p,"/notesDelete/").concat(e));case 3:n(x(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return{type:"compileNotes",payload:e}},A=function(e){return{type:"addNote",payload:e}},x=function(e){return{type:"deleteNote",payload:e}},C=function(e){return{type:"updateNote",payload:Object(d.a)(e)}},S=function(e){var t=Object(g.a)(e,3);return{type:"loginUser",payload:t[0],payloadId:t[1],username:t[2]}},_=function(){return{type:"logoutUser"}},w=Object(u.b)((function(e){var t=e.Login;return{userAuth:t.userAuth,userRegister:t.userRegister,userRegistrationSuccess:t.userRegistrationSuccess}}),(function(e){return{dispatch:function(t){return e(t)},loginApi:function(t,n){return e(function(e,t){return console.log("Action: login action"),function(){var n=Object(v.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.post("".concat(p,"/login"),{userName:e,userPassword:t});case 3:r=n.sent,a(S([r.data.token,r.data.user._id,r.data.user.userName])),a(y([r.data.token,r.data.user._id])),O.set(r.data.token,r.data.user._id,r.data.user.userName),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},loginStorageApi:function(t){return e(function(e){return console.log("Login storage action"),function(t){var n=O.get();!e&&n&&(console.log("No login in state + storage exists"),console.log(n),t(S(n)),t(y(n)))}}(t))},logoutApi:function(){return e((console.log("Action: logout"),function(e){O.clear(),e(_()),e({type:"clearNotes"})}))}}}))((function(e){var t=Object(a.useState)(null),n=Object(g.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(null),s=Object(g.a)(u,2),l=s[0],i=s[1],p=Object(a.useState)(!1),d=Object(g.a)(p,2),f=d[0],m=d[1];Object(a.useEffect)((function(){e.loginStorageApi(e.userAuth)}),[e]);var b=function(e,t){switch(t){case"name":o(e.target.value);break;case"pass":i(e.target.value)}},h=function(){c&&l?(e.loginApi(c,l),m(!1),o(null),i(null)):m(!0)};return r.a.createElement("div",{className:"login"},e.userAuth||e.userRegister?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:function(e){return b(e,"name")},placeholder:"User name",type:"text"}),r.a.createElement("input",{onChange:function(e){return b(e,"pass")},placeholder:"Password",type:"text"}),r.a.createElement("button",{onClick:function(){return h()}},"Login"),f&&r.a.createElement("div",{className:"error"},"Please enter username/password"),r.a.createElement("button",{onClick:function(){return t=!0,void e.dispatch({type:"userRegister",payload:t});var t}},"Register new user"),e.userRegistrationSuccess?r.a.createElement("p",null,"Registration successful!"):null),e.userAuth?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"User logged in: ",e.userAuth[2]),r.a.createElement("button",{onClick:function(){e.logoutApi()}},"Logout")):null)})),D=Object(u.b)((function(e){var t=e.Login;return{userRegister:t.userRegister,userRegistrationSuccess:t.userRegistrationSuccess}}))((function(e){var t=Object(a.useState)(null),n=Object(g.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(null),s=Object(g.a)(u,2),l=s[0],i=s[1],p=function(e,t){switch(t){case"name":o(e.target.value);break;case"pass":i(e.target.value)}},d=function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("https://localhost:3000/createUser",{userName:c,userPassword:l});case 3:o(null),i(null),f(!1),e.dispatch({type:"userRegisterSuccess",payload:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),f=function(t){e.dispatch({type:"userRegister",payload:t})};return r.a.createElement(r.a.Fragment,null,e.userRegister&&r.a.createElement("div",{className:"register"},r.a.createElement("input",{onChange:function(e){return p(e,"name")},placeholder:"User name",type:"text"}),r.a.createElement("input",{onChange:function(e){return p(e,"pass")},placeholder:"Password",type:"text"}),r.a.createElement("button",{onClick:function(){return d()}},"Register"),r.a.createElement("button",{onClick:function(){return f(!1)}},"Cancel")))})),R=(n(56),function(){return r.a.createElement("div",null,"Message mustn't be empty!")}),I=Object(u.b)((function(e){var t=e.Login,n=e.Notes;return{userAuth:t.userAuth,notesData:n.notesData,noteCurrent:n.currentNote}}),(function(e){return{getNotes:function(t){return e(y(t))},sendNote:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(v.a)(h.a.mark((function a(r){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("".concat(p,"/notesPost"),{userString:n,title:e,content:t});case 3:c=a.sent,r(A({title:e,content:t,_id:c.data._id})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))},deleteNote:function(t){return e(N(t))},editNote:function(t,n){return e(function(e,t){return console.log("Async update"),function(){var n=Object(v.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.put("".concat(p,"/notesUpdate/").concat(e),{content:t});case 3:r=n.sent,a(C([e,r.data.content])),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(a.useState)(""),n=Object(g.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),s=Object(g.a)(u,2),l=s[0],i=s[1],p=Object(a.useState)(!1),d=Object(g.a)(p,2),f=d[0],m=d[1],b=Object(a.useState)(!1),E=Object(g.a)(b,2),j=E[0],O=E[1],y=Object(a.useState)(""),N=Object(g.a)(y,2),k=N[0],A=N[1],x=function(){O(!j)},C=function(t){k&&(e.editNote(t,k),x(!1))},S=function(e,t){switch(t){case"title":o(e.target.value);break;case"content":i(e.target.value);break;case"editingContent":A(e.target.value);break;default:console.log("Nothing")}},_=function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f&&m(!1),e.userAuth){t.next=4;break}return m(!0),t.abrupt("return");case 4:if(c&&l){t.next=7;break}return m(!0),t.abrupt("return");case 7:e.sendNote(c,l,e.userAuth[1]);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"notes"},e.userAuth?r.a.createElement("div",null,r.a.createElement("h2",null,"Input Area"),r.a.createElement("input",{placeholder:"Title",onChange:function(e){return S(e,"title")},type:"text"}),r.a.createElement("input",{placeholder:"Content",onChange:function(e){return S(e,"content")},type:"text"}),r.a.createElement("button",{onClick:function(){return _()}},"Add note")):"Login to edit notes!",f&&r.a.createElement(R,null),r.a.createElement("div",null,e.userAuth&&function(t){if(e.notesData){var n=e.notesData.find((function(e){return e._id===t}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"notes__editing"},r.a.createElement("h1",null,n.title),j?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:function(e){return S(e,"editingContent")},placeholder:n.content,type:"text"}),r.a.createElement("button",{onClick:function(){return x()}},"Cancel"),r.a.createElement("button",{onClick:function(){return C(n._id)}},"Save")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.content),r.a.createElement("button",{onClick:function(){return x()}},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteNote(n._id)}},"Delete"))):"")}}(e.noteCurrent)))})),U=(n(57),Object(u.b)((function(e){var t=e.Login,n=e.Notes;return{userAuth:t.userAuth,notesData:n.notesData}}),(function(e){return{dispatch:function(t){return e(t)},deleteNote:function(t){return e(N(t))}}}))((function(e){return r.a.createElement("div",{className:"sidebar"},e.userAuth?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your notes"),r.a.createElement("p",null,e.notesData&&0===e.notesData.length&&"No notes yet!"),e.notesData?r.a.createElement("ul",{className:"sidebar__container"},e.notesData.map((function(t,n){return r.a.createElement("li",{className:"sidebar__item",key:"sidebarNote-"+n},r.a.createElement("span",{className:"sidebar__item--1"},t.title),r.a.createElement("button",{className:"sidebar__item--2",onClick:function(){return n=t._id,console.log("EditCurrent: ".concat(n)),void e.dispatch({type:"editCurrent",payload:n});var n}},"Edit"),r.a.createElement("button",{className:"sidebar__item--3",onClick:function(){return n=t._id,console.log("DeleteNote: ".concat(n)),void e.deleteNote(n);var n}},"Delete"))}))):""):null)}))),L=(n(58),function(){return r.a.createElement("div",{className:"notes-app"},r.a.createElement("div",{className:"notes-app__sidebar"},r.a.createElement(w,null),r.a.createElement(D,null),r.a.createElement(U,null)),r.a.createElement("div",{className:"notes-app__main"},r.a.createElement(I,null)))});o.a.render(r.a.createElement(u.a,{store:m},r.a.createElement(L,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5326833f.chunk.js.map