# 工作日常小记

## 202211

### 28

安装 jenkins 完成之后，启动失败，主要是各种配置环境差异

### 29

- 前端如何拿到用户请求的 ip 地址
- 如何通过 github Action 跑一个 node 应用
- centos 启动 jenkins 搞了好久，也没启动来，头大
  问题记录，感觉有效的[jenkins.service](https://www.cnblogs.com/l48x4264l46/p/16506035.html)
- 经过三次的重装系统，终于把 jenkens 启动起来，主要原因还是 jdk 环境不对导致的，后面谷歌到安装[jdk11](https://www.oracle.com/in/java/technologies/downloads/#java11),遇到类似问题，还是谷歌，感觉解决问题的速度快多了，[Jenkins requires Java versions [8, 11] but you are running with Java 16 from C:\Program Files\Java\jdk-16.0.1](https://stackoverflow.com/questions/69066139/jenkins-requires-java-versions-8-11-but-you-are-running-with-java-16-from-c)
- 需要学习下 docker 的基本使用

### 30

- 继续学习 jenkins 使用和构建

## 202212

### 03

争取任务都干掉，不要荒废周末的大好时间,

从 github 传文件到私服插件 https://github.com/wlixcc/SFTP-Deploy-Action 老是传送失败

- 基于 githubAction 实现前端项目的自动化测试/发布和部署(已完成)
- 基于 githubAction 实现 Nodejs 项目的自动化测试/发布和部署(待验证)
- 基于 githubAction 实现 npm 包自动发布

### 04

- git 创建远程分支时报错
- 配置 nginx 时 location 不生效

### 05

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
