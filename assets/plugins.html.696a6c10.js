import{_ as n,o as s,c as a,d as e}from"../app.f8165656.mjs";const t={},p=e(`<h1 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h1><p>\u4EE3\u7801\u8F6C\u6362\u662F\u901A\u8FC7\u542F\u7528\u63D2\u4EF6\u6216\u8005\u9884\u8BBE\u6765\u8FDB\u884C\u8F6C\u6362</p><h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u63D2\u4EF6</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;babel-plugin-myPlugin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// or</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules/asdf/plugin&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F6C\u6362\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u63D2\u4EF6" aria-hidden="true">#</a> \u8F6C\u6362\u63D2\u4EF6</h2><p>\u8F6C\u6362\u4F60\u7684\u4EE3\u7801</p><h2 id="\u8BED\u6CD5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u63D2\u4EF6" aria-hidden="true">#</a> \u8BED\u6CD5\u63D2\u4EF6</h2><p>\u5927\u591A\u6570\u8BED\u6CD5\u90FD\u53EF\u4EE5\u88ABbabel\u8F6C\u6362\uFF0C\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u5047\u5982\u6CA1\u6709\u5B9E\u73B0\u8F6C\u6362\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 @babel/plugin-syntax-bigint\u4E4B\u7C7B\u7684\u63D2\u4EF6\u6765\u5141\u8BB8babel\u89E3\u6790\u7279\u5B9A\u8BED\u6CD5\u6216\u8005\u4FDD\u7559\u539F\u4EE3\u7801\uFF0C\u4EC5\u4EC5\u662F\u5E0C\u671Bbabel\u80FD\u591F\u8FDB\u884C\u4EE3\u7801\u5206\u6790</p><p>\u6216\u8005\u4F60\u53EF\u4EE5\u901A\u8FC7babel\u89E3\u6790\u5668\u4F20\u5165plugins\u53C2\u6570</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;parserOpts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u987A\u5E8F" aria-hidden="true">#</a> \u63D2\u4EF6\u987A\u5E8F</h2><p>\u987A\u5E8F\u5F88\u91CD\u8981</p><ol><li>\u63D2\u4EF6\u5728presets\u4E4B\u524D\u8FD0\u884C</li><li>\u63D2\u4EF6\u987A\u5E8F\u4ECE\u524D\u5F80\u540E</li><li>preset\u987A\u5E8F\u662F\u98A0\u5012\u7684\uFF0C\u4ECE\u540E\u5F80\u524D</li></ol><h2 id="\u63D2\u4EF6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u53C2\u6570" aria-hidden="true">#</a> \u63D2\u4EF6\u53C2\u6570</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;transform-async-to-module-method&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bluebird&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;coroutine&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// preset\u7C7B\u4F3C</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;loose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> \u63D2\u4EF6\u5F00\u53D1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">visitor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token comment">// reverse the name: JavaScript -&gt; tpircSavaJ</span>
        path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">=</span> name
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","plugins.html.vue"]]);export{r as default};
