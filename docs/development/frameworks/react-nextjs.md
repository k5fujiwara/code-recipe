---
sidebar_position: 2
title: React / Next.js
description: ReactとNext.jsの役割、違い、基本構成、学習ルートを学ぶ
---

# React / Next.js

Reactは、Web画面を部品に分けて作るためのライブラリです。Next.jsは、Reactを使って本格的なWebアプリを作るためのフレームワークです。

## 何ができる？

- ボタン、カード、フォームなどをコンポーネント化する
- ページ遷移のあるWebアプリを作る
- APIからデータを取得して表示する
- ブログ、管理画面、予約サイト、SaaSを作る
- TypeScriptと組み合わせて保守しやすくする

## ReactとNext.jsの違い

| 技術 | 役割 |
| --- | --- |
| React | UIをコンポーネントで作る |
| Next.js | ルーティング、サーバー処理、画像最適化なども含めてWebアプリを作る |

Reactは「画面の部品作り」、Next.jsは「Webアプリ全体の土台」と考えると分かりやすいです。

## 学習前に知っておきたいこと

- HTMLの基本
- CSSの基本
- JavaScriptの変数、関数、配列、オブジェクト
- できればTypeScriptの基本

## Reactの基本形

```tsx
type GreetingProps = {
  name: string;
};

function Greeting({name}: GreetingProps) {
  return <p>こんにちは、{name}さん</p>;
}
```

Reactでは、画面の一部を関数として作ります。このような部品をコンポーネントと呼びます。

## よく使う考え方

| 用語 | 意味 |
| --- | --- |
| コンポーネント | 画面の部品 |
| props | 親から子へ渡すデータ |
| state | 画面の状態 |
| hooks | 状態や処理を扱う仕組み |
| routing | URLごとに画面を切り替える仕組み |

## Next.jsで作れるもの

- ブログ
- ポートフォリオ
- 管理画面
- ECサイト
- ログイン付きWebアプリ
- APIつきのフルスタックアプリ

## よく使う関連技術

| 技術 | 役割 |
| --- | --- |
| TypeScript | 型安全に書く |
| Tailwind CSS | 素早くUIを整える |
| Prisma | データベースを扱う |
| NextAuth / Auth.js | 認証を扱う |
| Vercel | Next.jsを公開しやすい |

## ミニ演習: カードコンポーネント

```tsx
type LanguageCardProps = {
  name: string;
  description: string;
};

function LanguageCard({name, description}: LanguageCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  );
}
```

複数の言語データを配列にして、カード一覧として表示してみましょう。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| 画面が更新されない | stateを使っていない | `useState` |
| propsが分からない | データの流れが見えていない | 親から子への受け渡し |
| 型エラーが出る | Props型が合っていない | 型定義 |
| CSSが当たらない | classNameの指定違い | `className` |
| Next.jsでページが見つからない | ルーティング設定 | app/pages構成 |

## チェックリスト

- [ ] コンポーネントを説明できる
- [ ] propsを渡せる
- [ ] stateの役割を説明できる
- [ ] ReactとNext.jsの違いを説明できる
- [ ] TypeScriptと組み合わせる理由を説明できる

## 次に学ぶこと

Reactの基本が分かったら、Next.jsでページ遷移、データ取得、フォーム、認証、データベース連携へ進みましょう。
