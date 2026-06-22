---
sidebar_position: 2
title: DataLupe
description: CSVをアップロードするだけで、データの全体像・品質・関係性を自動診断できるデータサイエンス入門Webアプリ
hide_table_of_contents: true
---

import ProductHero from '@site/src/components/ProductHero';
import TOCCollapsible from '@theme/TOCCollapsible';

# DataLupe

<ProductHero
  links={[
    {href: 'https://data-lupe-auwjen2rbvqix9qmawjnms.streamlit.app/', label: 'Webアプリを開く', isPrimary: true},
    {href: 'https://github.com/k5fujiwara/data-lupe.git', label: 'GitHubでコードを見る'},
  ]}>
  <p><strong>DataLupe</strong> は、CSVをアップロードするだけで、データの全体像・品質・関係性を自動診断できるデータサイエンス入門Webアプリです。</p>
  <p>Python、pandas、plotly、Streamlitを使い、成績・アンケート・気象・売上・人口など、さまざまなCSVデータの「まずどこを見るべきか」をやさしく示します。</p>
</ProductHero>

<TOCCollapsible toc={toc} />

## このアプリについて

| 項目 | 内容 |
| :--- | :--- |
| 名称 | DataLupe |
| URL | [https://data-lupe-auwjen2rbvqix9qmawjnms.streamlit.app/](https://data-lupe-auwjen2rbvqix9qmawjnms.streamlit.app/) |
| GitHub | [https://github.com/k5fujiwara/data-lupe.git](https://github.com/k5fujiwara/data-lupe.git) |
| 対象 | データ分析を始めたばかりの中高生・大学生、CSV分析の入口で迷っている人 |
| 形式 | Streamlit Webアプリ |

CSVを開いたときに「どこから見ればよいか分からない」という課題を、データ概要、品質診断、統計、可視化、日本語インサイトで支援します。

## 画面イメージ

<figure className="task-automailer-shot">
  <img src="/img/apps/datalupe/datalupe-dashboard.png" alt="DataLupeのダッシュボード画面。CSVデータの概要、フィルター、相関ヒートマップを表示している" loading="lazy" />
  <figcaption>DataLupeのダッシュボード画面 — CSVを読み込むと、概要カード、フィルター、相関ヒートマップなどを確認できます。</figcaption>
</figure>

## 解決する課題

- CSVを開いても、どの列から確認すればよいか分からない
- 欠損値、外れ値、データ型など、前処理で見るべきポイントに気づきにくい
- 統計用語やグラフの選び方が分からず、分析の第一歩で止まりやすい
- 成績、アンケート、気温、売上、人口など、データの種類ごとに毎回分析方法で迷ってしまう

## できること

| 機能 | 説明 |
| :--- | :--- |
| 列の自動分類 | 数値・カテゴリ・日付・テキスト・IDを自動判定 |
| 分析しやすさスコア | データがどれくらい分析しやすいかを確認 |
| データ品質診断 | 欠損値、重複行、IQR法による外れ値を確認 |
| 記述統計 | 平均、中央値、標準偏差、歪度、変動係数などを表示 |
| 関係性の確認 | 相関ヒートマップ、散布図、近似直線で列同士の関係を見る |
| 可視化 | 箱ひげ図、棒グラフ、散布図などを使って傾向を確認 |
| 日本語インサイト | ルールベースで、見るべきポイントや次の分析ステップを提案 |

## 使用技術

DataLupe は、Pythonでデータ分析を学ぶ人が、Webアプリとして実際に公開するところまで体験できる構成です。

### アプリを作る技術

| 技術 | このアプリでの役割 |
| :--- | :--- |
| Python 3.11+ | データ処理、判定ロジック、画面制御を書く |
| Streamlit | PythonだけでWebアプリの画面を作る |
| pandas | CSV読み込み、欠損値確認、統計計算、列分類を行う |
| plotly | インタラクティブなグラフを表示する |

### 公開・運用に使うサービス

| サービス | このアプリでの役割 |
| :--- | :--- |
| GitHub | コード管理、公開リポジトリ、Streamlitとの連携 |
| Streamlit Community Cloud | 無料でWebアプリとして公開し、GitHub更新時に再デプロイ |

## データサイエンス入門の実例として見る

DataLupe は、Pythonを使ったデータサイエンス入門の流れを、1つのアプリで体験できる実例です。

| ステップ | 学べること |
| :--- | :--- |
| 概要確認 | 行数、列数、列名、データ型を確認する |
| 品質チェック | 欠損値、重複行、外れ値を確認する |
| 統計 | 平均、中央値、標準偏差、歪度、変動係数を読む |
| 関係性 | 相関や散布図で、数値列同士の関係を見る |
| 可視化 | グラフで傾向や偏りを見つける |
| インサイト | 分析結果から次に見るべきポイントを考える |

AI APIは使わず、ルールベースの日本語インサイトで初心者にも分かりやすく説明している点が特徴です。

## サンプルデータ

| ファイル | 内容 |
| :--- | :--- |
| `survey.csv` | アンケート結果（100行） |
| `weather.csv` | 気象データ（1,460行） |
| `sales.csv` | 売上データ（500行） |

サンプルデータを使うことで、自分のCSVを用意していなくても、データ分析の流れを試せます。

## こんな人におすすめ

- Pythonでデータ分析を学び始めた中高生・大学生
- Excelは使えるが、Pythonやpandasはこれから学ぶ人
- アンケートや売上などのCSVを持っているが、分析の入口が分からない人
- 情報Ⅰや探究学習でデータを扱う人
- データサイエンスの基本フローを体験したい人

## 工夫した点

- AIを使わず、ルールベースの日本語インサイトで初心者にも分かりやすく説明
- グラフ種別に応じて、X/Y軸や集計方法を選べるカスタム可視化を用意
- 棒グラフでは平均、合計、件数などの集計に対応
- ダークテーマのダッシュボードUIで、タブを切り替えながら段階的に分析できる
- アップロードしたデータはセッション内のみ保持し、サーバーへ永続保存しない

## 注意事項

- CSVファイルは50MB以下を推奨しています
- 対応文字コードは UTF-8、Shift_JIS、cp932、latin-1 です
- アップロードしたデータはセッション内のみ保持され、サーバーに永続保存されません
- Excelファイル、PDF出力、AIインサイトは現バージョンでは未対応です

## 今後の拡張予定

- Excel（.xlsx）ファイル対応
- 相関係数ヒートマップの高度化
- 外れ値の詳細ハイライト
- 分析レポートのPDF/画像出力

## Code Recipe とのつながり

DataLupe は、Pythonを「文法の学習」から「実際に役立つデータ分析アプリ」へつなげる開発実例です。

- [Python](/docs/development/languages/python/) — CSV読み込み、データ処理、ライブラリ活用の基礎
- [SQL](/docs/development/languages/sql/) — データを取り出して分析する考え方
- [R](/docs/development/languages/r/) — 統計分析や可視化をさらに学びたいとき
- [技術選定ガイド](/docs/development/technology-selection/) — なぜPython、Streamlit、pandasを選ぶのか考えたいとき
- [開発用語集](/docs/development/glossary/) — CSV、データ型、デプロイなどの言葉を確認したいとき

## 関連リンク

- [DataLupe を開く](https://data-lupe-auwjen2rbvqix9qmawjnms.streamlit.app/)
- [GitHubリポジトリ](https://github.com/k5fujiwara/data-lupe.git)
- [開発実例一覧](./)
