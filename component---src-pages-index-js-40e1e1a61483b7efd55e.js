(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),l=n(212),c=(n(48),n(150),n(7)),s=n.n(c),p=(n(147),n(142)),u=n.n(p),d=n(151),f=n(144),m=n(141),h=n(143);function g(){var t=u()(["font-size: 40px;"]);return g=function(){return t},t}function b(){var t=u()(["font-size: 50px;"]);return b=function(){return t},t}function x(){var t=u()(["font-size: 60px;"]);return x=function(){return t},t}function v(){var t=u()(["font-size: 70px;"]);return v=function(){return t},t}function y(){var t=u()(["font-size: 40px;"]);return y=function(){return t},t}function j(){var t=u()(["font-size: 50px;"]);return j=function(){return t},t}function w(){var t=u()(["font-size: 60px;"]);return w=function(){return t},t}function _(){var t=u()(["font-size: 70px;"]);return _=function(){return t},t}function k(){var t=u()(["font-size: ",";"]);return k=function(){return t},t}function z(){var t=u()(["font-size: ",";"]);return z=function(){return t},t}function C(){var t=u()(["padding-top: 150px;"]);return C=function(){return t},t}var E=Object(m.b)(h.h).withConfig({displayName:"hero__HeroContainer",componentId:"sc-9jefk6-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],h.k.flexCenter,h.j.tablet(C())),I=m.b.h3.withConfig({displayName:"hero__Hi",componentId:"sc-9jefk6-1"})(["color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],h.l.colors.green,h.l.fontSizes.medium,h.l.fonts.SFMono,h.j.desktop(z(),h.l.fontSizes.small),h.j.tablet(k(),h.l.fontSizes.smallish)),N=m.b.h1.withConfig({displayName:"hero__Name",componentId:"sc-9jefk6-2"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],h.j.desktop(_()),h.j.tablet(w()),h.j.phablet(j()),h.j.phone(y())),S=m.b.h2.withConfig({displayName:"hero__Subtitle",componentId:"sc-9jefk6-3"})(["font-size:80px;line-height:1.1;color:",";",";",";",";",";"],h.l.colors.slate,h.j.desktop(v()),h.j.tablet(x()),h.j.phablet(b()),h.j.phone(g())),T=m.b.div.withConfig({displayName:"hero__Blurb",componentId:"sc-9jefk6-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],h.k.inlineLink),O=m.b.div.withConfig({displayName:"hero__EmailButton",componentId:"sc-9jefk6-5"})([""]),M=Object(m.b)(h.a).withConfig({displayName:"hero__EmailLink",componentId:"sc-9jefk6-6"})(["",";font-size:",";margin-top:50px;"],h.k.bigButton,h.l.fontSizes.smallish),R=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isMounted:!1},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;setTimeout(function(){return t.setState({isMounted:!0})},1e3)},n.render=function(){var t=this.props.data,e=this.state.isMounted,n=t[0].node,o=n.frontmatter,a=n.html,i=[function(){return r.a.createElement(I,{style:{transitionDelay:"100ms"}},o.title)},function(){return r.a.createElement(N,{style:{transitionDelay:"200ms"}},o.name,".")},function(){return r.a.createElement(S,{style:{transitionDelay:"300ms"}},o.subtitle)},function(){return r.a.createElement(T,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:a}})},function(){return r.a.createElement(O,{style:{transitionDelay:"500ms"}},r.a.createElement(M,{href:"mailto:"+f.email},"Get In Touch"))}];return r.a.createElement(E,null,r.a.createElement(d.TransitionGroup,null,e&&i.map(function(t,e){return r.a.createElement(d.CSSTransition,{key:e,classNames:"fadeup",timeout:3e3},t)})))},e}(o.Component);R.propTypes={data:i.a.array.isRequired};var L=R,A=n(211),P=n.n(A),F=n(153);function D(){var t=u()(["width: 70%;"]);return D=function(){return t},t}function H(){var t=u()(["margin: 60px auto 0;"]);return H=function(){return t},t}function B(){var t=u()(["width: 100%;"]);return B=function(){return t},t}function G(){var t=u()(["display: block;"]);return G=function(){return t},t}var q=Object(m.b)(h.h).withConfig({displayName:"about__AboutContainer",componentId:"aazpz3-0"})(["position:relative;"]),W=m.b.div.withConfig({displayName:"about__FlexContainer",componentId:"aazpz3-1"})(["",";align-items:flex-start;",";"],h.k.flexBetween,h.j.tablet(G())),J=m.b.div.withConfig({displayName:"about__ContentContainer",componentId:"aazpz3-2"})(["width:60%;max-width:480px;",";a{",";}"],h.j.tablet(B()),h.k.inlineLink),Y=Object(m.b)(h.i).withConfig({displayName:"about__SkillsContainer",componentId:"aazpz3-3"})(["margin-top:20px;display:grid;overflow:hidden;grid-template-columns:repeat(2,minmax(140px,200px));"]),V=m.b.li.withConfig({displayName:"about__Skill",componentId:"aazpz3-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:",";color:",";&:before{content:'▹';position:absolute;left:0;color:",";font-size:",";line-height:12px;}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.slate,h.l.colors.green,h.l.fontSizes.small),X=m.b.div.withConfig({displayName:"about__PicContainer",componentId:"aazpz3-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],h.j.tablet(H()),h.j.phablet(D())),K=Object(m.b)(P.a).withConfig({displayName:"about__Avatar",componentId:"aazpz3-6"})(["width:100%;max-width:100%;vertical-align:middle;position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],h.l.borderRadius,h.l.transition),Q=m.b.div.withConfig({displayName:"about__AvatarContainer",componentId:"aazpz3-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;transition:",";background-color:",";mix-blend-mode:screen;border-radius:",";}&:after{content:'';display:block;width:100%;height:100%;border:2px solid ",";position:absolute;top:20px;left:20px;z-index:-1;transition:",";border-radius:",";}"],h.l.borderRadius,h.l.colors.lightAmber,K,h.l.transition,h.l.colors.navy,h.l.borderRadius,h.l.colors.lightAmber,h.l.transition,h.l.borderRadius),U=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.about,Object(f.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,o=e.html;return r.a.createElement(q,{id:"about",innerRef:function(e){return t.about=e}},r.a.createElement(h.c,null,n.title),r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:o}}),r.a.createElement(Y,null,n.skills&&n.skills.map(function(t,e){return r.a.createElement(V,{key:e},t)}))),r.a.createElement(X,null,r.a.createElement(Q,null,r.a.createElement(K,{fluid:n.avatar.childImageSharp.fluid,alt:"Avatar"})))))},e}(o.Component);U.propTypes={data:i.a.array.isRequired};var Z=U;n(149);function $(){var t=u()(["padding-left: 0;"]);return $=function(){return t},t}function tt(){var t=u()(["padding-left: 20px;"]);return tt=function(){return t},t}function et(){var t=u()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return et=function(){return t},t}function nt(){var t=u()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    min-width: 120px;\n  "]);return nt=function(){return t},t}function ot(){var t=u()(["padding: 0 15px 2px;"]);return ot=function(){return t},t}function rt(){var t=u()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return rt=function(){return t},t}function at(){var t=u()(["display: block;"]);return at=function(){return t},t}var it=Object(m.b)(h.h).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-9cznmn-0"})(["position:relative;max-width:700px;"]),lt=m.b.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-9cznmn-1"})(["display:flex;align-items:flex-start;position:relative;",";"],h.j.thone(at())),ct=m.b.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-9cznmn-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],h.j.thone(rt())),st=m.b.button.withConfig({displayName:"jobs__Tab",componentId:"sc-9cznmn-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],h.k.link,h.l.tabHeight,h.l.transition,h.l.colors.darkGrey,h.l.fonts.SFMono,h.l.fontSizes.smallish,function(t){return t.isActive?h.l.colors.green:h.l.colors.lightGrey},h.j.tablet(ot()),h.j.thone(nt(),h.k.flexCenter,h.l.colors.darkGrey),h.l.colors.lightNavy),pt=m.b.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-9cznmn-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],h.l.colors.green,h.l.tabHeight,h.l.borderRadius,h.l.transition,function(t){return t.activeTabId>0?t.activeTabId*h.l.tabHeight:0},h.j.thone(et(),h.l.tabWidth,function(t){return t.activeTabId>0?t.activeTabId*h.l.tabWidth:0})),ut=m.b.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-9cznmn-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],h.j.tablet(tt()),h.j.thone($())),dt=m.b.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-9cznmn-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:5px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(t){return t.isActive?1:0},function(t){return t.isActive?2:-1},function(t){return t.isActive?"relative":"absolute"},function(t){return t.isActive?"visible":"hidden"},h.l.transition,function(t){return t.isActive?"0.5s":"0s"},h.l.fontSizes.large,h.l.colors.green,h.l.fontSizes.xlarge,h.k.inlineLink),ft=m.b.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-9cznmn-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],h.l.colors.lightestSlate,h.l.fontSizes.xxlarge),mt=m.b.span.withConfig({displayName:"jobs__Company",componentId:"sc-9cznmn-8"})(["color:",";"],h.l.colors.green),ht=m.b.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-9cznmn-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.lightSlate),gt=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={activeTabId:0},e.isActive=function(t){return e.state.activeTabId===t},e.setActiveTab=function(t){return e.setState({activeTabId:t})},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.jobs,Object(f.srConfig)())},n.render=function(){var t=this,e=this.state.activeTabId,n=this.props.data;return r.a.createElement(it,{id:"jobs",innerRef:function(e){return t.jobs=e}},r.a.createElement(h.c,null,"Where I've Worked"),r.a.createElement(lt,null,r.a.createElement(ct,{role:"tablist"},n&&n.map(function(e,n){var o=e.node;return r.a.createElement(st,{key:n,isActive:t.isActive(n),onClick:function(e){return t.setActiveTab(n,e)},role:"tab","aria-selected":t.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabindex:t.isActive(n)?"0":"-1"},r.a.createElement("span",null,o.frontmatter.company))}),r.a.createElement(pt,{activeTabId:e})),r.a.createElement(ut,null,n&&n.map(function(e,n){var o=e.node;return r.a.createElement(dt,{key:n,isActive:t.isActive(n),id:"job"+n,role:"tabpanel",tabindex:"0","aria-labelledby":"job"+n,"aria-hidden":!t.isActive(n)},r.a.createElement(ft,null,r.a.createElement("span",null,o.frontmatter.title),r.a.createElement(mt,null," @ ",r.a.createElement("a",{href:o.frontmatter.url,target:"_blank",rel:"nofollow noopener noreferrer"},o.frontmatter.company))),r.a.createElement(ht,null,r.a.createElement("span",null,o.frontmatter.range)),r.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:o.html}}))}))))},e}(o.Component);gt.propTypes={data:i.a.array.isRequired};var bt=gt,xt=(n(75),n(76),n(152));function vt(){var t=u()(["\n        grid-column: 1 / -1;\n        opacity: 0.25;\n      "]);return vt=function(){return t},t}function yt(){var t=u()(["height: 100%;"]);return yt=function(){return t},t}function jt(){var t=u()(["padding: 30px 25px 20px;"]);return jt=function(){return t},t}function wt(){var t=u()(["\n        grid-column: 1 / -1;\n        padding: 40px 40px 30px;\n      "]);return wt=function(){return t},t}function _t(){var t=u()(["margin-bottom: 70px;"]);return _t=function(){return t},t}function kt(){var t=u()(["\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  "]);return kt=function(){return t},t}function zt(){var t=u()(["height: 100%;"]);return zt=function(){return t},t}function Ct(){var t=u()(["\n    object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(80%);\n  "]);return Ct=function(){return t},t}function Et(){var t=u()(["\n      color: ",";\n      margin-right: 10px;\n    "]);return Et=function(){return t},t}function It(){var t=u()(["\n    background-color: transparent;\n    padding: 20px 0;\n  "]);return It=function(){return t},t}function Nt(){var t=u()(["display: block;"]);return Nt=function(){return t},t}function St(){var t=u()(["font-size: 24px;"]);return St=function(){return t},t}function Tt(){var t=u()(["padding: 30px 25px 20px;"]);return Tt=function(){return t},t}function Ot(){var t=u()(["\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  "]);return Ot=function(){return t},t}var Mt=Object(m.b)(h.h).withConfig({displayName:"featured__FeaturedContainer",componentId:"sc-9pkynh-0"})(["",";flex-direction:column;align-items:flex-start;"],h.k.flexCenter),Rt=m.b.div.withConfig({displayName:"featured__FeaturedGrid",componentId:"sc-9pkynh-1"})(["position:relative;"]),Lt=m.b.div.withConfig({displayName:"featured__ContentContainer",componentId:"sc-9pkynh-2"})(["position:relative;z-index:2;grid-column:1 / 7;grid-row:1 / -1;",";",";"],h.j.thone(Ot()),h.j.phablet(Tt())),At=m.b.h4.withConfig({displayName:"featured__FeaturedLabel",componentId:"sc-9pkynh-3"})(["font-size:",";font-weight:normal;color:",";font-family:",";margin-top:10px;padding-top:0;"],h.l.fontSizes.smallish,h.l.colors.green,h.l.fonts.SFMono),Pt=m.b.h5.withConfig({displayName:"featured__ProjectName",componentId:"sc-9pkynh-4"})(["font-size:28px;font-weight:600;margin:0 0 20px;color:",";",";a{",";}"],h.l.colors.lightestSlate,h.j.tablet(St()),h.j.tablet(Nt())),Ft=m.b.div.withConfig({displayName:"featured__ProjectDescription",componentId:"sc-9pkynh-5"})(["background-color:",";color:",";padding:20px;border-radius:",";font-size:17px;line-height:1.3;",";p{margin:0;}a{",";color:",";}"],h.l.colors.lightNavy,h.l.colors.lightSlate,h.l.borderRadius,h.j.thone(It()),h.k.inlineLink,h.l.colors.white),Dt=Object(m.b)(h.i).withConfig({displayName:"featured__TechList",componentId:"sc-9pkynh-6"})(["display:flex;flex-wrap:wrap;margin:25px 0 10px;li{font-family:",";font-size:",";color:",";margin-right:",";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}",";}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.lightSlate,h.l.margin,h.j.thone(Et(),h.l.colors.lightestSlate)),Ht=m.b.div.withConfig({displayName:"featured__Links",componentId:"sc-9pkynh-7"})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;a{padding:10px;svg{width:22px;height:22px;}}"]),Bt=Object(m.b)(P.a).withConfig({displayName:"featured__FeaturedImg",componentId:"sc-9pkynh-8"})(["width:100%;max-width:100%;vertical-align:middle;border-radius:",";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);",";}"],h.l.borderRadius,h.j.tablet(Ct())),Gt=m.b.div.withConfig({displayName:"featured__ImgContainer",componentId:"sc-9pkynh-9"})(["position:relative;z-index:1;border-radius:",";background-color:",";border-radius:2px;grid-column:6 / -1;grid-row:1 / -1;transition:",";",";",";&:hover,&:focus{background:transparent;&:before,","{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:",";background-color:",";mix-blend-mode:screen;}"],h.l.borderRadius,h.l.colors.lightAmber,h.l.transition,h.j.tablet(zt()),h.j.thone(kt()),Bt,h.l.transition,h.l.colors.navy),qt=m.b.div.withConfig({displayName:"featured__Project",componentId:"sc-9pkynh-10"})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;",";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){","{grid-column:7 / -1;text-align:right;",";",";}","{justify-content:flex-end;li{margin-left:",";margin-right:0;}}","{justify-content:flex-end;margin-left:0;margin-right:-10px;}","{grid-column:1 / 8;",";",";}}"],h.j.thone(_t()),Lt,h.j.thone(wt()),h.j.phablet(jt()),Dt,h.l.margin,Ht,Gt,h.j.tablet(yt()),h.j.thone(vt())),Wt=function(t){function e(e){var n;return(n=t.call(this,e)||this).revealRefs=[],n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.featured,Object(f.srConfig)()),this.revealRefs.forEach(function(t){return Object(F.a)().reveal(t,Object(f.srConfig)())})},n.render=function(){var t=this,e=this.props.data;return r.a.createElement(Mt,{id:"projects"},r.a.createElement(h.c,{innerRef:function(e){return t.featured=e}},"Some Things I've Built"),r.a.createElement(Rt,null,e&&e.map(function(e,n){var o=e.node;return r.a.createElement(qt,{key:n,innerRef:function(e){return t.revealRefs[n]=e}},r.a.createElement(Lt,null,r.a.createElement(At,null,"Featured Project"),r.a.createElement(Pt,null,o.frontmatter.external?r.a.createElement(h.a,{href:o.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.frontmatter.title):o.frontmatter.title),r.a.createElement(Ft,{dangerouslySetInnerHTML:{__html:o.html}}),o.frontmatter.tech&&r.a.createElement(Dt,null,o.frontmatter.tech.map(function(t,e){return r.a.createElement("li",{key:e},t)})),r.a.createElement(Ht,null,o.frontmatter.github&&r.a.createElement(h.a,{href:o.frontmatter.github,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},r.a.createElement(xt.d,null)),o.frontmatter.external&&r.a.createElement(h.a,{href:o.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},r.a.createElement(xt.b,null)))),r.a.createElement(Gt,null,r.a.createElement(Bt,{fluid:o.frontmatter.cover.childImageSharp.fluid})))})))},e}(o.Component);Wt.propTypes={data:i.a.array.isRequired};var Jt=Wt;n(77);function Yt(){var t=u()(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return Yt=function(){return t},t}function Vt(){var t=u()(["font-size: 24px;"]);return Vt=function(){return t},t}var Xt=Object(m.b)(h.h).withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-1t0z1o-0"})(["",";flex-direction:column;align-items:flex-start;"],h.k.flexCenter),Kt=m.b.h4.withConfig({displayName:"projects__ProjectsTitle",componentId:"sc-1t0z1o-1"})(["margin:0 auto 50px;font-size:",";",";a{display:block;}"],h.l.fontSizes.h3,h.j.tablet(Vt())),Qt=m.b.div.withConfig({displayName:"projects__ProjectsGrid",componentId:"sc-1t0z1o-2"})([".projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],h.j.desktop(Yt())),Ut=m.b.div.withConfig({displayName:"projects__ProjectInner",componentId:"sc-1t0z1o-3"})(["",";flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;border-radius:",";transition:",";background-color:",";"],h.k.flexBetween,h.l.borderRadius,h.l.transition,h.l.colors.lightNavy),Zt=m.b.div.withConfig({displayName:"projects__Project",componentId:"sc-1t0z1o-4"})(["transition:",";&:hover,&:focus{","{transform:translateY(-5px);box-shadow:0 2px 4px ",";box-shadow:0 19px 38px "," 0 15px 12px ",";}}"],h.l.transition,Ut,h.l.colors.shadowNavy,h.l.colors.darkestNavy,h.l.colors.shadowNavy),$t=m.b.div.withConfig({displayName:"projects__ProjectTop",componentId:"sc-1t0z1o-5"})([""]),te=m.b.div.withConfig({displayName:"projects__ProjectBottom",componentId:"sc-1t0z1o-6"})([""]),ee=m.b.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-1t0z1o-7"})(["",";margin-bottom:30px;"],h.k.flexBetween),ne=m.b.div.withConfig({displayName:"projects__Folder",componentId:"sc-1t0z1o-8"})(["color:",";svg{width:40px;height:40px;}"],h.l.colors.green),oe=m.b.div.withConfig({displayName:"projects__Links",componentId:"sc-1t0z1o-9"})(["margin-right:-10px;color:",";"],h.l.colors.lightSlate),re=Object(m.b)(h.a).withConfig({displayName:"projects__IconLink",componentId:"sc-1t0z1o-10"})(["padding:10px;svg{width:22px;height:22px;}"]),ae=m.b.h5.withConfig({displayName:"projects__ProjectName",componentId:"sc-1t0z1o-11"})(["margin:0 0 10px;font-size:",";color:",";"],h.l.fontSizes.xxlarge,h.l.colors.lightestSlate),ie=Object(m.b)(h.a).withConfig({displayName:"projects__ProjectLink",componentId:"sc-1t0z1o-12"})([""]),le=m.b.div.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-1t0z1o-13"})(["font-size:17px;line-height:1.25;a{",";}"],h.k.inlineLink),ce=Object(m.b)(h.i).withConfig({displayName:"projects__TechList",componentId:"sc-1t0z1o-14"})(["flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;margin-top:20px;li{font-family:",";font-size:",";color:",";line-height:2;margin-right:15px;&:last-of-type{margin-right:0;}}"],h.l.fonts.SFMono,h.l.fontSizes.xsmall,h.l.colors.lightSlate),se=Object(m.b)(h.b).withConfig({displayName:"projects__ShowMoreButton",componentId:"sc-1t0z1o-15"})(["",";margin:100px auto 0;"],h.k.bigButton),pe=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={showMore:!1},n.showMoreToggle=function(){return n.setState({showMore:!n.state.showMore})},n.revealRefs=[],n.restRefs=[],n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.projects,Object(f.srConfig)()),this.revealRefs.forEach(function(t,e){return Object(F.a)().reveal(t,Object(f.srConfig)(100*e))})},n.render=function(){var t=this,e=this.state.showMore,n=this.props.data.filter(function(t){return"true"===t.node.frontmatter.show}),o=n.slice(0,6),a=e?n:o;return r.a.createElement(Xt,null,r.a.createElement(Kt,{innerRef:function(e){return t.projects=e}},"Other Projects"),r.a.createElement(Qt,null,r.a.createElement(d.TransitionGroup,{className:"projects"},a&&a.map(function(e,n){var o=e.node;return r.a.createElement(d.CSSTransition,{key:n,classNames:"fadeup",timeout:n>=6?300*(n-6):300,exit:!1},r.a.createElement(Zt,{key:n,innerRef:function(e){return t.revealRefs[n]=e},style:{transitionDelay:(n>=6?100*(n-6):0)+"ms"}},r.a.createElement(Ut,null,r.a.createElement($t,null,r.a.createElement(ee,null,r.a.createElement(ne,null,r.a.createElement(xt.c,null)),r.a.createElement(oe,null,o.frontmatter.github&&r.a.createElement(re,{href:o.frontmatter.github,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},r.a.createElement(xt.d,null)),o.frontmatter.external&&r.a.createElement(re,{href:o.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},r.a.createElement(xt.b,null)))),r.a.createElement(ae,null,o.frontmatter.external?r.a.createElement(ie,{href:o.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Visit Website"},o.frontmatter.title):o.frontmatter.title),r.a.createElement(le,{dangerouslySetInnerHTML:{__html:o.html}})),r.a.createElement(te,null,r.a.createElement(ce,null,o.frontmatter.tech.map(function(t,e){return r.a.createElement("li",{key:e},t)}))))))}))),r.a.createElement(se,{onClick:this.showMoreToggle},e?"Fewer":"More"," Projects"))},e}(o.Component);pe.propTypes={data:i.a.array.isRequired};var ue=pe;function de(){var t=u()(["font-size: 40px;"]);return de=function(){return t},t}function fe(){var t=u()(["font-size: 50px;"]);return fe=function(){return t},t}function me(){var t=u()(["font-size: ",";"]);return me=function(){return t},t}function he(){var t=u()(["font-size: ",";"]);return he=function(){return t},t}var ge=Object(m.b)(h.h).withConfig({displayName:"contact__ContactContainer",componentId:"vadju9-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],h.k.inlineLink),be=Object(m.b)(h.c).withConfig({displayName:"contact__Header",componentId:"vadju9-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],h.l.colors.green,h.l.fontSizes.medium,h.l.fonts.SFMono,h.j.desktop(he(),h.l.fontSizes.small),h.l.fontSizes.small,h.j.desktop(me(),h.l.fontSizes.smallish)),xe=m.b.h4.withConfig({displayName:"contact__Title",componentId:"vadju9-2"})(["margin:0 0 20px;font-size:60px;",";",";"],h.j.desktop(fe()),h.j.tablet(de())),ve=Object(m.b)(h.a).withConfig({displayName:"contact__EmailLink",componentId:"vadju9-3"})(["",";margin-top:50px;"],h.k.bigButton),ye=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.contact,Object(f.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,o=e.html;return r.a.createElement(ge,{id:"contact",innerRef:function(e){return t.contact=e}},r.a.createElement(be,null,"What's Next?"),r.a.createElement(xe,null,n.title),r.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:o}}),r.a.createElement(ve,{href:"mailto:"+f.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},e}(o.Component);ye.propTypes={data:i.a.array.isRequired};var je=ye;n.d(e,"query",function(){return ke});var we=Object(m.b)(h.d).withConfig({displayName:"pages__MainContainer",componentId:"sc-14an3vb-0"})(["",";counter-reset:section;"],h.k.sidePadding),_e=function(t){var e=t.data,n=t.location;return r.a.createElement(l.a,{location:n},r.a.createElement(we,{id:"content"},r.a.createElement(L,{data:e.hero.edges}),r.a.createElement(Z,{data:e.about.edges}),r.a.createElement(bt,{data:e.jobs.edges}),r.a.createElement(Jt,{data:e.featured.edges}),r.a.createElement(ue,{data:e.projects.edges}),r.a.createElement(je,{data:e.contact.edges})))};_e.propTypes={data:i.a.object.isRequired,location:i.a.object};e.default=_e;var ke="1311539105"}}]);
//# sourceMappingURL=component---src-pages-index-js-40e1e1a61483b7efd55e.js.map