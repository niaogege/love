// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./Layout.vue";
import "./custom.css";
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    ctx.app.component("MyGlobalComponent" /* ... */);
  },
};
