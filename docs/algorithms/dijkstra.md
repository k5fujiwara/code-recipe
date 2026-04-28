---
sidebar_position: 15
title: ダイクストラ法
description: 重みつきグラフで最短経路を探す方法
---

# ダイクストラ法: 目的地への最速ルートを探そう

ダイクストラ法は、道ごとに距離や時間が決まっている地図から、スタート地点から各地点までの最短距離を求める方法です。

地図アプリが「遠回りに見えても、こっちの道のほうが早い」と判断するイメージです。

## ルール

1. スタート地点の距離を0にする
2. まだ確定していない地点の中で、一番近い地点を選ぶ
3. その地点から行ける道を調べて、より短い距離なら更新する
4. すべての地点が確定するまでくり返す

## 図で見る

```mermaid
flowchart LR
  A["A\n0"]
  B["B\n2"]
  C["C\n5 → 3"]
  D["D\n6"]

  A -- "2" --> B
  A -- "5" --> C
  B -- "1" --> C
  B -- "4" --> D
  C -- "3" --> D

  Note["A→B→C の距離は 3\nA→C の距離 5 より短いので更新"]
  B --> Note
```

## コピペ用コード

```python
import heapq


def dijkstra(graph, start):
    distances = {node: float("inf") for node in graph}
    distances[start] = 0
    queue = [(0, start)]

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for next_node, cost in graph[current_node]:
            new_distance = current_distance + cost

            if new_distance < distances[next_node]:
                distances[next_node] = new_distance
                heapq.heappush(queue, (new_distance, next_node))

    return distances


graph = {
    "A": [("B", 2), ("C", 5)],
    "B": [("C", 1), ("D", 4)],
    "C": [("D", 3)],
    "D": [],
}

print(dijkstra(graph, "A"))
```

## 問いかけ

「一番近い地点から確定する」と、なぜ遠回りの道を後から見つけても迷いにくいのでしょう？
