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
    } else if (V.Maplebirch.lakeisland.decay >= 0) {
      T.island_clean = "cleaner";
    } else {
      T.island_clean = "cleanest";
    }
  V.Maplebirch.lakeisland.decay = Math.clamp(V.Maplebirch.lakeisland.decay, 0, 100);
};

window.maplebirchLakeIslandCleanCount = function() {
  maplebirchStatusCheck("Vivian");
  maplebirchRandomNum();
  let clean = 0;
  let dirty = 0;

  if (T.vivian_location === "island") {
    if (["featherduster"].includes(V.Maplebirch.vivian.item)) {
      clean = Math.floor((V.Maplebirch.Rng / 25) + 1);
    } else {
      clean = Math.floor((V.Maplebirch.Rng / 10) + 5);
    }
    V.Maplebirch.vivian.clean = 72;
  }
  if (clean === 0) {dirty = Math.floor((V.Maplebirch.Rng / 50) + 1);}

  V.Maplebirch.lakeisland.decay -= clean;
  V.Maplebirch.lakeisland.decay += dirty;
  V.Maplebirch.vivian.clean -= 1;

  V.Maplebirch.lakeisland.decay = Math.clamp(V.Maplebirch.lakeisland.decay, 0, 100);
}

const maplebirchLakeIslandClean = new TimeEvent('onHour', 'maplebirchLakeIslandClean');

maplebirchLakeIslandClean.Cond(() => {
  maplebirchStatusCheck("Vivian");
  return (T.vivian_location === "island");
})

maplebirchLakeIslandClean.Action(() => {
  maplebirchLakeIslandCleanCount();
});