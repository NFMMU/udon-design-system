import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nfmmu.github.io",
  base: "/udon-design-system",
  integrations: [
    starlight({
      title: "全国もちもちうどん連盟 デザインシステム",
      description: "連盟のすべてのサービスで使う共通の作法。",
      defaultLocale: "ja",
      locales: { root: { label: "日本語", lang: "ja" } },
      customCss: ["./src/styles/global.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/nfmmu/udon-design-system" },
      ],
      sidebar: [
        { label: "はじめに", items: [{ label: "概要", slug: "index" }, { label: "導入", slug: "getting-started" }] },
        { label: "基本要素", items: [{ label: "色", slug: "foundations/color" }, { label: "タイポグラフィ", slug: "foundations/typography" }, { label: "アイコン", slug: "foundations/icons" }] },
        { label: "コンポーネント", autogenerate: { directory: "components" } },
        { label: "リソース", items: [{ label: "デザイントークン", slug: "tokens" }] },
      ],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ["@nfmmu/udon-react"] },
  },
});
