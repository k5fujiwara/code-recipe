---
sidebar_position: 1
title: AOJ攻略ロードマップ
description: 初級から上級までAOJ問題をアルゴリズム別に攻略する
---

# AOJ攻略ロードマップ

JOI（情報オリンピック）の全体像は [情報オリンピック挑戦ガイド](/docs/contest/joi-guide/) で確認できます。

AOJは、アルゴリズムを「読んで終わり」にせず、実際にコードを書いて力に変えるための練習場所です。

まずは **ALDS1 コースの全制覇** を目指しましょう。基本の入力、配列、探索、ソート、グラフ、動的計画法までを順番に進めると、競技プログラミングの土台がかなり強くなります。

## 進め方

1. Code Recipeで考え方を読む
2. コピペ用コードを動かして、流れをつかむ
3. AOJの問題文を読み、自分で入力形式に合わせて書き直す
4. `Accepted` が出たら、少しだけコードを短くしたり、別解を考えたりする

## 初級: 基本のレシピ

まずは、アルゴリズムの動きをそのままコードにする練習です。

- [ALDS1_1_A: Insertion Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_1_A&lang=ja)
  - アルゴリズム: [挿入ソート](/docs/algorithms/insertion-sort/)
- [ALDS1_2_A: Bubble Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_2_A&lang=ja)
  - アルゴリズム: [バブルソート](/docs/algorithms/bubble-sort/)
- [ALDS1_2_B: Selection Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_2_B&lang=ja)
  - アルゴリズム: [選択ソート](/docs/algorithms/selection-sort/)
- [ALDS1_4_A: Linear Search](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_4_A&lang=ja)
  - アルゴリズム: [線形探索](/docs/algorithms/linear-search/)
- [ALDS1_4_B: Binary Search](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_4_B&lang=ja)
  - アルゴリズム: [二分探索](/docs/algorithms/binary-search/)
- [ALDS1_1_B: Greatest Common Divisor](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_1_B&lang=ja)
  - アルゴリズム: [ユークリッドの互除法](/docs/algorithms/euclidean-algorithm/)
- [ALDS1_1_C: Prime Numbers](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_1_C&lang=ja)
  - アルゴリズム: [素数攻略ガイド（試し割り法）](/docs/algorithms/prime-guide/)

## 中級: コンテスト頻出のレシピ

少しずつ「ただ書く」から「考えて選ぶ」問題に進みます。

- [ALDS1_5_A: Exhaustive Search](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_5_A&lang=ja)
  - アルゴリズム: [全探索（ビット全探索）](/docs/algorithms/bit-bruteforce/)
- [ALDS1_5_B: Merge Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_5_B&lang=ja)
  - アルゴリズム: [マージソート](/docs/algorithms/merge-sort/)
- [ALDS1_6_C: Quick Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_6_C&lang=ja)
  - アルゴリズム: [クイックソート](/docs/algorithms/quick-sort/)
- [ALDS1_10_A: Fibonacci Number](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_A&lang=ja)
  - アルゴリズム: [動的計画法](/docs/algorithms/dynamic-programming/)
- [ALDS1_10_C: Longest Common Subsequence](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_C&lang=ja)
  - アルゴリズム: [動的計画法](/docs/algorithms/dynamic-programming/)
- [0009: Prime Number](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0009&lang=ja)
  - アルゴリズム: [エラトステネスの篩](/docs/algorithms/sieve-of-eratosthenes/)
- [NTL_1_A: Prime Factorization](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=NTL_1_A&lang=ja)
  - アルゴリズム: [素因数分解](/docs/algorithms/prime-factorization/)
- [DPL_1_B: 0-1 Knapsack Problem](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_B&lang=ja)
  - アルゴリズム: [0-1ナップザック問題](/docs/algorithms/zero-one-knapsack/)
- [DPL_1_D: Longest Increasing Subsequence](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_D&lang=ja)
  - アルゴリズム: [最長増加部分列](/docs/algorithms/longest-increasing-subsequence/)

## 上級: 本格アルゴリズムのレシピ

情報オリンピックや競プロで差がつく、グラフと高度なデータ構造に挑戦します。

- [ALDS1_11_B: Depth First Search](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_11_B&lang=ja)
  - アルゴリズム: [深さ優先探索](/docs/algorithms/depth-first-search/)
- [ALDS1_11_C: Breadth First Search](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_11_C&lang=ja)
  - アルゴリズム: [幅優先探索](/docs/algorithms/breadth-first-search/)
- [ALDS1_12_B: Single Source Shortest Path](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_12_B&lang=ja)
  - アルゴリズム: [ダイクストラ法](/docs/algorithms/dijkstra/)
- [GRL_1_C: All Pairs Shortest Path](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=GRL_1_C&lang=ja)
  - アルゴリズム: [ワーシャル・フロイド法](/docs/algorithms/warshall-floyd/)
- [GRL_5_A: Diameter of a Tree](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=GRL_5_A&lang=ja)
  - アルゴリズム: [木の直径](/docs/algorithms/tree-diameter/)
- [GRL_4_B: Topological Sort](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=GRL_4_B&lang=ja)
  - アルゴリズム: [トポロジカルソート](/docs/algorithms/topological-sort/)
- [DSL_1_A: Disjoint Set Union](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DSL_1_A&lang=ja)
  - アルゴリズム: [Union-Find](/docs/algorithms/union-find/)
- [DSL_2_A: Range Minimum Query](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DSL_2_A&lang=ja)
  - アルゴリズム: [セグメント木](/docs/algorithms/segment-tree/)
- [ALDS1_13_A: 8-Queens Problem](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_13_A&lang=ja)
  - アルゴリズム: [8クイーン問題](/docs/algorithms/eight-queens/)
- [0151: Twin Prime](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0151&lang=ja)
  - アルゴリズム: [エラトステネスの篩](/docs/algorithms/sieve-of-eratosthenes/)
- [0044: Prime Number II](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0044&lang=ja)
  - アルゴリズム: [エラトステネスの篩](/docs/algorithms/sieve-of-eratosthenes/)

## 逆引きの使い方

「AOJの問題名を見たけど、どのアルゴリズムを読めばよいか分からない」ときは、このページで問題IDを探してください。

最初は正解数よりも、問題文を読んで「これはどのアルゴリズムの考え方か」を見抜けるようになることが大切です。
