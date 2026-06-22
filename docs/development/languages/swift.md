---
sidebar_position: 17
title: Swift
description: iPhoneやMacアプリ開発で使われるSwiftの基本文法、SwiftUI、Apple開発の入口を学ぶ
---

# Swift

Swiftは、iPhone、iPad、Mac、Apple Watchなど、Apple製品向けのアプリ開発で使われる言語です。モダンで安全性を意識した文法が特徴です。

## 何ができる？

- iPhoneアプリを作る
- iPadやMac向けアプリを作る
- Apple Watch向けアプリを作る
- SwiftUIで画面を作る
- Appleの機能を活かしたアプリを作る

## 学習ゴール

- Swiftの基本文法を読める
- 変数、条件分岐、配列、関数を書ける
- Optionalの考え方をざっくり説明できる
- SwiftUIで画面を作る入口を理解できる
- Xcodeの役割を説明できる

## 開発環境の準備

| 必要なもの | 役割 |
| --- | --- |
| Mac | iOSアプリ開発で基本的に必要 |
| Xcode | Apple公式の開発環境 |
| Swift Playgrounds | Swiftを楽しく学ぶ環境 |
| SwiftUI | AppleアプリのUIを作る仕組み |

iPhoneアプリを本格的に作る場合は、XcodeとMacがほぼ必要になります。

## 基本文法

```swift
let message = "こんにちは、Swift"
print(message)
```

`let` は変更しない値、`var` は変更できる値です。

```swift
let name = "太郎"
var score = 85

score += 5
```

## 条件分岐

```swift
let score = 85

if score >= 80 {
    print("よくできました")
} else {
    print("もう少し練習しよう")
}
```

## 配列と繰り返し

```swift
let languages = ["Swift", "Kotlin", "Dart"]

for language in languages {
    print(language)
}
```

## 関数

```swift
func greet(name: String) -> String {
    return "こんにちは、\(name)さん"
}

print(greet(name: "太郎"))
```

## Optional

Swiftでは、値があるかもしれないし、ないかもしれない状態をOptionalで表します。

```swift
var nickname: String? = nil
nickname = "たろう"
```

Optionalを使うことで、「値がないかもしれない」ことをコード上で意識できます。

## SwiftUIの入口

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("こんにちは、SwiftUI")
            .font(.title)
    }
}
```

SwiftUIでは、画面をコードで宣言的に作ります。

## 関連技術

| 技術 | できること |
| --- | --- |
| SwiftUI | AppleアプリのUIを作る |
| UIKit | 従来のiOS UI開発 |
| Xcode | 開発、実行、公開準備 |
| Combine | データの流れを扱う |
| Core Data | アプリ内データ保存 |

## ミニ演習: カウンターの考え方

```swift
var count = 0

count += 1
print(count)
```

SwiftUIでは、このような状態を画面と結びつけて、ボタンを押したら数字が増えるアプリを作れます。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| Optionalのエラー | nilの可能性がある | 値の有無 |
| 型が合わない | 期待する型と違う | `String` / `Int` |
| Xcodeで実行できない | 設定不足 | SchemeやSimulator |
| 画面が更新されない | 状態管理不足 | `@State` |
| 実機確認できない | 署名設定 | Apple IDやTeam |

## チェックリスト

- [ ] `let` と `var` の違いを説明できる
- [ ] `if` と `for` を使える
- [ ] 関数を書ける
- [ ] Optionalの意味を説明できる
- [ ] SwiftUIの基本形を読める
- [ ] Xcodeの役割を説明できる

## 次に学ぶこと

Swiftに慣れたら、SwiftUIでカウンター、メモアプリ、天気表示アプリを作ってみましょう。データ保存、画面遷移、API通信へ進むと実用的なアプリに近づきます。
