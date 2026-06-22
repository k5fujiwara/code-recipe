---
sidebar_position: 6
title: PHP
description: Webサーバー側で使われるPHPの基本、文法、フォーム、WordPressやLaravelを学ぶ
---

# PHP

PHPは、WebサイトやWebアプリのサーバー側でよく使われる言語です。お問い合わせフォーム、ログイン、会員登録、ブログ、WordPressのカスタマイズなどで使われます。

## 何ができる？

- フォームから送られた内容を受け取る
- ログインや会員登録を作る
- データベースから記事や商品を表示する
- WordPressテーマやプラグインをカスタマイズする
- 中小規模のWebアプリを作る

## 学習ゴール

このページでは、次の状態を目指します。

- PHPがサーバー側で動く言語だと説明できる
- 変数、条件分岐、配列、繰り返しを書ける
- HTMLフォームの値をPHPで受け取れる
- 画面に出す値を安全に扱う意識を持てる
- WordPressとLaravelの違いをざっくり説明できる

## 開発環境の準備

PHPはサーバー側で動くため、HTMLのようにファイルを直接開くだけでは学習しにくいです。次のような環境を使います。

| 方法 | 向いている人 |
| --- | --- |
| XAMPP / MAMP | まずローカルでPHPを動かしたい人 |
| Docker | 実務に近い環境に慣れたい人 |
| レンタルサーバー | WordPressや公開を試したい人 |
| Laravel Sail | Laravelを学びたい人 |

初心者は、まずXAMPPやMAMPで `localhost` からPHPを表示する流れを体験すると分かりやすいです。

## 基本の書き方

PHPは `<?php` から書き始めます。

```php
<?php
$message = 'こんにちは、PHP';
echo $message;
```

変数には `$` をつけます。`echo` は画面に文字を出力する命令です。

## HTMLとの組み合わせ

PHPはHTMLの中に埋め込んで使えます。

```php
<?php
$title = 'お知らせ';
?>

<h1><?php echo $title; ?></h1>
```

サーバー側で値を作り、その結果をHTMLとして表示できます。

## 条件分岐

```php
<?php
$score = 85;

if ($score >= 80) {
    echo 'よくできました';
} else {
    echo 'もう少し練習しよう';
}
```

## 配列

```php
<?php
$languages = ['HTML', 'CSS', 'PHP'];

foreach ($languages as $language) {
    echo $language;
}
```

`foreach` を使うと、配列の中身を順番に取り出せます。

## フォームの基本

HTMLのフォームから送られた値を、PHPで受け取れます。

```html
<form method="post" action="contact.php">
  <input name="username" />
  <button type="submit">送信</button>
</form>
```

```php
<?php
$username = $_POST['username'] ?? '';
echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
```

画面に出す文字は、`htmlspecialchars` で安全に表示することが大切です。

## データベースとの関係

PHPは、MySQLなどのデータベースと組み合わせて使われることが多いです。

| 処理 | 例 |
| --- | --- |
| 作成 | 新しい記事やユーザーを登録する |
| 読み取り | 記事一覧や商品一覧を表示する |
| 更新 | プロフィールや在庫数を変更する |
| 削除 | 投稿やコメントを削除する |

この4つは `CRUD` と呼ばれます。Webアプリの多くは、CRUDを組み合わせて作られています。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| WordPress | ブログやCMSサイトを作る |
| Laravel | 本格的なWebアプリを作る |
| Composer | PHPライブラリを管理する |
| MySQL | データベースに保存する |
| XAMPP / Docker | ローカル開発環境を作る |

## WordPressとLaravelの違い

| 技術 | 向いていること |
| --- | --- |
| WordPress | ブログ、企業サイト、CMS、既存テーマのカスタマイズ |
| Laravel | ログイン、予約、管理画面などを持つ独自Webアプリ |

WordPressは「サイトを作って運用する」ことに強く、Laravelは「Webアプリの仕組みを自分で設計する」ことに向いています。

## 最初に作るもの

お問い合わせフォームがおすすめです。

- 名前とメールアドレスを入力する
- 入力内容をPHPで受け取る
- 未入力ならエラーを出す
- 送信内容を確認画面に表示する

## ミニ演習: 入力内容の確認

フォームから名前を受け取り、画面に表示してみましょう。

```php
<?php
$username = $_POST['username'] ?? '';
$safeUsername = htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
?>

<form method="post">
  <input name="username" placeholder="名前" />
  <button type="submit">送信</button>
</form>

<?php if ($safeUsername !== ''): ?>
  <p>こんにちは、<?php echo $safeUsername; ?>さん</p>
<?php endif; ?>
```

ポイントは、入力された値をそのまま画面に出さず、`htmlspecialchars` を通すことです。

## つまずきやすいところ

- HTMLとPHPの役割が混ざる
- `$_POST` や `$_GET` の扱いに慣れない
- 文字化けする
- セキュリティ対策を忘れる
- データベース接続でエラーになる

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| PHPコードがそのまま表示される | PHPサーバーで開いていない | `localhost` 経由で開く |
| 文字化けする | 文字コード設定不足 | UTF-8設定 |
| `Undefined index` が出る | 値が送信されていない | `?? ''` で初期値を用意 |
| フォーム値が取れない | `name` がない | inputの `name` 属性 |
| SQLエラーになる | SQL文や接続設定が違う | DB名、ユーザー名、SQL |

## 注意したいセキュリティ

PHPでフォームやデータベースを扱うときは、次の考え方が大切です。

- 画面に出す文字はエスケープする
- SQLはプレースホルダを使う
- パスワードはそのまま保存しない
- 入力値を信用しすぎない

## チェックリスト

- [ ] PHPがサーバー側で動くことを説明できる
- [ ] 変数に `$` を付けて書ける
- [ ] `if` と `foreach` を使える
- [ ] フォームの値を `$_POST` で受け取れる
- [ ] `htmlspecialchars` の役割を説明できる
- [ ] WordPressとLaravelの違いを説明できる
- [ ] SQLと組み合わせる必要性を理解している

## 次に学ぶこと

PHPの基本が分かったら、SQLでデータベース操作を学びましょう。その後、LaravelやWordPressに進むと、実用的なWeb制作・Webアプリ開発につながります。
