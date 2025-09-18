import{s,C as o,j as e,e as t,d as a,I as n}from"./index-Cg_ys3uh.js";import{P as l}from"./data-CeuZ7XWA.js";import{S as c}from"./index-BNuI7ypF.js";import{G as d}from"./index-CD3FWtfj.js";const m="/aim-institute/assets/campus-Da5EBOon.webp",p=s.div`
  position: relative;
  background: url(${m}) center / cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`,u=s(o)`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .image {
    overflow: hidden;
    border-radius: 1rem;
    cursor: pointer;

    img {
      transition: all 0.4s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`,b=()=>e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(c,{Icon:t,title:"AIM Programs",color:"yellow"}),e.jsx(d,{gap:"2rem",children:l.map((r,i)=>e.jsx(a,{direction:"left",delay:i*200,children:e.jsx("figure",{className:"image",children:e.jsx(n,{src:r.src,alt:r.alt})},r.id)},r.id))})]})});export{b as default};
