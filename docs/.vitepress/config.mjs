import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Yikes Xavier",
  base: "/blog/",
  description: "Yikes Xavier的全栈技术补给站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "主页", link: "/" },
      {
        text: "文档",
        items: [
          { text: "HTML", link: "/article/html" },
          { text: "CSS", link: "/article/css" },
          { text: "Emmet", link: "/article/emmet" },
          { text: "JS", link: "/article/js" },
          { text: "ES6", link: "/article/es6" },
          { text: "ES7", link: "/article/es7" },
          { text: "ES8", link: "/article/es8" },
          { text: "VUE", link: "/article/vue" },
          { text: "AJAX", link: "/article/ajax" },
          { text: "Node JS", link: "/article/nodejs" },
          { text: "Dart", link: "/article/daret" },
          { text: "Flutter", link: "/article/flutter" },
        ],
      },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          { text: "HTML", link: "/article/html" },
          { text: "CSS", link: "/article/css" },
          { text: "Emmet", link: "/article/emmet" },
          { text: "JS", link: "/article/js" },
          { text: "ES6", link: "/article/es6" },
          { text: "ES7", link: "/article/es7" },
          { text: "ES8", link: "/article/es8" },
          { text: "VUE", link: "/article/vue" },
          { text: "AJAX", link: "/article/ajax" },
          { text: "Node JS", link: "/article/nodejs" },
          { text: "Dart", link: "/article/daret" },
          { text: "Flutter", link: "/article/flutter" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
