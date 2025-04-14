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
}

window.maplebirchSFTimeEvent = function() {
    // 罗宾神殿测试
    const robinChastityTest = new TimeEvent('onSec', 'robinChastityTest');

    robinChastityTest.Cond(() => {
    return V.RobinTempleInvitation === "templetest" && (V.RobinChastitycheckTime === true || (Time.hour > 6 && Time.hour < 24));
    })

    robinChastityTest.Action(() => {
    robinChastityCheck();
    });
    
    // 罗宾神殿工作
    const maplebirchRobinTempleWork = new TimeEvent('onHour', 'maplebirchRobinTempleWork');

    maplebirchRobinTempleWork.Cond(() => {
    statusCheck("Robin");
    return (T.robin_location === "temple" && ["initiate", "monk"].includes(V.Maplebirch.robin.rank) && V.temple_rank !== undefined && V.temple_rank !== "prospective");    
    })

    maplebirchRobinTempleWork.Action(() => {
    if (V.robin_templeWork === "garden") {
        V.temple_garden++;
    } else if (V.robin_templeWork === "quarters") {
        V.temple_quarters++;
    }
    });
};