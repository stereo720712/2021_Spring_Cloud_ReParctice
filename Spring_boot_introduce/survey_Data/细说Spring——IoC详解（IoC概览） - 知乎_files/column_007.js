(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1366:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return F}));var a=c(40),n=c.n(a),o=c(1),i=c.n(o),s=c(6),l=c.n(s),r=c(539),d=c(531),u=c.n(d);var m={"淘宝":"taobao","天猫":"tmall","京东":"jingdong","京东自营":"jingdongSale","知乎":"zhihu","美团酒旅":"meituanhotel","苏宁":"suning","有赞":"youzan"},b=c(2),v=c.n(b),O=c(12),j=c(3),p={1:"正版保障 · 七天无理由退货",2:"正版保障 · 京东快递"},f=function(e){var t=e.className,c=e.style,a=e.id,n=e.skuId,i=e.imgUrl,s=e.title,r=e.price,d=void 0===r?0:r,u=e.source,b=e.productType,v=e.showBottomLine,f=void 0===v||v,h=e.abInfo,g=e.zaData,k=void 0===g?{}:g,C=e.onClick,N="¥ ".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=t.trimZero,a=void 0!==c&&c,n=String(e).padStart(2,"0").slice(-2);return a&&"00"===n?"".concat(Math.floor(e/100)):"".concat(Math.floor(e/100),".").concat(n)}(parseInt(d))),y=u,S=(h||{}).params;"zhihu"===m[u]&&7===b&&(y="知乎 · 纸书");var w=(null==S?void 0:S.length)>0&&"0"!==S[0].value&&"zhihu"===m[u]&&7===b;Object(o.useEffect)((function(){(null==k?void 0:k.showId)&&O.a.trackCardShow(null,{id:null==k?void 0:k.showId,path:[{module_name:"".concat(a,"_").concat(n,"_").concat(m[u])}]})}),[]);return Object(j.c)("div",{className:l()("GoodsItemCard",t),style:Object.assign({},c,{height:w?122:94}),onClick:function(){(null==k?void 0:k.clickId)&&O.a.trackEvent(null,{id:null==k?void 0:k.clickId,action:"OpenUrl",path:[{module_name:"".concat(a,"_").concat(n,"_").concat(m[u])}]}),"function"==typeof C&&C()}},Object(j.c)("div",{className:"GoodsItemCard-left"},Object(j.c)("div",{className:"GoodsItemCard-imgLayer"}),Object(j.c)("img",{className:"GoodsItemCard-imgUrl",src:i,alt:"",onError:function(){}})),Object(j.c)("div",{className:"GoodsItemCard-right"},Object(j.c)("div",{className:"GoodsItemCard-title"},s),Object(j.c)("div",{className:"GoodsItemCard-footer"},Object(j.c)("span",{className:"GoodsItemCard-price"},N),Object(j.c)("span",{className:"GoodsItemCard-footerText"},y)),w&&Object(j.c)("span",{className:"GoodsItemCard-footerIcon"},p[S[0].value])),Object(j.c)("div",{className:"GoodsItemCard-bottomLine",style:{display:f?"block":"none"}}))};f.prototype={className:v.a.string,style:v.a.object,imgUrl:v.a.string.isRequired,title:v.a.string.isRequired,price:v.a.number,source:v.a.string.isRequired,productType:v.a.number,showBottomLine:v.a.bool,onClick:v.a.func};var h=f,g=c(666),k=c(55),C=c.n(k),N=function(){return Object(j.c)(i.a.Fragment,null)},y={SkeletonH01:function(e){var t=e.lineClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}))},SkeletonP01:function(e){var t=e.lineClass,c=e.blockClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:c}),Object(j.c)("div",null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t})))},SkeletonT01:function(e){var t=e.lineClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}))},SkeletonT02:function(e){var t=e.lineClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t}))},SkeletonC01:function(e){var t=e.lineClass,c=e.blockClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:c}),Object(j.c)("div",null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t})))},SkeletonC02:function(e){var t=e.lineClass,c=e.blockClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",null,Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t})),Object(j.c)("div",{className:c}))},SkeletonC03:function(e){var t=e.lineClass,c=e.blockClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:c}),Object(j.c)("div",{style:{width:"100%"}},Object(j.c)("div",{className:t}),Object(j.c)("div",{className:t})))},SkeletonI01:function(e){var t=e.blockClass;return Object(j.c)(i.a.Fragment,null,Object(j.c)("div",{className:t}))},SkeletonSpacing:N,SkeletonFill:N},S=i.a.memo((function(e){var t,c=e.variant,a=void 0===c?"H01":c,n=e.height,o=e.width,i=void 0===o?"auto":o,s=e.animation,r=void 0===s?"ease-in":s,d="skeleton__line--".concat(a.toLowerCase()),u="skeleton--".concat(a.toLowerCase()),m=l()(C()({skeleton__block:!0},"skeleton__block--".concat(a.toLowerCase()),!0)),b=l()(C()({skeleton__line:!0},d,!0)),v=l()((t={skeleton:!0},C()(t,u,!0),C()(t,"skeleton--ease-in","ease-in"===r),t)),O={width:i};n&&["Spacing","Fill"].includes(a)&&(O.height="number"==typeof n?"".concat(n,"px"):n);var p=y["Skeleton".concat(a)];return Object(j.c)("section",{className:v,style:O},Object(j.c)(p,{variant:a,lineClass:b,blockClass:m}))}));S.propTypes={variant:v.a.string,height:v.a.oneOfType([v.a.string,v.a.number]),width:v.a.oneOfType([v.a.string,v.a.number]),animation:v.a.oneOfType([v.a.bool,v.a.string])};var w=S;var I=i.a.memo((function(e){var t=e.content,c=function(e){return("string"==typeof e?e.split(","):e).map((function(e){var t=e.split("-"),c=n()(t,2),a=c[0],o=c[1];return["Spacing","Fill"].includes(a)?{type:a,height:+o}:{type:a,count:+o||1}}))}(void 0===t?"T01":t);return Object(j.c)(i.a.Fragment,null,c.map((function(e,t){var c=e.type,a=e.count,n=e.height;return a?Array.from({length:a}).map((function(e,a){return Object(j.c)(w,{variant:c,key:"".concat(t,"-").concat(a)})})):Object(j.c)(w,{variant:c,height:n,key:"".concat(t,"-").concat(n)})})))}));I.prototype={content:Object(b.oneOfType)([Object(b.arrayOf)(b.string),b.string])};var T=I,_=c(36),G={"京东":"jingdong","淘宝":"taobao","拼多多":"pinduoduo","苏宁":"suning","美团酒旅":"meituanhotel","知乎":"zhihu","有赞":"youzan"},z=function(e){var t=e.className,c=e.style,a=e.showModal,s=void 0===a||a,d=e.withModal,m=void 0===d||d,b=e.modalTitle,v=void 0===b?"该商品的所有购买渠道":b,p=e.id,f=e.url,k=void 0===f?"":f,C=e.fetcherOptions,N=void 0===C?{}:C,y=e.scenes,S=void 0===y?0:y,w=e.fetcher,I=void 0===w?r.a:w,z=e.onClose,F=e.onSelectCard;Object(_.g)();var L=Object(o.useState)(0),E=n()(L,2),M=E[0],U=E[1],x=Object(o.useState)(!1),R=n()(x,2),B=R[0],q=R[1],A=Object(o.useState)([]),D=n()(A,2),H=D[0],J=D[1],P=Object(o.useState)(!1),Z=n()(P,2),K=Z[0],Q=Z[1],V=Object(o.useState)(null),W=n()(V,2),X=W[0],Y=W[1];Object(o.useEffect)((function(){O.a.trackCardShow(null,{id:10331,path:[{module_name:p}]}),Object(r.a)("/consume/bff/ab?name=book_kpwz").then((function(e){var t=e.data;t&&Y({params:[t]})})).catch((function(){}))}),[]),Object(o.useEffect)((function(){q(!0);var e=k||"/api/v4/mcn/linkcard/".concat(p,"?scenes=").concat(S);I(e,N).then((function(e){var t=e.data,c=[];u()(t)||(c.push(Object.assign({},t,{children:null})),"[object Array]"===Object.prototype.toString.call(t.children)&&t.children.length&&(c=c.concat(t.children))),J(c)})).catch((function(){Q(!0)})).finally((function(){setTimeout((function(){q(!1)}),500)}))}),[p,M]);var $=Object(j.c)("div",{className:"GoodsCardList-container"},B?Object(j.c)(i.a.Fragment,null,Object(j.c)(T,{content:"C03,Spacing-26,C03",height:72})):K?Object(j.c)("div",{className:"GoodsCardList-error"},Object(j.c)("div",{className:"GoodsCardList-errorDesc"},"Oops~ 出错了"),Object(j.c)("div",{className:"GoodsCardList-errorBtn",onClick:function(){U(M+1)}},"刷新重试")):H.length?H.map((function(e){var t=e.id,c=e.skuid,a=e.title,n=e.url,o=e.img_url,i=e.price,s=e.source,l=e.product_type;return Object(j.c)(_.b,{key:"".concat(s,"-").concat(t,"-").concat(c),block:"goodsRecommend_polymericCardPopup_goodsCard",content:{type:"GoodsRecommend",id:"".concat(t,"-").concat(c,"-").concat(G[s])},extra:{link:{url:n}}},Object(j.c)(_.e,{shouldTrackShow:!0,shouldTrackClick:!0,className:"GoodsCardList-listItem",zaType:"Card",zaText:a,zaAction:"OpenUrl",zaEventType:"Click",extra:{link:{url:n}}},Object(j.c)(h,{id:t,skuId:c,title:a,imgUrl:o,price:i,source:s,productType:l,showBottomLine:!1,abInfo:X,zaData:{showId:10371,clickId:10372},onClick:function(){return t=e,void(F&&F(t));var t}})))})):null);return m?Object(j.c)(g.a,{className:l()("GoodsCardList",t),style:c,size:"large",title:v,onClose:z},s&&$):$};z.prototype={className:v.a.string,style:v.a.object,showModal:v.a.bool,withModal:v.a.bool,modalTitle:v.a.string,id:v.a.string,url:v.a.string,fetcherOptions:v.a.object,scenes:v.a.number,fetcher:v.a.func,onClose:v.a.func,onSelectCard:v.a.func};var F=z}}]);
//# sourceMappingURL=column.GoodsRecommendGoodsCardList.b1fb1915f62964ffb27b.js.map