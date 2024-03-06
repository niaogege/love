import{_ as i,c as s,o as a,a4 as l}from"./chunks/framework.jOIlw2sA.js";const y=JSON.parse('{"title":"202403","description":"","frontmatter":{},"headers":[],"relativePath":"work/2024/202403.md","filePath":"work/2024/202403.md"}'),n={name:"work/2024/202403.md"},h=l(`<h1 id="_202403" tabindex="-1">202403 <a class="header-anchor" href="#_202403" aria-label="Permalink to &quot;202403&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><blockquote><p>能熬到现在 说明运气不错，如果没有熬到，那就只需要努力即可 20240105</p></blockquote><blockquote><p>算法题犹如一座横亘在我面前的一座大山，什么时候才能翻过去？翻过去就能海阔天空？</p></blockquote></div><h2 id="_0301" tabindex="-1">0301 <a class="header-anchor" href="#_0301" aria-label="Permalink to &quot;0301&quot;">​</a></h2><ul><li>996 天, 95</li><li>偏函数的定义和应用场景？</li><li>react18 自动批处理？</li><li>在 v18 之前，只有事件回调、生命周期回调中的更新会批处理，比如上例中的 onClick。而在 promise、setTimeout 等异步回调中不会批处理。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.state.a);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.state;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.onClick}&gt;{a}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>在 React 并发模式中，引入了两个主要概念：任务调度和优先级。任务调度器负责决定哪些任务执行、何时执行以及中断和恢复任务。优先级允许 React 根据任务的紧迫性来安排任务的执行顺序，确保响应度更高的任务能够优先执行。 利用并发模式，React 可以将渲染过程分解为多个小任务，并根据优先级来动态调整任务执行的顺序。这样，在浏览器空闲时间或网络请求等异步操作期间，React 可以暂停当前任务，执行其他具有更高优先级的任务，以实现更爽快的用户交互体验。 总而言之，React 并发模式通过任务调度和优先级机制，提供了更好的用户体验和性能，使得 React 应用程序能够更加平滑地响应用户操作。</li></ul><h2 id="_0302" tabindex="-1">0302 <a class="header-anchor" href="#_0302" aria-label="Permalink to &quot;0302&quot;">​</a></h2><ul><li>997,94</li><li>面试次数还是太少，没有积累足够多的经验，没有什么信心不信心，干就是了</li><li>每一次面对算法题都是历史与现在的交汇，历史我忘记得太快了，这就是时间的惩罚，解决办法就是不停重发默写，默写，直到记到骨子里，然后融入到脑子里</li></ul><h2 id="_0303" tabindex="-1">0303 <a class="header-anchor" href="#_0303" aria-label="Permalink to &quot;0303&quot;">​</a></h2><ul><li>998,93</li><li>每次面试准备，都无从下手，如何化繁为简？只要回忆 60%核心内容，加强核心内容背诵</li><li><a href="https://juejin.cn/post/7300118821533089807" target="_blank" rel="noreferrer">2023 行情不好，大龄员工如何跳槽</a></li></ul><h2 id="_0304" tabindex="-1">0304 <a class="header-anchor" href="#_0304" aria-label="Permalink to &quot;0304&quot;">​</a></h2><ul><li>999，92,这数字不错，吉祥如意</li><li>如果能成功进入到下一家，半年之内我会跟面试说拜拜，但是算法题永远不会说拜拜，天天记这些枯燥的术语感觉没啥大用</li><li>这几天，多多背诵核心知识点，巩固记忆(网络和浏览器相关)，即使休息在家，天天看这些知识点，依然不能很好的记住，需要强化记忆，反复背诵</li><li>算法题核心算法，多练习几遍</li><li><strong>navigator.sendBeacon</strong> 优势：有机会异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一个导航的载入性能</li></ul><h2 id="_0305" tabindex="-1">0305 <a class="header-anchor" href="#_0305" aria-label="Permalink to &quot;0305&quot;">​</a></h2><ul><li><p>1000,91</p></li><li><p><a href="https://juejin.cn/column/6964717704712290317%5D" target="_blank" rel="noreferrer">前端系统复习</a></p></li><li><p><a href="https://juejin.cn/post/7157888552229928996#heading-12" target="_blank" rel="noreferrer">react17Vsreact18</a></p></li><li><p>缺少架构经验？ 如何结合项目，怎么补充</p></li><li><p>了解使用 rollup/vite/webpack 等打包工具以及前端性能优化？ 这点如何结合项目经验，使得在面试的时候有话说？</p></li><li><p>application/json: 表示请求体是 JSON 格式的数据。 application/x-www-form-urlencoded: 表示请求体采用 URL 编码的表单数据。</p></li></ul><h2 id="_0306" tabindex="-1">0306 <a class="header-anchor" href="#_0306" aria-label="Permalink to &quot;0306&quot;">​</a></h2><ul><li>1001,90</li><li>果然什么时候，都不会准备好面试的？everyTime,接雨水我写了将近十遍还是遗忘，二叉树的最近公共祖先也是写了近十遍，[递归还是写不出来](<a href="https://www.bilibili.com/video/BV1UD4y1Y769/%EF%BC%8C%E8%A6%81%E5%91%BD%E4%BA%86" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1UD4y1Y769/，要命了</a></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> publicAn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">q</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> publicAn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(root.left, p, q);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> publicAn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(root.right, p, q);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>Tree shaking（树摇）是一种代码优化技术，它依赖于 ES6 模块（ES6 modules）的静态结构。Tree shaking 的工作原理是通过消除未使用的代码，从而减小最终的 bundle 大小。这个过程主要涉及到两个步骤：<strong>静态分析</strong>和<strong>代码生成</strong>。Tree shaking 的主要优点是它可以减小 bundle 的大小，从而提高加载速度和运行效率</li><li>vite 打包工具涉及到的性能优化</li></ul><h3 id="navigator-sendbeacon" tabindex="-1">Navigator.sendBeacon <a class="header-anchor" href="#navigator-sendbeacon" aria-label="Permalink to &quot;Navigator.sendBeacon&quot;">​</a></h3><p>Navigator.sendBeacon 是一个现代的、轻量级的方法，它允许在不阻塞页面卸载的情况下发送数据。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">navigator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendBeacon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data));</span></span></code></pre></div><ul><li>通过 HTTP POST 请求方式 异步 发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能；</li><li>支持跨域，但不支持自定义 headers 请求头，这意味着：如果用户信息 Access-Token 是作为请求头信息传递，需要后台接口支持 url querystring 参数传递解析。需要考虑其兼容性。</li></ul><h2 id="_0307" tabindex="-1">0307 <a class="header-anchor" href="#_0307" aria-label="Permalink to &quot;0307&quot;">​</a></h2><ul><li>1002,89</li></ul>`,24),t=[h];function k(p,e,r,E,d,g){return a(),s("div",null,t)}const c=i(n,[["render",k]]);export{y as __pageData,c as default};
