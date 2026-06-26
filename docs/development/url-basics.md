---
sidebar_position: 5
title: URLの基本
description: URLの構造、パス、クエリ、アンカーの読み方を初心者向けに説明する
---

# URLの基本

URL は、Webページや画像、API などの「インターネット上の場所」を表す住所です。

ブラウザのアドレスバーに入っている文字列を見ると、どのサイトの、どのページを開いているのかが分かります。

## URLの例

```text
https://code-recipes.com/docs/development/url-basics/?q=domain#example
```

この URL は、いくつかの部品に分けて読めます。

| 部品 | 例 | 意味 |
| :--- | :--- | :--- |
| スキーム | `https` | 通信の方法 |
| ドメイン | `code-recipes.com` | サイトの住所 |
| パス | `/docs/development/url-basics/` | サイト内のページ位置 |
| クエリ | `?q=domain` | 検索条件や設定値 |
| フラグメント | `#example` | ページ内の見出しや位置 |

## スキーム

スキームは、通信の方法を表します。

よく見るのは `http` と `https` です。現在の Web サイトでは、基本的に **https を使う** と覚えておくとよいです。

```text
http://example.com/
https://example.com/
```

詳しくは [HTTPとHTTPS](/docs/development/http-https/) で説明します。

## ドメイン

ドメインは、Webサイトの名前つき住所です。

```text
code-recipes.com
example.com
docs.example.com
```

IPアドレスのような数字の住所を、人間が覚えやすい名前にしたものだと考えると分かりやすいです。

詳しくは [ドメインとDNS](/docs/development/domain-dns/) で説明します。

## パス

パスは、サイト内のどのページやファイルを開くかを表します。

```text
/docs/development/
/docs/development/url-basics/
/img/logo.svg
```

同じドメインでも、パスが変わると別のページになります。

```text
https://code-recipes.com/docs/development/
https://code-recipes.com/docs/apps/
```

## クエリ

クエリは、URL の末尾に `?` から始まる追加情報です。

```text
https://example.com/search?q=python
```

この例では、`q=python` が「python で検索する」という条件のように使われます。

複数の値を渡すときは `&` でつなぎます。

```text
https://example.com/search?q=python&page=2
```

## フラグメント

フラグメントは、URL の末尾に `#` から始まる部分です。

```text
https://example.com/docs/#install
```

ページ内の見出しや特定の場所へ移動するときに使われます。Docusaurus のドキュメントでも、見出しへのリンクに使われます。

## 末尾スラッシュ

URL の末尾に `/` があるかないかで、サーバーの扱いが変わることがあります。

```text
https://code-recipes.com/docs/development/url-basics
https://code-recipes.com/docs/development/url-basics/
```

Docusaurus や GitHub Pages では、スラッシュなしの URL がスラッシュ付きへリダイレクトされることがあります。Search Console などで確認するときは、実際に表示される URL に合わせましょう。

## URLを見るときのチェック

- `https://` で始まっているか
- ドメインが正しいか
- パスが目的のページになっているか
- `?` 以降に余計な情報が入っていないか
- `#` 以降はページ内移動用だと理解できているか

URL が読めるようになると、リンク切れ、API の呼び出し、サイト公開時の設定確認がしやすくなります。
