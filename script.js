// ============================================================
// ここへ新しい国を追加：この配列へ1件追加するとカードが増えます。
// image が画像ファイルの場所、title が肩書き、description が紹介文です。
// ============================================================
// WORLD COUNTRY MASTER DATA
// ============================================================
// 新しい国はこの配列へ1件追加します。COUNTRY No.は永続IDなので変更しません。
// 詳細ページを公開する国は details を追加してください。
// countryNotes / relationships / travelLogs は件数を固定せず、配列へ追加できます。
// relationships は「この人物から相手をどう見ているか」という片方向データです。
const characterRecords = [
  {
    number: 1,
    englishName: "JAPAN",
    localName: "日本",
    japaneseName: "日本",
    title: "離れた想いを、静かにつなぐ旅人",
    image: "イメージ/カントリー/1.日本/キャラクター/1..png",
    // ここが日本の詳細文章。今後の国も同じdetails形式で追加できます。
    details: {
      tagline: "通信・接続・整理・調整を担う、静かな旅人。",
      description: "言葉、道具、人、場所。離れているものの間に細い道をつくる旅人。静かで几帳面。目立つことは好まないが、気づけば必要な準備はいつも終わっている。赤い通信機器には、今日も誰かからの声が届く。",
      roleTitle: "つながりを整える",
      role: "通信・接続・整理・調整。人と人、場所と場所、情報と情報、古いものと新しいものを、派手ではない方法でつないでいく。WORLD COUNTRYの旅では、混乱した情報や予定を整理し、仲間たちが動ける状態へ整える役割を持つ。",
      symbolTitle: "赤い通信機器",
      symbol: "レトロな赤い通信機器。昔の電話を思わせる姿をしているが、離れた場所の声や情報をつなぐために長年改良されてきた道具。武器ではない。彼女にとって『離れているものをつなぐ』ための大切な仕事道具。",
      personality: ["静か", "几帳面", "責任感が強い", "観察力が高い", "人の変化によく気づく", "少し頑固"],
      personalityNote: "必要以上に前へ出ないが、誰かが困っていると、いつの間にか必要な準備を終えている。",
      voice: ["「順番に確認しましょう。」", "「それ、戻す場所が違います。」", "「……あとで片付けます。」"],
      likes: ["整った机", "丁寧に修理された古い道具", "静かな朝", "細かな文房具", "規則正しく動く機械", "誰かから届いた手紙", "温かいお茶", "旅先でもらった小物", "予定通りに物事が進むこと"],
      dislikes: ["突然の予定変更", "道具を元の場所へ戻さない人", "大声で急かされること", "整理されていない配線", "説明を最後まで聞かず作業を始める人", "「たぶん大丈夫」という言葉", "忘れ物"],
      flawTitle: "「念のためです。」",
      weakness: "心配性。問題が起きる前から『もし○○だったら』を考えすぎる。旅行では、予備の電池、予備のコード、予備の筆記具、予備の袋、予備の雨具などを必要以上に持ってくる。本人はいつも『念のためです。』と言う。",
      whyCountry: "日本から着想した、古いものと新しいものの共存、精密なものづくり、整理された仕組み、通信、手仕事、機械、和の布、現代的な道具といった要素を、一人の『つなぐ旅人』として再構成したキャラクター。日本そのものを説明する人物ではなく、日本の文化・技術・美意識から受け取った要素が、衣装や道具、仕事の中へ静かに溶け込んでいる。",
      countryNotes: [
        { title: "OLD & NEW", text: "古い技術と新しい技術が、同じ街や暮らしの中に並んでいること。" },
        { title: "CONNECTION", text: "鉄道や物流など、時間と場所の接続を支える仕組み。" },
        { title: "REPAIR", text: "手を入れ、修理しながら長く使われてきた道具。" },
        { title: "SEASONS", text: "季節や土地によって、道具や暮らしの形が少しずつ変わること。" },
        { title: "CRAFT", text: "細かな手仕事と、精密なものづくりが重なる風景。" }
      ],
      relationships: [
        { country: "INDIA", japanese: "インド", number: 7, image: "イメージ/カントリー/7.インド/キャラクター/1..png", text: "頻繁に小さな口論になる相手。インドは説明の途中で作業を始め、日本は順番を確認してから始めたい。インドが日本の工具を勝手に借りるため、よく注意している。しかし緊急時には非常に相性が良い。日本が混乱を整理し、インドが突破口を作る。" },
        { country: "PERU", japanese: "ペルー", number: 6, image: "イメージ/カントリー/6.ペルー/キャラクター/1..png", text: "日本が予定を優先しすぎると、『まず食べな』と言って強制的に休ませる相手。日本が自分自身を後回しにしていることを、ペルーはよく見抜いている。" },
        { country: "UNITED KINGDOM", japanese: "イギリス", number: 2, image: "イメージ/カントリー/2.イギリス/キャラクター/1.png", text: "イギリスの奇術や冗談に、日本はほとんど反応しない。しかし実際にはかなり気になっている。仕掛けを見破ったあと、何も言わずカードの位置だけ直しておくことがある。" }
      ],
      travelLogs: [{
        number: 1,
        title: "予備はあります",
        intro: "旅の途中、INDIAが使っていた通信端末の電池が切れた。",
        lines: [
          ["INDIA", "まずい。予備ある？"],
          ["NARRATION", "JAPANは無言で小さな袋を開く。中には、予備電池が三つ。"],
          ["INDIA", "三つも？"],
          ["JAPAN", "念のためです。"],
          ["NARRATION", "その直後、UNITED KINGDOMが横から一つ取り出す。"],
          ["UNITED KINGDOM", "では一つ、手品に使っても？"],
          ["JAPAN", "だめです。"],
          ["UNITED KINGDOM", "即答ですね。"],
          ["JAPAN", "予備なので。"],
          ["INDIA", "予備って使うためにあるんじゃないの？"],
          ["JAPAN", "必要なときに使います。"],
          ["INDIA", "今が必要なときじゃない？"],
          ["JAPAN", "あなたには一つ渡しました。"],
          ["NARRATION", "イギリスだけが笑っている。"]
        ],
        epilogue: "翌朝、日本の鞄から同じ型の予備電池が、もう二つ見つかった。"
      }],
      nextCountry: { number: 2, englishName: "UNITED KINGDOM", japaneseName: "イギリス", available: true }
    }
  },
  {
    number: 2,
    englishName: "UNITED KINGDOM",
    localName: "United Kingdom",
    japaneseName: "イギリス",
    title: "答えのとなりに、もう一つの扉を置く旅人",
    image: "イメージ/カントリー/2.イギリス/キャラクター/1.png",
    theme: { accent: "#49634f", navy: "#293342", gold: "#a88a56" },
    classifications: ["奇術師", "観察者", "言葉遊び", "境界"],
    details: {
      tagline: "奇術・暗号・言葉遊びで、現実と虚構の境目を半歩だけずらす旅人。",
      description: "カードを一枚めくるたび、確かだったはずの答えが少しだけ揺らぐ。仕掛けなのか、本当に不思議な力なのか、本人は決して説明しない。飄々と笑いながら相手の反応を見つめ、答えの代わりに新しい疑問を残していく。けれど困っている人を見過ごすほど意地悪ではない。助けたことさえ、たぶん偶然だったことにしてしまう。",
      roleTitle: "境界をずらす",
      role: "境界をずらす。人が当然だと思っていることを、ほんの少し違う角度から見せる。答えを直接渡すのではなく、『本当にそう？』という小さな疑問を残し、見慣れた世界の隣にもう一つの可能性を置く。",
      symbolTitle: "仕掛けのカード",
      symbol: "仕掛けのカード。一見すると普通のカードだが、見る角度、順番、持つ人、置く場所によって、書かれているものが少し変わって見える。本当に変化しているのか、単なる錯覚なのかは不明。本人に尋ねても、微笑むだけで教えてくれない。",
      personality: ["飄々としている", "頭の回転が速い", "観察好き", "少し皮肉屋", "いたずら好き", "好奇心旺盛", "意外と面倒見がいい", "本心を全部見せない"],
      personalityNote: "答えをすぐには教えず、相手が気づく瞬間を楽しみに待つ。からかわれた側も最後には、呆れながら少し笑ってしまう。",
      voice: ["「さて。どちらでしょう？」", "「私は何もしていませんよ？」", "「……あら。見つかってしまいました。」"],
      likes: ["古いトランプ", "仕掛け箱", "雨音", "古い本", "謎解き", "紅茶", "少し変わったティーカップ", "噂話", "古い劇場", "誰かが驚いた瞬間", "答えが一つではない問題", "意味のないように見える小物"],
      dislikes: ["全部説明すること", "予定通りすぎる旅", "反応してくれない相手", "『結論だけ教えて』と言われること", "仕掛けを途中で説明されること", "カードを勝手に並べ替えられること", "冗談を本気で受け取られること"],
      flawTitle: "「少しだけ面白い方がいいでしょう？」",
      weakness: "驚かせたくなると我慢できない。真面目な会議中でもカードを一枚だけ入れ替え、誰かの帽子から砂糖の包みを取り出し、JAPANが整えた道具にジョーカーを混ぜる。悪意はない。本人曰く、『少しだけ面白い方がいいでしょう？』。",
      whyCountry: "古い物語と現代の文化、格式と遊び心、文学・演劇・奇術・推理、そして直接言い切らないユーモア。イギリスから受け取ったそれらの要素を、現実と虚構の境を少しだけずらす一人の旅人として組み直した。霧や雨、古い建築、ティータイムは飾りではなく、答えを急がず、会話と想像の余地を楽しむ彼女の時間の中へ静かに溶け込んでいる。",
      countryNotes: [
        { title: "STORY", text: "古い物語と現代の文化が、今も同じ街の中で生きていること。" },
        { title: "HUMOUR", text: "直接言い切らず、少しひねって伝える言葉の面白さ。" },
        { title: "MYSTERY", text: "推理や謎、不可思議な物語を、答えまでの時間ごと楽しむこと。" },
        { title: "TEA", text: "飲み物だけではなく、会話や休息のためにひらかれる時間。" },
        { title: "OLD & NEW", text: "歴史ある建物や制度の隣に、新しい文化が並んで存在していること。" }
      ],
      relationships: [
        { country: "JAPAN", japanese: "日本", number: 1, image: "イメージ/カントリー/1.日本/キャラクター/1..png", text: "JAPANが几帳面に整えたものへ、小さな仕掛けを忍ばせたくなる相手。けれどJAPANはほぼ毎回、しかも予想より早く気づく。『戻してください』『何をでしょう？』『三枚目です』『……早いですね』。互いのやり方は正反対だが、観察力と仕事の正確さをかなり高く評価している。" },
        { country: "MOROCCO", japanese: "モロッコ", number: 3, image: "イメージ/カントリー/3.モロッコ/キャラクター/1..png", text: "迷路や道標を読むMOROCCOへ、わざと一つ余計な手がかりを残す。MOROCCOは怒るより先に、その嘘が何を隠しているか考え始める。二人の会話は謎かけのように続き、周囲にはどちらが出題者なのか分からない。" },
        { country: "FINLAND", japanese: "フィンランド", number: 9, image: "イメージ/カントリー/9.フィンランド/キャラクター/1..png", text: "驚かせようとしても静かに見返される、少し手強い相手。FINLANDは仕掛けより先に、カードが動く小さな音へ気づくことがある。失敗したUNITED KINGDOMは平然としているが、次の仕掛けにはいつも以前より時間をかけている。" }
      ],
      travelLogs: [{
        number: 1,
        title: "消えた砂糖",
        cast: ["UNITED KINGDOM", "JAPAN", "PERU"],
        intro: "旅の休憩中、PERUがお茶を入れた。テーブルに並べた砂糖の包みが、一つだけ足りない。",
        lines: [
          ["JAPAN", "先ほどまで六つありました。"],
          ["UNITED KINGDOM", "そうでした？"],
          ["JAPAN", "あなたの袖です。"],
          ["UNITED KINGDOM", "失礼ですね。"],
          ["NARRATION", "UNITED KINGDOMが袖を振る。何も出ない。"],
          ["NARRATION", "JAPANは黙ってUNITED KINGDOMのティーカップを持ち上げた。その下に、砂糖がある。"],
          ["UNITED KINGDOM", "……いつから気づいていました？"],
          ["JAPAN", "最初からです。"],
          ["UNITED KINGDOM", "それはつまらないですね。"],
          ["NARRATION", "その直後、JAPANの通信機器の上に、もう一つ砂糖が置かれている。"],
          ["JAPAN", "…………。"],
          ["UNITED KINGDOM", "それは私ではありませんよ？"]
        ],
        epilogue: "本当かどうかは、最後まで誰にも分からなかった。"
      }],
      nextCountry: { number: 3, englishName: "MOROCCO", japaneseName: "モロッコ", available: false }
    }
  },
  { number: 3, englishName: "MOROCCO", localName: "المغرب", japaneseName: "モロッコ", title: "光と迷路を読み解く、黄昏の道標職人", image: "イメージ/カントリー/3.モロッコ/キャラクター/1..png" },
  { number: 4, englishName: "PORTUGAL", localName: "Portugal", japaneseName: "ポルトガル", title: "海の向こうへ消えた物語を集める、蒼夜の記憶守", image: "イメージ/カントリー/4.ポルトガル/キャラクター/1.png" },
  { number: 5, englishName: "INDONESIA", localName: "Indonesia", japaneseName: "インドネシア", title: "島々の声を織り合わせる、群島の響紡ぎ", image: "イメージ/カントリー/5.インドネシア/キャラクター/1.png" },
  { number: 6, englishName: "PERU", localName: "Perú", japaneseName: "ペルー", title: "明日の実りを預かる、千種の台所番", image: "イメージ/カントリー/6.ペルー/キャラクター/1..png" },
  { number: 7, englishName: "INDIA", localName: "भारत", japaneseName: "インド", title: "百万の流れをつなぎ直す、雨季の結節師", image: "イメージ/カントリー/7.インド/キャラクター/1..png" },
  { number: 8, englishName: "SENEGAL", localName: "Sénégal", japaneseName: "セネガル", title: "風の裂け目を縫い直す、潮路の帆守", image: "イメージ/カントリー/8.セネガル/キャラクター/1..png" },
  { number: 9, englishName: "FINLAND", localName: "Suomi", japaneseName: "フィンランド", title: "白夜の森で眠る音を聴く、玻璃角の森守", image: "イメージ/カントリー/9.フィンランド/キャラクター/1..png" },
  { number: 10, englishName: "MEXICO", localName: "México", japaneseName: "メキシコ", title: "夜明けの色を焼きなおす、彩片の炉守", image: "イメージ/カントリー/10.メキシコ/キャラクター/1..png" }
];

// 共通スキーマ。将来の検索・WORLD MAP・100か国規模の追加に備え、
// 未入力項目をここで補います。表示テンプレート側へ国別設定を書きません。
const characters = characterRecords.map(character => ({
  id: `country-${character.number}`,
  slug: character.slug || character.englishName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  region: character.region || "",
  continent: character.continent || "",
  mapPosition: character.mapPosition || null,
  coordinates: character.coordinates || null,
  classifications: character.classifications || [],
  description: "人物記録は準備中です。",
  personality: "人物記録は準備中",
  likes: "人物記録は準備中",
  dislikes: "人物記録は準備中",
  weakness: "人物記録は準備中",
  ...character,
  theme: {
    accent: "#8b2635",
    navy: "#17283f",
    gold: "#ad8a45",
    ...(character.theme || {})
  },
  details: character.details ? {
    quotes: character.details.quotes || character.details.voice || [],
    roleTitle: character.details.roleTitle || "旅人の役割",
    symbolTitle: character.details.symbolTitle || "旅人の象徴",
    flawTitle: character.details.flawTitle || "愛せる欠点",
    countryNotes: character.details.countryNotes || [],
    relationships: character.details.relationships || [],
    // 旧story形式も読み込み、JAPANの文章を変えず複数話構造へ移行します。
    travelLogs: character.details.travelLogs || (character.details.story ? [character.details.story] : []),
    nextCountry: character.details.nextCountry || (() => {
      const next = characterRecords.find(item => item.number > character.number);
      return next ? { number: next.number, englishName: next.englishName, japaneseName: next.japaneseName, available: Boolean(next.details) } : null;
    })(),
    ...character.details
  } : null
}));

const grid = document.querySelector("#character-grid");
const modal = document.querySelector("#character-modal");
const count = document.querySelector("#character-count");
const collectionRange = document.querySelector("#collection-range");
const recordedCounts = document.querySelectorAll("[data-country-count]");
const nextCountryNumber = document.querySelector("#next-country-number");
const homeContent = document.querySelectorAll("main > .start-section");
const detailView = document.querySelector("#country-detail");
const lightbox = document.querySelector("#image-lightbox");
let lastFocusedCard = null;
let activeCharacter = null;

// 画像が読み込めない場合も、他のカードを壊さず上品な案内へ置き換えます。
function imageMarkup(character, large = false) {
  const alt = `${character.japaneseName}を表現したWORLD COUNTRYキャラクター`;
  return `<img src="${character.image}" alt="${alt}" decoding="async" ${large ? "" : 'loading="lazy"'}>`;
}

function installImageFallback(container) {
  container.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = "IMAGE COMING SOON";
      img.replaceWith(fallback);
    }, { once: true });
  });
}

function renderCharacters() {
  count.textContent = characters.length;
  recordedCounts.forEach(element => { element.textContent = characters.length; });
  if (nextCountryNumber) nextCountryNumber.textContent = String(Math.max(0, ...characters.map(item => item.number)) + 1).padStart(3, "0");
  if (collectionRange) collectionRange.textContent = characters.length
    ? `${String(Math.min(...characters.map(item => item.number))).padStart(2, "0")}—${String(Math.max(...characters.map(item => item.number))).padStart(2, "0")}`
    : "00";
  grid.innerHTML = characters.map((character, index) => `
    <button class="character-card" type="button" data-index="${index}" aria-label="${character.englishName}の詳細を見る">
      <span class="portrait">${imageMarkup(character)}</span>
      <span class="card-copy">
        <span class="country-number">COUNTRY No.${String(character.number).padStart(3, "0")}</span>
        <strong>${character.englishName}</strong>
        <em>${character.localName}</em>
        <small>${character.japaneseName}</small>
      </span>
      <span class="view-label" aria-hidden="true">↗</span>
    </button>`).join("");
  installImageFallback(grid);
}

function openCharacter(index) {
  const character = characters[index];
  if (!character) return;
  if (character.details) {
    window.location.hash = `country=${character.slug}`;
    showCountryDetail(character);
    return;
  }
  lastFocusedCard = document.activeElement;
  document.querySelector("#modal-number").textContent = `COUNTRY No.${String(character.number).padStart(3, "0")}`;
  document.querySelector("#modal-local").textContent = character.localName;
  document.querySelector("#modal-name").textContent = character.englishName;
  document.querySelector("#modal-japanese").textContent = character.japaneseName;
  document.querySelector("#modal-title").textContent = character.title;
  document.querySelector("#modal-description").textContent = character.description;
  document.querySelector("#modal-personality").textContent = character.personality;
  document.querySelector("#modal-likes").textContent = character.likes;
  document.querySelector("#modal-dislikes").textContent = character.dislikes;
  document.querySelector("#modal-weakness").textContent = character.weakness;
  const visual = document.querySelector("#modal-visual");
  visual.innerHTML = imageMarkup(character, true);
  installImageFallback(visual);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function tags(items) {
  return items.map(item => `<li>${item}</li>`).join("");
}

function getCharacterByNumber(number) {
  return characters.find(character => character.number === Number(number));
}

function countryLabel(character) {
  return `${character.japaneseName}への小さな入口`;
}

function renderTravelLog(log) {
  const cast = (log.cast || [...new Set(log.lines.filter(([speaker]) => speaker !== "NARRATION").map(([speaker]) => speaker))]);
  return `<article class="story-page" data-travel-log="${log.number}" data-cast="${cast.join(",")}">
    <div class="story-title"><small>TRAVEL LOG ${String(log.number).padStart(3, "0")}</small><h3>「${log.title}」</h3></div>
    <p>${log.intro}</p>
    ${log.lines.map(([speaker, line]) => speaker === "NARRATION" ? `<p class="narration">${line}</p>` : `<p class="dialogue"><b>${speaker}</b><span>「${line}」</span></p>`).join("")}
    ${log.epilogue ? `<p class="story-epilogue">${log.epilogue}</p>` : ""}
  </article>`;
}

function renderNextCountry(nextCountry) {
  if (!nextCountry) return `<div class="next-country is-coming"><small>05 · NEXT COUNTRY</small><strong>THE JOURNEY CONTINUES</strong></div>`;
  return `<div class="next-country ${nextCountry.available ? "is-ready" : "is-coming"}" data-country-number="${nextCountry.number}" ${nextCountry.available ? 'tabindex="0" role="link"' : ""}><small>05 · NEXT COUNTRY</small><span>COUNTRY No.${String(nextCountry.number).padStart(3, "0")}</span><b>${nextCountry.englishName}</b><em>${nextCountry.japaneseName}</em><strong>${nextCountry.available ? "次の旅人へ →" : "COMING SOON"}</strong></div>`;
}

// 各国共通の個別ページテンプレート。detailsを追加した国だけ、この画面を使います。
function showCountryDetail(character) {
  if (!character?.details) return;
  activeCharacter = character;
  const details = character.details;
  detailView.style.setProperty("--country-accent", character.theme.accent);
  detailView.style.setProperty("--country-navy", character.theme.navy);
  detailView.style.setProperty("--gold", character.theme.gold);
  homeContent.forEach(section => section.hidden = true);
  detailView.innerHTML = `
    <div class="japan-lines" aria-hidden="true"></div>
    <header class="detail-masthead">
      <button type="button" class="detail-back" data-back-list>← 世界の住人たちへ戻る</button>
      <p>THE OFFICIAL CHARACTER ARCHIVE</p>
      <span>COUNTRY No.${String(character.number).padStart(3, "0")}</span>
      <h1>${character.englishName}</h1>
      <strong>${character.localName}</strong>
    </header>
    <section class="detail-hero">
      <button type="button" class="detail-portrait" data-zoom-image aria-label="${character.japaneseName}の画像を拡大する">
        ${imageMarkup(character, true)}<span>画像を大きく見る　↗</span>
      </button>
      <div class="detail-intro">
        <p>${character.englishName} CHARACTER FILE · ${String(character.number).padStart(3, "0")}</p>
        <h2>${character.title}</h2>
        <div class="red-thread" aria-hidden="true"><i></i><i></i><i></i></div>
        <strong>${details.tagline}</strong>
        <p>${details.description}</p>
        <blockquote>${details.quotes.join("<br>")}</blockquote>
      </div>
    </section>
    <section class="archive-section profile-section">
      <header><p>01 · PROFILE</p><h2>旅人の記録</h2></header>
      <div class="profile-archive">
        <article><small>ROLE / 役割</small><h3>${details.roleTitle}</h3><p>${details.role}</p></article>
        <article><small>SYMBOL / 象徴アイテム</small><h3>${details.symbolTitle}</h3><p>${details.symbol}</p></article>
        <article class="wide"><small>PERSONALITY / 性格</small><ul>${tags(details.personality)}</ul><p>${details.personalityNote || ""}</p></article>
        <article><small>LIKES / 好き</small><ul>${tags(details.likes)}</ul></article>
        <article><small>NOT GOOD AT / 苦手</small><ul>${tags(details.dislikes)}</ul></article>
        <article class="wide flaw"><small>LOVABLE FLAW / 愛せる欠点</small><h3>${details.flawTitle}</h3><p>${details.weakness}</p></article>
      </div>
    </section>
    <section class="archive-section why-section">
      <header><p>02 · WHY ${character.englishName}?</p><h2>この旅人と、${character.japaneseName}</h2></header>
      <p>${details.whyCountry}</p>
      <aside class="country-notes" aria-label="${countryLabel(character)}">
        <div><small>${character.englishName} NOTES</small><h3>${countryLabel(character)}</h3></div>
        <ol>${details.countryNotes.map(note => `<li><span>${note.title}</span><p>${note.text}</p></li>`).join("")}</ol>
      </aside>
    </section>
    <section class="archive-section relationships-section">
      <header><p>03 · RELATIONSHIPS</p><h2>旅の仲間との関係</h2></header>
      <div class="relationship-grid">${details.relationships.map(relation => {
        const target = getCharacterByNumber(relation.number);
        const available = Boolean(target?.details);
        const relationImage = relation.image || target?.image;
        return `<article class="relationship-card ${available ? "is-ready" : "is-coming"}" data-country-number="${relation.number}" data-link-available="${available}" ${available ? 'tabindex="0" role="link"' : ""} aria-label="${relation.country}の関係記録${available ? "・個別ページを開く" : "・個別ページは準備中"}"><div class="relationship-portrait">${relationImage ? `<img src="${relationImage}" alt="${relation.japanese}のWORLD COUNTRYキャラクター" loading="lazy">` : ""}</div><span>COUNTRY No.${String(relation.number).padStart(3, "0")}</span><h3>${relation.country}</h3><small>${relation.japanese}</small><p>${relation.text}</p><em>CHARACTER PAGE · ${available ? "OPEN →" : "COMING SOON"}</em></article>`;
      }).join("")}</div>
    </section>
    <section class="archive-section story-section">
      <header><p>04 · TRAVEL LOG</p><h2>旅の小話</h2></header>
      <div class="travel-log-list">${details.travelLogs.map(renderTravelLog).join("")}</div>
    </section>
    <nav class="detail-footer-nav" aria-label="詳細ページナビゲーション"><button type="button" data-back-list>← 世界の住人たちへ戻る</button>${renderNextCountry(details.nextCountry)}</nav>`;
  installImageFallback(detailView);
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
  document.title = `${character.englishName} / ${character.japaneseName}｜WORLD COUNTRY`;
}

function showCharacterList() {
  activeCharacter = null;
  detailView.hidden = true;
  detailView.innerHTML = "";
  homeContent.forEach(section => section.hidden = false);
  history.replaceState(null, "", `${location.pathname}${location.search}#characters`);
  document.title = "WORLD COUNTRY｜公式キャラクター図鑑";
  document.querySelector("#characters").scrollIntoView();
}

function openLightbox(character) {
  const image = document.querySelector("#lightbox-image");
  image.src = character.image;
  image.alt = `${character.japaneseName}を表現したWORLD COUNTRYキャラクター 拡大画像`;
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
  document.querySelector("[data-zoom-image]")?.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedCard) lastFocusedCard.focus();
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".character-card");
  if (card) openCharacter(Number(card.dataset.index));
});
modal.addEventListener("click", event => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  else if (event.key === "Escape" && !modal.hidden) closeModal();
});

detailView.addEventListener("click", event => {
  if (event.target.closest("[data-back-list]")) showCharacterList();
  if (event.target.closest("[data-zoom-image]") && activeCharacter) openLightbox(activeCharacter);
  const relationship = event.target.closest(".relationship-card[data-link-available='true']");
  if (relationship) openCountryByNumber(relationship.dataset.countryNumber);
  const next = event.target.closest(".next-country.is-ready");
  if (next) openCountryByNumber(next.dataset.countryNumber);
});
detailView.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".relationship-card[data-link-available='true']")) {
    event.preventDefault();
    openCountryByNumber(event.target.dataset.countryNumber);
  }
});
lightbox.addEventListener("click", event => {
  if (event.target.closest("[data-close-lightbox]")) closeLightbox();
});

function openCountryByNumber(number) {
  const character = getCharacterByNumber(number);
  if (!character?.details) return;
  window.location.hash = `country=${character.slug}`;
  showCountryDetail(character);
}

function restoreViewFromHash() {
  const match = location.hash.match(/^#country=([a-z0-9-]+)$/i);
  if (!match) return;
  const character = /^\d+$/.test(match[1])
    ? getCharacterByNumber(match[1])
    : characters.find(item => item.slug === match[1].toLowerCase());
  if (character?.details) showCountryDetail(character);
}

renderCharacters();
restoreViewFromHash();
