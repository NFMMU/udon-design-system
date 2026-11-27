# udon-design-system

全国もちもちうどん連盟のデザインシステム リファレンス。Markdown（MDX）ベースの Astro + Starlight。

## 開発

```bash
npm install
npm run dev
```

## 構成

- `src/content/docs/` — 本文（MDX）
  - `index.mdx` — 概要
  - `getting-started.mdx` — 導入と Tailwind
  - `foundations/` — 色・タイポグラフィ・アイコン
  - `components/` — 27コンポーネントの個別ページ
  - `tokens.mdx` — トークン一覧

## 方針

- 仕様は Markdown に書き、Penpot は見本（アセット）として使う
- 例は実際の `@nfmmu/udon-react` を描画する
- 長い説明より、状態・使いどころ・注意を短く書く
