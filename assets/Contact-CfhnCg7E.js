import{k as u,j as r,r as x,B as h,g as n}from"./index-mOOtirD7.js";import{G as I}from"./GitHub-Dx9J4Up2.js";const B=u(r.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),C=u(r.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),V=u(r.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone"),O=u(r.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram"),A=u(r.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),K=u(r.jsx("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");class b{constructor(t=0,o="Network Error"){this.status=t,this.text=o}}const q=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:q()},k=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},D=(e,t="https://api.emailjs.com")=>{if(!e)return;const o=k(e);a.publicKey=o.publicKey,a.blockHeadless=o.blockHeadless,a.storageProvider=o.storageProvider,a.blockList=o.blockList,a.limitRate=o.limitRate,a.origin=o.origin||t},S=async(e,t,o={})=>{const i=await fetch(a.origin+e,{method:"POST",headers:o,body:t}),s=await i.text(),l=new b(i.status,s);if(i.ok)return l;throw l},$=(e,t,o)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},G=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},T=e=>e.webdriver||!e.languages||e.languages.length===0,L=()=>new b(451,"Unavailable For Headless Browser"),N=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},W=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Y=(e,t)=>e instanceof FormData?e.get(t):e[t],P=(e,t)=>{if(W(e))return!1;N(e.list,e.watchVariable);const o=Y(t,e.watchVariable);return typeof o!="string"?!1:e.list.includes(o)},M=()=>new b(403,"Forbidden"),U=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},J=async(e,t,o)=>{const i=Number(await o.get(e)||0);return t-Date.now()+i},H=async(e,t,o)=>{if(!t.throttle||!o)return!1;U(t.throttle,t.id);const i=t.id||e;return await J(i,t.throttle,o)>0?!0:(await o.set(i,Date.now().toString()),!1)},R=()=>new b(429,"Too Many Requests"),Q=async(e,t,o,i)=>{const s=k(i),l=s.publicKey||a.publicKey,m=s.blockHeadless||a.blockHeadless,d=s.storageProvider||a.storageProvider,p={...a.blockList,...s.blockList},f={...a.limitRate,...s.limitRate};return m&&T(navigator)?Promise.reject(L()):($(l,e,t),G(o),o&&P(p,o)?Promise.reject(M()):await H(location.pathname,f,d)?Promise.reject(R()):S("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"}))},X=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Z=e=>typeof e=="string"?document.querySelector(e):e,ee=async(e,t,o,i)=>{const s=k(i),l=s.publicKey||a.publicKey,m=s.blockHeadless||a.blockHeadless,d=a.storageProvider||s.storageProvider,p={...a.blockList,...s.blockList},f={...a.limitRate,...s.limitRate};if(m&&T(navigator))return Promise.reject(L());const g=Z(o);$(l,e,t),X(g);const c=new FormData(g);return P(p,c)?Promise.reject(M()):await H(location.pathname,f,d)?Promise.reject(R()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",l),S("/api/v1.0/email/send-form",c))},te={init:D,send:Q,sendForm:ee,EmailJSResponseStatus:b},re=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),z=h.gmail,oe="Opportunity for Chandraprakash",se="Hi Chandraprakash,",ae=`mailto:${z}`,ne=`https://mail.google.com/mail/?view=cm&fs=1&to=${z}&su=${encodeURIComponent(oe)}&body=${encodeURIComponent(se)}`,ie=n.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`,ce=n.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`,le=n.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin: 0 0 8px;
  text-align: center;
`,de=n.p`
  font-size: 16px;
  color: ${({theme:e})=>e.text_secondary};
  text-align: center;
  margin: 0 0 36px;
  max-width: 480px;
`,me=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
`,j=n.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 8px;
  color: ${({theme:e})=>e.text_secondary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({theme:e})=>e.accent}50;
    color: ${({theme:e})=>e.text_primary};
    transform: translateY(-2px);
  }
`,pe=n.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`,w=n.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  color: ${({theme:e})=>e.text_secondary};
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({theme:e})=>e.accent}50;
    color: ${({theme:e})=>e.accent};
  }
`,fe=n.div`
  width: 100%;
  height: 1px;
  background: ${({theme:e})=>e.cardBorder};
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: "or send a message";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({theme:e})=>e.bg};
    padding: 0 16px;
    font-size: 12px;
    color: ${({theme:e})=>e.text_secondary};
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`,he=n.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ue=n.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 0 0 4px;
  text-align: center;
`,ge=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,v=n.input`
  width: 100%;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({$hasError:e,theme:t})=>e?"#ff4444":t.cardBorder};
  color: ${({theme:e})=>e.text_primary};
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({theme:e})=>e.accent}60;
  }
`,xe=n.textarea`
  width: 100%;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({$hasError:e,theme:t})=>e?"#ff4444":t.cardBorder};
  color: ${({theme:e})=>e.text_primary};
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({theme:e})=>e.accent}60;
  }
`,be=n.button`
  width: 100%;
  padding: 13px;
  background: ${({theme:e})=>e.accent};
  color: #0a0a0a;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.65:1};
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    opacity: 0.88;
  }
`,ye=n.div`
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top-color: #0a0a0a;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,we=n.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({$type:e})=>e==="error"?"#ff6060":"#00ff88"};
  margin: 0;
`,_e=()=>{const e=x.useRef(),[t,o]=x.useState(!1),[i,s]=x.useState(""),[l,m]=x.useState(""),[d,p]=x.useState({from_email:!1,from_name:!1,message:!1}),f=c=>{d[c]&&p(y=>({...y,[c]:!1}))},g=async c=>{c.preventDefault(),s("");const{from_email:y,from_name:E,message:F}=e.current.elements,_={from_email:!y.value.trim()||!/\S+@\S+\.\S+/.test(y.value),from_name:!E.value.trim(),message:!F.value.trim()};if(p(_),Object.values(_).some(Boolean)){s("Please fill in all required fields correctly."),m("error");return}o(!0);try{if((await te.sendForm("service_j8n2w7r","template_k34okyh",e.current,"CPqsd_WoFyuxo09lw")).text==="OK")s("Message sent successfully!"),m("success"),e.current.reset(),p({from_email:!1,from_name:!1,message:!1}),setTimeout(()=>s(""),5e3);else throw new Error("Send failed")}catch{s("Failed to send. Please reach out via LinkedIn or email directly."),m("error")}finally{o(!1)}};return r.jsx(ie,{id:"Contact",children:r.jsxs(ce,{children:[r.jsx(le,{children:"Get In Touch"}),r.jsx(de,{children:"Open to SOC Analyst and security operations roles. Feel free to reach out."}),r.jsxs(me,{children:[r.jsxs(j,{href:re?ae:ne,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(B,{})," Email Me"]}),r.jsxs(j,{href:h.linkedin,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(C,{})," LinkedIn"]}),r.jsxs(j,{href:`tel:${h.phone}`,children:[r.jsx(V,{})," Call"]})]}),r.jsxs(pe,{children:[r.jsx(w,{href:h.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:r.jsx(I,{})}),r.jsx(w,{href:h.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:r.jsx(A,{})}),r.jsx(w,{href:h.telegram,target:"_blank",rel:"noopener noreferrer","aria-label":"Telegram",children:r.jsx(O,{})}),r.jsx(w,{href:h.whatsapp,target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",children:r.jsx(K,{})})]}),r.jsx(fe,{}),r.jsxs(he,{onSubmit:g,ref:e,children:[r.jsx(ue,{children:"Send a Message"}),i&&r.jsx(we,{$type:l,children:i}),r.jsxs(ge,{children:[r.jsx(v,{placeholder:"Your Name *",name:"from_name",$hasError:d.from_name,onChange:()=>f("from_name")}),r.jsx(v,{placeholder:"Your Email *",name:"from_email",type:"email",$hasError:d.from_email,onChange:()=>f("from_email")})]}),r.jsx(v,{placeholder:"Subject",name:"subject"}),r.jsx(xe,{placeholder:"Your message *",name:"message",rows:5,$hasError:d.message,onChange:()=>f("message")}),r.jsx(be,{type:"submit",disabled:t,children:t?r.jsx(ye,{}):"Send Message"})]})]})})};export{_e as default};
