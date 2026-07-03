const scenes = [
  {
    id: "airport",
    emoji: "✈️",
    name: "机场",
    intro: "值机、问路、过安检，先把最要紧的话说出来。",
    phrases: [
      ["Where is check-in?", "在哪里办理登机？", "歪儿 一兹 切克因", "进机场后找不到值机柜台时，把机票给工作人员看。"],
      ["Here is my passport.", "这是我的护照。", "希尔 一兹 麦 帕斯泼特", "办理值机或过关时，递上护照就说这句。"],
      ["Where is gate ten?", "10号登机口在哪里？", "歪儿 一兹 给特 ten", "找登机口时使用。数字可以换成机票上的号码。"],
      ["Is this the right gate?", "这是正确的登机口吗？", "一兹 迪斯 泽 赖特 给特", "不确定有没有走对时，把登机牌给对方看。"],
      ["What time is boarding?", "几点开始登机？", "沃特 太姆 一兹 波丁", "想确认登机时间时使用。"],
      ["My luggage is missing.", "我的行李不见了。", "麦 拉给只 一兹 米星", "到达后找不到托运行李时，对行李服务人员说。"]
    ]
  },
  {
    id: "hotel",
    emoji: "🏨",
    name: "酒店",
    intro: "入住、拿房卡、问早餐，简单说也完全够用。",
    phrases: [
      ["I have a reservation.", "我有预订。", "爱 哈夫 呃 瑞色微申", "到酒店前台办理入住时先说这句，再递护照。"],
      ["I want to check in.", "我想办理入住。", "爱 旺特 图 切克 因", "到前台说明来意时使用。"],
      ["What is the Wi-Fi password?", "Wi-Fi 密码是什么？", "沃特 一兹 泽 歪发 密码", "想连酒店网络时使用，也可以把手机页面给前台看。"],
      ["What time is breakfast?", "早餐是几点？", "沃特 太姆 一兹 布瑞克发斯特", "入住时问清早餐时间。"],
      ["Please clean my room.", "请打扫我的房间。", "普利兹 克林 麦 入姆", "需要客房清洁时，对前台或服务员说。"],
      ["The key does not work.", "房卡打不开门。", "泽 ki 达兹 诺特 沃克", "房卡失效时，把卡递给前台一起说。"]
    ]
  },
  {
    id: "restaurant",
    emoji: "🍜",
    name: "餐厅",
    intro: "点餐不用说长句，指着菜单配合这些话最好用。",
    phrases: [
      ["A table for one, please.", "请给我一张单人桌。", "呃 忒波 佛 万 普利兹", "一个人去餐厅时说。两个人把 one 换成 two。"],
      ["This one, please.", "请给我这个。", "迪斯 万 普利兹", "指着菜单或图片点餐，最简单也最实用。"],
      ["No spicy, please.", "请不要辣。", "诺 斯派西 普利兹", "不能吃辣时，点菜后补上这句。"],
      ["Water, please.", "请给我水。", "沃特 普利兹", "需要水时使用。"],
      ["It is delicious.", "很好吃。", "一特 一兹 迪利舍斯", "觉得好吃时告诉服务员，对方会很开心。"],
      ["The bill, please.", "请结账。", "泽 比欧 普利兹", "吃完要买单时说，也可以做一个写字的手势。"]
    ]
  },
  {
    id: "taxi",
    emoji: "🚕",
    name: "打车",
    intro: "把地址给司机看，再说一句，省心又清楚。",
    phrases: [
      ["Please take me here.", "请带我去这里。", "普利兹 忒克 米 希尔", "把手机上的地址指给司机看，同时说这句。"],
      ["How much is it?", "多少钱？", "豪 马吃 一兹 一特", "上车前问价格，或到达后问车费。"],
      ["Please use the meter.", "请打表。", "普利兹 优兹 泽 米特", "希望司机按计价器收费时说。"],
      ["Please stop here.", "请在这里停车。", "普利兹 斯道普 希尔", "快到目的地，想让司机在当前位置停时说。"],
      ["Is it far?", "远吗？", "一兹 一特 发", "想知道路程远不远时使用。"],
      ["Please drive slowly.", "请开慢一点。", "普利兹 拽夫 斯楼里", "觉得车开得太快、不安心时说。"]
    ]
  },
  {
    id: "toilet",
    emoji: "🚻",
    name: "找厕所",
    intro: "着急的时候只说第一句就够了，对方通常会直接指路。",
    phrases: [
      ["Where is the toilet?", "厕所在哪里？", "歪儿 一兹 泽 托伊勒特", "最常用的一句。也可以同时指一下厕所图标。"],
      ["Is there a toilet nearby?", "附近有厕所吗？", "一兹 泽儿 呃 托伊勒特 尼尔拜", "在街上或商店里找厕所时使用。"],
      ["Can I use the toilet?", "我可以用一下厕所吗？", "看 爱 优兹 泽 托伊勒特", "在餐厅或店里想借用厕所时说。"],
      ["Is it free?", "是免费的吗？", "一兹 一特 弗瑞", "有些地方厕所要收费，不确定时先问。"],
      ["Do I need a coin?", "需要硬币吗？", "度 爱 尼德 呃 靠因", "看到收费门、不知道怎么进时问工作人员。"],
      ["Thank you.", "谢谢。", "三克 优", "别人给你指路后，笑着说一声就好。"]
    ]
  },
  {
    id: "help",
    emoji: "🆘",
    name: "求助",
    intro: "遇到困难先别慌，短短一句就能让别人知道你需要帮助。",
    phrases: [
      ["Can you help me?", "你能帮帮我吗？", "看 优 海欧普 米", "不知道怎么办时先说这句，再把手机或票给对方看。"],
      ["I do not speak English.", "我不会说英语。", "爱 度 诺特 斯必克 英格利许", "听不懂时先说明，对方通常会换简单说法。"],
      ["Please speak slowly.", "请说慢一点。", "普利兹 斯必克 斯楼里", "对方说得太快时使用。"],
      ["Please write it down.", "请写下来。", "普利兹 赖特 一特 当", "听不清数字、地址或时间时，请对方写给你看。"],
      ["I am lost.", "我迷路了。", "爱 艾姆 洛斯特", "找不到方向时说，再把目的地给对方看。"],
      ["Call the police, please.", "请帮我报警。", "靠欧 泽 泼利斯 普利兹", "遇到危险、被偷或需要警察帮助时说。"]
    ]
  },
  {
    id: "shopping",
    emoji: "🛍️",
    name: "购物",
    intro: "看中就指一指，价格、尺码和付款用短句就能问清楚。",
    phrases: [
      ["How much is this?", "这个多少钱？", "豪 马吃 一兹 迪斯", "指着想买的东西问价格。"],
      ["It is too expensive.", "这个太贵了。", "一特 一兹 图 以克斯本西夫", "觉得价格太高时说，不用不好意思。"],
      ["Do you have a larger size?", "有大一号的吗？", "度 优 哈夫 呃 拉这 赛兹", "衣服或鞋子偏小时，指着商品问店员。"],
      ["Do you have a smaller size?", "有小一号的吗？", "度 优 哈夫 呃 斯莫勒 赛兹", "衣服或鞋子偏大时使用。"],
      ["Can I try this on?", "我可以试穿吗？", "看 爱 拽 迪斯 昂", "想试衣服、鞋子或帽子时使用。"],
      ["I will take this.", "我要这个。", "爱 威欧 忒克 迪斯", "决定购买时，拿着商品说这句。"],
      ["Can I pay by card?", "可以刷卡吗？", "看 爱 配 拜 卡德", "付款前想确认能不能刷卡时问。"]
    ]
  },
  {
    id: "pharmacy",
    emoji: "💊",
    name: "买药",
    intro: "说清哪里不舒服，也可以把药盒或手机上的图片给药剂师看。",
    phrases: [
      ["Where is a pharmacy?", "药店在哪里？", "歪儿 一兹 呃 发马西", "找不到药店时问路。"],
      ["I have a headache.", "我头疼。", "爱 哈夫 呃 海带克", "头疼时告诉药剂师。"],
      ["I have a cold.", "我感冒了。", "爱 哈夫 呃 靠欧德", "有普通感冒症状时使用。"],
      ["I have a stomachache.", "我肚子疼。", "爱 哈夫 呃 斯达马克", "肚子不舒服时告诉药剂师。"],
      ["Do you have this medicine?", "你们有这种药吗？", "度 优 哈夫 迪斯 麦迪森", "把药盒、药名或照片给店员看。"],
      ["How many times a day?", "一天吃几次？", "豪 麦尼 太姆斯 呃 得", "买到药后确认每天用几次；也请看清药盒说明。"]
    ]
  }
];

const homeView = document.querySelector("#homeView");
const sceneView = document.querySelector("#sceneView");
const sceneGrid = document.querySelector("#sceneGrid");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneIntro = document.querySelector("#sceneIntro");
const phraseList = document.querySelector("#phraseList");
const backButton = document.querySelector("#backButton");
const speechStatus = document.querySelector("#speechStatus");
const showMode = document.querySelector("#showMode");
const showEnglish = document.querySelector("#showEnglish");
const showChinese = document.querySelector("#showChinese");

const FAVORITES_KEY = "travelBuddyFavorites";

let activeSpeakButton = null;
let statusTimer = null;
let currentSceneId = null;
let currentPhrases = [];
let favorites = loadFavorites();

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    return new Set(Array.isArray(saved) ? saved : []);
  } catch (error) {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    return true;
  } catch (error) {
    showStatus("当前浏览器无法保存收藏，但本次打开期间仍然有效。 ");
    return false;
  }
}

function allPhraseItems() {
  return scenes.flatMap((scene) => scene.phrases.map((phrase, index) => ({
    key: `${scene.id}:${index}`,
    phrase,
    sceneName: scene.name
  })));
}

function renderSceneButtons() {
  const favoriteButton = `
    <button class="scene-button favorite-entry" type="button" data-scene="favorites">
      <span class="scene-emoji" aria-hidden="true">❤️</span>
      <span class="scene-label">
        <span>我的常用句</span>
        <span class="scene-count">已收藏 ${favorites.size} 句</span>
      </span>
    </button>
  `;
  const sceneButtons = scenes.map((scene) => `
    <button class="scene-button" type="button" data-scene="${scene.id}">
      <span class="scene-emoji" aria-hidden="true">${scene.emoji}</span>
      <span>${scene.name}</span>
    </button>
  `).join("");
  sceneGrid.innerHTML = favoriteButton + sceneButtons;
}

function openScene(sceneId) {
  const isFavorites = sceneId === "favorites";
  const scene = scenes.find((item) => item.id === sceneId);
  if (!isFavorites && !scene) return;

  stopSpeech();
  currentSceneId = sceneId;
  if (isFavorites) {
    sceneTitle.textContent = "❤️ 我的常用句";
    sceneIntro.textContent = "把最常用的话放在一起，需要时马上就能找到。";
    currentPhrases = allPhraseItems().filter((item) => favorites.has(item.key));
  } else {
    sceneTitle.textContent = `${scene.emoji} ${scene.name}`;
    sceneIntro.textContent = scene.intro;
    currentPhrases = scene.phrases.map((phrase, index) => ({
      key: `${scene.id}:${index}`,
      phrase,
      sceneName: scene.name
    }));
  }

  renderPhraseCards();
  homeView.hidden = true;
  sceneView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPhraseCards() {
  if (currentPhrases.length === 0) {
    phraseList.innerHTML = `
      <div class="empty-favorites">
        还没有收藏句子。<br>回到场景里，点击“❤️ 收藏”就会出现在这里。
      </div>
    `;
    return;
  }

  phraseList.innerHTML = currentPhrases.map((item, index) => {
    const [english, chinese, pronunciation, tip] = item.phrase;
    const words = english.split(/\s+/);
    const wordPractice = words.map((word, wordIndex) => `
      <span>${word}</span>${wordIndex < words.length - 1 ? '<span class="separator" aria-hidden="true">/</span>' : ''}
    `).join("");
    const isFavorite = favorites.has(item.key);
    return `
      <article class="phrase-card">
        <div class="english-row">
          <div>
            <h3 class="english">${english}</h3>
            <div class="word-practice" aria-label="分词跟读：${words.join("，")}">${wordPractice}</div>
            <p class="meaning">${chinese}</p>
            <p class="pronunciation">读法：${pronunciation}</p>
          </div>
          <div class="card-actions" aria-label="句子操作">
            <button class="speak-button" type="button" data-action="speak" data-card-index="${index}" data-rate="0.8" data-label="🔊 正常播放">
              🔊 正常播放
            </button>
            <button class="speak-button slow-button" type="button" data-action="speak" data-card-index="${index}" data-rate="0.4" data-label="🐢 慢速播放">
              🐢 慢速播放
            </button>
            <button class="show-button" type="button" data-action="show" data-card-index="${index}">📱 给别人看</button>
            <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-card-index="${index}">
              ${isFavorite ? "❤️ 已收藏" : "❤️ 收藏"}
            </button>
          </div>
        </div>
        <p class="usage-tip">💡 ${tip}${currentSceneId === "favorites" ? ` · 来自“${item.sceneName}”` : ""}</p>
      </article>
    `;
  }).join("");
}

function goHome() {
  stopSpeech();
  sceneView.hidden = true;
  homeView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector(".scene-button")?.focus();
}

function showStatus(message) {
  window.clearTimeout(statusTimer);
  speechStatus.textContent = message;
  speechStatus.classList.add("show");
  statusTimer = window.setTimeout(() => speechStatus.classList.remove("show"), 2600);
}

function resetSpeakButton() {
  if (!activeSpeakButton) return;
  activeSpeakButton.classList.remove("is-speaking");
  activeSpeakButton.textContent = activeSpeakButton.dataset.label;
  activeSpeakButton = null;
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  resetSpeakButton();
}

function speakEnglish(text, button, rate) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showStatus("这个浏览器暂不支持发音，请换用 Chrome、Edge 或 Safari。 ");
    return;
  }

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;

  const englishVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("en"));
  if (englishVoice) utterance.voice = englishVoice;

  activeSpeakButton = button;
  button.classList.add("is-speaking");
  button.textContent = "⏹ 正在播放";
  utterance.onend = resetSpeakButton;
  utterance.onerror = () => {
    resetSpeakButton();
    showStatus("发音没有成功，请再点一次试试。 ");
  };

  window.speechSynthesis.speak(utterance);
}

function toggleFavorite(item) {
  if (favorites.has(item.key)) {
    favorites.delete(item.key);
  } else {
    favorites.add(item.key);
  }

  saveFavorites();
  renderSceneButtons();

  if (currentSceneId === "favorites") {
    currentPhrases = allPhraseItems().filter((phraseItem) => favorites.has(phraseItem.key));
  }
  renderPhraseCards();
}

function openShowMode(item) {
  stopSpeech();
  showEnglish.textContent = item.phrase[0];
  showChinese.textContent = item.phrase[1];
  showMode.hidden = false;
  document.body.classList.add("showing-phrase");

  if (showMode.requestFullscreen) {
    const fullscreenRequest = showMode.requestFullscreen();
    if (fullscreenRequest?.catch) fullscreenRequest.catch(() => {});
  }
}

function closeShowMode() {
  showMode.hidden = true;
  document.body.classList.remove("showing-phrase");

  if (document.fullscreenElement && document.exitFullscreen) {
    const fullscreenExit = document.exitFullscreen();
    if (fullscreenExit?.catch) fullscreenExit.catch(() => {});
  }
}

sceneGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scene]");
  if (button) openScene(button.dataset.scene);
});

phraseList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const item = currentPhrases[Number(button.dataset.cardIndex)];
  if (!item) return;

  if (button.dataset.action === "speak") {
    speakEnglish(item.phrase[0], button, Number(button.dataset.rate));
  } else if (button.dataset.action === "favorite") {
    toggleFavorite(item);
  } else if (button.dataset.action === "show") {
    openShowMode(item);
  }
});

backButton.addEventListener("click", goHome);
showMode.addEventListener("click", closeShowMode);
showMode.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
    event.preventDefault();
    closeShowMode();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && !showMode.hidden) closeShowMode();
});

window.addEventListener("beforeunload", stopSpeech);

renderSceneButtons();
