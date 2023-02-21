---
layout: doc
title: 定制私人主题包
---

借鉴：

- [vuejs/theme](https://github.com/vuejs/theme)
- [vitest](https://github.com/vitest-dev/vitest)
- [sugar-blog](https://github.com/ATQQ/sugar-blog)
- [sugarat](https://theme.sugarat.top/)
- [vitepress 中文文档](https://deploy-preview-1593--vitepress-docs.netlify.app/zh/guide/using-vue)
- [vitepress-theme-vuetom](https://toscode.gitee.com/niaogege/vitepress-theme-vuetom)

# 目标

定制一款私人主题，基于 vitePress，主题包名称*vitepress-theme-wmh*

需要满足的功能 todoList::

- [] 搭建模板，并生成语义化版本，自动发布到 npm，整个流程要规范一点
- 首页改造
- [x] 文章列表
- [x] 评论
- [x] 布局
- [] 友联
- 图片预览
- 阅读文字和时间计算
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
