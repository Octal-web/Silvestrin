import{r as F,j as d,R as ke,q as Oa,S as Jn,J as Dt}from"./app-ApXFG7Dr.js";import{g as Te,S as Ea,L as Ia,D as qn}from"./LetterReveal-DWS7GVVD.js";import{R as zt}from"./Reveal-DH_n5D70.js";const Zn=({data:e,content:t})=>{const a=F.useId(),n=F.useRef(null),r=F.useRef(null);Te.registerPlugin(Ea),F.useEffect(()=>{!n.current||!r.current||(Te.fromTo(r.current,{top:"30%",x:"50%",scaleX:-1,scaleY:-1},{x:"33%",ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:!0}}),Te.fromTo(r.current,{rotation:10},{rotation:16,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}))},[]);const i=e.emails.split(`
`).map(l=>{const[s,f]=l.split(":").map(u=>u.trim());return{label:s,value:f}}),o=e.filiais.split(`\r
\r
`).map(l=>{const s=l.split(`\r
`),f=s[0],u=s.find(p=>p.includes("Fone")),c=s.filter(p=>p!==s[0]&&p!==u).join(`
`);return{label:f,value:c,phoneLine:u}});return d.jsxs("section",{className:"relative z-[1]",ref:n,children:[d.jsx("img",{ref:r,src:t[1].imagem,className:"hidden sm:block absolute max-h-[7%] z-10 md:max-h-[17%] 2xl:max-h-[78%] right-0 drop-shadow-lg",style:{top:"0%"}}),d.jsx("div",{className:"container max-w-large",children:d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[d.jsxs(zt,{className:"py-10 lg:py-20",children:[d.jsx(Ia,{className:"font-secondary text-primary text-4xl md:text-5xl 2xl:text-6xl font-black leading-tight max-w-[700px] mb-10",text:t[0].titulo,element:"h1"}),d.jsxs("ul",{className:"max-w-[231px] text-custom-gray",children:[d.jsxs("li",{className:"text-xs lg:text-sm font-light leading-tight mb-3",children:[d.jsx("span",{className:"block font-bold",children:"Silvestrin Frutas - Matriz"}),e.endereco," - CEP ",e.cep]}),d.jsx("li",{children:d.jsxs("p",{className:"leading-tight font-bold text-xs lg:text-sm",children:["Fone: ",e.telefone]})})]}),d.jsxs("div",{className:"max-w-[650px]",children:[d.jsx("div",{className:"bg-primary rounded-full px-5 py-1 w-fit text-white font-bold mt-16 md:mt-20 mb-6 text-sm md:text-base",children:"Outras Unidades:"}),d.jsx("ul",{className:"grid grid-cols-2 gap-y-6 gap-x-6 md:gap-y-12 md:gap-x-15 text-custom-gray text-xs lg:text-sm",children:o.map((l,s)=>d.jsxs("li",{className:"flex flex-col",children:[d.jsx("span",{className:"leading-tight font-bold mb-1",children:l.label}),d.jsx("span",{className:"font-light",children:l.value.split(`
`).map((f,u)=>d.jsx("p",{className:"-mt-1",children:f},u))}),d.jsx("span",{className:"leading-tight font-bold mt-3",children:l.phoneLine})]},s))})]}),d.jsx("div",{className:"text-custom-gray text-xs lg:text-sm font-light leading-tight mt-10 md:mt-14",children:d.jsx("ul",{className:"flex max-sm:flex-wrap gap-4 text-custom-gray",children:i.slice(0,2).map((l,s)=>d.jsxs("li",{children:[d.jsx("div",{className:"leading-tight font-bold",children:l.label}),d.jsx("div",{className:"font-light",children:l.value})]},s))})})]}),d.jsx(zt,{className:"hidden sm:block absolute top-30 right-0 sm:w-[calc(50%_+_5em)] sm:-right-10 sm:-top-10 sm:-bottom-10 sm:max-w-[1060px]",direction:"right",children:d.jsxs("div",{children:[d.jsx("svg",{className:"absolute w-0 h-auto",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("defs",{children:d.jsx("clipPath",{id:`url(#custom-shape-${a})`,clipPathUnits:"objectBoundingBox",children:d.jsx("path",{d:"M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7",transform:"scale(0.00105, 0.0014)",children:d.jsx("animate",{attributeName:"d",dur:"30s",repeatCount:"indefinite",values:`
                                                M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7;M928.4,259.7c0,229.6-207.8,426.8-464.2,426.8S0,489.3,0,259.7c0-200.9,223.2-136,389.1-181.5c4.1-1.1,8.1-2.3,12.4-3.6c10.8-3.3,21.3-7,31.3-11.1c9.2-3.8,18.1-7.8,26.6-12.1C675.2-58,928.4,6.9,928.4,248.7;M928.4,301.7c0,212.5-207.8,384.8-464.2,384.8S0,514.2,0,301.7c0-185.9,195.3-60,384.2-153c4.6-2.3,9.3-4.7,14.1-7.4c12.3-6.8,24.2-14.4,35.6-22.7c10.5-7.7,20.6-15.9,30.3-24.7C710-129.7,928.4,89.2,928.4,301.7`,keyTimes:"0;0.5;1",calcMode:"spline",keySplines:"0 0 0.58 1;0 0 0.58 1"})})})})}),d.jsx("div",{className:"w-full",style:{clipPath:`url(#custom-shape-${a})`},children:d.jsx("img",{src:t[0].imagem,className:"w-full",alt:""})})]})})]})})]})};function Wt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function Qn(e,t,a){return t=De(t),function(n,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(n)}(e,Fa()?Reflect.construct(t,a||[],De(e).constructor):t.apply(e,a))}function er(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tr(e,t,a){return Object.defineProperty(e,"prototype",{writable:!1}),e}function Na(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(s,f){if(s){if(typeof s=="string")return Wt(s,f);var u={}.toString.call(s).slice(8,-1);return u==="Object"&&s.constructor&&(u=s.constructor.name),u==="Map"||u==="Set"?Array.from(s):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?Wt(s,f):void 0}}(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var s=a.next();return o=s.done,s},e:function(s){l=!0,i=s},f:function(){try{o||a.return==null||a.return()}finally{if(l)throw i}}}}function Ca(e,t,a){return(t=function(n){var r=function(i,o){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var s=l.call(i,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(i)}(n,"string");return typeof r=="symbol"?r:r+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Re.apply(null,arguments)}function De(e){return De=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},De(e)}function ar(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nt(e,t)}function Fa(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Fa=function(){return!!e})()}function Ut(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ut(Object(a),!0).forEach(function(n){Ca(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ut(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function _a(e,t){if(e==null)return{};var a,n,r=function(o,l){if(o==null)return{};var s={};for(var f in o)if({}.hasOwnProperty.call(o,f)){if(l.includes(f))continue;s[f]=o[f]}return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.includes(a)||{}.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function nt(e,t){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},nt(e,t)}function ge(e,t){var a,n=t.replacementChars,r=t.replacement,i=t.separate,o=n,l="",s=Na(e);try{for(s.s();!(a=s.n()).done;){var f,u=a.value,c=!Object.prototype.hasOwnProperty.call(r,u)&&((f=r[o[0]])===null||f===void 0?void 0:f.test(u));(i&&u===o[0]||c)&&(o=o.slice(1),l+=u)}}catch(p){s.e(p)}finally{s.f()}return l}function Ta(e,t){var a,n=t.mask,r=t.replacement,i=t.separate,o=t.showMask,l=0,s="",f=Na(n);try{for(f.s();!(a=f.n()).done;){var u=a.value;if(!o&&e[l]===void 0)break;Object.prototype.hasOwnProperty.call(r,u)&&e[l]!==void 0?s+=e[l++]:s+=u}}catch(p){f.e(p)}finally{f.f()}if(i&&!o){for(var c=n.length-1;c>=0&&s[c]===n[c];c--);s=s.slice(0,c+1)}return s}function $a(e,t){for(var a=t.mask,n=t.replacement,r=[],i=0;i<a.length;i++){var o,l=(o=e[i])!==null&&o!==void 0?o:a[i],s=Object.prototype.hasOwnProperty.call(n,l)?"replacement":e[i]!==void 0&&e[i]!==a[i]?"input":"mask";r.push({type:s,value:l,index:i})}return r}function de(e){return e.length>0?Ca({},e,/./):{}}function rt(e,t){for(var a=t.start,n=a===void 0?0:a,r=t.end,i=t.mask,o=t.replacement,l=t.separate,s=e.slice(n,r),f=i.slice(n,r),u="",c=0;c<f.length;c++){var p=Object.prototype.hasOwnProperty.call(o,f[c]);p&&s[c]!==void 0&&s[c]!==f[c]?u+=s[c]:p&&l&&(u+=f[c])}return u}function Ma(e,t){var a=t.mask,n=t.replacement,r=typeof n=="string"?de(n):n,i=RegExp("[^".concat(Object.keys(r).join(""),"]"),"g");return Ta(ge(e,{replacementChars:a.replace(i,""),replacement:r,separate:!1}),{mask:a,replacement:r,separate:!1,showMask:!1})}function nr(e,t){var a=t.mask,n=t.replacement,r=typeof n=="string"?de(n):n,i=rt(e,{mask:a,replacement:r,separate:!1}),o=RegExp("[^".concat(Object.keys(r).join(""),"]"),"g");return ge(i,{replacementChars:a.replace(o,""),replacement:r,separate:!1})}function rr(e,t){var a=t.mask,n=t.replacement,r=typeof n=="string"?de(n):n;return $a(Ma(e,{mask:a,replacement:r}),{mask:a,replacement:r})}var ir=["[","]","\\","/","^","$",".","|","?","*","+","(",")","{","}"];function Yt(e){return ir.includes(e)?"\\".concat(e):e}function or(e,t){for(var a=t.mask,n=t.replacement,r=typeof n=="string"?de(n):n,i=e==="partial"||e==="partial-inexact",o=e==="full"||e==="partial",l="",s=0;s<a.length;s++){var f=a[s];s===0&&(l="^"),i&&(l+="("),l+=Object.prototype.hasOwnProperty.call(r,f)?"".concat(o?"(?!".concat(Yt(f),")"):"","(").concat(r[f].source,")"):Yt(f),s===a.length-1&&(i&&(l+=")?".repeat(a.length)),l+="$")}return l}function sr(e,t){return new Proxy(e,{set:function(a,n,r){return n==="current"&&(r!==e.current&&(e.current!==null&&t.unregister(e.current),r!==null&&t.register(r)),a[n]=r,!0)}})}function lr(e,t,a){return t=Se(t),function(n,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(n)}(e,kt()?Reflect.construct(t,a||[],Se(e).constructor):t.apply(e,a))}function La(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ra(e,t,a){return Object.defineProperty(e,"prototype",{writable:!1}),e}function fr(e,t,a){return(t=function(n){var r=function(i,o){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var s=l.call(i,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(i)}(n,"string");return typeof r=="symbol"?r:r+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Se(e){return Se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Se(e)}function cr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&je(e,t)}function kt(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(kt=function(){return!!e})()}function Bt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function Ht(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Bt(Object(a),!0).forEach(function(n){fr(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Bt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ur(e,t){if(e==null)return{};var a,n,r=function(o,l){if(o==null)return{};var s={};for(var f in o)if({}.hasOwnProperty.call(o,f)){if(l.includes(f))continue;s[f]=o[f]}return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.includes(a)||{}.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function je(e,t){return je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},je(e,t)}function it(e){return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(e)}function ot(e){var t=typeof Map=="function"?new Map:void 0;return ot=function(a){if(a===null||!function(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,n)}function n(){return function(r,i,o){if(kt())return Reflect.construct.apply(null,arguments);var l=[null];l.push.apply(l,i);var s=new(r.bind.apply(r,l));return o&&je(s,o.prototype),s}(a,arguments,Se(this).constructor)}return n.prototype=Object.create(a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),je(n,a)},ot(e)}var be=function(e){function t(a){var n;return La(this,t),(n=lr(this,t,[a])).name="SyntheticChangeError",n}return cr(t,e),Ra(t)}(ot(Error)),Vt,dr=["options"],mr=["text","email","tel","search","url"],Da=Ra(function e(t){var a=t.init,n=t.tracking;La(this,e);var r=new WeakMap;this.register=function(i){var o;if(mr.includes(i.type)){var l=(o=i._wrapperState)!==null&&o!==void 0?o:{},s=l.initialValue,f=s===void 0?"":s,u=l.controlled,c=u!==void 0&&u,p=a({initialValue:i.value||f,controlled:c}),h=p.value,x=p.options,b={value:h,options:x,fallbackOptions:x},w={id:-1,cachedId:-1},y={value:"",selectionStart:0,selectionEnd:0},S=Object.getOwnPropertyDescriptor("_valueTracker"in i?i:HTMLInputElement.prototype,"value");Object.defineProperty(i,"value",Ht(Ht({},S),{},{set:function(O){var P;y.value=O,S==null||(P=S.set)===null||P===void 0||P.call(i,O)}})),i.value=h;var j=function(){var O=function(){var P,C;y.selectionStart=(P=i.selectionStart)!==null&&P!==void 0?P:0,y.selectionEnd=(C=i.selectionEnd)!==null&&C!==void 0?C:0,w.id=window.setTimeout(O)};w.id=window.setTimeout(O)},E=function(){window.clearTimeout(w.id),w.id=-1,w.cachedId=-1},v=function(O){try{var P,C;if(w.cachedId===w.id)throw new be("The input selection has not been updated.");w.cachedId=w.id;var N=i.value,T=i.selectionStart,J=i.selectionEnd;if(T===null||J===null)throw new be("The selection attributes have not been initialized.");var $,R=y.value;if(O.inputType===void 0&&(y.selectionStart=0,y.selectionEnd=R.length),T>y.selectionStart?$="insert":T<=y.selectionStart&&T<y.selectionEnd?$="deleteBackward":T===y.selectionEnd&&N.length<R.length&&($="deleteForward"),$===void 0||($==="deleteBackward"||$==="deleteForward")&&N.length>R.length)throw new be("Input type detection error.");var D="",ee=y.selectionStart,te=y.selectionEnd;if($==="insert")D=N.slice(y.selectionStart,T);else{var pe=R.length-N.length;ee=T,te=T+pe}b.value!==R?b.options=b.fallbackOptions:b.fallbackOptions=b.options;var he=b.options,ae=n({inputType:$,previousValue:R,previousOptions:he,value:N,addedValue:D,changeStart:ee,changeEnd:te,selectionStart:T,selectionEnd:J}),Ie=ae.options,z=ur(ae,dr);i.value=z.value,i.setSelectionRange(z.selectionStart,z.selectionEnd),b.value=z.value,b.options=Ie,y.selectionStart=z.selectionStart,y.selectionEnd=z.selectionEnd,(P=i._valueTracker)===null||P===void 0||(C=P.setValue)===null||C===void 0||C.call(P,R)}catch(Ne){if(i.value=y.value,i.setSelectionRange(y.selectionStart,y.selectionEnd),O.preventDefault(),O.stopPropagation(),Ne.name!=="SyntheticChangeError")throw Ne}};document.activeElement===i&&j(),i.addEventListener("focus",j),i.addEventListener("blur",E),i.addEventListener("input",v),r.set(i,{onFocus:j,onBlur:E,onInput:v})}},this.unregister=function(i){var o=r.get(i);o!==void 0&&(i.removeEventListener("focus",o.onFocus),i.removeEventListener("blur",o.onBlur),i.removeEventListener("input",o.onInput),r.delete(i))}});Vt=Da,Object.defineProperty(Vt.prototype,Symbol.toStringTag,{writable:!1,enumerable:!1,configurable:!0,value:"Input"});function pr(e,t){return F.useCallback(function(a){e.current=a,typeof t=="function"?t(a):it(t)==="object"&&t!==null&&(t.current=a)},[e,t])}var Gt,hr=["track","modify"];function ie(e){var t,a,n,r;return{mask:(t=e.mask)!==null&&t!==void 0?t:"",replacement:typeof e.replacement=="string"?de(e.replacement):(a=e.replacement)!==null&&a!==void 0?a:{},showMask:(n=e.showMask)!==null&&n!==void 0&&n,separate:(r=e.separate)!==null&&r!==void 0&&r,track:e.track,modify:e.modify}}var za=function(e){function t(){var a,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return er(this,t),(a=Qn(this,t,[{init:function(r){var i=r.initialValue,o=r.controlled,l=ie(n),s=l.mask,f=l.replacement,u=l.separate,c=l.showMask;return i=o||i?i:c?s:"",{value:i,options:{mask:s,replacement:f,separate:u}}},tracking:function(r){var i=r.inputType,o=r.previousValue,l=r.previousOptions,s=r.addedValue,f=r.changeStart,u=r.changeEnd,c=ie(n),p=c.track,h=c.modify,x=_a(c,hr),b=x.mask,w=x.replacement,y=x.showMask,S=x.separate,j=Ce(Ce({},i==="insert"?{inputType:i,data:s}:{inputType:i,data:null}),{},{value:o,selectionStart:f,selectionEnd:u}),E=p==null?void 0:p(j);if(E===!1)throw new be("Custom tracking stop.");E===null?s="":E!==!0&&E!==void 0&&(s=E);var v=h==null?void 0:h(j);(v==null?void 0:v.mask)!==void 0&&(b=v.mask),(v==null?void 0:v.replacement)!==void 0&&(w=typeof(v==null?void 0:v.replacement)=="string"?de(v==null?void 0:v.replacement):v.replacement),(v==null?void 0:v.showMask)!==void 0&&(y=v.showMask),(v==null?void 0:v.separate)!==void 0&&(S=v.separate);var O=rt(o,Ce({end:f},l)),P=rt(o,Ce({start:u},l)),C=RegExp("[^".concat(Object.keys(w).join(""),"]"),"g"),N=b.replace(C,"");if(O&&(O=ge(O,{replacementChars:N,replacement:w,separate:S}),N=N.slice(O.length)),s&&(s=ge(s,{replacementChars:N,replacement:w,separate:!1}),N=N.slice(s.length)),i==="insert"&&s==="")throw new be("The character does not match the key value of the `replacement` object.");if(S){var T=b.slice(f,u).replace(C,""),J=T.length-s.length;J<0?P=P.slice(-J):J>0&&(P=T.slice(-J)+P)}P&&(P=ge(P,{replacementChars:N,replacement:w,separate:S}));var $=Ta(O+s+P,{mask:b,replacement:w,separate:S,showMask:y}),R=function(D){var ee,te,pe,he=D.inputType,ae=D.value,Ie=D.addedValue,z=D.beforeChangeValue,Ne=D.mask,$t=D.replacement,Kn=D.separate,Xe=$a(ae,{mask:Ne,replacement:$t}).filter(function(Ke){var Rt=Ke.type;return Rt==="input"||Kn&&Rt==="replacement"}),Mt=(ee=Xe[z.length+Ie.length-1])===null||ee===void 0?void 0:ee.index,ne=(te=Xe[z.length-1])===null||te===void 0?void 0:te.index,re=(pe=Xe[z.length+Ie.length])===null||pe===void 0?void 0:pe.index;if(he==="insert"){if(Mt!==void 0)return Mt+1;if(re!==void 0)return re;if(ne!==void 0)return ne+1}if(he==="deleteForward"){if(re!==void 0)return re;if(ne!==void 0)return ne+1}if(he==="deleteBackward"){if(ne!==void 0)return ne+1;if(re!==void 0)return re}var Lt=ae.split("").findIndex(function(Ke){return Object.prototype.hasOwnProperty.call($t,Ke)});return Lt!==-1?Lt:ae.length}({inputType:i,value:$,addedValue:s,beforeChangeValue:O,mask:b,replacement:w,separate:S});return{value:$,selectionStart:R,selectionEnd:R,options:{mask:b,replacement:w,separate:S}}}}])).format=function(r){return Ma(r,ie(n))},a.formatToParts=function(r){return rr(r,ie(n))},a.unformat=function(r){return nr(r,ie(n))},a.generatePattern=function(r){return or(r,ie(n))},a}return ar(t,Da),tr(t)}();Gt=za,Object.defineProperty(Gt.prototype,Symbol.toStringTag,{writable:!1,enumerable:!1,configurable:!0,value:"Mask"});function vr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mask,a=e.replacement,n=e.showMask,r=e.separate,i=e.track,o=e.modify,l=F.useRef(null),s=F.useRef({mask:t,replacement:a,showMask:n,separate:r,track:i,modify:o});return s.current.mask=t,s.current.replacement=a,s.current.showMask=n,s.current.separate=r,s.current.track=i,s.current.modify=o,F.useMemo(function(){return sr(l,new za(s.current))},[])}var gr=["component","mask","replacement","showMask","separate","track","modify"];function br(e,t){var a=e.component,n=e.mask,r=e.replacement,i=e.showMask,o=e.separate,l=e.track,s=e.modify,f=_a(e,gr),u=vr({mask:n,replacement:r,showMask:i,separate:o,track:l,modify:s}),c=pr(u,t);return a?ke.createElement(a,Re({ref:c},f)):ke.createElement("input",Re({ref:c},f))}var yr=F.forwardRef(br);/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var xr={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function st(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function wr(e){if(Array.isArray(e))return e}function kr(e){if(Array.isArray(e))return st(e)}function Sr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jr(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Wa(n.key),n)}}function Ar(e,t,a){return t&&jr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=St(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var s=a.next();return o=s.done,s},e:function(s){l=!0,i=s},f:function(){try{o||a.return==null||a.return()}finally{if(l)throw i}}}}function k(e,t,a){return(t=Wa(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Pr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Or(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,l=[],s=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=i.call(a)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(u){f=!0,r=u}finally{try{if(!s&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw r}}return l}}function Er(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Xt(Object(a),!0).forEach(function(n){k(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Xt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Ye(e,t){return wr(e)||Or(e,t)||St(e,t)||Er()}function L(e){return kr(e)||Pr(e)||St(e)||Ir()}function Nr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wa(e){var t=Nr(e,"string");return typeof t=="symbol"?t:t+""}function ze(e){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ze(e)}function St(e,t){if(e){if(typeof e=="string")return st(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?st(e,t):void 0}}var Kt=function(){},jt={},Ua={},Ya=null,Ba={mark:Kt,measure:Kt};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Ua=document),typeof MutationObserver<"u"&&(Ya=MutationObserver),typeof performance<"u"&&(Ba=performance)}catch{}var Cr=jt.navigator||{},Jt=Cr.userAgent,qt=Jt===void 0?"":Jt,G=jt,A=Ua,Zt=Ya,Fe=Ba;G.document;var V=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Ha=~qt.indexOf("MSIE")||~qt.indexOf("Trident/"),Je,Fr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_r=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Va={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Tr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ga=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",Pe="duotone",Xa="sharp",Ka="sharp-duotone",Ja="chisel",qa="etch",Za="graphite",Qa="jelly",en="jelly-duo",tn="jelly-fill",an="notdog",nn="notdog-duo",rn="slab",on="slab-press",sn="thumbprint",ln="utility",fn="utility-duo",cn="utility-fill",un="whiteboard",$r="Classic",Mr="Duotone",Lr="Sharp",Rr="Sharp Duotone",Dr="Chisel",zr="Etch",Wr="Graphite",Ur="Jelly",Yr="Jelly Duo",Br="Jelly Fill",Hr="Notdog",Vr="Notdog Duo",Gr="Slab",Xr="Slab Press",Kr="Thumbprint",Jr="Utility",qr="Utility Duo",Zr="Utility Fill",Qr="Whiteboard",dn=[I,Pe,Xa,Ka,Ja,qa,Za,Qa,en,tn,an,nn,rn,on,sn,ln,fn,cn,un];Je={},k(k(k(k(k(k(k(k(k(k(Je,I,$r),Pe,Mr),Xa,Lr),Ka,Rr),Ja,Dr),qa,zr),Za,Wr),Qa,Ur),en,Yr),tn,Br),k(k(k(k(k(k(k(k(k(Je,an,Hr),nn,Vr),rn,Gr),on,Xr),sn,Kr),ln,Jr),fn,qr),cn,Zr),un,Qr);var ei={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},ti={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ai=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ni={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},mn=["fak","fa-kit","fakd","fa-kit-duotone"],Qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ri=["kit"],ii="kit",oi="kit-duotone",si="Kit",li="Kit Duotone";k(k({},ii,si),oi,li);var fi={kit:{"fa-kit":"fak"}},ci={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ui={kit:{fak:"fa-kit"}},ea={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},qe,_e={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},di=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],mi="classic",pi="duotone",hi="sharp",vi="sharp-duotone",gi="chisel",bi="etch",yi="graphite",xi="jelly",wi="jelly-duo",ki="jelly-fill",Si="notdog",ji="notdog-duo",Ai="slab",Pi="slab-press",Oi="thumbprint",Ei="utility",Ii="utility-duo",Ni="utility-fill",Ci="whiteboard",Fi="Classic",_i="Duotone",Ti="Sharp",$i="Sharp Duotone",Mi="Chisel",Li="Etch",Ri="Graphite",Di="Jelly",zi="Jelly Duo",Wi="Jelly Fill",Ui="Notdog",Yi="Notdog Duo",Bi="Slab",Hi="Slab Press",Vi="Thumbprint",Gi="Utility",Xi="Utility Duo",Ki="Utility Fill",Ji="Whiteboard";qe={},k(k(k(k(k(k(k(k(k(k(qe,mi,Fi),pi,_i),hi,Ti),vi,$i),gi,Mi),bi,Li),yi,Ri),xi,Di),wi,zi),ki,Wi),k(k(k(k(k(k(k(k(k(qe,Si,Ui),ji,Yi),Ai,Bi),Pi,Hi),Oi,Vi),Ei,Gi),Ii,Xi),Ni,Ki),Ci,Ji);var qi="kit",Zi="kit-duotone",Qi="Kit",eo="Kit Duotone";k(k({},qi,Qi),Zi,eo);var to={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ao={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},lt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},no=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],pn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(di,no),ro=["solid","regular","light","thin","duotone","brands","semibold"],hn=[1,2,3,4,5,6,7,8,9,10],io=hn.concat([11,12,13,14,15,16,17,18,19,20]),oo=["aw","fw","pull-left","pull-right"],so=[].concat(L(Object.keys(ao)),ro,oo,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",_e.GROUP,_e.SWAP_OPACITY,_e.PRIMARY,_e.SECONDARY]).concat(hn.map(function(e){return"".concat(e,"x")})).concat(io.map(function(e){return"w-".concat(e)})),lo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},B="___FONT_AWESOME___",ft=16,vn="fa",gn="svg-inline--fa",Z="data-fa-i2svg",ct="data-fa-pseudo-element",fo="data-fa-pseudo-element-pending",At="data-prefix",Pt="data-icon",ta="fontawesome-i2svg",co="async",uo=["HTML","HEAD","STYLE","SCRIPT"],bn=["::before","::after",":before",":after"],yn=function(){try{return!0}catch{return!1}}();function Oe(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[I]}})}var xn=m({},Va);xn[I]=m(m(m(m({},{"fa-duotone":"duotone"}),Va[I]),Qt.kit),Qt["kit-duotone"]);var mo=Oe(xn),ut=m({},ni);ut[I]=m(m(m(m({},{duotone:"fad"}),ut[I]),ea.kit),ea["kit-duotone"]);var aa=Oe(ut),dt=m({},lt);dt[I]=m(m({},dt[I]),ui.kit);var Ot=Oe(dt),mt=m({},to);mt[I]=m(m({},mt[I]),fi.kit);Oe(mt);var po=Fr,wn="fa-layers-text",ho=_r,vo=m({},ei);Oe(vo);var go=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ze=Tr,bo=[].concat(L(ri),L(so)),ye=G.FontAwesomeConfig||{};function yo(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var wo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wo.forEach(function(e){var t=Ye(e,2),a=t[0],n=t[1],r=xo(yo(a));r!=null&&(ye[n]=r)})}var kn={styleDefault:"solid",familyDefault:I,cssPrefix:vn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ye.familyPrefix&&(ye.cssPrefix=ye.familyPrefix);var ce=m(m({},kn),ye);ce.autoReplaceSvg||(ce.observeMutations=!1);var g={};Object.keys(kn).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(a){ce[e]=a,xe.forEach(function(n){return n(g)})},get:function(){return ce[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){ce.cssPrefix=t,xe.forEach(function(a){return a(g)})},get:function(){return ce.cssPrefix}});G.FontAwesomeConfig=g;var xe=[];function ko(e){return xe.push(e),function(){xe.splice(xe.indexOf(e),1)}}var oe=ft,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function So(e){if(!(!e||!V)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return A.head.insertBefore(t,n),e}}var jo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function na(){for(var e=12,t="";e-- >0;)t+=jo[Math.random()*62|0];return t}function me(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Et(e){return e.classList?me(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Sn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ao(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Sn(e[a]),'" ')},"").trim()}function Be(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function It(e){return e.size!==W.size||e.x!==W.x||e.y!==W.y||e.rotate!==W.rotate||e.flipX||e.flipY}function Po(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:s,path:f}}function Oo(e){var t=e.transform,a=e.width,n=a===void 0?ft:a,r=e.height,i=r===void 0?ft:r,o="";return Ha?o+="translate(".concat(t.x/oe-n/2,"em, ").concat(t.y/oe-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/oe,"em), calc(-50% + ").concat(t.y/oe,"em)) "),o+="scale(".concat(t.size/oe*(t.flipX?-1:1),", ").concat(t.size/oe*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Eo=`:root, :host {
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
}`;function jn(){var e=vn,t=gn,a=g.cssPrefix,n=g.replacementClass,r=Eo;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(n))}return r}var ra=!1;function Qe(){g.autoAddCss&&!ra&&(So(jn()),ra=!0)}var Io={mixout:function(){return{dom:{css:jn,insertCss:Qe}}},hooks:function(){return{beforeDOMElementCreation:function(){Qe()},beforeI2svg:function(){Qe()}}}},H=G||{};H[B]||(H[B]={});H[B].styles||(H[B].styles={});H[B].hooks||(H[B].hooks={});H[B].shims||(H[B].shims=[]);var M=H[B],An=[],Pn=function(){A.removeEventListener("DOMContentLoaded",Pn),We=1,An.map(function(t){return t()})},We=!1;V&&(We=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),We||A.addEventListener("DOMContentLoaded",Pn));function No(e){V&&(We?setTimeout(e,0):An.push(e))}function Ee(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Sn(e):"<".concat(t," ").concat(Ao(n),">").concat(i.map(Ee).join(""),"</").concat(t,">")}function ia(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var et=function(t,a,n,r){var i=Object.keys(t),o=i.length,l=a,s,f,u;for(n===void 0?(s=1,u=t[i[0]]):(s=0,u=n);s<o;s++)f=i[s],u=l(u,t[f],f,t);return u};function On(e){return L(e).length!==1?null:e.codePointAt(0).toString(16)}function oa(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function pt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=oa(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(e,oa(t)):M.styles[e]=m(m({},M.styles[e]||{}),i),e==="fas"&&pt("fa",t)}var Ae=M.styles,Co=M.shims,En=Object.keys(Ot),Fo=En.reduce(function(e,t){return e[t]=Object.keys(Ot[t]),e},{}),Nt=null,In={},Nn={},Cn={},Fn={},_n={};function _o(e){return~bo.indexOf(e)}function To(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!_o(r)?r:null}var Tn=function(){var t=function(i){return et(Ae,function(o,l,s){return o[s]=et(l,i,{}),o},{})};In=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){r[s.toString(16)]=o})}return r}),Nn=t(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){r[s]=o})}return r}),_n=t(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(s){r[s]=o}),r});var a="far"in Ae||g.autoFetchSvg,n=et(Co,function(r,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!a&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:s}),r},{names:{},unicodes:{}});Cn=n.names,Fn=n.unicodes,Nt=He(g.styleDefault,{family:g.familyDefault})};ko(function(e){Nt=He(e.styleDefault,{family:g.familyDefault})});Tn();function Ct(e,t){return(In[e]||{})[t]}function $o(e,t){return(Nn[e]||{})[t]}function q(e,t){return(_n[e]||{})[t]}function $n(e){return Cn[e]||{prefix:null,iconName:null}}function Mo(e){var t=Fn[e],a=Ct("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function X(){return Nt}var Mn=function(){return{prefix:null,iconName:null,rest:[]}};function Lo(e){var t=I,a=En.reduce(function(n,r){return n[r]="".concat(g.cssPrefix,"-").concat(r),n},{});return dn.forEach(function(n){(e.includes(a[n])||e.some(function(r){return Fo[n].includes(r)}))&&(t=n)}),t}function He(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?I:a,r=mo[n][e];if(n===Pe&&!e)return"fad";var i=aa[n][e]||aa[n][r],o=e in M.styles?e:null,l=i||o||null;return l}function Ro(e){var t=[],a=null;return e.forEach(function(n){var r=To(g.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function sa(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var la=pn.concat(mn);function Ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=sa(e.filter(function(h){return la.includes(h)})),o=sa(e.filter(function(h){return!la.includes(h)})),l=i.filter(function(h){return r=h,!Ga.includes(h)}),s=Ye(l,1),f=s[0],u=f===void 0?null:f,c=Lo(i),p=m(m({},Ro(o)),{},{prefix:He(u,{family:c})});return m(m(m({},p),Uo({values:e,family:c,styles:Ae,config:g,canonical:p,givenPrefix:r})),Do(n,r,p))}function Do(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?$n(r):{},o=q(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!Ae.far&&Ae.fas&&!g.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var zo=dn.filter(function(e){return e!==I||e!==Pe}),Wo=Object.keys(lt).filter(function(e){return e!==I}).map(function(e){return Object.keys(lt[e])}).flat();function Uo(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,l=o===void 0?{}:o,s=e.config,f=s===void 0?{}:s,u=a===Pe,c=t.includes("fa-duotone")||t.includes("fad"),p=f.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!u&&(c||p||h)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&zo.includes(a)){var x=Object.keys(l).find(function(w){return Wo.includes(w)});if(x||f.autoFetchSvg){var b=ai.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=q(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=X()||"fas"),n}var Yo=function(){function e(){Sr(this,e),this.definitions={}}return Ar(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){a.definitions[l]=m(m({},a.definitions[l]||{}),o[l]),pt(l,o[l]);var s=Ot[I][l];s&&pt(s,o[l]),Tn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,s=o.iconName,f=o.icon,u=f[2];a[l]||(a[l]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(a[l][c]=f)}),a[l][s]=f}),a}}])}(),fa=[],le={},fe={},Bo=Object.keys(fe);function Ho(e,t){var a=t.mixoutsTo;return fa=e,le={},Object.keys(fe).forEach(function(n){Bo.indexOf(n)===-1&&delete fe[n]}),fa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),ze(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=r[o][l]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){le[o]||(le[o]=[]),le[o].push(i[o])})}n.provides&&n.provides(fe)}),a}function ht(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=le[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function Q(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=le[e]||[];r.forEach(function(i){i.apply(null,a)})}function K(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return fe[e]?fe[e].apply(null,t):void 0}function vt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||X();if(t)return t=q(a,t)||t,ia(Ln.definitions,a,t)||ia(M.styles,a,t)}var Ln=new Yo,Vo=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Q("noAuto")},Go={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(Q("beforeI2svg",t),K("pseudoElements2svg",t),K("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,No(function(){Ko({autoReplaceSvgRoot:a}),Q("watch",t)})}},Xo={icon:function(t){if(t===null)return null;if(ze(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=He(t[0]);return{prefix:n,iconName:q(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(po))){var r=Ve(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=X();return{prefix:i,iconName:q(i,t)||t}}}},_={noAuto:Vo,config:g,dom:Go,parse:Xo,library:Ln,findIconDefinition:vt,toHtml:Ee},Ko=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?A:a;(Object.keys(M.styles).length>0||g.autoFetchSvg)&&V&&g.autoReplaceSvg&&_.dom.i2svg({node:n})};function Ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Ee(n)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var n=A.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Jo(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(It(o)&&a.found&&!n.found){var l=a.width,s=a.height,f={x:l/s/2,y:.5};r.style=Be(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function qo(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:n}]}]}function Zo(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Ft(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.maskId,f=e.extra,u=e.watchable,c=u===void 0?!1:u,p=n.found?n:a,h=p.width,x=p.height,b=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(v){return f.classes.indexOf(v)===-1}).filter(function(v){return v!==""||!!v}).concat(f.classes).join(" "),w={children:[],attributes:m(m({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:f.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(x)})};!Zo(f.attributes)&&!f.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[Z]="");var y=m(m({},w),{},{prefix:r,iconName:i,main:a,mask:n,maskId:s,transform:o,symbol:l,styles:m({},f.styles)}),S=n.found&&a.found?K("generateAbstractMask",y)||{children:[],attributes:{}}:K("generateAbstractIcon",y)||{children:[],attributes:{}},j=S.children,E=S.attributes;return y.children=j,y.attributes=E,l?qo(y):Jo(y)}function ca(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,l=o===void 0?!1:o,s=m(m({},i.attributes),{},{class:i.classes.join(" ")});l&&(s[Z]="");var f=m({},i.styles);It(r)&&(f.transform=Oo({transform:r,width:a,height:n}),f["-webkit-transform"]=f.transform);var u=Be(f);u.length>0&&(s.style=u);var c=[];return c.push({tag:"span",attributes:s,children:[t]}),c}function Qo(e){var t=e.content,a=e.extra,n=m(m({},a.attributes),{},{class:a.classes.join(" ")}),r=Be(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var tt=M.styles;function gt(e){var t=e[0],a=e[1],n=e.slice(4),r=Ye(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ze.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ze.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var es={found:!1,width:512,height:512};function ts(e,t){!yn&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bt(e,t){var a=t;return t==="fa"&&g.styleDefault!==null&&(t=X()),new Promise(function(n,r){if(a==="fa"){var i=$n(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&tt[t]&&tt[t][e]){var o=tt[t][e];return n(gt(o))}ts(e,t),n(m(m({},es),{},{icon:g.showMissingIcons&&e?K("missingIconAbstract")||{}:{}}))})}var ua=function(){},yt=g.measurePerformance&&Fe&&Fe.mark&&Fe.measure?Fe:{mark:ua,measure:ua},ve='FA "7.2.0"',as=function(t){return yt.mark("".concat(ve," ").concat(t," begins")),function(){return Rn(t)}},Rn=function(t){yt.mark("".concat(ve," ").concat(t," ends")),yt.measure("".concat(ve," ").concat(t),"".concat(ve," ").concat(t," begins"),"".concat(ve," ").concat(t," ends"))},_t={begin:as,end:Rn},Me=function(){};function da(e){var t=e.getAttribute?e.getAttribute(Z):null;return typeof t=="string"}function ns(e){var t=e.getAttribute?e.getAttribute(At):null,a=e.getAttribute?e.getAttribute(Pt):null;return t&&a}function rs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function is(){if(g.autoReplaceSvg===!0)return Le.replace;var e=Le[g.autoReplaceSvg];return e||Le.replace}function os(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function ss(e){return A.createElement(e)}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?os:ss:a;if(typeof e=="string")return A.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Dn(o,{ceFn:n}))}),r}function ls(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Le={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Dn(r),a)}),a.getAttribute(Z)===null&&g.keepOriginalSource){var n=A.createComment(ls(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Et(a).indexOf(g.replacementClass))return Le.replace(t);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(l,s){return s===g.replacementClass||s.match(r)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(l){return Ee(l)}).join(`
`);a.setAttribute(Z,""),a.innerHTML=o}};function ma(e){e()}function zn(e,t){var a=typeof t=="function"?t:Me;if(e.length===0)a();else{var n=ma;g.mutateApproach===co&&(n=G.requestAnimationFrame||ma),n(function(){var r=is(),i=_t.begin("mutate");e.map(r),i(),a()})}}var Tt=!1;function Wn(){Tt=!0}function xt(){Tt=!1}var Ue=null;function pa(e){if(Zt&&g.observeMutations){var t=e.treeCallback,a=t===void 0?Me:t,n=e.nodeCallback,r=n===void 0?Me:n,i=e.pseudoElementsCallback,o=i===void 0?Me:i,l=e.observeMutationsRoot,s=l===void 0?A:l;Ue=new Zt(function(f){if(!Tt){var u=X();me(f).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!da(c.addedNodes[0])&&(g.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&g.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&da(c.target)&&~go.indexOf(c.attributeName))if(c.attributeName==="class"&&ns(c.target)){var p=Ve(Et(c.target)),h=p.prefix,x=p.iconName;c.target.setAttribute(At,h||u),x&&c.target.setAttribute(Pt,x)}else rs(c.target)&&r(c.target)})}}),V&&Ue.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fs(){Ue&&Ue.disconnect()}function cs(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(n[o]=l.join(":").trim()),n},{})),a}function us(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Ve(Et(e));return r.prefix||(r.prefix=X()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=$o(r.prefix,e.innerText)||Ct(r.prefix,On(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ds(e){var t=me(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function ms(){return{iconName:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=us(e),n=a.iconName,r=a.prefix,i=a.rest,o=ds(e),l=ht("parseNodeAttributes",{},e),s=t.styleParser?cs(e):[];return m({iconName:n,prefix:r,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var ps=M.styles;function Un(e){var t=g.autoReplaceSvg==="nest"?ha(e,{styleParser:!1}):ha(e);return~t.extra.classes.indexOf(wn)?K("generateLayersText",e,t):K("generateSvgReplacementMutation",e,t)}function hs(){return[].concat(L(mn),L(pn))}function va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var a=A.documentElement.classList,n=function(c){return a.add("".concat(ta,"-").concat(c))},r=function(c){return a.remove("".concat(ta,"-").concat(c))},i=g.autoFetchSvg?hs():Ga.concat(Object.keys(ps));i.includes("fa")||i.push("fa");var o=[".".concat(wn,":not([").concat(Z,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=me(e.querySelectorAll(o))}catch{}if(l.length>0)n("pending"),r("complete");else return Promise.resolve();var s=_t.begin("onTree"),f=l.reduce(function(u,c){try{var p=Un(c);p&&u.push(p)}catch(h){yn||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,c){Promise.all(f).then(function(p){zn(p,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),s(),u()})}).catch(function(p){s(),c(p)})})}function vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Un(e).then(function(a){a&&zn([a],t)})}function gs(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:vt(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:vt(r||{})),e(n,m(m({},a),{},{mask:r}))}}var bs=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?W:n,i=a.symbol,o=i===void 0?!1:i,l=a.mask,s=l===void 0?null:l,f=a.maskId,u=f===void 0?null:f,c=a.classes,p=c===void 0?[]:c,h=a.attributes,x=h===void 0?{}:h,b=a.styles,w=b===void 0?{}:b;if(t){var y=t.prefix,S=t.iconName,j=t.icon;return Ge(m({type:"icon"},t),function(){return Q("beforeDOMElementCreation",{iconDefinition:t,params:a}),Ft({icons:{main:gt(j),mask:s?gt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:S,transform:m(m({},W),r),symbol:o,maskId:u,extra:{attributes:x,styles:w,classes:p}})})}},ys={mixout:function(){return{icon:gs(bs)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=va,a.nodeCallback=vs,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?A:n,i=a.callback,o=i===void 0?function(){}:i;return va(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,l=n.symbol,s=n.mask,f=n.maskId,u=n.extra;return new Promise(function(c,p){Promise.all([bt(r,i),s.iconName?bt(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var x=Ye(h,2),b=x[0],w=x[1];c([a,Ft({icons:{main:b,mask:w},prefix:i,iconName:r,transform:o,symbol:l,maskId:f,extra:u,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,l=a.styles,s=Be(l);s.length>0&&(r.style=s);var f;return It(o)&&(f=K("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(f||i.icon),{children:n,attributes:r}}}},xs={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Ge({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(L(i)).join(" ")},children:o}]})}}}},ws={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,l=o===void 0?{}:o,s=n.styles,f=s===void 0?{}:s;return Ge({type:"counter",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:n}),Qo({content:a.toString(),extra:{attributes:l,styles:f,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(L(i))}})})}}}},ks={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?W:r,o=n.classes,l=o===void 0?[]:o,s=n.attributes,f=s===void 0?{}:s,u=n.styles,c=u===void 0?{}:u;return Ge({type:"text",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:n}),ca({content:a,transform:m(m({},W),i),extra:{attributes:f,styles:c,classes:["".concat(g.cssPrefix,"-layers-text")].concat(L(l))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,l=null;if(Ha){var s=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/s,l=f.height/s}return Promise.resolve([a,ca({content:a.innerHTML,width:o,height:l,transform:r,extra:i,watchable:!0})])}}},Yn=new RegExp('"',"ug"),ga=[1105920,1112319],ba=m(m(m(m({},{FontAwesome:{normal:"fas",400:"fas"}}),ti),lo),ci),wt=Object.keys(ba).reduce(function(e,t){return e[t.toLowerCase()]=ba[t],e},{}),Ss=Object.keys(wt).reduce(function(e,t){var a=wt[t];return e[t]=a[900]||L(Object.entries(a))[0][1],e},{});function js(e){var t=e.replace(Yn,"");return On(L(t)[0]||"")}function As(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Yn,""),r=n.codePointAt(0),i=r>=ga[0]&&r<=ga[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function Ps(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(wt[a]||{})[r]||Ss[a]}function ya(e,t){var a="".concat(fo).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=me(e.children),o=i.filter(function(O){return O.getAttribute(ct)===t})[0],l=G.getComputedStyle(e,t),s=l.getPropertyValue("font-family"),f=s.match(ho),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&c!=="none"&&c!==""){var p=l.getPropertyValue("content"),h=Ps(s,u),x=js(p),b=f[0].startsWith("FontAwesome"),w=As(l),y=Ct(h,x),S=y;if(b){var j=Mo(x);j.iconName&&j.prefix&&(y=j.iconName,h=j.prefix)}if(y&&!w&&(!o||o.getAttribute(At)!==h||o.getAttribute(Pt)!==S)){e.setAttribute(a,S),o&&e.removeChild(o);var E=ms(),v=E.extra;v.attributes[ct]=t,bt(y,h).then(function(O){var P=Ft(m(m({},E),{},{icons:{main:O,mask:Mn()},prefix:h,iconName:S,extra:v,watchable:!0})),C=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=P.map(function(N){return Ee(N)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Os(e){return Promise.all([ya(e,"::before"),ya(e,"::after")])}function Es(e){return e.parentNode!==document.head&&!~uo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ct)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Is=function(t){return!!t&&bn.some(function(a){return t.includes(a)})},Ns=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(s){return s.trim()});n=n.flatMap(function(s){return s.includes("(")?s:s.split(",").map(function(f){return f.trim()})});var r=$e(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Is(o)){var l=bn.reduce(function(s,f){return s.replace(f,"")},o);l!==""&&l!=="*"&&a.add(l)}}}catch(s){r.e(s)}finally{r.f()}return a};function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(V){var a;if(t)a=e;else if(g.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=$e(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var l=$e(o.cssRules),s;try{for(l.s();!(s=l.n()).done;){var f=s.value,u=Ns(f.selectorText),c=$e(u),p;try{for(c.s();!(p=c.n()).done;){var h=p.value;n.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){l.e(b)}finally{l.f()}}catch(b){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var x=Array.from(n).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(b,w){var y=me(a).filter(Es).map(Os),S=_t.begin("searchPseudoElements");Wn(),Promise.all(y).then(function(){S(),xt(),b()}).catch(function(){S(),xt(),w()})})}}var Cs={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=xa,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?A:n;g.searchPseudoElements&&xa(r)}}},wa=!1,Fs={mixout:function(){return{dom:{unwatch:function(){Wn(),wa=!0}}}},hooks:function(){return{bootstrap:function(){pa(ht("mutationObserverCallbacks",{}))},noAuto:function(){fs()},watch:function(a){var n=a.observeMutationsRoot;wa?xt():pa(ht("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ka=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return n.flipX=!0,n;if(o&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(o){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},a)},_s={mixout:function(){return{parse:{transform:function(a){return ka(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=ka(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(s," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:c,path:p};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),h.path)}]}]}}}},at={x:0,y:0,width:"100%",height:"100%"};function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ts(e){return e.tag==="g"?e.children:[e]}var $s={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?Ve(r.split(" ").map(function(o){return o.trim()})):Mn();return i.prefix||(i.prefix=X()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,l=a.maskId,s=a.transform,f=i.width,u=i.icon,c=o.width,p=o.icon,h=Po({transform:s,containerWidth:c,iconWidth:f}),x={tag:"rect",attributes:m(m({},at),{},{fill:"white"})},b=u.children?{children:u.children.map(Sa)}:{},w={tag:"g",attributes:m({},h.inner),children:[Sa(m({tag:u.tag,attributes:m(m({},u.attributes),h.path)},b))]},y={tag:"g",attributes:m({},h.outer),children:[w]},S="mask-".concat(l||na()),j="clip-".concat(l||na()),E={tag:"mask",attributes:m(m({},at),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:Ts(p)},E]};return n.push(v,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(S,")")},at)}),{children:n,attributes:r}}}},Ms={provides:function(t){var a=!1;G.matchMedia&&(a=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ls={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Rs=[Io,ys,xs,ws,ks,Cs,Fs,_s,$s,Ms,Ls];Ho(Rs,{mixoutsTo:_});_.noAuto;var ue=_.config;_.library;_.dom;var Bn=_.parse;_.findIconDefinition;_.toHtml;var Ds=_.icon;_.layer;_.text;_.counter;function zs(e){return e=e-0,e===e}function Hn(e){return zs(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var Ws=(e,t)=>ke.createElement("stop",{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Us(e){return e.charAt(0).toUpperCase()+e.slice(1)}var se=new Map,Ys=1e3;function Bs(e){if(se.has(e))return se.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const l=o.indexOf(":");if(l>0){const s=o.slice(0,l).trim(),f=o.slice(l+1).trim();if(s&&f){const u=Hn(s);t[u.startsWith("webkit")?Us(u):u]=f}}}a=i+1}if(se.size===Ys){const r=se.keys().next().value;r&&se.delete(r)}return se.set(e,t),t}function Vn(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(c=>{let p=c;return("fill"in a||a.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(p={...c,attributes:{...c.attributes,fill:void 0}}),Vn(e,p)}),r=t.attributes||{},i={};for(const[c,p]of Object.entries(r))switch(!0){case c==="class":{i.className=p;break}case c==="style":{i.style=Bs(String(p));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=p;break}default:i[Hn(c)]=p}const{style:o,role:l,"aria-label":s,gradientFill:f,...u}=a;if(o&&(i.style=i.style?{...i.style,...o}:o),l&&(i.role=l),s&&(i["aria-label"]=s,i["aria-hidden"]="false"),f){i.fill=`url(#${f.id})`;const{type:c,stops:p=[],...h}=f;n.unshift(e(c==="linear"?"linearGradient":"radialGradient",{...h,id:f.id},p.map(Ws)))}return e(t.tag,{...i,...u},...n)}var Hs=Vn.bind(null,ke.createElement),ja=(e,t)=>{const a=F.useId();return e||(t?a:void 0)},Vs=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Gs="searchPseudoElementsFullScan"in ue&&typeof ue.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Xs=Number.parseInt(Gs)>=7,Ks=()=>Xs,we="fa",U={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Js={left:"fa-pull-left",right:"fa-pull-right"},qs={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Zs={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Y={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Qs(e){const t=ue.cssPrefix||ue.familyPrefix||we;return t===we?e:e.replace(new RegExp(String.raw`(?<=^|\s)${we}-`,"g"),`${t}-`)}function el(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:l,spinReverse:s,pulse:f,fixedWidth:u,inverse:c,border:p,flip:h,size:x,rotation:b,pull:w,swapOpacity:y,rotateBy:S,widthAuto:j,className:E}=e,v=[];return E&&v.push(...E.split(" ")),t&&v.push(U.beat),a&&v.push(U.fade),n&&v.push(U.beatFade),r&&v.push(U.bounce),i&&v.push(U.shake),o&&v.push(U.spin),s&&v.push(U.spinReverse),l&&v.push(U.spinPulse),f&&v.push(U.pulse),u&&v.push(Y.fixedWidth),c&&v.push(Y.inverse),p&&v.push(Y.border),h===!0&&v.push(Y.flip),(h==="horizontal"||h==="both")&&v.push(Y.flipHorizontal),(h==="vertical"||h==="both")&&v.push(Y.flipVertical),x!=null&&v.push(Zs[x]),b!=null&&b!==0&&v.push(qs[b]),w!=null&&v.push(Js[w]),y&&v.push(Y.swapOpacity),Ks()?(S&&v.push(Y.rotateBy),j&&v.push(Y.widthAuto),(ue.cssPrefix||ue.familyPrefix||we)===we?v:v.map(Qs)):v}var tl=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Aa(e){if(e)return tl(e)?e:Bn.icon(e)}function al(e){return Object.keys(e)}var Pa=new Vs("FontAwesomeIcon"),Gn={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},nl=new Set(Object.keys(Gn)),Xn=ke.forwardRef((e,t)=>{const a={...Gn,...e},{icon:n,mask:r,symbol:i,title:o,titleId:l,maskId:s,transform:f}=a,u=ja(s,!!r),c=ja(l,!!o),p=Aa(n);if(!p)return Pa.error("Icon lookup is undefined",n),null;const h=el(a),x=typeof f=="string"?Bn.transform(f):f,b=Aa(r),w=Ds(p,{...h.length>0&&{classes:h},...x&&{transform:x},...b&&{mask:b},symbol:i,title:o,titleId:c,maskId:u});if(!w)return Pa.error("Could not find icon",p),null;const{abstract:y}=w,S={ref:t};for(const j of al(a))nl.has(j)||(S[j]=a[j]);return Hs(y[0],S)});Xn.displayName="FontAwesomeIcon";const rl=()=>d.jsxs("svg",{id:"icon-check-mark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 150 150",style:{maxWidth:"150px",display:"block"},children:[d.jsx("style",{children:`
        .stroke {
          fill: none;
          stroke-width: 10;
          stroke-linejoin: round;
        }

        #circle {
          stroke-dasharray: 345;
          stroke-dashoffset: 346;
          transform-origin: center;
          transform: rotate(0deg);
          animation: circle-dash 0.7s 1 cubic-bezier(0.42, 0, 1, 1) forwards;
        }

        @keyframes circle-dash {
          to {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
        }

        #check {
          stroke-linecap: square;
          stroke-dasharray: 122;
          stroke-dashoffset: -122;
          animation: check-dash 0.3s 1 cubic-bezier(0.19, 1, 0.22, 1) 0.65s forwards;
        }

        @keyframes check-dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}),d.jsx("path",{id:"circle",className:"stroke stroke-primary",d:"M141,69v6c0,37.5-31.3,67.7-69.2,65.9c-33.8-1.6-61.2-29-62.8-62.8C7.3,40.2,37.6,9,75,9c9.2,0,18.4,2,26.8,5.7"}),d.jsx("path",{id:"check",className:"stroke stroke-secondary",d:"M139.9,22.2l-66,66.1L54.1,68.5"})]});Te.registerPlugin(Ea);const il=({content:e})=>{const{message:t}=Oa().props,[a,n]=F.useState(!1),[r,i]=F.useState(!1),{data:o,setData:l,post:s,errors:f,clearErrors:u}=Jn({area:"comercial",nome:"",email:"",telefone:"",assunto:"",mensagem:"",politica:!1}),c=[{value:"comercial",label:"Comercial"},{value:"trabalhe",label:"Trabalhe Conosco"}];c.find(x=>x.value===o.area);const p=x=>{const{name:b,value:w,type:y,checked:S}=x.target;l(j=>({...j,[b]:y==="checkbox"?S:w})),u(b)},h=x=>{x.preventDefault(),n(!0),s(route("Contato.enviar"),{preserveScroll:!0,onSuccess:b=>{n(!1)},onError:()=>{n(!1)}})};return F.useEffect(()=>{t&&t.type==="success"&&(i(!0),setTimeout(()=>{l({nome:"",email:"",telefone:"",mensagem:"",politica:!1}),i(!1)},3e3))},[t]),d.jsxs("section",{className:"relative bg-neutral-100 pt-16 pb-20 md:pb-30",children:[d.jsxs("div",{className:"container max-w-large",children:[d.jsx(Ia,{className:"font-secondary text-primary text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight",text:e.titulo,element:"h2"}),d.jsx("h4",{className:"text-2xl md:text-3xl 2xl:text-4xl mb-10 2xl:mb-20",children:e.subtitulo}),d.jsxs("form",{onSubmit:h,children:[d.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col",children:[d.jsx("label",{htmlFor:"area",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Escolha:"}),d.jsxs("div",{className:"relative w-fit mb-7 2xl:mb-14",children:[d.jsx("select",{name:"area",value:o.area,onChange:p,className:"appearance-none bg-primary border-0 rounded-full text-white text-center font-bold text-lg md:text-xl 2xl:text-2xl max-w-64 pl-5 pr-11 bg-none focus:border focus:border-secondary outline-none",style:{WebkitAppearance:"none",MozAppearance:"none"},children:c.map(x=>d.jsx("option",{className:"bg-white text-black text-lg",value:x.value,children:x.label},x.label))}),d.jsx(Xn,{icon:xr,className:"absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none text-2xl"})]})]}),d.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:[d.jsxs("div",{className:"w-full lg:w-1/2",children:[d.jsx("label",{htmlFor:"nome",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Nome completo"}),d.jsx("input",{type:"text",name:"nome",value:o.nome,onChange:p,placeholder:"Seu nome",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.nome&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.nome})]}),d.jsxs("div",{className:"w-full lg:w-1/2",children:[d.jsx("label",{htmlFor:"email",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Email"}),d.jsx("input",{type:"text",name:"email",value:o.email,onChange:p,placeholder:"Seu e-mail",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.email&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.email})]})]}),d.jsxs("div",{className:"mb-3 md:mb-5 min-[1440px]:mb-4 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:[d.jsxs("div",{className:"w-full lg:w-1/2",children:[d.jsx("label",{htmlFor:"telefone",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Telefone"}),d.jsx(yr,{type:"text",name:"telefone",mask:"(__) _____-____",replacement:{_:/\d/},value:o.telefone,onChange:p,placeholder:"(DDD) + número",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.telefone&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.telefone})]}),d.jsxs("div",{className:"w-full lg:w-1/2",children:[d.jsx("label",{htmlFor:"assunto",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Assunto"}),d.jsx("input",{type:"text",name:"assunto",value:o.assunto,onChange:p,placeholder:"Sobre o que quer falar",className:"w-full h-12 px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.assunto&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.assunto})]})]}),d.jsx("div",{className:"mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row",children:d.jsxs("div",{className:"w-full",children:[d.jsx("label",{htmlFor:"mensagem",className:"inline-block text-base md:text-lg 2xl:text-xl text-neutral-600 font-semibold 2xl:mb-2",children:"Mensagem"}),d.jsx("textarea",{name:"mensagem",value:o.mensagem,onChange:p,placeholder:"Escreva aqui...",className:"w-full h-40 2xl:h-48 resize-none px-0 2xl:text-xl bg-neutral-100 border-0 focus:border-b focus:outline-none focus:ring-0 focus:border-b-secondary focus:shadow-inner transition-colors duration-200 placeholder:text-gray-500 placeholder:text-opacity-70"}),f.mensagem&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.mensagem})]})}),d.jsxs("div",{className:"mb-5 md:mb-8 min-[1440px]:mb-10 flex gap-3 md:gap-5 lg:gap-6 flex-col lg:flex-row items-center justify-between",children:[d.jsxs("div",{className:"",children:[d.jsxs("label",{className:"flex items-center",children:[d.jsxs("label",{className:"relative flex",children:[d.jsx("input",{type:"checkbox",name:"politica",checked:o.politica,onChange:p,className:"peer w-5 h-5 rounded-full bg-white border-neutral-600 checked:bg-white checked:border-neutral-600 checked:bg-[length:0_0] checked:hover:bg-white checked:hover:border-neutral-600 checked:focus:bg-white checked:focus:border-neutral-600 !outline-0 !ring-0 !ring-offset-0"}),d.jsx("span",{className:"peer-checked:content-[''] peer-checked:absolute peer-checked:inset-1 rounded-full peer-checked:bg-primary"})]}),d.jsxs("span",{className:"text-neutral-600 ml-2 text-sm 2xl:text-base",children:["Aceito os"," ",d.jsx(Dt,{href:route("Politicas.privacidade"),className:"underline font-bold",target:"_blank",rel:"noopener noreferrer",children:"Termos de uso"})," ","e a"," ",d.jsx(Dt,{href:route("Politicas.privacidade"),className:"underline font-bold",target:"_blank",rel:"noopener noreferrer",children:"Política de privacidade"})," ","do site da Silvestrin"]})]}),f.politica&&d.jsx("p",{className:"text-xs text-white bg-red-900 px-3 py-1.5 mt-2",children:f.politica})]}),d.jsx("button",{type:"submit",className:"relative px-8 py-3 w-fit lg:text-xl 2xl:text-2xl bg-primary text-white text-center font-semibold rounded-full whitespace-nowrap transition-all hover:bg-secondary",children:a?d.jsxs(d.Fragment,{children:[d.jsxs("div",{role:"status",className:"absolute inset-0 flex justify-center items-center",children:[d.jsxs("svg",{"aria-hidden":"true",className:"w-8 h-8 text-gray-200 animate-spin fill-primary",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),d.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),d.jsx("span",{className:"sr-only",children:"Loading..."})]}),d.jsx("span",{className:"opacity-0",children:"Enviar mensagem"})]}):"Enviar mensagem"})]})]})]}),r&&d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-white pointer-events-none animate-fade-in-down",children:[d.jsx(rl,{}),d.jsx("h2",{className:"text-primary text-4xl text-center font-semibold mt-4 mb-2",children:"Sucesso!"}),d.jsx("h4",{className:"font-secondary text-tertiary text-2xl text-center",children:"Sua mensagem foi enviada."})]})]})},fl=()=>{const{dadosGerais:e,conteudos:t}=Oa().props;return d.jsxs(qn,{children:[d.jsx(Zn,{data:e,content:[t[0],t[2]]}),d.jsx(il,{content:t[1]})]})};export{fl as default};
