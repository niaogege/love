# 工作日常小记

# 202211

## 1128

安装 jenkins 完成之后，启动失败，主要是各种配置环境差异

## 1129

- 前端如何拿到用户请求的 ip 地址
- 如何通过 github Action 跑一个 node 应用
- centos 启动 jenkins 搞了好久，也没启动来，头大
  问题记录，感觉有效的[jenkins.service](https://www.cnblogs.com/l48x4264l46/p/16506035.html)
- 经过三次的重装系统，终于把 jenkens 启动起来，主要原因还是 jdk 环境不对导致的，后面谷歌到安装[jdk11](https://www.oracle.com/in/java/technologies/downloads/#java11),遇到类似问题，还是谷歌，感觉解决问题的速度快多了，[Jenkins requires Java versions [8, 11] but you are running with Java 16 from C:\Program Files\Java\jdk-16.0.1](https://stackoverflow.com/questions/69066139/jenkins-requires-java-versions-8-11-but-you-are-running-with-java-16-from-c)
- 需要学习下 docker 的基本使用

## 1130

- 继续学习 jenkins 使用和构建

## 1203

争取任务都干掉，不要荒废周末的大好时间,

从 github 传文件到私服插件 https://github.com/wlixcc/SFTP-Deploy-Action 老是传送失败

- 基于 githubAction 实现前端项目的自动化测试/发布和部署(已完成)
- 基于 githubAction 实现 Nodejs 项目的自动化测试/发布和部署(待验证)
- 基于 githubAction 实现 npm 包自动发布

## 1204

- git 创建远程分支时报错
- 配置 nginx 时 location 不生效

## 1205

哈哈哈，周六瞎折腾搞得 nginx 配置不生效的问题找到了，学到了一点:**学会看日志，报错是有原因的**，

之前是这么配置的

```bash
  location /love {
    root /www/web/record/dist;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
```

报错
2022/12/05 14:14:27 [error] 17800#17800: \*282 open() "/www/web/record/dist/love" failed (2: No such file or directory), client: 43.247.101.196, server: \_, request: "GET /record HTTP/1.1", host: "111.230.199.157"

解决：

```js
  location /love {
    root /www/web/;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
```

deploy.yml 脚本内容如下

```bash
name: Deploy

on:
  push:
    branches:
      - main

env:
  TARGET_DIR: /www/web/love

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

      - name: Deploy Github Page
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist

      - name: Deploy Server
        uses: cross-the-world/ssh-scp-ssh-pipelines@latest
        env:
          WELCOME: "ssh scp ssh pipelines CPP server"
          LASTSSH: "after copying"
        with:
          host: "111.230.199.157"
          user: "root"
          pass: ${{ secrets.FTP_PASSWORD }}
          connect_timeout: 20s
          first_ssh: |-
            rm -rf $TARGET_DIR
            echo $WELCOME
            mkdir -p $TARGET_DIR
          scp: |-
            './docs/.vitepress/dist/*' => $TARGET_DIR/
          last_ssh: |-
            echo $LASTSSH

```

## 1206

今天看到了云原生/BFF/severless,卧槽，有时间实践实践，搞起来，向大佬学习

- [vercel](https://vercel.com)
- [Vercel?](https://zhuanlan.zhihu.com/p/347990778)
- [mongodb](https://cloud.mongodb.com/v2/638f09013a851a537a5a8ade#clusters)
- [hexo](https://hexo.io/themes/)

## 1207

人总是贪婪的，看到这么多不会的，都想一下子掌握，怎么可能呢，还是要遵循大自然规律的，循序渐进，1 月 5 日记得用掉云开发体验券

[云开发 CloudBase](https://console.cloud.tencent.com/tcb/env/index?rid=4)

目前想学习的有点多，感觉凌乱了，千万不要慌，要沉下心来

- 个人域名还是配置下 https 协议，不然老是报各种未知问题(待完成)
- LRU,复习下 LRU 算法
- adb 获取当前设备 UUID

```bash
// 查看当前链接的手机设备
adb devices

cd /Users/xmly/Library/HarmonyOS/Sdk/toolchains

// 获取手机uuid
adb shell bm get --udid
```

- 配置 vercel 都是英文，真是不太适应，[vercel setting](https://vercel.com/niaogege/love/settings)，配置了好久都没配置好

## 1208

### vercel 总算是配置完毕，部署成功，访问地址[vercel-love](https://love-niaogege.vercel.app/),

- 有一个问题就是，不能对子路径进行配置，我现在的需求是：
  bythewayer.com/love 访问个人记录网站，vercel 如果也想配置成子路径，比如这种 **https://love-niaogege.vercel.app/love** 应该如何处理，现在解决办法是根据分支不同，主分支还是打包到/love 路径下，vercel 分支则是打包到跟路径下
- 另外一个问题是 **\*.vercel.app**已被 DNS 污染，基于此搭建的评论 server 端 API 无法访问，目前可行的解决方案只有绑定自己的域名。

  ### [MongoDb](https://cloud.mongodb.com/v2/638f09013a851a537a5a8ade#clusters) 先放一放，把 Docker 和 K8s 基础知识学习学习,B 站有很多阔以学习的知识点

  ### 个人博客迁移下，原先的代码好久没有变更，打算另起炉灶 4.简历目标上增加 2 个小子项

  - 了解前端部署
  - 了解 CI/CD?
  - 了解 Docker?
    就看这几天的背书了？

  ###如何使用阿里云的 OSS 对象存储服务？

  ## 1209

  ### 自己测试用，新建了一个 cpp-demo 镜像，发布到了 dockerhub,如何在另一台机器用起来呢

```bash

// 列出所有镜像
docker images ls

// 删除images，通过image的id来指定删除谁
docker rmi <image id>

// 生成镜像
// 最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。
docker image build -t next-demo:0.0.1 .

// 从远程拉取镜像
docker image pull niaogege/next-demo:0.0.2

# 查出容器的 ID
docker container ls --all

# 删除指定的容器文件
docker container rm [containerID]

# 停止当前containerID
docker container kill [containerID]

## 生成容器
docker container run -p 8000:3000 -it cpp-demo
docker container run -p 3002:3002 -it niaogege/next-demo:0.0.2

# 查看镜像内的文件列表
docker exec -it [containerID] /bin/bash

# 查看当前镜像内的文件
docker run -it --entrypoint sh <镜像名称>
```

### Nextjs,如何部署 Nextjs 项目

- nextjs 默认启动端口 3000，如何设置新的端口号，以及如何结合 pm2 守护进程

```json
  "scripts": {
    "dev": "next dev -p 3002",
    "build": "next build",
    "start": "next start -p 3002",
    "lint": "next lint",
    // --name 应用名称
    "server": "pm2-docker start npm --name next-cpp-demo -- run start"
  },
```

```bash
server {
      listen 80;
      server_name www.bythewayer.com;
      root /usr/share/nginx/html;
      # 个人生活
      location  /love {
          root /www/web/;
          index  index.html index.htm;
		gzip on;
		# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩
		gzip_min_length 1k;

		# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明
		gzip_comp_level 2;

		# 进行压缩的文件类型。javascript有多种形式，后面的图片压缩不需要的可以自行删除
		gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

		# 是否在http header中添加Vary: Accept-Encoding，建议开启
		gzip_vary on;

		# 设置压缩所需要的缓冲区大小
		gzip_buffers 4 16k;
          try_files $uri $uri/ /index.html;
      }
      # 个人学习
      location  /learn {
          root /www/web/;
          index  index.html index.htm;
          try_files $uri $uri/ /index.html;
      }
      # docker 调试
      # koa接口调试
      location /koa {
          proxy_pass http://localhost:8888;
      }
      # api接口调试
      location /api {
          proxy_pass http://localhost:3000;
      }
      # nextjs 项目
      location /next {
        proxy_pass http://localhost:3001;
      }
  }
```

### 新增 tcp 端口，记得重启防火墙

```bash
# 开放某个端口，带--permanent参数是永久开放
firewall-cmd --zone=public --add-port=3001/tcp --permanent

每次开启完之后记得重启防火墙

# 重启
systemctl reload firewalld

# 查看开启的端口
firewall-cmd --list-ports

# --------------
# 移除开放的端口
firewall-cmd --zone=public --remove-port=8080/tcp --permanent
```

## 1210

- Nodejs 中的 cluster 模式和 fork 模式区别
