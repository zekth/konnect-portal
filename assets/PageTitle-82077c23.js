import{d,u as g,g as $,_,r as n,o as u,c as y,a as s,w as c,b as a,t as r,M as i}from"./index-ca663933.js";const v=d({name:"CopyButton",props:{textToCopy:{type:String,required:!0},label:{type:String,default:""}},setup(e){const{notify:o}=$(),t=g().state.helpText.copyButton;return{copyTokenToClipboard:l=>{l(e.textToCopy)||o({appearance:"danger",message:t.copyFailed.start+e.textToCopy+t.copyFailed.end}),o({message:t.copySucceeded.start+e.textToCopy+t.copySucceeded.end})},helpText:t}}});const x={class:"my-4"},B={class:"truncate"};function k(e,o,t,p,l,f){const T=n("KIcon"),C=n("KButton"),m=n("KClipboardProvider"),b=n("KTooltip");return u(),y("div",x,[s(b,{label:e.helpText.clickToCopy},{default:c(()=>[s(m,null,{default:c(({copyToClipboard:h})=>[s(C,{"is-rounded":!1,"aria-label":e.helpText.ariaLabel,class:"clipboard-button w-100 justify-content-between","data-testid":"copy-button",appearance:"secondary",onClick:j=>e.copyTokenToClipboard(h)},{default:c(()=>[a("span",B,r(e.label)+" "+r(e.textToCopy),1),s(T,{title:e.helpText.copyToClipboard,icon:"copy",color:"var(--steel-300)"},null,8,["title"])]),_:2},1032,["aria-label","onClick"])]),_:1})]),_:1},8,["label"])])}const N=_(v,[["render",k]]),K=d({name:"PageTitle",props:{title:{type:String,default:""}}});const S={class:"flex flex-col sm:flex-row justify-between sm:items-center"},w={class:"flex-1"},P={class:"m-0 type-xl color-text_colors-headings"};function I(e,o,t,p,l,f){return u(),y("header",S,[a("div",w,[i(e.$slots,"default",{},()=>[a("h1",P,r(e.title),1)],!0)]),a("div",null,[i(e.$slots,"right",{},void 0,!0)])])}const V=_(K,[["render",I],["__scopeId","data-v-50c9d603"]]);export{N as C,V as P};
