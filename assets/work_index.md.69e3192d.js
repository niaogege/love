import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b15a5512.js";const C=JSON.parse('{"title":"工作记录","description":"","frontmatter":{"layout":"doc","title":"工作记录"},"headers":[],"relativePath":"work/index.md"}'),e={name:"work/index.md"},o=l(`<h1 id="来源于工作-拓展所见所闻" tabindex="-1">来源于工作，拓展所见所闻 💯 <a class="header-anchor" href="#来源于工作-拓展所见所闻" aria-label="Permalink to &quot;来源于工作，拓展所见所闻 :100:&quot;">​</a></h1><hr><ul><li>工作之余，记录日常所思所想所做,现在离全栈还差 k8s 和数据库相关，不能放弃，1212</li><li>未来不可期，把握当下 🇨🇳</li></ul><nav class="table-of-contents"><ul><li><a href="#工作小记">工作小记</a></li><li><a href="#vitepress-markdown-写作语法">vitepress markdown 写作语法</a><ul><li><a href="#custom-containers">Custom Containers</a></li><li><a href="#default-title">Default Title</a></li><li><a href="#emoji-🎉">Emoji 🎉</a></li><li><a href="#table-of-contents">Table of Contents</a></li><li><a href="#code-groups">Code groups</a></li><li><a href="#markdown-file-inclusion">Markdown File Inclusion</a></li></ul></li></ul></nav><h2 id="工作小记" tabindex="-1">工作小记 <a class="header-anchor" href="#工作小记" aria-label="Permalink to &quot;工作小记&quot;">​</a></h2><ul><li><a href="./202211.html">202211</a></li><li><a href="./202212.html">202212</a></li><li><a href="./202301.html">202301</a></li><li><a href="./202302.html">202302</a></li><li><a href="./202303.html">202303</a></li><li><a href="./202304.html">202304</a></li><li><a href="./202305.html">202305</a></li></ul><h2 id="vitepress-markdown-写作语法" tabindex="-1">vitepress markdown 写作语法 <a class="header-anchor" href="#vitepress-markdown-写作语法" aria-label="Permalink to &quot;vitepress markdown 写作语法&quot;">​</a></h2><h3 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h3><p>Custom containers can be defined by their types, titles, and contents.</p><h3 id="default-title" tabindex="-1">Default Title <a class="header-anchor" href="#default-title" aria-label="Permalink to &quot;Default Title&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h3 id="emoji-🎉" tabindex="-1">Emoji 🎉 <a class="header-anchor" href="#emoji-🎉" aria-label="Permalink to &quot;Emoji 🎉&quot;">​</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:tada: :100:</span></span>
<span class="line"></span></code></pre></div><p>output: 🎉 💯</p><p>A list of all <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">emojis</a> is available.</p><h3 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[[toc]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="code-groups" tabindex="-1">Code groups <a class="header-anchor" href="#code-groups" aria-label="Permalink to &quot;Code groups&quot;">​</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--dkGK" id="tab-B9Q88W8" checked="checked"><label for="tab-B9Q88W8">config.js</label><input type="radio" name="group--dkGK" id="tab-t1dXJCu"><label for="tab-t1dXJCu">config.ts</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;vitepress&#39;).UserConfig</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div></div><h3 id="markdown-file-inclusion" tabindex="-1"><a href="https://vitepress.vuejs.org/guide/markdown#markdown-file-inclusion" target="_blank" rel="noreferrer">Markdown File Inclusion</a> <a class="header-anchor" href="#markdown-file-inclusion" aria-label="Permalink to &quot;[Markdown File Inclusion](https://vitepress.vuejs.org/guide/markdown#markdown-file-inclusion)&quot;">​</a></h3><p>You can include a markdown file in another markdown file like this:</p><p>一个 md 文档中包含另一个 md 文档</p><p><code>!-- @include: ./202303.md --</code></p>`,31),t=[o];function p(i,c,r,d,u,y){return a(),n("div",null,t)}const f=s(e,[["render",p]]);export{C as __pageData,f as default};