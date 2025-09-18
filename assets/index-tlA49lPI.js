import{s as t,C as c,b as s,c as m,B as p,I as d,j as e,f as u}from"./index-Cg_ys3uh.js";import{u as f,F as h,a as g}from"./useCarousel-BPeDs2RL.js";import{S as x}from"./index-BNuI7ypF.js";import{A as b}from"./data-CeuZ7XWA.js";const j="/aim-institute/assets/avatar-B2Zl90oW.webp",y=t(c)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,v=t.div`
  position: relative;

  ${s.desktop} {
    &:hover button {
      opacity: 1;
    }
  }
`,w=t.ul`
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

  grid-auto-columns: calc((100% - 5 * 1.5rem) / 6);

  ${s.tablet} {
    grid-auto-columns: calc((100% - 2 * 1rem) / 3);
    gap: 1rem;
  }

  ${s.mobile} {
    grid-auto-columns: calc((100% - 1 * 1rem) / 2);
    gap: 1rem;
  }
`,k=t.li`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;

  .name {
    font-size: 1.15rem;
    margin-top: 0.5rem;
  }

  .title {
    font-size: 0.8rem;
    line-height: 1.25rem;
  }
`,C=t(d)`
  border-radius: 0.75rem;
`,o=t(p)`
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 3rem !important;
  height: 3rem !important;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${m.white};
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
`,N=()=>{const{listRef:l,scrollLeft:i,scrollRight:n,scroll:a}=f();return e.jsxs(y,{children:[e.jsx(x,{title:"AIM Alumni",Icon:u}),e.jsxs(v,{children:[i&&e.jsx(o,{className:"left",shape:"circle",onClick:()=>a("left"),icon:e.jsx(h,{}),"aria-label":"Scroll left"}),n&&e.jsx(o,{className:"right",shape:"circle",onClick:()=>a("right"),icon:e.jsx(g,{}),"aria-label":"Scroll Right"}),e.jsx(w,{ref:l,children:b.map(r=>e.jsxs(k,{children:[e.jsx(C,{src:r.profile||j,alt:r.name}),e.jsx("h1",{className:"name",children:r.name}),e.jsx("p",{className:"title",children:r.title})]},r.id))})]})]})};export{N as default};
