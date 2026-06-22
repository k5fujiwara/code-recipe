---
sidebar_position: 3
title: CSS
description: Webページの見た目を整えるCSSの基本、セレクタ、レイアウト、関連ツールを学ぶ
---

# CSS

CSSは、HTMLで作ったWebページの見た目を整えるスタイルシート言語です。色、文字の大きさ、余白、配置、アニメーション、スマホ対応などを指定できます。

## 何ができる？

- 文字の色や大きさを変える
- ボタンやカードを見やすくする
- 画面を横並び・縦並びに配置する
- スマホとPCでレイアウトを変える
- ホバー時の動きや簡単なアニメーションを作る

## 学習ゴール

このページでは、次の状態を目指します。

- HTMLにCSSを読み込める
- セレクタでスタイルを当てる対象を選べる
- 色、余白、文字サイズ、枠線を調整できる
- FlexboxとGridの使いどころを説明できる
- スマホ対応の基本を書ける

## 開発環境の準備

CSSを学ぶときは、HTMLファイルとCSSファイルを分けて作ると理解しやすくなります。

```text
my-profile/
  index.html
  styles.css
```

`index.html` の `head` にCSSを読み込みます。

```html
<link rel="stylesheet" href="styles.css" />
```

## 基本の書き方

CSSは「どの要素に」「どんな見た目を」「どう変えるか」を書きます。

```css
h1 {
  color: #2563eb;
  font-size: 2rem;
}
```

この例では、`h1` の文字色と文字サイズを指定しています。

## HTMLとのつなぎ方

HTMLからCSSファイルを読み込むには、`head` に `link` を書きます。

```html
<link rel="stylesheet" href="styles.css" />
```

## セレクタ

セレクタは、スタイルを当てる対象を選ぶ書き方です。

| セレクタ | 例 | 意味 |
| --- | --- | --- |
| タグ | `p` | すべての段落 |
| クラス | `.card` | `class="card"` の要素 |
| ID | `#main-title` | `id="main-title"` の要素 |
| 子孫 | `.card p` | `.card` の中にある `p` |
| 状態 | `button:hover` | ボタンにマウスを乗せたとき |

## よく使うプロパティ

| プロパティ | 役割 |
| --- | --- |
| `color` | 文字色 |
| `background` | 背景 |
| `font-size` | 文字サイズ |
| `margin` | 外側の余白 |
| `padding` | 内側の余白 |
| `border` | 枠線 |
| `display` | 要素の並べ方 |
| `gap` | 要素同士の間隔 |

## ボックスモデル

CSSでは、要素を箱として考えます。

| 名前 | 意味 |
| --- | --- |
| content | 文字や画像など中身の部分 |
| padding | 中身と枠線の間の余白 |
| border | 枠線 |
| margin | 要素の外側の余白 |

```css
.card {
  padding: 1rem;
  border: 1px solid #d1d5db;
  margin-bottom: 1rem;
}
```

`padding` は箱の内側、`margin` は箱の外側です。ここを区別できると、レイアウトの理解が一気に進みます。

## レイアウトの基本

横並びや中央寄せには、`flex` がよく使われます。

```css
.cards {
  display: flex;
  gap: 1rem;
  align-items: center;
}
```

カードを格子状に並べるときは、`grid` が便利です。

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Flexboxは「横一列に並べたい」「中央に寄せたい」ときに便利です。Gridは「カードを2列・3列に並べたい」ときに便利です。

## スマホ対応

画面幅に応じてデザインを変えるには、メディアクエリを使います。

```css
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
```

## フレームワーク・関連ツール

| 技術 | できること |
| --- | --- |
| Tailwind CSS | クラス名を組み合わせて素早くデザインする |
| Sass | 変数や入れ子を使ってCSSを書きやすくする |
| CSS Modules | コンポーネントごとにスタイルを分ける |
| Figma | デザイン案を作る |

## フレームワークの選び方

| 状況 | おすすめ |
| --- | --- |
| まずCSSの仕組みを理解したい | 素のCSS |
| 素早くデザインを整えたい | Tailwind CSS |
| 変数や入れ子を使いたい | Sass |
| Reactなどで部品ごとに管理したい | CSS Modules |

初心者の最初の学習では、いきなりフレームワークに頼りすぎず、素のCSSで `color`、`padding`、`display` などを試すのがおすすめです。

## 最初に作るもの

HTMLで作った自己紹介ページを、CSSで見やすく整えてみましょう。

- 背景色を変える
- 見出しを目立たせる
- カード風のプロフィール欄を作る
- スマホでも読みやすくする

## ミニ演習: プロフィールカード

次のHTMLにCSSを当てて、カード風のデザインにしてみましょう。

```html
<section class="profile-card">
  <h1>山田 太郎</h1>
  <p>Web制作を学んでいます。</p>
  <a href="https://example.com">ポートフォリオを見る</a>
</section>
```

```css
.profile-card {
  max-width: 480px;
  padding: 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 16px;
  background: #ffffff;
}

.profile-card h1 {
  margin-top: 0;
  color: #2563eb;
}

.profile-card a {
  color: #2563eb;
  font-weight: bold;
}
```

慣れてきたら、背景色、余白、枠線、ホバー時の色を自分で変えてみましょう。

## つまずきやすいところ

- `margin` と `padding` の違いが分かりにくい
- どのセレクタが効いているか分からなくなる
- 横並びが思った通りにならない
- スマホで横にはみ出す

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| CSSが効かない | ファイルが読み込めていない | `link` の `href` |
| 一部だけ効かない | セレクタが違う | クラス名のスペル |
| 横にはみ出す | 幅が固定されている | `max-width` や `overflow` |
| 中央寄せできない | 親要素に指定していない | `display: flex` の場所 |
| スマホで崩れる | メディアクエリ不足 | 画面幅ごとの表示 |

## チェックリスト

- [ ] HTMLにCSSを読み込める
- [ ] クラスセレクタを書ける
- [ ] `margin` と `padding` を説明できる
- [ ] Flexboxで横並びを作れる
- [ ] Gridでカード一覧を作れる
- [ ] メディアクエリでスマホ対応できる
- [ ] ブラウザの開発者ツールでCSSを確認できる

## 次に学ぶこと

CSSで画面を整えられるようになったら、[JavaScript](./javascript.md)でボタン操作や画面更新を学びましょう。
