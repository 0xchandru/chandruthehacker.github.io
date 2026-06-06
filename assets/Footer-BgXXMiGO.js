import{j as t,g as o}from"./index-BUojkeZd.js";const n=o.footer`
  border-top: 1px solid ${({theme:e})=>e.cardBorder};
  padding: 40px 24px;
  display: flex;
  justify-content: center;
`,a=o.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,i=o.span`
  font-weight: 700;
  font-size: 18px;
  color: ${({theme:e})=>e.accent};
  font-family: monospace;
  letter-spacing: 1px;
`,l=o.nav`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`,s=o.a`
  color: ${({theme:e})=>e.text_secondary};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.text_primary};
  }
`,c=o.p`
  font-size: 13px;
  color: ${({theme:e})=>e.text_secondary};
  text-align: center;
  opacity: 0.6;
  margin: 0;
`,d=e=>{var r;(r=document.getElementById(e))==null||r.scrollIntoView({behavior:"smooth"})},x=()=>t.jsx(n,{children:t.jsxs(a,{children:[t.jsx(i,{children:"> 0xchandru"}),t.jsx(l,{children:[{label:"About",id:"About"},{label:"Skills",id:"Skills"},{label:"Education",id:"Education"},{label:"Experience",id:"Exposure"},{label:"Projects",id:"Projects"},{label:"Certifications",id:"Certificates"},{label:"Contact",id:"Contact"}].map(e=>t.jsx(s,{href:`#${e.id}`,onClick:r=>{r.preventDefault(),d(e.id)},children:e.label},e.id))}),t.jsxs(c,{children:["© ",new Date().getFullYear()," Chandraprakash C. All rights reserved."]})]})});export{x as default};
