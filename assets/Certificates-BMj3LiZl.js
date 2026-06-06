import{k as l,j as t,g as i,s,m as r,f as n,l as p}from"./index-BI-JZHB4.js";const x=l(t.jsx("path",{d:"m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"}),"Verified"),o=i.div`
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({theme:e})=>e.accent}30;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`,c=i.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({theme:e})=>e.card_light};
  border-bottom: 1px solid ${({theme:e})=>e.cardBorder};
`,g=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${o}:hover & {
    transform: scale(1.04);
  }
`,h=i.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,f=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,m=i.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:e})=>e.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`,u=i.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;

  ${({$status:e})=>e==="VERIFIED"?`
      background: rgba(0, 255, 136, 0.1);
      color: #00ff88;
      border: 1px solid rgba(0, 255, 136, 0.25);
    `:`
      background: rgba(255, 170, 0, 0.1);
      color: #ffaa00;
      border: 1px solid rgba(255, 170, 0, 0.25);
    `}
`,b=i.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 0;
  line-height: 1.35;
`,w=i.p`
  font-size: 12px;
  color: ${({theme:e})=>e.text_secondary};
  font-family: monospace;
  margin: 0;
`,j=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
`,y=i.span`
  padding: 3px 8px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 4px;
  font-size: 11px;
  color: ${({theme:e})=>e.text_secondary};
  font-weight: 500;
`,v=i.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: ${({theme:e})=>e.accent};
  text-decoration: none;
  transition: opacity 0.2s ease;
  margin-top: 4px;

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
`,k=({certificate:e})=>t.jsxs(o,{children:[t.jsx(c,{children:t.jsx(g,{src:e.image,alt:e.title,loading:"lazy"})}),t.jsxs(h,{children:[t.jsxs(f,{children:[t.jsx(m,{children:e.issuer}),t.jsxs(u,{$status:e.status,children:[e.status==="VERIFIED"&&t.jsx(x,{style:{fontSize:10}}),e.status]})]}),t.jsx(b,{children:e.title}),t.jsxs(w,{children:["Issued ",e.date]}),e.skills&&e.skills.length>0&&t.jsx(j,{children:e.skills.slice(0,4).map((a,d)=>t.jsx(y,{children:a},d))}),e.link&&t.jsx(v,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Verify Credential ↗"})]})]}),$=i.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background: ${({theme:e})=>e.bgLight}10;
`,z=i.div`
  width: 100%;
  max-width: 1100px;
`,I=i(r.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin-bottom: 8px;
`,C=i(r.p)`
  font-size: 16px;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 40px;
  max-width: 600px;
`,S=i(r.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,V=()=>t.jsx($,{id:"Certificates",children:t.jsxs(z,{as:r.div,variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.05},children:[t.jsx(I,{variants:n,children:"Certifications"}),t.jsx(C,{variants:n,children:"Industry-recognized credentials in threat detection, log analysis, and SOC operations."}),t.jsx(S,{variants:s,children:p.map(e=>t.jsx(r.div,{variants:n,children:t.jsx(k,{certificate:e})},e.id))})]})});export{V as default};
