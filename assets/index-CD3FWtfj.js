import{b as l,s as r,j as i}from"./index-Cg_ys3uh.js";const n=r.div`
  width: 100%;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(${t=>t.$columns}, 1fr);
  gap: ${t=>t.$gap||"0.8rem"};

  ${l.tablet} {
    grid-template-columns: repeat(var(--columns-tablet, 2), 1fr);
  }

  ${l.mobile} {
    grid-template-columns: repeat(var(--columns-mobile, 1), 1fr);
  }
`,u=({children:t,columns:a={},gap:s,className:m,style:o})=>{const e={mobile:1,tablet:2,default:2,...a};return i.jsx(n,{$columns:e.default,$gap:s,style:{"--columns-mobile":e.mobile,"--columns-tablet":e.tablet,...o},className:m,children:t})};export{u as G};
