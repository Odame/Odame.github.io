(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(212),c=(n(48),n(150),n(7)),s=n.n(c),u=(n(147),n(142)),d=n.n(u),p=n(151),f=n(144),m=n(141),h=n(143);function g(){var t=d()(["font-size: 40px;"]);return g=function(){return t},t}function b(){var t=d()(["font-size: 50px;"]);return b=function(){return t},t}function x(){var t=d()(["font-size: 60px;"]);return x=function(){return t},t}function v(){var t=d()(["font-size: 70px;"]);return v=function(){return t},t}function y(){var t=d()(["font-size: 40px;"]);return y=function(){return t},t}function j(){var t=d()(["font-size: 50px;"]);return j=function(){return t},t}function w(){var t=d()(["font-size: 60px;"]);return w=function(){return t},t}function _(){var t=d()(["font-size: 70px;"]);return _=function(){return t},t}function k(){var t=d()(["font-size: ",";"]);return k=function(){return t},t}function C(){var t=d()(["font-size: ",";"]);return C=function(){return t},t}function E(){var t=d()(["padding-top: 150px;"]);return E=function(){return t},t}var I=Object(m.b)(h.h).withConfig({displayName:"hero__HeroContainer",componentId:"sc-17z9avy-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],h.k.flexCenter,h.j.tablet(E())),z=m.b.h3.withConfig({displayName:"hero__Hi",componentId:"sc-17z9avy-1"})(["color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],h.l.colors.green,h.l.fontSizes.medium,h.l.fonts.SFMono,h.j.desktop(C(),h.l.fontSizes.small),h.j.tablet(k(),h.l.fontSizes.smallish)),N=m.b.h1.withConfig({displayName:"hero__Name",componentId:"sc-17z9avy-2"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],h.j.desktop(_()),h.j.tablet(w()),h.j.phablet(j()),h.j.phone(y())),S=m.b.h2.withConfig({displayName:"hero__Subtitle",componentId:"sc-17z9avy-3"})(["font-size:80px;line-height:1.1;color:",";",";",";",";",";"],h.l.colors.slate,h.j.desktop(v()),h.j.tablet(x()),h.j.phablet(b()),h.j.phone(g())),T=m.b.div.withConfig({displayName:"hero__Blurb",componentId:"sc-17z9avy-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],h.k.inlineLink),O=m.b.div.withConfig({displayName:"hero__EmailButton",componentId:"sc-17z9avy-5"})([""]),M=Object(m.b)(h.a).withConfig({displayName:"hero__EmailLink",componentId:"sc-17z9avy-6"})(["",";font-size:",";margin-top:50px;"],h.k.bigButton,h.l.fontSizes.smallish),R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={isMounted:!1},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;setTimeout(function(){return t.setState({isMounted:!0})},1e3)},n.render=function(){var t=this.props.data,e=this.state.isMounted,n=t[0].node,r=n.frontmatter,i=n.html,a=[function(){return o.a.createElement(z,{style:{transitionDelay:"100ms"}},r.title)},function(){return o.a.createElement(N,{style:{transitionDelay:"200ms"}},r.name,".")},function(){return o.a.createElement(S,{style:{transitionDelay:"300ms"}},r.subtitle)},function(){return o.a.createElement(T,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:i}})},function(){return o.a.createElement(O,{style:{transitionDelay:"500ms"}},o.a.createElement(M,{href:"mailto:"+f.email},"Get In Touch"))}];return o.a.createElement(I,null,o.a.createElement(p.TransitionGroup,null,e&&a.map(function(t,e){return o.a.createElement(p.CSSTransition,{key:e,classNames:"fadeup",timeout:3e3},t)})))},e}(r.Component);R.propTypes={data:a.a.array.isRequired};var L=R,A=n(211),P=n.n(A),F=n(153);function D(){var t=d()(["width: 70%;"]);return D=function(){return t},t}function H(){var t=d()(["margin: 60px auto 0;"]);return H=function(){return t},t}function B(){var t=d()(["width: 100%;"]);return B=function(){return t},t}function G(){var t=d()(["display: block;"]);return G=function(){return t},t}var q=Object(m.b)(h.h).withConfig({displayName:"about__AboutContainer",componentId:"sc-1wexrvx-0"})(["position:relative;"]),W=m.b.div.withConfig({displayName:"about__FlexContainer",componentId:"sc-1wexrvx-1"})(["",";align-items:flex-start;",";"],h.k.flexBetween,h.j.tablet(G())),J=m.b.div.withConfig({displayName:"about__ContentContainer",componentId:"sc-1wexrvx-2"})(["width:60%;max-width:480px;",";a{",";}"],h.j.tablet(B()),h.k.inlineLink),Y=Object(m.b)(h.i).withConfig({displayName:"about__SkillsContainer",componentId:"sc-1wexrvx-3"})(["margin-top:20px;display:grid;overflow:hidden;grid-template-columns:repeat(2,minmax(140px,200px));"]),V=m.b.li.withConfig({displayName:"about__Skill",componentId:"sc-1wexrvx-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:",";color:",";&:before{content:'▹';position:absolute;left:0;color:",";font-size:",";line-height:12px;}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.slate,h.l.colors.green,h.l.fontSizes.small),X=m.b.div.withConfig({displayName:"about__PicContainer",componentId:"sc-1wexrvx-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],h.j.tablet(H()),h.j.phablet(D())),K=Object(m.b)(P.a).withConfig({displayName:"about__Avatar",componentId:"sc-1wexrvx-6"})(["width:100%;max-width:100%;vertical-align:middle;position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],h.l.borderRadius,h.l.transition),Q=m.b.div.withConfig({displayName:"about__AvatarContainer",componentId:"sc-1wexrvx-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;transition:",";background-color:",";mix-blend-mode:screen;border-radius:",";}&:after{content:'';display:block;width:100%;height:100%;border:2px solid ",";position:absolute;top:20px;left:20px;z-index:-1;transition:",";border-radius:",";}"],h.l.borderRadius,h.l.colors.lightAmber,K,h.l.transition,h.l.colors.navy,h.l.borderRadius,h.l.colors.lightAmber,h.l.transition,h.l.borderRadius),U=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.about,Object(f.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,r=e.html;return o.a.createElement(q,{id:"about",innerRef:function(e){return t.about=e}},o.a.createElement(h.c,null,n.title),o.a.createElement(W,null,o.a.createElement(J,null,o.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:r}}),o.a.createElement(Y,null,n.skills&&n.skills.map(function(t,e){return o.a.createElement(V,{key:e},t)}))),o.a.createElement(X,null,o.a.createElement(Q,null,o.a.createElement(K,{fluid:n.avatar.childImageSharp.fluid,alt:"Avatar"})))))},e}(r.Component);U.propTypes={data:a.a.array.isRequired};var Z=U;n(149);function $(){var t=d()(["padding-left: 0;"]);return $=function(){return t},t}function tt(){var t=d()(["padding-left: 20px;"]);return tt=function(){return t},t}function et(){var t=d()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return et=function(){return t},t}function nt(){var t=d()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    min-width: 120px;\n  "]);return nt=function(){return t},t}function rt(){var t=d()(["padding: 0 15px 2px;"]);return rt=function(){return t},t}function ot(){var t=d()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return ot=function(){return t},t}function it(){var t=d()(["display: block;"]);return it=function(){return t},t}var at=Object(m.b)(h.h).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-13kygjg-0"})(["position:relative;max-width:700px;"]),lt=m.b.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-13kygjg-1"})(["display:flex;align-items:flex-start;position:relative;",";"],h.j.thone(it())),ct=m.b.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-13kygjg-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],h.j.thone(ot())),st=m.b.button.withConfig({displayName:"jobs__Tab",componentId:"sc-13kygjg-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],h.k.link,h.l.tabHeight,h.l.transition,h.l.colors.darkGrey,h.l.fonts.SFMono,h.l.fontSizes.smallish,function(t){return t.isActive?h.l.colors.green:h.l.colors.lightGrey},h.j.tablet(rt()),h.j.thone(nt(),h.k.flexCenter,h.l.colors.darkGrey),h.l.colors.lightNavy),ut=m.b.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-13kygjg-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],h.l.colors.green,h.l.tabHeight,h.l.borderRadius,h.l.transition,function(t){return t.activeTabId>0?t.activeTabId*h.l.tabHeight:0},h.j.thone(et(),h.l.tabWidth,function(t){return t.activeTabId>0?t.activeTabId*h.l.tabWidth:0})),dt=m.b.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-13kygjg-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],h.j.tablet(tt()),h.j.thone($())),pt=m.b.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-13kygjg-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:5px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(t){return t.isActive?1:0},function(t){return t.isActive?2:-1},function(t){return t.isActive?"relative":"absolute"},function(t){return t.isActive?"visible":"hidden"},h.l.transition,function(t){return t.isActive?"0.5s":"0s"},h.l.fontSizes.large,h.l.colors.green,h.l.fontSizes.xlarge,h.k.inlineLink),ft=m.b.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-13kygjg-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],h.l.colors.lightestSlate,h.l.fontSizes.xxlarge),mt=m.b.span.withConfig({displayName:"jobs__Company",componentId:"sc-13kygjg-8"})(["color:",";"],h.l.colors.green),ht=m.b.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-13kygjg-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.lightSlate),gt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={activeTabId:0},e.isActive=function(t){return e.state.activeTabId===t},e.setActiveTab=function(t){return e.setState({activeTabId:t})},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.jobs,Object(f.srConfig)())},n.render=function(){var t=this,e=this.state.activeTabId,n=this.props.data;return o.a.createElement(at,{id:"jobs",innerRef:function(e){return t.jobs=e}},o.a.createElement(h.c,null,"Where I've Worked"),o.a.createElement(lt,null,o.a.createElement(ct,{role:"tablist"},n&&n.map(function(e,n){var r=e.node;return o.a.createElement(st,{key:n,isActive:t.isActive(n),onClick:function(e){return t.setActiveTab(n,e)},role:"tab","aria-selected":t.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabindex:t.isActive(n)?"0":"-1"},o.a.createElement("span",null,r.frontmatter.company))}),o.a.createElement(ut,{activeTabId:e})),o.a.createElement(dt,null,n&&n.map(function(e,n){var r=e.node;return o.a.createElement(pt,{key:n,isActive:t.isActive(n),id:"job"+n,role:"tabpanel",tabindex:"0","aria-labelledby":"job"+n,"aria-hidden":!t.isActive(n)},o.a.createElement(ft,null,o.a.createElement("span",null,r.frontmatter.title),o.a.createElement(mt,null," @ ",o.a.createElement("a",{href:r.frontmatter.url,target:"_blank",rel:"nofollow noopener noreferrer"},r.frontmatter.company))),o.a.createElement(ht,null,o.a.createElement("span",null,r.frontmatter.range)),o.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:r.html}}))}))))},e}(r.Component);gt.propTypes={data:a.a.array.isRequired};var bt=gt,xt=(n(75),n(76),n(152));function vt(){var t=d()(["\n        grid-column: 1 / -1;\n        opacity: 0.25;\n      "]);return vt=function(){return t},t}function yt(){var t=d()(["height: 100%;"]);return yt=function(){return t},t}function jt(){var t=d()(["padding: 30px 25px 20px;"]);return jt=function(){return t},t}function wt(){var t=d()(["\n        grid-column: 1 / -1;\n        padding: 40px 40px 30px;\n      "]);return wt=function(){return t},t}function _t(){var t=d()(["margin-bottom: 70px;"]);return _t=function(){return t},t}function kt(){var t=d()(["\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  "]);return kt=function(){return t},t}function Ct(){var t=d()(["height: 100%;"]);return Ct=function(){return t},t}function Et(){var t=d()(["\n    object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(80%);\n  "]);return Et=function(){return t},t}function It(){var t=d()(["\n      color: ",";\n      margin-right: 10px;\n    "]);return It=function(){return t},t}function zt(){var t=d()(["\n    background-color: transparent;\n    padding: 20px 0;\n  "]);return zt=function(){return t},t}function Nt(){var t=d()(["display: block;"]);return Nt=function(){return t},t}function St(){var t=d()(["font-size: 24px;"]);return St=function(){return t},t}function Tt(){var t=d()(["padding: 30px 25px 20px;"]);return Tt=function(){return t},t}function Ot(){var t=d()(["\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  "]);return Ot=function(){return t},t}var Mt=Object(m.b)(h.h).withConfig({displayName:"featured__FeaturedContainer",componentId:"sc-1wogb0y-0"})(["",";flex-direction:column;align-items:flex-start;"],h.k.flexCenter),Rt=m.b.div.withConfig({displayName:"featured__FeaturedGrid",componentId:"sc-1wogb0y-1"})(["position:relative;"]),Lt=m.b.div.withConfig({displayName:"featured__ContentContainer",componentId:"sc-1wogb0y-2"})(["position:relative;z-index:2;grid-column:1 / 7;grid-row:1 / -1;",";",";"],h.j.thone(Ot()),h.j.phablet(Tt())),At=m.b.h4.withConfig({displayName:"featured__FeaturedLabel",componentId:"sc-1wogb0y-3"})(["font-size:",";font-weight:normal;color:",";font-family:",";margin-top:10px;padding-top:0;"],h.l.fontSizes.smallish,h.l.colors.green,h.l.fonts.SFMono),Pt=m.b.h5.withConfig({displayName:"featured__ProjectName",componentId:"sc-1wogb0y-4"})(["font-size:28px;font-weight:600;margin:0 0 20px;color:",";",";a{",";}"],h.l.colors.lightestSlate,h.j.tablet(St()),h.j.tablet(Nt())),Ft=m.b.div.withConfig({displayName:"featured__ProjectDescription",componentId:"sc-1wogb0y-5"})(["background-color:",";color:",";padding:20px;border-radius:",";font-size:17px;line-height:1.3;",";p{margin:0;}a{",";color:",";}"],h.l.colors.lightNavy,h.l.colors.lightSlate,h.l.borderRadius,h.j.thone(zt()),h.k.inlineLink,h.l.colors.white),Dt=Object(m.b)(h.i).withConfig({displayName:"featured__TechList",componentId:"sc-1wogb0y-6"})(["display:flex;flex-wrap:wrap;margin:25px 0 10px;li{font-family:",";font-size:",";color:",";margin-right:",";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}",";}"],h.l.fonts.SFMono,h.l.fontSizes.smallish,h.l.colors.lightSlate,h.l.margin,h.j.thone(It(),h.l.colors.lightestSlate)),Ht=m.b.div.withConfig({displayName:"featured__Links",componentId:"sc-1wogb0y-7"})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;a{padding:10px;svg{width:22px;height:22px;}}"]),Bt=Object(m.b)(P.a).withConfig({displayName:"featured__FeaturedImg",componentId:"sc-1wogb0y-8"})(["width:100%;max-width:100%;vertical-align:middle;border-radius:",";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);",";}"],h.l.borderRadius,h.j.tablet(Et())),Gt=m.b.div.withConfig({displayName:"featured__ImgContainer",componentId:"sc-1wogb0y-9"})(["position:relative;z-index:1;border-radius:",";background-color:",";border-radius:2px;grid-column:6 / -1;grid-row:1 / -1;transition:",";",";",";&:hover,&:focus{background:transparent;&:before,","{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:",";background-color:",";mix-blend-mode:screen;}"],h.l.borderRadius,h.l.colors.lightAmber,h.l.transition,h.j.tablet(Ct()),h.j.thone(kt()),Bt,h.l.transition,h.l.colors.navy),qt=m.b.div.withConfig({displayName:"featured__Project",componentId:"sc-1wogb0y-10"})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;",";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){","{grid-column:7 / -1;text-align:right;",";",";}","{justify-content:flex-end;li{margin-left:",";margin-right:0;}}","{justify-content:flex-end;margin-left:0;margin-right:-10px;}","{grid-column:1 / 8;",";",";}}"],h.j.thone(_t()),Lt,h.j.thone(wt()),h.j.phablet(jt()),Dt,h.l.margin,Ht,Gt,h.j.tablet(yt()),h.j.thone(vt())),Wt=function(t){function e(e){var n;return(n=t.call(this,e)||this).revealRefs=[],n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.featured,Object(f.srConfig)()),this.revealRefs.forEach(function(t){return Object(F.a)().reveal(t,Object(f.srConfig)())})},n.render=function(){var t=this,e=this.props.data;return o.a.createElement(Mt,{id:"projects"},o.a.createElement(h.c,{innerRef:function(e){return t.featured=e}},"Some Things I've Built"),o.a.createElement(Rt,null,e&&e.map(function(e,n){var r=e.node;return o.a.createElement(qt,{key:n,innerRef:function(e){return t.revealRefs[n]=e}},o.a.createElement(Lt,null,o.a.createElement(At,null,"Featured Project"),o.a.createElement(Pt,null,r.frontmatter.external?o.a.createElement(h.a,{href:r.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},r.frontmatter.title):r.frontmatter.title),o.a.createElement(Ft,{dangerouslySetInnerHTML:{__html:r.html}}),r.frontmatter.tech&&o.a.createElement(Dt,null,r.frontmatter.tech.map(function(t,e){return o.a.createElement("li",{key:e},t)})),o.a.createElement(Ht,null,r.frontmatter.github&&o.a.createElement(h.a,{href:r.frontmatter.github,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(xt.d,null)),r.frontmatter.external&&o.a.createElement(h.a,{href:r.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(xt.b,null)))),o.a.createElement(Gt,null,o.a.createElement(Bt,{fluid:r.frontmatter.cover.childImageSharp.fluid})))})))},e}(r.Component);Wt.propTypes={data:a.a.array.isRequired};var Jt=Wt;n(77);function Yt(){var t=d()(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return Yt=function(){return t},t}function Vt(){var t=d()(["font-size: 24px;"]);return Vt=function(){return t},t}var Xt=Object(m.b)(h.h).withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-12h64lj-0"})(["",";flex-direction:column;align-items:flex-start;"],h.k.flexCenter),Kt=m.b.h4.withConfig({displayName:"projects__ProjectsTitle",componentId:"sc-12h64lj-1"})(["margin:0 auto 50px;font-size:",";",";a{display:block;}"],h.l.fontSizes.h3,h.j.tablet(Vt())),Qt=m.b.div.withConfig({displayName:"projects__ProjectsGrid",componentId:"sc-12h64lj-2"})([".projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],h.j.desktop(Yt())),Ut=m.b.div.withConfig({displayName:"projects__ProjectInner",componentId:"sc-12h64lj-3"})(["",";flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;border-radius:",";transition:",";background-color:",";"],h.k.flexBetween,h.l.borderRadius,h.l.transition,h.l.colors.lightNavy),Zt=m.b.div.withConfig({displayName:"projects__Project",componentId:"sc-12h64lj-4"})(["transition:",";&:hover,&:focus{","{transform:translateY(-5px);box-shadow:0 2px 4px ",";box-shadow:0 19px 38px "," 0 15px 12px ",";}}"],h.l.transition,Ut,h.l.colors.shadowNavy,h.l.colors.darkestNavy,h.l.colors.shadowNavy),$t=m.b.div.withConfig({displayName:"projects__ProjectTop",componentId:"sc-12h64lj-5"})([""]),te=m.b.div.withConfig({displayName:"projects__ProjectBottom",componentId:"sc-12h64lj-6"})([""]),ee=m.b.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-12h64lj-7"})(["",";margin-bottom:30px;"],h.k.flexBetween),ne=m.b.div.withConfig({displayName:"projects__Folder",componentId:"sc-12h64lj-8"})(["color:",";svg{width:40px;height:40px;}"],h.l.colors.green),re=m.b.div.withConfig({displayName:"projects__Links",componentId:"sc-12h64lj-9"})(["margin-right:-10px;color:",";"],h.l.colors.lightSlate),oe=Object(m.b)(h.a).withConfig({displayName:"projects__IconLink",componentId:"sc-12h64lj-10"})(["padding:10px;svg{width:22px;height:22px;}"]),ie=m.b.h5.withConfig({displayName:"projects__ProjectName",componentId:"sc-12h64lj-11"})(["margin:0 0 10px;font-size:",";color:",";"],h.l.fontSizes.xxlarge,h.l.colors.lightestSlate),ae=Object(m.b)(h.a).withConfig({displayName:"projects__ProjectLink",componentId:"sc-12h64lj-12"})([""]),le=m.b.div.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-12h64lj-13"})(["font-size:17px;line-height:1.25;a{",";}"],h.k.inlineLink),ce=Object(m.b)(h.i).withConfig({displayName:"projects__TechList",componentId:"sc-12h64lj-14"})(["flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;margin-top:20px;li{font-family:",";font-size:",";color:",";line-height:2;margin-right:15px;&:last-of-type{margin-right:0;}}"],h.l.fonts.SFMono,h.l.fontSizes.xsmall,h.l.colors.lightSlate),se=Object(m.b)(h.b).withConfig({displayName:"projects__ShowMoreButton",componentId:"sc-12h64lj-15"})(["",";margin:100px auto 0;"],h.k.bigButton),ue=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={showMore:!1},n.showMoreToggle=function(){return n.setState({showMore:!n.state.showMore})},n.revealRefs=[],n.restRefs=[],n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.projects,Object(f.srConfig)()),this.revealRefs.forEach(function(t,e){return Object(F.a)().reveal(t,Object(f.srConfig)(100*e))})},n.render=function(){var t=this,e=this.state.showMore,n=this.props.data.filter(function(t){return"true"===t.node.frontmatter.show}),r=n.slice(0,6),i=e?n:r;return o.a.createElement(Xt,null,o.a.createElement(Kt,{innerRef:function(e){return t.projects=e}},"Other Projects"),o.a.createElement(Qt,null,o.a.createElement(p.TransitionGroup,{className:"projects"},i&&i.map(function(e,n){var r=e.node;return o.a.createElement(p.CSSTransition,{key:n,classNames:"fadeup",timeout:n>=6?300*(n-6):300,exit:!1},o.a.createElement(Zt,{key:n,innerRef:function(e){return t.revealRefs[n]=e},style:{transitionDelay:(n>=6?100*(n-6):0)+"ms"}},o.a.createElement(Ut,null,o.a.createElement($t,null,o.a.createElement(ee,null,o.a.createElement(ne,null,o.a.createElement(xt.c,null)),o.a.createElement(re,null,r.frontmatter.github&&o.a.createElement(oe,{href:r.frontmatter.github,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},o.a.createElement(xt.d,null)),r.frontmatter.external&&o.a.createElement(oe,{href:r.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.a.createElement(xt.b,null)))),o.a.createElement(ie,null,r.frontmatter.external?o.a.createElement(ae,{href:r.frontmatter.external,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Visit Website"},r.frontmatter.title):r.frontmatter.title),o.a.createElement(le,{dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement(te,null,o.a.createElement(ce,null,r.frontmatter.tech.map(function(t,e){return o.a.createElement("li",{key:e},t)}))))))}))),o.a.createElement(se,{onClick:this.showMoreToggle},e?"Fewer":"More"," Projects"))},e}(r.Component);ue.propTypes={data:a.a.array.isRequired};var de=ue;function pe(){var t=d()(["font-size: 40px;"]);return pe=function(){return t},t}function fe(){var t=d()(["font-size: 50px;"]);return fe=function(){return t},t}function me(){var t=d()(["font-size: ",";"]);return me=function(){return t},t}function he(){var t=d()(["font-size: ",";"]);return he=function(){return t},t}var ge=Object(m.b)(h.h).withConfig({displayName:"contact__ContactContainer",componentId:"sc-6cd4xi-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],h.k.inlineLink),be=Object(m.b)(h.c).withConfig({displayName:"contact__Header",componentId:"sc-6cd4xi-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],h.l.colors.green,h.l.fontSizes.medium,h.l.fonts.SFMono,h.j.desktop(he(),h.l.fontSizes.small),h.l.fontSizes.small,h.j.desktop(me(),h.l.fontSizes.smallish)),xe=m.b.h4.withConfig({displayName:"contact__Title",componentId:"sc-6cd4xi-2"})(["margin:0 0 20px;font-size:60px;",";",";"],h.j.desktop(fe()),h.j.tablet(pe())),ve=Object(m.b)(h.a).withConfig({displayName:"contact__EmailLink",componentId:"sc-6cd4xi-3"})(["",";margin-top:50px;"],h.k.bigButton),ye=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(F.a)().reveal(this.contact,Object(f.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,r=e.html;return o.a.createElement(ge,{id:"contact",innerRef:function(e){return t.contact=e}},o.a.createElement(be,null,"What's Next?"),o.a.createElement(xe,null,n.title),o.a.createElement(h.g,{dangerouslySetInnerHTML:{__html:r}}),o.a.createElement(ve,{href:"mailto:"+f.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},e}(r.Component);ye.propTypes={data:a.a.array.isRequired};var je=ye;n.d(e,"query",function(){return ke});var we=Object(m.b)(h.d).withConfig({displayName:"pages__MainContainer",componentId:"sc-1tzx2o8-0"})(["",";counter-reset:section;"],h.k.sidePadding),_e=function(t){var e=t.data,n=t.location;return o.a.createElement(l.a,{location:n},o.a.createElement(we,{id:"content"},o.a.createElement(L,{data:e.hero.edges}),o.a.createElement(Z,{data:e.about.edges}),o.a.createElement(bt,{data:e.jobs.edges}),o.a.createElement(Jt,{data:e.featured.edges}),o.a.createElement(de,{data:e.projects.edges}),o.a.createElement(je,{data:e.contact.edges})))};_e.propTypes={data:a.a.object.isRequired,location:a.a.object};e.default=_e;var ke="1311539105"}}]);
//# sourceMappingURL=component---src-pages-index-js-a36991caaf567590011d.js.map