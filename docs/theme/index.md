---
layout: doc
title: 定制私人主题包@chendap/vitepress-theme-wmh
---

借鉴：

- [vuejs/theme](https://github.com/vuejs/theme)
- [vitest](https://github.com/vitest-dev/vitest)
- [sugar-blog](https://github.com/ATQQ/sugar-blog)
- [sugarat](https://theme.sugarat.top/)
- [vitepress 中文文档](https://deploy-preview-1593--vitepress-docs.netlify.app/zh/guide/using-vue)
- [vitepress-theme-vuetom](https://toscode.gitee.com/niaogege/vitepress-theme-vuetom)
- 博客主题借鉴[medium](https://medium.com/)- [Lil’Log](https://lilianweng.github.io/)
- [借鉴 tailwindcss 快速开发](https://tailblocks.cc/)

## 初衷

没找到合适的主题博客模板，那就自己做一个喜欢的主题模板。包名 **@chendap/vitepress-theme-wmh**

看到一个静态网站博客生成器[Nextra 2 – Next.js Static Site Generator](https://the-guild.dev/blog/nextra-2).[官网](https://nextra.site/)

## 技术栈

server: nodejs
client: tailwindcss + vue3 + ts + vitepress
npm: changeset

难度还不小，

- vue3/tailwindcss 不怎么熟悉，需要短时间掌握，蛮具有挑战性的
- ssr 如何做到无限滚动加载？

感谢[vitepress](https://vitepress.vuejs.org/)/[vue3](https://cn.vuejs.org/api/reactivity-core.html#watch)/[tailwindcss](https://www.tailwindcss.cn/)/[sugar-blog](https://github.com/ATQQ/sugar-blog)/[medium](https://medium.com/)

## 目标

![博客主题1](https://www.bythewayer.com/img/theme1.webp)
![博客主题1](https://www.bythewayer.com/img/theme2.webp)

定制一款私人主题，基于 vitePress，主题包名称*vitepress-theme-wmh*

需要满足的功能 todoList::

- [x] 搭建模板，并生成语义化版本，自动发布到 npm，整个流程要规范一点
- []首页改造
- [x] 文章列表
- [x] 评论
- [x] 布局
- 主题模式切换，白天和夜晚模式
- 图片预览
- 文字总数和阅读时间以及发布时间
- Rss 更好的 seo

## 搭建基本模板

- 搭建 monorepo 仓库，里面包含 2 个 packages，且还需要配置 eslint/changesets 等基础套件

```md
.
├─ packages
│ ├─ template
│ └─ theme
└─ package.json
```

如果后续还有其他主题的话

```md
.
├─ packages
│ └─ wmhTheme
│ ├─ template
│ └─ theme
└─ package.json
```

- theme 主题包，主题的代码仓库

- template 主题模板，从 git clone 下来就是该文件

## 充实 theme 主题包，主要工作量

## 稍微填充下 template 模板

### 针对 layout:doc 的文章设置

- 主要是数字，阅读时长以及发布时间，还有评论

### 针对 layout:home 级别的设置

- 首页文章瀑布流展示

### 新增归档和订阅界面

## 0420 个人博客核心板块

- 正文的 md 渲染
- 全局搜索
