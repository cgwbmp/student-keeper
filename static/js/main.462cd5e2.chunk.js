(this["webpackJsonpstudent-keeper"]=this["webpackJsonpstudent-keeper"]||[]).push([[0],{1:function(e,t,a){e.exports={form:"form_form__2tOhh",form__field:"form_form__field__1uD6z","form__field-label":"form_form__field-label__tOGeR","form__field-input":"form_form__field-input__2atJH","form__field-radio":"form_form__field-radio__3FAKQ",form__button:"form_form__button__1hsuh","form__button--secondary":"form_form__button--secondary__32UGV"}},20:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"add",(function(){return s})),a.d(r,"remove",(function(){return _})),a.d(r,"save",(function(){return b}));var n={};a.r(n),a.d(n,"startEditStudent",(function(){return S})),a.d(n,"endEditStudent",(function(){return k})),a.d(n,"startAddNewStudent",(function(){return P})),a.d(n,"endAddNewStudent",(function(){return g}));var o=a(0),c=a.n(o),l=a(10),u=a.n(l),i=a(5),d=a(3),m=a(9),f=a(19),s=function(e,t){return[].concat(Object(f.a)(e),[t.payload])},_=function(e,t){return e.filter((function(e){return e.id!==t.payload}))},b=function(e,t){var a=t.payload;return e.map((function(e){return e.id===a.id?a:e}))},y="students",p=Object(m.b)({initialState:[],reducers:r,slice:y}),O=p.actions,h=p.reducer,E=function(e){return function(e){return e}(e[y])},j=h,v={showEditFormForStudents:{},showFormForNewStudent:!1};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e,t){var a=t.payload;return w({},e,{showEditFormForStudents:w({},e.showEditFormForStudents,Object(d.a)({},a,!0))})},k=function(e,t){var a=t.payload;return w({},e,{showEditFormForStudents:w({},e.showEditFormForStudents,Object(d.a)({},a,!1))})},P=function(e){return w({},e,{showFormForNewStudent:!0})},g=function(e){return w({},e,{showFormForNewStudent:!1})},F=Object(m.b)({initialState:v,reducers:n,slice:"ui"}),C=F.actions,D=F.reducer,A=function(e,t){return function(e,t){return e.showEditFormForStudents[t]}(e.ui,t)},x=function(e){return function(e){return e.showFormForNewStudent}(e.ui)},G=D,J=window&&!!window.localStorage;var W,I="students";function B(e){return t=I,a=e,void(J&&localStorage.setItem(t,JSON.stringify(a)));var t,a}var K,V=function(e){if(!J)return null;var t=localStorage.getItem(e);return t?JSON.parse(t):null}(I)||[],Q=Object(m.a)({reducer:(W={},Object(d.a)(W,y,j),Object(d.a)(W,"ui",G),W),preloadedState:Object(d.a)({},y,V)});Q.subscribe((function(){var e=K;(K=Q.getState()[y])!==e&&B(K)}));var Z,q=Q,z=a(8),H=a.n(z),L=function(e){var t=e.children,a=e.onClickAdd;return c.a.createElement("div",{className:H.a.layout},c.a.createElement("header",{className:H.a.layout__header},c.a.createElement("h1",{className:H.a.layout__title},"Students")),c.a.createElement("section",{className:H.a.layout__body},t),c.a.createElement("footer",{className:H.a.layout__footer},c.a.createElement("button",{className:H.a.layout__button,type:"button",onClick:a},"Add student")))},M=a(14);!function(e){e[e.Poor=1]="Poor",e[e.Fair=2]="Fair",e[e.Good=3]="Good",e[e.VeryGood=4]="VeryGood",e[e.Excellent=5]="Excellent"}(Z||(Z={}));var R=a(1),U=a.n(R);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var $={fullName:"",birthday:"",academicPerformance:0},T=function(e){var t,a,r=e.data,n=void 0===r?$:r,l=e.onCancel,u=e.onCreate,i=e.onSave,m="id"in n,f=Object(o.useState)(n),s=Object(M.a)(f,2),_=s[0],b=s[1],y=Object(o.useState)(!0),p=Object(M.a)(y,2),O=p[0],h=p[1],E=Object(o.useCallback)((function(e){if(e.preventDefault(),!O){var t={id:"id"in n?n.id:Math.random().toString(),fullName:_.fullName,birthday:_.birthday,academicPerformance:_.academicPerformance};b($),m?i&&i(t):u&&u(t)}}),[_,n,m,O,u,i]),j=Object(o.useCallback)((function(e){var t=e.target,a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},_,Object(d.a)({},t.name,"academicPerformance"===t.name?Number(t.value):t.value));b(a),a.fullName&&a.birthday?h(!1):h(!0)}),[_]),v=Object(o.useCallback)((function(){l&&l("id"in n?n.id:void 0)}),[n,l]);return c.a.createElement("form",{className:U.a.form,name:"student",onSubmit:E},c.a.createElement("label",{className:U.a.form__field,htmlFor:"student-fullName"},c.a.createElement("span",{className:U.a["form__field-label"]},"Full Name"),c.a.createElement("input",{className:U.a["form__field-input"],id:"student-fullName",name:"fullName",value:_.fullName,onChange:j})),c.a.createElement("label",{className:U.a.form__field,htmlFor:"student-name"},c.a.createElement("span",{className:U.a["form__field-label"]},"Birthday"),c.a.createElement("input",{className:U.a["form__field-input"],id:"student-birthday",name:"birthday",value:_.birthday,type:"date",onChange:j})),c.a.createElement("fieldset",{className:U.a.form__field},c.a.createElement("span",{className:U.a["form__field-label"]},"Academic Performance"),(t=Z,a=function(e,t){return c.a.createElement("label",{className:U.a["form__field-radio"],htmlFor:"student-academicPerformance-".concat(t),key:t},c.a.createElement("input",{className:U.a["form__field-radio-input"],id:"student-academicPerformance-".concat(t),name:"academicPerformance",value:e,checked:_.academicPerformance===e,type:"radio",onChange:j}),t)},Object.keys(t).filter((function(e){return"number"===typeof t[e]})).map((function(e){return a(t[e],e)})))),c.a.createElement("footer",{className:U.a.form__footer},c.a.createElement("button",{className:U.a.form__button,type:"submit",disabled:O},m?"Save":"Add"),c.a.createElement("button",{className:[U.a.form__button,U.a["form__button--secondary"]].join(" "),type:"button",onClick:v},"Cancel")))},Y=a(6),ee=a.n(Y),te=function(e){var t=e.id,a=e.fullName,r=e.birthday,n=e.academicPerformance,l=e.onEdit,u=e.onDelete,i=Object(o.useCallback)((function(){l&&l(t)}),[t,l]),d=Object(o.useCallback)((function(){u&&u(t)}),[t,u]);return c.a.createElement("div",{className:ee.a.card},c.a.createElement("h4",{className:ee.a.card__title},a,n?c.a.createElement("span",{className:ee.a.card__score},"\u2605 ".concat(n)):null),c.a.createElement("p",{className:ee.a.card__info},r),c.a.createElement("button",{className:ee.a.card__button,type:"button",onClick:i},"Edit"),c.a.createElement("span",{className:ee.a.card__sep},"|"),c.a.createElement("button",{className:ee.a.card__button,type:"button",onClick:d},"Delete"))},ae=function(e){var t=e.id,a=e.fullName,r=e.birthday,n=e.academicPerformance,l=Object(i.c)((function(e){return A(e,t)})),u=Object(i.b)(),d=Object(o.useCallback)((function(e){u(C.startEditStudent(e))}),[u]),m=Object(o.useCallback)((function(e){e&&u(C.endEditStudent(e))}),[u]),f=Object(o.useCallback)((function(e){u(C.endEditStudent(e.id)),u(O.save(e))}),[u]),s=Object(o.useCallback)((function(e){u(O.remove(e))}),[u]);return l?c.a.createElement(T,{key:t,data:e,onSave:f,onCancel:m}):c.a.createElement(te,{key:t,id:t,fullName:a,birthday:r,academicPerformance:n,onEdit:d,onDelete:s})},re=(a(33),function(){var e=Object(i.c)(E),t=Object(i.c)(x),a=Object(i.b)(),r=Object(o.useCallback)((function(){a(C.startAddNewStudent())}),[a]),n=Object(o.useCallback)((function(e){a(C.endAddNewStudent()),a(O.add(e))}),[a]),l=Object(o.useCallback)((function(){a(C.endAddNewStudent())}),[a]);return c.a.createElement(L,{onClickAdd:r},e.map((function(e){return c.a.createElement(ae,{key:e.id,id:e.id,fullName:e.fullName,birthday:e.birthday,academicPerformance:e.academicPerformance})})),t?c.a.createElement(T,{onCreate:n,onCancel:l}):null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(i.a,{store:q},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports={card:"card_card__1Kv0Z",in:"card_in__2wlpl",card__title:"card_card__title__3bmKQ",card__info:"card_card__info__Gtx1m",card__score:"card_card__score__X2kJi",card__button:"card_card__button__13Ibd",card__sep:"card_card__sep__1see-"}},8:function(e,t,a){e.exports={layout:"layout_layout__3gFW3",layout__header:"layout_layout__header__2lZ02",layout__title:"layout_layout__title__1q61j",layout__body:"layout_layout__body__3bm2t",layout__footer:"layout_layout__footer__2_vpW",layout__button:"layout_layout__button__DaWAL"}}},[[20,1,2]]]);
//# sourceMappingURL=main.462cd5e2.chunk.js.map