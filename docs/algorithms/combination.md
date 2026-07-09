---
sidebar_position: 32
title: 組み合わせ計算
description: 選び方の数を求める方法
---

# 組み合わせ計算: 選び方の数を求めよう

組み合わせは、順番を気にせずに「何個選ぶか」を数える考え方です。

5人から2人を選ぶとき、`Aさん→Bさん` と `Bさん→Aさん` は同じ選び方として数えます。

## 使いどころ

- チームの選び方を数える
- 確率を計算する
- 全探索のパターン数を見積もる
- 動的計画法の問題で使う

## 手順

1. `n` 個から `r` 個を選ぶと考える
2. 上から `n × (n-1) × ...` とかける
3. 順番の重複を `1 × 2 × ... × r` で割る

## 図で見る

```mermaid
flowchart LR
  A["5人から2人選ぶ"] --> B["5 × 4"]
  B --> C["順番の重複を割る"]
  C --> D["10通り"]
```

## コピペ用コード

```python
def combination(n, r):
    if r > n - r:
        r = n - r
    result = 1
    for i in range(r):
        result = result * (n - i) // (i + 1)
    return result

print(combination(5, 2))
```

## コードの読み方

- `r = n - r` にすることで、少ない回数で計算できます。
- `result * (n - i)` で選ぶ候補をかけます。
- `// (i + 1)` で、順番の重複を消しています。

## 別パターン1: 標準ライブラリ math.comb

Python には組み合わせの数を直接計算する関数があります。

```python
import math

print(math.comb(5, 2))   # 10 (組み合わせ nCr)
print(math.perm(5, 2))   # 20 (順列 nPr、順番を区別する)
```

- `math.comb(n, r)` は順番を区別しない選び方、`math.perm(n, r)` は順番を区別する並べ方です。
- 「AB と BA を同じとみなすか」で使い分けます。

## 別パターン2: 実際の組み合わせを列挙する

「何通りか」ではなく「どんな組み合わせがあるか」を全部見たいときは `itertools` を使います。

```python
from itertools import combinations, permutations

members = ["A", "B", "C", "D"]

# 2人の選び方（順番なし）
for pair in combinations(members, 2):
    print(pair)
# ('A', 'B') ('A', 'C') ('A', 'D') ('B', 'C') ('B', 'D') ('C', 'D')

# 2人の並べ方（順番あり）なら permutations(members, 2)
```

- `combinations(members, 2)` は、選び方そのものをタプルで順に返します。
- 全探索で「すべての選び方を試したい」場面（[ビット全探索](/docs/algorithms/bit-bruteforce/)の代わり）にも使えます。

## 別パターン3: 大きな数で余りを取りながら計算する

競技プログラミングでは「答えを 10^9+7 で割った余りで出力せよ」という形式が定番です。割り算がある組み合わせ計算では、「逆元」という考え方を使います。

```python
MOD = 10 ** 9 + 7

def combination_mod(n, r, mod=MOD):
    if r < 0 or r > n:
        return 0
    numerator = 1
    denominator = 1
    for i in range(r):
        numerator = numerator * (n - i) % mod
        denominator = denominator * (i + 1) % mod
    # フェルマーの小定理: 割り算の代わりに (mod-2) 乗を掛ける
    return numerator * pow(denominator, mod - 2, mod) % mod

print(combination_mod(100000, 50000))
```

- 余りの世界では普通の割り算ができないため、`pow(denominator, mod - 2, mod)` で「割り算の代わりになる数（逆元）」を掛けます。
- `pow(a, b, mod)` は Python 組み込みの高速なべき乗剰余です（[繰り返し二乗法](/docs/algorithms/fast-power/)）。

## パスカルの三角形との関係

組み合わせは「1つ左上＋真上」の足し算でも作れます。この性質は[動的計画法](/docs/algorithms/dynamic-programming/)の考え方につながります。

```python
n = 6
triangle = [[1] * (i + 1) for i in range(n)]

for i in range(2, n):
    for j in range(1, i):
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]

for row in triangle:
    print(row)
```

- `triangle[i][j]` が「i 個から j 個選ぶ組み合わせの数」になっています。
- 掛け算・割り算を使わないので、余りを取りたい場合にもそのまま使えます（各足し算のあとに `% MOD` を入れるだけ）。

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| 順列と組み合わせを混同する | 答えが r! 倍ずれる | 「順番を区別するか」を最初に確認する |
| 先に割り算してから掛ける | 小数誤差や切り捨てで答えがずれる | 掛けてから割る、または `math.comb` を使う |
| 余りの世界で普通に割る | 答えが合わない | 逆元（`pow(x, mod-2, mod)`）を使う |

## 注意点

とても大きな数を扱う場合や、余りを取りたい場合は、上の別パターン3のような工夫が必要になります。
