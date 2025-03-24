// Vivian
NamedNPC.add(
  new NamedNPC(
    'Vivian',
    ['The Lost', '迷失者'],
    ['Vivian', '维安'],
    'human'
  )
  .Init('f', 'teen')
  .setValue('insecurity', 'skill')
  .setValue('maplebirch_lost', 100)
  .setPenis(4,"宏伟肉棒")
  .setColour('pale', 'amber', 'white')
  .isImportant()
  .setVirginity(
    {
      anal: true,
      kiss: true,
      oral: true,
      penile: true,
      vaginal: true,
      handholding: true,
    }
  )
  .setPregnancy()
  .setClothes("upper", {
    name: "scarecrow shirt",
    integrity_max: 100,
    word: "a",
    action: "open",
    desc: "稻草人衬衫"})
  .setClothes("lower",{
    name: "scarecrow skirt",
    integrity_max: 100,
    word: "n",
    action: "aside",
    desc: "稻草人裙"})
  .setClothes("set","scarecrow")
);

window.vivianStatusCheck = function() {
  C.npc = C.npc || {};
  C.npc.Vivian = C.npc.Vivian || {};
  const vivian = C.npc.Vivian;
  
    if (vivian.maplebirch_lost !== 0) {
      C.npc['Vivian'].title = '迷失者';
      C.npc['Vivian'].title_lan = { EN: 'The Lost', CN: '迷失者' };
    } else {
      C.npc['Vivian'].title = '森林湖隐者';
      C.npc['Vivian'].title_lan = { EN: 'Forest Lake Hermit', CN: '森林湖隐者' };
      if (!V.HermitValue_Lock) {
        vivian.dom = 200;
        V.HermitValue_Lock = true; 
      }
    }
};

// 维安介绍文本
Macro.add('VivianOpinion', {
  handler: function () {
    if (C.npc.Vivian.maplebirch_lost !== 0) {
      if (C.npc.Vivian.maplebirch_lost >= 90) {
        $(this.output).append('维安 <span class="red">完全迷失于幻境中。</span>');
      } else if (C.npc.Vivian.maplebirch_lost >= 60) {
        $(this.output).append('维安 <span class="blue">的意识正被幻境蚕食。</span>');
      } else if (C.npc.Vivian.maplebirch_lost >= 30) {
        $(this.output).append('维安 <span class="lblue">正努力挣脱幻境。</span>');
      } else if (C.npc.Vivian.maplebirch_lost >= 10) {
        $(this.output).append('维安 <span class="teal">对外界产生了反应。</span>');
      } else {
        $(this.output).append('维安 <span class="green">重新感受到了现实。</span>');
      }
    } else {
      $(this.output).append('维安 <span class="green">感谢着你。</span>');
    }
  }
});

window.isVivianSub = function() {
  return (
    (V.npc[0] === "Vivian" && C.npc.Vivian.maplebirch_lost >= 30)
  );
};