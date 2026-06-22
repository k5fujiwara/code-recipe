---
sidebar_position: 16
title: Rust
description: メモリ安全性と高速処理を重視するRustの基本文法、所有権、Cargoを学ぶ
---

# Rust

Rustは、高速処理とメモリ安全性を両立しやすいように設計された言語です。低レイヤー、CLIツール、WebAssembly、クラウドインフラ、セキュリティが重要な開発で注目されています。

## 何ができる？

- 高速なCLIツールを作る
- メモリ安全な低レイヤーソフトを作る
- WebAssemblyでブラウザ上の高速処理を作る
- サーバーやインフラ系の基盤を作る
- C/C++の代替として安全性を高める

## 学習ゴール

- Rustの基本構造を読める
- 変数、条件分岐、繰り返し、関数を書ける
- 所有権の考え方をざっくり説明できる
- `Result` によるエラー処理を読める
- Cargoの役割を理解できる

## 開発環境の準備

| 必要なもの | 役割 |
| --- | --- |
| rustup | Rustのインストールと管理 |
| cargo | ビルド、実行、依存関係管理 |
| rustfmt | コード整形 |
| clippy | コード改善の提案 |

Rustでは、Cargoを使うことでプロジェクト作成から実行までを管理できます。

```bash
cargo new hello-rust
cd hello-rust
cargo run
```

## 基本構造

```rust
fn main() {
    println!("こんにちは、Rust");
}
```

`main` 関数がプログラムの入口です。

## 変数

```rust
let score = 85;
let mut count = 0;

count += 1;
```

Rustの変数は、基本的に変更できません。変更したい場合は `mut` を付けます。

## 条件分岐と繰り返し

```rust
let score = 85;

if score >= 80 {
    println!("よくできました");
} else {
    println!("もう少し練習しよう");
}
```

```rust
let languages = vec!["Rust", "Go", "C"];

for language in languages {
    println!("{}", language);
}
```

## 所有権の入口

Rustでは、値を誰が持っているかをコンパイラが厳しく確認します。

```rust
let name = String::from("Rust");
let moved_name = name;

println!("{}", moved_name);
```

この例では、`name` の所有権が `moved_name` に移ります。最初は難しく感じますが、メモリのミスを減らすための大切な仕組みです。

## Result

Rustでは、失敗する可能性がある処理を `Result` で表すことが多いです。

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        return Err(String::from("0では割れません"));
    }

    Ok(a / b)
}
```

エラーを無視せず、どう扱うかを明確に書く文化があります。

## 関連技術

| 技術 | できること |
| --- | --- |
| Cargo | ビルドと依存関係管理 |
| WebAssembly | ブラウザで高速処理 |
| Tokio | 非同期処理 |
| Actix Web | Webサーバー開発 |
| Tauri | デスクトップアプリ開発 |

## ミニ演習: 偶数判定

```rust
fn is_even(number: i32) -> bool {
    number % 2 == 0
}

fn main() {
    let number = 10;

    if is_even(number) {
        println!("偶数です");
    } else {
        println!("奇数です");
    }
}
```

関数の引数と戻り値の型に注目して読んでみましょう。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| 値を変更できない | `mut` がない | 変更する変数か |
| borrowエラー | 借用ルール違反 | 同時にどう使っているか |
| moveエラー | 所有権が移動した | 値の受け渡し |
| 型が合わない | 期待する型と違う | 関数の戻り値 |
| ライブラリが使えない | Cargo設定不足 | `Cargo.toml` |

## チェックリスト

- [ ] `cargo run` で実行できる
- [ ] `let` と `mut` の違いを説明できる
- [ ] `if` と `for` を使える
- [ ] 関数の型を読める
- [ ] 所有権の考え方をざっくり説明できる
- [ ] `Result` の役割を説明できる

## 次に学ぶこと

Rustに慣れたら、CLIツール、WebAssembly、Actix WebやTokioを使ったサーバー開発へ進めます。最初は難しいので、小さな関数とエラー処理から練習しましょう。
