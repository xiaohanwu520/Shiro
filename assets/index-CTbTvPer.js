import{r as a,j as r,R as v}from"./index-Ca433yfl.js";import{u as z}from"./useQuery-7klDXkBe.js";import{p as N}from"./index-LAI3pait.js";import{a as R}from"./main-CVpS5kVw.js";import{b as T}from"./viewport-QaAYw-gj.js";import{T as L}from"./request-BmDFlFGH.js";import{u as S}from"./use-is-dark-CKn_Jey6.js";import{s as y}from"./dom-XXNktKeO.js";import{s as E,c as I}from"./helper-CaAdfMs7.js";import{c as O}from"./lodash-B3VVwmZe.js";import{t as A}from"./toast-M7kKRvME.js";import{M as B}from"./StyledButton-D1LUlhls.js";import{u as U}from"./provider-CMkguvXi.js";const b=a.forwardRef((i,s)=>{const{data:o,...l}=i,c=a.useMemo(()=>{if(!o)return{};const f=E(o);if(f)return{data:f};{const m=o.split(`
`),n=m[0],d=m.slice(1).join(`
`),t={};return n.startsWith("http")?t.refUrl=n:n.startsWith("ref:")&&(t.refUrl=`${L}/objects/${n.slice(4)}`),d.trim().length>0&&(t.patchDiffDelta=E(d)),t}},[o]),u=a.useRef(null);return a.useImperativeHandle(s,()=>({getRefData(){return u.current?.getRemoteData()},getDiffDelta(){return c.patchDiffDelta}})),r.jsx(w,{ref:u,...l,...c})});b.displayName="Excalidraw";const w=a.forwardRef(({data:i,refUrl:s,patchDiffDelta:o,viewModeEnabled:l=!0,zenModeEnabled:c=!0,onChange:u,className:f,showExtendButton:m=!0,onReady:n},d)=>{const t=v.useRef(),P=U(),M=T(),{data:p,isLoading:x}=z({queryKey:["excalidraw",s],queryFn:async({queryKey:e})=>{const[g,h]=e;return await(await fetch(h)).json()},enabled:!!s});a.useImperativeHandle(d,()=>({getRemoteData(){return p}}));const D=a.useMemo(()=>p?N(O(p),o):null,[p,s]),_=S(),k=a.useMemo(()=>{const e=i||D;return!e&&!x&&console.error("Excalidraw: data not exist"),e},[i,D,x]);return r.jsxs("div",{onKeyDown:y,onKeyUp:y,className:I("relative h-[500px] w-full",f),children:[x&&r.jsx("div",{className:"absolute inset-0 z-10 flex center",children:r.jsx("div",{className:"loading loading-spinner"})}),r.jsx(R.Excalidraw,{theme:_?"dark":"light",initialData:k,detectScroll:!1,zenModeEnabled:c,onChange:u,viewModeEnabled:l,excalidrawAPI:e=>{t.current=e,setTimeout(()=>{e.scrollToContent(void 0,{fitToContent:!0})},300),n?.(e)}},s?`excalidraw-refData-loading-${x}`:"excalidraw"),l&&m&&r.jsx(B,{onClick:()=>{if(!t.current){A.error("Excalidraw API not ready");return}const e=t.current.getSceneElements();if(M){const g=window.open();R.exportToBlob({elements:e,files:null}).then(j=>{g?.location.replace(URL.createObjectURL(j))})}else P.present({title:"Preview",content:()=>r.jsx(w,{data:i,className:"h-full",showExtendButton:!1,refUrl:s}),clickOutsideToDismiss:!0,max:!0})},className:I("absolute bottom-2 right-2 z-10 box-content flex size-5 rounded-md border p-2 center","border-zinc-200 bg-base-100 text-zinc-600","dark:border-neutral-800 dark:text-zinc-500"),children:r.jsx("i",{className:"icon-[mingcute--external-link-line]"})})]})});w.displayName="ExcalidrawImpl";const Z=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"})),ee=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"}));export{b as E,Z as a,ee as i};
