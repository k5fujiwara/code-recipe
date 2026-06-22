---
sidebar_position: 4
title: Node.js / Express
description: JavaScriptでサーバー側を作るNode.jsとExpressの基本、API、関連技術を学ぶ
---

# Node.js / Express

Node.jsは、JavaScriptをブラウザの外でも動かすための実行環境です。Expressは、Node.jsでWebサーバーやAPIを作りやすくするフレームワークです。

## 何ができる？

- APIサーバーを作る
- フォーム送信を受け取る
- JSONを返す
- データベースと連携する
- フロントエンドと同じJavaScript/TypeScriptでサーバー側を書く

## 学習前に知っておきたいこと

- JavaScriptの基本
- 関数とオブジェクト
- HTTPの基本
- JSONの形
- npmの使い方

## Expressの基本形

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(3000, () => {
  console.log('Server is running');
});
```

`app.get()` は、指定したURLにアクセスされたときの処理を書きます。

## APIの例

```js
app.get('/api/languages', (req, res) => {
  res.json([
    {name: 'JavaScript', type: 'frontend'},
    {name: 'Node.js', type: 'backend'},
  ]);
});
```

JSONを返すAPIを作ると、ReactやNext.jsなどのフロントエンドからデータを取得できます。

## よく使う関連技術

| 技術 | 役割 |
| --- | --- |
| npm | ライブラリ管理 |
| TypeScript | 型安全にサーバーを書く |
| Prisma | データベース操作 |
| PostgreSQL / MySQL | データ保存 |
| Zod | 入力値の検証 |
| nodemon | 保存時にサーバー再起動 |

## ミニ演習: JSON API

```js
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Code Recipe',
    message: 'Node.jsでAPIを作っています',
  });
});
```

ブラウザで `/api/profile` を開いて、JSONが表示されるか確認してみましょう。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| サーバーが起動しない | ポート使用中 | ポート番号 |
| JSONが受け取れない | body解析不足 | `express.json()` |
| CORSエラー | 別ドメインからアクセス | CORS設定 |
| DB接続できない | 環境変数やURL違い | `.env` |
| 非同期処理で失敗 | await忘れ | `async` / `await` |

## チェックリスト

- [ ] Node.jsとExpressの違いを説明できる
- [ ] GET APIを作れる
- [ ] JSONを返せる
- [ ] npmでパッケージを管理できる
- [ ] データベース連携が必要になる場面を説明できる

## 次に学ぶこと

Expressの基本が分かったら、TypeScript、Prisma、認証、データベース、エラーハンドリングを学びましょう。Next.jsのAPIやサーバー処理にもつながります。
