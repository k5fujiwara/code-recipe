---
sidebar_position: 10
title: 幅優先探索法
description: 近い場所から順番に広げて探す方法
---

# 幅優先探索法: 近いところから広げよう

幅優先探索法は、スタート地点に近い場所から順番に調べていく方法です。

地図アプリで「今いる場所から一番近い駅、次に近い駅」と広げていくイメージです。

## ルール

1. スタート地点をキューに入れる
2. キューの先頭から1つ取り出して調べる
3. まだ行っていない隣の地点をキューに入れる
4. 近い地点から順番に広がっていく

## 図で見る

```mermaid
flowchart TB
  A["A スタート"]
  B["B 距離1"]
  C["C 距離1"]
  D["D 距離2"]
  E["E 距離2"]
  Order["訪れる順番の例\nA → B → C → D → E"]

  A --> B
  A --> C
  B --> D
  C --> E
  A --> Order
```

## コピペ用コード

```python
from collections import deque


def breadth_first_search(graph, start):
    visited = {start}
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for next_node in graph[node]:
            if next_node not in visited:
                visited.add(next_node)
                queue.append(next_node)

    return order


graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": [],
    "E": [],
}

print(breadth_first_search(graph, "A"))
```

## 問いかけ

スタートから一番少ない移動回数で行ける場所を探すなら、深さ優先探索と幅優先探索のどちらが向いていそうですか？
