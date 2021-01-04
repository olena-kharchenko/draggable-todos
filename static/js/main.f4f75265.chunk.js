(this["webpackJsonpdraggable-todos"]=this["webpackJsonpdraggable-todos"]||[]).push([[0],{14:function(e,t,n){e.exports={TodoEditor:"TodoEditor_TodoEditor__5QU9p",textarea:"TodoEditor_textarea__JdhMt",button:"TodoEditor_button__3l-Sd"}},17:function(e,t,n){e.exports={backdrop:"Modal_backdrop__1wuQF",content:"Modal_content__QAhEA"}},23:function(e,t,n){e.exports={container:"Container_container__3g3FW"}},24:function(e){e.exports=JSON.parse('[{"id":"id-1","text":"HTML","completed":false},{"id":"id-2","text":"CSS","completed":true},{"id":"id-3","text":"javascript","completed":false},{"id":"id-4","text":"async/await","completed":false},{"id":"id-5","text":"react components","completed":false},{"id":"id-6","text":"hooks","completed":false},{"id":"id-7","text":"redux","completed":false}]')},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(1),a=n.n(o),r=n(11),i=n.n(r),d=n(7),s=n(3),l=n(5),u=n(18),b=n.n(u),j=n(13),f=n(12),O=n(14),x=n.n(O);var m=function(e){var t=e.onSubmit,n=Object(o.useState)(""),a=Object(l.a)(n,2),r=a[0],i=a[1];return Object(c.jsxs)("form",{className:x.a.TodoEditor,onSubmit:function(e){t(r),i("")},children:[Object(c.jsx)("textarea",{autoFocus:!0,className:x.a.textarea,value:r,onChange:function(e){return i(e.currentTarget.value)}}),Object(c.jsx)("button",{type:"submit",className:x.a.button,"aria-label":"save",children:Object(c.jsx)(f.a,{})})]})},p=n(25),h=n(19),g=n.n(h),_=n(20),v=n(15),S=n(22),E=n(9),N=n.n(E),w=function(e,t,n,c,o){return function(a){return t&&a===n?{y:100*c+o,scale:1.1,zIndex:"1",shadow:15,immediate:function(e){return"y"===e||"zIndex"===e}}:{y:100*e.indexOf(a),scale:1,zIndex:"0",shadow:1,immediate:!1}}};function T(e){var t=e.todos,n=e.onToggleCompleted,a=e.onDeleteTodo,r=t.map((function(e){return e.text})),i=Object(o.useRef)(r.map((function(e,t){return t}))),u=Object(v.c)(r.length,w(i.current)),b=Object(l.a)(u,2),O=b[0],x=b[1],m=Object(_.a)((function(e){var t=Object(l.a)(e.args,1)[0],n=e.down,c=Object(l.a)(e.delta,2)[1],o=i.current.indexOf(t),a=Object(p.a)(Math.round((100*o+c)/100),0,r.length-1),d=g()(i.current,o,a);x(w(d,n,t,o,c)),n||(i.current=d)}));return Object(o.useEffect)((function(){i.current=[].concat(Object(s.a)(i.current),[i.current.length])}),[t]),Object(c.jsx)("div",{className:N.a.content,style:{height:100*r.length},children:O.map((function(e,i){var s=e.zIndex,l=e.shadow,u=e.y,b=e.scale;return Object(c.jsx)("div",{className:N.a.item,children:Object(o.createElement)(v.a.div,Object(d.a)(Object(d.a)({},m(i)),{},{key:i,style:{zIndex:s,boxShadow:l.interpolate((function(e){return"rgba(0, 0, 0, 0.15) 0px ".concat(e,"px ").concat(2*e,"px 0px")})),transform:Object(v.b)([u,b],(function(e,t){return"translate3d(0,".concat(e,"px,0) scale(").concat(t,")")}))},children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:t[i].completed?"done":null,children:r[i]}),Object(c.jsx)("button",{className:N.a.buttonDone,onClick:function(){return n(t[i].id)},"aria-label":"todo done",children:t[i].completed?Object(c.jsx)(S.a,{}):Object(c.jsx)(f.a,{})}),Object(c.jsx)("button",{className:N.a.buttonDelete,onClick:function(){return a(t[i].id)},"aria-label":"todo delete",children:Object(c.jsx)(j.b,{})})]})}))})}))})}var k=n(23),y=n.n(k),D=function(e){var t=e.children;return Object(c.jsx)("div",{className:y.a.container,children:t})},C=n(17),I=n.n(C),L=document.querySelector("#modal-root");function M(e){var t=e.onClose,n=e.children,a=function(e){"Escape"===e.code&&t()};Object(o.useEffect)((function(){return window.addEventListener("keydown",a),window.removeEventListener("keydown",a)}));return Object(r.createPortal)(Object(c.jsx)("div",{className:I.a.backdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(c.jsx)("div",{className:I.a.content,children:n})}),L)}var F=n(24);n(40);var J=function(){var e=Object(o.useState)(F),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(!1),i=Object(l.a)(r,2),u=i[0],f=i[1];Object(o.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&a(t)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var O=function(){f(!u)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("h1",{className:"title",children:"TODOS"}),Object(c.jsx)(j.a,{className:"add",onClick:O,"aria-label":"add todo"})]}),Object(c.jsxs)(D,{children:[Object(c.jsx)(T,{todos:n,onDeleteTodo:function(e){console.log(e),a(n.filter((function(t){return t.id!==e})))},onToggleCompleted:function(e){a(n.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))}}),u&&Object(c.jsx)(M,{onClose:O,children:Object(c.jsx)(m,{onSubmit:function(e){if(e){var t={id:b.a.generate(),text:e,completed:!1};a([t].concat(Object(s.a)(n)))}O()}})})]})]})};n(41);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={content:"DraggableList_content__R6iQF",item:"DraggableList_item__1OEHW",buttonDelete:"DraggableList_buttonDelete__Us7M8",buttonDone:"DraggableList_buttonDone__4ko6T"}}},[[42,1,2]]]);
//# sourceMappingURL=main.f4f75265.chunk.js.map