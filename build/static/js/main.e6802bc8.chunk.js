(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{63:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),s=n.n(r),i=n(22),o=n(8),u=n(7),d=n(102),l=n(101),j=n(51),h=n(100),b=n(103),m=n(1);var p=function(e){var t=e.handleNo,n=e.handleYes,c=e.show,a=e.name;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{animation:!0,show:c,onHide:t,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsxs)(b.a.Title,{children:["Delete ",a]})}),Object(m.jsx)(b.a.Body,{children:"Are you sure you want to delete ?"}),Object(m.jsxs)(b.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:t,children:"No"}),Object(m.jsx)(h.a,{variant:"primary",onClick:n,children:"Yes"})]})]})})},O=n.p+"static/media/no-image.92588243.png";n(63);var x=function(e){var t=e.item,n=e.onDelete,c=a.a.useState(!1),r=Object(u.a)(c,2),s=r[0],o=r[1],d=t.id,b=t.name,x=t.imageUrl,f=t.count,v=t.info,g=function(){o(!s)};return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)(p,{show:s,handleNo:function(){return o(!1)},handleYes:function(){g(),n(d)},name:b}),Object(m.jsxs)("div",{className:"product__name",children:[b,Object(m.jsx)("div",{className:"product__del",onClick:g,children:"x"})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(j.a,{xs:12,md:5,children:Object(m.jsx)("div",{className:"product__image",children:Object(m.jsx)("img",{onError:function(e){e.target.src=O},src:x,alt:"product"})})}),Object(m.jsxs)(j.a,{xs:12,md:7,children:[Object(m.jsx)("div",{className:"product__info",children:v.length>70?v.substring(0,70)+" ...":v}),Object(m.jsxs)("div",{className:"product__count",children:[" In stock: ",f," pcs."]})]})]}),Object(m.jsx)("div",{className:"product__link",children:Object(m.jsx)(i.b,{to:"/product/".concat(d),children:Object(m.jsx)(h.a,{variant:"info",children:"More details..."})})})]})};n(67);var f=function(e){var t=e.order,n=e.changeType,c="desc"===t?"":"rotated";return Object(m.jsx)("div",{className:"sort-arrow unselectable-text",onClick:function(){n("asc"===t?"desc":"asc")},children:Object(m.jsx)("svg",{className:"arrow-svg ".concat(c),width:"14",height:"10",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})})})},v=(n(68),[{title:"Name",type:"name"},{title:"Quantity",type:"count"}]);var g=function(e){var t=e.onToggleSort,n=a.a.useState(0),c=Object(u.a)(n,2),r=c[0],s=c[1],i=a.a.useState("name"),o=Object(u.a)(i,2),d=o[0],l=o[1],j=a.a.useState("asc"),h=Object(u.a)(j,2),b=h[0],p=h[1];return Object(m.jsxs)("div",{className:"sort-filter",children:[Object(m.jsx)(f,{order:b,changeType:function(e){p(e),t(d,e)}}),Object(m.jsx)("span",{children:"Sort by:"}),Object(m.jsx)("ul",{children:v&&v.map((function(e,n){return Object(m.jsxs)("li",{className:r===n?"sort-active":"",onClick:function(){!function(e,n){s(e),l(n),t(n,b)}(n,e.type)},children:[" ",e.title]},"".concat(e.title,"_").concat(n))}))})]})},w=n(105),y=n(104);var C=function(e){var t=e.details,n=t.show,c=t.handleNo,r=t.handleSubmit,s=t.action,i=t.item,o=a.a.useState(!1),d=Object(u.a)(o,2),l=d[0],p=d[1],O=a.a.useState(i?i.name:""),x=Object(u.a)(O,2),f=x[0],v=x[1],g=a.a.useState(i?i.imageUrl:""),C=Object(u.a)(g,2),N=C[0],_=C[1],S=a.a.useState(i?i.info:""),k=Object(u.a)(S,2),I=k[0],B=k[1],P=a.a.useState(i?i.size.height:""),E=Object(u.a)(P,2),G=E[0],H=E[1],L=a.a.useState(i?i.size.width:""),D=Object(u.a)(L,2),U=D[0],T=D[1],W=a.a.useState(i?i.weight:""),A=Object(u.a)(W,2),z=A[0],F=A[1],M=a.a.useState(i?i.count:""),R=Object(u.a)(M,2),Y=R[0],J=R[1],Q=function(){c(),p(!1)},Z=function(){v(""),_(""),B(""),F(""),T(""),H(""),J("")},q="create"===s?"Create New ":"Edit ";return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{animation:!0,show:n,onHide:Q,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsxs)(b.a.Title,{children:[q," Product"]})}),l&&Object(m.jsx)(w.a,{className:"m-2",variant:"danger",children:"Error! Some fields are empty"}),Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)(y.a,{children:[Object(m.jsxs)(y.a.Row,{children:[Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridName",children:[Object(m.jsx)(y.a.Label,{children:"Name"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Enter product name",value:f})]}),Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridImage",children:[Object(m.jsx)(y.a.Label,{children:"Image Url"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return _(e.target.value)},value:N,type:"text",placeholder:"Enter image url"})]})]}),Object(m.jsxs)(y.a.Group,{controlId:"formGridDesc",children:[Object(m.jsx)(y.a.Label,{children:"Description"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return B(e.target.value)},value:I,placeholder:"Enter product description"})]}),Object(m.jsxs)(y.a.Row,{children:[Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridHeight",children:[Object(m.jsx)(y.a.Label,{children:"Height"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return H(e.target.value)},value:G,placeholder:"Height"})]}),Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridWidth",children:[Object(m.jsx)(y.a.Label,{children:"Width"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return T(e.target.value)},value:U,placeholder:"Width"})]}),Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridWeight",children:[Object(m.jsx)(y.a.Label,{children:"Weight"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return F(e.target.value)},value:z,placeholder:"Weight"})]}),Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridCount",children:[Object(m.jsx)(y.a.Label,{children:"Count"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return J(e.target.value)},value:Y,placeholder:"Count"})]})]}),Object(m.jsx)(h.a,{variant:"secondary",onClick:Q,children:"Cancel"}),Object(m.jsx)(h.a,{className:"m-2",variant:"primary",type:"button",onClick:function(e){e.preventDefault();var t={name:f,imageUrl:N,weight:z,count:Y,info:I,size:{height:G,width:U},comments:i?i.comments:[]};f&&N&&z&&Y&&I&&G&&U?(!i&&Z(),c(),r(t)):p(!0)},children:"edit"===s?"Save":"Create"})]})})]})})},N=n(106);var _=function(e){var t=e.details,n=t.show,c=t.handleNo,r=t.handleSubmit,s=a.a.useState(""),i=Object(u.a)(s,2),o=i[0],d=i[1],l=a.a.useState(!1),p=Object(u.a)(l,2),O=p[0],x=p[1],f=function(){d("")},v=function(){c(),x(!1)},g=function(){var e=new Date,t=e.toJSON().slice(0,10).replace(/-/g,"/"),n=(e.getMinutes()<10?"0":"")+e.getMinutes(),c=e.getHours()+":"+n+":"+e.getSeconds();return"".concat(t," - ").concat(c)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{animation:!0,show:n,onHide:v,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsx)(b.a.Title,{children:"Create New Comment"})}),O&&Object(m.jsx)(w.a,{className:"m-2",variant:"danger",children:"Error! Text field is empty!"}),Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(y.a.Row,{children:Object(m.jsxs)(y.a.Group,{as:j.a,controlId:"formGridImage",children:[Object(m.jsx)(y.a.Label,{children:"Text"}),Object(m.jsx)(y.a.Control,{onChange:function(e){return d(e.target.value)},value:o,type:"text",placeholder:"Please, enter your text here"})]})}),Object(m.jsx)(h.a,{variant:"secondary",onClick:v,children:"Cancel"}),Object(m.jsx)(h.a,{className:"m-2",variant:"primary",type:"button",onClick:function(e){e.preventDefault();var t={id:Object(N.a)(),text:o,date:g()};o?(f(),c(),r(t)):x(!0)},children:"Create"})]})})]})})};var S=function(e){var t="product"===e.type?Object(m.jsx)(C,{details:e}):Object(m.jsx)(_,{details:e});return Object(m.jsx)("div",{children:t})};n(70);var k=function(e){var t=e.nameBtn,n=e.type,c=e.action,r=e.handleSubmit,s=e.item,i=a.a.useState(!1),o=Object(u.a)(i,2),d=o[0],l=o[1],j=function(){l(!d)};return Object(m.jsxs)("div",{className:"btn-create-element",children:[Object(m.jsx)(S,{show:d,handleNo:function(){return l(!1)},handleYes:function(){j()},type:n,action:c,handleSubmit:r,item:s}),Object(m.jsx)(h.a,{variant:"edit"===c?"success":"primary",onClick:j,children:t})]})};n(71);var I=function(){return Object(m.jsx)("div",{className:"loader",children:"Loading..."})},B=n(9),P=n.n(B),E=n(18),G=n(31),H=n(25),L=n.n(H),D=new function e(){var t=this;Object(G.a)(this,e),this._baseUrl="https://608298915dbd2c0017579fcc.mockapi.io/api/v1/",this.getResource=function(){var e=Object(E.a)(P.a.mark((function e(n,c,a){var r,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(t._baseUrl).concat(a),{params:{sortBy:n,order:c}});case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),this.getProducts=function(){var e=Object(E.a)(P.a.mark((function e(n,c){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getResource(n,c,"products"),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getProductById=function(){var e=Object(E.a)(P.a.mark((function e(n){var c,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(t._baseUrl,"products/").concat(n));case 2:return c=e.sent,a=c.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.addProduct=function(){var e=Object(E.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("".concat(t._baseUrl,"products/"),n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delProductById=function(){var e=Object(E.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete("".concat(t._baseUrl,"products/").concat(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateProductById=function(){var e=Object(E.a)(P.a.mark((function e(n,c){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.put("".concat(t._baseUrl,"products/").concat(n),c);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};n(91);var U=function(){var e=a.a.useState(null),t=Object(u.a)(e,2),n=t[0],c=t[1],r=a.a.useState(!0),s=Object(u.a)(r,2),i=s[0],o=s[1];a.a.useEffect((function(){l()}),[]);var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"name",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";o(!0),D.getProducts(e,t).then((function(e){o(!1),c(e)}))},j=function(e){D.delProductById(e).then((function(e){l()}))};return Object(m.jsx)(d.a,{children:Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsx)(g,{onToggleSort:function(e,t){l(e,t)}}),Object(m.jsx)(k,{nameBtn:"+Add Product",type:"product",action:"create",handleSubmit:function(e){o(!0),D.addProduct(e).then((function(e){o(!1),l()}))}}),i?Object(m.jsx)(I,{}):n&&n.map((function(e){return Object(m.jsx)(x,{item:e,onDelete:j},e.id)}))]})})};n(92);var T=function(){var e=Object(o.f)();return Object(m.jsx)("div",{className:"back-arrow",onClick:function(){return e.goBack()},children:Object(m.jsx)("svg",{viewBox:"0 0 24 24",children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{className:"arrow-icon",d:"M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"})})})})};n(93);var W=function(e){var t=e.item,n=e.onDelete,c=t.id,r=t.text,s=t.date,i=a.a.useState(!1),o=Object(u.a)(i,2),d=o[0],l=o[1],j=function(){l(!d)};return Object(m.jsxs)("div",{className:"comment",children:[Object(m.jsx)(p,{show:d,handleNo:function(){return l(!1)},handleYes:function(){j(),n(c)},name:"comment"}),Object(m.jsx)("div",{className:"comment__del",onClick:j,children:"x"}),Object(m.jsx)("p",{children:r}),Object(m.jsx)("div",{className:"comment__bottom",children:Object(m.jsxs)("span",{children:["Created at: ",s]})})]},c)};n(94);var A=function(e){var t=e.updateAllComments,n=e.commentsList,c=e.product,a=function(e){var n=c.comments.filter((function(t){return t.id!==e}));c.comments=n,t(c)},r=Object(m.jsx)("p",{className:"empty-list",children:" No comments to display "}),s=Object.keys(n).length?n.map((function(e){return Object(m.jsx)(W,{item:e,onDelete:a},e.id)})):r;return Object(m.jsxs)("div",{className:"comments-list",children:[Object(m.jsx)("h4",{children:"Comments:"}),Object(m.jsx)(k,{nameBtn:"+Add comment",type:"comment",handleSubmit:function(e){c.comments.push(e),t(c)}}),s]})};n(95);var z=function(e){var t=e.item,n=e.defImg,c=e.updateProduct,r=t.name,s=t.imageUrl,i=t.weight,o=t.count,u=t.size,d=t.info;return Object(m.jsx)(a.a.Fragment,{children:Object(m.jsxs)("div",{className:"product-details",children:[Object(m.jsxs)("div",{className:"product-details__name",children:[Object(m.jsx)(T,{}),Object(m.jsx)("p",{children:r}),Object(m.jsx)(k,{nameBtn:"Edit",action:"edit",type:"product",item:t,handleSubmit:c})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(j.a,{xs:12,md:6,children:Object(m.jsx)("div",{className:"product-details__img",children:Object(m.jsx)("img",{onError:n,src:s,alt:"product-poster"})})}),Object(m.jsxs)(j.a,{xs:12,md:6,children:[Object(m.jsx)("div",{className:"product-details__info",children:d}),Object(m.jsxs)("div",{className:"product-details__options",children:[Object(m.jsxs)("div",{className:"option options__size",children:[Object(m.jsxs)("span",{children:["Height: ",u.height]}),Object(m.jsxs)("span",{children:["Width: ",u.width]})]}),Object(m.jsx)("div",{className:"option options__weight",children:Object(m.jsxs)("span",{children:["Weight: ",i]})}),Object(m.jsx)("div",{className:"option options__count",children:Object(m.jsxs)("span",{children:["In stock: ",o," pcs."]})})]})]})]})]})})},F=function(e){var t=e.itemId,n=a.a.useState(null),c=Object(u.a)(n,2),r=c[0],s=c[1],i=a.a.useState(!0),o=Object(u.a)(i,2),l=o[0],j=o[1];a.a.useEffect((function(){D.getProductById(t).then((function(e){s(e),j(!1)}))}),[t]);var h=function(){var e=Object(E.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.updateProductById(t,n).then((function(e){var t=e.data;s(t),j(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(E.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!0),h(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(E.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(d.a,{children:Object(m.jsxs)("div",{className:"content-wrapper",children:[l?Object(m.jsx)(I,{}):r&&Object(m.jsx)(z,{item:r,defImg:function(e){e.target.src=O},updateProduct:b}),r&&Object(m.jsx)(A,{commentsList:r.comments,product:r,updateProduct:h,updateAllComments:p})]})})};var M=function(){return Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{className:"content-wrapper",children:Object(m.jsx)("h4",{className:"m-4",children:"Page not found"})})})};n(96);var R=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:U}),Object(m.jsx)(o.a,{path:"/product/:id",render:function(e){var t=e.match;return Object(m.jsx)(F,{itemId:t.params.id})}}),Object(m.jsx)(o.a,{path:"*",component:M})]})})},Y=Object(o.g)((function(e){var t=e.children,n=e.location.pathname;return Object(c.useEffect)((function(){window.scrollTo({top:-50,left:0})}),[n]),t||null})),J=n(53),Q=n(55),Z=n(54),q=function(e){Object(Q.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(J.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)(M,{}):this.props.children}}]),n}(c.Component);s.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(q,{children:Object(m.jsx)(Y,{children:Object(m.jsx)(R,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.e6802bc8.chunk.js.map