import{d as Z,u as ee,G as te,H as ae,k as T,j as ne,i as oe,m as ie,n as le,p as E,l as re,J as de,g as se,_ as pe,r as h,o as A,x as F,w as r,b as u,a as i,y as N,f as d,t as l,U as ce,c as U,V as ue,W as me}from"./index-ca663933.js";import{P as fe,C as he}from"./PageTitle-82077c23.js";var M,ve=new Uint8Array(16);function Ce(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(ve)}const ge=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ye(e){return typeof e=="string"&&ge.test(e)}var p=[];for(var w=0;w<256;++w)p.push((w+256).toString(16).substr(1));function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,m=(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase();if(!ye(m))throw TypeError("Stringified UUID is invalid");return m}function Te(e,t,m){e=e||{};var c=e.random||(e.rng||Ce)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,t){m=m||0;for(var f=0;f<16;++f)t[m+f]=c[f];return t}return be(c)}function P(e){const t={};return Object.entries(e).forEach(([m,c])=>{c&&(t[m]=c)}),t}const Ee=Z({name:"ApplicationForm",components:{PageTitle:fe,CopyButton:he},setup(){function e(a){const o={name:"",description:"",redirect_uri:"",reference_id:""};return a?delete o.reference_id:delete o.redirect_uri,o}const t=ee().state.helpText,m=te(),{isDcr:c}=ae(m),f=T(""),R=T(""),S=T(""),L=T(""),v=T(!1),_=e(c.value),s=T(_),{notify:D}=se(),C=ne(),I=oe(),{state:g,send:n}=ie(le({predictableActionArguments:!0,id:"applicationFormMachine",initial:"idle",states:{idle:{on:{CLICKED_SUBMIT:"pending",FETCH:"pending",CLICKED_DELETE:"confirm_delete"}},pending:{on:{RESOLVE:"success",REJECT:"error"}},success:{on:{CLICKED_SUBMIT:"pending",CLICKED_DELETE:"confirm_delete"}},error:{on:{SUBMIT:"pending"}},confirm_delete:{on:{CLICKED_DELETE:"pending",CLICKED_CANCEL:"idle"}}}})),q=E(()=>{var a;return!g.value.matches("pending")&&s.value.name.length&&(c.value?!0:(a=s.value.reference_id)==null?void 0:a.length)}),x=E(()=>{var a;return`Delete ${(a=s.value)==null?void 0:a.name}`}),y=E(()=>C.params.application_id),B=E(()=>y.value?"edit":"create"),j=E(()=>B.value==="create"?J:G),O=E(()=>({edit:g.value.matches("pending")?"Submitting":"Update",create:g.value.matches("pending")?"Submitting":"Create"})[B.value]),{portalApiV2:V}=re();de(()=>{y.value&&W()});const H=(a,o)=>{a(o)||D({appearance:"danger",message:t.copyButton.copyFailed.start+"id"+t.copyButton.copyFailed.end}),D({message:t.copyButton.copySucceeded.start+o+t.copyButton.copySucceeded.end})},J=()=>{n("CLICKED_SUBMIT"),V.value.service.applicationsApi.createApplication({createApplicationPayload:P(s.value)}).then(a=>{var o,b;c.value?(v.value=!0,L.value=a.data.id,S.value=(o=a.data.credentials)==null?void 0:o.client_id,R.value=(b=a.data.credentials)==null?void 0:b.client_secret):k(a.data.id,"created")}).catch(a=>K(a))},G=()=>{n("CLICKED_SUBMIT"),V.value.service.applicationsApi.updateApplication({applicationId:y.value,updateApplicationPayload:P(s.value)}).then(a=>k(a.data.id,"updated")).catch(a=>K(a))},z=()=>{V.value.service.applicationsApi.deleteApplication({applicationId:y.value}).then(()=>k("","deleted")).catch(a=>K(a))},W=()=>{n("FETCH"),V.value.service.applicationsApi.getApplication({applicationId:y.value}).then(a=>{n("RESOLVE");const o={...s.value,name:a.data.name,description:a.data.description||"",redirect_uri:a.data.redirect_uri,reference_id:a.data.reference_id};c.value?delete o.reference_id:delete o.redirect_uri,s.value=o}).catch(a=>K(a))},X=()=>{n("CLICKED_CANCEL"),v.value=!1,k(L.value,"created")},Q=a=>a?C.query.product&&C.query.product_version?{name:"spec",params:{product:C.query.product,product_version:C.query.product_version},query:{application:a}}:{path:`/application/${a}`}:{path:"/my-apps"},k=(a,o)=>{n("RESOLVE"),D({message:`Application successfully ${o}`}),I.push(Q(a))},K=a=>{const{data:o}=a.response,b=o.invalid_parameters&&o.invalid_parameters.length&&o.invalid_parameters||o.detail||a.detail;if(n("REJECT"),Array.isArray(b)){f.value=b.map(Y=>Y.reason).join(", ");return}f.value=b};return{modalTitle:x,currentState:g,formData:s,errorMessage:f,isEnabled:q,id:y,isDcr:c,clientSecret:R,clientId:S,copyTokenToClipboard:H,secretModalIsVisible:v,handleAcknowledgeSecret:X,send:n,buttonText:O,formMode:B,formMethod:j,handleDelete:z,handleCancel:()=>{I.back()},generateReferenceId:()=>{s.value.reference_id=Te()},helpText:t}}});const $=e=>(ue("data-v-d7bddad6"),e=e(),me(),e),_e={class:"w-1/2 mx-auto"},De={class:"text-sm mb-5"},Ie=$(()=>u("span",{class:"text-danger"},"*",-1)),Ae={class:"mb-5"},Se=$(()=>u("span",{class:"text-danger"},"*",-1)),Le={key:0,class:"mb-5"},Ve={key:1,class:"mb-5"},ke=$(()=>u("span",{class:"text-danger"},"*",-1)),Ke={class:"d-flex"},Me={class:"mb-5"},Re={class:"flex"},Be={class:"flex-1"},Ue={key:0};function we(e,t,m,c,f,R){const S=h("PageTitle"),L=h("KAlert"),v=h("KLabel"),_=h("KInput"),s=h("KButton"),D=h("KTextArea"),C=h("KModal"),I=h("CopyButton"),g=h("Content");return A(),F(g,null,{default:r(()=>[u("div",_e,[i(S,{title:e.$route.meta.title,class:"mb-5"},null,8,["title"]),e.currentState.matches("error")?(A(),F(L,{key:0,appearance:"danger",class:"mb-5","alert-message":e.errorMessage},null,8,["alert-message"])):N("",!0),u("div",null,[u("p",De,[Ie,d(" "+l(e.helpText.application.reqField),1)]),u("form",{onSubmit:t[5]||(t[5]=ce((...n)=>e.formMethod&&e.formMethod(...n),["prevent"]))},[u("div",Ae,[i(v,{for:"applicationName"},{default:r(()=>[d(l(e.helpText.application.applicationName)+" ",1),Se]),_:1}),i(_,{id:"applicationName",modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=n=>e.formData.name=n),modelModifiers:{trim:!0},"data-testid":"application-name-input",type:"text",class:"k-input--full"},null,8,["modelValue"])]),e.isDcr?(A(),U("div",Le,[i(v,{for:"redirectUri"},{default:r(()=>[d(l(e.helpText.application.redirectUriLabel),1)]),_:1}),i(_,{id:"redirectUri",modelValue:e.formData.redirect_uri,"onUpdate:modelValue":t[1]||(t[1]=n=>e.formData.redirect_uri=n),type:"text",class:"w-100 k-input--full"},null,8,["modelValue"])])):(A(),U("div",Ve,[i(v,{for:"referenceId"},{default:r(()=>[d(l(e.helpText.application.form.referenceId.label)+" ",1),ke]),_:1}),u("div",Ke,[i(_,{id:"referenceId",modelValue:e.formData.reference_id,"onUpdate:modelValue":t[2]||(t[2]=n=>e.formData.reference_id=n),"data-testid":"reference-id-input",type:"text",class:"k-input--full",placeholder:e.helpText.application.form.referenceId.placeholder,help:e.helpText.application.form.referenceId.help},null,8,["modelValue","placeholder","help"]),i(s,{class:"generate-reference-id-button","data-testid":"generate-reference-id","is-rounded":!1,appearance:"secondary",size:"small",onClick:e.generateReferenceId},{default:r(()=>[d(l(e.helpText.application.form.referenceId.generate),1)]),_:1},8,["onClick"])])])),u("div",Me,[i(v,{for:"description"},{default:r(()=>[d(l(e.helpText.application.description),1)]),_:1}),i(D,{id:"description",modelValue:e.formData.description,"onUpdate:modelValue":t[3]||(t[3]=n=>e.formData.description=n),modelModifiers:{trim:!0},rows:5,class:"k-input--full"},null,8,["modelValue"])]),u("div",Re,[u("div",Be,[i(s,{"is-rounded":!1,type:"submit",appearance:"primary",class:"mr-4",disabled:e.isEnabled?null:!0},{default:r(()=>[d(l(e.buttonText),1)]),_:1},8,["disabled"]),i(s,{"is-rounded":!1,appearance:"secondary",onClick:e.handleCancel},{default:r(()=>[d(l(e.helpText.application.cancel),1)]),_:1},8,["onClick"])]),e.formMode==="edit"?(A(),U("div",Ue,[i(s,{"data-testid":"application-delete-button",appearance:"danger","is-rounded":!1,onClick:t[4]||(t[4]=n=>e.send("CLICKED_DELETE"))},{default:r(()=>[d(l(e.helpText.application.delete),1)]),_:1})])):N("",!0)])],32)])]),i(C,{title:e.modalTitle,"is-visible":e.currentState.matches("confirm_delete"),"data-testid":"application-delete-modal","action-button-text":e.helpText.application.delete,"action-button-appearance":"danger",class:"delete-modal",onCanceled:t[7]||(t[7]=n=>e.send("CLICKED_CANCEL"))},{"header-content":r(()=>[d(l(e.modalTitle),1)]),"body-content":r(()=>[d(l(e.helpText.application.confirmDelete(e.formData.name)),1)]),"footer-content":r(()=>[i(s,{"is-rounded":!1,appearance:"danger","data-testid":"application-delete-confirm-button",class:"mr-3",onClick:e.handleDelete},{default:r(()=>[d(l(e.helpText.application.delete),1)]),_:1},8,["onClick"]),i(s,{appearance:"secondary","is-rounded":!1,"data-testid":"application-delete-cancel-button",onClick:t[6]||(t[6]=n=>e.send("CLICKED_CANCEL"))},{default:r(()=>[d(l(e.helpText.application.cancel),1)]),_:1})]),_:1},8,["title","is-visible","action-button-text"]),i(C,{title:e.helpText.application.applicationCredentials,"is-visible":e.secretModalIsVisible,"data-testid":"copy-secret-modal","action-button-text":e.helpText.application.delete,"action-button-appearance":"danger",class:"application-secret-modal",onCanceled:t[8]||(t[8]=n=>e.send("CLICKED_CANCEL"))},{"header-content":r(()=>[d(l(e.helpText.application.applicationSecret),1)]),"body-content":r(()=>[d(l(e.helpText.application.headerDescription1),1),u("strong",null,l(e.formData.name),1),d(" "+l(e.helpText.application.headerDescription2),1),u("strong",null,l(e.helpText.application.headerDescription3),1),d(" "+l(e.helpText.application.headerDescription4)+" ",1),i(I,{label:e.helpText.application.clientID,"text-to-copy":e.clientId},null,8,["label","text-to-copy"]),i(I,{label:e.helpText.application.clientSecret,"text-to-copy":e.clientSecret},null,8,["label","text-to-copy"])]),"footer-content":r(()=>[i(s,{"is-rounded":!1,appearance:"primary","data-testid":"close-application-secret-modal",onClick:e.handleAcknowledgeSecret},{default:r(()=>[d(l(e.helpText.application.proceed),1)]),_:1},8,["onClick"])]),_:1},8,["title","is-visible","action-button-text"])]),_:1})}const qe=pe(Ee,[["render",we],["__scopeId","data-v-d7bddad6"]]);export{qe as default};
