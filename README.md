# 根据 vitePress 构建而来

> 感谢尤大提供这么好的技术支持

- [vitepress](https://vitepress.vuejs.org/)
- [setup-node](https://github.com/actions/setup-node#caching-packages-dependencies)

## 再次复习一遍发布脚本

githubAction 配置 deploy.yml, 里面会用到拉取代码/下载 node 等常用的 action 等，脚本里阔以自定义打包步骤

```yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x]
    steps:
      - name: Checkout # 步骤1
        uses: actions/checkout@v1 # 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions
      - name: Use Node.js # 步骤2
        uses: actions/setup-node@v1 # 作用：安装nodejs
        with:
          node-version: ${{ matrix.node-version }} # 版本
      - run: npm install --frozen-lockfile
      - name: Build
        run: npm run docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```
