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
      },color: () => {
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
    /*purity: { name: '', maxValue: 200, activeIcon: '', color: ''},*/
  },
  Karasveil: {
    /*important : () => true,*/
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchFallen\">罪孽</span>', maxValue: 200, activeIcon: 'img/ui/Karasveil_Sin.png', color:'MaplebirchFallen'},
    /*loveInterest : () => true,*/
  },
  Noctyaph: {
    /*important : () => true,*/
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchDemon\">傲慢</span>', maxValue: 200, activeIcon: 'img/ui/Noctyaph_Arrogant.png', color:'MaplebirchDemon'},
    /*loveInterest : () => true,*/
  },
  Igniharp: {
    /*important : () => true,*/
    love: { maxValue: 200 },
    lust: { maxValue: 200 },
    dom: { name: '<span class=\"MaplebirchAngel\">审判</span>', maxValue: 200, activeIcon: 'img/ui/Igniharp_Trial.png', color:'MaplebirchAngel'},
    /*loveInterest : () => true,*/
  }
};

Object.assign(setup.ModNpcSetting, MaplebirchNpcSetting);

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
