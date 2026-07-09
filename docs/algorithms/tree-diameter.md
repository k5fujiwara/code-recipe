---
sidebar_position: 46
title: 木の直径
description: 木の中で一番遠い2点を探す
---

# 木の直径: 一番遠い地点を探そう

木の直径は、木構造のグラフで、もっとも遠い2つの頂点の距離を求める問題です。

木は「どの2点の間にも道が1つだけある」グラフです。迷路というより、枝分かれする一本道のネットワークをイメージすると分かりやすいです。

## 使いどころ

- 木構造のネットワークで一番遠い場所を探す
- DFSやBFSの応用練習
- グラフの距離を2回の探索で求める考え方の理解

## 手順

1. 好きな頂点から探索して、一番遠い頂点 `A` を探す
2. `A` からもう一度探索する
3. そのとき一番遠い頂点までの距離が木の直径になる

## 図で見る

```mermaid
flowchart LR
  S["適当な地点"] --> A["一番遠い地点 A"]
  A --> B["Aから一番遠い地点 B"]
  B --> D["A-B の距離が直径"]
```

## コピペ用コード

```python
from collections import deque


def farthest(start, graph):
    distance = [-1] * len(graph)
    distance[start] = 0
    queue = deque([start])

    while queue:
        node = queue.popleft()
        for next_node, cost in graph[node]:
            if distance[next_node] == -1:
                distance[next_node] = distance[node] + cost
                queue.append(next_node)

    far_node = max(range(len(graph)), key=lambda x: distance[x])
    return far_node, distance[far_node]


graph = [
    [(1, 2), (2, 3)],
    [(0, 2)],
    [(0, 3), (3, 4)],
    [(2, 4)],
]

a, _ = farthest(0, graph)
b, diameter = farthest(a, graph)
print(a, b, diameter)
```

## コードの読み方

- `farthest()` は、スタート地点から一番遠い頂点と距離を返します。
- 1回目の探索で直径の片端候補を見つけます。
- 2回目の探索で、実際の直径の長さを求めます。

## なぜ2回の探索でよいのか

「どこから探索しても、一番遠い点は必ず直径の端になる」という木の性質を使っています。

- もしスタート地点が直径の道の上にあれば、一番遠い点は直径の端そのものです。
- 直径の道から外れた場所にいても、遠くへ行くにはいずれ直径の道に合流するため、最終的に一番遠いのはやはり直径の端です。

この性質は「木にはどの2点間にも道が1本しかない」からこそ成り立ちます。輪っかのある一般のグラフでは使えません。

## 計算量

[幅優先探索](/docs/algorithms/breadth-first-search/)を2回行うだけなので **O(V + E)**（木では E = V - 1 なので実質 O(V)）です。全ペアの距離を調べる方法（O(V²) 以上）に比べて圧倒的に速く、頂点数10万の木でも一瞬で終わります。

## 別パターン1: 直径の経路も復元する

「どの頂点を通る道が一番長いのか」まで知りたい場合は、来た方向を記録します。

```python
from collections import deque

def farthest_with_path(start, graph):
    n = len(graph)
    distance = [-1] * n
    previous = [-1] * n
    distance[start] = 0
    queue = deque([start])

    while queue:
        node = queue.popleft()
        for next_node, cost in graph[node]:
            if distance[next_node] == -1:
                distance[next_node] = distance[node] + cost
                previous[next_node] = node
                queue.append(next_node)

    far_node = max(range(n), key=lambda x: distance[x])
    return far_node, distance[far_node], previous

graph = [
    [(1, 2), (2, 3)],
    [(0, 2)],
    [(0, 3), (3, 4)],
    [(2, 4)],
]

a, _, _ = farthest_with_path(0, graph)
b, diameter, previous = farthest_with_path(a, graph)

# b から previous を逆にたどる
path = [b]
while previous[path[-1]] != -1:
    path.append(previous[path[-1]])

print(diameter)  # 9
print(path)      # [1, 0, 2, 3] (頂点1から頂点3までの道)
```

- `previous[x]` に「x へ来る直前の頂点」を残し、端 `b` から逆にたどります。
- 経路復元の手口は[ダイクストラ法](/docs/algorithms/dijkstra/)と同じパターンです。

## 別パターン2: 辺の長さがすべて1の木（DFS版）

辺に重みがない木なら、[深さ優先探索](/docs/algorithms/depth-first-search/)でも同じことができます。再帰で書く形も見ておきましょう。

```python
import sys
sys.setrecursionlimit(10 ** 6)

def farthest_dfs(start, graph):
    n = len(graph)
    distance = [-1] * n

    def dfs(node, d):
        distance[node] = d
        for next_node in graph[node]:
            if distance[next_node] == -1:
                dfs(next_node, d + 1)

    dfs(start, 0)
    far_node = max(range(n), key=lambda x: distance[x])
    return far_node, distance[far_node]

# 辺の長さがすべて1の木 (隣接リスト)
graph = [
    [1, 2],
    [0],
    [0, 3, 4],
    [2],
    [2, 5],
    [4],
]

a, _ = farthest_dfs(0, graph)
b, diameter = farthest_dfs(a, graph)
print(a, b, diameter)  # 5 1 4 (頂点5から頂点1まで4本の辺)
```

- 重みなしの木なら「距離＝通った辺の数」です。
- 深い木で再帰を使う場合は、`sys.setrecursionlimit` の引き上げを忘れずに。

## よくあるミス

| ミス | 何が起きるか | 対処 |
| :--- | :--- | :--- |
| 1回の探索だけで直径とする | スタートが端でないと過小評価する | 必ず「遠い点からもう一度」の2回行う |
| 輪っかのあるグラフに使う | 2回探索の性質が成り立たず答えが違う | 木（連結で閉路なし）であることを確認する |
| 距離の初期値を0にする | 未訪問の判定ができない | `-1` で初期化して「未訪問」を区別する |

## AOJで挑戦してみよう！

<div className="aojChallenge">
  <p className="aojChallenge__message">学んだレシピを実際に使って、ジャッジから「Accepted（正解）」を勝ち取ろう！</p>
  <div className="aojChallenge__links">
    <a className="aojChallenge__button" href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=GRL_5_A&lang=ja" target="_blank" rel="noopener noreferrer">
      <span className="aojChallenge__label">GRL_5_A: Diameter of a Tree</span>
      <span className="aojChallenge__icon" aria-hidden="true">↗</span>
    </a>
  </div>
</div>
