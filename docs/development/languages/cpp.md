---
sidebar_position: 14
title: C++
description: 高速処理、ゲーム、競技プログラミングで使われるC++の基本文法、クラス、STLを学ぶ
---

# C++

C++は、C言語の考え方を土台に、クラスやテンプレートなどの機能を加えた高性能な言語です。ゲームエンジン、3D処理、競技プログラミング、組み込み、高速なシステム開発で使われます。

## 何ができる？

- 高速なプログラムを書く
- 3Dゲームやゲームエンジンを作る
- 競技プログラミングで効率的に解く
- 画像処理やシミュレーションを作る
- C言語に近い低レイヤーも扱う

## 学習ゴール

- C++の基本構造を読める
- 変数、条件分岐、繰り返し、関数を書ける
- `vector` や `string` などSTLを使える
- クラスの基本を理解できる
- C++が難しい理由と強みを説明できる

## 開発環境の準備

| 方法 | 向いている人 |
| --- | --- |
| オンライン実行環境 | 文法を試したい人 |
| GCC / Clang | ローカルで学びたい人 |
| Visual Studio | WindowsでC++開発したい人 |
| Unreal Engine | 本格的なゲーム開発をしたい人 |

競技プログラミングでは、オンラインジャッジの実行環境に合わせてC++の標準バージョンを確認します。

## 基本構造

```cpp
#include <iostream>

int main() {
    std::cout << "こんにちは、C++" << std::endl;
    return 0;
}
```

`std::cout` は画面に文字を表示するために使います。

## 変数と条件分岐

```cpp
int score = 85;

if (score >= 80) {
    std::cout << "よくできました" << std::endl;
} else {
    std::cout << "もう少し練習しよう" << std::endl;
}
```

## vector

`vector` は、数が変わるデータの並びを扱いやすくする仕組みです。

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {80, 95, 72};

    for (int score : scores) {
        std::cout << score << std::endl;
    }
}
```

## 関数

```cpp
int add(int a, int b) {
    return a + b;
}
```

型を明確に書くことで、何を受け取り何を返すかが分かりやすくなります。

## クラス

```cpp
#include <string>

class Player {
public:
    std::string name;
    int hp;

    Player(std::string playerName, int playerHp) {
        name = playerName;
        hp = playerHp;
    }
};
```

ゲームでは、プレイヤー、敵、アイテムなどをクラスとして表せます。

## STL

STLは、C++でよく使う便利な部品の集まりです。

| 技術 | 役割 |
| --- | --- |
| `vector` | 可変長の配列 |
| `string` | 文字列 |
| `map` | キーと値のペア |
| `set` | 重複しない集合 |
| `queue` | 先入れ先出し |
| `priority_queue` | 優先度付きキュー |

## 関連技術

| 技術 | できること |
| --- | --- |
| Unreal Engine | 高品質な3Dゲーム開発 |
| CMake | C++プロジェクトのビルド管理 |
| OpenCV | 画像処理 |
| AtCoder | 競技プログラミング |
| Rust | 安全性を重視した代替候補 |

## ミニ演習: 最大値を探す

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {80, 95, 72, 88};
    int maxScore = scores[0];

    for (int score : scores) {
        if (score > maxScore) {
            maxScore = score;
        }
    }

    std::cout << maxScore << std::endl;
}
```

最小値や平均点も求めてみましょう。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| コンパイルできない | `;` や `#include` 忘れ | エラー行の前後 |
| `std` のエラー | 名前空間の指定不足 | `std::` や `using` |
| 配列で落ちる | 範囲外アクセス | 添字の範囲 |
| 型が合わない | 期待する型と違う | 関数の引数 |
| 実行が遅い | アルゴリズムが重い | 計算量 |

## チェックリスト

- [ ] `iostream` を使って出力できる
- [ ] `if` と `for` を使える
- [ ] `vector` を使える
- [ ] 関数を作れる
- [ ] クラスの基本を読める
- [ ] STLの代表的な部品を知っている

## 次に学ぶこと

競技プログラミングに進むならデータ構造とアルゴリズム、ゲーム開発に進むならUnreal Engine、低レイヤーの安全性に興味があるならRustを学びましょう。
