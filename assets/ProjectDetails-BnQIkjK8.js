import{r as f,j as r,C as b,g as t}from"./index-BI-JZHB4.js";import{G as u}from"./GitHub-CeAuLHsN.js";const m=t.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 16px 60px;
  backdrop-filter: blur(4px);
`,j=t.div`
  width: 100%;
  max-width: 760px;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  margin: auto;
`,w=t.div`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, ${({theme:e})=>e.card}, transparent);
  }

  @media (max-width: 600px) {
    height: 180px;
  }
`,y=t.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,v=t.div`
  padding: 28px 32px 32px;

  @media (max-width: 600px) {
    padding: 20px 20px 28px;
  }
`,$=t.div`
  margin-bottom: 16px;
`,k=t.h2`
  font-size: 26px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin: 0 0 6px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`,z=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,B=t.span`
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${({$bg:e})=>e};
  color: ${({$text:e})=>e};
`,T=t.span`
  padding: 4px 10px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 6px;
  font-size: 12px;
  color: ${({theme:e})=>e.text_secondary};
  font-weight: 500;
`,C=t.div`
  background: ${({theme:e})=>e.accent}08;
  border: 1px solid ${({theme:e})=>e.accent}20;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 20px 0;
`,_=t.div`
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:e})=>e.accent};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
`,E=t.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  margin: 0;
`,l=t.div`
  margin-bottom: 24px;
`,c=t.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`,L=t.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  margin: 0;
`,R=t.ol`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,A=t.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${({theme:e})=>e.text_secondary};
`,S=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,D=t.div`
  padding: 6px 14px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.text_secondary};
  font-weight: 600;
`,I=t.pre`
  background: #0d0d0d;
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: 8px;
  padding: 16px;
  font-size: 12px;
  line-height: 1.6;
  color: #00ff88;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,F=t.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,O=t.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${({theme:e})=>e.text_secondary};
`,P=t.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.cardBorder};
  margin: 20px 0;
`,N=t.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
`,x=t.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({$variant:e,theme:s})=>e==="primary"?`
      background: ${s.accent};
      color: #0a0a0a;
      &:hover { opacity: 0.85; }
    `:`
      background: transparent;
      border: 1.5px solid ${s.cardBorder};
      color: ${s.text_secondary};
      &:hover { border-color: ${s.accent}60; color: ${s.text_primary}; }
    `}
`,g={defensive:{label:"DEFENSIVE",bg:"rgba(0,136,255,0.85)",text:"#fff"},offensive:{label:"OFFENSIVE",bg:"rgba(255,68,68,0.85)",text:"#fff"},forensics:{label:"FORENSICS",bg:"rgba(255,170,0,0.85)",text:"#1a1a1a"},tools:{label:"TOOLS",bg:"rgba(0,255,136,0.85)",text:"#062b18"},labs:{label:"LABS",bg:"rgba(170,120,255,0.85)",text:"#fff"},ai:{label:"AI",bg:"rgba(255,82,154,0.85)",text:"#fff"},other:{label:"OTHER",bg:"rgba(153,153,153,0.85)",text:"#fff"}},H=({openModal:e,setOpenModal:s})=>{var p;const o=e==null?void 0:e.project,d=()=>s({state:!1,project:null});if(f.useEffect(()=>{const i=n=>{n.key==="Escape"&&s({state:!1,project:null})};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s]),!o)return null;const h=Array.isArray(o.categories)&&o.categories.length>0?o.categories:o.category?[o.category]:["other"],a=o.detail||{};return r.jsx(m,{onClick:d,children:r.jsxs(j,{onClick:i=>i.stopPropagation(),children:[r.jsxs(w,{children:[r.jsx("img",{src:o.image,alt:o.title}),r.jsx(y,{onClick:d,"aria-label":"Close",children:r.jsx(b,{style:{fontSize:20}})})]}),r.jsxs(v,{children:[r.jsxs($,{children:[r.jsx(k,{children:o.title}),r.jsxs(z,{children:[h.map(i=>{const n=g[i]||g.other;return r.jsx(B,{$bg:n.bg,$text:n.text,children:n.label},i)}),(p=o.tags)==null?void 0:p.map((i,n)=>r.jsx(T,{children:i},n))]})]}),a.tldr&&r.jsxs(C,{children:[r.jsx(_,{children:"TL;DR"}),r.jsx(E,{children:a.tldr})]}),r.jsx(P,{}),a.problem&&r.jsxs(l,{children:[r.jsx(c,{children:"🎯 Problem"}),r.jsx(L,{children:a.problem})]}),a.approach&&a.approach.length>0&&r.jsxs(l,{children:[r.jsx(c,{children:"🔧 Approach"}),r.jsx(R,{children:a.approach.map((i,n)=>r.jsx(A,{children:i},n))})]}),o.tags&&o.tags.length>0&&r.jsxs(l,{children:[r.jsx(c,{children:"🛠️ Tools & Tech"}),r.jsx(S,{children:o.tags.map((i,n)=>r.jsx(D,{children:i},n))})]}),a.logs&&r.jsxs(l,{children:[r.jsx(c,{children:"📋 Log Output"}),r.jsx(I,{children:a.logs})]}),a.results&&a.results.length>0&&r.jsxs(l,{children:[r.jsx(c,{children:"✅ Results"}),r.jsx(F,{children:a.results.map((i,n)=>r.jsx(O,{children:i},n))})]}),r.jsxs(N,{children:[o.github&&r.jsxs(x,{href:o.github,target:"_blank",rel:"noopener noreferrer",$variant:"primary",children:[r.jsx(u,{style:{fontSize:18}}),"View Code"]}),o.blog&&r.jsx(x,{href:o.blog,target:"_blank",rel:"noopener noreferrer",$variant:"secondary",children:"View Write-up ↗"})]})]})]})})};export{H as default};
