(this["webpackJsonphome-run-checklist"]=this["webpackJsonphome-run-checklist"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyDOqH0DOtwWNAxgdAi5pAgw9BpXeU3p9EQ","authDomain":"train-time-2ed45.firebaseapp.com","databaseURL":"https://train-time-2ed45.firebaseio.com","projectId":"train-time-2ed45","storageBucket":"train-time-2ed45.appspot.com","messagingSenderId":"914003238583","appId":"1:914003238583:web:20c9433f7d1a07fe137732"}')},24:function(e,t){},42:function(e,t,n){},43:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(2),s=n.n(c),r=n(20),o=n.n(r),i=(n(42),n(43),n.p+"static/media/logo.6ce24c58.svg"),l=n(15),u=n(27),d=n(17),j=(n(49),n(58),n(14)),b={apiKey:j.apiKey,authDomain:j.authDomain,databaseURL:j.databaseURL,projectId:j.projectId,storageBucket:j.storageBucket,messagingSenderId:j.messagingSenderId,appId:j.appId};d.a.initializeApp(b);var p=d.a.auth(),h=(d.a.firestore(),new d.a.auth.GithubAuthProvider);h.setCustomParameters({prompt:"select_account"});d.a;var g=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){}),[n]),Object(a.jsx)("div",{children:n?Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){p.signOut().then((function(){console.log("Sign-out successful.")})).catch((function(e){console.log("error.message: ",e.message)})),s(null)},children:"Sign Out"}),n.displayName]}):Object(a.jsx)("button",{onClick:function(){return s(p.signInWithPopup(h).then((function(e){e.credential.accessToken;var t=e.user,n={displayName:t.displayName,email:t.email};return console.log("signInWithGithub... "),console.log("user: ",n),n})).catch((function(e){return console.log("error.code: ",e.code),console.log("error.message: ",e.message),console.log("error.email: ",e.email),e})))},children:"Sign In with Github"})})},O=function(){return Object(a.jsxs)("div",{className:"App-header",children:[Object(a.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(a.jsx)("h2",{className:"App-title",children:"Passion Project: The Home Run"}),Object(a.jsx)(g,{})]})},m=window.localStorage,f=function(e){m.setItem("taskObj",JSON.stringify(e))},k=(n(52),function(e){var t=e.taskList,n=e.taskObj,s=e.index,r=Object(c.useState)(n),o=Object(l.a)(r,2),i=o[0],u=o[1];function d(){console.log("check the box"),u({taskName:i.taskName,completed:!i.completed})}return Object(c.useEffect)((function(){!function(e,t,n){n[e]=t,f(n),console.log(n[e])}(s,i,t)}),[i,s,t]),i?Object(a.jsxs)("div",{children:[i.completed?Object(a.jsx)("span",{className:"taskBox",onClick:d,children:"\u2611 "}):Object(a.jsx)("span",{className:"taskBox",onClick:d,children:"\u25a1 "}),Object(a.jsx)("span",{className:"taskName",children:i.taskName}),Object(a.jsx)("span",{className:"taskX",onClick:function(){console.log("click on x"),u(null),function(e,t){for(var n=[],a=0;a<t.length;a++)if(a!==e){var c=t[a];n.push(c)}f(n)}(s,t)},children:"x"})]}):null}),x=function(e){var t=e.taskList;return t?t.map((function(e,n){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(k,{taskObj:e,index:n,taskList:t})},n)})})):Object(a.jsx)("p",{children:"Please add tasks!"})},v=function(e){var t=e.taskList,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],o=s[1],i=Object(c.useState)(t),u=Object(l.a)(i,2),d=u[0],j=u[1];return Object(c.useEffect)((function(){f(d)})),Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:function(e){console.log("adding..."),e.preventDefault(),console.log(d),console.log(r),d?(console.log("if"),d.push({taskName:r,completed:!1}),o("")):(console.log("else"),j([{taskName:r,completed:!1}]),o(""))},children:[Object(a.jsxs)("label",{children:["New task: ",Object(a.jsx)("input",{onChange:function(e){o(e.target.value),console.log(e.target.value)},value:r,name:"newTask"})]}),Object(a.jsx)("button",{type:"submit",className:"btn-primary",children:"Add"})]}),Object(a.jsx)(x,{taskList:d}),Object(a.jsx)("button",{onClick:function(){m.clear(),j(null)},children:"-Clear-"})]})};var S=function(){var e=JSON.parse(m.getItem("taskObj"));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(v,{taskList:e})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},I=n(11),_=(n(53),n(23)),y=n(35),w=n(30),A=n.n(w),E=n(36),C=A.a.mark(L);function L(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([]);case 2:case"end":return e.stop()}}),C)}var D=n(34),U=n.n(D),P=n(31),T=n(24),W=n.n(T),B=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.a.UPDATE_STATUS:return t.payload;case W.a.ADD_NEW:case W.a.DELETE:return[].concat(Object(P.a)(e),[t.payload]);default:return e}},J=n(32),F={Sign_In_With_Github:"Sign_In_With_Github",Sign_Out:"Sign_Out",Sign_In_With_Error:"Sign_In_With_Error"},R={currentUser:null,error:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.Sign_Out:return Object(J.a)(Object(J.a)({},e),{},{currentUser:null,tasks:null,error:null});case F.SIGN_IN:return{currentUser:t.payload,error:null};case F.Sign_In_With_Error:return{currentUser:null,error:t.payload};default:return e}},z={key:"root",storage:U.a,whitelist:[]},H=Object(I.c)({tasks:G,user:K}),X=Object(_.a)(z,H),q=Object(y.a)(),M=[q];var Q=Object(I.e)(X,I.a.apply(void 0,M));q.run(L);var V=Object(_.b)(Q);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u.a,{store:V,children:Object(a.jsx)(S,{})})}),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.787364ab.chunk.js.map