(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{1383:function(e,r,a){"use strict";a.d(r,{Mp:function(){return Y},tq:function(){return B}});var t,n,i,o,l,s=a(5893),c=a(7294),d=a(4184),_=a.n(d),m=a(7694),u=a(2486),p=a(2270),h=a(1799),w=a(9396),x=a(5158),N=a(2167);function v(e){var r=e.code,a=e.message;return[e.name,r,a].filter(Boolean).join(": ")}var f=a(147),b=a(8181),j=a.n(b);function A(e){var r=e.wrapperClassName,a=e.errorClassName,t=e.showErrorInWrapper,n=void 0===t||t;return function(e){return function(t){var i=(0,u.jQ)(),o=(0,u.V)();return(0,s.jsxs)("div",{className:_()(r,j().container),children:[n&&i&&(0,s.jsx)("div",{className:_()(a,j().contentError),children:v(i)}),(0,s.jsx)("div",{className:j().contentContainer,children:(0,s.jsx)(e,(0,w.Z)((0,h.Z)({},t),{error:i,isLoading:o}))}),(0,s.jsx)(f.uY,{className:j().loaderSplash,show:o,spinnerSize:"large",bg:"white",mode:"cover",fullSize:!0})]})}}}a(2197),a(6172);var y=a(5553),g=a.n(y);function C(e){var r=e.className,a=e.padded,t=e.body.replace(/https:\/\/www.theguardian.com\//g,"/article/");return(0,s.jsx)("div",{className:_()(r,g().container,a&&g().padded),dangerouslySetInnerHTML:{__html:t}})}var T=a(4505),R=a.n(T);function S(e){var r,a,t=e.article,n=t.webPublicationDate,i=t.webTitle,o=t.headline,l=t.thumbnail,c=t.body,d=!!l,m=d&&{backgroundImage:"url("+l+")"};return(0,s.jsxs)("div",{className:_()(R().contentLayout),children:[(0,s.jsx)("div",{className:_()(R().column,R().mediaColumn),children:d&&m&&(0,s.jsx)("div",{className:_()(R().row,R().thumbnailRow),children:(0,s.jsx)("div",{className:_()(R().thumbnail),style:m})})}),(0,s.jsxs)("div",{className:_()(R().column,R().mainColumn),children:[(0,s.jsx)("div",{className:_()(R().row,R().bookmarksRow),children:"(Bookmarking controls: not implemented)"}),n&&(0,s.jsx)("div",{className:_()(R().row,R().dateRow),children:(r||(r=x.dateTimeFormat),a=new Date(n),(0,N.Z)(a,r))}),i&&(0,s.jsx)("h1",{className:_()(R().row,R().titleRow),children:i}),o&&(0,s.jsx)("h2",{className:_()(R().row,R().headlineRow),children:o}),c&&(0,s.jsx)(C,{className:_()(R().row,R().bodyRow),body:c})]})]})}function L(e){var r=e.className,a=e.article,t=e.error,n=(0,c.useMemo)(function(){return a?"string"==typeof a?a:(0,s.jsx)(S,{article:a,error:t}):"No article data found"},[a,t]);return(0,s.jsx)("div",{className:_()(r,R().container),children:n})}var V={errorClassName:R().errorSection},B=A(V)(function(e){var r=e.className,a=e.id,t=void 0===a?"":a,n=e.error,i=(0,m.T)();(0,c.useEffect)(function(){i((0,p._O)(t))},[t,i]);var o=(0,u.TH)();return(0,s.jsx)(L,{className:r,article:o,error:n})});A(V)(L);var k=a(9534),E=a(1664),W=a.n(E),I=a(838),q=a.n(I),H="medium";function Z(e){var r=e.article.thumbnail,a=!r,t=_()(q().thumbnail,a&&q().thumbnailNoImage);return(0,s.jsx)("span",{className:t,style:{backgroundImage:"url("+(a?"/images/assets/Logo_White.png":r)+")"}})}function P(e){var r=e.article,a=e.basicCardProps.cardType,t=r.webTitle,n=r.body,i=r.thumbnail,o=_()(q().text,!i&&q().noImage),l="large"===a&&!!n,c=l&&n.replace(/<[^<>]*>/g," ").replace(/\s\s+/g," ").trim();return(0,s.jsxs)("span",{className:o,children:[(0,s.jsx)("span",{className:q().textTitle,children:t}),l&&(0,s.jsx)("span",{className:q().textBody,children:c})]})}function D(e){var r=e.article,a=e.basicCardProps,t=a.cardType;return(0,s.jsxs)(s.Fragment,{children:["smallText"!==t&&(0,s.jsx)(Z,{article:r,basicCardProps:a}),(0,s.jsx)(P,{article:r,basicCardProps:a}),(0,s.jsx)("span",{className:q().colorBar})]})}function O(e){var r=e.className,a=e.article,t=(0,k.Z)(e,["className","article"]),n=t.cardType,i=_()(r,q().container,q()["cardType_"+(void 0===n?H:n)]);if(!a||"string"==typeof a)return(0,s.jsx)("span",{className:i,children:a||"Article data is not defined"});var o=a.id,l=o&&"/article/"+o,d=(0,s.jsx)(D,{article:a,basicCardProps:t});return c.createElement(l?W():"span",{href:l,className:i},d)}function z(e){var r=e.className,a=e.id,t=e.cardType,n=(0,u.oZ)(a)||"No article data found for id "+a;return(0,s.jsx)(O,{className:r,cardType:void 0===t?H:t,article:n})}var G=a(1315),M=a.n(G),U=a(7204),Q=a.n(U),Y=(n=(t={errorClassName:Q().errorSection,wrapperClassName:Q().outerWrapper}).wrapperClassName,i=t.errorClassName,l=void 0===(o=t.showErrorInWrapper)||o,function(e){return function(r){var a=(0,u.UT)(),t=(0,u.IB)(),o=!(0,u.lN)().length;return(0,s.jsxs)("div",{className:_()(n,M().container),children:[l&&t&&(0,s.jsx)("div",{className:_()(i,M().contentError),children:v(t)}),(0,s.jsx)("div",{className:M().contentContainer,children:(0,s.jsx)(e,(0,w.Z)((0,h.Z)({},r),{error:t,isLoading:a,isEmpty:o}))}),a&&!o&&(0,s.jsx)(f.uY,{className:M().smallLoader,spinnerSize:"medium",show:!0}),(0,s.jsx)(f.uY,{className:M().loaderSplash,show:a&&o,spinnerSize:"large",bg:"white",mode:"cover",fullSize:!0})]})}})(function(e){var r=e.className,a=(0,u.lN)(),t=(0,c.useMemo)(function(){return a.length?a.map(function(e){var r=e.id;return(0,s.jsx)(z,{cardType:"medium",id:r},r)}):(0,s.jsx)("div",{className:Q().messageSection,children:"No articles found."})},[a]);return(0,s.jsx)("div",{className:_()(r,Q().container),children:t})})},4505:function(e){e.exports={container:"ArticleView_container__nZHhC",errorSection:"ArticleView_errorSection__iR8Uw",bodyRow:"ArticleView_bodyRow__qD_Xm",bookmarksRow:"ArticleView_bookmarksRow__wmx2v",column:"ArticleView_column__q_mHp",contentLayout:"ArticleView_contentLayout__9eQlL",dateRow:"ArticleView_dateRow__cKG9q",headlineRow:"ArticleView_headlineRow__fRUl8",mainColumn:"ArticleView_mainColumn__kM_L6",mediaColumn:"ArticleView_mediaColumn__0OPEj",row:"ArticleView_row__OSDHR",thumbnailRow:"ArticleView_thumbnailRow__a5iIF",titleRow:"ArticleView_titleRow__HvRqZ",DEBUG:"ArticleView_DEBUG__UBmNy",thumbnail:"ArticleView_thumbnail__8Nibx"}},8181:function(e){e.exports={container:"ArticleWrapper_container__rfdr8",contentError:"ArticleWrapper_contentError__QrqIO",contentContainer:"ArticleWrapper_contentContainer__LG9Zx",smallLoader:"ArticleWrapper_smallLoader__srLgM",loaderSplash:"ArticleWrapper_loaderSplash__vvlHs"}},838:function(e){e.exports={container:"ArticleCard_container__uzb1k",colorBar:"ArticleCard_colorBar__Xlbfq",text:"ArticleCard_text__Rp7fJ",thumbnail:"ArticleCard_thumbnail__ya90G",thumbnailNoImage:"ArticleCard_thumbnailNoImage__YH1yf",textNoImage:"ArticleCard_textNoImage__Y2wfr",textTitle:"ArticleCard_textTitle__G3jZO",textBody:"ArticleCard_textBody__6lsGt",cardType_medium:"ArticleCard_cardType_medium__7DvtM",cardType_small:"ArticleCard_cardType_small__QvXel",cardType_smallText:"ArticleCard_cardType_smallText__zFBR5",cardType_large:"ArticleCard_cardType_large__7tH8y"}},7204:function(e){e.exports={container:"ArticlesList_container__IgjCd",outerWrapper:"ArticlesList_outerWrapper__nf7qo",messageSection:"ArticlesList_messageSection__gLhb0",errorSection:"ArticlesList_errorSection__RsfqO"}},1315:function(e){e.exports={container:"ArticlesWrapper_container__OPpJ5",contentError:"ArticlesWrapper_contentError__2tVQ_",contentContainer:"ArticlesWrapper_contentContainer__qBBxD",smallLoader:"ArticlesWrapper_smallLoader__Nl_Vw",loaderSplash:"ArticlesWrapper_loaderSplash__J0_qb"}},5553:function(e){e.exports={container:"PlainHtmlBody_container__puOyv",padded:"PlainHtmlBody_padded__1_t_J"}}}]);
//# sourceMappingURL=383-09bb24707f9b97fd.js.map