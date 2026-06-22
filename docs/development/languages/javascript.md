---
sidebar_position: 4
title: JavaScript
description: Webページに動きをつけるJavaScriptの基本文法、DOM操作、関連フレームワークを学ぶ
---

# JavaScript

JavaScriptは、Webページに動きや処理を加えるプログラミング言語です。ボタンを押したときの反応、入力チェック、API通信、画面の書き換えなど、ブラウザ上の多くの機能を担当します。

## 何ができる？

- ボタンを押したときに処理を動かす
- 入力フォームの内容をチェックする
- ページの一部を書き換える
- サーバーからデータを取得する
- クイズ、タイマー、電卓などの小さなアプリを作る

## 学習ゴール

このページでは、次の状態を目指します。

- 変数、条件分岐、繰り返し、関数を書ける
- 配列とオブジェクトでデータを扱える
- ボタン操作などのイベントを扱える
- DOMを使ってHTMLを書き換えられる
- `fetch` と `async` / `await` の入口を理解できる

## 開発環境の準備

JavaScriptはブラウザで動かせます。まずは次の構成で始めると分かりやすいです。

```text
js-practice/
  index.html
  app.js
```

HTMLからJavaScriptを読み込みます。

```html
<script src="app.js" defer></script>
```

`defer` を付けると、HTMLの読み込み後にJavaScriptが実行されるため、DOM操作の練習でつまずきにくくなります。

## 基本の書き方

```js
const name = 'Code Recipe';
console.log(name);
```

`const` は値を入れる箱を作る書き方です。`console.log()` は、確認したい値を開発者ツールに表示します。

## 変数

```js
const title = '自己紹介';
let count = 0;

count = count + 1;
```

基本的には `const` を使い、あとから値を変える必要があるときだけ `let` を使います。

## 条件分岐

```js
const score = 85;

if (score >= 80) {
  console.log('よくできました');
} else {
  console.log('もう少し練習しよう');
}
```

条件分岐を使うと、「点数が80点以上なら合格」のような判断ができます。

## 繰り返し

```js
const languages = ['HTML', 'CSS', 'JavaScript'];

for (const language of languages) {
  console.log(language);
}
```

配列に入っているデータを順番に処理できます。

## 関数

```js
function greet(name) {
  return `こんにちは、${name}さん`;
}

console.log(greet('太郎'));
```

関数は、よく使う処理に名前をつけて再利用する仕組みです。

## 配列とオブジェクト

JavaScriptでは、複数のデータをまとめて扱う場面が多くあります。

```js
const user = {
  name: '太郎',
  age: 15,
  skills: ['HTML', 'CSS', 'JavaScript'],
};

console.log(user.name);
console.log(user.skills[0]);
```

配列は「順番のあるリスト」、オブジェクトは「名前付きの情報セット」と考えると分かりやすいです。

## DOM操作

DOM操作は、JavaScriptからHTMLを書き換えることです。

```html
<button id="button">クリック</button>
<p id="message">まだ押されていません</p>
```

```js
const button = document.querySelector('#button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'ボタンが押されました';
});
```

ボタンを押したときに、文章を書き換えています。

## API通信の入口

Webアプリでは、サーバーからデータを取得して画面に表示することがあります。JavaScriptでは `fetch` を使います。

```js
async function loadData() {
  const response = await fetch('https://example.com/api/items');
  const items = await response.json();

  console.log(items);
}

loadData();
```

`async` / `await` は、時間がかかる処理を順番に読みやすく書くための仕組みです。最初は「データを待ってから次へ進む」と理解すれば大丈夫です。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| React | 部品を組み合わせて画面を作る |
| Vue | 分かりやすい書き方でUIを作る |
| Next.js | Reactを使った本格的なWebアプリを作る |
| Node.js | JavaScriptをサーバー側でも動かす |
| npm | ライブラリを管理する |

## フレームワークの選び方

| 状況 | おすすめ |
| --- | --- |
| 基本文法とDOM操作を学びたい | 素のJavaScript |
| 部品を組み合わせて画面を作りたい | React |
| 本格的なWebアプリを作りたい | Next.js |
| サーバー側もJavaScriptで書きたい | Node.js |

最初はフレームワークに進む前に、ボタン操作、配列、関数、DOM操作を小さなコードで試すのがおすすめです。

## 最初に作るもの

クイズアプリがおすすめです。

- 問題を表示する
- 選択肢をクリックする
- 正解・不正解を表示する
- スコアを数える

## ミニ演習: カウントボタン

ボタンを押すたびに数字が増える小さなアプリを作ってみましょう。

```html
<p id="count">0</p>
<button id="plusButton">+1</button>
```

```js
let count = 0;

const countText = document.querySelector('#count');
const plusButton = document.querySelector('#plusButton');

plusButton.addEventListener('click', () => {
  count = count + 1;
  countText.textContent = count;
});
```

慣れてきたら、`-1` ボタンやリセットボタンも追加してみましょう。

## つまずきやすいところ

- `const` と `let` の使い分け
- 配列とオブジェクトの違い
- `addEventListener` の書き方
- 非同期処理の `async` / `await`
- エラーがどこで起きているかの確認

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| `null` と表示される | HTML要素が見つかっていない | セレクタ名、`defer` の有無 |
| ボタンが反応しない | イベント登録ができていない | `addEventListener` の対象 |
| 値が変わらない | `const` に再代入している | 変える値は `let` にする |
| 配列の値が出ない | インデックスが違う | 0番目から始まること |
| API通信で失敗する | URLやCORSの問題 | ブラウザのConsoleとNetwork |

## チェックリスト

- [ ] `const` と `let` を使い分けられる
- [ ] `if` で条件分岐を書ける
- [ ] `for...of` で配列を処理できる
- [ ] 関数を作れる
- [ ] DOM要素を取得して書き換えられる
- [ ] クリックイベントを扱える
- [ ] `fetch` の役割を説明できる

## 次に学ぶこと

JavaScriptに慣れたら、[TypeScript](./typescript.md)で型を学びましょう。ReactやNext.jsを使う場合も、TypeScriptを知っていると実務に近い書き方へ進みやすくなります。
