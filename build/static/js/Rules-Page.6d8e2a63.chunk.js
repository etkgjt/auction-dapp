(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[54,124,161,163,292,293,294,295,296,297,298,299,300,301,302,303,304],{218:function(e,t,n){"use strict";n.r(t);var i=n(57),c=(n(551),n(552),n(5)),s=n.n(c),a=n(344),o=n(345),l=n(894),r=n.n(l),d=n(553),u=n(554),h=n(14);t.default=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return s.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(h.jsxs)("div",{className:"rules__page",children:[Object(h.jsx)("img",{src:d.default,style:{position:"fixed",left:0,bottom:0,zIndex:-2}}),Object(h.jsx)("img",{src:u.default,style:{position:"fixed",right:0,bottom:0,zIndex:-2}}),Object(h.jsx)(a.default,{}),Object(h.jsx)(o.default,{setIsOpen:c}),Object(h.jsx)(r.a,{channel:"custom",url:"https://gdurl.com/nUNM/https://drive.google.com/file/d/1W2ew1GztKX24NEoWFTW0SnILGq0_Tw6t/view",isOpen:n,onClose:function(){return c(!1)}})]})}},277:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return c})),n.d(t,"getListLoadingSelector",(function(){return s})),n.d(t,"getListSelector",(function(){return a})),n.d(t,"getLoadListMoreLoading",(function(){return o})),n.d(t,"getHasLoadMoreSelector",(function(){return l})),n.d(t,"getPageSelector",(function(){return r}));var i=n(37),c=function(e){return e.HomeRules},s=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.loading)||!1})),a=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.list)||null})),o=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.listMoreLoading)||!1})),l=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.hasLoadMore)||!1})),r=Object(i.a)(c,(function(e){return null===e||void 0===e?void 0:e.page}))},316:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return c})),n.d(t,"getListLoadingSelector",(function(){return s})),n.d(t,"getListSelector",(function(){return a})),n.d(t,"getLoadListMoreLoading",(function(){return o})),n.d(t,"getHasLoadMoreSelector",(function(){return l})),n.d(t,"getPageSelector",(function(){return r}));var i=n(37),c=function(e){return e.EventCalendar},s=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.loading)||!1})),a=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.list)||null})),o=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.listMoreLoading)||!1})),l=Object(i.a)(c,(function(e){return(null===e||void 0===e?void 0:e.hasLoadMore)||!1})),r=Object(i.a)(c,(function(e){return null===e||void 0===e?void 0:e.page}))},344:function(e,t,n){"use strict";n.r(t);n(5);var i=n(597),c=n(521),s=n(522),a=n(14);t.default=function(){var e=Object(i.useMediaQuery)({maxWidth:767}),t=Object(i.useMediaQuery)({minWidth:768,maxWidth:1199});return Object(a.jsx)("div",{className:"inviter-banner",children:Object(a.jsx)("img",{src:e||t?c.default:s.default,width:"100%",height:"auto"})})}},345:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n.n(i),s=n(672),a=n(721),o=n(346),l=n(523),r=n(277),d=n(41),u=n(76),h=n(52),j=n(316),m=n(597),b=n(524),f=n(647),g=n.n(f),p=n(525),O=n(526),x=n(527),v=n(528),y=n(529),w=n(14),N=function(){for(var e=g()().endOf("month");4!==e.day();)e.subtract(1,"day");return e};t.default=function(e){var t=e.setIsOpen,n=Object(u.b)(),f=Object(m.useMediaQuery)({maxWidth:767}),g=Object(u.c)(r.getListSelector),k=(Object(u.c)(r.getListLoadingSelector),Object(u.c)(j.getListSelector)),T=(Object(u.c)(j.getListLoadingSelector),Object(i.useRef)()),M=Object(i.useRef)(),_=function(e){var t;f||(window.scrollY>(null===M||void 0===M||null===(t=M.current)||void 0===t?void 0:t.offsetTop)?(T.current.style.position="fixed",T.current.style.top=0):T.current.style.position="static")};return c.a.useEffect((function(){n(d.actions.getList()),n(h.actions.getList())}),[]),c.a.useEffect((function(){return window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[]),Object(w.jsx)("div",{className:"rules-area",children:Object(w.jsx)(s.a,{children:f?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(a.a,{xl:"5",lg:"5",md:"5",children:Object(w.jsxs)("div",{className:"event-calendar-container",children:[Object(w.jsxs)(s.a,{children:[Object(w.jsx)(a.a,{sm:"6",xs:"6",children:Object(w.jsxs)("div",{className:"calendar-icon__container",children:[Object(w.jsxs)("div",{style:{position:"relative"},children:[Object(w.jsx)("img",{src:b.default,style:{width:"70%",height:"auto",marginLeft:"15%"}}),Object(w.jsx)("p",{className:"calendar-date",children:N().date()}),Object(w.jsx)("p",{className:"calendar-month",children:N().month()+1})]}),Object(w.jsx)("img",{src:l.default,alt:"img",className:"calender-coin-icon"})]})}),Object(w.jsxs)(a.a,{sm:"6",xs:"6",children:[Object(w.jsx)("h1",{className:"calendar-title",children:"L\u1ecbch S\u1ef1 Ki\xean"}),Object(w.jsxs)("p",{className:"calendar-text-black",children:["T\u1ea5t c\u1ea3 \u0111i\u1ec3m c\u1ee7a c\xe1c b\u1ea1n",Object(w.jsx)("br",{})," \u0111\u01b0\u1ee3c t\xednh \u0111\u1ebfn"]})]})]}),Object(w.jsx)("span",{className:"notic-text-black",children:null===k||void 0===k?void 0:k.value}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/tamtriluc/","_blank")},children:[Object(w.jsx)(o.FacebookIcon,{size:14}),Object(w.jsx)("p",{children:"Fanpage T\xe2m Tr\xed L\u1ef1c"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/nguyenphungphongvn","_blank")},children:[Object(w.jsx)(o.FacebookIcon,{size:14}),Object(w.jsx)("p",{children:"Facebook Nguy\u1ec5n T\xf9ng Phong"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ","_blank")},children:[Object(w.jsx)(o.YoutubeIcon,{size:14}),Object(w.jsx)("p",{children:"Youtube Nguy\u1ec5n Ph\xf9ng Phong"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A","_blank")},children:[Object(w.jsx)(o.YoutubeIcon,{size:14}),Object(w.jsx)("p",{children:"Youtube Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng"})]})]})}),Object(w.jsx)(a.a,{xl:"7",lg:"7",md:"7",children:Object(w.jsxs)("div",{className:"rules-detail-container",children:[Object(w.jsx)("div",{className:"rules-detail__title-container",children:Object(w.jsx)(o.RulesTopBannerTitle,{})}),Object(w.jsx)("div",{className:"rules-detail__content",dangerouslySetInnerHTML:{__html:null===g||void 0===g?void 0:g.value}}),Object(w.jsxs)("div",{className:"rules-details-button-wrapper",onClick:function(){return t(!0)},children:[Object(w.jsx)(o.DetailButton,{}),Object(w.jsx)("span",{className:"rules-details-button-text",children:"Xem Video h\u01b0\u1edbng d\u1eabn"})]}),Object(w.jsx)("div",{className:"rules-detail__content",children:Object(w.jsxs)("ul",{style:{color:"#1E3D74"},children:[Object(w.jsx)("li",{className:"rule-title",children:"C\xe1ch th\u1ee9c t\xednh \u0111i\u1ec3m"}),Object(w.jsxs)("div",{children:["V\u1edbi 1 l\u01b0\u1ee3t h\u1ecdc vi\xean \u0111\u01b0\u1ee3c m\u1eddi th\xe0nh c\xf4ng tham gia ch\u01b0\u01a1ng tr\xecnh, c\xe1c b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c 1K. Ngo\xe0i ra, b\u1ea1n c\xf2n nh\u1eadn \u0111\u01b0\u1ee3c \u0111i\u1ec3m th\u01b0\u1edfng t\u1eeb m\u1ed9t s\u1ed1 ho\u1ea1t \u0111\u1ed9ng kh\xe1c:"," "]}),Object(w.jsx)("h4",{children:"B\u1ea3ng c\u1ed9ng \u0111i\u1ec3m th\xe0nh t\xedch"}),Object(w.jsx)("img",{src:p.default,style:{width:"100%",height:"auto"}}),Object(w.jsx)("h4",{children:"B\u1ea2NG C\u1ed8NG \u0110I\u1ec2M TH\xc0NH T\xcdCH THEO TU\u1ea6N, TH\xc1NG, N\u0102M"}),Object(w.jsxs)(s.a,{children:[Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH Tu\u1ea7n"}),Object(w.jsx)("img",{src:O.default,style:{width:"100%",height:"auto"}})]})}),Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH TH\xc1NG"}),Object(w.jsx)("img",{src:v.default,style:{width:"100%",height:"auto"}})]})}),Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH QU\xdd"}),Object(w.jsx)("img",{src:x.default,style:{width:"100%",height:"auto"}})]})})]}),Object(w.jsx)("li",{className:"rule-title",children:"Gi\u1ea3i th\u01b0\u1edfng"}),Object(w.jsx)("div",{children:"E-Voucher 100K khi \u0111\u0103ng k\xfd th\xe0nh c\xf4ng t\xe0i kho\u1ea3n "}),Object(w.jsx)("div",{children:"C\xe1c gi\u1ea3i th\u01b0\u1edfng khi t\xedch l\u0169y:"}),Object(w.jsx)(s.a,{className:"d-flex flex-row justify-content-center mt-2",children:Object(w.jsx)(a.a,{xl:"10",lg:"10",md:"10",sm:"10",xs:"10",children:Object(w.jsx)("img",{src:y.default,width:"100%",height:"auto"})})}),Object(w.jsx)("div",{style:{color:"#F68317",marginTop:10},children:"L\u01b0u \xfd: 1K Coin (Coin l\xe0 s\u1ed1 ti\u1ec1n b\u1ea1n c\u1ee7a b\u1ea1n khi tham gia Ch\u01b0\u01a1ng tr\xecnh) = 1.000 VN\u0110"}),Object(w.jsx)("div",{style:{marginTop:10},children:"Gi\u1ea3i th\u01b0\u1edfng tr\u1ecb gi\xe1 5.000.000\u0111 d\xe0nh cho ng\u01b0\u1eddi tham gia may m\u1eafn trong Ch\u01b0\u01a1ng tr\xecnh V\xd2NG QUAY MAY M\u1eaeN - ch\u01b0\u01a1ng tr\xecnh n\u1eb1m trong khu\xf4n kh\u1ed5 \u0110\u1ea1i S\u1ee9 Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c v\xe0o 21h ng\xe0y th\u1ee9 5 cu\u1ed1i c\xf9ng m\u1ed7i th\xe1ng."})]})})]})})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(a.a,{xl:"7",lg:"7",md:"7",children:Object(w.jsxs)("div",{className:"rules-detail-container",ref:M,children:[Object(w.jsx)("div",{className:"rules-detail__title-container",children:Object(w.jsx)(o.RulesTopBannerTitle,{})}),Object(w.jsx)("div",{className:"rules-detail__content",dangerouslySetInnerHTML:{__html:null===g||void 0===g?void 0:g.value}}),Object(w.jsxs)("div",{className:"rules-details-button-wrapper",onClick:function(){return t(!0)},children:[Object(w.jsx)(o.DetailButton,{}),Object(w.jsx)("span",{className:"rules-details-button-text",children:"Xem Video h\u01b0\u1edbng d\u1eabn"})]}),Object(w.jsx)("div",{className:"rules-detail__content",children:Object(w.jsxs)("ul",{style:{color:"#1E3D74"},children:[Object(w.jsx)("li",{className:"rule-title",children:"C\xe1ch th\u1ee9c t\xednh \u0111i\u1ec3m"}),Object(w.jsxs)("div",{children:["V\u1edbi 1 l\u01b0\u1ee3t h\u1ecdc vi\xean \u0111\u01b0\u1ee3c m\u1eddi th\xe0nh c\xf4ng tham gia ch\u01b0\u01a1ng tr\xecnh, c\xe1c b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c 1K. Ngo\xe0i ra, b\u1ea1n c\xf2n nh\u1eadn \u0111\u01b0\u1ee3c \u0111i\u1ec3m th\u01b0\u1edfng t\u1eeb m\u1ed9t s\u1ed1 ho\u1ea1t \u0111\u1ed9ng kh\xe1c:"," "]}),Object(w.jsx)("h4",{children:"B\u1ea3ng c\u1ed9ng \u0111i\u1ec3m th\xe0nh t\xedch"}),Object(w.jsx)("img",{src:p.default,style:{width:"100%",height:"auto"}}),Object(w.jsx)("h4",{children:"B\u1ea2NG C\u1ed8NG \u0110I\u1ec2M TH\xc0NH T\xcdCH THEO TU\u1ea6N, TH\xc1NG, N\u0102M"}),Object(w.jsxs)(s.a,{children:[Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH Tu\u1ea7n"}),Object(w.jsx)("img",{src:O.default,style:{width:"100%",height:"auto"}})]})}),Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH TH\xc1NG"}),Object(w.jsx)("img",{src:v.default,style:{width:"100%",height:"auto"}})]})}),Object(w.jsx)(a.a,{xl:"4",lg:"4",md:"4",sm:"4",xs:"4",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"BXH QU\xdd"}),Object(w.jsx)("img",{src:x.default,style:{width:"100%",height:"auto"}})]})})]}),Object(w.jsx)("li",{className:"rule-title",children:"Gi\u1ea3i th\u01b0\u1edfng"}),Object(w.jsx)("div",{children:"E-Voucher 100K khi \u0111\u0103ng k\xfd th\xe0nh c\xf4ng t\xe0i kho\u1ea3n "}),Object(w.jsx)("div",{children:"C\xe1c gi\u1ea3i th\u01b0\u1edfng khi t\xedch l\u0169y:"}),Object(w.jsx)(s.a,{className:"d-flex flex-row justify-content-center mt-2",children:Object(w.jsx)(a.a,{xl:"10",lg:"10",md:"10",sm:"10",xs:"10",children:Object(w.jsx)("img",{src:y.default,width:"100%",height:"auto"})})}),Object(w.jsx)("div",{style:{color:"#F68317",marginTop:10},children:"L\u01b0u \xfd: 1K Coin (Coin l\xe0 s\u1ed1 ti\u1ec1n b\u1ea1n c\u1ee7a b\u1ea1n khi tham gia Ch\u01b0\u01a1ng tr\xecnh) = 1.000 VN\u0110"}),Object(w.jsx)("div",{style:{marginTop:10},children:"Gi\u1ea3i th\u01b0\u1edfng tr\u1ecb gi\xe1 5.000.000\u0111 d\xe0nh cho ng\u01b0\u1eddi tham gia may m\u1eafn trong Ch\u01b0\u01a1ng tr\xecnh V\xd2NG QUAY MAY M\u1eaeN - ch\u01b0\u01a1ng tr\xecnh n\u1eb1m trong khu\xf4n kh\u1ed5 \u0110\u1ea1i S\u1ee9 Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c v\xe0o 21h ng\xe0y th\u1ee9 5 cu\u1ed1i c\xf9ng m\u1ed7i th\xe1ng."})]})})]})}),Object(w.jsx)(a.a,{xl:"5",lg:"5",md:"5",style:{position:"relative"},children:Object(w.jsxs)("div",{className:"event-calendar-container",ref:T,children:[Object(w.jsx)("h1",{className:"calendar-title",children:"L\u1ecbch S\u1ef1 Ki\xean"}),Object(w.jsxs)("p",{className:"calendar-text-black",children:["V\xd2NG QUAY MAY M\u1eaeN",Object(w.jsx)("br",{})," \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c v\xe0o"]}),Object(w.jsxs)("div",{className:"calendar-icon__container",children:[Object(w.jsxs)("div",{style:{position:"relative"},children:[Object(w.jsx)("img",{src:b.default,style:{width:"70%",height:"auto",marginLeft:"15%"}}),Object(w.jsx)("p",{className:"calendar-date",children:N().date()}),Object(w.jsx)("p",{className:"calendar-month",children:N().month()+1})]}),Object(w.jsx)("img",{src:l.default,alt:"img",className:"calender-coin-icon"})]}),Object(w.jsx)("span",{className:"notic-text-black",children:null===k||void 0===k?void 0:k.value}),Object(w.jsx)("div",{className:"my-3"}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/tamtriluc/","_blank")},children:[Object(w.jsx)(o.FacebookIcon,{size:32}),Object(w.jsx)("p",{children:"Fanpage T\xe2m Tr\xed L\u1ef1c"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/nguyenphungphongvn","_blank")},children:[Object(w.jsx)(o.FacebookIcon,{size:32}),Object(w.jsx)("p",{children:"Facebook Nguy\u1ec5n T\xf9ng Phong"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ","_blank")},children:[Object(w.jsx)(o.YoutubeIcon,{size:32}),Object(w.jsx)("p",{children:"Youtube Nguy\u1ec5n Ph\xf9ng Phong"})]}),Object(w.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A","_blank")},children:[Object(w.jsx)(o.YoutubeIcon,{size:32}),Object(w.jsx)("p",{children:"Youtube Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng"})]})]})})]})})})}},521:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner-rules.b54cc7df.png"},522:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner-desktop.a179af64.png"},523:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/coin-icon.bf40c1b9.png"},524:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/calendar.7d878cf9.png"},525:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/table1.1ef30108.png"},526:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bangtuan.d403d1a5.png"},527:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bangquy.7a500b2f.png"},528:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bangthang.d75a3030.png"},529:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/gifts.8107caa1.png"},551:function(e,t,n){},552:function(e,t,n){},553:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg-left.83ba1dc9.png"},554:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg-right.40522fa0.png"},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},672:function(e,t,n){"use strict";var i=n(18),c=n(34),s=n(5),a=n.n(s),o=n(264),l=n.n(o),r=n(587),d=n.n(r),u=n(588),h=l.a.oneOfType([l.a.number,l.a.string]),j={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,s=e.noGutters,o=e.tag,l=e.form,r=e.widths,h=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];r.forEach((function(t,n){var i=e[t];if(delete h[t],i){var c=!n;j.push(c?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var m=Object(u.m)(d()(t,s?"no-gutters":null,l?"form-row":"row",j),n);return a.a.createElement(o,Object(i.a)({},h,{className:m}))};b.propTypes=j,b.defaultProps=m,t.a=b},721:function(e,t,n){"use strict";var i=n(18),c=n(34),s=n(5),a=n.n(s),o=n(264),l=n.n(o),r=n(587),d=n.n(r),u=n(588),h=l.a.oneOfType([l.a.number,l.a.string]),j=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:h,offset:h})]),m={tag:u.q,xs:j,sm:j,md:j,lg:j,xl:j,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,s=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),r=[];s.forEach((function(t,i){var c=e[t];if(delete l[t],c||""===c){var s=!i;if(Object(u.k)(c)){var a,o=s?"-":"-"+t+"-",h=f(s,t,c.size);r.push(Object(u.m)(d()(((a={})[h]=c.size||""===c.size,a["order"+o+c.order]=c.order||0===c.order,a["offset"+o+c.offset]=c.offset||0===c.offset,a)),n))}else{var j=f(s,t,c);r.push(j)}}})),r.length||r.push("col");var h=Object(u.m)(d()(t,r),n);return a.a.createElement(o,Object(i.a)({},l,{className:h}))};g.propTypes=m,g.defaultProps=b,t.a=g},894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=a(n(5)),s=a(n(861));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:n.getWidthFulfillAspectRatio(n.props.ratio,window.innerHeight,window.innerWidth)},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})}),10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var i=e.split(":"),c=Number(i[0]),s=Number(i[1]);return t<n*(s/c)?Math.floor(c/s*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return c.default.createElement(s.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?c.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},c.default.createElement("div",{className:e.props.classNames.modalVideoBody},c.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},c.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},c.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||c.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(c.default.Component);t.default=o,o.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}}}]);
//# sourceMappingURL=Rules-Page.6d8e2a63.chunk.js.map