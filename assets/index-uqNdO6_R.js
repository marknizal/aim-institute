import{s as r,C as s,b as a,j as e,g as l,B as c,h as d,d as o}from"./index-Cg_ys3uh.js";import{S as m}from"./index-BNuI7ypF.js";import{G as p}from"./index-CD3FWtfj.js";import{V as n}from"./data-CeuZ7XWA.js";const u="/aim-institute/assets/aim-in-motion-h87xpiAR.webp",f=r.div`
  background: url(${u}) center / cover no-repeat;
`,x=r(s)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;
`,h=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${a.mobile} {
    flex-direction: column;
    align-items: start;
  }
`,b=r.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    pointer-events: none;
    z-index: 1;
  }

  iframe {
    border: none;
    aspect-ratio: 2.35 / 1;
    z-index: 2;
  }

  h2 {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    z-index: 2;
    white-space: nowrap;
  }

  ${a.mobile} {
    iframe {
      aspect-ratio: 1 / 1;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`,j=r.div`
  display: block;

  iframe {
    border: none;
    border-radius: 0.5rem;
    aspect-ratio: 16 / 10;
  }

  h3 {
    font-size: 1.15rem;
    margin-top: 1rem;
  }
`,F=()=>e.jsx(f,{children:e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(m,{Icon:l,title:"AIM In Motion",color:"white"}),e.jsx(c,{color:"red",variant:"solid",icon:e.jsx(d,{}),children:"Follow us on YouTube"})]}),n.filter(t=>t.featured).map((t,i)=>e.jsx(o,{direction:"up",children:e.jsxs(b,{children:[e.jsx("iframe",{src:t.src,title:t.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("h2",{children:t.title})]})},i)),e.jsx(p,{columns:{default:4},gap:"1.5rem",children:n.filter(t=>!t.featured).map((t,i)=>e.jsx(o,{direction:"up",delay:i*100,children:e.jsxs(j,{children:[e.jsx("iframe",{src:t.src,title:t.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("h3",{children:t.title})]})},i))})]})});export{F as default};
