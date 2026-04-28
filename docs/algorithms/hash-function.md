---
sidebar_position: 14
title: ハッシュ関数
description: 長いデータを短い値に変換する考え方
---

# ハッシュ関数: 長いデータに短いあだ名をつけよう

ハッシュ関数は、文字列やデータを、決まった計算で短い値に変える方法です。

長い名前に「あだ名」をつけるように、データを比べやすい形に変えます。ただし、違うデータが同じ値になることもあり、これを衝突と呼びます。

## ルール

1. 文字を1つずつ数字に変える
2. それまでの結果に混ぜる
3. 大きくなりすぎないように余りを使う
4. 最後に出た値をハッシュ値にする

## 図で見る

```mermaid
flowchart LR
  Text["code"]
  C["c → 99"]
  O["o → 111"]
  D["d → 100"]
  E["e → 101"]
  Mix["順番に混ぜる"]
  Hash["短い値\nhash = 3851"]

  Text --> C --> Mix
  Text --> O --> Mix
  Text --> D --> Mix
  Text --> E --> Mix
  Mix --> Hash
```

## コピペ用コード

```python
def simple_hash(text):
    result = 0

    for character in text:
        result = (result * 31 + ord(character)) % 10000

    return result


print(simple_hash("code"))
print(simple_hash("recipe"))
```

## 問いかけ

ハッシュ値が同じになったら、元の文字列も必ず同じだと言えるでしょうか？
