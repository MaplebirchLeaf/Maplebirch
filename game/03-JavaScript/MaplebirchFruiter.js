// 水果种子建立
window.maplebirchFruit = (() => {
  function maplebirchFruiterInit(fruit, fruit_cn) {
    const maplebirchFruiter = {
      apple_seed: {
        index: 0,
        name: "apple seeds",
        sprout_name: "apple sprouts",
        sapling_name: "apple saplings",
        tree_name: "apple trees",
        fruit_name: "apple",
        cn_name: "苹果籽",
        cn_sprout_name: "苹果幼芽",
        cn_sapling_name: "苹果树苗",
        cn_tree_name: "苹果树",
        cn_fruit_name: "苹果",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_apple.png",
      },
      orange_seed: {
        index: 1,
        name: "orange seeds",
        sprout_name: "orange sprouts",
        sapling_name: "orange saplings",
        tree_name: "orange trees",
        fruit_name: "orange",
        cn_name: "橘核",
        cn_sprout_name: "橘子幼芽",
        cn_sapling_name: "橘子树苗",
        cn_tree_name: "橘子树",
        cn_fruit_name: "橘子",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_orange.png",
      },
      pear_seed: {
        index: 2,
        name: "pear seeds",
        sprout_name: "pear sprouts",
        sapling_name: "pear saplings",
        tree_name: "pear trees",
        fruit_name: "pear",
        cn_name: "梨核",
        cn_sprout_name: "梨幼芽",
        cn_sapling_name: "梨树苗",
        cn_tree_name: "梨树",
        cn_fruit_name: "梨子",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_pear.png",
      },
      lemon_seed: {
        index: 3,
        name: "lemon seeds",
        sprout_name: "lemon sprouts",
        sapling_name: "lemon saplings",
        tree_name: "lemon trees",
        fruit_name: "lemon",
        cn_name: "柠檬籽",
        cn_sprout_name: "柠檬幼芽",
        cn_sapling_name: "柠檬树苗",
        cn_tree_name: "柠檬树",
        cn_fruit_name: "柠檬",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_lemon.png",
      },
      peach_seed: {
        index: 4,
        name: "peach seeds",
        sprout_name: "peach sprouts",
        sapling_name: "peach saplings",
        tree_name: "peach trees",
        fruit_name: "peach",
        cn_name: "桃核",
        cn_sprout_name: "桃幼芽",
        cn_sapling_name: "桃树苗",
        cn_tree_name: "桃树",
        cn_fruit_name: "桃子",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_peach.png",
      },
      plum_seed: {
        index: 5,
        name: "plum seeds",
        sprout_name: "plum sprouts",
        sapling_name: "plum saplings",
        tree_name: "plum trees",
        fruit_name: "plum",
        cn_name: "李子核",
        cn_sprout_name: "李子幼芽",
        cn_sapling_name: "李子树苗",
        cn_tree_name: "李子树",
        cn_fruit_name: "李子",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_plum.png",
      },
      banana_seed: {
        index: 6,
        name: "banana sucker",
        sprout_name: "banana sprouts",
        sapling_name: "banana saplings",
        tree_name: "banana trees",
        fruit_name: "banana",
        cn_name: "香蕉吸芽",
        cn_sprout_name: "香蕉幼芽",
        cn_sapling_name: "香蕉树苗",
        cn_tree_name: "香蕉树",
        cn_fruit_name: "香蕉",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_banana.png",
      },
      cherry_seed: {
        index: 7,
        name: "cherry seeds",
        sprout_name: "cherry sprouts",
        sapling_name: "cherry saplings",
        tree_name: "cherry trees",
        fruit_name: "cherry",
        cn_name: "樱桃核",
        cn_sprout_name: "樱桃幼芽",
        cn_sapling_name: "樱桃树苗",
        cn_tree_name: "樱桃树",
        cn_fruit_name: "樱桃",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 25,
        fruit_days: 26,
        multiplier: 1.05,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_cherry.png",
      },
      date_seed: {
        index: 8,
        name: "date seeds",
        sprout_name: "date sprouts",
        sapling_name: "date saplings",
        tree_name: "date trees",
        fruit_name: "date",
        cn_name: "椰枣核",
        cn_sprout_name: "椰枣幼芽",
        cn_sapling_name: "椰枣树苗",
        cn_tree_name: "椰枣树",
        cn_fruit_name: "椰枣",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 27,
        fruit_days: 28,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_date.png",
      },
      lime_seed: {
        index: 9,
        name: "lime seeds",
        sprout_name: "lime sprouts",
        sapling_name: "lime saplings",
        tree_name: "lime trees",
        fruit_name: "lime",
        cn_name: "酸橙核",
        cn_sprout_name: "酸橙幼芽",
        cn_sapling_name: "酸橙树苗",
        cn_tree_name: "酸橙树",
        cn_fruit_name: "酸橙",
        bed: "fruiter",
        type: "fruit",
        sprout_days: 3,
        sapling_days: 10,
        tree_days: 30,
        fruit_days: 31,
        multiplier: 1,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_lime.png",
      },
      blackberry_seed: {
        index: 10,
        name: "blackberry seeds",
        sprout_name: "blackberry sprouts",
        sapling_name: "blackberry blossoms",
        tree_name: "blackberry bushes",
        fruit_name: "blackberry",
        cn_name: "黑莓籽",
        cn_sprout_name: "黑莓幼芽",
        cn_sapling_name: "黑莓花",
        cn_tree_name: "黑莓丛",
        cn_fruit_name: "黑莓",
        bed: "berry",
        type: "fruit",
        sprout_days: 1,
        sapling_days: 3,
        tree_days: 7,
        fruit_days: 8,
        multiplier: 1.2,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_blackberry.png",
      },
      strawberry_seed: {
        index: 11,
        name: "strawberry seeds",
        sprout_name: "strawberry sprouts",
        sapling_name: "strawberry blossoms",
        tree_name: "strawberry bushes",
        fruit_name: "strawberry",
        cn_name: "草莓籽",
        cn_sprout_name: "草莓幼芽",
        cn_sapling_name: "草莓花",
        cn_tree_name: "草莓丛",
        cn_fruit_name: "草莓",
        bed: "berry",
        type: "fruit",
        sprout_days: 1,
        sapling_days: 3,
        tree_days: 7,
        fruit_days: 8,
        multiplier: 1.2,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_strawberry.png",
      },
      blueberry_seed: {
        index: 12,
        name: "blueberry seeds",
        sprout_name: "blueberry sprouts",
        sapling_name: "blueberry blossoms",
        tree_name: "blueberry bushes",
        fruit_name: "blueberry",
        cn_name: "蓝莓籽",
        cn_sprout_name: "蓝莓幼芽",
        cn_sapling_name: "蓝莓花",
        cn_tree_name: "蓝莓丛",
        cn_fruit_name: "蓝莓",
        bed: "berry",
        type: "fruit",
        sprout_days: 1,
        sapling_days: 3,
        tree_days: 7,
        fruit_days: 8,
        multiplier: 1.2,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_blueberry.png",
      },
      grape_seed: {
        index: 13,
        name: "grape seeds",
        sprout_name: "grape sprouts",
        sapling_name: "grape blossoms",
        tree_name: "grape vines",
        fruit_name: "grape",
        cn_name: "葡萄籽",
        cn_sprout_name: "葡萄幼芽",
        cn_sapling_name: "葡萄花",
        cn_tree_name: "葡萄藤",
        cn_fruit_name: "葡萄",
        bed: "berry",
        type: "fruit",
        sprout_days: 1,
        sapling_days: 3,
        tree_days: 7,
        fruit_days: 8,
        multiplier: 1.2,
        special: [],
        season: ["spring", "summer", "autumn"],
        icon: "maplebirch_grape.png",
      },
    };

    const sorted = Object.keys(maplebirchFruiter).sort();
    setup.maplebirchFruiter = {};
    sorted.forEach(s => {
    setup.maplebirchFruiter[s] = maplebirchFruiter[s];
    });

    setup.maplebirchtending = {};

    setup.maplebirchtending.fruiter_base = {
      fruiter: "none",
      size: "none",
      fruit: "none",
      stage: 0,
      days: 0,
      till: 0,
      water: 0,
      manure: 0,
      ripen: 0,
      harvest: 0,
      wateringTime: 0,
      manureTime: 0,
      fertiliserDecay: false,
      fertiliserDecayTime: 0,
    };

    setup.maplebirchtending.Time = {
      seed: 5,
      sprout: 10,
      sapling: 15,
      tree: 20,
      small: 20,
      medium: 25,
      large: 30,
    };

    if (!V.Maplebirch.orchard.temple) {
      wikifier("orchard_init", "temple", 1, "fruiter", 3);
      const add_temple_orchard = () => {
        const fruits = ["lemon", "apple", "orange", "pear"];
        const fruit_name = (Math.floor(Math.random() * 100) + 1) >= 95 ? "plum" : fruits[Math.floor(Math.random() * fruits.length)];
        const orchard = V.Maplebirch.orchard.temple;
        for (let i = 1; i <= 4; i++) {
          orchard[i] = clone(setup.maplebirchtending.fruiter_base);
          orchard[i].quality = Math.floor(Math.random() * 3 + 1);
          orchard[i].bed = i <= 2 ? "berry" : "fruiter";
        }
        Object.assign(orchard[0], {
          days: 4932,
          fruit: fruit_name,
          fruiter: fruit_name + "_seed",
          harvest: 1620,
          manure: 1,
          manureTime: 0,
          ripen: 3,
          size: "large",
          stage: 5,
          till: 1,
          water: 0,
          lock: true
        });
        Object.assign(orchard[1], {
          days: 277,
          fruit: "strawberry",
          fruiter: "strawberry_seed",
          harvest: 243,
          ripen: 0,
          size: "tree",
          water: 1,
          manure: 1,
          manureTime: 0,
          stage: 5,
          till: 1,
          lock: true
        });
        [2,3,4].forEach(i => orchard[i].till = -1);
        V.Maplebirch.FruitSeeds.temple = {
          planted: [fruit_name, "strawberry_seed"]
        };
      };
      add_temple_orchard();
    }

    const newFruitToPlants = (fruit, fruit_cn) => {
      let newFruit = ["grape","blueberry"];
      let cn_name = ["葡萄","蓝莓"];
      newFruit.pushUnique(fruit);
      cn_name.pushUnique(fruit_cn);
      for (let i = 0; i <= newFruit.length; i++) {
        if (![newFruit[i]].includes(Object.keys(setup.plants))) {
          const defaultindex = Object.values(setup.plants).map(plant => plant.index);
          const maxIndex = Math.max(...defaultindex);
          let index = maxIndex + i + 1;
          let cost = Math.floor(Math.random() * 31) + 25;
          let plural_name = window.modUtils.getMod('ModI18N') ? cn_name[i] : newFruit[i];
          let maplebirchPlants = {
            index: index,
            name: newFruit[i],
            plural: plural_name,
            plant_cost: cost,
            difficulty: 1,
            handheld: "maplebirch_" + newFruit[i],
            bed: "earth",
            type: "fruit", type_cn: "水果",
            days: 7,
            multiplier: 1,
            special: [],
            season: ["spring", "summer", "autumn", "winter"],
            ingredients: [],
            icon: "maplebirch_" + newFruit[i] + ".png",
          };
          setup.plants[maplebirchPlants.name] = maplebirchPlants;
          V.plants[maplebirchPlants.name] = {
            amount: 0,
            name: newFruit[i],
            plural: plural_name,
          }
        }
      }
      delete V.plants.undefined;
      delete setup.plants.undefined;
    }
    newFruitToPlants(fruit, fruit_cn);
  };

  function maplebirchPlantFruiterInOrchard(location, orchard, plantType) {
    orchard.fruiter = plantType;
    orchard.fruit = setup.maplebirchFruiter[plantType].fruit_name;
    orchard.size = "seed";
    orchard.stage = 1;
    orchard.days = 0;
    orchard.wateringTime = 0;
    orchard.manureTime = 0;
    V.Maplebirch.FruitSeeds[location].planted.pushUnique(plantType);
    V.tendingvars.plot_planted = 1;
    if (orchard.bed === "berry") {
      switch (orchard.quality) {
        case 4:
          orchard.ripen = 1;
          break;
        case 3:
          orchard.ripen = 2;
          break;
        case 2:
          orchard.ripen = 3;
          break;
        case 1:
          orchard.ripen = 4;
          break;
      } 
    }
    if (Weather.precipitation === "rain") orchard.water = 1;
    else if (T.irrigation > 0) {
    orchard.water = 1;
    T.irrigation--;
    }
  };

  function maplebirchFruiterClear(location, orchard) {
    if (orchard.baseQuality) {
      orchard.quality --;
      orchard.quality = Math.clamp(orchard.quality, orchard.baseQuality, 4);
      if (orchard.quality === orchard.baseQuality) delete orchard.baseQuality;
    }
    orchard.ripen = 0;
    orchard.till = 0;
    orchard.days = 0;
    orchard.fertiliserDecayTime = 0;
    orchard.fruiter = "none";
    orchard.fruit = "none";
    orchard.size = "none";
    orchard.stage = 0;
    orchard.orchard = 0;
    orchard.water = 0;
    orchard.wateringTime = 0;
    V.Maplebirch.FruitSeeds[location].planted.filter(fruit => fruit !== orchard.fruiter);
  };

  function unlockAllFruiter() {
    Object.values(setup.maplebirchFruiter).forEach(plant => {
      const FruitSeeds = plant.name === "banana sucker" ? "banana_seed" : plant.name.replace(/\s+/g, '_').replace(/_s.*/, '_seed');
      if (!V.Maplebirch.FruitSeeds.know.includes(FruitSeeds)) {
        V.Maplebirch.FruitSeeds.know.push(FruitSeeds);
      }
    });
  };


  function unsetMaplebirchTendingVars() {
    V.Maplebirch.tendingvars = {};
  };

  function maplebirchOrchardDay() {
    Object.entries(V.Maplebirch.orchard).forEach(([location, orchard]) => {
      orchard.forEach(orchard => {
        if (orchard.fruiter !== "none") {
          const sproutday = setup.maplebirchFruiter[orchard.fruiter].sprout_days;
          const saplingday = setup.maplebirchFruiter[orchard.fruiter].sapling_days;
          const treeday = setup.maplebirchFruiter[orchard.fruiter].tree_days;
          const fruitday = setup.maplebirchFruiter[orchard.fruiter].fruit_days;
          if (orchard.bed === "fruiter") {
            // 阶段升级(果树)
            if (orchard.stage >= 1 && orchard.stage <= 2 && orchard.water === 1) {
              orchard.days ++;
              if (orchard.days >= sproutday && orchard.size === "seed") {
                orchard.stage ++;
                orchard.size = "sprout";
                orchard.wateringTime = 0;
              }
              if (orchard.days >= saplingday && orchard.size === "sprout") {
                orchard.stage ++;
                orchard.size = "sapling";
                orchard.wateringTime = 0;
              }
            }
            if (orchard.stage >= 3 && orchard.stage <= 4 && orchard.manure === 1 && orchard.ripen === 0) {
              orchard.days ++;
              if (orchard.days >= treeday && orchard.size === "sapling") {
                orchard.stage ++;
                orchard.size = "small";
                orchard.manureTime = 0;
              }
              if (orchard.days >= fruitday) {
                orchard.stage ++;
                orchard.manureTime --;
                if (orchard.size === "small" && orchard.harvest >= 3) orchard.size = "medium";
                if (orchard.size === "medium" && orchard.harvest >= 9) orchard.size = "large";
              }
            }
            if (orchard.stage === 5 && orchard.ripen < 3) {
              maplebirchOrchardharvest(orchard);
              orchard.ripen ++;
            }
            if (orchard.size === "seed" || orchard.size === "sprout") orchard.wateringTime --;
            orchard.wateringTime = Math.clamp(orchard.wateringTime, 0, 10);
            if (orchard.size === "sapling") orchard.manureTime --;
            orchard.manureTime = Math.clamp(orchard.manureTime, 0, 10);
            orchard.water = orchard.wateringTime !== 0 ? 1 : 0;
            orchard.manure = orchard.manureTime !== 0 ? 1 : 0;
            if (orchard.fertiliserDecayTime) {
              orchard.fertiliserDecayTime --;
              orchard.fertiliserDecayTime = Math.clamp(orchard.fertiliserDecayTime, 0, 7);
            }
          } else if (orchard.bed === "berry") {
            // 阶段升级(莓丛)
            if (orchard.stage >= 1 && orchard.stage <= 3 && orchard.water === 1) {
              orchard.days ++;
              if (orchard.days >= sproutday && orchard.size === "seed") {
                orchard.stage ++;
                orchard.size = "sprout";
              }
              if (orchard.days >= saplingday && orchard.size === "sprout") {
                orchard.stage ++;
                orchard.size = "sapling";
              }
              if (orchard.days >= treeday && orchard.size === "sapling" && orchard.manure === 1) {
                orchard.manure = 0;
                orchard.stage ++;
                orchard.size = "tree";
              }
              orchard.water = 0;
            }
            if (orchard.stage === 4 && orchard.manure === 1) {
              orchard.days ++;
              orchard.ripen --;
              if (orchard.days >= fruitday && orchard.ripen === 0) {
                orchard.stage ++;
                orchard.manure = 0;
              }
            }
            orchard.wateringTime = 0;
            orchard.manureTime = 0;
            orchard.ripen = Math.clamp(orchard.ripen, 0, 4);
          }
        } 
      });
    });
  };

  // 果树果园收获
  function maplebirchOrchardharvest(orchard) {
    // 血月柠檬检测
    const hasI18N = modUtils.getMod('ModI18N');
    const type = Weather.bloodMoon ? "blood_lemon" : orchard.fruit;
    const tree_text = hasI18N ? setup.maplebirchFruiter[orchard.fruiter].cn_tree_name : setup.maplebirchFruiter[orchard.fruiter].tree_name;
    const fruit_text = hasI18N ? setup.maplebirchFruiter[orchard.fruiter].cn_fruit_name : setup.maplebirchFruiter[orchard.fruiter].fruit_name;
    let tending_amount = 0;
    if (type === "blood_lemon") {
      if (V.Maplebirch.Fruit[type] === undefined) {
        V.Maplebirch.Fruit[type] = {"tree_name": hasI18N ? "血柠树" : "blood_lemon tree", "fruit_name": hasI18N ? "血柠" : "blood_lemon", "amount": 0, "temp_amount": 0};
      } else if (V.Maplebirch.Fruit[type].fruit_name === undefined) {
        V.Maplebirch.Fruit[type] = {"tree_name": hasI18N ? "血柠树" : "blood_lemon tree", "fruit_name": hasI18N ? "血柠" : "blood_lemon", "amount": V.Maplebirch.Fruit[type].amount, "temp_amount": V.Maplebirch.Fruit[type].temp_amount};
        V.Maplebirch.Fruit[type].amount += V.plants[type].amount;
      }
      // 原版水果检测
      if (V.plants[type] === undefined) {
        V.plants[type] = {"name": type, "plural": hasI18N ? "血柠" : "blood_lemon", "amount": 0};
      } else if (V.plants[type].name === undefined) {
        V.plants[type] = {"name": type, "plural": hasI18N ? "血柠" : "blood_lemon", "amount": V.plants[type].amount};
        V.plants[type].amount += V.Maplebirch.Fruit[type].amount;
      }
    } else {
      if (V.Maplebirch.Fruit[type] === undefined) {
        V.Maplebirch.Fruit[type] = {"tree_name": tree_text, "fruit_name": fruit_text, "amount": 0, "temp_amount": 0};
      } else if (V.Maplebirch.Fruit[type].fruit_name === undefined) {
        V.Maplebirch.Fruit[type] = {"tree_name": tree_text, "fruit_name": fruit_text, "amount": V.Maplebirch.Fruit[type].amount, "temp_amount": V.Maplebirch.Fruit[type].temp_amount};
        V.Maplebirch.Fruit[type].amount += V.plants[type].amount;
      }
      // 原版水果检测
      if (V.plants[type] === undefined) {
        V.plants[type] = {"name": type, "plural": fruit_text, "amount": 0};
      } else if (V.plants[type].name === undefined) {
        V.plants[type] = {"name": type, "plural": fruit_text, "amount": V.plants[type].amount};
        V.plants[type].amount += V.Maplebirch.Fruit[type].amount;
      }
    }
    
    switch (orchard.size) {
      case "small":
        tending_amount = random(10, (currentSkillValue('tending') / 50) + 10);
        break;
      case "medium":
        tending_amount = random(10, (currentSkillValue('tending') / 25) + 20);
        break;
      case "large":
        tending_amount = random(10, (currentSkillValue('tending') / 10) + 30);
        break;
      case "tree":
        tending_amount = random(10, (currentSkillValue('tending') / 20) + 25);
        break;
      default:
        console.log("tending_amount错误");
    }
    tending_amount *= setup.maplebirchFruiter[orchard.fruiter].multiplier;
    switch (Math.clamp(orchard.quality, 1, 4)) {
      case 4:
        tending_amount *= 1.45;
        break;
      case 3:
        tending_amount *= 1.3;
        break;
      case 2:
        tending_amount *= 1.15;
        break;
      default:
        break;
    }
    if (V.backgroundTraits.includes("greenthumb")) {
      tending_amount *= 1.2;
    }
    tending_amount *= (V.tending_yield_factor / 5);
    tending_amount = Math.trunc(tending_amount);
    if (type === "blood_lemon") {
      V.Maplebirch.tendingvars.harvest_name = hasI18N ? "血柠" : "blood_lemon";
      // 复核检测
      if (V.Maplebirch.Fruittending) {
        V.Maplebirch.tendingvars.harvest = true;
        V.Maplebirch.Fruit[type].amount += tending_amount;
        V.Maplebirch.tendingvars.harvest_amount = tending_amount;
        V.Maplebirch.Fruit[type].temp_amount = 0;
        V.Maplebirch.Fruittending = undefined;
        orchard.harvest ++;
      }
    } else {
      // 复核检测
      V.Maplebirch.tendingvars.harvest_name = fruit_text;
      if (V.Maplebirch.Fruittending && orchard.ripen) {
        V.Maplebirch.tendingvars.harvest = true;
        V.Maplebirch.Fruit[type].amount += V.Maplebirch.Fruit[type].temp_amount;
        V.Maplebirch.tendingvars.harvest_amount = V.Maplebirch.Fruit[type].temp_amount;
        V.Maplebirch.Fruit[type].temp_amount = 0;
        V.Maplebirch.Fruittending = undefined;
        orchard.ripen = 0;
        orchard.harvest ++;
        if (orchard.fertiliserDecay !== 0) orchard.fertiliserDecay --;
      } else if (V.Maplebirch.Fruittending) {
        V.Maplebirch.tendingvars.harvest = true;
        V.Maplebirch.Fruit[type].amount += tending_amount;
        V.Maplebirch.tendingvars.harvest_amount = tending_amount;
        V.Maplebirch.Fruit[type].temp_amount = 0;
        V.Maplebirch.Fruittending = undefined;
        orchard.harvest ++;
        if (orchard.fertiliserDecay !== 0) orchard.fertiliserDecay --;
      } else {
        V.Maplebirch.Fruit[type].temp_amount += tending_amount;
      }
    } 
    V.plants[type].amount = V.Maplebirch.Fruit[type].amount;
    if (orchard.fertiliserDecay === 0) {
      V.Maplebirch.tendingvars.fertiliserDecay = true;
      orchard.fertiliserDecayTime = 0;
    }
    //园艺大师特质
    if (!V.backgroundTraits.includes("greenthumb") && V.tending === 1000 && V.plants_known.length >= 16 && 
    (V.fertiliser.used >= 40 || V.fertiliser.used >= 25 && V.farm_stage >=6)) {
    V.backgroundTraits.pushUnique("greenthumb");
    V.Maplebirch.tendingvars.gardeners = true;
    }
    // 果园土壤检测
    if (orchard.bed === "berry") {
      switch (orchard.quality) {
        case 4:
          orchard.ripen = 1;
          break;
        case 3:
          orchard.ripen = 2;
          break;
        case 2:
          orchard.ripen = 3;
          break;name
        case 1:
          orchard.ripen = 4;
          break;
      } 
    } else {
      orchard.ripen = 0;
    }
  };

  function maplebirchFruitSeedGet(type) {
    maplebirchRandomNum();
    let result = V.Maplebirch.Rng + currentSkillValue('tending') / 10;
    if (result >= 95 && ["apple","orange","lemon","pear","peach","plum","blackberry","strawberry"].includes(type) && !V.plants_known.includes(type + "_seed")) {
      V.Maplebirch.FruitSeeds.know.pushUnique(type + "_seed");
      V.plants_known.pushUnique(type + "_seed");
      T.FruitSeeds = true;
    }
  };

  function maplebirchFruitSeedToPlants(Boolean) {
    if (!mbContains(V.Maplebirch.FruitSeeds.know, ["cherry_seed", "date_seed"])) {
      const fruits = ["cherry", "date"];
      const cn_name = ["樱桃种子", "椰枣种子"];
      const defaultindex = Object.values(setup.plants).map(plant => plant.index);
      const maxIndex = defaultindex.length > 0 ? Math.max(...defaultindex) : 0;
      fruits.forEach((fruit, id) => {
        const name = fruit + "_seed";
        const plural_name = cn_name[id];
        const maplebirchPlants  = {
          index: maxIndex + id + 1,
          name: name,
          singular: plural_name,
          plural: plural_name,
          plant_cost: Math.floor(Math.random() * 100001) + 50000,
          difficulty: 1,
          handheld: "",
          bed: "earth",
          type: "fruit",
          type_cn: "水果",
          days: 30,
          multiplier: 10,
          special: [],
          season: ["spring", "autumn", "winter"],
          ingredients: [],
          icon: name === "date_seed" ? fruit + ".png" : "maplebirch_" + fruit + ".png",
          shop: ["supermarket"],
        };
        const Init = () => {
          if (!V.Maplebirch.FruitSeeds.know.includes(name)) {
            setup.plants[name] = maplebirchPlants ;
            V.plants[name] = {
              amount: 0,
              name: name,
              plural: plural_name,
              supermarket: 1
            };
          }
        };
        if (Boolean !== true) {if (Boolean !== "night") {Init();} else if (currentSkillValue('skulduggery') >= 500) {Init();}}
        const clear = setup.plants[name] || V.plants[name];
        if (clear) {
          if (Boolean === true) {
            if (V.plants[name].supermarket === 0 && V.plants[name].amount === 1) {
              V.Maplebirch.FruitSeeds.know.pushUnique(name);
              delete setup.plants[name];
              delete V.plants[name];
            }
          } else if (Boolean === false) {
            delete setup.plants[name];
            delete V.plants[name];
          }
        }
      });
    }
  }

  function maplebirchOrchardRemind() {
    const mod = V.Maplebirch;
    let Orchard = {};
    Object.entries(mod.orchard).forEach(([location, orchards]) => {
      Orchard[location] = [];
      orchards.forEach((orchard, index) => {
        if (orchard.fruiter !== "none" && mod.FruitSeeds.unlock.includes(location)) {
          const isBerry = orchard.bed === "berry";
          const ripen = isBerry ? (orchard.ripen === 0) : (orchard.ripen === 3);
          const water = (() => {
            if (orchard.bed === "fruiter") {
              return ["seed", "sprout"].includes(orchard.size) ? orchard.water === 0 : false;
            }
            return ["seed", "sprout", "sapling", "tree"].includes(orchard.size) ? orchard.water === 0 :false;
          })();
          const manure = (() => {
            if (orchard.bed === "fruiter") {
              return ["sapling", "small", "medium", "large"].includes(orchard.size) ? orchard.manure === 0 :false;
            }
            return ["sapling", "tree"].includes(orchard.size) ? orchard.manure === 0 :false;
          })();
          Orchard[location].push({
            index: index + 1,
            bed: orchard.bed,
            fruit: orchard.fruit,
            ripen: ripen,
            water: water,
            manure: manure,
            _raw: { 
              size: orchard.size,
              water: orchard.water,
              manure: orchard.manure,
            }
          });
        }
      });
    });
    const Text = [];
    Object.entries(Orchard).forEach(([location, orchards]) => {
      orchards.forEach(orchard => {
        const replacements = { temple: '神殿', lake_island: '湖中岛' ,fruiter: '果树圃',berry: '浆果圃'};
        const pattern = new RegExp(Object.keys(replacements).join('|'), 'g');
        const location_name = window.modUtils.getMod('ModI18N') ? location.replace(pattern, (match) => replacements[match]) : location;
        const bed_name = window.modUtils.getMod('ModI18N') ? orchard.bed.replace(pattern, (match) => replacements[match]) : orchard.bed;
        const fruit_name = window.modUtils.getMod('ModI18N') ? setup.maplebirchFruiter[(orchard.fruit + '_seed')].cn_fruit_name : orchard.fruit;
        const parts = [];
        if (orchard.ripen) parts.push("已经成熟了");
        if (orchard.water) parts.push("需要浇水");
        if (orchard.manure) parts.push("需要施肥");
        if (parts.length > 0) {
          const status = orchard.ripen ? parts[0] : parts.join('并且');
          let colour;
          if (orchard.ripen) {
            colour = "green";
          } else {
            const needWater = orchard.water;
            const needManure = orchard.manure;
            if (needWater && needManure) {colour = "blue";} else if (needWater) {colour = "purple";} else if (needManure) {colour = "orange";}
          }
          Text.pushUnique({
            text: `你在${location_name}的${orchard.index}号${bed_name}里种植的${fruit_name}${status}。`,
            colour: colour
          });
        }
      });
    });
    return Text;
  }
  
  return Object.freeze({
		Init: maplebirchFruiterInit,
    Plant: maplebirchPlantFruiterInOrchard,
    Unset: unsetMaplebirchTendingVars,
    DayCheck: maplebirchOrchardDay,
    SeedGet: maplebirchFruitSeedGet,
    Harvest: maplebirchOrchardharvest,
    Clear: maplebirchFruiterClear,
    UnlockSeed: unlockAllFruiter,
    ToPlants: maplebirchFruitSeedToPlants,
    Remind: maplebirchOrchardRemind,
	});
})();

$(document).on(":onWeatherChange", () => {
  if (V.Maplebirch.daily?.orchardRain || Weather.precipitation !== "rain") return;
  V.Maplebirch.daily.orchardRain = true;
  Object.entries(V.Maplebirch.orchard).forEach(([location, orchard]) => {
  orchard.forEach(orchard => (orchard.water = 1));
  });
});

DefineMacro("Orchardharvest", maplebirchFruit.Harvest);
DefineMacro("FruitSeedGet", maplebirchFruit.SeedGet);
