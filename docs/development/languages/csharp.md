---
sidebar_position: 10
title: C#
description: Unityゲーム開発や.NETで使われるC#の基本文法、クラス、関連フレームワークを学ぶ
---

# C#

C#は、Unityでのゲーム開発や.NETによるWebアプリ・Windowsアプリ開発で使われる言語です。Javaに近い文法を持ちながら、モダンで書きやすい機能も多くあります。

## 何ができる？

- Unityで2D・3Dゲームを作る
- Windowsアプリを作る
- Web APIや業務システムを作る
- VR・ARコンテンツを作る
- オブジェクト指向を学ぶ

## 学習ゴール

- C#の基本構造を読める
- 変数、条件分岐、繰り返し、メソッドを書ける
- クラスとオブジェクトの関係を理解できる
- Unityでスクリプトを書く入口を理解できる
- .NETとUnityの違いを説明できる

## 開発環境の準備

| 方法 | 向いている人 |
| --- | --- |
| Unity | ゲームを作りたい人 |
| Visual Studio | C#アプリをしっかり作りたい人 |
| .NET SDK | Web APIやコンソールアプリを作りたい人 |
| Rider | C#開発に特化したIDEを使いたい人 |

ゲーム目的ならUnity、業務アプリやWeb API目的なら.NETから始めると分かりやすいです。

## 基本構造

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("こんにちは、C#");
    }
}
```

`Main` はプログラムの入口です。

## 変数と条件分岐

```csharp
string name = "太郎";
int score = 85;
bool isClear = true;

if (score >= 80)
{
    Console.WriteLine("よくできました");
}
```

## クラス

```csharp
class Player
{
    public string Name { get; }
    public int Hp { get; private set; }

    public Player(string name, int hp)
    {
        Name = name;
        Hp = hp;
    }

    public void Damage(int point)
    {
        Hp -= point;
    }
}
```

ゲームでは、プレイヤー、敵、アイテムなどをクラスとして考えると整理しやすくなります。

## Unityでよく見る形

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    void Update()
    {
        transform.Translate(Vector3.right * Time.deltaTime);
    }
}
```

`Update` は毎フレーム呼ばれる処理です。Unityでは、オブジェクトにスクリプトを付けて動きを作ります。

## フレームワーク・関連技術

| 技術 | できること |
| --- | --- |
| Unity | ゲーム、VR、ARを作る |
| .NET | Web API、業務アプリ、Windowsアプリを作る |
| ASP.NET Core | WebアプリやAPIを作る |
| Entity Framework | データベースを扱う |
| NUnit / xUnit | テストを書く |

## ミニ演習: HPを減らす

```csharp
int hp = 100;
int damage = 25;

hp = hp - damage;

Console.WriteLine($"残りHP: {hp}");
```

慣れてきたら、HPが0以下になったら「ゲームオーバー」と表示してみましょう。

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| セミコロンエラー | `;` の書き忘れ | 行末 |
| 型エラー | 文字列と数字を混ぜている | 型の種類 |
| Unityで動かない | スクリプトを付けていない | GameObjectへの追加 |
| `NullReferenceException` | 参照が設定されていない | Inspector設定 |
| ビルドできない | .NETやUnityの設定 | エラーログ |

## チェックリスト

- [ ] 変数に型を書ける
- [ ] `if` と繰り返しを書ける
- [ ] メソッドを作れる
- [ ] クラスを読める
- [ ] Unityの `Update` の役割を説明できる
- [ ] .NETとUnityの違いを説明できる

## 次に学ぶこと

ゲームを作りたい人はUnityで小さな2Dゲームを作りましょう。業務アプリに進みたい人はASP.NET CoreとSQLを学ぶと、サーバー側の開発に進めます。
