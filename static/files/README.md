# ダウンロード用ファイル（static/files）

このフォルダに置いたファイルは、サイトからそのままダウンロードできます。

例: `https://code-recipes.com/files/task-automailer-gas.txt`

## 日本語が文字化けしないようにする

Windows のメモ帳や一部のエディタは、**UTF-8 BOM なし**のファイルを Shift_JIS として開き、日本語が化けます。

### 手順

1. `.txt` として保存（`.gs` はブラウザ表示で化けやすいので非推奨）
2. エンコーディングを **UTF-8（BOM 付き）** にする
3. リポジトリに追加して push

### VS Code

画面右下のエンコーディング →「Save with Encoding」→ **UTF-8 with BOM**

### コマンド（推奨）

```bash
node scripts/ensure-utf8-bom.mjs static/files/あなたのファイル.txt
```

## Task AutoMailer のファイル名

| ファイル | 用途 |
| :--- | :--- |
| `task-automailer-gas.txt` | GAS スクリプト（Apps Script に貼り付け） |

スプレッドシート雛形は [Google スプレッドシートの `/copy` リンク](https://docs.google.com/spreadsheets/d/1a-dqs06uuafCe2MHamkG9SxJfrTzZJSnW3UTi_eaitg/copy) で配布します。

独自の txt がある場合は、上記ファイル名でこのフォルダに置き換えてから BOM スクリプトを実行してください。
