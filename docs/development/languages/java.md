---
sidebar_position: 9
title: Java
description: 業務システムや大規模開発で使われるJavaの基本文法、オブジェクト指向、Spring Bootを学ぶ
---

# Java

Javaは、企業の業務システム、金融システム、Webアプリ、Android開発などで長く使われている言語です。ルールは多めですが、大規模開発の考え方を学びやすい言語です。

## 何ができる？

- 企業向けの業務システムを作る
- WebアプリやAPIを作る
- Androidアプリ開発の基礎を学ぶ
- 大規模なチーム開発に向いたコードを書く
- オブジェクト指向をしっかり学ぶ

## 学習ゴール

- Javaファイルの基本構造を読める
- 変数、条件分岐、繰り返し、メソッドを書ける
- クラスとインスタンスの関係を説明できる
- 型の考え方を理解できる
- Spring Bootへ進む入口を理解できる

## 開発環境の準備

| 必要なもの | 役割 |
| --- | --- |
| JDK | Javaをコンパイル・実行する |
| IntelliJ IDEA / Eclipse | Java開発用のエディタ |
| Gradle / Maven | ライブラリやビルドを管理する |
| Spring Boot | Webアプリ開発でよく使うフレームワーク |

最初はオンライン実行環境やIDEのテンプレートを使い、慣れてきたらGradleやMavenを学ぶとよいです。

## 基本構造

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("こんにちは、Java");
    }
}
```

Javaでは、基本的にクラスの中に処理を書きます。`main` メソッドは、プログラムの入口です。

## 変数と型

```java
String name = "太郎";
int age = 15;
boolean isStudent = true;
```

Javaは型を明確に書く言語です。文字列は `String`、整数は `int`、真偽値は `boolean` を使います。

## 条件分岐と繰り返し

```java
int score = 85;

if (score >= 80) {
    System.out.println("よくできました");
} else {
    System.out.println("もう少し練習しよう");
}
```

```java
String[] languages = {"Java", "SQL", "Spring Boot"};

for (String language : languages) {
    System.out.println(language);
}
```

## クラスとインスタンス

```java
class User {
    String name;

    User(String name) {
        this.name = name;
    }

    String greet() {
        return "こんにちは、" + name + "さん";
    }
}
```

クラスは設計図、インスタンスは設計図から作られた実体です。Javaではこの考え方がとても重要です。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| Spring Boot | WebアプリやAPIを作る |
| JUnit | テストを書く |
| Gradle / Maven | ビルドと依存関係を管理する |
| MySQL / PostgreSQL | データベースを使う |
| Android Studio | Androidアプリを作る |

## ミニ演習: 生徒の点数判定

```java
public class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 80) {
            System.out.println("A評価");
        } else if (score >= 60) {
            System.out.println("B評価");
        } else {
            System.out.println("もう少し練習");
        }
    }
}
```

点数を変えて、表示がどう変わるか確認してみましょう。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| コンパイルできない | セミコロン忘れ | 行末の `;` |
| クラスが見つからない | ファイル名とクラス名が違う | `Main.java` と `class Main` |
| 型エラーになる | 型が合っていない | `String` / `int` など |
| `NullPointerException` | 値がないものを使っている | nullチェック |
| Spring Bootで起動しない | 設定不足 | エラーログと依存関係 |

## チェックリスト

- [ ] `main` メソッドの役割を説明できる
- [ ] 変数に型を書ける
- [ ] `if` と `for` を使える
- [ ] メソッドを作れる
- [ ] クラスとインスタンスを説明できる
- [ ] Spring Bootが何をするものか説明できる

## 次に学ぶこと

Javaの文法に慣れたら、SQLとSpring Bootを学びましょう。ログイン、一覧表示、登録フォームなどを作ると、業務システムの基本に近づきます。
