const argv = process.argv;

const lastParam = argv.pop();
module.exports = {
  title: "My Love",
  description: "爱你所爱",
  favicon: "https://www.bythewayer.com/img/logo1.webp",
  lang: "en-US",
  base: lastParam === "vercel" ? "/" : "/love/",
  themeConfig: {
    siteTitle: "My Love",
    head: [["meta", { name: "theme-color", content: "#3c8772" }]],
    nav: [
      { text: "Love", link: "/love/index" },
      { text: "Work", link: "/work/index" },
      { text: "Life", link: "/life/index" },
      // { text: "Child", link: "/child/index" },
      { text: "Thinking", link: "/think/index" },
      {
        text: "blog",
        items: [
          {
            // Title for the section.
            // text: "看看",
            items: [
              { text: "个人博客", link: "https://bythewayer.com" },
              { text: "个人学习", link: "https://bythewayer.com/learn" },
              { text: "个人所爱", link: "https://bythewayer.com/love" },
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
      "/work/": sidebarWork(),
      "/think/": siderbarThink(),
    },
    editLink: {
      pattern: "https://github.com/niaogege/love/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/niaogege/love" }],

    footer: {
      message:
        'Released under the <a href="https://github.com/niaogege/love">MIT License</a>.',
      copyright:
        'Copyright © 2022-present <a href="https://github.com/niaogege/love">WMH</a>',
    },

    algolia: {
      appId: "UTFWSZD8OF",
      apiKey: "2c5c49f778c42feb4c597213bacf4dc9",
      indexName: "bythewayer",
    },
  },
};

function sidebarWork() {
  return [
    {
      text: "Work",
      items: [
        { text: "综述", link: "/work/index" },
        { text: "202211", link: "/work/202211" },
        { text: "202212", link: "/work/202212" },
        { text: "202301", link: "/work/202301" },
        { text: "202302", link: "/work/202302" },
        { text: "202303", link: "/work/202303" },
        { text: "202304", link: "/work/202304" },
        { text: "202305", link: "/work/202305" },
      ],
    },
  ];
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
  ];
}
