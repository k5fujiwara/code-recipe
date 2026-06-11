---
sidebar_position: 6
title: 独自ドメイン設定（Cloudflare + GitHub Pages）
description: code-recipe.com を Cloudflare Registrar で取得し GitHub Pages に紐付ける手順
---

# 独自ドメイン設定（Cloudflare + GitHub Pages）

Code Recipe は **code-recipe.com**（Cloudflare Registrar）を独自ドメインとして使います。

## 全体の流れ

1. Cloudflare で DNS を設定する
2. リポジトリの `url` / `baseUrl` / `CNAME` を独自ドメイン用に変更して push する
3. GitHub リポジトリの **Settings → Pages** で Custom domain を設定する
4. **Enforce HTTPS** を有効にする
5. 表示と `robots.txt` / `sitemap.xml` を確認する

## 1. Cloudflare の DNS 設定

Cloudflare ダッシュボード → **code-recipe.com** → **DNS** → **レコードを追加**。

### ルートドメイン（code-recipe.com）をメインにする場合

GitHub Pages 向けに **A レコード** を 4 つ追加します。

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| A | `@` | `185.199.108.153` | プロキシしない（DNS only）推奨 |
| A | `@` | `185.199.109.153` | プロキシしない |
| A | `@` | `185.199.110.153` | プロキシしない |
| A | `@` | `185.199.111.153` | プロキシしない |

:::tip プロキシ（オレンジ雲）について
初回の HTTPS 設定が不安定になることがあるため、**DNS only（灰色の雲）** で始める人が多いです。安定したら Cloudflare プロキシを検討してください。
:::

### www も使う場合（任意）

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| CNAME | `www` | `k5fujiwara.github.io` | DNS only 推奨 |

`www.code-recipe.com` を `code-recipe.com` にそろえたい場合は、Cloudflare の **リダイレクトルール** で `www` → ルートへ転送します。

## 2. リポジトリ側の設定（済みの内容）

独自ドメイン用に、次が設定されています。

| ファイル | 内容 |
| :--- | :--- |
| `docusaurus.config.ts` | `url: https://code-recipe.com`、`baseUrl: /` |
| `static/CNAME` | `code-recipe.com` |
| `static/robots.txt` | `Sitemap: https://code-recipe.com/sitemap.xml` |

変更後は `git push` して GitHub Actions のデプロイが完了するまで待ちます。

## 3. GitHub Pages で Custom domain

1. リポジトリ [k5fujiwara/code-recipe](https://github.com/k5fujiwara/code-recipe) を開く
2. **Settings → Pages**
3. **Custom domain** に `code-recipe.com` を入力して保存
4. DNS が反映されると **Enforce HTTPS** をオンにする

## 4. 動作確認

- [ ] https://code-recipe.com/ が開く
- [ ] https://code-recipe.com/contact が開く
- [ ] https://code-recipe.com/robots.txt が開く
- [ ] https://code-recipe.com/sitemap.xml が開く
- [ ] ページソースのリンクが `https://code-recipe.com/...` になっている（`/code-recipe/` が残っていない）

## 5. Search Console・AdSense

独自ドメイン反映後は、登録 URL を **https://code-recipe.com/** にそろえます。

- Search Console: **ドメイン プロパティ** `code-recipe.com` または URL プレフィックス
- AdSense: サイト URL を `https://code-recipe.com/`
- Google フォームのプライバシーポリシーリンク: `https://code-recipe.com/privacy-policy`

詳細は [Google AdSense の設定と収益化](./google-adsense-setup) を参照してください。

## ローカル開発の注意

`baseUrl` が `/` になったため、ローカルは次の URL で開きます。

```text
http://localhost:3000/
```

以前の `http://localhost:3000/code-recipe/` ではありません。
