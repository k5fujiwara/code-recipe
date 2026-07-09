---
sidebar_position: 3
title: SNSやAPI連携の準備
description: SNSアカウントやAPIキーを安全に扱うための基本
---

# SNSやAPI連携の準備

Webアプリを作っていくと、SNSログイン、地図、天気、AI、決済など、外部サービスとつなぐ場面が出てきます。

このページでは、登録前に知っておきたい考え方をまとめます。

## よく使う登録先の例

- GitHub: コード管理、公開、共同開発
- Google: ログイン、地図、スプレッドシート連携
- X / Instagram / LINE: SNS連携や共有導線
- OpenAI などのAIサービス: AI API連携
- Vercel / Netlify: Webアプリの公開

## APIキーとは

APIキーは、サービスを使うための「ひみつの合言葉」のようなものです。

コードに直接書いて公開すると、他の人に勝手に使われる危険があります。

```text
公開してよいもの: サイト名、説明文、公開URL
公開してはいけないもの: APIキー、パスワード、アクセストークン
```

## 安全に進めるルール

1. APIキーは `.env` などの環境変数に入れる
2. `.env` は GitHub に push しない
3. 料金が発生するサービスは、必ず保護者や先生と確認する
4. SNS連携では、公開される情報を事前に確認する

## .env の使い方（コピペで使える形）

APIキーをコードに直接書かず、`.env` ファイルに分ける具体的な手順です。

### 1. プロジェクト直下に .env を作る

```text
API_KEY=ここに自分のAPIキー
WEATHER_API_URL=https://api.example.com/weather
```

- `変数名=値` の形で1行ずつ書きます。値を引用符で囲む必要は基本ありません。
- ファイル名は先頭にドットがついた `.env` です。

### 2. .gitignore に追加する

**`.env` を作ったら、コードを書く前に** `.gitignore` へ追加します。この順番が大切です。

```text
.env
```

### 3. Python から読み込む

`python-dotenv` パッケージを使うのが定番です。

```shell
pip install python-dotenv
```

```python
import os
from dotenv import load_dotenv

load_dotenv()  # .env を読み込む

api_key = os.getenv("API_KEY")

if api_key is None:
    raise RuntimeError(".env に API_KEY を設定してください")

print("APIキーを読み込みました")
```

- `os.getenv("API_KEY")` で、`.env` に書いた値を取り出せます。
- キーが設定されていない場合は `None` が返るので、早めにエラーにして気づけるようにしています。

### 4. JavaScript (Node.js) から読み込む

Node.js v20 以降は、追加パッケージなしで読み込めます。

```shell
node --env-file=.env app.js
```

```javascript
const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error(".env に API_KEY を設定してください");
}

console.log("APIキーを読み込みました");
```

## APIを呼び出す最小の例

天気などの Web API は、だいたい「URL＋キー」で呼び出す形です。Python の例を示します。

```shell
pip install requests
```

```python
import os
import requests
from dotenv import load_dotenv

load_dotenv()

url = "https://api.example.com/weather"
params = {
    "city": "Osaka",
    "appid": os.getenv("API_KEY"),
}

response = requests.get(url, params=params, timeout=10)

print(response.status_code)  # 200 なら成功
print(response.json())       # 結果を辞書として表示
```

- `params` に渡した内容は、URL の `?city=Osaka&appid=...` というクエリになります（[URLの基本](/docs/development/url-basics/)）。
- `response.status_code` が `401` ならキーの間違い、`429` なら呼び出しすぎです（[HTTPとHTTPS](/docs/development/http-https/)）。
- `timeout=10` を付けると、応答がないときに10秒で諦めてくれます。

## もしキーを公開してしまったら

APIキーを GitHub に push してしまった場合、**削除コミットだけでは不十分** です。履歴に残っているため、次の順で対応します。

1. サービスの管理画面で、そのキーを **無効化（再発行）** する
2. 新しいキーを `.env` に入れ直す
3. `.gitignore` に `.env` があることを確認してから push する

「キーそのものを無効にする」が最優先です。履歴の書き換えより先に行います。

## よくある失敗

| 失敗 | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| `.env` を先に push してから `.gitignore` に書く | 履歴にキーが残る | キーを再発行し、以後は先に `.gitignore` |
| キーをスクリーンショットで共有する | 画像からキーが漏れる | キー部分を隠すか、そもそも写さない |
| フロントエンドの JavaScript にキーを書く | ページのソースから誰でも見える | サーバー側（バックエンド）でキーを使う |
| 無料枠の上限を確認しない | 気づかず課金される | 料金ページと上限設定を先に確認する |

## チェックリスト

- [ ] APIキーは `.env` に入れ、コードには書いていない
- [ ] `.gitignore` に `.env` を追加してから push した
- [ ] キーが読み込めないときにエラーで気づける書き方にした
- [ ] 料金が発生する条件を確認した（保護者・先生とも共有）
- [ ] 万一漏らしたときの再発行手順を確認した
