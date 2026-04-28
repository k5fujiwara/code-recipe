---
sidebar_position: 42
title: クラスカル法
description: 最小全域木を安い辺から作る方法
---

# クラスカル法: 安い道から選んで全体をつなごう

クラスカル法は、コストの小さい辺から順に選び、輪っかを作らないように全体をつなぐ方法です。

すべての町を道路でつなぎたいけれど、工事費はできるだけ安くしたい、という場面を考えると分かりやすいです。

## 使いどころ

- 最小全域木を作る
- 全地点を最小コストでつなぐ
- Union-Findの実用例を学ぶ

## 手順

1. 辺をコストの小さい順に並べる
2. 安い辺から順に見る
3. その辺を選んで輪っかができないなら採用する
4. 全ての地点がつながったら完成

## 図で見る

```mermaid
flowchart LR
  Sort["辺を安い順に並べる"] --> Pick["輪にならないなら選ぶ"]
  Pick --> Tree["全地点がつながる"]
```

## コピペ用コード

```python
edges = [(1, 0, 1), (2, 1, 2), (3, 0, 2)]
parent = [0, 1, 2]

def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

total = 0
for cost, a, b in sorted(edges):
    if find(a) != find(b):
        parent[find(a)] = find(b)
        total += cost

print(total)
```

## コードの読み方

- `sorted(edges)` で、辺をコスト順に見ています。
- `find(a) != find(b)` なら、まだ別グループなのでつないでも輪っかになりません。
- 採用した辺のコストを `total` に足しています。

## 注意点

クラスカル法では、輪っかを作らない判定が大切です。そのためにUnion-Findがよく使われます。

## 問いかけ

安い道でも輪っかになるなら、なぜ選ばないのでしょう？
