---
sidebar_position: 5
title: Laravel
description: PHPで本格的なWebアプリを作るLaravelの基本、MVC、ルーティング、関連技術を学ぶ
---

# Laravel

Laravelは、PHPで本格的なWebアプリを作るためのフレームワークです。ルーティング、データベース操作、認証、テンプレート、メール送信など、Webアプリに必要な仕組みがまとまっています。

## 何ができる？

- ログイン付きWebアプリを作る
- 管理画面を作る
- データベースと連携する
- お問い合わせフォームを作る
- APIを作る

## 学習前に知っておきたいこと

- PHPの基本文法
- HTMLフォーム
- SQLの基本
- サーバー側で処理が動く仕組み

## Laravelの基本構成

| 場所 | 役割 |
| --- | --- |
| `routes/web.php` | URLと処理をつなぐ |
| `app/Http/Controllers` | リクエストを受けて処理する |
| `app/Models` | データやルールを扱う |
| `resources/views` | 画面を表示する |
| `database/migrations` | DBの形を管理する |

## ルーティングの例

```php
Route::get('/hello', function () {
    return 'Hello Laravel';
});
```

URLにアクセスされたとき、どの処理を動かすかを決めます。

## MVC

| 役割 | 意味 |
| --- | --- |
| Model | データとルール |
| View | 表示する画面 |
| Controller | 処理の流れをつなぐ |

Laravelでは、MVCを意識するとファイルの役割が分かりやすくなります。

## よく使う関連技術

| 技術 | 役割 |
| --- | --- |
| Blade | HTMLテンプレート |
| Eloquent | データベース操作 |
| Artisan | コマンド操作 |
| Composer | PHPライブラリ管理 |
| Laravel Breeze | 認証の土台 |

## ミニ演習: 一覧ページの流れ

Laravelで投稿一覧を作るときは、次の流れになります。

1. ルーティングを作る
2. Controllerで投稿データを取得する
3. Viewにデータを渡す
4. Bladeで一覧表示する

```php
Route::get('/posts', [PostController::class, 'index']);
```

まずは「URL → Controller → View」の流れをつかみましょう。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| ページが見つからない | ルート未定義 | `routes/web.php` |
| DBエラー | migration未実行 | `php artisan migrate` |
| クラスが見つからない | namespace違い | use文 |
| 画面に値が出ない | Viewへ渡していない | controllerのreturn |
| 認証が難しい | 仕組みが多い | Breezeなどから始める |

## チェックリスト

- [ ] LaravelがPHPのフレームワークだと説明できる
- [ ] ルーティングの役割を説明できる
- [ ] MVCを説明できる
- [ ] migrationの役割を説明できる
- [ ] Eloquentの役割を説明できる

## 次に学ぶこと

Laravelの基本が分かったら、CRUD、バリデーション、認証、ファイルアップロード、API開発へ進みましょう。
