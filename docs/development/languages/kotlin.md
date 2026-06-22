---
sidebar_position: 18
title: Kotlin
description: Androidアプリ開発で使われるKotlinの基本文法、null安全、Jetpack Composeを学ぶ
---

# Kotlin

Kotlinは、Androidアプリ開発でよく使われるモダンな言語です。Javaと連携しやすく、短く安全に書きやすい文法が特徴です。

## 何ができる？

- Androidアプリを作る
- Javaより短く読みやすいコードを書く
- サーバーサイド開発をする
- Kotlin Multiplatformで複数環境のロジックを共有する
- Jetpack Composeで画面を作る

## 学習ゴール

- Kotlinの基本文法を読める
- 変数、条件分岐、繰り返し、関数を書ける
- null安全の考え方を説明できる
- data classを使える
- Android開発との関係を理解できる

## 開発環境の準備

| 必要なもの | 役割 |
| --- | --- |
| Android Studio | Android公式の開発環境 |
| Kotlin | Android開発で使う言語 |
| Jetpack Compose | コードでUIを作る仕組み |
| Gradle | ビルドと依存関係を管理する |

Androidアプリを作るなら、Android Studioから始めるのが基本です。

## 基本文法

```kotlin
fun main() {
    val message = "こんにちは、Kotlin"
    println(message)
}
```

`val` は変更しない値、`var` は変更できる値です。

```kotlin
val name = "太郎"
var score = 85

score += 5
```

## 条件分岐

```kotlin
val score = 85

if (score >= 80) {
    println("よくできました")
} else {
    println("もう少し練習しよう")
}
```

Kotlinでは、`if` を値として使うこともできます。

```kotlin
val result = if (score >= 80) "合格" else "再挑戦"
```

## リストと繰り返し

```kotlin
val languages = listOf("Kotlin", "Java", "Swift")

for (language in languages) {
    println(language)
}
```

## 関数

```kotlin
fun greet(name: String): String {
    return "こんにちは、${name}さん"
}
```

短く書くこともできます。

```kotlin
fun add(a: Int, b: Int): Int = a + b
```

## null安全

Kotlinでは、通常の変数には `null` を入れられません。

```kotlin
var name: String = "太郎"
```

`null` の可能性がある場合は `?` を付けます。

```kotlin
var nickname: String? = null
```

これにより、値がない場合のエラーを減らしやすくなります。

## data class

```kotlin
data class User(
    val name: String,
    val age: Int
)

val user = User(name = "太郎", age = 15)
println(user.name)
```

データをまとめるクラスを短く書けます。

## Jetpack Composeの入口

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "こんにちは、$name")
}
```

Jetpack Composeでは、画面を関数の組み合わせで作ります。

## 関連技術

| 技術 | できること |
| --- | --- |
| Android Studio | Androidアプリ開発 |
| Jetpack Compose | モダンなAndroid UI |
| Gradle | ビルド管理 |
| Kotlin Multiplatform | 複数環境でロジック共有 |
| Ktor | Kotlinでサーバー開発 |

## ミニ演習: ユーザー一覧

```kotlin
data class User(val name: String, val age: Int)

fun main() {
    val users = listOf(
        User("太郎", 15),
        User("花子", 16)
    )

    for (user in users) {
        println("${user.name}: ${user.age}歳")
    }
}
```

data classとリストを組み合わせると、アプリで扱うデータに近い形になります。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| nullのエラー | nullの可能性を無視している | `?` や安全呼び出し |
| 型が合わない | 期待する型と違う | `String` / `Int` |
| Composeが表示されない | 呼び出し位置が違う | `@Composable` |
| Androidビルド失敗 | Gradle設定 | エラーログ |
| 画面が更新されない | 状態管理不足 | `remember` やState |

## チェックリスト

- [ ] `val` と `var` の違いを説明できる
- [ ] `if` と `for` を使える
- [ ] 関数を書ける
- [ ] null安全を説明できる
- [ ] data classを読める
- [ ] Jetpack Composeの基本形を読める

## 次に学ぶこと

Kotlinに慣れたら、Android Studioで計算機アプリやメモアプリを作ってみましょう。画面遷移、データ保存、API通信を学ぶと、実用的なAndroidアプリへ進めます。
