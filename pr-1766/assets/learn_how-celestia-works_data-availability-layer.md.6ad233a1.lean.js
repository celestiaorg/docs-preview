import{_ as l,o as a,c as o,k as e,a as t,Q as s}from"./chunks/framework.466f363b.js";const i="/docs-preview/pr-1766/img/learn/reed-solomon-encoding.png",n="/docs-preview/pr-1766/img/learn/nmt.png",r="/docs-preview/pr-1766/img/learn/celestia-app.png",g4=JSON.parse(`{"title":"Celestia's data availability layer","description":"Celestia's Data Availability layer and its key features.","frontmatter":{"description":"Celestia's Data Availability layer and its key features.","head":[["meta",{"name":"og:title","content":"Celestia's data availability layer | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/how-celestia-works/data-availability-layer.md","filePath":"learn/how-celestia-works/data-availability-layer.md","lastUpdated":1729722540000}`),T={name:"learn/how-celestia-works/data-availability-layer.md"},d=s("",5),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.123ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2264.4 705","aria-hidden":"true"},c=s("",1),m=[c],p=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k"),e("mo",null,"×"),e("mi",null,"k")])],-1),g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.123ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2264.4 705","aria-hidden":"true"},u=s("",1),_=[u],w=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k"),e("mo",null,"×"),e("mi",null,"k")])],-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.386ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 3264.4 705","aria-hidden":"true"},k=s("",1),y=[k],v=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"2"),e("mi",null,"k"),e("mo",null,"×"),e("mn",null,"2"),e("mi",null,"k")])],-1),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},H=s("",1),V=[H],S=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"4"),e("mi",null,"k")])],-1),C=e("p",null,[e("img",{src:i,alt:"2D Reed-Soloman (RS) Encoding"})],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.386ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 3264.4 705","aria-hidden":"true"},j=s("",1),Z=[j],P=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"2"),e("mi",null,"k"),e("mo",null,"×"),e("mn",null,"2"),e("mi",null,"k")])],-1),N=e("p",null,[t("Every light node randomly chooses a set of unique coordinates in the extended matrix and queries full nodes for the data shares and the corresponding Merkle proofs at those coordinates. If light nodes receive a valid response for each sampling query, then there is a "),e("a",{href:"https://github.com/celestiaorg/celestia-node/issues/805#issuecomment-1150081075",target:"_blank",rel:"noreferrer"},"high probability guarantee"),t(" that the whole block's data is available.")],-1),I=e("em",null,"i.e.",-1),B={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.123ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2264.4 705","aria-hidden":"true"},q=s("",1),E=[q],z=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k"),e("mo",null,"×"),e("mi",null,"k")])],-1),G=e("p",null,[t("For more details on DAS, take a look at the "),e("a",{href:"https://arxiv.org/abs/1809.09044",target:"_blank",rel:"noreferrer"},"original paper"),t(".")],-1),J=e("h3",{id:"scalability",tabindex:"-1"},[t("Scalability "),e("a",{class:"header-anchor",href:"#scalability","aria-label":'Permalink to "Scalability"'},"​")],-1),F=e("p",null,"DAS enables Celestia to scale the DA layer. DAS can be performed by resource-limited light nodes since each light node only samples a small portion of the block data. The more light nodes there are in the network, the more data they can collectively download and store.",-1),O=e("em",null,"i.e.",-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},K=s("",1),U=[K],X=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"4"),e("mi",null,"k")])],-1),Y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.345ex",height:"1.912ex",role:"img",focusable:"false",viewBox:"0 -833.9 1036.6 844.9","aria-hidden":"true"},t1=s("",1),a1=[t1],o1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi",null,"n"),e("mn",null,"2")])])],-1),s1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},l1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},i1=s("",1),n1=[i1],r1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")])],-1),T1=e("h3",{id:"fraud-proofs-of-incorrectly-extended-data",tabindex:"-1"},[t("Fraud proofs of incorrectly extended data "),e("a",{class:"header-anchor",href:"#fraud-proofs-of-incorrectly-extended-data","aria-label":'Permalink to "Fraud proofs of incorrectly extended data"'},"​")],-1),d1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},h1=s("",1),c1=[h1],m1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"4"),e("mi",null,"k")])],-1),p1=e("em",null,"i.e.",-1),g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},u1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",style:{"stroke-width":"3"}})])])],-1),_1=[u1],w1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k")])],-1),f1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},k1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",style:{"stroke-width":"3"}})])])],-1),y1=[k1],v1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k")])],-1),L1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},H1=s("",1),V1=[H1],S1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"2"),e("mi",null,"k")])],-1),C1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},A1=s("",1),j1=[A1],Z1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")])],-1),P1=e("p",null,"The downside of the standard Reed-Solomon encoding is dealing with malicious block producers that generate the extended data incorrectly.",-1),N1=e("strong",null,[t("Celestia does not require a majority of the consensus ("),e("em",null,"i.e."),t(", block producers) to be honest to guarantee data availability.")],-1),I1=e("em",null,"i.e.",-1),B1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},q1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",style:{"stroke-width":"3"}})])])],-1),E1=[q1],z1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k")])],-1),G1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.123ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2264.4 705","aria-hidden":"true"},F1=s("",1),O1=[F1],$1=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"k"),e("mo",null,"×"),e("mi",null,"k")])],-1),W1=e("em",null,"Fraud Proofs of Incorrectly Generated Extended Data",-1),K1=e("em",null,"i.e.",-1),U1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.345ex",height:"1.912ex",role:"img",focusable:"false",viewBox:"0 -833.9 1036.6 844.9","aria-hidden":"true"},Y1=s("",1),e4=[Y1],t4=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi",null,"n"),e("mn",null,"2")])])],-1),a4={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o4={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},s4=s("",1),l4=[s4],i4=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")])],-1),n4=s("",18);function r4(T4,d4,Q4,h4,c4,m4){return a(),o("div",null,[d,e("p",null,[t("To make DAS possible, Celestia uses a 2-dimensional Reed-Solomon encoding scheme to encode the block data: every block data is split into "),e("mjx-container",Q,[(a(),o("svg",h,m)),p]),t(" shares, arranged in a "),e("mjx-container",g,[(a(),o("svg",x,_)),w]),t(" matrix, and extended with parity data into a "),e("mjx-container",f,[(a(),o("svg",b,y)),v]),t(" extended matrix by applying multiple times Reed-Solomon encoding.")]),e("p",null,[t("Then, "),e("mjx-container",L,[(a(),o("svg",M,V)),S]),t(" separate Merkle roots are computed for the rows and columns of the extended matrix; the Merkle root of these Merkle roots is used as the block data commitment in the block header.")]),C,e("p",null,[t("To verify that the data is available, Celestia light nodes are sampling the "),e("mjx-container",D,[(a(),o("svg",A,Z)),P]),t(" data shares.")]),N,e("p",null,[t("Additionally, every received data share with a correct Merkle proof is gossiped to the network. As a result, as long as the Celestia light nodes are sampling together enough data shares ("),I,t(", at least "),e("mjx-container",B,[(a(),o("svg",R,E)),z]),t(" unique shares), the full block can be recovered by honest full nodes.")]),G,J,F,e("p",null,[t("This means that increasing the number of light nodes performing DAS allows for larger blocks ("),O,t(", with more transactions), while still keeping DAS feasible for resource-limited light nodes. However, in order to validate block headers, Celestia light nodes need to download the "),e("mjx-container",$,[(a(),o("svg",W,U)),X]),t(" intermediate Merkle roots.")]),e("p",null,[t("For a block data size of "),e("mjx-container",Y,[(a(),o("svg",e1,a1)),o1]),t(" bytes, this means that every light node must download "),e("mjx-container",s1,[(a(),o("svg",l1,n1)),r1]),t(" bytes. Therefore, any improvement in the bandwidth capacity of Celestia light nodes has a quadratic effect on the throughput of Celestia's DA layer.")]),T1,e("p",null,[t("The requirement of downloading the "),e("mjx-container",d1,[(a(),o("svg",Q1,c1)),m1]),t(" intermediate Merkle roots is a consequence of using a 2-dimensional Reed-Solomon encoding scheme. Alternatively, DAS could be designed with a standard ("),p1,t(", 1-dimensional) Reed-Solomon encoding, where the original data is split into "),e("mjx-container",g1,[(a(),o("svg",x1,_1)),w1]),t(" shares and extended with "),e("mjx-container",f1,[(a(),o("svg",b1,y1)),v1]),t(" additional shares of parity data. Since the block data commitment is the Merkle root of the "),e("mjx-container",L1,[(a(),o("svg",M1,V1)),S1]),t(" resulting data shares, light nodes no longer need to download "),e("mjx-container",C1,[(a(),o("svg",D1,j1)),Z1]),t(" bytes to validate block headers.")]),P1,e("p",null,[t("This is possible as "),N1,t(" Thus, if the extended data is invalid, the original data might not be recoverable, even if the light nodes are sampling sufficient unique shares ("),I1,t(", at least "),e("mjx-container",B1,[(a(),o("svg",R1,E1)),z1]),t(" for a standard encoding and "),e("mjx-container",G1,[(a(),o("svg",J1,O1)),$1]),t(" for a 2-dimensional encoding).")]),e("p",null,[t("As a solution, "),W1,t(" enable light nodes to reject blocks with invalid extended data. Such proofs require reconstructing the encoding and verifying the mismatch. With standard Reed-Solomon encoding, this entails downloading the original data, "),K1,t(", "),e("mjx-container",U1,[(a(),o("svg",X1,e4)),t4]),t(" bytes. Contrastingly, with 2-dimensional Reed-Solomon encoding, only "),e("mjx-container",a4,[(a(),o("svg",o4,l4)),i4]),t(" bytes are required as it is sufficient to verify only one row or one column of the extended matrix.")]),n4])}const x4=l(T,[["render",r4]]);export{g4 as __pageData,x4 as default};
