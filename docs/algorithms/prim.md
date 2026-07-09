---
sidebar_position: 43
title: プリム法
description: 最小全域木を少しずつ広げる方法
---

# プリム法: 今つながっている場所から木を広げよう

プリム法は、すでにつながっているグループから、外へ伸びる一番安い辺を選んで広げる方法です。

クラスカル法が「辺を安い順に見る」のに対して、プリム法は「今いる場所から広げる」考え方です。

## 使いどころ

- 最小全域木を作る
- つながっている範囲を少しずつ広げたい
- 優先度付きキューの使い方を学ぶ

## 手順

1. スタートの点を決める
2. そこから出ている辺を候補に入れる
3. 一番安い辺を選ぶ
4. 新しくつながった点から、さらに候補を追加する

## 図で見る

```mermaid
flowchart LR
  A["スタートの点"] --> B["一番安い隣へ"]
  B --> C["つながった場所から\nまた一番安い辺を選ぶ"]
```

## コピペ用コード

```python
import heapq

graph = {0: [(1, 1), (2, 3)], 1: [(0, 1), (2, 2)], 2: [(0, 3), (1, 2)]}
visited = {0}
queue = graph[0][:]
heapq.heapify(queue)
total = 0

while queue and len(visited) < len(graph):
    cost, node = heapq.heappop(queue)
    if node in visited:
        continue
    visited.add(node)
    total += cost
    for edge in graph[node]:
        heapq.heappush(queue, edge)

print(total)
```

## コードの読み方

- `visited` は、すでに木に入った頂点です。
- `queue` には、次に選べる辺を入れています。
- `heapq.heappop(queue)` で、一番安い辺を取り出します。

## 計算量

[優先度付きキュー](/docs/algorithms/priority-queue/)を使ったプリム法は **O(E log V)**（V: 頂点数、E: 辺の数）です。[ダイクストラ法](/docs/algorithms/dijkstra/)とほとんど同じ形で、違いは「距離の合計」ではなく「その辺1本のコスト」で優先度を決める点だけです。

## 別パターン1: 関数にまとめて採用した辺も返す実用形

どの辺を使ったかまで返す、そのまま使える形です。

```python
import heapq

def prim(graph, start):
    visited = {start}
    # (コスト, 行き先, どこから)
    queue = [(cost, node, start) for node, cost in graph[start]]
    heapq.heapify(queue)

    total = 0
    used_edges = []

    while queue and len(visited) < len(graph):
        cost, node, come_from = heapq.heappop(queue)
        if node in visited:
            continue

        visited.add(node)
        total += cost
        used_edges.append((come_from, node, cost))

        for next_node, next_cost in graph[node]:
            if next_node not in visited:
                heapq.heappush(queue, (next_cost, next_node, node))

    return total, used_edges

graph = {
    0: [(1, 1), (2, 3)],
    1: [(0, 1), (2, 2), (3, 5)],
    2: [(0, 3), (1, 2), (3, 4)],
    3: [(1, 5), (2, 4)],
}

total, used = prim(graph, 0)
print(total)  # 7 (1 + 2 + 4)
print(used)   # [(0, 1, 1), (1, 2, 2), (2, 3, 4)]
```

- タプルを `(コスト, 行き先, どこから)` にすることで、「どの辺を採用したか」を復元できます。
- `len(visited) < len(graph)` で、全頂点がつながった時点で終了します。
- グラフの形は `{頂点: [(隣, コスト), ...]}` の隣接リストです。

## 別パターン2: 座標から最小コストの配線を求める

「地図上の点をすべてケーブルでつなぐ最小の長さ」のような、座標ベースの問題です。全点間の距離を辺として扱います。

```python
import heapq

points = [(0, 0), (3, 0), (0, 4), (3, 4)]
n = len(points)

def distance(a, b):
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5

visited = {0}
queue = [(distance(points[0], points[i]), i) for i in range(1, n)]
heapq.heapify(queue)
total = 0.0

while queue and len(visited) < n:
    cost, node = heapq.heappop(queue)
    if node in visited:
        continue
    visited.add(node)
    total += cost
    for i in range(n):
        if i not in visited:
            heapq.heappush(queue, (distance(points[node], points[i]), i))

print(round(total, 2))  # 10.0 (3 + 4 + 3)
```

- 点の数が多くない場合、「どの2点の間にも辺がある」とみなしてプリム法を回せます。
- ネットワーク配線、水道管、基地局接続など、「全部つなぐ最小コスト」の問題はこの形に落とせます。

## ダイクストラ法との違い

形がそっくりなので混同しやすいですが、目的が違います。

| 比較 | プリム法 | ダイクストラ法 |
| :--- | :--- | :--- |
| 求めるもの | 全体をつなぐ最小コストの木 | スタートから各点への最短距離 |
| キューに入れる値 | その辺1本のコスト | スタートからの距離の合計 |
| 使う場面 | 道路・配線の建設計画 | 経路案内 |

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| キューに「距離の合計」を入れる | ダイクストラ法になってしまい木が最小でない | 辺1本のコストだけで比較する |
| 訪問済みチェックを取り出し時にしない | 同じ頂点を二重に採用する | `if node in visited: continue` を必ず入れる |
| 非連結のグラフに使う | 一部の頂点がつながらないまま終わる | `len(visited)` が頂点数に達したか確認する |

## 注意点

すでに訪問済みの点へ向かう辺は、輪っかを作るので飛ばします。

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">学んだレシピを実際に使って、ジャッジから「Accepted（正解）」を勝ち取ろう！</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_12_A&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">ALDS1_12_A: Minimum Spanning Tree</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>
