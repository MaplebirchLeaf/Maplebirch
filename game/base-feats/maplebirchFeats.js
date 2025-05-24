window.maplebirchFeatsCheck = function() {
  const mod = V.Maplebirch;
  let FeatsCheck = [];
  if (mod.FruitSeeds.know.length === 1) FeatsCheck.pushUnique("'First Fruit Seed'");
  if (mod.FruitSeeds.know.length === Object.keys(setup.maplebirchFruiter).length) FeatsCheck.pushUnique("'All Fruit Seed'");

  return FeatsCheck;
};
