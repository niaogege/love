import{_ as a,c as t,a2 as i,o as s}from"./chunks/framework.C3rjE0BJ.js";const m=JSON.parse('{"title":"定制私人主题包@chendap/vitepress-theme-wmh","description":"","frontmatter":{"layout":"doc","title":"定制私人主题包@chendap/vitepress-theme-wmh"},"headers":[],"relativePath":"theme/index.md","filePath":"theme/index.md"}'),l={name:"theme/index.md"};function r(n,e,h,p,o,d){return s(),t("div",null,e[0]||(e[0]=[i(`<p>借鉴：</p><ul><li><a href="https://github.com/vuejs/theme" target="_blank" rel="noreferrer">vuejs/theme</a></li><li><a href="https://github.com/vitest-dev/vitest" target="_blank" rel="noreferrer">vitest</a></li><li><a href="https://github.com/ATQQ/sugar-blog" target="_blank" rel="noreferrer">sugar-blog</a></li><li><a href="https://theme.sugarat.top/" target="_blank" rel="noreferrer">sugarat</a></li><li><a href="https://deploy-preview-1593--vitepress-docs.netlify.app/zh/guide/using-vue" target="_blank" rel="noreferrer">vitepress 中文文档</a></li><li><a href="https://toscode.gitee.com/niaogege/vitepress-theme-vuetom" target="_blank" rel="noreferrer">vitepress-theme-vuetom</a></li><li>博客主题借鉴<a href="https://medium.com/" target="_blank" rel="noreferrer">medium</a>- <a href="https://lilianweng.github.io/" target="_blank" rel="noreferrer">Lil’Log</a></li><li><a href="https://tailblocks.cc/" target="_blank" rel="noreferrer">借鉴 tailwindcss 快速开发</a></li></ul><h2 id="初衷" tabindex="-1">初衷 <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷&quot;">​</a></h2><p>没找到合适的主题博客模板，那就自己做一个喜欢的主题模板。包名 <strong>@chendap/vitepress-theme-wmh</strong></p><p>看到一个静态网站博客生成器<a href="https://the-guild.dev/blog/nextra-2" target="_blank" rel="noreferrer">Nextra 2 – Next.js Static Site Generator</a>.<a href="https://nextra.site/" target="_blank" rel="noreferrer">官网</a></p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>server: nodejs client: tailwindcss + vue3 + ts + vitepress npm: changeset</p><p>难度还不小，</p><ul><li>vue3/tailwindcss 不怎么熟悉，需要短时间掌握，蛮具有挑战性的</li><li>ssr 如何做到无限滚动加载？</li></ul><p>感谢<a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">vitepress</a>/<a href="https://cn.vuejs.org/api/reactivity-core.html#watch" target="_blank" rel="noreferrer">vue3</a>/<a href="https://www.tailwindcss.cn/" target="_blank" rel="noreferrer">tailwindcss</a>/<a href="https://github.com/ATQQ/sugar-blog" target="_blank" rel="noreferrer">sugar-blog</a>/<a href="https://medium.com/" target="_blank" rel="noreferrer">medium</a></p><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p><img src="https://www.bythewayer.com/img/theme1.webp" alt="博客主题1"><img src="https://www.bythewayer.com/img/theme2.webp" alt="博客主题1"></p><p>定制一款私人主题，基于 vitePress，主题包名称<em>vitepress-theme-wmh</em></p><p>需要满足的功能 todoList::</p><ul><li>[x] 搭建模板，并生成语义化版本，自动发布到 npm，整个流程要规范一点</li><li>[]首页改造</li><li>[x] 文章列表</li><li>[x] 评论</li><li>[x] 布局</li><li>主题模式切换，白天和夜晚模式</li><li>图片预览</li><li>文字总数和阅读时间以及发布时间</li><li>Rss 更好的 seo</li></ul><h2 id="搭建基本模板" tabindex="-1">搭建基本模板 <a class="header-anchor" href="#搭建基本模板" aria-label="Permalink to &quot;搭建基本模板&quot;">​</a></h2><ul><li>搭建 monorepo 仓库，里面包含 2 个 packages，且还需要配置 eslint/changesets 等基础套件</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ packages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│ ├─ template</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│ └─ theme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><p>如果后续还有其他主题的话</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ packages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│ └─ wmhTheme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│ ├─ template</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│ └─ theme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><ul><li><p>theme 主题包，主题的代码仓库</p></li><li><p>template 主题模板，从 git clone 下来就是该文件</p></li></ul><h2 id="充实-theme-主题包-主要工作量" tabindex="-1">充实 theme 主题包，主要工作量 <a class="header-anchor" href="#充实-theme-主题包-主要工作量" aria-label="Permalink to &quot;充实 theme 主题包，主要工作量&quot;">​</a></h2><h2 id="稍微填充下-template-模板" tabindex="-1">稍微填充下 template 模板 <a class="header-anchor" href="#稍微填充下-template-模板" aria-label="Permalink to &quot;稍微填充下 template 模板&quot;">​</a></h2><h3 id="针对-layout-doc-的文章设置" tabindex="-1">针对 layout:doc 的文章设置 <a class="header-anchor" href="#针对-layout-doc-的文章设置" aria-label="Permalink to &quot;针对 layout:doc 的文章设置&quot;">​</a></h3><ul><li>主要是数字，阅读时长以及发布时间，还有评论</li></ul><h3 id="针对-layout-home-级别的设置" tabindex="-1">针对 layout:home 级别的设置 <a class="header-anchor" href="#针对-layout-home-级别的设置" aria-label="Permalink to &quot;针对 layout:home 级别的设置&quot;">​</a></h3><ul><li>首页文章瀑布流展示</li></ul><h3 id="新增归档和订阅界面" tabindex="-1">新增归档和订阅界面 <a class="header-anchor" href="#新增归档和订阅界面" aria-label="Permalink to &quot;新增归档和订阅界面&quot;">​</a></h3><h2 id="_0420-个人博客核心板块" tabindex="-1">0420 个人博客核心板块 <a class="header-anchor" href="#_0420-个人博客核心板块" aria-label="Permalink to &quot;0420 个人博客核心板块&quot;">​</a></h2><ul><li>正文的 md 渲染</li><li>全局搜索</li></ul>`,30)]))}const u=a(l,[["render",r]]);export{m as __pageData,u as default};