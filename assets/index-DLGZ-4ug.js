import{c as a,s as r,b as s,C as o,j as e,a as d,I as c}from"./index-Cg_ys3uh.js";import{T as m}from"./index-B2XqUDwD.js";import{N as n}from"./data-CeuZ7XWA.js";const h=r.div`
  color: ${a.white};
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${t=>t.$bg}) center / cover no-repeat;
`,p=r(o)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 2rem;
  min-height: 60vh;
  padding-bottom: 2rem;
  width: 100%;

  & > * {
    min-width: 0;
  }

  ${s.tablet} {
    min-height: 50vh;
  }

  ${s.desktop} {
    grid-template-columns: 2fr 1fr;
    min-height: 100vh;
    align-items: center;
  }
`,g=r.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  .title {
    font-size: 2rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .sub-title {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ${s.desktop} {
    .title {
      font-size: 3rem;
    }
  }
`,x=r.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  ${s.desktop} {
    display: flex;
  }
`,f=r.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 50%;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
    min-width: 0;

    h1,
    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .details h1 {
    font-size: 1.35rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .details p {
    font-size: 0.9rem;
  }
`,y=()=>{const t=n[Math.floor(Math.random()*n.length)],l=[...n].sort(()=>Math.random()-.5).slice(0,3);return e.jsx(h,{$bg:t.thumbnail,children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(m,{text:t.category,color:d[t.category]}),e.jsx("h1",{className:"title",children:t.title}),e.jsx("p",{className:"sub-title",children:t.desc})]}),e.jsx(x,{children:l.map(i=>e.jsxs(f,{children:[e.jsx(c,{src:i.thumbnail,width:"4rem",alt:i.title}),e.jsxs("div",{className:"details",children:[e.jsx("h1",{children:i.title}),e.jsx("p",{children:i.desc})]})]},i.id))})]})})};export{y as default};
