const MaplebirchNpcSetting = {
   Vivian: {
    maplebirch_lost: { maxValue: 100, minValue: 0},
    lust: {
      name: () => {
        if (C.npc.Vivian?.maplebirch_lost !== 0){
          return '<span class=\"grey\">迷失</span>';
        } else {
          return '性欲';
        }
      },maxValue: 100, minValue: 0,
      activeIcon: () => {
        if (C.npc.Vivian?.maplebirch_lost !== 0) {
          return 'img/ui/Vivian_Lost.png';
        } else {
          return 'img/ui/sym_lust.png';
        }
      },
      inactiveIcon: () => {
        if (C.npc.Vivian?.maplebirch_lost !== 0) {
          return 'img/ui/Vivian_Lost.png';
        } else {
          return 'img/ui/emptyvial.png';
        }
      },
      color: () => {
        if (C.npc.Vivian?.maplebirch_lost !== 0) {
          return 'grey';
        } else {
          return 'pink';
        }
      },
    },
    love: { maxValue: 150 },
    important : () => C.npc.Vivian?.maplebirch_lost === 0,
    dom: {
      name: () => {
        if (C.npc.Vivian?.dom > 155) {
          return '<span class=\"green\">理智</span>';
        } else if (C.npc.Vivian?.dom > 110) {
          return '<span class=\"teal\">理智</span>';
        } else if (C.npc.Vivian?.dom > 20) {
          return '<span class=\"lblue\">理智</span>';
        } else {
          return '<span class=\"red\">理智</span>';
        }
      },maxValue: 200, minValue: 0, activeIcon: 'img/ui/sym_maplebirchsanity.png', color: 'green'
    },
    trauma: {
      name: () => {
        return isVivianAttribute("name");
      }, maxValue: 150, minValue: 0,
      activeIcon: () => {
        return isVivianAttribute("actionIcon");
      },
      color: () => {
        return isVivianAttribute("color");
      }
    },
  },
  Karasveil: {
    //important : () => true,
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchFallen\">罪孽</span>', maxValue: 200, activeIcon: 'img/ui/Karasveil_Sin.png', color:'MaplebirchFallen'},
    //loveInterest : () => true,
  },
  Noctyaph: {
    //important : () => true,
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchDemon\">傲慢</span>', maxValue: 200, activeIcon: 'img/ui/Noctyaph_Arrogant.png', color:'MaplebirchDemon'},
    //loveInterest : () => true,
  },
  Igniharp: {
    //important : () => true,
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchAngel\">审判</span>', maxValue: 200, activeIcon: 'img/ui/Igniharp_Trial.png', color:'MaplebirchAngel'},
    //loveInterest : () => true,
  }
};

window.maplebirchSFNPCInit = function()  {
  NamedNPC.add(maplebirchVivianNPC());
  NamedNPC.add(maplebirchIgniharpNPC());
  NamedNPC.add(maplebirchKarasveilNPC());
  NamedNPC.add(maplebirchNoctyaphNPC());

  Object.assign(setup.ModNpcSetting, MaplebirchNpcSetting);
};

window.maplebirchStatusCheck = function(name) {
  if (V.NPCNameList.includes(name)) {
		const nnpc = V.NPCName[V.NPCNameList.indexOf(name)];

		if (nnpc.init === 1) {
			switch (nnpc.nam) {
				case "Vivian":
					vivianStatusCheck();
					break;
				case "Igniharp":
					igniharpStatusCheck();
					break;
				case "Karasveil":
					karasveilStatusCheck();
					break;
        case "Noctyaph":
					noctyaphStatusCheck();
					break;
			}
		}
		return nnpc;
	} else {
		Errors.report(`getNNPC received an invalid name ${name}.`);
	}
};

window.dailyMaplebirchNPCEffects = function() {
  const fragment = document.createDocumentFragment();

  // Robin
  const robin = C.npc.Robin
  if (robin.init === 1) {
    statusCheck("Robin");
    // 罗宾加入神殿速度
    if (V.Maplebirch.robin.rank === "prospective") {
      if (V.Maplebirch.Robin_pendant) {
        V.Maplebirch.RobinDom += 3;
      } else {
        V.Maplebirch.RobinDom += 1;
      }
      V.Maplebirch.RobinDom = Math.clamp(V.Maplebirch.RobinDom, 0, 15);
    } else {
      V.Maplebirch.RobinDom = 0;
    }
    if (V.RobinTempleInvitation !== undefined) {
      if (robin.lovestage >= 5 && ["test_superslowly","test_slowly"].includes(V.RobinTempleInvitation)) {
        V.Maplebirch.robin.temple_speed += 1;
      }
      if (V.Maplebirch.robin.temple_speed === 3 && V.RobinTempleInvitation === "test_superslowly") {
        V.Maplebirch.robin.temple_speed -= 3;
        V.RobinTempleInvitation = "test_slowly";
      } else if (V.Maplebirch.robin.temple_speed === 2 && V.RobinTempleInvitation === "test_slowly") {
        V.Maplebirch.robin.temple_speed -= 2;
        V.RobinTempleInvitation = "test_quickly";
      } else if (V.Maplebirch.robin.temple_speed === 0 && V.RobinTempleInvitation === "test_quickly") {
        V.RobinTempleInvitation = "templetest";
      }
    }
    if (["ChastityTestfail","ChastityTestsuccess"].includes(V.RobinTempleInvitation)) {
      V.RobinTempleInvitation = undefined;
    }
    // 罗宾护肛板
    if (
      V.robinromance === 1 &&
      V.robinChastityKnown &&
      robin.dom >= 60 &&
      T.robinStatus.includes("lust") &&
      robin.chastity.anus.includes("anal shield")
    ) {
      robin.chastity.anus = "";
      V.robinAnalShieldComment = true;
    }
    if (["initiate", "monk"].includes(V.Maplebirch.robin.rank) || !V.robinmissing) {
      dailyUpdateRobinValue();
    }
    // 罗宾头衔
    switch (V.Maplebirch.robin.rank) {
      case "prospective":
        C.npc['Robin'].title = '孤儿-神殿候选者';
        C.npc['Robin'].title_lan = { EN: 'orphan-prospective', CN: '孤儿-神殿候选者'};
        break;
      case "initiate":
        C.npc['Robin'].title = '孤儿-见习教徒';
        C.npc['Robin'].title_lan = { EN: 'orphan-initiate', CN: '孤儿-见习教徒'};
        break;
      case "monk":
        if (C.npc.Robin.gender === "m") {
          C.npc['Robin'].title = '孤儿-修士';
          C.npc['Robin'].title_lan = { EN: 'orphan-Charles', CN: '孤儿-修士'};
        } else {
          C.npc['Robin'].title = '孤儿-修女';
          C.npc['Robin'].title_lan = { EN: 'orphan-Charlene', CN: '孤儿-修女'};
        }
        break;
      case "priest":
        C.npc['Robin'].title = '孤儿-司祭';
        C.npc['Robin'].title_lan = { EN: 'orphan-priest', CN: '孤儿-司祭'};
        break;
      default :
        C.npc['Robin'].title = '孤儿';
        C.npc['Robin'].title_lan = { EN: 'orphan', CN: '孤儿'};
        break;
    }

  }

  //Sydney
  if (C.npc.Sydney.init === 1) {
    statusCheck("Sydney");

    // 悉尼头衔
		if (T.sydneyStatus.includes("corrupt")) {
      switch (V.sydney.rank) {
        case "initiate":
          C.npc['Sydney'].title = '堕落者-见习教徒';
          C.npc['Sydney'].title_lan = { EN: 'fallen-initiate', CN: '堕落者-见习教徒'};
          break;
        case "monk":
          if (C.npc.Sydney.gender === "m") {
            C.npc['Sydney'].title = '堕落者-修士';
            C.npc['Sydney'].title_lan = { EN: 'fallen-Charles', CN: '堕落者-修士'};
          } else {
            C.npc['Sydney'].title = '堕落者-修女';
            C.npc['Sydney'].title_lan = { EN: 'fallen-Charlene', CN: '堕落者-修女'};
          }
          break;
        case "priest":
          C.npc['Sydney'].title = '堕落者-司祭';
          C.npc['Sydney'].title_lan = { EN: 'fallen-priest', CN: '堕落者-司祭'};
          break;
      }
    } else {
      switch (V.sydney.rank) {
        case "initiate":
          C.npc['Sydney'].title = '虔信者-见习教徒';
          C.npc['Sydney'].title_lan = { EN: 'faithful-initiate', CN: '虔信者-见习教徒'};
          break;
        case "monk":
          if (C.npc.Sydney.gender === "m") {
            C.npc['Sydney'].title = '虔信者-修士';
            C.npc['Sydney'].title_lan = { EN: 'faithful-Charles', CN: '虔信者-修士'};
          } else {
            C.npc['Sydney'].title = '虔信者-修女';
            C.npc['Sydney'].title_lan = { EN: 'faithful-Charlene', CN: '虔信者-修女'};
          }
          break;
        case "priest":
          C.npc['Sydney'].title = '虔信者-司祭';
          C.npc['Sydney'].title_lan = { EN: 'faithful-priest', CN: '虔信者-司祭'};
          break;
      }
    }

  }

  // Vivian
  const vivian = C.npc.Vivian;
  if (vivian.init === 1) {
    maplebirchStatusCheck("Vivian");
    vivian.exhibitionism -= 1;
    vivian.dom += 1
    maplebirchVivianValue();
  }
};