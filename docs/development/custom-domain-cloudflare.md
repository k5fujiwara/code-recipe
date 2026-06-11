---
sidebar_position: 6
title: 独自ドメイン設定（Cloudflare + GitHub Pages）
description: Cloudflare Registrar でドメインを取得し GitHub Pages に紐付ける手順
---

# 独自ドメイン設定（Cloudflare + GitHub Pages）

Code Recipe を独自ドメインで公開する手順です。Cloudflare Registrar でドメインを取得したあと、DNS と GitHub Pages を設定します。

:::info code-recipe.com について
`code-recipe.com` は取得できない（既に登録済み）ため、別名のドメインを選びます。候補は下の「ドメイン名の候補」を参照してください。
:::

## ドメイン名の候補

サイト名 **Code Recipe** に近く、IT1-CODE-POCKET（`it1-code-pocket.com`）と混同しにくい例です。Cloudflare Registrar で空き状況を確認して選びます。

### おすすめ（ブランドに近い）

| 候補 | メリット |
| :--- | :--- |
| **coderecipe.jp** | ハイフンなし・日本向け・覚えやすい |
| **coderecipe.dev** | 開発・学習サイトらしい `.dev` |
| **code-recipe.jp** | サイト名と表記が一致 |
| **code-recipe.dev** | 上と同様で `.dev` |

### 次点（`.com` で探す場合）

| 候補 | メリット |
| :--- | :--- |
| **coderecipe.net** | `code-recipe.com` に近い |
| **devcoderecipe.com** | 取得しやすい派生名 |
| **learn-coderecipe.com** | 学習サイトだと分かる |
| **my-code-recipe.com** | 個人・学習プロジェクト向け |

### 選ぶときのコツ

- **短くて読める**（口頭で伝えやすい）
- **ハイフンの有無**は URL 共有時に迷いが出るので、サイト名と揃える
- AdSense・Search Console は **1 サイト 1 URL** で登録するので、決めたら変えない
- 購入後、`docusaurus.config.ts` の `customDomain` にその名前を入れる

## 全体の流れ

1. Cloudflare Registrar でドメインを購入する
2. `docusaurus.config.ts` の `customDomain` を更新し、`static/CNAME` と `robots.txt` を用意して push する
3. Cloudflare で DNS を設定する
4. GitHub **Settings → Pages** で Custom domain を設定する
5. **Enforce HTTPS** を有効にする
6. 表示と `robots.txt` / `sitemap.xml` を確認する

## 1. リポジトリ側の設定

ドメインを決めたら（例: `coderecipe.jp`）、次を更新します。

### docusaurus.config.ts

```ts
const customDomain = process.env.CUSTOM_DOMAIN ?? 'coderecipe.jp';
```

`customDomain` に値があると、自動的に `url` が `https://（ドメイン）`、`baseUrl` が `/` になります。

### static/CNAME（新規作成）

```text
coderecipe.jp
```

Custom domain と **同じ 1 行** を書きます。

### static/robots.txt

```text
Sitemap: https://coderecipe.jp/sitemap.xml
```

変更後は `git push` してデプロイ完了を待ちます。

## 2. Cloudflare の DNS 設定

Cloudflare ダッシュボード → **購入したドメイン** → **DNS**。

### ルートドメイン（example.jp）をメインにする場合

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| A | `@` | `185.199.108.153` | DNS only 推奨 |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

### www も使う場合（任意）

| タイプ | 名前 | コンテンツ | プロキシ |
| :--- | :--- | :--- | :--- |
| CNAME | `www` | `k5fujiwara.github.io` | DNS only 推奨 |

`www` をルートにそろえる場合は、Cloudflare の **リダイレクトルール** を使います。

:::tip プロキシ（オレンジ雲）
初回の HTTPS 設定は **DNS only（灰色の雲）** で始めると安定しやすいです。
:::

## 3. GitHub Pages で Custom domain

1. リポジトリ [k5fujiwara/code-recipe](https://github.com/k5fujiwara/code-recipe) → **Settings → Pages**
2. **Custom domain** に購入したドメインを入力（例: `coderecipe.jp`）
3. DNS 反映後、**Enforce HTTPS** をオン

## 4. 動作確認

- [ ] `https://（あなたのドメイン）/` が開く
- [ ] お問い合わせ・Legal ページが開く
- [ ] `robots.txt` / `sitemap.xml` が開く
- [ ] ページソースの URL に `/code-recipe/` が残っていない

## 5. Search Console・AdSense

独自ドメイン反映後、登録 URL を **新ドメインにそろえます**。

- Search Console: ドメイン プロパティまたは URL プレフィックス
- AdSense: `https://（あなたのドメイン）/`
- Google フォームのプライバシーリンク: `https://（あなたのドメイン）/privacy-policy`

詳細は [Google AdSense の設定と収益化](./google-adsense-setup) を参照してください。

## ローカル開発

| 状態 | ローカル URL |
| :--- | :--- |
| 独自ドメイン未設定 | `http://localhost:3000/code-recipe/` |
| 独自ドメイン設定後 | `http://localhost:3000/` |
