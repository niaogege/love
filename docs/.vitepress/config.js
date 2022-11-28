module.exports = {
  title: "My Love",
  description: "爱你所爱",
  lang: "en-US",
  base: "/love/",
  themeConfig: {
    siteTitle: "My Love",
    head: [["meta", { name: "theme-color", content: "#3c8772" }]],
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "技术博客",
        items: [
          {
            // Title for the section.
            // text: "看看",
            items: [
              { text: "个人博客", link: "https://niaogege.cn/cpp-ui/" },
              {
                text: "维护的项目",
                link: "http://niaogege.cn/nest-test/#question",
              },
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
    // sidebar: [
    //   {
    //     text: "Life",
    //     items: [
    //       // This shows `/guide/index.md` page.
    //       { text: "Introduction", link: "/life/" },
    //     ],
    //   },
    // ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/niaogege/love" }],

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
    },
  },
};
