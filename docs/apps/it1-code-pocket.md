---
sidebar_position: 0
title: IT1-CODE-POCKET
description: 共通テスト情報Ⅰ第3問対策のプログラミングアルゴリズムクイズ
hide_table_of_contents: true
---

import ProductHero from '@site/src/components/ProductHero';
import TOCCollapsible from '@theme/TOCCollapsible';

# IT1-CODE-POCKET

<ProductHero
  links={[
    {href: 'https://it1-code-pocket.com/', label: 'Webアプリを開く', isPrimary: true},
  ]}>
  <p><strong>IT1-CODE-POCKET</strong> は、共通テスト「情報Ⅰ」第3問（プログラミングアルゴリズム）の対策に特化した学習クイズ Web アプリです。</p>
  <p>Python モードと DNCL（どんくり）モードを選び、難易度・問題数を設定して、スマートフォンや PC のブラウザからすぐに練習できます。</p>
</ProductHero>

<TOCCollapsible toc={toc} />

## このアプリについて

- **名称:** IT1-CODE-POCKET
- **URL:** [https://it1-code-pocket.com/](https://it1-code-pocket.com/)
- **対象:** 共通テスト「情報Ⅰ」第3問を攻略したい高校生
- **形式:** Webアプリ（ブラウザで利用）

アルゴリズムの考え方をクイズ形式で反復し、本番のプログラム表記にも慣れることを目的としています。

## できること

- **言語モードの切り替え**
  - Python モード
  - DNCL（どんくり）モード
- **難易度の選択:** 基礎 / 標準 / 発展
- **問題数の選択:** 5問 / 10問 / 20問 / 40問
- **重要アルゴリズムの解説** をアプリ内で確認
- **共通テスト用プログラム表記の解説** をアプリ内で確認
- 解説を見ながら、1問ずつ進める学習フロー

## 使用技術

IT1-CODE-POCKET は、HTML / CSS / JavaScript を中心に作られた実用的な学習Webアプリです。フレームワークを前提にしなくても、ブラウザで動くアプリを作り、公開・運用まで進められる例として参考にできます。

### 画面を作る技術

| 技術 | このアプリでの役割 |
| --- | --- |
| HTML5 | 画面の構造、ボタン、選択肢、解説エリアなどを作る |
| CSS3 | レイアウト、余白、色、スマホ対応などの見た目を整える |
| Tailwind CSS CDN | デザイン用のクラスを使い、UIを素早く整える |

### 動きを作る技術

| 技術 | このアプリでの役割 |
| --- | --- |
| JavaScript | 出題、採点、モード切り替え、問題数管理などを動かす |
| Vanilla JavaScript | Reactなどを使わず、素のJavaScriptで画面操作や状態管理を行う |
| localStorage | ブラウザ内に設定や進捗などを保存する |

### 公開・運用に使うサービス

| サービス | このアプリでの役割 |
| --- | --- |
| GitHub Pages | Webアプリを静的サイトとして公開する |
| Cloudflare | 独自ドメインやDNSを管理する |
| Google Search Console | 検索結果での見え方やインデックス状況を確認する |
| Google AdSense | 広告掲載・収益化に使う |
| Google Forms | 問い合わせやフィードバック受付に使う |

## HTML / CSS / JavaScript の実用例として見る

このアプリは、学習者にとって「HTML / CSS / JavaScript を学ぶと何が作れるのか」をイメージしやすい例です。

| 技術 | 学べる考え方 |
| --- | --- |
| HTML | クイズ画面、選択肢、解説、設定画面などの構造を作る |
| CSS | スマホでも押しやすく、読みやすい画面に整える |
| JavaScript | ユーザー操作に反応し、問題データを切り替え、採点結果を表示する |
| localStorage | ユーザーの設定や状態をブラウザに保存する |

特にJavaScriptでは、配列やオブジェクトで問題データを扱い、クリックイベントに応じて画面を書き換える考え方が重要になります。これは、クイズアプリ、チェックリスト、暗記カード、診断ツールなどにも応用できます。

## こんな人におすすめ

- 共通テスト「情報Ⅰ」第3問の点数を上げたい人
- アルゴリズムをクイズで短時間に復習したい人
- Python と DNCL の両方で表記に慣れたい人
- スマホで手軽に何度も解き直したい人

## Code Recipe とのつながり

IT1-CODE-POCKET で扱うアルゴリズムの考え方は、Code Recipe の解説ページでも学べます。クイズで「引っかかったテーマ」を、次のページで深く理解する使い方がおすすめです。

- [アルゴリズム一覧](/docs/algorithms/)
- [AOJ攻略ロードマップ](/docs/contest/aoj-roadmap/) — さらに実装力を伸ばしたいとき
- [HTML](/docs/development/languages/html/) / [CSS](/docs/development/languages/css/) / [JavaScript](/docs/development/languages/javascript/) — Webアプリの作り方を学びたいとき
- [技術選定ガイド](/docs/development/technology-selection/) — なぜこの構成で作るのかを考えたいとき

## モバイルアプリ版について

IT1-CODE-POCKET は現在 **Web アプリ** として公開しています。学習のしやすさを高めるため、**モバイルアプリ版の開発・公開を検討中**です。

- **Webアプリ:** [公開中](https://it1-code-pocket.com/)
- **モバイルアプリ:** 開発・公開を検討中（時期未定）

## 関連リンク

- [IT1-CODE-POCKET を開く](https://it1-code-pocket.com/)
- [運営者のアプリ一覧](./)
