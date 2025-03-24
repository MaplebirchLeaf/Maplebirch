setup.mbContains = (arr, elements) => elements.every(e => arr.includes(e));

window.maplebirchRandomNum = function() {
  if (typeof V.Maplebirch.Rng !== 'number') {
    V.Maplebirch.Rng = 0;
  }
  V.Maplebirch.Rng = Math.floor(Math.random() * 100) + 1;
  return V.Maplebirch.Rng;
};

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