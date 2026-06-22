---
sidebar_position: 5
title: TypeScript
description: JavaScriptを安全に書くTypeScriptの基本、型、React/Next.jsとの関係を学ぶ
---

# TypeScript

TypeScriptは、JavaScriptに「型」を加えた言語です。型とは、文字列・数字・真偽値など、データの種類を表すルールです。大きなWebアプリを作るときに、ミスを早く見つけやすくなります。

## 何ができる？

- JavaScriptのコードをより安全に書く
- 実行前に型のミスを見つける
- 関数やデータの形を分かりやすくする
- ReactやNext.jsの開発を保守しやすくする
- チーム開発でコードの意図を伝えやすくする

## 学習ゴール

このページでは、次の状態を目指します。

- 基本の型を読める
- オブジェクトの型を作れる
- 関数の引数と戻り値に型を付けられる
- ユニオン型で選択肢を表せる
- ReactのPropsの型を読める
- 型エラーを怖がらずに確認できる

## 開発環境の準備

TypeScriptは、そのままブラウザで直接動かすのではなく、JavaScriptへ変換して使います。実際の学習では、次のどちらかから始めるのがおすすめです。

| 方法 | 向いている人 |
| --- | --- |
| TypeScript Playground | インストールなしで型を試したい人 |
| Vite + TypeScript | 小さなWebアプリを作りたい人 |
| Next.js | Reactと一緒に本格的に学びたい人 |

まずはPlaygroundで型の動きを試し、慣れてきたらViteやNext.jsへ進むと理解しやすいです。

## JavaScriptとの違い

JavaScriptでは、次のようなコードも実行するまで気づきにくいことがあります。

```js
function double(value) {
  return value * 2;
}

double('hello');
```

TypeScriptでは、引数の型を書いてミスを防ぎます。

```ts
function double(value: number): number {
  return value * 2;
}
```

`value` は数字、戻り値も数字だと分かります。

## 基本の型

```ts
const title: string = 'TypeScript入門';
const count: number = 3;
const isPublished: boolean = true;
```

よく使う型は次の通りです。

| 型 | 意味 |
| --- | --- |
| `string` | 文字列 |
| `number` | 数字 |
| `boolean` | true / false |
| `string[]` | 文字列の配列 |
| `number[]` | 数字の配列 |

## 型推論

TypeScriptは、値から型を推測できます。

```ts
const title = 'TypeScript入門';
const count = 3;
```

この場合、`title` は `string`、`count` は `number` と推測されます。すべてに型を書く必要はありません。関数の引数や複雑なデータなど、意図を伝えたい場所に型を書くのが実用的です。

## オブジェクトの型

```ts
type Language = {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
};

const language: Language = {
  name: 'TypeScript',
  level: 'intermediate',
  tags: ['Web', '型安全'],
};
```

`type` を使うと、データの形を名前付きで表せます。

## ユニオン型

ユニオン型は「この中のどれか」を表す型です。

```ts
type Difficulty = 'easy' | 'normal' | 'hard';

const difficulty: Difficulty = 'easy';
```

決まった選択肢だけを許可したいときに便利です。入力ミスを防げるので、カテゴリや状態を表すときによく使います。

## 関数の型

```ts
function createMessage(name: string, age: number): string {
  return `${name}さんは${age}歳です`;
}
```

引数と戻り値の型を書くと、「何を受け取り、何を返す関数か」が読みやすくなります。

## Reactでよく使う形

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({label, onClick}: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

コンポーネントが受け取る値を型で決めておくと、使い方を間違えにくくなります。

## 型エラーの読み方

TypeScriptのエラーは最初こそ難しく見えますが、多くは「期待している型」と「実際に渡した型」が違うという意味です。

```ts
function showAge(age: number) {
  console.log(`${age}歳です`);
}

showAge('15');
```

この場合、`number` が必要なのに `string` を渡しているためエラーになります。`'15'` ではなく `15` を渡すか、文字列を数字に変換します。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| React | UIをコンポーネントで作る |
| Next.js | ルーティングやサーバー処理も含むWebアプリを作る |
| Vue / Nuxt | Vue系のWebアプリを作る |
| Node.js | サーバー側でJavaScript/TypeScriptを動かす |
| Zod | 外部から来たデータの形をチェックする |

## 実務でよく使う場面

| 場面 | TypeScriptで良くなること |
| --- | --- |
| APIのレスポンス | どんなデータが返るか分かりやすい |
| ReactのProps | コンポーネントの使い方を間違えにくい |
| フォーム | 入力値の種類を整理しやすい |
| 設定ファイル | 書き間違いに気づきやすい |
| チーム開発 | コードの意図が伝わりやすい |

## 最初に作るもの

JavaScriptで作ったToDoアプリやクイズアプリをTypeScriptに書き換えてみましょう。

- タスクの型を作る
- 関数の引数に型をつける
- コンポーネントのPropsに型をつける
- APIから来るデータの型を考える

## ミニ演習: タスクの型を作る

ToDoアプリで使うタスクの型を作ってみましょう。

```ts
type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

const task: Task = {
  id: 1,
  title: 'TypeScriptを学ぶ',
  isDone: false,
};

function toggleTask(task: Task): Task {
  return {
    ...task,
    isDone: !task.isDone,
  };
}
```

データの形を先に決めると、アプリ全体で同じルールを守りやすくなります。

## つまずきやすいところ

- 型エラーを難しく感じる
- `type` と `interface` の使い分けで迷う
- `any` を使いすぎる
- 外部APIのデータの型をどう扱うか迷う
- ReactのPropsやStateの型で混乱する

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| `string` を `number` に渡した | 型が合っていない | 値の種類を確認 |
| プロパティが存在しない | オブジェクトの型に定義がない | `type` の中身 |
| `undefined` の可能性がある | 値がない場合を考えていない | 条件分岐や初期値 |
| `any` だらけになる | 型を避けている | 小さな型から作る |
| ReactのPropsでエラー | 渡す値が足りない | Props型と呼び出し側 |

## チェックリスト

- [ ] `string`、`number`、`boolean` を読める
- [ ] 配列の型を書ける
- [ ] オブジェクトの型を作れる
- [ ] 関数の引数に型を付けられる
- [ ] ユニオン型を使える
- [ ] 型エラーの原因を探せる
- [ ] ReactのProps型を読める

## 次に学ぶこと

TypeScriptに慣れたら、ReactやNext.jsで実際のWebアプリを作ってみましょう。フォーム、API通信、認証、データベースへ進むと、実務に近い開発になります。
