---
sidebar_position: 11
title: エラトステネスの篩
description: 素数をまとめて見つける方法
---

# エラトステネスの篩: 素数をまとめて見つけよう

エラトステネスの篩は、素数ではない数をふるい落として、素数だけを残す方法です。

「2の倍数を消す、3の倍数を消す、5の倍数を消す」と進めていくと、最後に素数が残ります。

## ルール

1. 2から調べ始める
2. 素数を見つけたら、その倍数を消す
3. 次に残っている数へ進む
4. 最後に残った数が素数になる

## 図で見る

30までの数で見ると、「残す数」と「消す数」が表のように変化します。

<table>
  <thead>
    <tr>
      <th>手順</th>
      <th>ふるいにかける数</th>
      <th>数の表</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>最初</td>
      <td>まだ何も消していない</td>
      <td>2 3 4 5 6 7 8 9 10<br />11 12 13 14 15 16 17 18 19 20<br />21 22 23 24 25 26 27 28 29 30</td>
    </tr>
    <tr>
      <td>1回目</td>
      <td>2を残して、2の倍数を消す</td>
      <td><strong>2</strong> 3 <del>4</del> 5 <del>6</del> 7 <del>8</del> 9 <del>10</del><br />11 <del>12</del> 13 <del>14</del> 15 <del>16</del> 17 <del>18</del> 19 <del>20</del><br />21 <del>22</del> 23 <del>24</del> 25 <del>26</del> 27 <del>28</del> 29 <del>30</del></td>
    </tr>
    <tr>
      <td>2回目</td>
      <td>3を残して、3の倍数を消す</td>
      <td><strong>2</strong> <strong>3</strong> <del>4</del> 5 <del>6</del> 7 <del>8</del> <del>9</del> <del>10</del><br />11 <del>12</del> 13 <del>14</del> <del>15</del> <del>16</del> 17 <del>18</del> 19 <del>20</del><br /><del>21</del> <del>22</del> 23 <del>24</del> 25 <del>26</del> <del>27</del> <del>28</del> 29 <del>30</del></td>
    </tr>
    <tr>
      <td>3回目</td>
      <td>5を残して、5の倍数を消す</td>
      <td><strong>2</strong> <strong>3</strong> <del>4</del> <strong>5</strong> <del>6</del> 7 <del>8</del> <del>9</del> <del>10</del><br />11 <del>12</del> 13 <del>14</del> <del>15</del> <del>16</del> 17 <del>18</del> 19 <del>20</del><br /><del>21</del> <del>22</del> 23 <del>24</del> <del>25</del> <del>26</del> <del>27</del> <del>28</del> 29 <del>30</del></td>
    </tr>
    <tr>
      <td>完成</td>
      <td>消されずに残った数が素数</td>
      <td><strong>2 3 5 7 11 13 17 19 23 29</strong></td>
    </tr>
  </tbody>
</table>

## コピペ用コード

```python
def sieve_of_eratosthenes(limit):
    is_prime = [True] * (limit + 1)
    is_prime[0] = False
    is_prime[1] = False

    for number in range(2, int(limit ** 0.5) + 1):
        if is_prime[number]:
            for multiple in range(number * number, limit + 1, number):
                is_prime[multiple] = False

    primes = []
    for number in range(limit + 1):
        if is_prime[number]:
            primes.append(number)

    return primes

print(sieve_of_eratosthenes(30))
```

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">範囲内の素数をまとめて扱う問題で、エラトステネスの篩を使ってみよう。</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0009&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">0009: Prime Number</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0044&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">0044: Prime Number II</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0151&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">0151: Twin Prime</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>
