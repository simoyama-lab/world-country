# WORLD COUNTRY

世界各国をオリジナルキャラクターとして描く、長期成長型の公式キャラクターアーカイブです。

> 世界には、まだ知らない誰かがいる。

現在はCOUNTRY No.001～No.010を収録しています。JAPANとUNITED KINGDOMには、共通マスター仕様を使った個別キャラクターページがあります。

## サイト構成

- `index.html`：スタートページと共通画面
- `style.css`：全体デザインとレスポンシブ表示
- `script.js`：COUNTRYデータと個別ページ共通テンプレート
- `イメージ/カントリー/`：既存キャラクター画像
- `MASTER_SYSTEM.md`：新しいCOUNTRYを追加する方法

## ローカルで確認する

VS Codeで`WORLD_COUNTRY`フォルダを開き、ターミナルで次を実行します。

```powershell
python -m http.server 3400
```

ブラウザで `http://localhost:3400/` を開きます。

## GitHub Pages

このフォルダは、GitHub Pagesの `main` ブランチ `/ (root)` からそのまま公開できる静的サイトです。公開先のリポジトリ名をコードへ固定していないため、プロジェクトサイトのサブディレクトリでも相対パスで動作します。

## 更新の基本

1. ローカルの`WORLD_COUNTRY`を編集する
2. ローカルサーバーで確認する
3. 変更をGitへcommitする
4. GitHubへpushする
5. GitHub Pagesの更新完了を確認する

新しいCOUNTRYは、画像を既存形式のフォルダへ置き、`script.js`の`characterRecords`へデータを1件追加します。
