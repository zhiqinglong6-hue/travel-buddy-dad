const scenes = [
  {
    id: "airport",
    emoji: "✈️",
    name: "机场",
    intro: "值机、问路、过安检，先把最要紧的话说出来。",
    phrases: [
      { english: "Where is check-in?", chinese: "在哪里办理登机？", pronunciation: "歪儿 一兹 切克因", tip: "进机场后找不到值机柜台时，把机票给工作人员看。", audio: "assets/audio/where-is-check-in.wav" },
      { english: "Here is my passport.", chinese: "这是我的护照。", pronunciation: "希尔 一兹 麦 帕斯泼特", tip: "办理值机或过关时，递上护照就说这句。", audio: "assets/audio/here-is-my-passport.wav" },
      { english: "Where is gate ten?", chinese: "10号登机口在哪里？", pronunciation: "歪儿 一兹 给特 ten", tip: "找登机口时使用。数字可以换成机票上的号码。", audio: "assets/audio/where-is-gate-ten.wav" },
      { english: "Is this the right gate?", chinese: "这是正确的登机口吗？", pronunciation: "一兹 迪斯 泽 赖特 给特", tip: "不确定有没有走对时，把登机牌给对方看。", audio: "assets/audio/is-this-the-right-gate.wav" },
      { english: "What time is boarding?", chinese: "几点开始登机？", pronunciation: "沃特 太姆 一兹 波丁", tip: "想确认登机时间时使用。", audio: "assets/audio/what-time-is-boarding.wav" },
      { english: "My luggage is missing.", chinese: "我的行李不见了。", pronunciation: "麦 拉给只 一兹 米星", tip: "到达后找不到托运行李时，对行李服务人员说。", audio: "assets/audio/my-luggage-is-missing.wav" }
    ]
  },
  {
    id: "hotel",
    emoji: "🏨",
    name: "酒店",
    intro: "入住、拿房卡、问早餐，简单说也完全够用。",
    phrases: [
      { english: "I have a reservation.", chinese: "我有预订。", pronunciation: "爱 哈夫 呃 瑞色微申", tip: "到酒店前台办理入住时先说这句，再递护照。", audio: "assets/audio/i-have-a-reservation.wav" },
      { english: "I want to check in.", chinese: "我想办理入住。", pronunciation: "爱 旺特 图 切克 因", tip: "到前台说明来意时使用。", audio: "assets/audio/i-want-to-check-in.wav" },
      { english: "What is the Wi-Fi password?", chinese: "Wi-Fi 密码是什么？", pronunciation: "沃特 一兹 泽 歪发 密码", tip: "想连酒店网络时使用，也可以把手机页面给前台看。", audio: "assets/audio/what-is-the-wi-fi-password.wav" },
      { english: "What time is breakfast?", chinese: "早餐是几点？", pronunciation: "沃特 太姆 一兹 布瑞克发斯特", tip: "入住时问清早餐时间。", audio: "assets/audio/what-time-is-breakfast.wav" },
      { english: "Please clean my room.", chinese: "请打扫我的房间。", pronunciation: "普利兹 克林 麦 入姆", tip: "需要客房清洁时，对前台或服务员说。", audio: "assets/audio/please-clean-my-room.wav" },
      { english: "The key does not work.", chinese: "房卡打不开门。", pronunciation: "泽 ki 达兹 诺特 沃克", tip: "房卡失效时，把卡递给前台一起说。", audio: "assets/audio/the-key-does-not-work.wav" }
    ]
  },
  {
    id: "restaurant",
    emoji: "🍜",
    name: "餐厅",
    intro: "点餐不用说长句，指着菜单配合这些话最好用。",
    phrases: [
      { english: "A table for one, please.", chinese: "请给我一张单人桌。", pronunciation: "呃 忒波 佛 万 普利兹", tip: "一个人去餐厅时说。两个人把 one 换成 two。", audio: "assets/audio/a-table-for-one-please.wav" },
      { english: "This one, please.", chinese: "请给我这个。", pronunciation: "迪斯 万 普利兹", tip: "指着菜单或图片点餐，最简单也最实用。", audio: "assets/audio/this-one-please.wav" },
      { english: "No spicy, please.", chinese: "请不要辣。", pronunciation: "诺 斯派西 普利兹", tip: "不能吃辣时，点菜后补上这句。", audio: "assets/audio/no-spicy-please.wav" },
      { english: "Water, please.", chinese: "请给我水。", pronunciation: "沃特 普利兹", tip: "需要水时使用。", audio: "assets/audio/water-please.wav" },
      { english: "It is delicious.", chinese: "很好吃。", pronunciation: "一特 一兹 迪利舍斯", tip: "觉得好吃时告诉服务员，对方会很开心。", audio: "assets/audio/it-is-delicious.wav" },
      { english: "The bill, please.", chinese: "请结账。", pronunciation: "泽 比欧 普利兹", tip: "吃完要买单时说，也可以做一个写字的手势。", audio: "assets/audio/the-bill-please.wav" }
    ]
  },
  {
    id: "taxi",
    emoji: "🚕",
    name: "打车",
    intro: "把地址给司机看，再说一句，省心又清楚。",
    phrases: [
      { english: "Please take me here.", chinese: "请带我去这里。", pronunciation: "普利兹 忒克 米 希尔", tip: "把手机上的地址指给司机看，同时说这句。", audio: "assets/audio/please-take-me-here.wav" },
      { english: "How much is it?", chinese: "多少钱？", pronunciation: "豪 马吃 一兹 一特", tip: "上车前问价格，或到达后问车费。", audio: "assets/audio/how-much-is-it.wav" },
      { english: "Please use the meter.", chinese: "请打表。", pronunciation: "普利兹 优兹 泽 米特", tip: "希望司机按计价器收费时说。", audio: "assets/audio/please-use-the-meter.wav" },
      { english: "Please stop here.", chinese: "请在这里停车。", pronunciation: "普利兹 斯道普 希尔", tip: "快到目的地，想让司机在当前位置停时说。", audio: "assets/audio/please-stop-here.wav" },
      { english: "Is it far?", chinese: "远吗？", pronunciation: "一兹 一特 发", tip: "想知道路程远不远时使用。", audio: "assets/audio/is-it-far.wav" },
      { english: "Please drive slowly.", chinese: "请开慢一点。", pronunciation: "普利兹 拽夫 斯楼里", tip: "觉得车开得太快、不安心时说。", audio: "assets/audio/please-drive-slowly.wav" }
    ]
  },
  {
    id: "toilet",
    emoji: "🚻",
    name: "找厕所",
    intro: "着急的时候只说第一句就够了，对方通常会直接指路。",
    phrases: [
      { english: "Where is the toilet?", chinese: "厕所在哪里？", pronunciation: "歪儿 一兹 泽 托伊勒特", tip: "最常用的一句。也可以同时指一下厕所图标。", audio: "assets/audio/where-is-the-toilet.wav" },
      { english: "Is there a toilet nearby?", chinese: "附近有厕所吗？", pronunciation: "一兹 泽儿 呃 托伊勒特 尼尔拜", tip: "在街上或商店里找厕所时使用。", audio: "assets/audio/is-there-a-toilet-nearby.wav" },
      { english: "Can I use the toilet?", chinese: "我可以用一下厕所吗？", pronunciation: "看 爱 优兹 泽 托伊勒特", tip: "在餐厅或店里想借用厕所时说。", audio: "assets/audio/can-i-use-the-toilet.wav" },
      { english: "Is it free?", chinese: "是免费的吗？", pronunciation: "一兹 一特 弗瑞", tip: "有些地方厕所要收费，不确定时先问。", audio: "assets/audio/is-it-free.wav" },
      { english: "Do I need a coin?", chinese: "需要硬币吗？", pronunciation: "度 爱 尼德 呃 靠因", tip: "看到收费门、不知道怎么进时问工作人员。", audio: "assets/audio/do-i-need-a-coin.wav" },
      { english: "Thank you.", chinese: "谢谢。", pronunciation: "三克 优", tip: "别人给你指路后，笑着说一声就好。", audio: "assets/audio/thank-you.wav" }
    ]
  },
  {
    id: "help",
    emoji: "🆘",
    name: "求助",
    intro: "遇到困难先别慌，短短一句就能让别人知道你需要帮助。",
    phrases: [
      { english: "Can you help me?", chinese: "你能帮帮我吗？", pronunciation: "看 优 海欧普 米", tip: "不知道怎么办时先说这句，再把手机或票给对方看。", audio: "assets/audio/can-you-help-me.wav" },
      { english: "I do not speak English.", chinese: "我不会说英语。", pronunciation: "爱 度 诺特 斯必克 英格利许", tip: "听不懂时先说明，对方通常会换简单说法。", audio: "assets/audio/i-do-not-speak-english.wav" },
      { english: "Please speak slowly.", chinese: "请说慢一点。", pronunciation: "普利兹 斯必克 斯楼里", tip: "对方说得太快时使用。", audio: "assets/audio/please-speak-slowly.wav" },
      { english: "Please write it down.", chinese: "请写下来。", pronunciation: "普利兹 赖特 一特 当", tip: "听不清数字、地址或时间时，请对方写给你看。", audio: "assets/audio/please-write-it-down.wav" },
      { english: "I am lost.", chinese: "我迷路了。", pronunciation: "爱 艾姆 洛斯特", tip: "找不到方向时说，再把目的地给对方看。", audio: "assets/audio/i-am-lost.wav" },
      { english: "Call the police, please.", chinese: "请帮我报警。", pronunciation: "靠欧 泽 泼利斯 普利兹", tip: "遇到危险、被偷或需要警察帮助时说。", audio: "assets/audio/call-the-police-please.wav" }
    ]
  },
  {
    id: "shopping",
    emoji: "🛍️",
    name: "购物",
    intro: "看中就指一指，价格、尺码和付款用短句就能问清楚。",
    phrases: [
      { english: "How much is this?", chinese: "这个多少钱？", pronunciation: "豪 马吃 一兹 迪斯", tip: "指着想买的东西问价格。", audio: "assets/audio/how-much-is-this.wav" },
      { english: "It is too expensive.", chinese: "这个太贵了。", pronunciation: "一特 一兹 图 以克斯本西夫", tip: "觉得价格太高时说，不用不好意思。", audio: "assets/audio/it-is-too-expensive.wav" },
      { english: "Do you have a larger size?", chinese: "有大一号的吗？", pronunciation: "度 优 哈夫 呃 拉这 赛兹", tip: "衣服或鞋子偏小时，指着商品问店员。", audio: "assets/audio/do-you-have-a-larger-size.wav" },
      { english: "Do you have a smaller size?", chinese: "有小一号的吗？", pronunciation: "度 优 哈夫 呃 斯莫勒 赛兹", tip: "衣服或鞋子偏大时使用。", audio: "assets/audio/do-you-have-a-smaller-size.wav" },
      { english: "Can I try this on?", chinese: "我可以试穿吗？", pronunciation: "看 爱 拽 迪斯 昂", tip: "想试衣服、鞋子或帽子时使用。", audio: "assets/audio/can-i-try-this-on.wav" },
      { english: "I will take this.", chinese: "我要这个。", pronunciation: "爱 威欧 忒克 迪斯", tip: "决定购买时，拿着商品说这句。", audio: "assets/audio/i-will-take-this.wav" },
      { english: "Can I pay by card?", chinese: "可以刷卡吗？", pronunciation: "看 爱 配 拜 卡德", tip: "付款前想确认能不能刷卡时问。", audio: "assets/audio/can-i-pay-by-card.wav" }
    ]
  },
  {
    id: "pharmacy",
    emoji: "💊",
    name: "买药",
    intro: "说清哪里不舒服，也可以把药盒或手机上的图片给药剂师看。",
    phrases: [
      { english: "Where is a pharmacy?", chinese: "药店在哪里？", pronunciation: "歪儿 一兹 呃 发马西", tip: "找不到药店时问路。", audio: "assets/audio/where-is-a-pharmacy.wav" },
      { english: "I have a headache.", chinese: "我头疼。", pronunciation: "爱 哈夫 呃 海带克", tip: "头疼时告诉药剂师。", audio: "assets/audio/i-have-a-headache.wav" },
      { english: "I have a cold.", chinese: "我感冒了。", pronunciation: "爱 哈夫 呃 靠欧德", tip: "有普通感冒症状时使用。", audio: "assets/audio/i-have-a-cold.wav" },
      { english: "I have a stomachache.", chinese: "我肚子疼。", pronunciation: "爱 哈夫 呃 斯达马克", tip: "肚子不舒服时告诉药剂师。", audio: "assets/audio/i-have-a-stomachache.wav" },
      { english: "Do you have this medicine?", chinese: "你们有这种药吗？", pronunciation: "度 优 哈夫 迪斯 麦迪森", tip: "把药盒、药名或照片给店员看。", audio: "assets/audio/do-you-have-this-medicine.wav" },
      { english: "How many times a day?", chinese: "一天吃几次？", pronunciation: "豪 麦尼 太姆斯 呃 得", tip: "买到药后确认每天用几次；也请看清药盒说明。", audio: "assets/audio/how-many-times-a-day.wav" }
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
const testSpeechButton = document.querySelector("#testSpeechButton");
const testSpeechError = document.querySelector("#testSpeechError");

const FAVORITES_KEY = "travelBuddyFavorites";
const AUDIO_ERROR_MESSAGE = "这台手机暂时无法播放音频，请检查媒体音量，或点击英文大字给别人看。";
const TEST_AUDIO_PATH = "assets/audio/hello-this-is-travel-buddy.wav";

let activeAudioButton = null;
let currentAudio = null;
let audioPlaybackId = 0;
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

  stopAudio();
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
    const { english, chinese, pronunciation, tip, audio } = item.phrase;
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
            ${audio ? `
              <button class="speak-button" type="button" data-action="audio" data-card-index="${index}" data-label="🔊 播放">
                🔊 播放
              </button>
            ` : '<span class="no-audio">暂无音频</span>'}
            <button class="show-button" type="button" data-action="show" data-card-index="${index}">📱 给别人看</button>
            <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-card-index="${index}">
              ${isFavorite ? "❤️ 已收藏" : "❤️ 收藏"}
            </button>
          </div>
        </div>
        <p class="usage-tip">💡 ${tip}${currentSceneId === "favorites" ? ` · 来自“${item.sceneName}”` : ""}</p>
        <p class="speech-error" role="alert" hidden></p>
      </article>
    `;
  }).join("");
}

function goHome() {
  stopAudio();
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

function resetAudioButton() {
  if (!activeAudioButton) return;
  activeAudioButton.classList.remove("is-speaking");
  activeAudioButton.textContent = activeAudioButton.dataset.label;
  activeAudioButton = null;
}

function stopAudio() {
  audioPlaybackId += 1;
  if (currentAudio) {
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  resetAudioButton();
}

function showAudioError(element, message) {
  if (element) {
    element.textContent = message;
    element.hidden = false;
  } else {
    showStatus(message);
  }
}

function clearAudioError(element) {
  if (!element) return;
  element.textContent = "";
  element.hidden = true;
}

function playAudioFile(audioPath, button, errorElement) {
  if (!audioPath) {
    showAudioError(errorElement, "暂无音频，请直接查看英文和中文读法。");
    return;
  }

  stopAudio();
  const playbackId = audioPlaybackId;
  clearAudioError(errorElement);

  const audio = new Audio(audioPath);
  let failed = false;
  currentAudio = audio;
  activeAudioButton = button;
  button.classList.add("is-speaking");
  button.textContent = "播放中…";

  const handleFailure = () => {
    if (failed || playbackId !== audioPlaybackId) return;
    failed = true;
    currentAudio = null;
    resetAudioButton();
    showAudioError(errorElement, AUDIO_ERROR_MESSAGE);
  };

  audio.preload = "auto";
  audio.onended = () => {
    if (playbackId !== audioPlaybackId) return;
    currentAudio = null;
    resetAudioButton();
  };
  audio.onerror = handleFailure;

  try {
    const playResult = audio.play();
    if (playResult?.catch) playResult.catch(handleFailure);
  } catch (error) {
    handleFailure();
  }
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
  stopAudio();
  showEnglish.textContent = item.phrase.english;
  showChinese.textContent = item.phrase.chinese;
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

  if (button.dataset.action === "audio") {
    const errorElement = button.closest(".phrase-card")?.querySelector(".speech-error");
    playAudioFile(item.phrase.audio, button, errorElement);
  } else if (button.dataset.action === "favorite") {
    toggleFavorite(item);
  } else if (button.dataset.action === "show") {
    openShowMode(item);
  }
});

backButton.addEventListener("click", goHome);
testSpeechButton.addEventListener("click", () => {
  playAudioFile(TEST_AUDIO_PATH, testSpeechButton, testSpeechError);
});
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

window.addEventListener("beforeunload", stopAudio);

renderSceneButtons();
