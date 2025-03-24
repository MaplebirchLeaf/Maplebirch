setup.ModTraits.push(
  {
    addto  : 'Hypnosis Traits', 
    name   : '混乱仪式：<i><span class=\"wraith\">s\'uhn\'s uh\'e</span></i>', // <b><u><i><strike>R̴o̸b̷i̴n̴&̷S̵y̸d̵n̷e̵y̵</strike></i></u></b>
    text   : '你与神殿中的两人缔结承诺，与这两个人性交不会破坏你们的誓言。', 
    cond   : function () { return V.Maplebirch.confusion === true; }, 
    colour : 'MaplebirchFallen' 
  },
);

setup.ModTraitTitle.push({
  title: "Maplebirch Traits", 
  display: "<span class=\"MaplebirchMod\">枫桦特质</span>",
  traits: [
    {
      
    }
  ]
});