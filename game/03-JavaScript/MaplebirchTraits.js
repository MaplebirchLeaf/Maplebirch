setup.ModTraits.push(
  {
    addto  : 'Hypnosis Traits', 
    name   : '混乱的誓约：<span class=\"wraith\"><i><span class=\"confusion\"><-罗宾&悉尼-></span></i></span>', // <b><u><i><strike>R̴o̸b̷i̴n̴&̷S̵y̸d̵n̷e̵y̵</strike></i></u></b>
    text   : '？？？？？？？？？？？？？？？暂未描述。', // 描述更换
    cond   : function () { return V.Maplebirch.confusion === true; }, 
    colour : 'MaplebirchFallen' 
  },
);

setup.ModTraitTitle.push({
  title: "Maplebirch Angel Traits", 
  display: "<span class=\"MaplebirchMod\">枫桦特质</span>",
  traits: [
    {
      
    }
  ]
});