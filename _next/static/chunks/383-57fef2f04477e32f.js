(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{1383:function(e,r,a){"use strict";a.d(r,{Mp:function(){return K},tq:function(){return V}});var t,n,i,s,o,l=a(5893),c=a(7294),d=a(4184),_=a.n(d),m=a(7694),u=a(2486),p=a(2270),h=a(1799),x=a(9396),f=a(5158),w=a(2167);function N(e){var r=e.code,a=e.message;return[e.name,r,a].filter(Boolean).join(": ")}var v=a(131),j=a(8181),b=a.n(j);function y(e){var r=e.wrapperClassName,a=e.errorClassName,t=e.showErrorInWrapper,n=void 0===t||t;return function(e){return function(t){var i=(0,u.jQ)(),s=(0,u.V)();return(0,l.jsxs)("div",{className:_()(r,b().container),children:[n&&i&&(0,l.jsx)("div",{className:_()(a,b().contentError),children:N(i)}),(0,l.jsx)("div",{className:b().contentContainer,children:(0,l.jsx)(e,(0,x.Z)((0,h.Z)({},t),{error:i,isLoading:s}))}),(0,l.jsx)(v.uY,{className:b().loaderSplash,show:s,spinnerSize:"large",bg:"white",mode:"cover",fullSize:!0})]})}}}a(2197),a(6172);var g=a(5553),C=a.n(g);function A(e){var r=e.className,a=e.padded,t=e.body.replace(/"https:\/\/www.theguardian.com\//g,'"/article?id=');return(0,l.jsx)("div",{className:_()(r,C().container,a&&C().padded),dangerouslySetInnerHTML:{__html:t}})}var T=a(4505),R=a.n(T);function L(e){var r,a,t,n=e.article,i=n.webPublicationDate,s=n.webTitle,o=n.headline,c=n.thumbnail,d=n.body,m=!!c,u=m&&{backgroundImage:"url("+c+")"};return(0,l.jsxs)("div",{className:_()(R().contentLayout),children:[(0,l.jsx)("div",{className:_()(R().column,R().mediaColumn),children:m&&u&&(0,l.jsx)("div",{className:_()(R().row,R().thumbnailRow),children:(0,l.jsx)("div",{className:_()(R().thumbnail),style:u})})}),(0,l.jsxs)("div",{className:_()(R().column,R().mainColumn),children:[(0,l.jsx)("div",{className:_()(R().row,R().bookmarksRow),children:"(Bookmarking controls: not implemented)"}),i&&(0,l.jsx)("div",{className:_()(R().row,R().dateRow),children:(r=i,a||(a=f.dateTimeFormat),r.startsWith("00")&&(r=r.replace(/^00/,"20")),t=new Date(r),(0,w.Z)(t,a))}),s&&(0,l.jsx)("h1",{className:_()(R().row,R().titleRow),children:s}),o&&(0,l.jsx)("h2",{className:_()(R().row,R().headlineRow),children:o}),d&&(0,l.jsx)(A,{className:_()(R().row,R().bodyRow),body:d})]})]})}function S(e){var r=e.className,a=e.article,t=e.error,n=(0,c.useMemo)(function(){return a?"string"==typeof a?a:(0,l.jsx)(L,{article:a,error:t}):"No article data found"},[a,t]);return(0,l.jsx)("div",{className:_()(r,R().container),children:n})}var I={errorClassName:R().errorSection},V=y(I)(function(e){var r=e.className,a=e.id,t=void 0===a?"":a,n=e.error,i=(0,m.T)();(0,c.useEffect)(function(){i((0,p._O)(t))},[t,i]);var s=(0,u.TH)();return(0,l.jsx)(S,{className:r,article:s,error:n})});y(I)(S);var W=a(9534),k=a(1664),E=a.n(k),q=a(838),B=a.n(q),Z="medium";function H(e){var r=e.article.thumbnail,a=!r,t=_()(B().thumbnail,a&&B().thumbnailNoImage);return(0,l.jsx)("span",{className:t,style:{backgroundImage:"url("+(a?"/images/assets/Logo_White.png":r)+")"}})}function P(e){var r=e.article,a=e.basicCardProps.cardType,t=r.webTitle,n=r.body,i=r.thumbnail,s=_()(B().text,!i&&B().noImage),o="large"===a&&!!n,c=o&&n.replace(/<[^<>]*>/g," ").replace(/\s\s+/g," ").trim();return(0,l.jsxs)("span",{className:s,children:[(0,l.jsx)("span",{className:B().textTitle,children:t}),o&&(0,l.jsx)("span",{className:B().textBody,children:c})]})}function O(e){var r=e.article,a=e.basicCardProps,t=a.cardType;return(0,l.jsxs)(l.Fragment,{children:["smallText"!==t&&(0,l.jsx)(H,{article:r,basicCardProps:a}),(0,l.jsx)(P,{article:r,basicCardProps:a}),(0,l.jsx)("span",{className:B().colorBar})]})}function z(e){var r=e.className,a=e.article,t=(0,W.Z)(e,["className","article"]),n=t.cardType,i=_()(r,B().container,B()["cardType_"+(void 0===n?Z:n)]);if(!a||"string"==typeof a)return(0,l.jsx)("span",{className:i,children:a||"Article data is not defined"});var s=a.id,o=(0,l.jsx)(O,{article:a,basicCardProps:t});return s?(0,l.jsx)(E(),{className:i,href:{pathname:"/article",query:{id:s}},children:o}):(0,l.jsx)("span",{className:i,children:o})}function M(e){return(0,l.jsx)(z,(0,x.Z)((0,h.Z)({},e),{article:""}))}function D(e){var r=e.className,a=e.id,t=e.cardType,n=(0,u.oZ)(a)||"No article data found for id "+a;return(0,l.jsx)(z,{className:r,cardType:void 0===t?Z:t,article:n})}var G=a(8356),Q=a(9741),Y=a(1315),F=a.n(Y),J=a(7204),U=a.n(J),X=a(6649),K=(0,G.qC)((n=(t={errorClassName:U().errorSection,wrapperClassName:U().outerWrapper}).wrapperClassName,i=t.errorClassName,o=void 0===(s=t.showErrorInWrapper)||s,function(e){return function(r){var a=(0,u.UT)(),t=(0,u.IB)(),s=!(0,u.lN)().length;return(0,l.jsxs)("div",{className:_()(n,F().container),children:[o&&t&&(0,l.jsx)("div",{className:_()(i,F().contentError),children:N(t)}),(0,l.jsx)("div",{className:F().contentContainer,children:(0,l.jsx)(e,(0,x.Z)((0,h.Z)({},r),{error:t,isLoading:a,isEmpty:s}))}),a&&!s&&(0,l.jsx)(v.uY,{className:F().smallLoader,spinnerSize:"medium",show:!0}),(0,l.jsx)(v.uY,{className:F().loaderSplash,show:a&&s,spinnerSize:"large",bg:"white",mode:"cover",fullSize:!0})]})}}),(0,v.fj)({gap:200}))(function(e){var r=e.className,a=e.isLoading,t=e.isScrolledToEnd,n=e.setListContainerRef,i=(0,c.useRef)(null),s=(0,u.I1)().cardType;(0,c.useEffect)(function(){n&&n(i)},[i,n]);var o=(0,X.TL)();(0,c.useEffect)(function(){t&&o((0,Q.bs)())},[o,a,t]);var d=(0,u.lN)(),m=(0,c.useMemo)(function(){return d.length?d.map(function(e,r){if(!e)return(0,l.jsx)(M,{cardType:s},"empty-"+r);var a=e.id,t=e.uniqueId;return(0,l.jsx)(D,{cardType:s,id:a},t||a)}):(0,l.jsx)("div",{className:U().messageSection,children:"No articles found."})},[d,s]);return(0,l.jsx)("div",{ref:i,className:_()(r,U().container),children:m})})},4505:function(e){e.exports={container:"ArticleView_container__nZHhC",errorSection:"ArticleView_errorSection__iR8Uw",contentLayout:"ArticleView_contentLayout__9eQlL",thumbnailRow:"ArticleView_thumbnailRow__a5iIF",thumbnail:"ArticleView_thumbnail__8Nibx",column:"ArticleView_column__q_mHp",row:"ArticleView_row__OSDHR",mainColumn:"ArticleView_mainColumn__kM_L6",mediaColumn:"ArticleView_mediaColumn__0OPEj",bodyRow:"ArticleView_bodyRow__qD_Xm",titleRow:"ArticleView_titleRow__HvRqZ",headlineRow:"ArticleView_headlineRow__fRUl8",bookmarksRow:"ArticleView_bookmarksRow__wmx2v",dateRow:"ArticleView_dateRow__cKG9q"}},8181:function(e){e.exports={container:"ArticleWrapper_container__rfdr8",contentError:"ArticleWrapper_contentError__QrqIO",contentContainer:"ArticleWrapper_contentContainer__LG9Zx",smallLoader:"ArticleWrapper_smallLoader__srLgM",loaderSplash:"ArticleWrapper_loaderSplash__vvlHs"}},838:function(e){e.exports={container:"ArticleCard_container__uzb1k",colorBar:"ArticleCard_colorBar__Xlbfq",text:"ArticleCard_text__Rp7fJ",thumbnail:"ArticleCard_thumbnail__ya90G",thumbnailNoImage:"ArticleCard_thumbnailNoImage__YH1yf",textNoImage:"ArticleCard_textNoImage__Y2wfr",textTitle:"ArticleCard_textTitle__G3jZO",textBody:"ArticleCard_textBody__6lsGt",cardType_medium:"ArticleCard_cardType_medium__7DvtM",cardType_small:"ArticleCard_cardType_small__QvXel",cardType_smallText:"ArticleCard_cardType_smallText__zFBR5",cardType_large:"ArticleCard_cardType_large__7tH8y"}},7204:function(e){e.exports={container:"ArticlesList_container__IgjCd",outerWrapper:"ArticlesList_outerWrapper__nf7qo",messageSection:"ArticlesList_messageSection__gLhb0",errorSection:"ArticlesList_errorSection__RsfqO"}},1315:function(e){e.exports={container:"ArticlesWrapper_container__OPpJ5",contentError:"ArticlesWrapper_contentError__2tVQ_",contentContainer:"ArticlesWrapper_contentContainer__qBBxD",smallLoader:"ArticlesWrapper_smallLoader__Nl_Vw",loaderSplash:"ArticlesWrapper_loaderSplash__J0_qb"}},5553:function(e){e.exports={container:"PlainHtmlBody_container__puOyv",padded:"PlainHtmlBody_padded__1_t_J"}}}]);
//# sourceMappingURL=383-57fef2f04477e32f.js.map