---
sidebar_position: 8
title: Python
description: AI、自動化、データ分析で使われるPythonの基本文法、ライブラリ、学習ルートを学ぶ
---

# Python

Pythonは、読みやすい文法でAI、自動化、データ分析、Webアプリ開発などに使われる言語です。初心者が最初に学ぶ言語としても人気があります。

## 何ができる？

- AI・機械学習のプログラムを作る
- Excelやファイル操作を自動化する
- Webからデータを集める
- データを集計してグラフ化する
- WebアプリやAPIを作る

## 学習ゴール

- 変数、条件分岐、繰り返し、関数を書ける
- リストと辞書を使える
- ファイルを読み書きできる
- ライブラリを使う考え方が分かる
- AIやデータ分析へ進む入口を理解できる

## 開発環境の準備

| 方法 | 向いている人 |
| --- | --- |
| Google Colab | AI・データ分析をすぐ試したい人 |
| ローカルのPython | 自動化や小さなツールを作りたい人 |
| Jupyter Notebook | データ分析を手順ごとに確認したい人 |
| venv | プロジェクトごとに環境を分けたい人 |

最初はGoogle Colabを使うと、インストールなしでPythonを試せます。

## 基本文法

```python
message = "こんにちは、Python"
print(message)
```

Pythonでは、文のまとまりをインデントで表します。

```python
score = 85

if score >= 80:
    print("よくできました")
else:
    print("もう少し練習しよう")
```

## リストと辞書

```python
languages = ["HTML", "CSS", "Python"]

for language in languages:
    print(language)
```

辞書は、名前付きのデータをまとめる仕組みです。

```python
user = {
    "name": "太郎",
    "age": 15,
    "skills": ["Python", "SQL"],
}

print(user["name"])
```

## 関数

```python
def greet(name):
    return f"こんにちは、{name}さん"

print(greet("太郎"))
```

関数を使うと、同じ処理を何度も使い回せます。

## ライブラリ・フレームワーク

| 技術 | できること |
| --- | --- |
| pandas | 表形式データの集計・加工 |
| matplotlib | グラフ作成 |
| scikit-learn | 機械学習の基本 |
| PyTorch | AIモデル開発 |
| FastAPI | APIサーバー開発 |
| Django | Webアプリ開発 |

## ミニ演習: 点数の平均を出す

```python
scores = [80, 95, 72, 88]

total = sum(scores)
average = total / len(scores)

print(f"平均点は{average}点です")
```

慣れてきたら、最高点・最低点・合格者数も出してみましょう。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| `IndentationError` | インデントがずれている | 空白の数 |
| `NameError` | 変数名が違う | スペル |
| `TypeError` | 型が合っていない | 文字列と数字の扱い |
| ライブラリが使えない | インストール不足 | `pip install` |
| ファイルが読めない | パスが違う | ファイルの場所 |

## チェックリスト

- [ ] `print` で値を表示できる
- [ ] `if` と `for` を使える
- [ ] リストと辞書を使える
- [ ] 関数を作れる
- [ ] ライブラリを使う流れを説明できる
- [ ] Colabやローカルでコードを実行できる

## 次に学ぶこと

AIに進むなら数学・統計とPyTorch、データ分析に進むならSQLとpandas、自動化に進むならファイル操作やAPI連携を学びましょう。
