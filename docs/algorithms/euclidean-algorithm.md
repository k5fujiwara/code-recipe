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
