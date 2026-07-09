---
sidebar_position: 13
title: ユークリッドの互除法
description: 余りを使って最大公約数を見つける方法
---

# ユークリッドの互除法: 余りで最大公約数を見つけよう

ユークリッドの互除法は、2つの数の最大公約数を、割り算の「余り」を使ってすばやく見つける方法です。

たとえば、縦48cm、横18cmの長方形を、同じ大きさの正方形タイルでぴったり埋めたいとします。そのときの最大サイズを探すイメージです。

## ルール

1. 大きい数を小さい数で割る
2. 余りを出す
3. 「小さい数」と「余り」で同じことをくり返す
4. 余りが0になったときの割る数が最大公約数

## 図で見る

```mermaid
flowchart LR
  Start["48 と 18"]
  Step1["48 ÷ 18 = 2 あまり 12"]
  Step2["18 ÷ 12 = 1 あまり 6"]
  Step3["12 ÷ 6 = 2 あまり 0"]
  Done["最大公約数は 6"]

  Start --> Step1 --> Step2 --> Step3 --> Done
```

## コピペ用コード

```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b

    return a

print(gcd(48, 18))
```

## コードの読み方

- `a % b` は、`a` を `b` で割った余りです。
- `a, b = b, a % b` は、2つの変数を同時に入れ替える Python の書き方です。「割る数」が次の「割られる数」になります。
- 余りが `0` になったとき、そのときの割る数（`a` に入っている値）が最大公約数です。

## 計算量

ユークリッドの互除法の計算量は **O(log(min(a, b)))** です。1ステップごとに数が急速に小さくなるため、数十億のような大きな数でも数十回のループで終わります。

「2つの数の約数を全部書き出して比べる」方法だと O(min(a, b)) かかるので、大きな数では互除法が圧倒的に有利です。

## 別パターン1: 標準ライブラリ math.gcd

Python には最大公約数・最小公倍数の標準関数があります。実際のコードではこちらを使うのが確実です。

```python
import math

print(math.gcd(48, 18))       # 6
print(math.lcm(48, 18))       # 144 (最小公倍数)
print(math.gcd(12, 18, 24))   # 6 (3つ以上もOK)
```

- `math.lcm` は最小公倍数です。「gcd × lcm = 2数の積」という関係があります。
- どちらも複数の引数を渡せます。

## 別パターン2: 再帰で書く

互除法は[再帰関数](/docs/algorithms/recursion/)でも書けます。「gcd(a, b) は gcd(b, a % b) と同じ」という性質をそのまま書き写した形です。

```python
def gcd_recursive(a, b):
    if b == 0:
        return a
    return gcd_recursive(b, a % b)

print(gcd_recursive(48, 18))
```

- `if b == 0` が止まる条件（ベースケース）です。
- 数学の定義とコードがほぼ同じ形になるのが再帰版の良さです。動きはループ版と同じです。

## 別パターン3: 分数を約分する

最大公約数の身近な使い道が約分です。

```python
import math

def reduce_fraction(numerator, denominator):
    g = math.gcd(numerator, denominator)
    return numerator // g, denominator // g

print(reduce_fraction(48, 18))  # (8, 3)
```

- 分子と分母を最大公約数で割ると、それ以上約分できない形になります。
- 分数の計算を自作するときや、比率を最も簡単な整数比で表示したいときに使えます。

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| `a % b` と `b % a` を混同する | 答えが合わない | 「大きい方を小さい方で割った余り」と覚える |
| `b != 0` の条件を `a != 0` にする | 無限ループや間違った答え | 止まる条件は「余りが0」 |
| 0 を渡したときの動きを確認しない | `gcd(0, 6)` は 6 になる | 仕様として問題ないか確認する |

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">学んだレシピを実際に使って、ジャッジから「Accepted（正解）」を勝ち取ろう！</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_1_B&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">ALDS1_1_B: Greatest Common Divisor</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>
