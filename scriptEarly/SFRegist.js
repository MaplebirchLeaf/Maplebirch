function maplebirchSFModInit() {
  // 初始化系统
  simpleFrameworks.onInit(() => {
    maplebirchSFNPCInit();
    maplebirchSFTraitsInit();
    maplebirchSFTimeEvent();
  });

  // 注册模块组件
  [
    ['iModOptions', 'MaplebirchOptions'],
    ['ModDegreesBox', 'MaplebirchSanity'],
    ['ModMenuBig', 'MaplebirchSystemButton'],
    ['ModStatusBar', 'fearcaption'],
    ['ModSkillsBox', 'MaplebirchMemoryskill']
  ].forEach(([target, id]) => {
    simpleFrameworks.addto(target, id);
  });
  simpleFrameworks.addIconClass('tending_icon');
}

window.maplebirchSFTimeEvent = function() {
  // 罗宾神殿测试
  const robinChastityTest = () => {
    new TimeEvent('onSec', 'robinChastityTest')
    .Cond((timeData) => {
        return V.Maplebirch.robin.temple_invitation === "templetest" && (V.RobinChastitycheckTime || (timeData.current.hour > 6 && timeData.current.hour < 24));
    })
    .Action(() => {
        robinChastityCheck();
    });
  };
  robinChastityTest();

  // 罗宾神殿工作
  const robinTempleWork = () => {
    new TimeEvent('onHour', 'robinTempleWork')
    .Cond(() => {
      statusCheck("Robin");
      return (T.robin_location === "temple" && ["initiate", "monk", "priest"].includes(V.Maplebirch.robin.rank) && V.temple_rank !== undefined && V.temple_rank !== "prospective");
    })
    .Action(() => {
      switch (V.robin_templeWork) {
        case "garden":
          V.temple_garden++;
          break;
        case "quarters":
          V.temple_quarters++;
          break;
        default:
          break;
      }
    });
  };
  robinTempleWork();

  // 湖中岛维维安清洁
  const lakeIslandClean = () => {
    new TimeEvent('onDay', 'lakeIslandClean')
    .Cond(() => {
      maplebirchStatusCheck("Vivian");
      return (T.vivian_location === "island");
    })
    .Action(() => {
      maplebirchLakeIslandClean();
    })
  };
  lakeIslandClean();

  // 果园提醒
  const orchardRemind = () => {
    new TimeEvent('onAfter', 'orchardRemind')
    .Cond(timeData => timeData.passed > 0)
     .Action(timeData => {
      const totalHours = timeData.passed / 3600;
      const halfDayCount = Math.floor(totalHours / 12);
      for (let i = 0; i < halfDayCount; i++) {
          delete V.Maplebirch.effect;
        }
     });
  };
  orchardRemind();
};
