---
sidebar_position: 6
title: Ruby on Rails
description: RubyでWebアプリを素早く作るRailsの基本、MVC、CRUD、関連技術を学ぶ
---

# Ruby on Rails

Ruby on Railsは、RubyでWebアプリを素早く作るためのフレームワークです。ルールに沿って作ることで、投稿、一覧、編集、削除、ログインなどの機能を効率よく実装できます。

## 何ができる？

- 投稿アプリを作る
- SNSや予約サイトを作る
- 管理画面を作る
- データベースを使ったWebアプリを作る
- CRUDを素早く実装する

## 学習前に知っておきたいこと

- Rubyの基本文法
- 配列とハッシュ
- メソッドとクラス
- SQLの基本
- HTMLフォーム

## Railsの基本構成

| 場所 | 役割 |
| --- | --- |
| `app/models` | データとルール |
| `app/views` | 画面 |
| `app/controllers` | 処理の流れ |
| `config/routes.rb` | URL設定 |
| `db/migrate` | DB構造の変更 |

## MVC

Railsでは、MVCを理解するとファイルの役割が見えやすくなります。

| 役割 | 意味 |
| --- | --- |
| Model | データやルールを扱う |
| View | HTMLとして表示する |
| Controller | リクエストを受けてModelとViewをつなぐ |

## CRUD

| 操作 | Railsでの例 |
| --- | --- |
| Create | 投稿を作る |
| Read | 投稿一覧を見る |
| Update | 投稿を編集する |
| Delete | 投稿を削除する |

多くのWebアプリは、CRUDを組み合わせて作られています。

## ルーティングの例

```ruby
resources :posts
```

この1行で、投稿の一覧、詳細、作成、編集、削除に必要なルートをまとめて作れます。

## よく使う関連技術

| 技術 | 役割 |
| --- | --- |
| Active Record | データベース操作 |
| ERB | HTMLテンプレート |
| RSpec | テスト |
| Devise | 認証 |
| Hotwire | 動的な画面 |

## ミニ演習: 投稿アプリの流れ

投稿一覧を作るときの流れは次の通りです。

1. `routes.rb` にルートを書く
2. Controllerで投稿を取得する
3. Viewで投稿を表示する
4. Modelでデータのルールを管理する

まずは「URL → Controller → Model → View」の流れをつかみましょう。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| ルートがない | `routes.rb` 未設定 | `rails routes` |
| DBエラー | migrateしていない | `rails db:migrate` |
| 変数が表示されない | Viewへ渡していない | Controller |
| Model名で迷う | 単数/複数の違い | Railsの命名規則 |
| 認証が難しい | 仕組みが多い | Deviseなどを段階的に |

## チェックリスト

- [ ] RailsがRubyのフレームワークだと説明できる
- [ ] MVCを説明できる
- [ ] CRUDを説明できる
- [ ] `routes.rb` の役割を説明できる
- [ ] migrationの役割を説明できる

## 次に学ぶこと

Railsの基本が分かったら、投稿アプリにログイン、画像投稿、検索、いいね機能を追加してみましょう。
