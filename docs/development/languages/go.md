---
sidebar_position: 15
title: Go
description: サーバー、クラウド、マイクロサービスで使われるGoの基本文法、goroutine、関連ツールを学ぶ
---

# Go

Goは、Googleが開発したシンプルで高速な言語です。APIサーバー、マイクロサービス、クラウドインフラ、ネットワーク処理など、Webサービスの裏側でよく使われます。

## 何ができる？

- 高速なAPIサーバーを作る
- 並行処理を扱う
- クラウドやインフラ系ツールを作る
- 小さく配布しやすいコマンドラインツールを作る
- マイクロサービスを作る

## 学習ゴール

- Goの基本構造を読める
- 変数、条件分岐、繰り返し、関数を書ける
- 構造体を使える
- goroutineの役割をざっくり説明できる
- Goがサーバー開発で使われる理由を理解できる

## 開発環境の準備

| 必要なもの | 役割 |
| --- | --- |
| Go | コンパイルと実行 |
| VS Code | Go拡張機能で書きやすくする |
| gofmt | コードを自動整形する |
| Docker | サーバー開発の環境を揃える |

Goでは `gofmt` によってコードの書き方が揃いやすいのが特徴です。

## 基本構造

```go
package main

import "fmt"

func main() {
    fmt.Println("こんにちは、Go")
}
```

`package main` と `func main()` が、実行するプログラムの基本形です。

## 変数と条件分岐

```go
score := 85

if score >= 80 {
    fmt.Println("よくできました")
} else {
    fmt.Println("もう少し練習しよう")
}
```

`:=` を使うと、型を推測して変数を作れます。

## スライス

```go
languages := []string{"Go", "Docker", "SQL"}

for _, language := range languages {
    fmt.Println(language)
}
```

スライスは、よく使う可変長のリストです。

## 構造体

```go
type User struct {
    Name string
    Age  int
}

user := User{Name: "太郎", Age: 15}
fmt.Println(user.Name)
```

構造体を使うと、関連するデータをまとめて扱えます。

## goroutine

```go
go func() {
    fmt.Println("別の処理を実行")
}()
```

goroutineは、軽量な並行処理の仕組みです。大量の通信や複数の処理を扱うサーバー開発で役立ちます。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| net/http | 標準ライブラリでHTTPサーバーを作る |
| Gin | 軽量なWeb APIを作る |
| Echo | Web APIを作る |
| Docker | Goアプリをコンテナ化する |
| Kubernetes | コンテナを運用する |

## ミニ演習: HTTPサーバー

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Hello, Go server")
    })

    http.ListenAndServe(":8080", nil)
}
```

ブラウザで `http://localhost:8080` を開くと、文字が表示されます。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| 使っていない変数でエラー | Goは未使用を許さない | 不要な変数を消す |
| importエラー | 未使用または不足 | import一覧 |
| ポートが使えない | 既に起動中 | ポート番号 |
| JSONが返らない | ヘッダー設定不足 | Content-Type |
| 並行処理が難しい | goroutineの終了タイミング | channelやWaitGroup |

## チェックリスト

- [ ] `go run` で実行できる
- [ ] `fmt.Println` を使える
- [ ] スライスを使える
- [ ] 構造体を作れる
- [ ] HTTPサーバーの基本を読める
- [ ] goroutineの役割を説明できる

## 次に学ぶこと

Goに慣れたら、HTTP API、JSON、SQL、Dockerを組み合わせて小さなサーバーを作ってみましょう。クラウドやインフラに進むならKubernetesにも触れると理解が広がります。
