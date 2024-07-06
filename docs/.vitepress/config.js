import packageJSON from "../../package.json"
const argv = process.argv
const vitepressVersion = `v${packageJSON.devDependencies.vitepress}`
const lastParam = argv.pop()
module.exports = {
  title: "My Love ",
  description: "爱你所爱",
  base: lastParam === "vercel" ? "/" : "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://www.bythewayer.com/img/logo1.webp",
      },
    ],
  ],
  themeConfig: {
    outline: [2, 4],
    outlineTitle: "On This Page",
    logo: "https://www.bythewayer.com/img/logo1.webp",
    head: [["meta", { name: "theme-color", content: "#3c8772" }]],
    nav: [
      // {
      //   text: vitepressVersion,
      //   link: "https://github.com/vuejs/vitepress",
      // },
      { text: "Child", link: "/child/index" },
      { text: "Work", link: "/work/index" },
      { text: "Love", link: "/love/index" },
      { text: "Life", link: "/life/index" },
      { text: "Thinking", link: "/think/index" },
      { text: "Theme", link: "/theme/index" },
      {
        text: "blog",
        items: [
          {
            // Title for the section.
            // text: "看看",
            items: [
              { text: "个人博客", link: "https://bythewayer.com" },
              { text: "个人学习", link: "http://learn.bythewayer.com" },
              { text: "个人所爱", link: "http://love.bythewayer.com" },
              { text: "VitePress", link: "https://vitepress.vuejs.org/" },
              {
                text: "tailwindcss",
                link: "https://www.tailwindcss.cn/docs/guides/vue-3-vite",
              },
              // {
              //   text: "维护的项目",
              //   link: "http://niaogege.cn/nest-test/#question",
              // },
            ],
          },
        ],
      },
      // {
      //   text: "友链",
      //   items: [
      //     {
      //       // You may also omit the title.
      //       items: [
      //         { text: "Section A Item A", link: "..." },
      //         { text: "Section B Item B", link: "..." },
      //       ],
      //     },
      //   ],
      // },
    ],
    sidebar: {
      "/child": sidebarChild(),
      "/life": sidebarLife(),
      "/work/": sidebarWork(),
      "/think/": siderbarThink(),
      "/theme/": siderbarTheme(),
    },
    editLink: {
      pattern: "https://github.com/niaogege/love/tree/main/docs/:path",
      text: "去 GitHub 上编辑内容",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/niaogege/love" }],
    footer: {
      message:
        'Released under the <a href="https://github.com/niaogege/love">MIT License</a>.',
      copyright:
        'Copyright © 2022-present <a href="https://github.com/niaogege/love">WMH</a>',
    },
    // dosearch
    algolia: {
      appId: "9EWGM3IWY9",
      apiKey: "9880721f367d0e4800fa305ae9ebe0c9",
      indexName: "love-bythewayer",
    },
    lastUpdatedText: "cpp 上次更新",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
}

function sidebarWork() {
  return [
    {
      text: "Work",
      items: [
        { text: "综述", link: "/work/index" },
        { text: "202211", link: "/work/2022/202211" },
        { text: "202212", link: "/work/2022.202212" },
        { text: "202301", link: "/work/2023/202301" },
        { text: "202302", link: "/work/2023/202302" },
        { text: "202303", link: "/work/2023/202303" },
        { text: "202304", link: "/work/2023/202304" },
        { text: "202305", link: "/work/2023/202305" },
        { text: "202306", link: "/work/2023/202306" },
        { text: "202307", link: "/work/2023/202307" },
        { text: "202308", link: "/work/2023/202308" },
        { text: "202309", link: "/work/2023/202309" },
        { text: "202310", link: "/work/2023/202310" },
        { text: "202311", link: "/work/2023/202311" },
        { text: "202312", link: "/work/2023/202312" },
        { text: "202401", link: "/work/2024/202401" },
        { text: "202402", link: "/work/2024/202402" },
        { text: "202403", link: "/work/2024/202403" },
        { text: "202404", link: "/work/2024/202404" },
        { text: "202405", link: "/work/2024/202405" },
        { text: "202406", link: "/work/2024/202406" },
        { text: "202407", link: "/work/2024/202407" },
      ],
    },
  ]
}
function siderbarThink() {
  return [
    {
      text: "Thinking",
      items: [
        { text: "五年之约", link: "/think/index" },
        { text: "目前处境", link: "/think/cur" },
        { text: "想拥有的", link: "/think/goal" },
        { text: "羡慕大佬", link: "/think/exe" },
      ],
    },
  ]
}

function siderbarTheme() {
  return [
    {
      text: "Theme",
      items: [
        { text: "初衷", link: "/theme/index" },
        { text: "规划", link: "/theme/plan" },
        { text: "api", link: "/theme/api" },
      ],
    },
  ]
}

function sidebarLife() {
  return [
    {
      text: "Life",
      items: [
        { text: "综述", link: "/life/index" },
        { text: "food", link: "/life/food" },
        { text: "health", link: "/life/health" },
      ],
    },
  ]
}

function sidebarChild() {
  return [
    {
      text: "Child",
      items: [
        { text: "综述", link: "/child/index" },
        { text: "food", link: "/child/food" },
        { text: "timer", link: "/child/timer" },
        { text: "profile", link: "/child/profile" },
      ],
    },
  ]
}
