"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{913:(e,t,a)=>{a.d(t,{Hg:()=>i,M1:()=>u,TP:()=>l,tx:()=>m,z1:()=>o});var s=a(294);const c="ab290b9ac3d51cd9ec545a0b6eb96b92",n=s.Z.create({baseURL:"https://api.themoviedb.org/3"}),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjI5MGI5YWMzZDUxY2Q5ZWM1NDVhMGI2ZWI5NmI5MiIsInN1YiI6IjY1YzI0YTAxYTMzNjEyMDBlNjUzYTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPtrdl2CeCwFN8Vh-UEzJf-KQ5SS8ZaqztMaE2eqoSY"}},i=()=>n.get("/trending/movie/day?language=en-US&api_key=".concat(c),r),o=e=>n.get("/search/movie?language=en-US&api_key=".concat(c),{...r,params:{query:e}}),l=e=>n.get("/movie/".concat(e,"?language=en-US&api_key=").concat(c),r),u=e=>n.get("/movie/".concat(e,"/credits?language=en-US&api_key=").concat(c),r),m=e=>n.get("/movie/".concat(e,"/reviews?language=en-US&api_key=").concat(c),r)},192:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(689),c=a(87);const n="movie-list_item__he69l",r="movie-list_title__Jqb4-";var i=a(184);const o=e=>{let{id:t,title:a}=e;const o=(0,s.TH)();return(0,i.jsx)("li",{className:n,children:(0,i.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:o},children:(0,i.jsx)("p",{className:r,children:a})})})}},318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});const s="movies-page_container__WI70c",c="movies_list__qGO0R";var n=a(913),r=a(791);const i="search-form_form__+aeW5",o="search-form_btn__DFOt9";var l=a(184);const u=e=>{let{onSubmit:t}=e;const[a,s]=(0,r.useState)({query:""});return(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t({...a})},className:i,children:[(0,l.jsx)("input",{type:"text",name:"query",value:a.query,onChange:e=>{let{target:t}=e;const{name:c,value:n}=t;s({...a,[c]:n})},required:!0,placeholder:"Search movie"}),(0,l.jsx)("button",{type:"submit",className:o,children:"Search"})]})};var m=a(192),h=a(87);const d=()=>{const[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null),[d,_]=(0,h.lr)(),p=d.get("query");(0,r.useEffect)((()=>{(async()=>{try{s(!0);const{data:e}=await(0,n.z1)(p);t(null!==e&&void 0!==e&&e.results?e.results:[])}catch(i){o(i.message)}finally{s(!1)}})()}),[p]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{onSubmit:e=>{let{query:a}=e;_({query:a}),t([])}}),a&&(0,l.jsx)("p",{children:"...Loading"}),i&&(0,l.jsxs)("p",{children:["Error ",i]}),(0,l.jsx)("ul",{className:c,children:e.map((e=>{let{id:t,title:a}=e;return(0,l.jsx)(m.Z,{title:a,id:t},t)}))})]})},_=()=>(0,l.jsx)("div",{className:s,children:(0,l.jsx)(d,{})})}}]);
//# sourceMappingURL=318.b923b7f4.chunk.js.map