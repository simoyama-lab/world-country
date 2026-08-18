# WORLD COUNTRY 個別ページ・マスター仕様

JAPANを基準に、一覧と個別ページを同じキャラクターデータから生成します。HTMLを国ごとに複製する必要はありません。

## 新しいCOUNTRYを追加する

1. 既存と同じ形式で、国フォルダ内の「キャラクター」へ完成画像を置きます。
2. `script.js` 冒頭の `characterRecords` へ1件追加します。
3. `number` は永続IDです。既存番号を変更せず、新しい番号を使用します。
4. 一覧だけを先に公開する場合は、基本情報と画像パスだけで構いません。
5. 個別ページを公開するときは、そのデータへ `details` を追加します。

## detailsで追加できる情報

- `tagline`, `description`, `quotes`
- `role`, `symbol`, `personality`, `likes`, `dislikes`, `weakness`
- `countryNotes`: 3件でも6件でも追加可能
- `relationships`: 相手番号・国名・画像・この人物視点の説明を追加
- `travelLogs`: 複数話を配列で追加。各話は `number`, `title`, `intro`, `lines`, `epilogue`, `cast` を持てます
- `nextCountry`: 次の旅人への案内。未公開なら `available: false`

関係文は双方向で共有しません。JAPANから見たINDIAと、INDIAから見たJAPANをそれぞれの `relationships` に登録します。

## 将来拡張

各データには `slug`, `region`, `continent`, `mapPosition`, `coordinates`, `classifications`, `theme` を追加できます。WORLD MAP、地域分類、検索、登場TRAVEL LOG検索へ利用できます。

表示レイアウトを変更するときは `showCountryDetail` と共通CSSを1か所変更すれば、詳細データを持つすべてのCOUNTRYへ反映されます。
