(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),s=n.n(a),i=n(23),o=n(8),d=n(7),l=n(152),u=n(151),j=n(72),h=n(150),b=n(153),m=n(1);var O=function(e){var t=e.handleNo,n=e.handleYes,c=e.show,r=e.name;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{animation:!0,show:c,onHide:t,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsxs)(b.a.Title,{children:["Delete ",r]})}),Object(m.jsx)(b.a.Body,{children:"Are you sure you want to delete ?"}),Object(m.jsxs)(b.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:t,children:"No"}),Object(m.jsx)(h.a,{variant:"primary",onClick:n,children:"Yes"})]})]})})},p=n.p+"static/media/no-image.92588243.png";n(87);var x=function(e){var t=e.item,n=e.onDelete,c=r.a.useState(!1),a=Object(d.a)(c,2),s=a[0],o=a[1],l=t.id,b=t.name,x=t.imageUrl,f=t.count,v=t.shortDesc,g=function(){o(!s)};return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)(O,{show:s,handleNo:function(){return o(!1)},handleYes:function(){g(),n(l)},name:b}),Object(m.jsxs)("div",{className:"product__name",children:[b,Object(m.jsx)("div",{className:"product__del",onClick:g,children:"x"})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(j.a,{xs:12,md:5,children:Object(m.jsx)("div",{className:"product__image",children:Object(m.jsx)("img",{onError:function(e){e.target.src=p},src:x,alt:"product"})})}),Object(m.jsxs)(j.a,{xs:12,md:7,children:[Object(m.jsx)("div",{className:"product__info",children:v}),Object(m.jsxs)("div",{className:"product__count",children:[" In stock: ",f," pcs."]})]})]}),Object(m.jsx)("div",{className:"product__link",children:Object(m.jsx)(i.b,{to:"/product/".concat(l),children:Object(m.jsx)(h.a,{variant:"info",children:"More details..."})})})]})};n(91);var f=function(e){var t=e.order,n=e.changeType,c="desc"===t?"":"rotated";return Object(m.jsx)("div",{className:"sort-arrow unselectable-text",onClick:function(){n("asc"===t?"desc":"asc")},children:Object(m.jsx)("svg",{className:"arrow-svg ".concat(c),width:"14",height:"10",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})})})},v=(n(92),[{title:"Name",type:"name"},{title:"Quantity",type:"count"}]);var g=function(e){var t=e.onToggleSort,n=r.a.useState(0),c=Object(d.a)(n,2),a=c[0],s=c[1],i=r.a.useState("name"),o=Object(d.a)(i,2),l=o[0],u=o[1],j=r.a.useState("asc"),h=Object(d.a)(j,2),b=h[0],O=h[1];return Object(m.jsxs)("div",{className:"sort-filter",children:[Object(m.jsx)(f,{order:b,changeType:function(e){O(e),t(l,e)}}),Object(m.jsx)("span",{children:"Sort by:"}),Object(m.jsx)("ul",{children:v&&v.map((function(e,n){return Object(m.jsxs)("li",{className:a===n?"sort-active":"",onClick:function(){!function(e,n){s(e),u(n),t(n,b)}(n,e.type)},children:[" ",e.title]},"".concat(e.title,"_").concat(n))}))})]})},w=n(34),C=n(21),y=n(74),N=n(75),_=n.n(N);var k=function(e){var t=e.content,n=e.onChangeInfo,r=Object(c.useState)(t),a=Object(d.a)(r,2),s=a[0],i=a[1],o=function(e,t){var c=t.getData();i(c),n("info",s)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"editor",children:Object(m.jsx)(y.CKEditor,{editor:_.a,data:s,config:{toolbar:["heading","|","bold","italic","link","numberedList","bulletedList","insertTable","tableColumn","tableRow","mergeTableCells","|","undo","redo"]},onChange:function(e,t){o(0,t)},onBlur:function(e,t){o(0,t)}})})})},S=n(155),I=n(154);var B=function(e){var t=e.details,n=t.show,c=t.handleNo,a=t.handleSubmit,s=t.action,i=t.item,o=r.a.useState(!1),l=Object(d.a)(o,2),u=l[0],O=l[1],p=r.a.useState(i?i.shortDesc.length:0),x=Object(d.a)(p,2),f=x[0],v=x[1],g=r.a.useState(i?Object(C.a)({},i):{name:"",imageUrl:"",count:0,info:"",shortDesc:"",height:0,width:0,weight:0,comments:[]}),y=Object(d.a)(g,2),N=y[0],_=y[1],B=function(e,t){"shortDesc"===e&&v(t.length),_(Object(C.a)(Object(C.a)({},N),{},Object(w.a)({},e,t)))},D=function(){c(),O(!1)},E=function(){var e=Object(C.a)({},N);for(var t in e)delete e[t];_(Object(C.a)({},e))},G=function(e){O(e)},L="create"===s?"Create New ":"Edit ";return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{size:"lg",animation:!0,show:n,onHide:D,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsxs)(b.a.Title,{children:[L," Product"]})}),u&&Object(m.jsx)(S.a,{className:"m-2",variant:"danger",children:u}),Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(I.a.Row,{children:[Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridName",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Name"})," "]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("name",e.target.value)},type:"text",placeholder:"Enter the product name",value:N.name})]}),Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridImage",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Image Url"})," "]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("imageUrl",e.target.value)},value:N.imageUrl,type:"text",placeholder:"Enter the image url"})]})]}),Object(m.jsxs)(I.a.Group,{controlId:"formGridDesc",children:[Object(m.jsx)(I.a.Label,{children:Object(m.jsxs)("b",{children:["Short description:",Object(m.jsxs)("span",{className:f>70?"text-danger":"",children:["(",f,")"]})]})}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("shortDesc",e.target.value)},value:N.shortDesc,placeholder:"Enter the short product description"})]}),Object(m.jsxs)(I.a.Group,{controlId:"formGridDesc",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:" Main description: "})," "]}),Object(m.jsx)(k,{onChangeInfo:B,content:N.info})]}),Object(m.jsxs)(I.a.Row,{children:[Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridHeight",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:" Height: "})]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("height",e.target.value)},value:N.height,placeholder:"Height"})]}),Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridWidth",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:" Width: "})]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("width",e.target.value)},value:N.width,placeholder:"Width"})]}),Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridWeight",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:" Weight: "})]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("weight",e.target.value)},value:N.weight,placeholder:"Weight"})]}),Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridCount",children:[Object(m.jsxs)(I.a.Label,{children:[" ",Object(m.jsx)("b",{children:" Count "})]}),Object(m.jsx)(I.a.Control,{onChange:function(e){return B("count",e.target.value)},value:N.count,placeholder:"Count"})]})]}),Object(m.jsx)(h.a,{variant:"secondary",onClick:D,children:"Cancel"}),Object(m.jsx)(h.a,{className:"m-2",variant:"primary",type:"button",onClick:function(e){e.preventDefault();var t=Object(C.a)(Object(C.a)({},N),{},{comments:i?i.comments:[]});for(var n in N)if(""===N[n])return void G("Error! Some fields are empty!");f>70?G("Error! Short description \n            must be shorter than 60 characters"):(!i&&E(),c(),a(t))},children:"edit"===s?"Save":"Create"})]})})]})})},D=n(156);var E=function(e){var t=e.details,n=t.show,c=t.handleNo,a=t.handleSubmit,s=r.a.useState(""),i=Object(d.a)(s,2),o=i[0],l=i[1],u=r.a.useState(!1),O=Object(d.a)(u,2),p=O[0],x=O[1],f=function(){l("")},v=function(){c(),x(!1)},g=function(){var e=new Date,t=e.toJSON().slice(0,10).replace(/-/g,"/"),n=(e.getMinutes()<10?"0":"")+e.getMinutes(),c=e.getHours()+":"+n+":"+e.getSeconds();return"".concat(t," - ").concat(c)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{animation:!0,show:n,onHide:v,children:[Object(m.jsx)(b.a.Header,{closeButton:!0,children:Object(m.jsx)(b.a.Title,{children:"Create New Comment"})}),p&&Object(m.jsx)(S.a,{className:"m-2",variant:"danger",children:"Error! Text field is empty!"}),Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)(I.a,{children:[Object(m.jsx)(I.a.Row,{children:Object(m.jsxs)(I.a.Group,{as:j.a,controlId:"formGridImage",children:[Object(m.jsx)(I.a.Label,{children:"Text"}),Object(m.jsx)(I.a.Control,{onChange:function(e){return l(e.target.value)},value:o,type:"text",placeholder:"Please, enter your text here"})]})}),Object(m.jsx)(h.a,{variant:"secondary",onClick:v,children:"Cancel"}),Object(m.jsx)(h.a,{className:"m-2",variant:"primary",type:"button",onClick:function(e){e.preventDefault();var t={id:Object(D.a)(),text:o,date:g()};o?(f(),c(),a(t)):x(!0)},children:"Create"})]})})]})})};var G=function(e){var t="product"===e.type?Object(m.jsx)(B,{details:e}):Object(m.jsx)(E,{details:e});return Object(m.jsx)("div",{children:t})};n(108);var L=function(e){var t=e.nameBtn,n=e.type,c=e.action,a=e.handleSubmit,s=e.item,i=r.a.useState(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],j=function(){u(!l)};return Object(m.jsxs)("div",{className:"btn-create-element",children:[Object(m.jsx)(G,{show:l,handleNo:function(){return u(!1)},handleYes:function(){j()},type:n,action:c,handleSubmit:a,item:s}),Object(m.jsx)(h.a,{variant:"edit"===c?"success":"primary",onClick:j,children:t})]})};n(109);var P=function(){return Object(m.jsx)("div",{className:"loader",children:"Loading..."})},H=n(9),T=n.n(H),U=n(18),A=n(35),M=n(26),W=n.n(M),R=new function e(){var t=this;Object(A.a)(this,e),this._baseUrl="https://608298915dbd2c0017579fcc.mockapi.io/api/v1/",this.getResource=function(){var e=Object(U.a)(T.a.mark((function e(n,c,r){var a,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(t._baseUrl).concat(r),{params:{sortBy:n,order:c}});case 2:return a=e.sent,s=a.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),this.getProducts=function(){var e=Object(U.a)(T.a.mark((function e(n,c){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getResource(n,c,"products"),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getProductById=function(){var e=Object(U.a)(T.a.mark((function e(n){var c,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(t._baseUrl,"products/").concat(n));case 2:return c=e.sent,r=c.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.addProduct=function(){var e=Object(U.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("".concat(t._baseUrl,"products/"),n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delProductById=function(){var e=Object(U.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.delete("".concat(t._baseUrl,"products/").concat(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateProductById=function(){var e=Object(U.a)(T.a.mark((function e(n,c){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.put("".concat(t._baseUrl,"products/").concat(n),c);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};n(128);var F=function(){var e=r.a.useState(null),t=Object(d.a)(e,2),n=t[0],c=t[1],a=r.a.useState(!0),s=Object(d.a)(a,2),i=s[0],o=s[1];r.a.useEffect((function(){u()}),[]);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"name",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";o(!0),R.getProducts(e,t).then((function(e){o(!1),c(e)}))},j=function(e){R.delProductById(e).then((function(e){u()}))};return Object(m.jsx)(l.a,{children:Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsx)(g,{onToggleSort:function(e,t){u(e,t)}}),Object(m.jsx)(L,{nameBtn:"+Add Product",type:"product",action:"create",handleSubmit:function(e){o(!0),R.addProduct(e).then((function(e){o(!1),u()}))}}),i?Object(m.jsx)(P,{}):n&&n.map((function(e){return Object(m.jsx)(x,{item:e,onDelete:j},e.id)}))]})})};n(129);var Y=function(){var e=Object(o.f)();return Object(m.jsx)("div",{className:"back-arrow",onClick:function(){return e.goBack()},children:Object(m.jsx)("svg",{viewBox:"0 0 24 24",children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{className:"arrow-icon",d:"M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"})})})})};n(130);var z=function(e){var t=e.item,n=e.onDelete,c=t.id,a=t.text,s=t.date,i=r.a.useState(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],j=function(){u(!l)};return Object(m.jsxs)("div",{className:"comment",children:[Object(m.jsx)(O,{show:l,handleNo:function(){return u(!1)},handleYes:function(){j(),n(c)},name:"comment"}),Object(m.jsx)("div",{className:"comment__del",onClick:j,children:"x"}),Object(m.jsx)("p",{children:a}),Object(m.jsx)("div",{className:"comment__bottom",children:Object(m.jsxs)("span",{children:["Created at: ",s]})})]},c)};n(131);var J=function(e){var t=e.updateAllComments,n=e.commentsList,c=e.product,r=function(e){var n=c.comments.filter((function(t){return t.id!==e}));c.comments=n,t(c)},a=Object(m.jsx)("p",{className:"empty-list",children:" No comments to display "}),s=Object.keys(n).length?n.map((function(e){return Object(m.jsx)(z,{item:e,onDelete:r},e.id)})):a;return Object(m.jsxs)("div",{className:"comments-list",children:[Object(m.jsx)("h4",{children:"Comments:"}),Object(m.jsx)(L,{nameBtn:"+Add comment",type:"comment",handleSubmit:function(e){c.comments.push(e),t(c)}}),s]})},K=n(76);n(145);var Q=function(e){var t=e.item,n=e.defImg,c=e.updateProduct,a=(e.createMarkup,t.name),s=t.imageUrl,i=t.weight,o=t.count,d=t.width,l=t.height,h=t.info;return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsxs)("div",{className:"product-details",children:[Object(m.jsxs)("div",{className:"product-details__name",children:[Object(m.jsx)(Y,{}),Object(m.jsx)("p",{children:a}),Object(m.jsx)(L,{nameBtn:"Edit",action:"edit",type:"product",item:t,handleSubmit:c})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(j.a,{xs:12,md:6,children:Object(m.jsx)("div",{className:"product-details__img",children:Object(m.jsx)("img",{onError:n,src:s,alt:"product-poster"})})}),Object(m.jsxs)(j.a,{xs:12,md:6,children:[Object(m.jsx)("div",{className:"product-details__info",children:Object(m.jsx)("div",{children:Object(K.a)(h)})}),Object(m.jsxs)("div",{className:"product-details__options",children:[Object(m.jsxs)("div",{className:"option options__size",children:[Object(m.jsxs)("span",{children:["Height: ",l," cm."]}),Object(m.jsxs)("span",{children:["Width: ",d," cm."]})]}),Object(m.jsx)("div",{className:"option options__weight",children:Object(m.jsxs)("span",{children:["Weight: ",i]})}),Object(m.jsx)("div",{className:"option options__count",children:Object(m.jsxs)("span",{children:["In stock: ",o," pcs."]})})]})]})]})]})})},Z=function(e){var t=e.itemId,n=r.a.useState(null),c=Object(d.a)(n,2),a=c[0],s=c[1],i=r.a.useState(!0),o=Object(d.a)(i,2),u=o[0],j=o[1];r.a.useEffect((function(){R.getProductById(t).then((function(e){s(e),j(!1)}))}),[t]);var h=function(){var e=Object(U.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.updateProductById(t,n).then((function(e){var t=e.data;s(t),j(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(U.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!0),h(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(U.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(l.a,{children:Object(m.jsxs)("div",{className:"content-wrapper",children:[u?Object(m.jsx)(P,{}):a&&Object(m.jsx)(Q,{item:a,defImg:function(e){e.target.src=p},updateProduct:b,createMarkup:function(e){return{__html:e}}}),a&&Object(m.jsx)(J,{commentsList:a.comments,product:a,updateProduct:h,updateAllComments:O})]})})};var q=function(){return Object(m.jsx)(l.a,{children:Object(m.jsx)("div",{className:"content-wrapper",children:Object(m.jsx)("h4",{className:"m-4",children:"Page not found"})})})};n(146);var V=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:F}),Object(m.jsx)(o.a,{path:"/product/:id",render:function(e){var t=e.match;return Object(m.jsx)(Z,{itemId:t.params.id})}}),Object(m.jsx)(o.a,{path:"*",component:q})]})})},X=Object(o.g)((function(e){var t=e.children,n=e.location.pathname;return Object(c.useEffect)((function(){window.scrollTo({top:-50,left:0})}),[n]),t||null})),$=n(77),ee=n(79),te=n(78),ne=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){var e;Object(A.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object($.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)(q,{}):this.props.children}}]),n}(c.Component);s.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(ne,{children:Object(m.jsx)(X,{children:Object(m.jsx)(V,{})})})}),document.getElementById("root"))},87:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.7c08344c.chunk.js.map