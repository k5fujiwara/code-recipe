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

## 注意点

すでに訪問済みの点へ向かう辺は、輪っかを作るので飛ばします。

## 問いかけ

クラスカル法と比べて、プリム法はどこから考え始めていますか？
