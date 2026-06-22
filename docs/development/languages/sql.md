---
sidebar_position: 11
title: SQL
description: データベース操作に使うSQLの基本、SELECT、条件、集計、Webアプリとの関係を学ぶ
---

# SQL

SQLは、データベースからデータを取り出したり、登録・更新・削除したりするための言語です。Webアプリ、業務システム、データ分析など、データを扱う多くの場面で使われます。

## 何ができる？

- ユーザーや商品データを検索する
- 新しいデータを登録する
- データを更新・削除する
- 売上や件数を集計する
- 複数の表を結びつけて調べる

## 学習ゴール

- テーブル、行、列の関係を説明できる
- `SELECT` でデータを取り出せる
- `WHERE` で条件を指定できる
- `ORDER BY` や `LIMIT` を使える
- `COUNT` や `SUM` で集計できる
- Webアプリとデータベースの関係を理解できる

## データベースの基本

データベースは、表の形でデータを管理します。

| id | name | score |
| --- | --- | --- |
| 1 | 太郎 | 85 |
| 2 | 花子 | 92 |
| 3 | 次郎 | 70 |

この表を `students` テーブルと考えると、SQLで条件を指定して必要なデータを取り出せます。

## SELECT

```sql
SELECT name, score
FROM students;
```

`SELECT` は、どの列を取り出すかを指定します。

## WHERE

```sql
SELECT name, score
FROM students
WHERE score >= 80;
```

`WHERE` は条件を指定します。この例では、80点以上の生徒だけを取り出します。

## 並び替えと件数制限

```sql
SELECT name, score
FROM students
ORDER BY score DESC
LIMIT 3;
```

`ORDER BY` は並び替え、`LIMIT` は取り出す件数の制限です。

## 集計

```sql
SELECT COUNT(*) AS student_count
FROM students;
```

```sql
SELECT AVG(score) AS average_score
FROM students;
```

件数、平均、合計などを求められます。

## INSERT / UPDATE / DELETE

```sql
INSERT INTO students (name, score)
VALUES ('三郎', 88);
```

```sql
UPDATE students
SET score = 90
WHERE id = 1;
```

```sql
DELETE FROM students
WHERE id = 3;
```

削除や更新は、条件を間違えると多くのデータに影響するため注意が必要です。

## 関連技術

| 技術 | できること |
| --- | --- |
| MySQL | Web開発でよく使われるDB |
| PostgreSQL | 高機能で信頼性の高いDB |
| SQLite | 小さなアプリや学習で使いやすいDB |
| Prisma | TypeScriptからDBを扱いやすくする |
| Active Record | RailsでDBを扱う仕組み |

## ミニ演習: 上位3人を取り出す

`students` テーブルから、点数が高い順に3人を表示するSQLを書いてみましょう。

```sql
SELECT name, score
FROM students
ORDER BY score DESC
LIMIT 3;
```

次に、80点以上の人数を数えるSQLにも挑戦してみましょう。

```sql
SELECT COUNT(*) AS passed_count
FROM students
WHERE score >= 80;
```

## よくあるエラーと直し方

| 困ったこと | 原因の例 | 確認すること |
| --- | --- | --- |
| テーブルがない | 名前が違う | テーブル名 |
| 列がない | カラム名が違う | 列名 |
| 結果が多すぎる | 条件不足 | `WHERE` |
| 並び順が逆 | `ASC` / `DESC` の違い | 並び替え |
| 更新しすぎた | 条件ミス | `UPDATE` 前に `SELECT` |

## チェックリスト

- [ ] テーブル、行、列を説明できる
- [ ] `SELECT` を書ける
- [ ] `WHERE` で条件を指定できる
- [ ] `ORDER BY` と `LIMIT` を使える
- [ ] `COUNT` や `AVG` を使える
- [ ] `INSERT`、`UPDATE`、`DELETE` の役割を説明できる

## 次に学ぶこと

Webアプリに進むなら、PHP、Ruby、Java、TypeScriptなどとSQLを組み合わせましょう。データ分析に進むなら、PythonやRと一緒に学ぶと実務に近づきます。
