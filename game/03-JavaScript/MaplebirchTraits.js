window.maplebirchSFTraitsInit = function() {
  setup.ModTraits.push(
    {
      addto  : 'NPC Traits', 
      name   : '混乱誓约—<span class="wraith"><i><span class="confusion"><-罗宾&悉尼-></span></i></span>', 
      text   : '<span class="wraith">表里相易，内外相别，此是背叛，还是同在？</span>允许承诺仪式的对象 +1', // 描述更换
      cond   : function () { return V.Maplebirch.confusion === true; }, 
      colour : 'MaplebirchFallen' 
    },
  );
    
  setup.ModTraitTitle.push({
    title: "Maplebirch Angel Traits", 
    display: "<span class='MaplebirchMod'>枫桦特质</span>",
    traits: [
      {
          
      }
    ]
  });
};