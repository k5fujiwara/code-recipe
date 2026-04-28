---
sidebar_position: 26
title: Binary Indexed Tree
description: 累積和を更新しながら高速に扱うデータ構造
---

# Binary Indexed Tree: 足し算の履歴を木で持とう

Binary Indexed Treeは、値の更新と先頭からの合計を高速に行うデータ構造です。Fenwick Treeとも呼ばれます。

累積和の便利さを残しつつ、途中の値を更新できるようにした道具だと考えると分かりやすいです。

## 使いどころ

- 値が変わる配列で、先頭からの合計を何度も求める
- 順位や転倒数を数える
- セグメント木より短いコードで合計を扱いたい

## 手順

1. 更新したい場所に値を足す
2. 影響する箱へ順番に値を足す
3. 合計を知りたいときは、関係する箱を集める

## 図で見る

```mermaid
flowchart LR
  Add["3番目に +5"] --> Tree["関係する箱を更新"]
  Tree --> Sum["1〜3番目の合計を高速に取得"]
```

## コピペ用コード

```python
class BIT:
    def __init__(self, size):
        self.data = [0] * (size + 1)

    def add(self, index, value):
        while index < len(self.data):
            self.data[index] += value
            index += index & -index

    def sum(self, index):
        total = 0
        while index > 0:
            total += self.data[index]
            index -= index & -index
        return total


bit = BIT(5)
bit.add(1, 2)
bit.add(2, 4)
print(bit.sum(2))
```

## コードの読み方

- `index += index & -index` で、次に更新する箱へ進みます。
- `index -= index & -index` で、合計に必要な箱をたどります。
- `index & -index` は、BITでよく出てくる「担当範囲の大きさ」です。

## 注意点

BITは1始まりの番号で考えることが多いです。0始まりの配列と混ざるとズレやすいので注意しましょう。

## 問いかけ

累積和と違って値を途中で更新できると、どんな問題で役立ちそうですか？
