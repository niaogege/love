---
layout: doc
title: 工作记录
---

# 来源于工作，拓展所见所闻 :100:

---

- 工作之余，记录日常所思所想所做,现在离全栈还差 k8s 和数据库相关，不能放弃，1212
- 未来不可期，把握当下 :cn:

[[toc]]

## 工作小记

- [202211](./202211.md)
- [202212](./202212.md)
- [202301](./202301.md)
- [202302](./202302.md)
- [202303](./202303.md)
- [202304](./202304.md)
- [202305](./202305.md)
- [202306](./202306.md)
- [202307](./202307.md)
- [202308](./202308.md)

## vitepress markdown 写作语法

### Custom Containers

Custom containers can be defined by their types, titles, and contents.

### Default Title

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Emoji 🎉

```md
:tada: :100:
```

output:
:tada: :100:

A list of all [emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

### Table of Contents

**Input**

```
[[toc]]
```

### Code groups

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

### [Markdown File Inclusion](https://vitepress.vuejs.org/guide/markdown#markdown-file-inclusion)

You can include a markdown file in another markdown file like this:

一个 md 文档中包含另一个 md 文档

`!-- @include: ./202303.md --`
