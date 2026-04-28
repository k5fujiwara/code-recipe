---
sidebar_position: 9
title: 深さ優先探索法
description: 行けるところまで進んでから戻る探索方法
---

# 深さ優先探索法: 行けるところまで進もう

深さ優先探索法は、分かれ道があるときに、まず1つの道を行けるところまで進み、行き止まりになったら戻る方法です。

迷路で「まず右の道を最後まで進んで、だめなら戻る」と決めるイメージです。

## ルール

1. スタート地点を訪れる
2. まだ行っていない隣の地点へ進む
3. 行けるところまで進む
4. 行き止まりになったら、1つ前に戻る

## 図で見る

```mermaid
flowchart TB
  A["A スタート"]
  B["B"]
  C["C"]
  D["D"]
  E["E"]
  Order["訪れる順番の例\nA → B → D → C → E"]

  A --> B
  A --> C
  B --> D
  C --> E
  D --> Order
  E --> Order
```

## コピペ用コード

```python
def depth_first_search(graph, start):
    visited = set()
    order = []

    def visit(node):
        visited.add(node)
        order.append(node)

        for next_node in graph[node]:
            if next_node not in visited:
                visit(next_node)

    visit(start)
    return order


graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": [],
    "E": [],
}

print(depth_first_search(graph, "A"))
```

## 問いかけ

迷路を探索するとき、深さ優先探索はどんな場面で使いやすそうですか？
