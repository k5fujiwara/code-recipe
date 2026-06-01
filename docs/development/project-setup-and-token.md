---
sidebar_position: 3
title: プロジェクト立ち上げとトークン発行
description: GitHubで新しい開発プロジェクトを始める準備とトークンの安全な扱い
---

# プロジェクト立ち上げとトークン発行

GitHubアカウントを作ったら、次は自分のコードを保存する場所を作ります。

このページでは、新しいプロジェクトを始める流れと、必要になることがあるアクセストークンの発行方法、安全な扱い方をまとめます。

## できるようになること

- GitHubで新しいリポジトリを作れる
- ローカルPCにプロジェクトを用意できる
- 変更をGitHubへ保存できる
- トークンやAPIキーを安全に扱える

## 1. 新しいリポジトリを作る

リポジトリは、コードや設定ファイルを保存するプロジェクトの箱です。

1. GitHubにログインする
2. 右上の `+` から `New repository` を選ぶ
3. `Repository name` にプロジェクト名を入れる
4. 学習用なら `Public`、非公開で練習したいなら `Private` を選ぶ
5. `Add a README file` を必要に応じて選ぶ
6. `Create repository` を押す

```text
例:
repository name: my-first-site
description: はじめて作る自己紹介サイト
```

## 2. ローカルPCへ準備する

学習では、先にローカルPCでプロジェクトを作り、そのフォルダをGitHubのリポジトリにつなぐ流れが分かりやすいです。

プロジェクトのフォルダを開いた状態で、次のコマンドを実行します。

```shell
git init
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
```

`git remote add origin ...` のURLは、自分がGitHubで作ったリポジトリのURLに置き換えます。

## 3. 作業の基本サイクル

プロジェクトを進めるときは、次の流れをくり返します。

```shell
git status
git add .
git commit -m "変更内容を短く書く"
git push
```

`git status` は、今どのファイルが変わっているかを確認するコマンドです。pushする前に見る習慣をつけましょう。

## 4. トークンが必要になる場面

トークンは、パスワードの代わりに使う「期限や権限を決められる鍵」です。

たとえば、次のような場面で使うことがあります。

- コマンドラインからGitHubへpushする
- GitHub Actionsから外部サービスへ接続する
- APIを使ってGitHubの情報を取得する
- 自動デプロイや連携ツールを使う

## 5. GitHubトークンを発行する

GitHubでは、できるだけ **Fine-grained personal access token** を使うのがおすすめです。

1. GitHub右上のアイコンを押す
2. `Settings` を開く
3. 左メニューの `Developer settings` を開く
4. `Personal access tokens` を選ぶ
5. `Fine-grained tokens` を選ぶ
6. `Generate new token` を押す
7. 対象リポジトリ、期限、必要な権限だけを選ぶ
8. 作成されたトークンを安全な場所に保存する

## 6. 権限は最小限にする

トークンは、必要な権限だけを渡します。

```text
よい例:
特定のリポジトリだけ
期限は30日または90日
必要な権限だけをRead / Writeにする

避けたい例:
すべてのリポジトリにアクセスできる
期限なし
不要なAdmin権限をつける
```

学習用では、まず「このリポジトリだけ」「短い期限」「必要な操作だけ」を基本にしましょう。

## 7. トークンを安全に扱う

トークンは、コードに直接書いてはいけません。

```text
公開してよいもの:
サイト名、説明文、公開URL、GitHubの公開リポジトリURL

公開してはいけないもの:
トークン、APIキー、パスワード、秘密鍵、.env の中身
```

ローカルで使う秘密情報は `.env` に入れ、`.gitignore` でGitHubへ送られないようにします。

```text
.env
```

もし間違ってトークンを公開してしまったら、すぐにGitHubの設定画面で削除し、新しいトークンを作り直します。

## 8. GitHub Actionsで使う場合

GitHub ActionsでトークンやAPIキーを使う場合は、リポジトリの `Secrets` に保存します。

1. リポジトリの `Settings` を開く
2. `Secrets and variables` を開く
3. `Actions` を選ぶ
4. `New repository secret` を押す
5. 名前と値を登録する

コード側では、次のように参照します。

```yaml
env:
  API_TOKEN: ${{ secrets.API_TOKEN }}
```

Secretsに入れた値は、通常の画面には表示されません。チームで使うときも、誰がどの権限を持つかを確認しておきましょう。

## 9. 最初に確認するチェックリスト

- GitHubアカウントを作った
- リポジトリを作った
- ローカルにcloneした、またはremoteを設定した
- `git status` で変更を確認できる
- `git push` でGitHubへ送れる
- `.env` をGitHubへ送らない設定にした
- トークンは必要なときだけ、最小権限で作る
