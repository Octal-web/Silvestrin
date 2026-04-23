import{r as W,j as u,R as Ye,q as Dt,S as Ka,J as at}from"./app-Bo--oWSO.js";import{g as le,S as $t,L as Rt,D as Ja}from"./LetterReveal-Ds3NOvof.js";import{R as nt}from"./Reveal-CCRVsC99.js";import{c as qa,A as Za}from"./AnimatedCheckMark-BHW3DOfF.js";const Qa=({data:e,content:t})=>{const a=W.useRef(null),n=W.useRef(null);le.registerPlugin($t),W.useEffect(()=>{!a.current||!n.current||(le.fromTo(n.current,{top:"30%",x:"50%",scaleX:-1,scaleY:-1},{x:"33%",ease:"none",scrollTrigger:{trigger:a.current,start:"top bottom",end:"bottom top",scrub:!0}}),le.fromTo(n.current,{rotation:10},{rotation:16,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}))},[]);const r=e.emails.split(`
`).map(i=>{const[o,l]=i.split(":").map(f=>f.trim());return{label:o,value:l}}),s=e.filiais.split(`\r
\r
`).map(i=>{const o=i.split(`\r
`),l=o[0],f=o.find(d=>d.includes("Fone")),m=o.filter(d=>d!==o[0]&&d!==f).join(`
`);return{label:l,value:m,phoneLine:f}});return u.jsxs("section",{className:"relative z-[1]",ref:a,children:[u.jsx("img",{ref:n,src:t[1].imagem,className:"hidden sm:block absolute max-h-[7%] z-10 md:max-h-[17%] 2xl:max-h-[78%] right-0 drop-shadow-lg",style:{top:"0%"}}),u.jsx("div",{className:"container max-w-large",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[u.jsxs(nt,{className:"py-10 lg:py-20",children:[u.jsx(Rt,{className:"font-secondary text-primary text-4xl md:text-5xl 2xl:text-6xl font-black leading-tight max-w-[700px] mb-10",text:t[0].titulo,element:"h1"}),u.jsxs("ul",{className:"max-w-[231px] text-custom-gray",children:[u.jsxs("li",{className:"text-xs lg:text-sm font-light leading-tight mb-3",children:[u.jsx("span",{className:"block font-bold",children:"Silvestrin Frutas - Matriz"}),e.endereco," - CEP ",e.cep]}),u.jsx("li",{children:u.jsxs("p",{className:"leading-tight font-bold text-xs lg:text-sm",children:["Fone: ",e.telefone]})})]}),u.jsxs("div",{className:"max-w-[650px]",children:[u.jsx("div",{className:"bg-primary rounded-full px-5 py-1 w-fit text-white font-bold mt-16 md:mt-20 mb-6 text-sm md:text-base",children:"Outras Unidades:"}),u.jsx("ul",{className:"grid grid-cols-2 gap-y-6 gap-x-6 md:gap-y-12 md:gap-x-15 text-custom-gray text-xs lg:text-sm",children:s.map((i,o)=>u.jsxs("li",{className:"flex flex-col",children:[u.jsx("span",{className:"leading-tight font-bold mb-1",children:i.label}),u.jsx("span",{className:"font-light",children:i.value.split(`
`).map((l,f)=>u.jsx("p",{className:"-mt-1",children:l},f))}),u.jsx("span",{className:"leading-tight font-bold mt-3",children:i.phoneLine})]},o))})]}),u.jsx("div",{className:"text-custom-gray text-xs lg:text-sm font-light leading-tight mt-10 md:mt-14",children:u.jsx("ul",{className:"flex max-sm:flex-wrap gap-4 text-custom-gray",children:r.slice(0,2).map((i,o)=>u.jsxs("li",{children:[u.jsx("div",{className:"leading-tight font-bold",children:i.label}),u.jsx("div",{className:"font-light",children:i.value})]},o))})})]}),u.jsx(nt,{className:"hidden sm:block absolute top-30 right-0 sm:w-[calc(50%_+_5em)] sm:-right-10 sm:-top-10 sm:-bottom-10 sm:max-w-[1060px]",direction:"right",children:u.jsxs("div",{className:"",children:[u.jsx("svg",{className:"absolute w-0 h-auto",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("defs",{children:u.jsx("clipPath",{id:"custom-shape-1",clipPathUnits:"objectBoundingBox",children:u.jsx("path",{d:"M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7",transform:"scale(0.00105, 0.0014)",children:u.jsx("animate",{attributeName:"d",dur:"30s",repeatCount:"indefinite",values:`
                                                M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7;M928.4,259.7c0,229.6-207.8,426.8-464.2,426.8S0,489.3,0,259.7c0-200.9,223.2-136,389.1-181.5c4.1-1.1,8.1-2.3,12.4-3.6c10.8-3.3,21.3-7,31.3-11.1c9.2-3.8,18.1-7.8,26.6-12.1C675.2-58,928.4,6.9,928.4,248.7;M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7`,keyTimes:"0;0.5;1",calcMode:"spline",keySplines:"0 0 0.58 1;0 0 0.58 1"})})})})}),u.jsx("div",{className:"w-full",style:{clipPath:"url(#custom-shape-1)"},children:u.jsx("img",{src:t[0].imagem,className:"w-full",alt:""})})]})})]})})]})};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var en={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function tn(e){if(Array.isArray(e))return e}function an(e){if(Array.isArray(e))return Pe(e)}function nn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,zt(n.key),n)}}function sn(e,t,a){return t&&rn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=He(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){o=!0,s=l},f:function(){try{i||a.return==null||a.return()}finally{if(o)throw s}}}}function v(e,t,a){return(t=zt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function on(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ln(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,s,i,o=[],l=!0,f=!1;try{if(s=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=s.call(a)).done)&&(o.push(n.value),o.length!==t);l=!0);}catch(m){f=!0,r=m}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(f)throw r}}return o}}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function un(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(a),!0).forEach(function(n){v(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function pe(e,t){return tn(e)||ln(e,t)||He(e,t)||fn()}function E(e){return an(e)||on(e)||He(e)||un()}function cn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zt(e){var t=cn(e,"string");return typeof t=="symbol"?t:t+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function He(e,t){if(e){if(typeof e=="string")return Pe(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Pe(e,t):void 0}}var it=function(){},Ge={},Wt={},Ut=null,Yt={mark:it,measure:it};try{typeof window<"u"&&(Ge=window),typeof document<"u"&&(Wt=document),typeof MutationObserver<"u"&&(Ut=MutationObserver),typeof performance<"u"&&(Yt=performance)}catch{}var dn=Ge.navigator||{},st=dn.userAgent,ot=st===void 0?"":st,D=Ge,w=Wt,lt=Ut,se=Yt;D.document;var M=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Ht=~ot.indexOf("MSIE")||~ot.indexOf("Trident/"),we,mn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Gt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},pn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Bt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N="classic",ae="duotone",Xt="sharp",Vt="sharp-duotone",Kt="chisel",Jt="etch",qt="graphite",Zt="jelly",Qt="jelly-duo",ea="jelly-fill",ta="notdog",aa="notdog-duo",na="slab",ra="slab-press",ia="thumbprint",sa="utility",oa="utility-duo",la="utility-fill",fa="whiteboard",gn="Classic",vn="Duotone",bn="Sharp",yn="Sharp Duotone",xn="Chisel",wn="Etch",Sn="Graphite",An="Jelly",kn="Jelly Duo",jn="Jelly Fill",Nn="Notdog",In="Notdog Duo",Pn="Slab",En="Slab Press",Cn="Thumbprint",Fn="Utility",On="Utility Duo",_n="Utility Fill",Tn="Whiteboard",ua=[N,ae,Xt,Vt,Kt,Jt,qt,Zt,Qt,ea,ta,aa,na,ra,ia,sa,oa,la,fa];we={},v(v(v(v(v(v(v(v(v(v(we,N,gn),ae,vn),Xt,bn),Vt,yn),Kt,xn),Jt,wn),qt,Sn),Zt,An),Qt,kn),ea,jn),v(v(v(v(v(v(v(v(v(we,ta,Nn),aa,In),na,Pn),ra,En),ia,Cn),sa,Fn),oa,On),la,_n),fa,Tn);var Ln={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Mn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Dn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),$n={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ca=["fak","fa-kit","fakd","fa-kit-duotone"],ft={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rn=["kit"],zn="kit",Wn="kit-duotone",Un="Kit",Yn="Kit Duotone";v(v({},zn,Un),Wn,Yn);var Hn={kit:{"fa-kit":"fak"}},Gn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Bn={kit:{fak:"fa-kit"}},ut={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Se,oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Vn="classic",Kn="duotone",Jn="sharp",qn="sharp-duotone",Zn="chisel",Qn="etch",er="graphite",tr="jelly",ar="jelly-duo",nr="jelly-fill",rr="notdog",ir="notdog-duo",sr="slab",or="slab-press",lr="thumbprint",fr="utility",ur="utility-duo",cr="utility-fill",dr="whiteboard",mr="Classic",hr="Duotone",pr="Sharp",gr="Sharp Duotone",vr="Chisel",br="Etch",yr="Graphite",xr="Jelly",wr="Jelly Duo",Sr="Jelly Fill",Ar="Notdog",kr="Notdog Duo",jr="Slab",Nr="Slab Press",Ir="Thumbprint",Pr="Utility",Er="Utility Duo",Cr="Utility Fill",Fr="Whiteboard";Se={},v(v(v(v(v(v(v(v(v(v(Se,Vn,mr),Kn,hr),Jn,pr),qn,gr),Zn,vr),Qn,br),er,yr),tr,xr),ar,wr),nr,Sr),v(v(v(v(v(v(v(v(v(Se,rr,Ar),ir,kr),sr,jr),or,Nr),lr,Ir),fr,Pr),ur,Er),cr,Cr),dr,Fr);var Or="kit",_r="kit-duotone",Tr="Kit",Lr="Kit Duotone";v(v({},Or,Tr),_r,Lr);var Mr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Dr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},$r=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],da=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Xn,$r),Rr=["solid","regular","light","thin","duotone","brands","semibold"],ma=[1,2,3,4,5,6,7,8,9,10],zr=ma.concat([11,12,13,14,15,16,17,18,19,20]),Wr=["aw","fw","pull-left","pull-right"],Ur=[].concat(E(Object.keys(Dr)),Rr,Wr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ma.map(function(e){return"".concat(e,"x")})).concat(zr.map(function(e){return"w-".concat(e)})),Yr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",Ce=16,ha="fa",pa="svg-inline--fa",U="data-fa-i2svg",Fe="data-fa-pseudo-element",Hr="data-fa-pseudo-element-pending",Be="data-prefix",Xe="data-icon",ct="fontawesome-i2svg",Gr="async",Br=["HTML","HEAD","STYLE","SCRIPT"],ga=["::before","::after",":before",":after"],va=function(){try{return!0}catch{return!1}}();function ne(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[N]}})}var ba=c({},Gt);ba[N]=c(c(c(c({},{"fa-duotone":"duotone"}),Gt[N]),ft.kit),ft["kit-duotone"]);var Xr=ne(ba),Oe=c({},$n);Oe[N]=c(c(c(c({},{duotone:"fad"}),Oe[N]),ut.kit),ut["kit-duotone"]);var dt=ne(Oe),_e=c({},Ee);_e[N]=c(c({},_e[N]),Bn.kit);var Ve=ne(_e),Te=c({},Mr);Te[N]=c(c({},Te[N]),Hn.kit);ne(Te);var Vr=mn,ya="fa-layers-text",Kr=hn,Jr=c({},Ln);ne(Jr);var qr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=pn,Zr=[].concat(E(Rn),E(Ur)),Z=D.FontAwesomeConfig||{};function Qr(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ei(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var ti=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ti.forEach(function(e){var t=pe(e,2),a=t[0],n=t[1],r=ei(Qr(a));r!=null&&(Z[n]=r)})}var xa={styleDefault:"solid",familyDefault:N,cssPrefix:ha,replacementClass:pa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var V=c(c({},xa),Z);V.autoReplaceSvg||(V.observeMutations=!1);var p={};Object.keys(xa).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){V[e]=a,Q.forEach(function(n){return n(p)})},get:function(){return V[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Q.forEach(function(a){return a(p)})},get:function(){return V.cssPrefix}});D.FontAwesomeConfig=p;var Q=[];function ai(e){return Q.push(e),function(){Q.splice(Q.indexOf(e),1)}}var H=Ce,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ni(e){if(!(!e||!M)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=w.head.childNodes,n=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return w.head.insertBefore(t,n),e}}var ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var e=12,t="";e-- >0;)t+=ri[Math.random()*62|0];return t}function J(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ke(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ii(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(wa(e[a]),'" ')},"").trim()}function ge(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Je(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function si(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:f}}function oi(e){var t=e.transform,a=e.width,n=a===void 0?Ce:a,r=e.height,s=r===void 0?Ce:r,i="";return Ht?i+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-s/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "),i+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var li=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Sa(){var e=ha,t=pa,a=p.cssPrefix,n=p.replacementClass,r=li;if(a!==e||n!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(n))}return r}var ht=!1;function ke(){p.autoAddCss&&!ht&&(ni(Sa()),ht=!0)}var fi={mixout:function(){return{dom:{css:Sa,insertCss:ke}}},hooks:function(){return{beforeDOMElementCreation:function(){ke()},beforeI2svg:function(){ke()}}}},L=D||{};L[T]||(L[T]={});L[T].styles||(L[T].styles={});L[T].hooks||(L[T].hooks={});L[T].shims||(L[T].shims=[]);var P=L[T],Aa=[],ka=function(){w.removeEventListener("DOMContentLoaded",ka),me=1,Aa.map(function(t){return t()})},me=!1;M&&(me=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),me||w.addEventListener("DOMContentLoaded",ka));function ui(e){M&&(me?setTimeout(e,0):Aa.push(e))}function re(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,s=r===void 0?[]:r;return typeof e=="string"?wa(e):"<".concat(t," ").concat(ii(n),">").concat(s.map(re).join(""),"</").concat(t,">")}function pt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var je=function(t,a,n,r){var s=Object.keys(t),i=s.length,o=a,l,f,m;for(n===void 0?(l=1,m=t[s[0]]):(l=0,m=n);l<i;l++)f=s[l],m=o(m,t[f],f,t);return m};function ja(e){return E(e).length!==1?null:e.codePointAt(0).toString(16)}function gt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Le(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,s=gt(t);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(e,gt(t)):P.styles[e]=c(c({},P.styles[e]||{}),s),e==="fas"&&Le("fa",t)}var te=P.styles,ci=P.shims,Na=Object.keys(Ve),di=Na.reduce(function(e,t){return e[t]=Object.keys(Ve[t]),e},{}),qe=null,Ia={},Pa={},Ea={},Ca={},Fa={};function mi(e){return~Zr.indexOf(e)}function hi(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!mi(r)?r:null}var Oa=function(){var t=function(s){return je(te,function(i,o,l){return i[l]=je(o,s,{}),i},{})};Ia=t(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=i})}return r}),Pa=t(function(r,s,i){if(r[i]=i,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=i})}return r}),Fa=t(function(r,s,i){var o=s[2];return r[i]=i,o.forEach(function(l){r[l]=i}),r});var a="far"in te||p.autoFetchSvg,n=je(ci,function(r,s){var i=s[0],o=s[1],l=s[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Ea=n.names,Ca=n.unicodes,qe=ve(p.styleDefault,{family:p.familyDefault})};ai(function(e){qe=ve(e.styleDefault,{family:p.familyDefault})});Oa();function Ze(e,t){return(Ia[e]||{})[t]}function pi(e,t){return(Pa[e]||{})[t]}function z(e,t){return(Fa[e]||{})[t]}function _a(e){return Ea[e]||{prefix:null,iconName:null}}function gi(e){var t=Ca[e],a=Ze("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function $(){return qe}var Ta=function(){return{prefix:null,iconName:null,rest:[]}};function vi(e){var t=N,a=Na.reduce(function(n,r){return n[r]="".concat(p.cssPrefix,"-").concat(r),n},{});return ua.forEach(function(n){(e.includes(a[n])||e.some(function(r){return di[n].includes(r)}))&&(t=n)}),t}function ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?N:a,r=Xr[n][e];if(n===ae&&!e)return"fad";var s=dt[n][e]||dt[n][r],i=e in P.styles?e:null,o=s||i||null;return o}function bi(e){var t=[],a=null;return e.forEach(function(n){var r=hi(p.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function vt(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var bt=da.concat(ca);function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,s=vt(e.filter(function(g){return bt.includes(g)})),i=vt(e.filter(function(g){return!bt.includes(g)})),o=s.filter(function(g){return r=g,!Bt.includes(g)}),l=pe(o,1),f=l[0],m=f===void 0?null:f,d=vi(s),h=c(c({},bi(i)),{},{prefix:ve(m,{family:d})});return c(c(c({},h),Si({values:e,family:d,styles:te,config:p,canonical:h,givenPrefix:r})),yi(n,r,h))}function yi(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var s=t==="fa"?_a(r):{},i=z(n,r);return r=s.iconName||i||r,n=s.prefix||n,n==="far"&&!te.far&&te.fas&&!p.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var xi=ua.filter(function(e){return e!==N||e!==ae}),wi=Object.keys(Ee).filter(function(e){return e!==N}).map(function(e){return Object.keys(Ee[e])}).flat();function Si(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,s=r===void 0?"":r,i=e.styles,o=i===void 0?{}:i,l=e.config,f=l===void 0?{}:l,m=a===ae,d=t.includes("fa-duotone")||t.includes("fad"),h=f.familyDefault==="duotone",g=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(d||h||g)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&xi.includes(a)){var b=Object.keys(o).find(function(S){return wi.includes(S)});if(b||f.autoFetchSvg){var y=Dn.get(a).defaultShortPrefixId;n.prefix=y,n.iconName=z(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||s==="fa")&&(n.prefix=$()||"fas"),n}var Ai=function(){function e(){nn(this,e),this.definitions={}}return sn(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=c(c({},a.definitions[o]||{}),i[o]),Le(o,i[o]);var l=Ve[N][o];l&&Le(l,i[o]),Oa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],o=i.prefix,l=i.iconName,f=i.icon,m=f[2];a[o]||(a[o]={}),m.length>0&&m.forEach(function(d){typeof d=="string"&&(a[o][d]=f)}),a[o][l]=f}),a}}])}(),yt=[],B={},X={},ki=Object.keys(X);function ji(e,t){var a=t.mixoutsTo;return yt=e,B={},Object.keys(X).forEach(function(n){ki.indexOf(n)===-1&&delete X[n]}),yt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),de(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=r[i][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){B[i]||(B[i]=[]),B[i].push(s[i])})}n.provides&&n.provides(X)}),a}function Me(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var s=B[e]||[];return s.forEach(function(i){t=i.apply(null,[t].concat(n))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=B[e]||[];r.forEach(function(s){s.apply(null,a)})}function R(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||$();if(t)return t=z(a,t)||t,pt(La.definitions,a,t)||pt(P.styles,a,t)}var La=new Ai,Ni=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Y("noAuto")},Ii={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(Y("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ui(function(){Ei({autoReplaceSvgRoot:a}),Y("watch",t)})}},Pi={icon:function(t){if(t===null)return null;if(de(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ve(t[0]);return{prefix:n,iconName:z(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Vr))){var r=be(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:z(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var s=$();return{prefix:s,iconName:z(s,t)||t}}}},I={noAuto:Ni,config:p,dom:Ii,parse:Pi,library:La,findIconDefinition:De,toHtml:re},Ei=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?w:a;(Object.keys(P.styles).length>0||p.autoFetchSvg)&&M&&p.autoReplaceSvg&&I.dom.i2svg({node:n})};function ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return re(n)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var n=w.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Ci(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,s=e.styles,i=e.transform;if(Je(i)&&a.found&&!n.found){var o=a.width,l=a.height,f={x:o/l/2,y:.5};r.style=ge(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Fi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,s=e.symbol,i=s===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:n}]}]}function Oi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Qe(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,s=e.iconName,i=e.transform,o=e.symbol,l=e.maskId,f=e.extra,m=e.watchable,d=m===void 0?!1:m,h=n.found?n:a,g=h.width,b=h.height,y=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(function(x){return f.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(f.classes).join(" "),S={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:y,role:f.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(b)})};!Oi(f.attributes)&&!f.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[U]="");var A=c(c({},S),{},{prefix:r,iconName:s,main:a,mask:n,maskId:l,transform:i,symbol:o,styles:c({},f.styles)}),k=n.found&&a.found?R("generateAbstractMask",A)||{children:[],attributes:{}}:R("generateAbstractIcon",A)||{children:[],attributes:{}},j=k.children,F=k.attributes;return A.children=j,A.attributes=F,o?Fi(A):Ci(A)}function xt(e){var t=e.content,a=e.width,n=e.height,r=e.transform,s=e.extra,i=e.watchable,o=i===void 0?!1:i,l=c(c({},s.attributes),{},{class:s.classes.join(" ")});o&&(l[U]="");var f=c({},s.styles);Je(r)&&(f.transform=oi({transform:r,width:a,height:n}),f["-webkit-transform"]=f.transform);var m=ge(f);m.length>0&&(l.style=m);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function _i(e){var t=e.content,a=e.extra,n=c(c({},a.attributes),{},{class:a.classes.join(" ")}),r=ge(a.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[t]}),s}var Ne=P.styles;function $e(e){var t=e[0],a=e[1],n=e.slice(4),r=pe(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:a,icon:i}}var Ti={found:!1,width:512,height:512};function Li(e,t){!va&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Re(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=$()),new Promise(function(n,r){if(a==="fa"){var s=_a(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ne[t]&&Ne[t][e]){var i=Ne[t][e];return n($e(i))}Li(e,t),n(c(c({},Ti),{},{icon:p.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var wt=function(){},ze=p.measurePerformance&&se&&se.mark&&se.measure?se:{mark:wt,measure:wt},q='FA "7.2.0"',Mi=function(t){return ze.mark("".concat(q," ").concat(t," begins")),function(){return Ma(t)}},Ma=function(t){ze.mark("".concat(q," ").concat(t," ends")),ze.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},et={begin:Mi,end:Ma},ue=function(){};function St(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function Di(e){var t=e.getAttribute?e.getAttribute(Be):null,a=e.getAttribute?e.getAttribute(Xe):null;return t&&a}function $i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Ri(){if(p.autoReplaceSvg===!0)return ce.replace;var e=ce[p.autoReplaceSvg];return e||ce.replace}function zi(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Wi(e){return w.createElement(e)}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?zi:Wi:a;if(typeof e=="string")return w.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var s=e.children||[];return s.forEach(function(i){r.appendChild(Da(i,{ceFn:n}))}),r}function Ui(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ce={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Da(r),a)}),a.getAttribute(U)===null&&p.keepOriginalSource){var n=w.createComment(Ui(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Ke(a).indexOf(p.replacementClass))return ce.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,l){return l===p.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(o){return re(o)}).join(`
`);a.setAttribute(U,""),a.innerHTML=i}};function At(e){e()}function $a(e,t){var a=typeof t=="function"?t:ue;if(e.length===0)a();else{var n=At;p.mutateApproach===Gr&&(n=D.requestAnimationFrame||At),n(function(){var r=Ri(),s=et.begin("mutate");e.map(r),s(),a()})}}var tt=!1;function Ra(){tt=!0}function We(){tt=!1}var he=null;function kt(e){if(lt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?ue:t,n=e.nodeCallback,r=n===void 0?ue:n,s=e.pseudoElementsCallback,i=s===void 0?ue:s,o=e.observeMutationsRoot,l=o===void 0?w:o;he=new lt(function(f){if(!tt){var m=$();J(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!St(d.addedNodes[0])&&(p.searchPseudoElements&&i(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&St(d.target)&&~qr.indexOf(d.attributeName))if(d.attributeName==="class"&&Di(d.target)){var h=be(Ke(d.target)),g=h.prefix,b=h.iconName;d.target.setAttribute(Be,g||m),b&&d.target.setAttribute(Xe,b)}else $i(d.target)&&r(d.target)})}}),M&&he.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yi(){he&&he.disconnect()}function Hi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(n[i]=o.join(":").trim()),n},{})),a}function Gi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=be(Ke(e));return r.prefix||(r.prefix=$()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=pi(r.prefix,e.innerText)||Ze(r.prefix,ja(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Bi(e){var t=J(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function Xi(){return{iconName:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Gi(e),n=a.iconName,r=a.prefix,s=a.rest,i=Bi(e),o=Me("parseNodeAttributes",{},e),l=t.styleParser?Hi(e):[];return c({iconName:n,prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}var Vi=P.styles;function za(e){var t=p.autoReplaceSvg==="nest"?jt(e,{styleParser:!1}):jt(e);return~t.extra.classes.indexOf(ya)?R("generateLayersText",e,t):R("generateSvgReplacementMutation",e,t)}function Ki(){return[].concat(E(ca),E(da))}function Nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=w.documentElement.classList,n=function(d){return a.add("".concat(ct,"-").concat(d))},r=function(d){return a.remove("".concat(ct,"-").concat(d))},s=p.autoFetchSvg?Ki():Bt.concat(Object.keys(Vi));s.includes("fa")||s.push("fa");var i=[".".concat(ya,":not([").concat(U,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(U,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=J(e.querySelectorAll(i))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=et.begin("onTree"),f=o.reduce(function(m,d){try{var h=za(d);h&&m.push(h)}catch(g){va||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,d){Promise.all(f).then(function(h){$a(h,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),m()})}).catch(function(h){l(),d(h)})})}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(e).then(function(a){a&&$a([a],t)})}function qi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:De(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:De(r||{})),e(n,c(c({},a),{},{mask:r}))}}var Zi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?C:n,s=a.symbol,i=s===void 0?!1:s,o=a.mask,l=o===void 0?null:o,f=a.maskId,m=f===void 0?null:f,d=a.classes,h=d===void 0?[]:d,g=a.attributes,b=g===void 0?{}:g,y=a.styles,S=y===void 0?{}:y;if(t){var A=t.prefix,k=t.iconName,j=t.icon;return ye(c({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),Qe({icons:{main:$e(j),mask:l?$e(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:c(c({},C),r),symbol:i,maskId:m,extra:{attributes:b,styles:S,classes:h}})})}},Qi={mixout:function(){return{icon:qi(Zi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Nt,a.nodeCallback=Ji,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?w:n,s=a.callback,i=s===void 0?function(){}:s;return Nt(r,i)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,s=n.prefix,i=n.transform,o=n.symbol,l=n.mask,f=n.maskId,m=n.extra;return new Promise(function(d,h){Promise.all([Re(r,s),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var b=pe(g,2),y=b[0],S=b[1];d([a,Qe({icons:{main:y,mask:S},prefix:s,iconName:r,transform:i,symbol:o,maskId:f,extra:m,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,s=a.main,i=a.transform,o=a.styles,l=ge(o);l.length>0&&(r.style=l);var f;return Je(i)&&(f=R("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(f||s.icon),{children:n,attributes:r}}}},es={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return ye({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(E(s)).join(" ")},children:i}]})}}}},ts={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,s=r===void 0?[]:r,i=n.attributes,o=i===void 0?{}:i,l=n.styles,f=l===void 0?{}:l;return ye({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),_i({content:a.toString(),extra:{attributes:o,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(E(s))}})})}}}},as={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?C:r,i=n.classes,o=i===void 0?[]:i,l=n.attributes,f=l===void 0?{}:l,m=n.styles,d=m===void 0?{}:m;return ye({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),xt({content:a,transform:c(c({},C),s),extra:{attributes:f,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(E(o))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,s=n.extra,i=null,o=null;if(Ht){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,o=f.height/l}return Promise.resolve([a,xt({content:a.innerHTML,width:i,height:o,transform:r,extra:s,watchable:!0})])}}},Wa=new RegExp('"',"ug"),It=[1105920,1112319],Pt=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Mn),Yr),Gn),Ue=Object.keys(Pt).reduce(function(e,t){return e[t.toLowerCase()]=Pt[t],e},{}),ns=Object.keys(Ue).reduce(function(e,t){var a=Ue[t];return e[t]=a[900]||E(Object.entries(a))[0][1],e},{});function rs(e){var t=e.replace(Wa,"");return ja(E(t)[0]||"")}function is(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Wa,""),r=n.codePointAt(0),s=r>=It[0]&&r<=It[1],i=n.length===2?n[0]===n[1]:!1;return s||i||t}function ss(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Ue[a]||{})[r]||ns[a]}function Et(e,t){var a="".concat(Hr).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var s=J(e.children),i=s.filter(function(ie){return ie.getAttribute(Fe)===t})[0],o=D.getComputedStyle(e,t),l=o.getPropertyValue("font-family"),f=l.match(Kr),m=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(i&&!f)return e.removeChild(i),n();if(f&&d!=="none"&&d!==""){var h=o.getPropertyValue("content"),g=ss(l,m),b=rs(h),y=f[0].startsWith("FontAwesome"),S=is(o),A=Ze(g,b),k=A;if(y){var j=gi(b);j.iconName&&j.prefix&&(A=j.iconName,g=j.prefix)}if(A&&!S&&(!i||i.getAttribute(Be)!==g||i.getAttribute(Xe)!==k)){e.setAttribute(a,k),i&&e.removeChild(i);var F=Xi(),x=F.extra;x.attributes[Fe]=t,Re(A,g).then(function(ie){var Xa=Qe(c(c({},F),{},{icons:{main:ie,mask:Ta()},prefix:g,iconName:k,extra:x,watchable:!0})),xe=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=Xa.map(function(Va){return re(Va)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function os(e){return Promise.all([Et(e,"::before"),Et(e,"::after")])}function ls(e){return e.parentNode!==document.head&&!~Br.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var fs=function(t){return!!t&&ga.some(function(a){return t.includes(a)})},us=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var r=fe(n),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(fs(i)){var o=ga.reduce(function(l,f){return l.replace(f,"")},i);o!==""&&o!=="*"&&a.add(o)}}}catch(l){r.e(l)}finally{r.f()}return a};function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=fe(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var o=fe(i.cssRules),l;try{for(o.s();!(l=o.n()).done;){var f=l.value,m=us(f.selectorText),d=fe(m),h;try{for(d.s();!(h=d.n()).done;){var g=h.value;n.add(g)}}catch(y){d.e(y)}finally{d.f()}}}catch(y){o.e(y)}finally{o.f()}}catch(y){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!n.size)return;var b=Array.from(n).join(", ");try{a=e.querySelectorAll(b)}catch{}}return new Promise(function(y,S){var A=J(a).filter(ls).map(os),k=et.begin("searchPseudoElements");Ra(),Promise.all(A).then(function(){k(),We(),y()}).catch(function(){k(),We(),S()})})}}var cs={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ct,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?w:n;p.searchPseudoElements&&Ct(r)}}},Ft=!1,ds={mixout:function(){return{dom:{unwatch:function(){Ra(),Ft=!0}}}},hooks:function(){return{bootstrap:function(){kt(Me("mutationObserverCallbacks",{}))},noAuto:function(){Yi()},watch:function(a){var n=a.observeMutationsRoot;Ft?We():kt(Me("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ot=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var s=r.toLowerCase().split("-"),i=s[0],o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},a)},ms={mixout:function(){return{parse:{transform:function(a){return Ot(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ot(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(m)},h={transform:"translate(".concat(i/2*-1," -256)")},g={outer:o,inner:d,path:h};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),g.path)}]}]}}}},Ie={x:0,y:0,width:"100%",height:"100%"};function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hs(e){return e.tag==="g"?e.children:[e]}var ps={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),s=r?be(r.split(" ").map(function(i){return i.trim()})):Ta();return s.prefix||(s.prefix=$()),a.mask=s,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,s=a.main,i=a.mask,o=a.maskId,l=a.transform,f=s.width,m=s.icon,d=i.width,h=i.icon,g=si({transform:l,containerWidth:d,iconWidth:f}),b={tag:"rect",attributes:c(c({},Ie),{},{fill:"white"})},y=m.children?{children:m.children.map(_t)}:{},S={tag:"g",attributes:c({},g.inner),children:[_t(c({tag:m.tag,attributes:c(c({},m.attributes),g.path)},y))]},A={tag:"g",attributes:c({},g.outer),children:[S]},k="mask-".concat(o||mt()),j="clip-".concat(o||mt()),F={tag:"mask",attributes:c(c({},Ie),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,A]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:hs(h)},F]};return n.push(x,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(k,")")},Ie)}),{children:n,attributes:r}}}},gs={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:c(c({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vs={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},bs=[fi,Qi,es,ts,as,cs,ds,ms,ps,gs,vs];ji(bs,{mixoutsTo:I});I.noAuto;var K=I.config;I.library;I.dom;var Ua=I.parse;I.findIconDefinition;I.toHtml;var ys=I.icon;I.layer;I.text;I.counter;function xs(e){return e=e-0,e===e}function Ya(e){return xs(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var ws=(e,t)=>Ye.createElement("stop",{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Ss(e){return e.charAt(0).toUpperCase()+e.slice(1)}var G=new Map,As=1e3;function ks(e){if(G.has(e))return G.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),s=r===-1?n:r,i=e.slice(a,s).trim();if(i){const o=i.indexOf(":");if(o>0){const l=i.slice(0,o).trim(),f=i.slice(o+1).trim();if(l&&f){const m=Ya(l);t[m.startsWith("webkit")?Ss(m):m]=f}}}a=s+1}if(G.size===As){const r=G.keys().next().value;r&&G.delete(r)}return G.set(e,t),t}function Ha(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(d=>{let h=d;return("fill"in a||a.gradientFill)&&d.tag==="path"&&"fill"in d.attributes&&(h={...d,attributes:{...d.attributes,fill:void 0}}),Ha(e,h)}),r=t.attributes||{},s={};for(const[d,h]of Object.entries(r))switch(!0){case d==="class":{s.className=h;break}case d==="style":{s.style=ks(String(h));break}case d.startsWith("aria-"):case d.startsWith("data-"):{s[d.toLowerCase()]=h;break}default:s[Ya(d)]=h}const{style:i,role:o,"aria-label":l,gradientFill:f,...m}=a;if(i&&(s.style=s.style?{...s.style,...i}:i),o&&(s.role=o),l&&(s["aria-label"]=l,s["aria-hidden"]="false"),f){s.fill=`url(#${f.id})`;const{type:d,stops:h=[],...g}=f;n.unshift(e(d==="linear"?"linearGradient":"radialGradient",{...g,id:f.id},h.map(ws)))}return e(t.tag,{...s,...m},...n)}var js=Ha.bind(null,Ye.createElement),Tt=(e,t)=>{const a=W.useId();return e||(t?a:void 0)},Ns=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Is="searchPseudoElementsFullScan"in K&&typeof K.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Ps=Number.parseInt(Is)>=7,Es=()=>Ps,ee="fa",O={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Cs={left:"fa-pull-left",right:"fa-pull-right"},Fs={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Os={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},_={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function _s(e){const t=K.cssPrefix||K.familyPrefix||ee;return t===ee?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ee}-`,"g"),`${t}-`)}function Ts(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:s,spin:i,spinPulse:o,spinReverse:l,pulse:f,fixedWidth:m,inverse:d,border:h,flip:g,size:b,rotation:y,pull:S,swapOpacity:A,rotateBy:k,widthAuto:j,className:F}=e,x=[];return F&&x.push(...F.split(" ")),t&&x.push(O.beat),a&&x.push(O.fade),n&&x.push(O.beatFade),r&&x.push(O.bounce),s&&x.push(O.shake),i&&x.push(O.spin),l&&x.push(O.spinReverse),o&&x.push(O.spinPulse),f&&x.push(O.pulse),m&&x.push(_.fixedWidth),d&&x.push(_.inverse),h&&x.push(_.border),g===!0&&x.push(_.flip),(g==="horizontal"||g==="both")&&x.push(_.flipHorizontal),(g==="vertical"||g==="both")&&x.push(_.flipVertical),b!=null&&x.push(Os[b]),y!=null&&y!==0&&x.push(Fs[y]),S!=null&&x.push(Cs[S]),A&&x.push(_.swapOpacity),Es()?(k&&x.push(_.rotateBy),j&&x.push(_.widthAuto),(K.cssPrefix||K.familyPrefix||ee)===ee?x:x.map(_s)):x}var Ls=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Lt(e){if(e)return Ls(e)?e:Ua.icon(e)}function Ms(e){return Object.keys(e)}var Mt=new Ns("FontAwesomeIcon"),Ga={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ds=new Set(Object.keys(Ga)),Ba=Ye.forwardRef((e,t)=>{const a={...Ga,...e},{icon:n,mask:r,symbol:s,title:i,titleId:o,maskId:l,transform:f}=a,m=Tt(l,!!r),d=Tt(o,!!i),h=Lt(n);if(!h)return Mt.error("Icon lookup is undefined",n),null;const g=Ts(a),b=typeof f=="string"?Ua.transform(f):f,y=Lt(r),S=ys(h,{...g.length>0&&{classes:g},...b&&{transform:b},...y&&{mask:y},symbol:s,title:i,titleId:d,maskId:m});if(!S)return Mt.error("Could not find icon",h),null;const{abstract:A}=S,k={ref:t};for(const j of Ms(a))Ds.has(j)||(k[j]=a[j]);return js(A[0],k)});Ba.displayName="FontAwesomeIcon";le.registerPlugin($t);const $s=({content:e})=>{const{message:t}=Dt().props,[a,n]=W.useState(!1),[r,s]=W.useState(!1),{data:i,setData:o,post:l,errors:f,clearErrors:m}=Ka({area:"comercial",nome:"",email:"",telefone:"",assunto:"",mensagem:"",politica:!1}),d=[{value:"comercial",label:"Comercial"},{value:"trabalhe",label:"Trabalhe Conosco"}];d.find(b=>b.value===i.area);const h=b=>{const{name:y,value:S,type:A,checked:k}=b.target;o(j=>({...j,[y]:A==="checkbox"?k:S})),m(y)},g=b=>{b.preventDefault(),n(!0),l(route("Contato.enviar"),{preserveScroll:!0,onSuccess:y=>{n(!1)},onError:()=>{n(!1)}})};return W.useEffect(()=>{t&&t.type==="success"&&(s(!0),setTimeout(()=>{o({nome:"",email:"",telefone:"",mensagem:"",politica:!1}),s(!1)},3e3))},[t]),u.jsxs("section",{className:"relative bg-neutral-100 pt-16 pb-20 md:pb-30",children:[u.jsxs("div",{className:"container max-w-large",children:[u.jsx(Rt,{className:"font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight",text:e.titulo,element:"h2"}),u.jsx("h4",{className:"text-2xl md:text-3xl 2xl:text-4xl mb-10 2xl:mb-20",children:e.subtitulo}),u.jsxs("form",{onSubmit:g,children:[u.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col",children:[u.jsx("label",{htmlFor:"area",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Escolha:"}),u.jsxs("div",{className:"relative w-fit mb-7 2xl:mb-14",children:[u.jsx("select",{name:"area",value:i.area,onChange:h,className:"appearance-none bg-primary border-0 rounded-full text-white text-center font-bold text-lg md:text-xl 2xl:text-2xl max-w-64 pl-5 pr-11 bg-none focus:border focus:border-secondary outline-none",style:{WebkitAppearance:"none",MozAppearance:"none"},children:d.map(b=>u.jsx("option",{className:"bg-white text-black text-lg",value:b.value,children:b.label},b.label))}),u.jsx(Ba,{icon:en,className:"absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none text-2xl"})]})]}),u.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:[u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("label",{htmlFor:"nome",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Nome completo"}),u.jsx("input",{type:"text",name:"nome",value:i.nome,onChange:h,placeholder:"Seu nome",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.nome&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.nome})]}),u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("label",{htmlFor:"email",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Email"}),u.jsx("input",{type:"text",name:"email",value:i.email,onChange:h,placeholder:"Seu e-mail",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.email&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.email})]})]}),u.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:[u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("label",{htmlFor:"telefone",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Telefone"}),u.jsx(qa,{type:"text",name:"telefone",mask:"(__) _____-____",replacement:{_:/\d/},value:i.telefone,onChange:h,placeholder:"(DDD) + número",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.telefone&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.telefone})]}),u.jsxs("div",{className:"w-full lg:w-1/2",children:[u.jsx("label",{htmlFor:"assunto",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Assunto"}),u.jsx("input",{type:"text",name:"assunto",value:i.assunto,onChange:h,placeholder:"Sobre o que quer falar",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.assunto&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.assunto})]})]}),u.jsx("div",{className:"mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:u.jsxs("div",{className:"w-full",children:[u.jsx("label",{htmlFor:"mensagem",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Mensagem"}),u.jsx("textarea",{name:"mensagem",value:i.mensagem,onChange:h,placeholder:"Escreva aqui...",className:"w-full h-40 2xl:h-48 resize-none px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.mensagem&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.mensagem})]})}),u.jsxs("div",{className:"mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row items-center justify-between",children:[u.jsxs("div",{className:"",children:[u.jsxs("label",{className:"flex items-center",children:[u.jsxs("label",{className:"relative flex",children:[u.jsx("input",{type:"checkbox",name:"politica",checked:i.politica,onChange:h,className:"peer w-5 h-5 rounded-full bg-white border-neutral-600 checked:bg-white checked:border-neutral-600 checked:bg-[length:0_0] checked:hover:bg-white checked:hover:border-neutral-600 checked:focus:bg-white checked:focus:border-neutral-600 !outline-0 !ring-0 !ring-offset-0"}),u.jsx("span",{className:"peer-checked:content-[''] peer-checked:absolute peer-checked:inset-1 rounded-full peer-checked:bg-primary"})]}),u.jsxs("span",{className:"text-neutral-600 ml-2 text-sm 2xl:text-base",children:["Aceito os"," ",u.jsx(at,{href:route("Politicas.privacidade"),className:"underline font-bold",target:"_blank",rel:"noopener noreferrer",children:"Termos de uso"})," ","e a"," ",u.jsx(at,{href:route("Politicas.privacidade"),className:"underline font-bold",target:"_blank",rel:"noopener noreferrer",children:"Política de privacidade"})," ","do site da Silvestrin"]})]}),f.politica&&u.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.politica})]}),u.jsx("button",{type:"submit",className:"relative px-8 py-3 w-fit lg:text-xl 2xl:text-2xl bg-primary text-white text-center font-semibold rounded-full whitespace-nowrap transition-all hover:bg-secondary",children:a?u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"status",className:"absolute inset-0 flex justify-center items-center",children:[u.jsxs("svg",{"aria-hidden":"true",className:"w-8 h-8 text-gray-200 animate-spin fill-primary",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),u.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),u.jsx("span",{className:"sr-only",children:"Loading..."})]}),u.jsx("span",{className:"opacity-0",children:"Enviar mensagem"})]}):"Enviar mensagem"})]})]})]}),r&&u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-white pointer-events-none animate-fade-in-down",children:[u.jsx(Za,{}),u.jsx("h2",{className:"text-primary text-4xl text-center font-semibold mt-4 mb-2",children:"Sucesso!"}),u.jsx("h4",{className:"font-secondary text-tertiary text-2xl text-center",children:"Sua mensagem foi enviada."})]})]})},Ys=()=>{const{dadosGerais:e,conteudos:t}=Dt().props;return u.jsxs(Ja,{children:[u.jsx(Qa,{data:e,content:[t[0],t[2]]}),u.jsx($s,{content:t[1]})]})};export{Ys as default};
