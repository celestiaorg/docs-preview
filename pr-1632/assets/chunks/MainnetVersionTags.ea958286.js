import{m as s}from"./mainnet_versions.5535df4a.js";import{c as o}from"./constants.dc70dfe7.js";import{_ as r,o as a,c as l,k as e,t as n}from"./framework.569299a5.js";const i={name:"MainnetVersionTags",data(){return{mainnetVersions:s,constants:o}}},c=e("tr",null,[e("th",null,"Software"),e("th",null,"Version")],-1),p=e("td",null,"celestia-node",-1),_=["href"],m=e("td",null,"celestia-app",-1),h=["href"];function u(g,d,f,V,t,b){return a(),l("table",null,[c,e("tr",null,[p,e("td",null,[e("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t.mainnetVersions["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n(t.mainnetVersions["node-latest-tag"]),9,_)])]),e("tr",null,[m,e("td",null,[e("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t.mainnetVersions["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n(t.mainnetVersions["app-latest-tag"]),9,h)])])])}const M=r(i,[["render",u]]);export{M};