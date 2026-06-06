import{j as e,s as d,m as o,f as a,e as n,g as i}from"./index-BI-JZHB4.js";const c=i.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`,p=i.div`
  width: 100%;
  max-width: 1100px;
`,x=i(o.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:t})=>t.text_primary};
  margin-bottom: 8px;
`,l=i(o.p)`
  font-size: 16px;
  color: ${({theme:t})=>t.text_secondary};
  margin-bottom: 40px;
  max-width: 640px;
`,g=i(o.div)`
  position: relative;
  background: ${({theme:t})=>t.card};
  border: 1px solid ${({theme:t})=>t.cardBorder};
  border-radius: 18px;
  padding: 30px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  max-width: 760px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:t})=>t.accent},
      ${({theme:t})=>t.primary},
      ${({theme:t})=>t.accent}
    );
  }

  &:hover {
    border-color: ${({theme:t})=>t.accent}30;
    transform: translateY(-4px);
    box-shadow: 0 22px 44px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 24px;
  }
`,h=i.div`
  flex-shrink: 0;
  width: 84px;
  height: 84px;
  border-radius: 14px;
  background: ${({theme:t})=>t.card_light};
  border: 1px solid ${({theme:t})=>t.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${({theme:t})=>t.accent}20;
`,f=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`,m=i.div`
  flex: 1;
  min-width: 0;
`,u=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`,s=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid ${({theme:t})=>t.cardBorder};
  background: ${({$accent:t,theme:r})=>t?`${r.accent}18`:r.card_light};
  color: ${({$accent:t,theme:r})=>t?r.accent:r.text_secondary};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`,b=i.h3`
  font-size: 24px;
  font-weight: 800;
  color: ${({theme:t})=>t.text_primary};
  margin: 0 0 8px;

  @media (max-width: 560px) {
    font-size: 21px;
  }
`,w=i.p`
  font-size: 16px;
  color: ${({theme:t})=>t.accent};
  font-weight: 700;
  margin: 0 0 8px;
`,y=i.p`
  font-size: 12px;
  color: ${({theme:t})=>t.text_secondary};
  font-family: monospace;
  margin: 0 0 18px;
  letter-spacing: 0.4px;
`,j=i.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({theme:t})=>t.text_primary};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0 0 12px;
`,$=i.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 560px) {
    gap: 7px;
  }
`,v=i.span`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({theme:t})=>t.cardBorder};
  background: ${({theme:t})=>t.card_light};
  color: ${({theme:t})=>t.text_secondary};
`,z=()=>e.jsx(c,{id:"Education",children:e.jsxs(p,{as:o.div,variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:[e.jsx(x,{variants:a,children:"Education"}),e.jsx(l,{variants:a,children:"Academic foundation in computer science with cybersecurity focus and completed graduation."}),e.jsxs(g,{variants:a,children:[e.jsx(h,{children:e.jsx(f,{src:n.img,alt:n.institution})}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(s,{$accent:!0,children:"Cybersecurity Focus"}),e.jsx(s,{children:n.status})]}),e.jsx(b,{children:n.degree}),e.jsxs(w,{children:[n.institution," • CGPA ",n.cgpa]}),e.jsx(y,{children:n.period}),e.jsx(j,{children:"Key Areas"}),e.jsx($,{children:(n.relevantCoursework||[]).map((t,r)=>e.jsx(v,{children:t},r))})]})]})]})});export{z as default};
