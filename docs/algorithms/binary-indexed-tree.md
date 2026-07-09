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

## 計算量

| 操作 | 普通の配列 | 累積和 | BIT |
| :--- | :--- | :--- | :--- |
| 1箇所の更新 | O(1) | O(n)（作り直し） | O(log n) |
| 先頭からの合計 | O(n) | O(1) | O(log n) |

[累積和](/docs/algorithms/prefix-sum/)は「更新がない」前提で最強ですが、値が変わるたびに作り直しが必要です。BITは更新と合計の両方を O(log n) にした、バランス型の道具です。

## 別パターン1: 区間の合計を求める

`sum(index)` は「先頭から index まで」の合計なので、引き算すれば好きな区間の合計が出ます。

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

    def range_sum(self, left, right):
        """left 番目から right 番目まで（両端含む・1始まり）の合計"""
        return self.sum(right) - self.sum(left - 1)

scores = [0, 3, 1, 4, 1, 5]  # 1始まりにするため先頭にダミー
bit = BIT(5)
for i in range(1, 6):
    bit.add(i, scores[i])

print(bit.range_sum(2, 4))  # 6 (1 + 4 + 1)

bit.add(3, 10)              # 3番目に +10
print(bit.range_sum(2, 4))  # 16
```

- `range_sum(left, right)` は「right までの合計」から「left の手前までの合計」を引くだけです。
- 途中で `add` しても、次の合計にすぐ反映されるのが BIT の強みです。

## 別パターン2: 転倒数を数える

「並び替えで何回交換が必要か（自分より左にある大きい数の個数）」を数える、BITの定番応用です。

```python
class BIT:  # 別パターン1と同じクラス
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

def count_inversions(numbers):
    # 値そのままだと大きすぎる場合があるので座標圧縮
    sorted_unique = sorted(set(numbers))
    rank = {v: i + 1 for i, v in enumerate(sorted_unique)}  # 1始まり

    bit = BIT(len(sorted_unique))
    inversions = 0

    for i, number in enumerate(numbers):
        r = rank[number]
        # これまでに出た数のうち、自分より大きいものの個数
        inversions += i - bit.sum(r)
        bit.add(r, 1)

    return inversions

print(count_inversions([3, 1, 4, 2, 5]))  # 3 ((3,1), (3,2), (4,2))
```

- `bit.add(r, 1)` で「この値が1回出た」と記録します。
- `bit.sum(r)` は「自分以下の値がこれまで何回出たか」。`i`（これまでの総数）から引くと、「自分より大きい値の個数」＝転倒の数になります。
- 値の範囲が広いときは[座標圧縮](/docs/algorithms/coordinate-compression/)と組み合わせるのが定番です。

## セグメント木との使い分け

| 道具 | できること | コードの短さ |
| :--- | :--- | :--- |
| BIT | 合計（と、それで表せるもの） | 短い |
| [セグメント木](/docs/algorithms/segment-tree/) | 合計・最小・最大など自由 | 長め |

「合計だけでよい」なら BIT、「区間の最小値・最大値もほしい」ならセグメント木を選びます。

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| 0番目に `add(0, v)` する | `index & -index` が 0 になり無限ループ | BITは必ず1始まりで使う |
| `sum(right) - sum(left)` と書く | left 番目が合計から抜ける | 引くのは `sum(left - 1)` |
| 配列サイズちょうどで作る | 最後の要素の更新が範囲外になる | `size + 1` で確保する（コード参照） |

## 注意点

BITは1始まりの番号で考えることが多いです。0始まりの配列と混ざるとズレやすいので注意しましょう。
