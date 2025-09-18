import{s as o,C as c,b as r,c as m,B as p,I as d,j as t,L as f,a as h}from"./index-Cg_ys3uh.js";import{u as g,F as u,a as x}from"./useCarousel-BPeDs2RL.js";import{T as b}from"./index-B2XqUDwD.js";import{S as j}from"./index-BNuI7ypF.js";import{N as y}from"./data-CeuZ7XWA.js";const v=o(c)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,L=o.div`
  position: relative;

  ${r.desktop} {
    &:hover button {
      opacity: 1;
    }
  }
`,k=o.ul`
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

  grid-auto-columns: calc((100% - 3 * 1.5rem) / 4);

  ${r.tablet} {
    grid-auto-columns: calc((100% - 2 * 1rem) / 3);
    gap: 1rem;
  }

  ${r.mobile} {
    grid-auto-columns: 100%;
  }
`,C=o.li`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  .title {
    font-size: 1.15rem;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,I=o.div`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;

  .float {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
`,N=o(d)`
  transition: all 0.3s ease;
`,s=o(p)`
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
`,w=()=>{const{listRef:l,scrollLeft:i,scrollRight:n,scroll:a}=g();return t.jsxs(v,{children:[t.jsx(j,{title:"Life At AIM",Icon:f}),t.jsxs(L,{children:[i&&t.jsx(s,{className:"left",shape:"circle",onClick:()=>a("left"),icon:t.jsx(u,{}),"aria-label":"Scroll Left"}),n&&t.jsx(s,{className:"right",shape:"circle",onClick:()=>a("right"),icon:t.jsx(x,{}),"aria-label":"Scroll Right"}),t.jsx(k,{ref:l,children:y.map(e=>t.jsxs(C,{children:[t.jsxs(I,{children:[t.jsx(N,{src:e.thumbnail,alt:e.title}),t.jsx(b,{text:e.category,color:h[e.category],className:"float"})]}),t.jsx("h1",{className:"title",children:e.title})]},e.id))})]})]})};export{w as default};
