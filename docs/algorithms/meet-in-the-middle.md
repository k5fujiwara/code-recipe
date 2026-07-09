---
sidebar_position: 56
title: 半分全列挙
description: 半分ずつ全探索して組み合わせる方法
---

# 半分全列挙: 半分ずつ調べて組み合わせよう

半分全列挙は、全パターンを一気に調べる代わりに、半分ずつ列挙して後で組み合わせる方法です。

30個の全探索は大変ですが、15個ずつに分けると、それぞれの結果を組み合わせて考えられます。

## 使いどころ

- 全探索したいが数が少し多い
- 部分集合の合計を調べる
- 左半分と右半分を組み合わせられる問題

## 手順

1. データを半分に分ける
2. 左半分の全パターンを作る
3. 右半分の全パターンを作る
4. 2つの結果を組み合わせて答えを探す

## 図で見る

```mermaid
flowchart LR
  A["左半分を全探索"] --> C["結果を保存"]
  B["右半分を全探索"] --> C
  C --> D["組み合わせて答えを探す"]
```

## コピペ用コード

```python
def subset_sums(numbers):
    sums = [0]
    for number in numbers:
        sums += [value + number for value in sums]
    return sums

numbers = [3, 5, 8, 10]
left = subset_sums(numbers[:2])
right = subset_sums(numbers[2:])
print(left, right)
```

## コードの読み方

- `subset_sums()` は、選んだ数の合計をすべて作る関数です。
- `sums += ...` で、今ある合計に新しい数を足した合計を追加しています。
- `left` と `right` を後で組み合わせることで、全体の候補を考えます。

## 計算量

n 個の選ぶ・選ばないを全部試すと **O(2^n)** ですが、半分に分けると **O(2^(n/2))** が2回で済みます。

| n | 全探索 2^n | 半分全列挙 2×2^(n/2) |
| :--- | :--- | :--- |
| 20 | 約100万 | 約2,000 |
| 30 | 約10億 | 約65,000 |
| 40 | 約1兆（無理） | 約200万（余裕） |

「2^40 は無理でも 2^20 なら余裕」という指数の性質を利用した、割り算以上に効く分け方です。

## 別パターン1: 合計がちょうど target になる組み合わせを探す

左半分の合計と右半分の合計を組み合わせて、目的の合計を作れるか判定します。

```python
def subset_sums(numbers):
    sums = [0]
    for number in numbers:
        sums += [value + number for value in sums]
    return sums

numbers = [3, 5, 8, 10, 12, 15]
target = 30

half = len(numbers) // 2
left = subset_sums(numbers[:half])
right_set = set(subset_sums(numbers[half:]))

found = any(target - value in right_set for value in left)
print(found)  # True (3 + 12 + 15 = 30)
```

- 左半分の合計 `value` に対して、「残り `target - value` が右半分で作れるか」を調べます。
- 右半分を `set` にしておくと、この確認が1回あたり平均 O(1) になります。
- `any()` は、1つでも条件を満たせば `True` を返します。

## 別パターン2: 合計が limit 以下で最大の組み合わせ

「ちょうど」ではなく「limit 以下で一番大きい合計」を探す形です。ソートと[二分探索](/docs/algorithms/binary-search/)を組み合わせます。

```python
import bisect

def subset_sums(numbers):
    sums = [0]
    for number in numbers:
        sums += [value + number for value in sums]
    return sums

numbers = [31, 41, 59, 26, 53, 58]
limit = 100

half = len(numbers) // 2
left = subset_sums(numbers[:half])
right = sorted(subset_sums(numbers[half:]))

best = 0
for value in left:
    if value > limit:
        continue
    # limit - value 以下で最大の右半分の合計を探す
    index = bisect.bisect_right(right, limit - value) - 1
    if index >= 0:
        best = max(best, value + right[index])

print(best)  # 100 (41 + 59)
```

- 右半分の合計をソートしておき、`bisect_right` で「limit - value 以下の最大値」を高速に見つけます。
- 左半分の各合計に対して二分探索1回なので、全体は O(2^(n/2) × n/2) 程度で収まります。
- ナップサック系の問題で「n が 40 くらい・重さが大きすぎて[動的計画法](/docs/algorithms/dynamic-programming/)が使えない」ときの定番です。

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| 右半分を `set` やソートにしない | 組み合わせ確認が遅く、分けた意味がなくなる | `set`（存在確認）か `sorted`＋二分探索 |
| 半分の分け方を偏らせる | 片方の列挙が大きくなりすぎる | できるだけ半分ずつに分ける |
| 空集合（合計0）を忘れる | 「片側から選ばない」答えを見落とす | `sums = [0]` から始める |

## 注意点

半分全列挙は、全探索よりは軽くなりますが、それでも候補数は多いです。ソートや二分探索と組み合わせることがよくあります。
