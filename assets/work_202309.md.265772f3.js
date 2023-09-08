import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c8c775bf.js";const u=JSON.parse('{"title":"202309","description":"","frontmatter":{},"headers":[],"relativePath":"work/202309.md","filePath":"work/202309.md"}'),l={name:"work/202309.md"},o=p(`<h1 id="_202309" tabindex="-1">202309 <a class="header-anchor" href="#_202309" aria-label="Permalink to &quot;202309&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>即将步入秋天，我还是这么菜吗?</p><blockquote><p>20230906 是的</p></blockquote></div><h2 id="_0901-0902" tabindex="-1">0901/0902 <a class="header-anchor" href="#_0901-0902" aria-label="Permalink to &quot;0901/0902&quot;">​</a></h2><ul><li><p>815，距离婚期还有整整一个月</p></li><li><p>多灾多难的一周，终于阔以休息下</p></li><li><p>gzip 的原理是什么，如何配置？ gzip 的核心是 <em>Deflate</em>(缩小)，而它使用了 <em>LZ77 算法</em>与 <em>Huffman</em> 编码来压缩文件，重复度越高的文件可压缩的空间就越大 因此 gzip 用于 HTTP 文件传输中，比如 JS、CSS 等，「但一般不会压缩图片」。在 HTTP Response 报文中，用 Content-Encoding 指明使用 gzip 压缩，而以下响应头在大部分生产环境的响应报文中都可以看到！</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Accept-Encoding: gzip, deflate, br</span></span>
<span class="line"><span style="color:#e1e4e8;">Content-Encoding: gzip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Accept-Encoding: gzip, deflate, br</span></span>
<span class="line"><span style="color:#24292e;">Content-Encoding: gzip</span></span></code></pre></div><p>gzip 一般在<strong>反向代理</strong>那一层，如 nginx 进行处理，直接使用 C 语言编写，具有更好的性能。</p></li></ul><p>在 nginx 开启 gzip: 配置可参考 gzip module[4]</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">gzip on;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">gzip on;</span></span></code></pre></div><h2 id="_0904" tabindex="-1">0904 <a class="header-anchor" href="#_0904" aria-label="Permalink to &quot;0904&quot;">​</a></h2><ul><li>817</li><li><a href="https://mp.weixin.qq.com/s/ossKRpQW6X7eFIc0FOoU9Q" target="_blank" rel="noreferrer">RSC react server component</a></li></ul><p>Server Component 它的渲染是在服务端完成之后通过网络请求交给客户端 React 做整合，如果运行时是 Node.js，在 Server Component 中就可以使用 Node.js 中的所有模块资源，访问数据库这些自然就可以了</p><h2 id="_0905" tabindex="-1">0905 <a class="header-anchor" href="#_0905" aria-label="Permalink to &quot;0905&quot;">​</a></h2><ul><li>818</li><li>如何从技术岗转向产品岗？</li><li>存量贷款利率 3000+2800 降 5800 就行</li></ul><h2 id="_0906" tabindex="-1">0906 <a class="header-anchor" href="#_0906" aria-label="Permalink to &quot;0906&quot;">​</a></h2><ul><li>819，十一回来之后就是 849，元旦就是 900 天左右,天数在慢慢增长，不知道内功修炼的如何了？</li><li>Node.js 发布 v20.6.0 版本，从该版本开始增加了内置 <code>.env</code> 功能，运行时可以指定 <code>.env</code> 文件的路径，可以取代以往使用 <code>dotenv</code> 模块做的一些事情。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .env</span></span>
<span class="line"><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> development</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 控制台执行</span></span>
<span class="line"><span style="color:#E1E4E8;">node </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">env</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">file</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">.env app.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//控制台输出</span></span>
<span class="line"><span style="color:#E1E4E8;">development</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .env</span></span>
<span class="line"><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> development</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(p<wbr>rocess.env.</span><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 控制台执行</span></span>
<span class="line"><span style="color:#24292E;">node </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">env</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">file</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">.env app.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//控制台输出</span></span>
<span class="line"><span style="color:#24292E;">development</span></span></code></pre></div><blockquote><p>需要注意。v20.6.0 现在还不是稳定版本，不建议用于生产环境，要成为 LTS 版本，到下半年 10 月份了。</p></blockquote><ul><li><p><a href="https://www.toutiao.com/article/7275250124207473171/?app=news_article&amp;timestamp=1693970768&amp;use_new_style=1&amp;req_id=20230906112608D192CDFFEC8AEC022D9C&amp;group_id=7275250124207473171&amp;share_token=1AAF0F96-87D4-4DF0-B79A-A2A08FF0DCA0&amp;tt_from=weixin&amp;utm_source=weixin&amp;utm_medium=toutiao_ios&amp;utm_campaign=client_share&amp;wxshare_count=1&amp;source=m_redirect&amp;wid=1693971225842" target="_blank" rel="noreferrer">日 200 亿次调用，喜马拉雅网关的架构设计</a></p></li><li><p>Nextjs 中的 rewrite 用法</p></li></ul><p>To match a regex path you can wrap the regex in parenthesis after a parameter, for example <code>/blog/:slug(\\\\d{1,})</code> will match <code>/blog/123</code> but not <code>/blog/abc</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rewrites</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: </span><span style="color:#9ECBFF;">&quot;/old-blog/:post(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">d{1,})&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        destination: </span><span style="color:#9ECBFF;">&quot;/blog/:post&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Matched parameters can be used in the destination</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rewrites</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        source: </span><span style="color:#032F62;">&quot;/old-blog/:post(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d{1,})&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        destination: </span><span style="color:#032F62;">&quot;/blog/:post&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Matched parameters can be used in the destination</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="_0907" tabindex="-1">0907 <a class="header-anchor" href="#_0907" aria-label="Permalink to &quot;0907&quot;">​</a></h2><ul><li><p>如何解决跨域问题？ 「协议」，「域名」，「端口」，三者有一不一样，就是跨域，案例一：www.baidu.com 与 zhidao.baidu.com 是跨域。 目前有两种最常见的解决方案： 1.cors,需要在服务端设置几个响应头， 比如 <strong>Access-control-Allow-origin:/*/</strong></p><p>2.反向代理，在 <strong>nginx/traefik/haproxy</strong> 等反向代理服务器中设置为同一域名</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;"> listen </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> server_name bythewayer.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   # 避免非root路径404</span></span>
<span class="line"><span style="color:#E1E4E8;">   try_files $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> # 解决跨域</span></span>
<span class="line"><span style="color:#E1E4E8;"> location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">api {</span></span>
<span class="line"><span style="color:#E1E4E8;">   # 或者是 </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:8080</span></span>
<span class="line"><span style="color:#E1E4E8;">   proxy_pass </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//api.bythewayer.com;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;"> listen </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> server_name bythewayer.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   # 避免非root路径404</span></span>
<span class="line"><span style="color:#24292E;">   try_files $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> # 解决跨域</span></span>
<span class="line"><span style="color:#24292E;"> location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">api {</span></span>
<span class="line"><span style="color:#24292E;">   # 或者是 </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:8080</span></span>
<span class="line"><span style="color:#24292E;">   proxy_pass </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//api.bythewayer.com;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>3.JSONP</p><p>JSONP，全称 <strong>JSON with Padding</strong>，为了解决跨域的问题而出现。虽然它只能处理 GET 跨域，虽然现在基本上都使用 CORS 跨域，但仍然要知道它，毕竟面试会问。</p><p>JSONP 基于两个原理:</p><p>1.动态创建 script，使用 script.src 加载请求跨过跨域 2.script.src 加载的脚本内容为 JSONP: 即 <strong>PADDING(JSON)</strong> 格式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ curl </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//shanyue.tech/api/user?id=100&amp;callback=padding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">padding</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;wechat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;xxxxx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ curl </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//shanyue.tech/api/user?id=100&amp;callback=padding</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">padding</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;wechat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;xxxxx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>那请求数据后，如何处理数据呢？此时的 padding 就是处理数据的函数。我们只需要在前端实现定义好 padding 函数即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">window.padding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> handleData;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">window.padding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> handleData;</span></span></code></pre></div><p>基于以上原理，创建 jsonp</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsonp_simple</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 一、默认 callback 函数为 padding</span></span>
<span class="line"><span style="color:#E1E4E8;">  script.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}?\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">({ callback: </span><span style="color:#9ECBFF;">&quot;padding&quot;</span><span style="color:#9ECBFF;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">params</span><span style="color:#9ECBFF;"> })</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 二、使用 onData 作为 window.padding 函数，接收数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  window[</span><span style="color:#9ECBFF;">&quot;padding&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> onData;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 三、动态加载脚本</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(script);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送 JSONP 请求</span></span>
<span class="line"><span style="color:#B392F0;">jsonp_simple</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&quot;http://localhost:10010&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  params: { id: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Data:&quot;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsonp_simple</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">onData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">script</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 一、默认 callback 函数为 padding</span></span>
<span class="line"><span style="color:#24292E;">  script.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">url</span><span style="color:#032F62;">}?\${</span><span style="color:#005CC5;">JSON</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#032F62;">({ callback: </span><span style="color:#032F62;">&quot;padding&quot;</span><span style="color:#032F62;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">params</span><span style="color:#032F62;"> })</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 二、使用 onData 作为 window.padding 函数，接收数据</span></span>
<span class="line"><span style="color:#24292E;">  window[</span><span style="color:#032F62;">&quot;padding&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> onData;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 三、动态加载脚本</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送 JSONP 请求</span></span>
<span class="line"><span style="color:#6F42C1;">jsonp_simple</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  url: </span><span style="color:#032F62;">&quot;http://localhost:10010&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  params: { id: </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Data:&quot;</span><span style="color:#24292E;">, data);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>此时会有一个问题: window.padding 函数会污染全局变量，如果有多个 JSONP 请求发送如何处理？</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsonp</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 一、为了避免全局污染，使用一个随机函数名</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cbFnName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`JSONP_PADDING_\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">random</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">slice</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 二、默认 callback 函数为 cbFnName</span></span>
<span class="line"><span style="color:#E1E4E8;">  script.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}?\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">({ callback: </span><span style="color:#E1E4E8;">cbFnName</span><span style="color:#9ECBFF;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">params</span><span style="color:#9ECBFF;"> })</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 三、使用 onData 作为 cbFnName 回调函数，接收数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  window[cbFnName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onData</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> window[cbFnName];</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(srcipt);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(script);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送 JSONP 请求</span></span>
<span class="line"><span style="color:#B392F0;">jsonp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&quot;http://localhost:10010&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  params: { id: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Data:&quot;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsonp</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">onData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">script</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 一、为了避免全局污染，使用一个随机函数名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cbFnName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`JSONP_PADDING_\${</span><span style="color:#24292E;">Math</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">random</span><span style="color:#032F62;">().</span><span style="color:#6F42C1;">toString</span><span style="color:#032F62;">().</span><span style="color:#6F42C1;">slice</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 二、默认 callback 函数为 cbFnName</span></span>
<span class="line"><span style="color:#24292E;">  script.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">url</span><span style="color:#032F62;">}?\${</span><span style="color:#005CC5;">JSON</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#032F62;">({ callback: </span><span style="color:#24292E;">cbFnName</span><span style="color:#032F62;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">params</span><span style="color:#032F62;"> })</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 三、使用 onData 作为 cbFnName 回调函数，接收数据</span></span>
<span class="line"><span style="color:#24292E;">  window[cbFnName] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onData</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> window[cbFnName];</span></span>
<span class="line"><span style="color:#24292E;">    document.body.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(srcipt);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送 JSONP 请求</span></span>
<span class="line"><span style="color:#6F42C1;">jsonp</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  url: </span><span style="color:#032F62;">&quot;http://localhost:10010&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  params: { id: </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Data:&quot;</span><span style="color:#24292E;">, data);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,32),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const h=s(l,[["render",c]]);export{u as __pageData,h as default};
