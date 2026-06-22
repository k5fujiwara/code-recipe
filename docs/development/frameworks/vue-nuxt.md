---
sidebar_position: 3
title: Vue / Nuxt
description: VueとNuxtの役割、基本構文、React系との違い、学習ルートを学ぶ
---

# Vue / Nuxt

Vueは、分かりやすい構文でWeb画面を作るためのフレームワークです。Nuxtは、Vueを使って本格的なWebアプリやサイトを作るためのフレームワークです。

## 何ができる？

- コンポーネントで画面を作る
- 入力フォームや一覧画面を作る
- ページ遷移のあるWebアプリを作る
- ブログや管理画面を作る
- サーバー側で準備したページを表示する

## VueとNuxtの違い

| 技術 | 役割 |
| --- | --- |
| Vue | UIを作る |
| Nuxt | ルーティングやサーバー処理も含めたアプリを作る |

Vueは画面部品を作る道具、Nuxtはアプリ全体を作る土台です。

## 学習前に知っておきたいこと

- HTMLの基本
- CSSの基本
- JavaScriptの基本
- コンポーネントの考え方

## Vueの基本形

```vue
<script setup lang="ts">
const message = 'こんにちは、Vue';
</script>

<template>
  <p>{{ message }}</p>
</template>
```

Vueでは、HTMLに近い `template` と、処理を書く `script` を組み合わせます。

## よく使う構文

| 構文 | 役割 |
| --- | --- |
| `{{ message }}` | 値を表示する |
| `v-if` | 条件で表示を切り替える |
| `v-for` | リストを繰り返し表示する |
| `v-model` | 入力フォームと値をつなぐ |
| `@click` | クリックイベントを扱う |

## ミニ演習: カウントボタン

```vue
<script setup lang="ts">
import {ref} from 'vue';

const count = ref(0);
</script>

<template>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
```

`ref` は、画面と連動する値を作るために使います。

## Nuxtで作れるもの

- ブログ
- 企業サイト
- 管理画面
- ログイン付きアプリ
- APIと連携するWebアプリ

## 関連技術

| 技術 | 役割 |
| --- | --- |
| TypeScript | 型安全に書く |
| Pinia | 状態管理 |
| Vue Router | ルーティング |
| Nuxt Content | Markdownコンテンツ管理 |
| Vite | 高速な開発環境 |

## React系との違い

| 観点 | Vue / Nuxt | React / Next.js |
| --- | --- | --- |
| 書き方 | HTMLに近く読みやすい | JavaScript/TypeScript寄り |
| 学習感 | 初心者に優しめ | 自由度が高い |
| エコシステム | Vue/Nuxt中心 | React周辺が非常に広い |

どちらが上というより、チームや作りたいものに合わせて選びます。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| 値が更新されない | `ref` を使っていない | リアクティブな値 |
| ループ表示が変 | `key` がない | `v-for` の `key` |
| 入力と値がつながらない | `v-model` 不足 | inputの指定 |
| Nuxtでページが出ない | ファイル配置違い | pages/app構成 |

## チェックリスト

- [ ] `template` と `script` の役割を説明できる
- [ ] `v-if` と `v-for` を使える
- [ ] `ref` の役割を説明できる
- [ ] VueとNuxtの違いを説明できる
- [ ] React系との違いをざっくり説明できる

## 次に学ぶこと

Vueの基本が分かったら、Nuxtでページ遷移、データ取得、フォーム、Markdown管理、API連携へ進みましょう。
