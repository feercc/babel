import{_ as o,o as t,c as n,a,b as c,d as r,e,r as i}from"../app.f8165656.mjs";const l="/babel/assets/babel-process.bccf6615.png",d="/babel/assets/lexical-analysis.b54906d5.png",h="/babel/assets/AST.d8798e53.png",p={},b=r('<h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><h2 id="babel\u5904\u7406\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#babel\u5904\u7406\u6D41\u7A0B" aria-hidden="true">#</a> babel\u5904\u7406\u6D41\u7A0B</h2><p><img src="'+l+'" alt="babel\u5904\u7406\u6D41\u7A0B"></p><h2 id="\u8BCD\u6CD5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u5206\u6790" aria-hidden="true">#</a> \u8BCD\u6CD5\u5206\u6790</h2><p>\u5728\u8FD9\u4E2A\u9636\u6BB5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210Tokens\uFF0C\u53EF\u4EE5\u5C06Tokens\u8BA4\u4E3A\u662F\u4E00\u4E9B\u8BED\u6CD5\u7247\u6BB5\u7684\u6570\u7EC4</p><p>\u4F8B\u5982\uFF1A<code>for (const item of items) {}</code>\u8BCD\u6CD5\u5206\u6790\u7ED3\u679C\uFF0C\u65B9\u4FBF\u540E\u7EED\u8BED\u6CD5\u5206\u6790</p><p><img src="'+d+'" alt="\u8BCD\u6CD5\u5206\u6790"></p><h2 id="\u8BED\u6CD5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u5206\u6790" aria-hidden="true">#</a> \u8BED\u6CD5\u5206\u6790</h2><p>\u8FD9\u4E2A\u9636\u6BB5\u89E3\u6790\u5668\u4F1A\u628ATokens\u8F6C\u6362\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684AST</p><p><code>console.log(&#39;hello world&#39;)</code>\u4F1A\u88AB\u89E3\u6790\u6210</p><p><img src="'+h+'" alt="\u8BED\u6CD5\u5206\u6790"></p><p>\u56FE\u4E2DProgram\u3001CallExpression\u3001Identifier \u8FD9\u4E9B\u90FD\u662F\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2A\u6709\u610F\u4E49\u7684\u8BED\u6CD5\u5355\u5143\uFF0C\u8282\u70B9\u7C7B\u578B\u53C8\u5B9A\u4E49\u4E00\u4E9B\u5C5E\u6027\u6765\u63CF\u8FF0\u8282\u70B9\u4FE1\u606F</p>',12),_=e("AST\u7684\u8282\u70B9\u7C7B\u578B\u5F88\u591A\uFF0C\u6BD4\u5982babel\u652F\u6301jsx\u3001flow\u3001ts\u7B49\u7B49\u5404\u79CD\u7C7B\u578B\u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u4F7F\u7528"),f={href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"},m=e("ASTExplorer"),x=e("\u6765\u5BA1\u67E5\u8282\u70B9\u4FE1\u606F"),u=r('<h2 id="\u8F6C\u6362transform" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362transform" aria-hidden="true">#</a> \u8F6C\u6362Transform</h2><p>\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u5BF9AST\u8FDB\u884C\u904D\u5386\uFF0C\u5BF9\u8282\u70B9\u8FDB\u884C\u589E\u5220\u6539\u67E5\uFF0Cbabel\u7684\u6240\u6709\u63D2\u4EF6\u90FD\u5728\u8FD9\u4E2A\u9636\u6BB5\u5DE5\u4F5C\uFF0C\u6BD4\u5982\u8BED\u6CD5\u8F6C\u6362\uFF0C\u4EE3\u7801\u538B\u7F29\u7B49</p><h2 id="\u4EE3\u7801\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u751F\u6210" aria-hidden="true">#</a> \u4EE3\u7801\u751F\u6210</h2><p>\u6700\u540E\u9636\u6BB5\u8FD8\u9700\u8981\u5C06AST\u8F6C\u6362\u6210javascript\uFF0C\u540C\u65F6\u5728\u8FD9\u4E2A\u9636\u6BB5\u53EF\u4EE5\u751F\u6210sourcemap</p><h2 id="\u6838\u5FC3-babel-core" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3-babel-core" aria-hidden="true">#</a> \u6838\u5FC3@babel/core</h2><ol><li>\u52A0\u8F7D\u548C\u5904\u7406\u914D\u7F6E</li><li>\u52A0\u8F7D\u63D2\u4EF6</li><li>\u8C03\u7528parser\u8BED\u6CD5\u89E3\u6790\u751F\u6210AST</li><li>traverser\u904D\u5386AST</li><li>\u751F\u6210\u4EE3\u7801\uFF0C\u5305\u62ECsourcemap\u548C\u6E90\u4EE3\u7801\u751F\u6210</li></ol>',6);function T(g,S){const s=i("ExternalLinkIcon");return t(),n("div",null,[b,a("p",null,[_,a("a",f,[m,c(s)]),x]),u])}const A=o(p,[["render",T],["__file","conclusion.html.vue"]]);export{A as default};