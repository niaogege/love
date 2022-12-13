import{_ as s,c as n,o as a,d as l}from"./app.5e992baa.js";const F=JSON.parse('{"title":"202212","description":"","frontmatter":{},"headers":[{"level":2,"title":"1203","slug":"_1203","link":"#_1203","children":[]},{"level":2,"title":"1204","slug":"_1204","link":"#_1204","children":[]},{"level":2,"title":"1205","slug":"_1205","link":"#_1205","children":[]},{"level":2,"title":"1206","slug":"_1206","link":"#_1206","children":[]},{"level":2,"title":"1207","slug":"_1207","link":"#_1207","children":[]},{"level":2,"title":"1208","slug":"_1208","link":"#_1208","children":[{"level":3,"title":"vercel 总算是配置完毕，部署成功，访问地址vercel-love,","slug":"vercel-总算是配置完毕-部署成功-访问地址vercel-love","link":"#vercel-总算是配置完毕-部署成功-访问地址vercel-love","children":[]},{"level":3,"title":"MongoDb 先放一放，把 Docker 和 K8s 基础知识学习学习,B 站有很多阔以学习的知识点","slug":"mongodb-先放一放-把-docker-和-k8s-基础知识学习学习-b-站有很多阔以学习的知识点","link":"#mongodb-先放一放-把-docker-和-k8s-基础知识学习学习-b-站有很多阔以学习的知识点","children":[]},{"level":3,"title":"个人博客迁移下，原先的代码好久没有变更，打算另起炉灶 4.简历目标上增加 2 个小子项","slug":"个人博客迁移下-原先的代码好久没有变更-打算另起炉灶-4-简历目标上增加-2-个小子项","link":"#个人博客迁移下-原先的代码好久没有变更-打算另起炉灶-4-简历目标上增加-2-个小子项","children":[]}]},{"level":2,"title":"1209","slug":"_1209","link":"#_1209","children":[{"level":3,"title":"自己测试用，新建了一个 cpp-demo 镜像，发布到了 dockerhub,如何在另一台机器用起来呢","slug":"自己测试用-新建了一个-cpp-demo-镜像-发布到了-dockerhub-如何在另一台机器用起来呢","link":"#自己测试用-新建了一个-cpp-demo-镜像-发布到了-dockerhub-如何在另一台机器用起来呢","children":[]},{"level":3,"title":"Nextjs,如何部署 Nextjs 项目","slug":"nextjs-如何部署-nextjs-项目","link":"#nextjs-如何部署-nextjs-项目","children":[]},{"level":3,"title":"新增 tcp 端口，记得重启防火墙","slug":"新增-tcp-端口-记得重启防火墙","link":"#新增-tcp-端口-记得重启防火墙","children":[]}]},{"level":2,"title":"1210","slug":"_1210","link":"#_1210","children":[]},{"level":2,"title":"1211","slug":"_1211","link":"#_1211","children":[]},{"level":2,"title":"1212","slug":"_1212","link":"#_1212","children":[]}],"relativePath":"work/202212.md"}'),p={name:"work/202212.md"},e=l(`<h1 id="_202212" tabindex="-1">202212 <a class="header-anchor" href="#_202212" aria-hidden="true">#</a></h1><h2 id="_1203" tabindex="-1">1203 <a class="header-anchor" href="#_1203" aria-hidden="true">#</a></h2><p>争取任务都干掉，不要荒废周末的大好时间,</p><p>从 github 传文件到私服插件 <a href="https://github.com/wlixcc/SFTP-Deploy-Action" target="_blank" rel="noreferrer">https://github.com/wlixcc/SFTP-Deploy-Action</a> 老是传送失败</p><ul><li>基于 githubAction 实现前端项目的自动化测试/发布和部署(已完成)</li><li>基于 githubAction 实现 Nodejs 项目的自动化测试/发布和部署(已完成)</li><li>基于 githubAction 实现 npm 包自动发布</li></ul><h2 id="_1204" tabindex="-1">1204 <a class="header-anchor" href="#_1204" aria-hidden="true">#</a></h2><ul><li>git 创建远程分支时报错</li><li>配置 nginx 时 location 不生效</li></ul><h2 id="_1205" tabindex="-1">1205 <a class="header-anchor" href="#_1205" aria-hidden="true">#</a></h2><p>哈哈哈，周六瞎折腾搞得 nginx 配置不生效的问题找到了，学到了一点:<strong>学会看日志，报错是有原因的</strong>，</p><p>之前是这么配置的</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  location /love </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /www/web/record/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>报错 2022/12/05 14:14:27 [error] 17800#17800: *282 open() &quot;/www/web/record/dist/love&quot; failed (2: No such file or directory), client: 43.247.101.196, server: _, request: &quot;GET /record HTTP/1.1&quot;, host: &quot;111.230.199.157&quot;</p><p>解决：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  location </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">love </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">/;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">try_files</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$uri</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$uri</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>deploy.yml 脚本内容如下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">env:</span></span>
<span class="line"><span style="color:#A6ACCD;">  TARGET_DIR: /www/web/love</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    strategy:</span></span>
<span class="line"><span style="color:#A6ACCD;">      matrix:</span></span>
<span class="line"><span style="color:#A6ACCD;">        node-version: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">16.x</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Checkout </span><span style="color:#676E95;"># 步骤1</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/checkout@v1 </span><span style="color:#676E95;"># 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Use Node.js </span><span style="color:#676E95;"># 步骤2</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/setup-node@v1 </span><span style="color:#676E95;"># 作用：安装nodejs</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ matrix.node-version </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">} </span><span style="color:#676E95;"># 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">      - run: npm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: npm run docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy Github Page</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          github_token: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          publish_dir: docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy Server</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: cross-the-world/ssh-scp-ssh-pipelines@latest</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          WELCOME: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ssh scp ssh pipelines CPP server</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          LASTSSH: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">after copying</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          host: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">111.230.199.157</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          user: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          pass: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.FTP_PASSWORD </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          connect_timeout: 20s</span></span>
<span class="line"><span style="color:#A6ACCD;">          first_ssh: </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-</span></span>
<span class="line"><span style="color:#A6ACCD;">            rm -rf </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">TARGET_DIR</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">WELCOME</span></span>
<span class="line"><span style="color:#A6ACCD;">            mkdir -p </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">TARGET_DIR</span></span>
<span class="line"><span style="color:#A6ACCD;">          scp: </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./docs/.vitepress/dist/*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">TARGET_DIR/</span></span>
<span class="line"><span style="color:#A6ACCD;">          last_ssh: </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LASTSSH</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_1206" tabindex="-1">1206 <a class="header-anchor" href="#_1206" aria-hidden="true">#</a></h2><p>今天看到了云原生/BFF/severless,卧槽，有时间实践实践，搞起来，向大佬学习</p><ul><li><a href="https://vercel.com" target="_blank" rel="noreferrer">vercel</a></li><li><a href="https://zhuanlan.zhihu.com/p/347990778" target="_blank" rel="noreferrer">Vercel?</a></li><li><a href="https://cloud.mongodb.com/v2/638f09013a851a537a5a8ade#clusters" target="_blank" rel="noreferrer">mongodb</a></li><li><a href="https://hexo.io/themes/" target="_blank" rel="noreferrer">hexo</a></li></ul><h2 id="_1207" tabindex="-1">1207 <a class="header-anchor" href="#_1207" aria-hidden="true">#</a></h2><p>人总是贪婪的，看到这么多不会的，都想一下子掌握，怎么可能呢，还是要遵循大自然规律的，循序渐进，1 月 5 日记得用掉云开发体验券</p><p><a href="https://console.cloud.tencent.com/tcb/env/index?rid=4" target="_blank" rel="noreferrer">云开发 CloudBase</a></p><p>目前想学习的有点多，感觉凌乱了，千万不要慌，要沉下心来</p><ul><li>个人域名还是配置下 https 协议，不然老是报各种未知问题(待完成)</li><li>LRU,复习下 LRU 算法</li><li>adb 获取当前设备 UUID</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 查看当前链接的手机设备</span></span>
<span class="line"><span style="color:#A6ACCD;">adb devices</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /Users/xmly/Library/HarmonyOS/Sdk/toolchains</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 获取手机uuid</span></span>
<span class="line"><span style="color:#A6ACCD;">adb shell bm get --udid</span></span>
<span class="line"></span></code></pre></div><ul><li>配置 vercel 都是英文，真是不太适应，<a href="https://vercel.com/niaogege/love/settings" target="_blank" rel="noreferrer">vercel setting</a>，配置了好久都没配置好</li></ul><h2 id="_1208" tabindex="-1">1208 <a class="header-anchor" href="#_1208" aria-hidden="true">#</a></h2><h3 id="vercel-总算是配置完毕-部署成功-访问地址vercel-love" tabindex="-1">vercel 总算是配置完毕，部署成功，访问地址<a href="https://love-niaogege.vercel.app/" target="_blank" rel="noreferrer">vercel-love</a>, <a class="header-anchor" href="#vercel-总算是配置完毕-部署成功-访问地址vercel-love" aria-hidden="true">#</a></h3><ul><li><p>有一个问题就是，不能对子路径进行配置，我现在的需求是： <a href="http://bythewayer.com/love" target="_blank" rel="noreferrer">bythewayer.com/love</a> 访问个人记录网站，vercel 如果也想配置成子路径，比如这种 <strong><a href="https://love-niaogege.vercel.app/love" target="_blank" rel="noreferrer">https://love-niaogege.vercel.app/love</a></strong> 应该如何处理，现在解决办法是根据分支不同，主分支还是打包到/love 路径下，vercel 分支则是打包到跟路径下</p></li><li><p>另外一个问题是 <strong>*.vercel.app</strong>已被 DNS 污染，基于此搭建的评论 server 端 API 无法访问，目前可行的解决方案只有绑定自己的域名。</p><h3 id="mongodb-先放一放-把-docker-和-k8s-基础知识学习学习-b-站有很多阔以学习的知识点" tabindex="-1"><a href="https://cloud.mongodb.com/v2/638f09013a851a537a5a8ade#clusters" target="_blank" rel="noreferrer">MongoDb</a> 先放一放，把 Docker 和 K8s 基础知识学习学习,B 站有很多阔以学习的知识点 <a class="header-anchor" href="#mongodb-先放一放-把-docker-和-k8s-基础知识学习学习-b-站有很多阔以学习的知识点" aria-hidden="true">#</a></h3><h3 id="个人博客迁移下-原先的代码好久没有变更-打算另起炉灶-4-简历目标上增加-2-个小子项" tabindex="-1">个人博客迁移下，原先的代码好久没有变更，打算另起炉灶 4.简历目标上增加 2 个小子项 <a class="header-anchor" href="#个人博客迁移下-原先的代码好久没有变更-打算另起炉灶-4-简历目标上增加-2-个小子项" aria-hidden="true">#</a></h3><ul><li>了解前端部署</li><li>了解 CI/CD?</li><li>了解 Docker? 就看这几天的背书了？</li></ul><p>###如何使用阿里云的 OSS 对象存储服务？</p><h2 id="_1209" tabindex="-1">1209 <a class="header-anchor" href="#_1209" aria-hidden="true">#</a></h2><h3 id="自己测试用-新建了一个-cpp-demo-镜像-发布到了-dockerhub-如何在另一台机器用起来呢" tabindex="-1">自己测试用，新建了一个 cpp-demo 镜像，发布到了 dockerhub,如何在另一台机器用起来呢 <a class="header-anchor" href="#自己测试用-新建了一个-cpp-demo-镜像-发布到了-dockerhub-如何在另一台机器用起来呢" aria-hidden="true">#</a></h3></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 列出所有镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 删除images，通过image的id来指定删除谁</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">image id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 生成镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">// 最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。</span></span>
<span class="line"><span style="color:#A6ACCD;">docker image build -t next-demo:0.0.1 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 从远程拉取镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker image pull niaogege/next-demo:0.0.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 查出容器的 ID</span></span>
<span class="line"><span style="color:#A6ACCD;">docker container ls --all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除指定的容器文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker container rm </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">containerID</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 停止当前containerID</span></span>
<span class="line"><span style="color:#A6ACCD;">docker container </span><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">containerID</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## 生成容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker container run -p 8000:3000 -it cpp-demo</span></span>
<span class="line"><span style="color:#A6ACCD;">docker container run -p 3002:3002 -it niaogege/next-demo:0.0.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 查看镜像内的文件列表</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">containerID</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 查看当前镜像内的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -it --entrypoint sh </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">镜像名称</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="nextjs-如何部署-nextjs-项目" tabindex="-1">Nextjs,如何部署 Nextjs 项目 <a class="header-anchor" href="#nextjs-如何部署-nextjs-项目" aria-hidden="true">#</a></h3><ul><li>nextjs 默认启动端口 3000，如何设置新的端口号，以及如何结合 pm2 守护进程</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next dev -p 3002</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next start -p 3002</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next lint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// --name 应用名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pm2-docker start npm --name next-cpp-demo -- run start</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      listen 80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      server_name www.bythewayer.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      root /usr/share/nginx/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 个人生活</span></span>
<span class="line"><span style="color:#A6ACCD;">      location  /love </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          root /www/web/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;"># 启用gzip压缩的最小文件，小于设置值的文件将不会压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip_min_length 1k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;"># gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip_comp_level 2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;"># 进行压缩的文件类型。javascript有多种形式，后面的图片压缩不需要的可以自行删除</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;"># 是否在http header中添加Vary: Accept-Encoding，建议开启</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip_vary on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;"># 设置压缩所需要的缓冲区大小</span></span>
<span class="line"><span style="color:#A6ACCD;">		gzip_buffers 4 16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 个人学习</span></span>
<span class="line"><span style="color:#A6ACCD;">      location  /learn </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          root /www/web/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># docker 调试</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># koa接口调试</span></span>
<span class="line"><span style="color:#A6ACCD;">      location /koa </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          proxy_pass http://localhost:8888</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># api接口调试</span></span>
<span class="line"><span style="color:#A6ACCD;">      location /api </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          proxy_pass http://localhost:3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># nextjs 项目</span></span>
<span class="line"><span style="color:#A6ACCD;">      location /next </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://localhost:3001</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="新增-tcp-端口-记得重启防火墙" tabindex="-1">新增 tcp 端口，记得重启防火墙 <a class="header-anchor" href="#新增-tcp-端口-记得重启防火墙" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 开放某个端口，带--permanent参数是永久开放</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=3001/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">每次开启完之后记得重启防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重启</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 查看开启的端口</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --list-ports</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># --------------</span></span>
<span class="line"><span style="color:#676E95;"># 移除开放的端口</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --remove-port=8080/tcp --permanent</span></span>
<span class="line"></span></code></pre></div><h2 id="_1210" tabindex="-1">1210 <a class="header-anchor" href="#_1210" aria-hidden="true">#</a></h2><ul><li>Nodejs 中的 cluster 模式和 fork 模式区别</li><li>docker 部署前端 nodejs 项目</li><li>注重身体健康和眼睛健康(上了年龄没办法，比不上小年轻了)</li></ul><h2 id="_1211" tabindex="-1">1211 <a class="header-anchor" href="#_1211" aria-hidden="true">#</a></h2><ul><li>docker-compose 学习</li><li>docerk 高效部署</li></ul><h2 id="_1212" tabindex="-1">1212 <a class="header-anchor" href="#_1212" aria-hidden="true">#</a></h2><ul><li>域名还是搞下 https 吧，省的老是各种提示</li><li>nextjs 项目部署</li><li>docker-compose 配置学习</li><li>nginx 配置问题 现象：访问<a href="http://www.bythewayer.com/learn/react%E7%BD%91%E7%AB%99%EF%BC%8C%E5%88%B7%E6%96%B0%E4%B9%8B%E5%90%8E%E6%98%BE%E7%A4%BAnginx" target="_blank" rel="noreferrer">http://www.bythewayer.com/learn/react网站，刷新之后显示nginx</a> 页面，nginx.conf 增加配置问题解决:</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">        location  /learn </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> /www/web/learn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">#error_page  /wx/index.html;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># 这句话啥意思</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">-e </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_filename</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                rewrite ^/</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;"> /learn/index.html last</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span></code></pre></div>`,43),o=[e];function c(t,r,i,D,y,C){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
