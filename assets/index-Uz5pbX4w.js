import{b as t,s as i,C as l,c as r,j as e,d,I as n}from"./index-Cg_ys3uh.js";import{S as a}from"./index-BNuI7ypF.js";import{G as c}from"./index-CD3FWtfj.js";import{F as m}from"./data-CeuZ7XWA.js";const p="/aim-institute/assets/student-CxndEdQN.webp",x=i(l)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .grid {
    align-items: center;
    gap: 3rem;
  }

  .model {
    border-radius: 1rem;
    aspect-ratio: 16 / 9;

    ${t.desktop} {
      aspect-ratio: 3 / 4;
    }
  }

  ${t.desktop} {
    gap: 0;
  }
`,g=i.section`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,f=i.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  .block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${r.white};
  }

  .title {
    font-size: 1.5rem;
  }

  .desc {
    font-size: 0.8rem;
    line-height: 1.15rem;
    color: #ddd;
  }

  ${t.mobile} {
    gap: 1rem;

    .title {
      font-size: 1.15rem;
    }

    .desc {
      font-size: 0.7rem;
    }
  }
`,h=i.figure`
  padding: 1rem;
  border-radius: 0.75rem;
  flex-shrink: 0;
  background-color: ${s=>s.$bg||"green"};
  color: ${r.white};

  svg {
    font-size: 2.5rem;
  }
`,$=()=>e.jsxs(x,{children:[e.jsx(a,{title:"Be future-ready. Be AIM.",color:"yellow"}),e.jsxs(c,{columns:{default:2,tablet:1},className:"grid",children:[e.jsx(g,{children:m.map((s,o)=>e.jsx(d,{direction:"up",delay:o*200,children:e.jsxs(f,{children:[e.jsx(h,{$bg:s.bg,children:e.jsx(s.icon,{})}),e.jsxs("div",{className:"block",children:[e.jsx("h1",{className:"title",children:s.title}),e.jsx("p",{className:"desc",children:s.desc})]})]},s.id)},s.id))}),e.jsx(n,{src:p,alt:"Student",className:"model"})]})]});export{$ as default};
