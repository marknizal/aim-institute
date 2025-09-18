import{s as r,C as h,b as m,c as p,B as f,I as g,j as t,i as x,k as y}from"./index-Cg_ys3uh.js";import{u as j,F as b,a as $}from"./useCarousel-BPeDs2RL.js";import{S as L}from"./index-BNuI7ypF.js";import{B as k}from"./data-CeuZ7XWA.js";const w=(n,s="short")=>{if(!n)return"";const e=new Date(n);if(s==="full"){const a=e.getDate(),l=e.toLocaleString("default",{month:"short"}),c=e.getFullYear(),u=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});return`${a} ${l} ${c}, ${u}`}if(s==="long"){const a=e.getDate(),l=e.toLocaleString("default",{month:"long"}),c=e.getFullYear();return`${l} ${a}, ${c}`}if(s==="weekday")return e.toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"long",year:"numeric"});const i=e.toLocaleString("default",{month:"short"}),o=e.getFullYear();return`${i} ${o}`},S=r(h)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,v=r.div`
  position: relative;

  ${m.desktop} {
    &:hover button {
      opacity: 1;
    }
  }
`,B=r.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  scroll-snap-type: x mandatory;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  grid-auto-columns: calc((100% - 2 * 1.5rem) / 3);

  ${m.tablet} {
    grid-auto-columns: calc((100% - 1 * 1rem) / 2);
    gap: 1rem;
  }

  ${m.mobile} {
    grid-auto-columns: 100%;
  }
`,C=r.li`
  scroll-snap-align: start;
  height: fit-content;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: #f7f8f9;
    padding: 1.5rem;
  }

  .details h1 {
    font-size: 1.35rem;
    margin-top: 0.5rem;
  }

  .details span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: #888;
  }

  .details p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
`,I=r(g)`
  aspect-ratio: 16 / 9;
`,d=r(f)`
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 3rem !important;
  height: 3rem !important;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${p.white};
  opacity: 0;
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    font-size: 1.25rem;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`,A=()=>{const{listRef:n,scrollLeft:s,scrollRight:e,scroll:i}=j();return t.jsxs(S,{children:[t.jsx(L,{title:"Latest AIM Blog",subtitle:"Get information, inspiration, and insights on AIM by AIMers",Icon:x}),t.jsxs(v,{children:[s&&t.jsx(d,{className:"left",shape:"circle",onClick:()=>i("left"),icon:t.jsx(b,{}),"aria-label":"Scroll left"}),e&&t.jsx(d,{className:"right",shape:"circle",onClick:()=>i("right"),icon:t.jsx($,{}),"aria-label":"Scroll Right"}),t.jsx(B,{ref:n,children:k.map(o=>t.jsxs(C,{children:[t.jsxs("div",{className:"details",children:[t.jsx("h1",{children:o.title}),t.jsxs("span",{children:[t.jsx(y,{})," ",w(o.date,"long")]}),t.jsx("p",{children:o.description})]}),t.jsx(I,{src:o.thumbnail,alt:o.title})]},o.id))})]})]})};export{A as default};
