(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{38:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(14),a=c.n(s),i=c(15),o=c(29),j=c(13),d=c(53),u=c(54),l=c(57),h=c(56),b=c(1);var x=function(e){var t=e.handleNo,c=e.handleYes,n=e.show,r=e.name;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(h.a,{animation:!1,show:n,onHide:t,children:[Object(b.jsx)(h.a.Header,{closeButton:!0,children:Object(b.jsx)(h.a.Title,{children:"\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"})}),Object(b.jsxs)(h.a.Body,{children:["\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 ",Object(b.jsxs)("b",{children:['"',r,'"']}),"?"]}),Object(b.jsxs)(h.a.Footer,{children:[Object(b.jsx)(l.a,{variant:"secondary",onClick:t,children:"\u041d\u0456"}),Object(b.jsx)(l.a,{variant:"primary",onClick:c,children:"\u0422\u0430\u043a"})]})]})})};c(38);var p=function(e){var t=e.item,c=e.onDelete,n=t.id,s=t.name,a=t.imageUrl,o=t.count,h=t.info,p=r.a.useState(!1),O=Object(j.a)(p,2),m=O[0],f=O[1];return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsx)(x,{show:m,handleNo:function(){return f(!1)},handleYes:function(){f(!1),c(n)},name:s}),Object(b.jsxs)("div",{className:"product__name",children:[s,Object(b.jsx)("div",{className:"product__del",onClick:function(){return f(!0)},children:"x"})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{xs:12,md:5,children:Object(b.jsx)("div",{className:"product__image",children:Object(b.jsx)("img",{src:a,alt:"product"})})}),Object(b.jsxs)(u.a,{xs:12,md:7,children:[Object(b.jsxs)("div",{className:"product__info",children:[" ",h," "]}),Object(b.jsxs)("div",{className:"product__count",children:[" \u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456: ",o," \u0448\u0442."]})]})]}),Object(b.jsx)("div",{className:"product__link",children:Object(b.jsx)(i.b,{to:"/".concat(n),children:Object(b.jsx)(l.a,{variant:"info",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435..."})})})]})},O=(c(42),[{title:"\u0406\u043c\u0435\u043d\u0456",type:"name"},{title:"\u041d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",type:"count"}]);var m=function(e){var t=e.onToggleSort,c=r.a.useState(null),n=Object(j.a)(c,2),s=n[0],a=n[1];return Object(b.jsxs)("div",{className:"sort-filter",children:[Object(b.jsx)("span",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"}),Object(b.jsx)("ul",{children:O&&O.map((function(e,c){return Object(b.jsxs)("li",{className:s===c?"sort-active":"",onClick:function(){!function(e,c){a(e),t(c)}(c,e.type)},children:[" ",e.title]},"".concat(e.title,"_").concat(c))}))})]})};c(43);var f=c(55);c(44);var v=function(){return Object(b.jsx)("div",{className:"loader",children:"Loading..."})},_=c(12),N=c.n(_),g=c(16),w=c(28),k=function e(){var t=this;Object(w.a)(this,e),this._baseUrl="https://608298915dbd2c0017579fcc.mockapi.io/api/v1/",this.getResource=function(){var e=Object(g.a)(N.a.mark((function e(c){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._baseUrl).concat(c));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(c,", received ").concat(n.status));case 5:return r=n.json(),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delResource=function(){var e=Object(g.a)(N.a.mark((function e(t){var c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://608298915dbd2c0017579fcc.mockapi.io/api/v1/"+t,{method:"DELETE"});case 2:return c=e.sent,n=c.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getProducts=Object(g.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("products");case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)}))),this.getProductById=function(){var e=Object(g.a)(N.a.mark((function e(c){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("products/".concat(c));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delProductById=function(){var e=Object(g.a)(N.a.mark((function e(c){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.delResource("products/".concat(c));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=(c(46),new k);var B=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),c=t[0],n=t[1],s=r.a.useState(!0),a=Object(j.a)(s,2),i=a[0],d=a[1];r.a.useEffect((function(){u()}),[]);var u=function(){y.getProducts().then((function(e){n(e),d(!1)}))},l=function(e){d(!0),y.delProductById(e).then((function(e){u()}))};return Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"content-wrapper",children:[Object(b.jsx)(m,{onToggleSort:function(e){var t=Object(o.a)(c);t.sort((function(t,c){return t[e]<c[e]?-1:t[e]<c[e]?1:void 0})),n(t)}}),i?Object(b.jsx)(v,{}):c.map((function(e){return Object(b.jsx)(p,{item:e,onDelete:l},e.id)}))]})})},S=c(6);c(47);var E=function(){var e=Object(S.f)();return Object(b.jsx)("div",{className:"back-arrow",onClick:function(){return e.goBack()},children:Object(b.jsx)("svg",{viewBox:"0 0 24 24",children:Object(b.jsx)("g",{children:Object(b.jsx)("path",{className:"arrow-icon",d:"M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"})})})})};c(48);var I=function(e){var t=e.comments;return Object(b.jsxs)("div",{className:"comments-list",children:[Object(b.jsx)("h4",{children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456"}),t.length>0?t.map((function(e){return Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsx)("div",{className:"comment__del",children:"x"}),Object(b.jsx)("p",{children:e.text}),Object(b.jsxs)("div",{className:"comment__bottom",children:[Object(b.jsx)("span",{children:"\u0414\u0430\u0442\u0430:"})," ",e.date]})]},e.id)})):Object(b.jsx)("p",{className:"empty-list",children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 :( "})]})};c(49);var C=function(e){var t=e.item;return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)("div",{className:"product-details",children:[Object(b.jsxs)("div",{className:"product-details__name",children:[Object(b.jsx)(E,{}),Object(b.jsx)("p",{children:t.name})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{xs:12,md:6,children:Object(b.jsx)("div",{className:"product-details__img",children:Object(b.jsx)("img",{src:t.imageUrl,alt:"product-poster"})})}),Object(b.jsxs)(u.a,{xs:12,md:6,children:[Object(b.jsx)("div",{className:"product-details__info",children:t.info}),Object(b.jsxs)("div",{className:"product-details__options",children:[Object(b.jsxs)("div",{className:"options options__size",children:[Object(b.jsxs)("span",{children:["\u0412\u0438\u0441\u043e\u0442\u0430: ",t.size.height]}),Object(b.jsxs)("span",{children:["\u0428\u0438\u0440\u0438\u043d\u0430: ",t.size.width]})]}),Object(b.jsx)("div",{className:"options options__weight",children:Object(b.jsxs)("span",{children:["\u0412\u0430\u0433\u0430: ",t.weight]})}),Object(b.jsx)("div",{className:"options options__count",children:Object(b.jsxs)("span",{children:["\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456: ",t.count," \u0448\u0442."]})})]})]})]})]})})},P=function(e){var t=e.itemId,c=r.a.useState(null),n=Object(j.a)(c,2),s=n[0],a=n[1];return r.a.useEffect((function(){(new k).getProductById(t).then((function(e){a(e)}))}),[t]),Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"content-wrapper",children:[s?Object(b.jsx)(C,{item:s}):Object(b.jsx)(v,{}),s&&Object(b.jsx)(I,{comments:s.comments})]})})};c(50);var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(S.c,{children:[Object(b.jsx)(S.a,{path:"/",exact:!0,component:B}),Object(b.jsx)(S.a,{path:"/:id",render:function(e){var t=e.match;return Object(b.jsx)(P,{itemId:t.params.id,exact:!0})}})]})})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e6c721fb.chunk.js.map