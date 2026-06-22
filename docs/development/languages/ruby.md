---
sidebar_position: 7
title: Ruby
description: 日本生まれのRubyの基本文法、オブジェクト、Ruby on Railsを学ぶ
---

# Ruby

Rubyは、日本で生まれたプログラミング言語です。読みやすく書きやすい文法が特徴で、Webアプリ開発では `Ruby on Rails` というフレームワークと一緒に使われることが多いです。

## 何ができる？

- Webアプリを素早く作る
- SNS、予約サイト、投稿サイトを作る
- 管理画面を作る
- データベースを使ったアプリを作る
- スクリプトで作業を自動化する

## 学習ゴール

このページでは、次の状態を目指します。

- Rubyの基本文法を読める
- 配列、ハッシュ、メソッドを使える
- クラスとオブジェクトの入口を理解できる
- Ruby on RailsのMVCを説明できる
- 投稿アプリのようなCRUDの流れをイメージできる

## 開発環境の準備

Rubyを学ぶ方法はいくつかあります。

| 方法 | 向いている人 |
| --- | --- |
| オンライン実行環境 | インストールせず文法を試したい人 |
| ローカルにRubyを入れる | 基本文法をしっかり練習したい人 |
| Rails環境を作る | Webアプリ開発まで進みたい人 |
| Docker | 実務に近い環境で学びたい人 |

最初はオンライン実行環境で文法を試し、Railsへ進む段階でローカル環境を整える流れでも大丈夫です。

## 基本の書き方

```ruby
message = 'こんにちは、Ruby'
puts message
```

`puts` は文字を表示する命令です。Rubyは記号が少なく、文章に近い感覚で読みやすいのが特徴です。

## 変数

```ruby
name = 'Code Recipe'
count = 3
is_published = true
```

Rubyでは、変数に型を書く必要はありません。値の種類はRubyが判断します。

## 条件分岐

```ruby
score = 85

if score >= 80
  puts 'よくできました'
else
  puts 'もう少し練習しよう'
end
```

Rubyでは、ブロックの終わりに `end` を書きます。

## 配列と繰り返し

```ruby
languages = ['HTML', 'CSS', 'Ruby']

languages.each do |language|
  puts language
end
```

`each` は、配列の中身を1つずつ取り出して処理する書き方です。

## ハッシュ

ハッシュは、名前付きのデータをまとめる仕組みです。

```ruby
language = {
  name: 'Ruby',
  purpose: 'Webアプリ開発',
  beginner_friendly: true
}

puts language[:name]
```

JavaScriptのオブジェクトに近い使い方ができます。

## メソッド

```ruby
def greet(name)
  "こんにちは、#{name}さん"
end

puts greet('太郎')
```

メソッドは、処理に名前をつけて再利用する仕組みです。

## クラスとオブジェクト

Rubyでは、データと処理をまとめて「もの」として扱えます。

```ruby
class User
  def initialize(name)
    @name = name
  end

  def greet
    "こんにちは、#{@name}さん"
  end
end

user = User.new('太郎')
puts user.greet
```

`class` は設計図、`User.new` で作られた `user` は実体です。Railsでもこの考え方が土台になります。

## Ruby on Rails

RubyをWebアプリ開発で使うときは、Ruby on Railsがよく使われます。Railsは、ログイン、投稿、一覧表示、データベース操作など、Webアプリでよく使う仕組みを作りやすくするフレームワークです。

Railsでは、主に次の考え方を使います。

| 役割 | 意味 |
| --- | --- |
| Model | データやルールを扱う |
| View | 画面を表示する |
| Controller | リクエストを受け取り、処理をつなぐ |
| Routing | URLと処理を結びつける |
| Migration | データベースの形を管理する |

## CRUDの考え方

Railsで最初に作るWebアプリでは、CRUDを理解することが大切です。

| 操作 | 意味 | 例 |
| --- | --- | --- |
| Create | 作成 | 投稿を作る |
| Read | 読み取り | 投稿一覧を見る |
| Update | 更新 | 投稿を編集する |
| Delete | 削除 | 投稿を消す |

ブログ、メモアプリ、予約システム、管理画面など、多くのWebアプリはCRUDを組み合わせて作られます。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| Ruby on Rails | Webアプリを素早く作る |
| Bundler | ライブラリを管理する |
| RSpec | テストを書く |
| PostgreSQL / MySQL | データベースを使う |
| Hotwire | JavaScriptを少なめにして動的な画面を作る |

## Railsでよく見るファイル

| 場所 | 役割 |
| --- | --- |
| `app/models` | データやルール |
| `app/views` | 表示する画面 |
| `app/controllers` | リクエストを受けて処理をつなぐ |
| `config/routes.rb` | URLの設定 |
| `db/migrate` | データベース構造の変更履歴 |

Railsはファイルが多いので、最初は「どの役割のファイルか」を意識して読むのがおすすめです。

## 最初に作るもの

投稿アプリがおすすめです。

- 投稿を作成する
- 投稿一覧を表示する
- 投稿詳細を見る
- 投稿を編集・削除する
- データベースに保存する

## ミニ演習: 配列の投稿一覧

まずはRailsに進む前に、Rubyだけで投稿一覧のようなデータを扱ってみましょう。

```ruby
posts = [
  {title: 'Rubyを学ぶ', body: '基本文法を練習しました'},
  {title: 'Railsに進む', body: '投稿アプリを作ってみたいです'}
]

posts.each do |post|
  puts "タイトル: #{post[:title]}"
  puts "本文: #{post[:body]}"
end
```

配列とハッシュを組み合わせると、Webアプリで扱うデータに近い形を表せます。

## つまずきやすいところ

- `end` を書き忘れる
- 配列とハッシュの使い分け
- Railsのファイル構成に慣れるまで時間がかかる
- Model、View、Controllerの役割が混ざる
- データベースの設定で迷う

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| `end` のエラー | ブロックの閉じ忘れ | `if`、`def`、`class` の対応 |
| 値が `nil` になる | キーや変数名が違う | ハッシュのキー名 |
| メソッドが見つからない | 名前の間違い | スペルと対象オブジェクト |
| Railsで画面が出ない | ルーティング未設定 | `config/routes.rb` |
| DBエラーになる | マイグレーション不足 | `rails db:migrate` |

## チェックリスト

- [ ] `puts` で値を表示できる
- [ ] `if` と `each` を使える
- [ ] 配列とハッシュを使い分けられる
- [ ] メソッドを定義できる
- [ ] クラスの基本を読める
- [ ] MVCの役割を説明できる
- [ ] CRUDの意味を説明できる

## 次に学ぶこと

Rubyの文法に慣れたら、Ruby on Railsで小さな投稿アプリを作ってみましょう。ログイン、画像投稿、検索機能を足していくと、実際のWebサービスに近づきます。
