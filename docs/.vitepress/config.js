const argv = process.argv;

console.log(argv, "ARGV");
module.exports = {
  title: "My Love",
  description: "爱你所爱",
  lang: "en-US",
  base: "/love/",
  themeConfig: {
    siteTitle: "My Love",
    head: [["meta", { name: "theme-color", content: "#3c8772" }]],
    nav: [
      { text: "Love", link: "/love/index" },
      { text: "Work", link: "/work/days" },
      { text: "Life", link: "/life/index" },
      { text: "Child", link: "/child/index" },
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
    sidebar: {
      "/work/": sidebarWork(),
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
  },
};

function sidebarWork() {
  return [
    {
      text: "Work",
      items: [
        { text: "日常小记", link: "/work/days" },
        { text: "目前处境", link: "/work/cur" },
        { text: "想拥有的", link: "/work/goal" },
        { text: "羡慕大佬", link: "/work/exe" },
      ],
    },
  ];
}
