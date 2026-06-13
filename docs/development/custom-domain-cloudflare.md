---
sidebar_position: 6
title: 独自ドメイン設定（Cloudflare + GitHub Pages）
description: code-recipes.com を Cloudflare で取得し GitHub Pages に紐付ける手順
---

# 独自ドメイン設定（Cloudflare + GitHub Pages）

Code Recipe の独自ドメインは **code-recipes.com**（Cloudflare Registrar）です。

サイト名は **Code Recipe** ですが、取得できたドメインに合わせて URL は `code-recipes.com` を使います。

## 全体の流れ

1. Cloudflare で DNS を設定する
2. リポジトリの設定を独自ドメイン用にして push する（済）
3. GitHub **Settings → Pages** で Custom domain を設定する
4. **Enforce HTTPS** を有効にする
5. 表示と `robots.txt` / `sitemap.xml` を確認する

## 1. Cloudflare の DNS 設定

Cloudflare ダッシュボード → **code-recipes.com** → **DNS** → **レコードを追加**。

### ルートドメイン（code-recipes.com）をメインにする場合

GitHub Pages 向けに **A レコード** を 4 つ追加します。

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| A | `@` | `185.199.108.153` | DNS only 推奨 |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

:::tip プロキシ（オレンジ雲）
初回の HTTPS 設定は **DNS only（灰色の雲）** で始めると安定しやすいです。
:::

### www も使う場合（任意）

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| CNAME | `www` | `k5fujiwara.github.io` | DNS only 推奨 |

`www.code-recipes.com` をルートにそろえる場合は、Cloudflare の **リダイレクトルール** を使います。

## 2. リポジトリ側の設定（済）

| ファイル | 内容 |
| :--- | :--- |
| `docusaurus.config.ts` | `customDomain: code-recipes.com` |
| `static/CNAME` | `code-recipes.com` |
| `static/robots.txt` | `Sitemap: https://code-recipes.com/sitemap.xml` |

## 3. GitHub Pages で Custom domain

1. [k5fujiwara/code-recipe](https://github.com/k5fujiwara/code-recipe) → **Settings → Pages**
2. **Custom domain** に `code-recipes.com` を入力して保存
3. DNS 反映後、**Enforce HTTPS** をオン

## 4. 動作確認

- [ ] https://code-recipes.com/ が開く
- [ ] https://code-recipes.com/contact が開く
- [ ] https://code-recipes.com/robots.txt が開く
- [ ] https://code-recipes.com/sitemap.xml が開く
- [ ] ページソースのリンクが `https://code-recipes.com/...` になっている

## 5. Search Console の URL 検査で「リダイレクト エラー」

GitHub Pages は、末尾スラッシュのない URL を **スラッシュ付き** に 301 リダイレクトします。

```text
https://code-recipes.com/docs/development/github-signup
  → 301
https://code-recipes.com/docs/development/github-signup/
```

Search Console でスラッシュなしの URL を検査すると **リダイレクト エラー** と出ることがあります。

**対処:** URL 検査・インデックス登録では **末尾に `/` を付けた URL** を使います。

```text
https://code-recipes.com/docs/development/github-signup/
```

## 6. Search Console・AdSense・フォーム

登録 URL を **https://code-recipes.com/** にそろえます。

| サービス | URL の例 |
| :--- | :--- |
| Search Console | ドメイン `code-recipes.com` または URL プレフィックス |
| AdSense | `https://code-recipes.com/` |
| Google フォームのプライバシーリンク | `https://code-recipes.com/privacy-policy` |

詳細は [Google AdSense の設定と収益化](./google-adsense-setup) を参照してください。

## ローカル開発

`baseUrl` が `/` のため、ローカルは次で開きます。

```text
http://localhost:3000/
```
