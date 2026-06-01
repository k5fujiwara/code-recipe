---
sidebar_position: 4
title: 学習クイズテンプレート QuizCode
description: GitHubで公開しているQuizCodeを使って学習クイズアプリを作る
hide_table_of_contents: true
---

import TemplateHero from '@site/src/components/TemplateHero';
import TOCCollapsible from '@theme/TOCCollapsible';
import quizCodeScreenshot from '@site/static/img/templates/quizcode-screenshot.png';

# 学習クイズテンプレート QuizCode

<TemplateHero
  imageSrc={quizCodeScreenshot}
  imageAlt="QuizCodeのスマートフォン表示イメージ"
  imageCaption="スマートフォン表示のデモ画面"
  links={[
    {href: 'https://github.com/k5fujiwara/QuizCode', label: 'GitHubでQuizCodeを見る'},
    {href: 'https://k5fujiwara.github.io/QuizCode/', label: 'デモはこちら', isPrimary: true},
  ]}>
  <p>QuizCodeは、JSONを書き換えるだけでオリジナルの学習クイズを作成できる、HTML / CSS / JavaScript製の静的Webアプリテンプレートです。</p>
  <p>サーバーやデータベースを使わずに動くため、GitHubからコードを取得してすぐに中身を確認できます。作成したクイズはGitHub Pagesで公開でき、URLを共有すればブラウザ上で遊べます。</p>
</TemplateHero>

<TOCCollapsible toc={toc} />

## できること

- コース、分野、単元を選んでクイズを開始する
- 1問ずつ解くクイズモードを使う
- 制限時間つきのチャレンジモードを使う
- 回答後に正誤判定と解説を表示する
- 選択肢をシャッフルする
- 進捗、スコア、合格判定を表示する
- JSONで問題データを管理する
- 10種類のデザインとフォントを切り替える
- GitHub Pagesで静的サイトとして公開する

## 向いている人

- HTML / CSS / JavaScript の基本を学びたい人
- 自作のクイズ教材をWebで公開したい人
- GitHub Pagesで静的サイトを公開する練習をしたい人
- AIに問題文を作らせて、JSONとして取り込む教材を作りたい人
- 学校、塾、研修、勉強会向けのミニ教材を作りたい人

## 技術構成

QuizCodeは、次の技術だけで動きます。

- HTML
- CSS
- JavaScript
- JSON

外部サーバーやデータベースは不要です。ローカル確認時は、Live Server または簡易HTTPサーバーを使います。

## ファイル構成

```text
QuizCode/
  index.html
  app.js
  styles.css
  sample-unit.json
  data/
    catalog.json
  README.md
  TECHNICAL_POINTS.md
```

主な役割は次の通りです。

- `index.html`: 画面の骨組み
- `styles.css`: デザイン、レイアウト、テーマ
- `app.js`: JSON読み込み、画面更新、採点、タイマー
- `sample-unit.json`: 問題データのサンプル
- `data/catalog.json`: コース、分野、単元の一覧
- `README.md`: 利用者向けの使い方
- `TECHNICAL_POINTS.md`: 学習用の技術解説

## 開発の始め方

まずは、公開されているQuizCodeを `git clone` でローカルPCに取得します。

```shell
git clone https://github.com/k5fujiwara/QuizCode.git
cd QuizCode
```

これで、QuizCodeのファイル一式が手元のPCにコピーされます。あとは中身を編集して、自分用のクイズアプリに改造していきます。

自分のGitHubアカウントへ保存したい場合は、GitHubで新しいリポジトリを作成し、リモートURLを差し替えてからpushします。

```shell
git remote remove origin
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
```

`git remote add origin ...` のURLは、自分がGitHubで作ったリポジトリのURLに置き換えます。

## ローカルで確認する

`index.html` を直接開くと、ブラウザの制限でJSONの読み込みに失敗する場合があります。

Pythonを使える場合は、プロジェクト直下で次のコマンドを実行します。

```shell
python -m http.server 8000
```

ブラウザで次のURLを開きます。

```text
http://localhost:8000
```

Cursor / VS Code の Live Server 拡張機能を使っても確認できます。

## クイズデータを編集する

問題は単元ごとにJSONファイルとして保存します。

```json
{
  "unit_title": "HTMLの基礎",
  "questions": [
    {
      "question": "HTMLで一番大きい見出しを表すタグはどれですか？",
      "options": ["<p>", "<h1>", "<title>", "<div>"],
      "answer": 1,
      "commentary": "<h1> はページ内の大きな見出しに使います。"
    }
  ]
}
```

基本ルールは次の通りです。

- `options` は4つ用意する
- `answer` は `0` から `3` の整数で指定する
- `commentary` には解説文を書く
- 新しい単元JSONは `data/` フォルダに保存する
- 保存した単元は `data/catalog.json` に登録する

## デザインを切り替える

`app.js` の設定値を変えると、デザインとフォントを切り替えられます。

```js
const DESIGN_PATTERN = 1;
```

選べるパターンは、ダーク、明るい教室、ポップ、グリーン、オーシャン、サンセット、ネオンラベンダー、モノクロ、レトロゲーム、和風さくらです。

## 改造しやすいポイント

初学者は、まず小さな変更から始めましょう。

- アプリ名を変える
- `sample-unit.json` の問題文を変える
- 問題数を増やす
- 解説文を詳しくする
- `DESIGN_PATTERN` を変えて見た目を変更する

慣れてきたら、次のような改造にも挑戦できます。

- 新しいデザインパターンを追加する
- チャレンジモードの制限時間を変更する
- 合格ラインを変更する
- 問題にカテゴリや難易度を追加する
- AIで作成した問題JSONを取り込む流れを作る

## GitHub Pagesで公開する

GitHub Pagesを使うと、作ったクイズアプリをWebに公開できます。

1. GitHubでリポジトリを作成する
2. QuizCodeのファイルをpushする
3. GitHubの `Settings` から `Pages` を開く
4. `Deploy from a branch` を選ぶ
5. `main` ブランチと `/root` を選んで保存する
6. 公開URLにアクセスして動作確認する

公開後は、問題データやデザインを変更してGitHubにpushすると、GitHub Pagesにも反映されます。

## 学べること

QuizCodeを改造すると、Webアプリの基本構造をまとめて学べます。

- HTMLで画面構造を作る方法
- CSS変数でテーマを切り替える方法
- JavaScriptでDOMを操作する方法
- `fetch()` でJSONを読み込む方法
- 配列を使って問題リストを管理する方法
- 選択肢をシャッフルする方法
- タイマーを実装する方法
- 入力データを検証する考え方
- 静的サイトをGitHub Pagesで公開する方法
