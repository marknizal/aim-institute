import{c as r,s as o,j as e}from"./index-Cg_ys3uh.js";const c=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${s=>s.color||r.black};

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .title svg,
  .title h1 {
    font-size: 2rem;
  }

  .sub-title {
    font-size: 0.9rem;
    color: #555;
  }
`,n=({title:s,subtitle:l,Icon:t,color:i})=>e.jsxs(c,{color:i,children:[s&&e.jsxs("div",{className:"title",children:[t&&e.jsx(t,{})," ",e.jsx("h1",{children:s})]}),l&&e.jsx("p",{className:"sub-title",children:l})]});export{n as S};
