import{r as l,M as L,j as t,u as M,P as O,c as T,d as G,L as V,g as a,h as P,s as D,m as w,f as E,i as H}from"./index-mOOtirD7.js";import{G as N}from"./GitHub-Dx9J4Up2.js";class U extends l.Component{getSnapshotBeforeUpdate(r){const n=this.props.childRef.current;if(n&&r.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function W({children:e,isPresent:r}){const n=l.useId(),s=l.useRef(null),u=l.useRef({width:0,height:0,top:0,left:0}),{nonce:x}=l.useContext(L);return l.useInsertionEffect(()=>{const{width:i,height:o,top:c,left:d}=u.current;if(r||!s.current||!i||!o)return;s.current.dataset.motionPopId=n;const f=document.createElement("style");return x&&(f.nonce=x),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${o}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[r]),t.jsx(U,{isPresent:r,childRef:s,sizeRef:u,children:l.cloneElement(e,{ref:s})})}const K=({children:e,initial:r,isPresent:n,onExitComplete:s,custom:u,presenceAffectsLayout:x,mode:i})=>{const o=M(Y),c=l.useId(),d=l.useCallback(g=>{o.set(g,!0);for(const y of o.values())if(!y)return;s&&s()},[o,s]),f=l.useMemo(()=>({id:c,initial:r,isPresent:n,custom:u,onExitComplete:d,register:g=>(o.set(g,!1),()=>o.delete(g))}),x?[Math.random(),d]:[n,d]);return l.useMemo(()=>{o.forEach((g,y)=>o.set(y,!1))},[n]),l.useEffect(()=>{!n&&!o.size&&s&&s()},[n]),i==="popLayout"&&(e=t.jsx(W,{isPresent:n,children:e})),t.jsx(O.Provider,{value:f,children:e})};function Y(){return new Map}const C=e=>e.key||"";function I(e){const r=[];return l.Children.forEach(e,n=>{l.isValidElement(n)&&r.push(n)}),r}const q=({children:e,custom:r,initial:n=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:x="sync",propagate:i=!1})=>{const[o,c]=T(i),d=l.useMemo(()=>I(e),[e]),f=i&&!o?[]:d.map(C),g=l.useRef(!0),y=l.useRef(d),v=M(()=>new Map),[A,B]=l.useState(d),[b,z]=l.useState(d);G(()=>{g.current=!1,y.current=d;for(let h=0;h<b.length;h++){const p=C(b[h]);f.includes(p)?v.delete(p):v.get(p)!==!0&&v.set(p,!1)}},[b,f.length,f.join("-")]);const j=[];if(d!==A){let h=[...d];for(let p=0;p<b.length;p++){const m=b[p],R=C(m);f.includes(R)||(h.splice(p,0,m),j.push(m))}x==="wait"&&j.length&&(h=j),z(I(h)),B(d);return}const{forceRender:k}=l.useContext(V);return t.jsx(t.Fragment,{children:b.map(h=>{const p=C(h),m=i&&!o?!1:d===b||f.includes(p),R=()=>{if(v.has(p))v.set(p,!0);else return;let S=!0;v.forEach(F=>{F||(S=!1)}),S&&(k==null||k(),z(y.current),i&&(c==null||c()),s&&s())};return t.jsx(K,{isPresent:m,initial:!g.current||n?void 0:!1,custom:m?void 0:r,presenceAffectsLayout:u,mode:x,onExitComplete:m?void 0:R,children:h},p)})})},$={defensive:{label:"DEFENSIVE",bg:"rgba(0,136,255,0.85)",text:"#fff",border:"#0088ff"},offensive:{label:"OFFENSIVE",bg:"rgba(255,68,68,0.85)",text:"#fff",border:"#ff4444"},forensics:{label:"FORENSICS",bg:"rgba(255,170,0,0.85)",text:"#1a1a1a",border:"#ffaa00"},tools:{label:"TOOLS",bg:"rgba(0,255,136,0.85)",text:"#062b18",border:"#00ff88"},labs:{label:"LABS",bg:"rgba(170,120,255,0.85)",text:"#fff",border:"#aa78ff"},ai:{label:"AI",bg:"rgba(255,82,154,0.85)",text:"#fff",border:"#ff529a"},other:{label:"OTHER",bg:"rgba(153,153,153,0.85)",text:"#fff",border:"#999999"}},J=a.div`
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 340px;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  border-left: 4px solid ${({$borderColor:e})=>e||"transparent"};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({$borderColor:e})=>e||"#00ff88"};
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`,Q=a.div`
  position: relative;
  overflow: hidden;
  height: 188px;

  &:hover img {
    transform: scale(1.05);
  }
`,X=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
`,Z=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  min-height: 24px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  background: ${({$bg:e})=>e};
  color: ${({$text:e})=>e};
`,ee=a.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`,te=a.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,re=a.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 0;
  line-height: 1.3;
`,ie=a.p`
  font-size: 13px;
  color: ${({theme:e})=>e.accent};
  font-weight: 600;
  margin: -4px 0 0;
`,ne=a.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({theme:e})=>e.text_secondary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,oe=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,se=a.span`
  padding: 3px 9px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.cardBorder};
  border-radius: 4px;
  font-size: 11px;
  color: ${({theme:e})=>e.text_secondary};
  font-weight: 500;
`,ae=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,le=a.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background: ${({theme:e})=>e.accent}0a;
  border: 1px solid ${({theme:e})=>e.accent}25;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${({theme:e})=>e.accent};
  font-family: monospace;
`,ce=a.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 4px;
`,_=a.button`
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  ${({$variant:e,theme:r})=>e==="primary"?`
      background: ${r.accent};
      color: #0a0a0a;
      &:hover { opacity: 0.85; }
    `:`
      background: ${r.card_light};
      color: ${r.text_secondary};
      border: 1px solid ${r.cardBorder};
      &:hover { border-color: ${r.accent}60; color: ${r.text_primary}; }
    `}
`,de=({project:e,setOpenModal:r})=>{var i;const n=Array.isArray(e.categories)&&e.categories.length>0?e.categories:e.category?[e.category]:["other"],s=n[0],u=$[s]||$.other,x=o=>{o.stopPropagation(),e.github&&window.open(e.github,"_blank","noopener noreferrer")};return t.jsxs(J,{$borderColor:u.border,onClick:()=>r({state:!0,project:e}),children:[t.jsxs(Q,{children:[t.jsx(X,{src:e.image,alt:e.title,loading:"lazy"}),t.jsx(ee,{children:n.map(o=>{const c=$[o]||$.other;return t.jsx(Z,{$bg:c.bg,$text:c.text,children:c.label},o)})})]}),t.jsxs(te,{children:[t.jsxs("div",{children:[t.jsx(re,{children:e.title}),e.subtitle&&t.jsx(ie,{children:e.subtitle})]}),t.jsx(ne,{children:e.summary}),t.jsx(oe,{children:(i=e.tags)==null?void 0:i.slice(0,5).map((o,c)=>t.jsx(se,{children:o},c))}),e.metrics&&e.metrics.length>0&&t.jsx(ae,{children:e.metrics.map((o,c)=>t.jsxs(le,{children:[o.value," ",t.jsx("span",{style:{fontWeight:400,opacity:.75},children:o.label})]},c))}),t.jsxs(ce,{children:[e.github&&t.jsxs(_,{$variant:"secondary",onClick:x,children:[t.jsx(N,{style:{fontSize:16}}),"GitHub"]}),t.jsx(_,{$variant:"primary",onClick:()=>r({state:!0,project:e}),children:"Details →"})]})]})]})},pe=a.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`,fe=a.div`
  width: 100%;
  max-width: 1100px;
`,xe=a(w.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({theme:e})=>e.text_primary};
  margin-bottom: 8px;
`,ue=a(w.p)`
  font-size: 16px;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 32px;
  max-width: 600px;
`,he=a(w.div)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`,ge=a.button`
  padding: 7px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid
    ${({$active:e,theme:r})=>e?r.accent:r.cardBorder};
  background: ${({$active:e,theme:r})=>e?`${r.accent}18`:"transparent"};
  color: ${({$active:e,theme:r})=>e?r.accent:r.text_secondary};

  &:hover {
    border-color: ${({theme:e})=>e.accent}80;
    color: ${({theme:e})=>e.text_primary};
  }
`,be=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,me=H.map(e=>({label:e,value:e.toLowerCase()})),ye={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2}}},Ce=({openModal:e,setOpenModal:r})=>{const[n,s]=l.useState("all"),u=i=>Array.isArray(i.categories)&&i.categories.length>0?i.categories:i.category?[i.category]:["other"],x=n==="all"?P:P.filter(i=>u(i).includes(n));return t.jsx(pe,{id:"Projects",children:t.jsxs(fe,{as:w.div,variants:D,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.05},children:[t.jsx(xe,{variants:E,children:"Projects"}),t.jsx(ue,{variants:E,children:"Real security tools built from scratch — detection systems, forensic analyzers, and automation scripts."}),t.jsx(he,{variants:E,children:me.map(i=>t.jsx(ge,{$active:n===i.value,onClick:()=>s(i.value),children:i.label},i.value))}),t.jsx(be,{children:t.jsx(q,{mode:"popLayout",children:x.map(i=>t.jsx(w.div,{variants:ye,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:t.jsx(de,{project:i,openModal:e,setOpenModal:r})},i.id))})})]})})};export{Ce as default};
