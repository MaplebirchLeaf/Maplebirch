// Vivian
function maplebirchVivianNPC() {
  return new NamedNPC(
    'Vivian',
    ['the Lost', '迷失者'],
    ['Vivian', '维维安'],
    'human'
  )
  .Init('f', 'teen')
  .setValue('insecurity', 'skill')
  .setValue('maplebirch_lost', 100)
  .setBreasts(4, "坚挺的乳房", "坚挺的乳房")
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
};

window.vivianStatusCheck = function() {
  C.npc = C.npc || {};
  C.npc.Vivian = C.npc.Vivian || {};
  
  const vivian = C.npc.Vivian;

  if (vivian.maplebirch_lost !== 0) {
    V.Maplebirch.vivian.state = "lost";
  } else if (V.Maplebirch.vivian.clothes === "scarecrow") {
    V.Maplebirch.vivian.state = "hermit";
  } else {
    V.Maplebirch.vivian.state = "";
  }
  // 维维安数值
  maplebirchVivianValue();
  // 维维安位置
  maplebirchVivianLocations();
  // 维维安头衔
  maplebirchVivianTitle();
  
  if (T.vivian_location === "island" && !V.Maplebirch.lakeisland.lock === "lock") {
    switch (Time.hour) {
      case 18:
        V.Maplebirch.vivian.bus = "bath";
        break;
      case 8:case 9:
        V.Maplebirch.vivian.bus = "stroll";
        break;
      case 22:case 23:case 0:case 1:case 2:case 3:case 4:case 5:case 6:
        V.Maplebirch.vivian.bus = "room";
        break;
      default:
        V.Maplebirch.vivian.bus = "";
    }
  }
};

window.isVivianSub = function() {
  return (
    (V.npc[0] === "Vivian" && C.npc.Vivian.maplebirch_lost >= 30)
  );
};

// 维维安属性变化
window.isVivianAttribute = function(attribute) {
  C.npc = C.npc || {};
  C.npc.Vivian = C.npc.Vivian || {};
  const vivian = C.npc.Vivian;

  V.Maplebirch = V.Maplebirch || {};

  if (vivian.heresy !== 0 && vivian.moronity === 0 && vivian.truth === 0 && vivian.fraud === 0) {
    V.Maplebirch.VivianAttribute = "heresy";
  } else if (vivian.heresy === 0 && vivian.moronity !== 0 && vivian.truth === 0 && vivian.fraud === 0) {
    V.Maplebirch.VivianAttribute = "moronity";
  } else if (vivian.heresy === 0 && vivian.moronity === 0 && vivian.truth !== 0 && vivian.fraud === 0) {
    V.Maplebirch.VivianAttribute = "truth";
  } else if (vivian.heresy === 0 && vivian.moronity === 0 && vivian.truth === 0 && vivian.fraud !== 0) {
    V.Maplebirch.VivianAttribute = "fraud";
  } else {
    V.Maplebirch.VivianAttribute = "error";
  }

 switch (attribute) {
  case "name":
    switch (V.Maplebirch.VivianAttribute) {
      case "heresy":
        if (vivian.heresy >= 120) {
          return '<span class=\"VivianHeresy\">异端</span>';
        } else {
          return '<span class=\"winered\">血腥</span>';
        }
      case "moronity":
        if (vivian.moronity >= 120) {
          return '<span class=\"VivianMoronity\">痴愚</span>';
        } else {
          return '<span class=\"tawny\">混乱</span>';
        }
      case "truth":
        if (vivian.truth >= 120) {
          return '<span class=\"VivianTruth\">真理</span>';
        } else {
          return '<span class=\"azure\">秩序</span>';
        }
      case "fraud":
        if (vivian.fraud >= 120) {
          return '<span class=\"VivianFraud\">诡谲</span>';
        } else {
          return '<span class=\"mediumgrey\">谎言</span>';
        } 
      default:
        return '错误Error';
    }
  case "actionIcon":
    switch (V.Maplebirch.VivianAttribute) {
      case "heresy":
        return 'img/ui/Maplebirch_Heresy.png';
      case "moronity":
        return 'img/ui/Maplebirch_Moronity.png';
      case "truth":
        return 'img/ui/Maplebirch_Truth.png';
      case "fraud":
        return 'img/ui/Maplebirch_Fraud.png';
      default:
        return 'img/ui/Maplebirch_Null.png';
    }
  case "color":
    switch (V.Maplebirch.VivianAttribute) {
      case "heresy":
        return 'red';
      case "moronity":
        return 'brown';
      case "truth":
        return 'teal';
      case "fraud":
        return 'grey';
      default:
        return 'white';
    }
  }
};

window.maplebirchVivianValue = function() {
  const vivian = C.npc.Vivian;
  const MB =  V.Maplebirch;

  vivian.heresy = vivian.heresy || 0;
  vivian.moronity = vivian.moronity || 0;
  vivian.truth = vivian.truth || 0;
  vivian.fraud = vivian.fraud || 0;
  vivian.exhibitionism = vivian.exhibitionism || 0;
  
  if (vivian.exhibitionism >= 95) {
    MB.vivian.exhibitionismtrait = 6;
  } else if (vivian.exhibitionism >= 75) {
    MB.vivian.exhibitionismtrait = 5;
  } else if (vivian.exhibitionism >= 55) {
    MB.vivian.exhibitionismtrait = 4;
  } else if (vivian.exhibitionism >= 35) {
    MB.vivian.exhibitionismtrait = 3;
  } else if (vivian.exhibitionism >= 15) {
    MB.vivian.exhibitionismtrait = 2;
  } else if (vivian.exhibitionism >= 1) {
    MB.vivian.exhibitionismtrait = 1;
  } else {
    MB.vivian.exhibitionismtrait = 0;
  }

  if (!V.HermitValue_Lock && vivian.maplebirch_lost === 0) {
    vivian.dom = 200;
    V.HermitValue_Lock = true; 
  }

  vivian.heresy = Math.clamp(vivian.heresy, 0, 150);
  vivian.moronity = Math.clamp(vivian.moronity, 0, 150);
  vivian.truth = Math.clamp(vivian.truth, 0, 150);
  vivian.fraud = Math.clamp(vivian.fraud, 0, 150);
  vivian.exhibitionism = Math.clamp(vivian.exhibitionism, 0, 100);

};

window.maplebirchVivianLocations = function() {

  switch (V.Maplebirch.vivian.state) {
    case "lost": 
      T.vivian_location = "ruin";
      break;
    case "hermit":
      T.vivian_location = "island";
      break;
  }

};

window.maplebirchVivianTitle = function() {

  switch (V.Maplebirch.vivian.state) {
    case "lost":
      C.npc['Vivian'].title = '迷失者';
      C.npc['Vivian'].title_lan = { EN: 'the lost', CN: '迷失者'};
      break;
    case "hermit":
      C.npc['Vivian'].title = '森林湖隐者';
      C.npc['Vivian'].title_lan = { EN: 'forest lake hermit', CN: '森林湖隐者'};
      break;
  }
}