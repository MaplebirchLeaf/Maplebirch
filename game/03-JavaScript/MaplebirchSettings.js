// 检测数组含有多元素检测
setup.mbContains = (arr, elements) => elements.every(e => arr.includes(e));
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
  // NPC注入npcNamelist
  setup.NPCNameList.pushUnique("Vivian");
  setup.NPCNameList_cn_name[0].pushUnique("维安");
	setup.NPCNameList_cn_name[1].pushUnique("维安");
  setup.NPCNameList.pushUnique("Karasveil");
  setup.NPCNameList_cn_name[0].pushUnique("卡拉斯维尔");
	setup.NPCNameList_cn_name[1].pushUnique("卡拉斯维尔");
  setup.NPCNameList.pushUnique("Igniharp");
  setup.NPCNameList_cn_name[0].pushUnique("伊格尼哈普");
	setup.NPCNameList_cn_name[1].pushUnique("伊格尼哈普");
  setup.NPCNameList.pushUnique("Noctyaph");
  setup.NPCNameList_cn_name[0].pushUnique("诺克迪亚弗");
	setup.NPCNameList_cn_name[1].pushUnique("诺克迪亚弗");
  initCNPC();

  const fragment = document.createDocumentFragment();
  fragment.append(wikifier("MaplebirchgroupVariable"));
  fragment.append(wikifier("MaplebirchnumValue"));
};
// 游戏开始时注入的数据
window.maplebirchStartOnly = function() {
  // NPC注入npcNamelist
  setup.NPCNameList.pushUnique("Vivian");
  setup.NPCNameList_cn_name[0].pushUnique("维安");
	setup.NPCNameList_cn_name[1].pushUnique("维安");
  setup.NPCNameList.pushUnique("Karasveil");
  setup.NPCNameList_cn_name[0].pushUnique("卡拉斯维尔");
	setup.NPCNameList_cn_name[1].pushUnique("卡拉斯维尔");
  setup.NPCNameList.pushUnique("Igniharp");
  setup.NPCNameList_cn_name[0].pushUnique("伊格尼哈普");
	setup.NPCNameList_cn_name[1].pushUnique("伊格尼哈普");
  setup.NPCNameList.pushUnique("Noctyaph");
  setup.NPCNameList_cn_name[0].pushUnique("诺克迪亚弗");
	setup.NPCNameList_cn_name[1].pushUnique("诺克迪亚弗");

  const fragment = document.createDocumentFragment();
  fragment.append(wikifier("MaplebirchgroupVariable"));
  fragment.append(wikifier("MaplebirchnumValue"));
};

window.fearcoeff = function() {
  // Sanity Modifiers
  if (V.Maplebirch.Sanity >= 1000) {
    T.sanityMod = 0.0;
  } else if (V.Maplebirch.Sanity >= 700) {
    T.sanityMod = 0.2;
  } else if (V.Maplebirch.Sanity >= 450) {
    T.sanityMod = 0.4;
  } else if (V.Maplebirch.Sanity >= 250) {
    T.sanityMod = 0.6;
  } else if (V.Maplebirch.Sanity >= 100) {
    T.sanityMod = 0.8;
  } else if (V.Maplebirch.Sanity >= 50) {
    T.sanityMod = 1.0;
  } else if (V.Maplebirch.Sanity >= 1) {
    T.sanityMod = 1.2;
  } else {
    T.sanityMod = 1.5;
  }

   // Willpower Modifiers
  let wpStages;
  wpStages = V.willpowermax * [6/7, 5/7, 4/7, 3/7, 2/7, 1/7];
  if (V.willpower >= wpStages[0]) {
    T.willpowerMod = 0.0;
  } else if (V.willpower >= wpStages[1]) {
    T.willpowerMod = 0.2;
  } else if (V.willpower >= wpStages[2]) {
    T.willpowerMod = 0.4;
  } else if (V.willpower >= wpStages[3]) {
    T.willpowerMod = 0.6;
  } else if (V.willpower >= wpStages[4]) {
    T.willpowerMod = 0.8;
  } else if (V.willpower >= wpStages[5]) {
    T.willpowerMod = 1.0;
  } else {
    T.willpowerMod = 1.2;
  }

  // Control Modifiers
  if (V.control >= V.controlmax) {
    T.controlMod = 0.0;
  } else if (V.control >= V.controlmax * 0.8) {
    T.controlMod = 0.2;
  } else if (V.control >= V.controlmax * 0.6) {
    T.controlMod = 0.4;
  } else if (V.control >= V.controlmax * 0.4) {
    T.controlMod = 0.6;
  } else if (V.control >= V.controlmax * 0.2) {
    T.controlMod = 0.8;
  } else if (V.control >= 1) {
    T.controlMod = 1.0;
  } else {
    T.controlMod = 1.2;
  }

  // Stress Modifiers
  if (V.stress >= V.stressmax) {
    T.stressMod = 1.5;
  } else if (V.stress >= V.stressmax * 0.8) {
    T.stressMod = 1.3;
  } else if (V.stress >= V.stressmax * 0.6) {
    T.stressMod = 1.1;
  } else if (V.stress >= V.stressmax * 0.4) {
    T.stressMod = 0.9;
  } else if (V.stress >= V.stressmax * 0.2) {
    T.stressMod = 0.7;
  } else if (V.stress >= 1) {
    T.stressMod = 0.5;
  } else {
    T.stressMod = 0.0;
  }

  // Trauma Modifiers
  if (V.trauma >= V.traumamax) {
    T.traumaMod = 1.5;
  } else if (V.trauma >= V.traumamax * 0.8) {
    T.traumaMod = 1.3;
  } else if (V.trauma >= V.traumamax * 0.6) {
    T.traumaMod = 1.1;
  } else if (V.trauma >= V.traumamax * 0.4) {
    T.traumaMod = 0.9;
  } else if (V.trauma >= V.traumamax * 0.2) {
    T.traumaMod = 0.7;
  } else if (V.trauma >= 1) {
    T.traumaMod = 0.5;
  } else {
    T.traumaMod = 0.0;
  }
};

window.fear = function(amount, multiplierOverride) {
  if (isNaN(amount)) paramError("fear", "amount", amount, "Expected a number.");
  if (multiplierOverride && isNaN(multiplierOverride)) paramError("fear", "multiplierOverride", multiplierOverride, "Expected a number.");
  amount = Number(amount);
  multiplierOverride = Number(multiplierOverride);

  fearcoeff();
  let sumPositiveMods;
  sumPositiveMods = T.sanityMod + T.willpowerMod + T.controlMod + T.stressMod + T.traumaMod;

  let effectiveMultiplier;
  let fearTier
  let willRestore;
  let controlRestore;

  if (amount) {
    if (multiplierOverride) {
      V.Maplebirch.fear += amount * multiplierOverride;
    } else if (amount > 0) {
      fearTier = V.Maplebirch.fear < 2000 ? 1.0 : V.Maplebirch.fear < 5000 ? 0.9 : 0.8;
      effectiveMultiplier = (sumPositiveMods * 12 * fearTier) + 0.1667;
      V.Maplebirch.fear += amount * effectiveMultiplier;
    } else {
      willRestore = 1.2 - T.willpowerMod;
      controlRestore = 1.2 - T.controlMod;
      effectiveMultiplier = (willRestore + controlRestore) * 48.6125 + 0.1667;
      V.Maplebirch.fear += amount * effectiveMultiplier * 2;
    }
  }
    //睡眠障碍sleeptrouble，噩梦/梦魇nightmares，焦虑anxiety
      /*V.sleeptrouble = V.trauma >= 1 ? 1 : 0;
      V.nightmares = V.trauma >= (V.traumamax / 10) * 1 ? 1 : 0;
  
      if (V.trauma >= (V.traumamax / 10) * 7) {
        V.anxiety = 2;
      } else if (V.trauma >= (V.traumamax / 10) * 2) {
        V.anxiety = 1;
      } else {
        V.anxiety = 0;
      }
  
      V.flashbacks = V.trauma >= (V.traumamax / 10) * 8 ? 1 : 0;
  
      if (V.trauma >= (V.traumamax / 10) * 6) {
        V.panicattacks = 2;
      } else if (V.trauma >= (V.traumamax / 10) * 4) {
        V.panicattacks = 1;
      } else {
        V.panicattacks = 0;
      }*/

      //updateHallucinations(); 幻觉
  fearClamp();
};
DefineMacro("fear", fear);

window.fearClamp = function () {
  if (V.Maplebirch.fear >= V.Maplebirch.fearmax) V.willpower -= (V.Maplebirch.fear - V.Maplebirch.fearmax) / 10;

  V.Maplebirch.fear = Math.clamp(V.Maplebirch.fear, 0, V.Maplebirch.fearmax);
  V.Maplebirch.fear = Math.round(V.Maplebirch.fear);
};
DefineMacro("fearclamp", fearClamp);
