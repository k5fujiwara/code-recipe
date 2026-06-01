---
sidebar_position: 9
title: 素数攻略ガイド
description: 試し割り、エラトステネスの篩、素因数分解をまとめて攻略する
---

# 素数攻略ガイド: 数字の正体を見破ろう

素数は、1と自分自身でしか割り切れない数です。

Code Recipeでは、素数を「判定する」「まとめて見つける」「分解する」の3つに分けて攻略します。

## 【基本】試し割り法

**巨大な数字の正体を、最小限の努力で見破ろう。**

試し割り法は、`2, 3, 4...` と順番に割れるかを調べる素数判定です。

ただし、1億まで全部試す必要はありません。調べるのは `sqrt(N)` までで十分です。

なぜなら、もし `N = A × B` と分解できるなら、`A` と `B` のどちらかは必ず `sqrt(N)` 以下になるからです。両方とも `sqrt(N)` より大きいと、かけ算した結果が `N` を超えてしまいます。

## 試し割りの図

```mermaid
flowchart LR
  N["N が素数か調べる"]
  Two["2で割れる？"]
  Three["3で割れる？"]
  Root["sqrt(N) まで試す"]
  Composite["割れたら素数ではない"]
  Prime["最後まで割れなければ素数"]

  N --> Two
  Two --> Three
  Three --> Root
  Two --> Composite
  Three --> Composite
  Root --> Prime
```

## 試し割りのコード

```python
def is_prime(n):
    if n < 2:
        return False

    divisor = 2
    while divisor * divisor <= n:
        if n % divisor == 0:
            return False
        divisor += 1

    return True


print(is_prime(97))
```

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">数値が大きいので、この「試し割り」レシピが必須です。</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_1_C&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">ALDS1_1_C: Prime Numbers</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>

## まとめて素数を見つけたいとき

範囲内の素数をまとめて数えたり、何度も素数判定をしたりするなら、試し割りよりも [エラトステネスの篩](./sieve-of-eratosthenes) が向いています。

「2の倍数を消す」「3の倍数を消す」という具体的な動き、表での図解、篩を使うAOJ問題は専用ページにまとめています。

## 【分析】素因数分解

**すべての数字は「素数」というブロックでできている。**

素因数分解は、数字を素数のかけ算に分解する方法です。

たとえば、`60` は `2 × 2 × 3 × 5` に分解できます。試し割り法を応用して、割れる素数で何度も割っていくのが基本です。

詳しい手順は、[素因数分解](./prime-factorization) のページで確認できます。

## 素因数分解のコード

```python
def factorize(n):
    factors = []
    divisor = 2

    while divisor * divisor <= n:
        while n % divisor == 0:
            factors.append(divisor)
            n //= divisor
        divisor += 1

    if n > 1:
        factors.append(n)

    return factors


print(factorize(84))
```

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">数字を素数のブロックに分けて、構造を読み解こう。</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=NTL_1_A&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">NTL_1_A: Prime Factorization</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>

