import{T as a,C as t}from"./vendor-d7faccf7.js";const e=a("TM6R82PC2M","df95ebaff994eda3d92c4fa90ca8b371"),s=t([]),o={},n=async a=>{const t=e.initIndex("pokemon"),o=await t.search(a,{hitsPerPage:150});s.set(o.hits)},r=async a=>{if(o[a])return o[a];try{const t=`https://pokeapi.co/api/v2/pokemon/${a}`,e=await fetch(t),s=await e.json();return o[a]=s,s}catch(t){return console.error(t),null}};export{n as f,r as g,s as p};