---
sidebar_position: 7
title: Django / FastAPI
description: PythonでWebアプリやAPIを作るDjangoとFastAPIの違い、基本、学習ルートを学ぶ
---

# Django / FastAPI

DjangoとFastAPIは、PythonでWebアプリやAPIを作るためのフレームワークです。Djangoは機能がそろったWebアプリ向け、FastAPIは高速で書きやすいAPI開発向けです。

## 何ができる？

- PythonでWebアプリを作る
- APIサーバーを作る
- データベースと連携する
- 管理画面を作る
- AIやデータ分析の結果をアプリに組み込む

## DjangoとFastAPIの違い

| 技術 | 向いていること |
| --- | --- |
| Django | 管理画面、ログイン、データベース付きWebアプリ |
| FastAPI | API、AI連携、マイクロサービス |

Djangoは「全部入りのWebアプリ土台」、FastAPIは「APIを速く作る土台」と考えると分かりやすいです。

## 学習前に知っておきたいこと

- Pythonの基本文法
- 関数と辞書
- SQLの基本
- HTTPとJSONの基本

## Djangoの特徴

| 機能 | 役割 |
| --- | --- |
| Model | データベースの形を定義する |
| View | リクエストを受けて処理する |
| Template | HTMLを表示する |
| Admin | 管理画面 |
| ORM | PythonからDBを扱う |

Djangoは、管理画面が強力なので、データを登録・編集するアプリを作りやすいです。

## FastAPIの基本形

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello FastAPI"}
```

Pythonの型ヒントを活かして、APIの入力や出力を分かりやすく書けます。

## よく使う関連技術

| 技術 | 役割 |
| --- | --- |
| SQLAlchemy | DB操作 |
| Pydantic | データ検証 |
| PostgreSQL | データ保存 |
| Uvicorn | FastAPIを動かす |
| Django REST Framework | DjangoでAPIを作る |

## ミニ演習: JSONを返すAPI

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/profile")
def profile():
    return {
        "name": "Code Recipe",
        "skill": "Python API"
    }
```

ブラウザやAPIクライアントで `/api/profile` を開いて、JSONが返るか確認してみましょう。

## よくあるつまずき

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| サーバーが起動しない | コマンドやパス違い | 実行場所 |
| importエラー | パッケージ不足 | 仮想環境とpip |
| DB接続できない | URLや設定違い | `.env` やsettings |
| APIの型エラー | 入力データが違う | Pydanticモデル |
| Djangoのファイルが多い | 役割を把握していない | Model/View/Template |

## チェックリスト

- [ ] DjangoとFastAPIの違いを説明できる
- [ ] FastAPIでJSONを返すAPIを読める
- [ ] DjangoのModel/View/Templateを説明できる
- [ ] APIとWebアプリの違いを説明できる
- [ ] PythonとSQLを組み合わせる理由を説明できる

## 次に学ぶこと

Webアプリを作りたいならDjango、ReactやAIアプリの裏側を作りたいならFastAPIがおすすめです。どちらもSQLと認証を学ぶと実用的になります。
