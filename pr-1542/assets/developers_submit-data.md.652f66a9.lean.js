import{_ as o,o as a,c as n,k as s,a as t,Q as e}from"./chunks/framework.058f64e5.js";const os=JSON.parse('{"title":"Submitting data blobs to Celestia","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Submitting data blobs to Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/submit-data.md","filePath":"developers/submit-data.md","lastUpdated":1713972626000}'),l={name:"developers/submit-data.md"},p=e("",17),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.471ex",height:"1.781ex",role:"img",focusable:"false",viewBox:"0 -705 15236 787","aria-hidden":"true"},Q=e("",1),i=[Q],T=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mtext",null,"Total Fee"),s("mo",null,"="),s("mtext",null,"Gas Limit"),s("mo",null,"×"),s("mtext",null,"Gas Price")])],-1),d=s("p",null,"The gas limit for a transaction is the maximum amount of gas that a user is willing to spend on a transaction. It is determined by both a static fixed cost (FC) and a variable dynamic cost based on the size of each blob involved in the transaction:",-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.777ex"},xmlns:"http://www.w3.org/2000/svg",width:"50.774ex",height:"2.563ex",role:"img",focusable:"false",viewBox:"0 -789.6 22442.1 1132.9","aria-hidden":"true"},E=e("",1),m=[E],u=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mtext",null,"Gas Limit"),s("mo",null,"="),s("mi",null,"F"),s("mi",null,"C"),s("mo",null,"+"),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"n")])]),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"N"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"B"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",null,"×"),s("mi",null,"S"),s("mi",null,"S"),s("mo",null,"×"),s("mi",null,"G"),s("mi",null,"C"),s("mi",null,"P"),s("mi",null,"B"),s("mi",null,"B")])],-1),g=s("p",null,"Where:",-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.414ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 1509 727","aria-hidden":"true"},H=e("",1),F=[H],w=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"F"),s("mi",null,"C")])],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.777ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.695ex",height:"2.563ex",role:"img",focusable:"false",viewBox:"0 -789.6 6495.3 1132.9","aria-hidden":"true"},k=e("",1),C=[k],L=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"n")])]),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"N"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"B"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")")])],-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672","aria-hidden":"true"},B=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),M=[B],A=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"i")])],-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672","aria-hidden":"true"},q=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),S=[q],P=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"i")])],-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.919ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 1290 727","aria-hidden":"true"},G=e("",1),O=[G],N=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"S"),s("mi",null,"S")])],-1),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.631ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 3815 727","aria-hidden":"true"},J=e("",1),K=[J],U=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"G"),s("mi",null,"C"),s("mi",null,"P"),s("mi",null,"B"),s("mi",null,"B")])],-1),W=e("",25);function X($,Y,ss,as,ns,es){return a(),n("div",null,[p,s("p",null,[s("mjx-container",r,[(a(),n("svg",c,i)),T])]),d,s("p",null,[s("mjx-container",y,[(a(),n("svg",h,m)),u])]),g,s("ul",null,[s("li",null,[s("mjx-container",b,[(a(),n("svg",f,F)),w]),t(" = Fixed Cost, is a static value (65,000 gas)")]),s("li",null,[s("mjx-container",x,[(a(),n("svg",V,C)),L]),t(" = SparseSharesNeeded for the "),s("mjx-container",_,[(a(),n("svg",D,M)),A]),t("th Blob, is the number of shares needed for the "),s("mjx-container",v,[(a(),n("svg",Z,S)),P]),t("th blob in the transaction")]),s("li",null,[s("mjx-container",j,[(a(),n("svg",I,O)),N]),t(" = Share Size, is the size of each share")]),s("li",null,[s("mjx-container",R,[(a(),n("svg",z,K)),U]),t(" = Gas Cost Per Blob Byte, is a parameter that could potentially be adjusted through the system's governance mechanisms.")])]),W])}const ls=o(l,[["render",X]]);export{os as __pageData,ls as default};
