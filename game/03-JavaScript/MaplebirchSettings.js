// 检测数组含有多元素检测
window.mbContains = function(arr, elements) { 
  return elements.every(e => arr.includes(e));
};

//随机数生成
window.maplebirchRandomNum = function() {
  if (typeof V.Maplebirch.Rng !== 'number') {
    V.Maplebirch.Rng = 0;
  }
  V.Maplebirch.Rng = Math.floor(Math.random() * 100) + 1;
  return V.Maplebirch.Rng;
};

// 读取存档时注入的数据
window.maplebirchReloadVariables = function() {
  
  // 版本检测：const version = (s => +s.split('.').filter((c, i) => i || c !== '0').join(''));
  // 版本更新
  maplebirchVersionUpdate();
  // NPC注入npcNamelist
  setup.NPCNameList.pushUnique("Vivian");
  setup.NPCNameList.pushUnique("Igniharp");
  setup.NPCNameList.pushUnique("Karasveil");
  setup.NPCNameList.pushUnique("Noctyaph");
  // 汉化npc注入
  if (window.modUtils.getMod('ModI18N')) maplebirchAddI18nNames();
  initCNPC();

  const fragment = document.createDocumentFragment();
  fragment.append(wikifier("MaplebirchgroupVariable"));
  fragment.append(wikifier("MaplebirchnumValue"));

  // 果园注入
  maplebirchFruit.Init();
};
// 游戏开始时注入的数据
window.maplebirchStartOnly = function() {

  // NPC注入npcNamelist
  setup.NPCNameList.pushUnique("Vivian");
  setup.NPCNameList.pushUnique("Karasveil");
  setup.NPCNameList.pushUnique("Igniharp");
  setup.NPCNameList.pushUnique("Noctyaph");
  // 汉化npc注入
  if (window.modUtils.getMod('ModI18N')) maplebirchAddI18nNames();

  const fragment = document.createDocumentFragment();
  fragment.append(wikifier("MaplebirchgroupVariable"));
  fragment.append(wikifier("MaplebirchnumValue"));

  // 果园注入
  maplebirchFruit.Init();
};

// i18n名字注入
window.maplebirchAddI18nNames = function() {
  const nameMap = {
    Vivian: "维维安",
    Karasveil: "卡拉斯维尔",
    Igniharp: "伊格尼哈普",
    Noctyaph: "诺克迪亚弗"
};

  Object.entries(nameMap).forEach(([enName, cnName]) => {
  // 初始化目标结构（保持一维数组）
    if (!setup.NPCNameList_cn_name[enName]) {
      setup.NPCNameList_cn_name[enName] = [cnName, cnName]; 
    }
    const targetArray = setup.NPCNameList_cn_name[enName];
    // 结构校验与修复
    if (!Array.isArray(targetArray)) {
      setup.NPCNameList_cn_name[enName] = [cnName, cnName];
    }
    // 安全添加中文名（直接操作一维数组）
    [0, 1].forEach(index => {
      if (typeof targetArray[index] !== 'string') {
        targetArray[index] = cnName; // 强制替换为字符串
      }
      targetArray.pushUnique(cnName); // 如果允许重复可去掉
    });
  });
};

// 秋枫白桦版本变量更迭更新
window.maplebirchVersionUpdate = function() {
  const fragment = document.createDocumentFragment();

  fragment.append(wikifier("MaplebirchVariablesVersionUpdate"));
};

window.maplebirchNPCData = function(statDefaults) {
  // 在数组倒数第二的位置插入"holiness"
  T.importantNpcStats.splice(T.importantNpcStats.length - 2, 0, "holiness");
      
  // 向statDefaults添加holiness属性
  return statDefaults.holiness = {
      name: "信仰",
      value: T.npcData.holiness,
      activeIcon: 'img/ui/sym_holiness.png',
      color: 'white'
  };
};

// 注入原版Effect宏
window.maplebirchEffectInit = function() {
  const mod = V.Maplebirch;
  const output = [];  
  // effect 成就注入
  const Feats = maplebirchFeatsCheck();
  if (Feats.length > 0) {
    output.push(...Feats.map(feat => ["earnFeat", feat]));
  }
  // effect 文本元素注入
  // 果园提醒处理
  const orchard_text = maplebirchFruit.Remind();
  if (orchard_text.length > 0 && !mod.effect.orchard) {
    output.push(...orchard_text.map(item => ["text", "span", item.text, item.colour]));
  }

  return output.length > 0 ? output : false;
};

window.maplebirchEffectDel = function() {
  const mod = V.Maplebirch;
  if (maplebirchFruit.Remind()) mod.effect.orchard = true;
};

// 来自DomRobin
window.maplebirchModHintClicked = function() {
  $.wiki("<<overlayReplace \"maplebirchModHint\">>");
}

window.maplebirchModSearchButtonClicked = function() {
  // 点击搜索前，先清空之前的文本高亮
  maplebirchModClearButtonClicked();
  let value = T.maplebirchModHintTextbox;
  if (!value || value.trim() === "") {
    return;
  }
  value = value.trim();
  let regex = new RegExp(value, 'g');
  let prehtml = document.getElementById("maplebirchModHintContent").innerHTML;
  let newHtml = prehtml.replace(regex, "<span class='gold searchResult'>" + value + '</span>');
  document.getElementById("maplebirchModHintContent").innerHTML = newHtml;
  let el = document.getElementsByClassName('searchResult');
  if (el.length > 0) {
    el[0].scrollIntoView();
  } else {
    let newElement = document.createElement('span');
    newElement.style.color = "gold";
    newElement.id = "noSearchResult";
    let newContent = document.createTextNode("无结果");
    // 添加文本节点 到这个新的 div 元素
    newElement.appendChild(newContent);
    let targetElement = document.getElementById('maplebirchModHintContent');
    insertBefore(newElement, targetElement);
  }
}

// 清空文本高亮
window.maplebirchModClearButtonClicked = function() {
  if (document.getElementById("noSearchResult")) {
    $("#noSearchResult").remove();
  }
  let prehtml = document.getElementById("maplebirchModHintContent").innerHTML;
  let newHtml = prehtml.replace(/(<\/?span.*?>)/gi, '');
  document.getElementById("maplebirchModHintContent").innerHTML = newHtml;
}

// 在目标元素前面插入新元素
function insertBefore(newElement, targetElement) {
  targetElement.parentNode.insertBefore(newElement, targetElement);
}