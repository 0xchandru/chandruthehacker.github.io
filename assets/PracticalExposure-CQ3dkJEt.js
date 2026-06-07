import{r as j,j as t,s as k,m as p,p as n,f as d,b as E,T as c,g as o}from"./index-mOOtirD7.js";const L=o.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`,T=o.div`
  width: 100%;
  max-width: 1100px;
`,_=o(p.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin-bottom: 8px;
`,C=o(p.p)`
  font-size: 16px;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 48px;
`,z=o.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({theme:e})=>e.accent}50,
      ${({theme:e})=>e.primary}20
    );
    border-radius: 2px;
  }
`,S=o(p.div)`
  position: relative;
  padding: 0 0 44px 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({$color:e})=>e};
    border: 2px solid ${({theme:e})=>e.bg};
    box-shadow: 0 0 0 2px ${({$color:e})=>e}50;
  }
`,I=o.div`
  position: relative;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.card},
    ${({theme:e})=>e.card_light}
  );
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 22px;
  padding: 30px;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 4px;
    background: linear-gradient(90deg, ${({theme:e})=>e.accent}, #00aaff, #00ff88);
  }

  &:hover {
    border-color: ${({theme:e})=>e.accent}40;
    transform: translateY(-4px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
  }
`,A=o.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 4px;
`,B=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,M=o.span`
  padding: 4px 11px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${({$type:e})=>{switch(e){case"LAB":return`
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.25);
        `;case"SIMULATION":return`
          background: rgba(0, 170, 255, 0.1);
          color: #00aaff;
          border: 1px solid rgba(0, 170, 255, 0.25);
        `;case"COMPETITION":return`
          background: rgba(255, 68, 68, 0.1);
          color: #ff6060;
          border: 1px solid rgba(255, 68, 68, 0.25);
        `;default:return`
          background: rgba(255, 170, 0, 0.1);
          color: #ffaa00;
          border: 1px solid rgba(255, 170, 0, 0.25);
        `}}}
`,U=o.h3`
  font-size: 23px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin: 0;
`,D=o.span`
  font-size: 14px;
  color: ${({theme:e})=>e.accent};
  font-weight: 600;
`,F=o.div`
  font-size: 12px;
  color: ${({theme:e})=>e.text_secondary};
  font-family: monospace;
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
`,H=o.p`
  font-size: 15px;
  line-height: 1.78;
  color: ${({theme:e})=>e.text_primary};
  opacity: 0.9;
  margin: 14px 0 20px;
`,P=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
`,R=o.div`
  min-width: 0;
  padding: 18px 18px 17px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.card_light},
    ${({theme:e})=>e.card}
  );
  border: 1px solid ${({theme:e})=>e.cardBorder};
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.accent}14, 0 10px 20px rgba(0, 0, 0, 0.12);
`,N=o.p`
  margin: 0 0 6px;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({theme:e})=>e.accent};
  font-weight: 800;
`,O=o.p`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  line-height: 1.2;
`,V=o.div`
  margin-top: 14px;
  padding: 16px 16px 14px;
  border-radius: 18px;
  background: linear-gradient(180deg, ${({theme:e})=>e.card_light}, ${({theme:e})=>e.card});
  border: 1px solid ${({theme:e})=>e.cardBorder};
`,Y=o.p`
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${({theme:e})=>e.text_primary};
`,K=o.p`
  margin: 0 0 12px;
  font-size: 12px;
  color: ${({theme:e})=>e.text_secondary};
  line-height: 1.5;
`,q=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,f=o.span`
  padding: 8px 12px;
  background: rgba(0, 255, 136, 0.08);
  border: 1px solid ${({theme:e})=>e.accent}2f;
  border-radius: 999px;
  font-size: 12px;
  color: ${({theme:e})=>e.text_primary};
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
`,G=o(f)`
  background: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_secondary};
  border-style: dashed;
  cursor: pointer;
  appearance: none;
  border-radius: 999px;
`,J=o(G)`
  background: ${({theme:e})=>e.accent};
  color: #0a0a0a;
  border-style: solid;
`,Q=o.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 15px;
  border-radius: 999px;
  background: ${({theme:e})=>e.accent};
  color: #0a0a0a;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
  margin-left: 4px;
  box-shadow: 0 12px 24px ${({theme:e})=>e.accent}44;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`,X=()=>{const[e,b]=j.useState({}),h=new Intl.NumberFormat,u=r=>{const a=c[r];return a==null||a===""?"Unavailable":typeof a=="number"?h.format(a):String(a)},m=r=>{b(a=>({...a,[r]:!a[r]}))},y=r=>u(r.key);return t.jsx(L,{id:"Exposure",children:t.jsxs(T,{as:p.div,variants:k,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.05},children:[t.jsx(_,{variants:d,children:n.title}),t.jsx(C,{variants:d,children:n.subtitle}),t.jsx(z,{children:E.map((r,a)=>t.jsx(S,{variants:d,$color:"#00ff88",children:(()=>{const l=!!e[r.id||a],s=r.focusAreas||r.tools||[],x=n.focus.visibleCount,g=l?s:s.slice(0,x),w=Math.max(s.length-g.length,0),$=l?n.focus.collapseLabel:n.focus.expandLabel.replace("{count}",w);return t.jsxs(I,{children:[t.jsxs(A,{children:[t.jsxs(B,{children:[t.jsx(M,{$type:r.category,children:r.category}),t.jsxs(U,{children:[r.title,r.platform&&t.jsxs(t.Fragment,{children:[" — ",t.jsx(D,{children:r.platform})]})]})]}),t.jsx(F,{children:r.date})]}),t.jsx(H,{children:r.description}),t.jsx(P,{children:n.metrics.map(i=>t.jsxs(R,{children:[t.jsx(N,{children:i.label}),t.jsx(O,{children:i.key==="lastUpdated"&&c.lastUpdated?new Date(c.lastUpdated).toLocaleString([],{dateStyle:"medium",timeStyle:"short"}):y(i)})]},i.key))}),t.jsxs(V,{children:[t.jsx(Y,{children:n.focus.title}),t.jsx(K,{children:n.focus.caption}),t.jsxs(q,{children:[g.map((i,v)=>t.jsx(f,{children:i},v)),s.length>x&&t.jsx(J,{type:"button",onClick:()=>m(r.id||a),children:$}),r.proof&&t.jsx(Q,{href:r.proof,target:"_blank",rel:"noopener noreferrer","aria-label":n.proofAriaLabel,children:n.proofLabel})]})]})]})})()},r.id||a))})]})})};export{X as default};
