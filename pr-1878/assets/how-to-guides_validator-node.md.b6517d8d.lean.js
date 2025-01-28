import{c as n}from"./chunks/constants.b02263eb.js";import{o as l,c as p,k as s,a,t as o,l as t,Q as e}from"./chunks/framework.2206c2c7.js";const c="/docs-preview/pr-1878/img/nodes/validator.png",r=e("",19),i={class:"language-bash vp-adaptive-theme"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),h=s("span",{class:"lang"},"bash",-1),y={class:"shiki github-dark vp-code-dark"},u=e("",1),_=e("",1),E={class:"line"},g=s("span",{style:{color:"#E1E4E8"}},"--from=$VALIDATOR_WALLET ",-1),C={style:{color:"#79B8FF"}},v=s("span",{style:{color:"#E1E4E8"}}," ",-1),m=s("span",{style:{color:"#79B8FF"}},"\\",-1),F=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"--fees=21000utia")],-1),b={class:"shiki github-light vp-code-light"},k=e("",1),T=e("",1),f={class:"line"},A=s("span",{style:{color:"#24292E"}},"--from=$VALIDATOR_WALLET ",-1),S={style:{color:"#005CC5"}},B=s("span",{style:{color:"#24292E"}}," ",-1),w=s("span",{style:{color:"#005CC5"}},"\\",-1),q=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"--fees=21000utia")],-1),x=e("",29),I=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Type"),s("th",null,"Chain ID"),s("th",null,"CLI Usage")])],-1),P=s("td",null,[s("a",{href:"./mainnet"},"Celestia")],-1),V=s("td",null,"Mainnet Beta",-1),D=s("td",null,[s("a",{href:"./mocha-testnet"},"Mocha")],-1),R=s("td",null,"Testnet",-1),N=s("td",null,[s("a",{href:"./arabica-devnet"},"Arabica")],-1),L=s("td",null,"Devnet",-1),O=s("p",null,"Continuing the validator tutorial, here are the steps to connect your validator to Mocha:",-1),M={class:"language-bash vp-adaptive-theme"},j=s("button",{title:"Copy Code",class:"copy"},null,-1),W=s("span",{class:"lang"},"bash",-1),z={class:"shiki github-dark vp-code-dark"},U=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"MONIKER"),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#9ECBFF"}},'"your_moniker"')],-1),$=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"VALIDATOR_WALLET"),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#9ECBFF"}},'"validator"')],-1),H=s("span",{class:"line"},null,-1),Y=e("",1),Q=e("",1),K=e("",1),Z=e("",1),G={class:"line"},X=s("span",{style:{color:"#E1E4E8"}},"    ",-1),J={style:{color:"#79B8FF"}},ss=s("span",{style:{color:"#E1E4E8"}}," ",-1),as=s("span",{style:{color:"#79B8FF"}},"\\",-1),es=e("",1),ns=e("",1),os=e("",1),ts=e("",1),ls=e("",1),ps=e("",1),cs=e("",1),rs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"--gas=220000")],-1),is={class:"shiki github-light vp-code-light"},ds=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"MONIKER"),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#032F62"}},'"your_moniker"')],-1),hs=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"VALIDATOR_WALLET"),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#032F62"}},'"validator"')],-1),ys=s("span",{class:"line"},null,-1),us=e("",1),_s=e("",1),Es=e("",1),gs=e("",1),Cs={class:"line"},vs=s("span",{style:{color:"#24292E"}},"    ",-1),ms={style:{color:"#005CC5"}},Fs=s("span",{style:{color:"#24292E"}}," ",-1),bs=s("span",{style:{color:"#005CC5"}},"\\",-1),ks=e("",1),Ts=e("",1),fs=e("",1),As=e("",1),Ss=e("",1),Bs=e("",1),ws=e("",1),qs=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"--gas=220000")],-1),xs=e("",40),Ls=JSON.parse('{"title":"Setting up a Celestia validator node","description":"Learn how to set up a Celestia validator node.","frontmatter":{"description":"Learn how to set up a Celestia validator node.","outline":"deep","head":[["meta",{"property":"og:title","content":"Setting up a Celestia validator node | Celestia Docs"}],["meta",{"property":"og:description","content":"Learn how to set up a Celestia validator node."}]]},"headers":[],"relativePath":"how-to-guides/validator-node.md","filePath":"how-to-guides/validator-node.md","lastUpdated":1738075457000}'),Is={name:"how-to-guides/validator-node.md"},Os=Object.assign(Is,{setup(Ps){return(Vs,Ds)=>(l(),p("div",null,[r,s("div",i,[d,h,s("pre",y,[s("code",null,[u,a(`
`),_,a(`
`),s("span",E,[g,s("span",C,"--chain-id="+o(t(n).mochaChainId),1),v,m]),a(`
`),F])]),s("pre",b,[s("code",null,[k,a(`
`),T,a(`
`),s("span",f,[A,s("span",S,"--chain-id="+o(t(n).mochaChainId),1),B,w]),a(`
`),q])])]),x,s("table",null,[I,s("tbody",null,[s("tr",null,[P,V,s("td",null,o(t(n).mainnetChainId),1),s("td",null,[s("code",null,"--chain-id "+o(t(n).mainnetChainId),1)])]),s("tr",null,[D,R,s("td",null,o(t(n).mochaChainId),1),s("td",null,[s("code",null,"--chain-id "+o(t(n).mochaChainId),1)])]),s("tr",null,[N,L,s("td",null,o(t(n).arabicaChainId),1),s("td",null,[s("code",null,"--chain-id "+o(t(n).arabicaChainId),1)])])])]),O,s("div",M,[j,W,s("pre",z,[s("code",null,[U,a(`
`),$,a(`
`),H,a(`
`),Y,a(`
`),Q,a(`
`),K,a(`
`),Z,a(`
`),s("span",G,[X,s("span",J,"--chain-id="+o(t(n).mochaChainId),1),ss,as]),a(`
`),es,a(`
`),ns,a(`
`),os,a(`
`),ts,a(`
`),ls,a(`
`),ps,a(`
`),cs,a(`
`),rs])]),s("pre",is,[s("code",null,[ds,a(`
`),hs,a(`
`),ys,a(`
`),us,a(`
`),_s,a(`
`),Es,a(`
`),gs,a(`
`),s("span",Cs,[vs,s("span",ms,"--chain-id="+o(t(n).mochaChainId),1),Fs,bs]),a(`
`),ks,a(`
`),Ts,a(`
`),fs,a(`
`),As,a(`
`),Ss,a(`
`),Bs,a(`
`),ws,a(`
`),qs])])]),xs]))}});export{Ls as __pageData,Os as default};
