import{j as t,s as a,m as e,f as o,a as l,g as i}from"./index-Ye7iTiMt.js";const c=i.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background: ${({theme:r})=>r.bgLight}10;
`,p=i.div`
  width: 100%;
  max-width: 1100px;
`,x=i(e.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:r})=>r.text_primary};
  margin-bottom: 8px;
`,m=i(e.p)`
  font-size: 16px;
  color: ${({theme:r})=>r.text_secondary};
  margin-bottom: 40px;
`,g=i(e.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,h=i(e.div)`
  background: ${({theme:r})=>r.card};
  border: 1px solid ${({theme:r})=>r.cardBorder};
  border-radius: 12px;
  padding: 22px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({theme:r})=>r.accent}30;
    transform: translateY(-3px);
  }
`,f=i.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({theme:r})=>r.accent};
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({theme:r})=>r.cardBorder};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`,b=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`,v=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  background: ${({theme:r})=>r.card_light};
  border: 1px solid ${({theme:r})=>r.cardBorder};
  border-radius: 6px;
  font-size: 12px;
  color: ${({theme:r})=>r.text_secondary};
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({theme:r})=>r.accent}40;
    color: ${({theme:r})=>r.text_primary};
  }

  svg {
    flex-shrink: 0;
    width: 15px;
    height: 15px;
  }
`,j=()=>t.jsx(c,{id:"Skills",children:t.jsxs(p,{as:e.div,variants:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.05},children:[t.jsx(x,{variants:o,children:"Skills"}),t.jsx(m,{variants:o,children:"Hands-on tools and techniques from lab work, projects, and certifications."}),t.jsx(g,{variants:a,children:l.map((r,n)=>t.jsxs(h,{variants:o,children:[t.jsx(f,{children:r.title}),t.jsx(b,{children:r.skills.map((s,d)=>t.jsxs(v,{children:[s.icon,t.jsx("span",{children:s.name})]},d))})]},n))})]})});export{j as default};
