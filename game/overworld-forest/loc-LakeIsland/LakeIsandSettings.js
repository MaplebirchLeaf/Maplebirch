window.maplebirchLakeIslandRestore = function() {
  if (V.Maplebirch.lakeisland.decay === 0) V.Maplebirch.lakeisland.lock = "unlock";
  
    if (V.Maplebirch.lakeisland.decay >= 90) {
      T.island_clean = "dirtiest";
    } else if (V.Maplebirch.lakeisland.decay >= 60) {
      T.island_clean = "dirtier";
    } else if (V.Maplebirch.lakeisland.decay >= 35) {
      T.island_clean = "dirtiy";
    } else if (V.Maplebirch.lakeisland.decay >= 15) {
      T.island_clean = "clean";
    } else if (V.Maplebirch.lakeisland.decay > 0) {
      T.island_clean = "cleaner";
    } else {
      T.island_clean = "cleanest";
    }

    if (V.Maplebirch.lakeisland.lock === "unlock") {
      // 湖中岛农田初始化
      maplebirchLakeIslandPolt();

      V.Maplebirch.lakeisland.Bedroom = true;
      V.Maplebirch.lakeisland.lock = undefined;
    }

  V.Maplebirch.lakeisland.decay = Math.clamp(V.Maplebirch.lakeisland.decay, 0, 100);
};

// 湖中岛清理事件
window.maplebirchLakeIslandCleanCount = function() {
  maplebirchStatusCheck("Vivian");
  maplebirchRandomNum();
  let clean = 0;
  let dirty = 0;
  V.Maplebirch.lakeisland.decaymax = 100;

  if (T.vivian_location === "island") {
    if (["feather duster"].includes(V.Maplebirch.vivian.items)) {
      // 10~17天
      clean = Math.floor((V.Maplebirch.Rng / 25) + 6);
    } else {
      // 15~20天
      clean = Math.floor((V.Maplebirch.Rng / 50) + 5);
    }
    V.Maplebirch.vivian.clean = 3;
  }
  if (V.Maplebirch.vivian.clean === 0) {dirty = Math.floor((V.Maplebirch.Rng / 50) + 1);}

  V.Maplebirch.lakeisland.decay -= clean;
  V.Maplebirch.lakeisland.decay += dirty;
  V.Maplebirch.vivian.clean -= 1;

  V.Maplebirch.lakeisland.decay = Math.clamp(V.Maplebirch.lakeisland.decay, 0, V.Maplebirch.lakeisland.decaymax);
  V.Maplebirch.vivian.clean = Math.clamp(V.Maplebirch.vivian.clean, 0 ,3)
}

// 湖中岛农田
window.maplebirchLakeIslandPolt = function() {
  const fragment = document.createDocumentFragment();

  // 地点 数量 种类 质量 大小
  fragment.append(wikifier("plots_init", "lake_island", 3, "earth", 2, "large"));
  V.Maplebirch.lakeisland.plot = 3;
};

/*const maplebirchLakeIslandClean = new TimeEvent('onDay', 'maplebirchLakeIslandClean');
  
maplebirchLakeIslandClean.Cond(() => {
  maplebirchStatusCheck("Vivian");
  return (T.vivian_location === "island");
})
  
maplebirchLakeIslandClean.Action(() => {
  maplebirchLakeIslandCleanCount();
});*/