window.robinChastityCheck = function() {
  const isRobinVirginity = C.npc.Robin.virginity.vaginal !== true || C.npc.Robin.virginity.penile !== true;
  if (V.RobinChastitycheckTime) {
    delete V.RobinChastitycheckTime;
    V.RobinTempleTestTip = true;
    V.RobinChastitycheckTime_lock = true;
    V.RobinChastityTestresult = true;
    const fragment = document.createDocumentFragment();
      if (isRobinVirginity) {
        V.RobinChastitycheck = "fail";
        fragment.append(wikifier("RobinChastityTestfail"));
        if (V.RobinChastityFire) {
          fragment.append(wikifier("RobinChastityTestsuccess"));
        }
      } else {
        V.RobinChastitycheck = "success";
        fragment.append(wikifier("RobinChastityTestsuccess"));
      }
  } else if (Time.hour > 6 && Time.hour < 24) {
    const fragment = document.createDocumentFragment();
      if (isRobinVirginity) {
        fragment.append(wikifier("RobinChastityTestfail"));
        V.Maplebirch.robin.temple_invitation = "ChastityTestfail";
        if (V.RobinChastityFire) {
          fragment.append(wikifier("RobinChastityTestsuccess"));
          V.Maplebirch.robin.temple_invitation = "ChastityTestsuccess";
        }
    } else {
        fragment.append(wikifier("RobinChastityTestsuccess"));
        V.Maplebirch.robin.temple_invitation = "ChastityTestsuccess";
    }
  } 
};

window.setRobinGrace = function(value) {
  if (V.Maplebirch.robin.grace === 100) return 100;
  if (typeof value === "number") {V.Maplebirch.robin.grace = Math.max(0, Math.min(value, 100));}
  return V.Maplebirch.robin.grace;
};

window.dailyUpdateRobinValue = function() {
  statusCheck("Robin");
  if (T.robinStatus.includes("belief")) {
    setRobinHoliness(setRobinHoliness() + 1);
  } else if (T.robinStatus.includes("desert")) {
    setRobinHoliness(setRobinHoliness() - 1);
  }
  
  if (V.Maplebirch.robin.grace === 100) return 100;
  if (typeof V.Maplebirch.robin.grace !== "number") V.Maplebirch.robin.grace = 0;
  let increment;
  if (Time.weekDay === 1) {
    increment = 3;
  } else if (!Time.schoolDay && !Time.isWeekEnd()) {
    increment = 2;
  } else if (!Time.schoolDay) {
    increment = 1;
  } else {
    increment = -1;
  }
  if (V.Maplebirch.Robin_pendant && increment >= 0) {
    increment *= 2;
  }
  setRobinGrace(V.Maplebirch.robin.grace + increment);
  return V.Maplebirch.robin.grace;
};

window.initRobinHoliness = function(initialValue = 0) {
  setRobinHoliness(initialValue);
};

window.setRobinHoliness = function(value) {
  C.npc = C.npc || {};
  C.npc.Robin = C.npc.Robin || { holiness: 0 };

  if (typeof value === "undefined") {
    return C.npc.Robin.holiness;
  }

  if (typeof value !== "number") {
    return C.npc.Robin.holiness;
  }

  C.npc.Robin.holiness = Math.max(0, Math.min(value, 200));
  return C.npc.Robin.holiness;
};

window.isRobinTempleRitual = function() {
  return (
    ["initiate", "monk", "priest"].includes(V.Maplebirch.robin.rank) && (V.isRobinTempleRitual === true)
  );
};

window.isRobinTempleAnguish = function() {
  return (
    ["initiate"].includes(V.Maplebirch.robin.rank) && (V.Maplebirch.robin.anguish === true)
  );
};

window.isRobinTempleExamination = function() {
  return (
    ["initiate", "monk", "priest"].includes(V.Maplebirch.robin.rank) && (V.Maplebirch.robin.examination === true)
  );
};

window.maplebirchRobinCheck = function() {
  const robin = C.npc.Robin;

  if (T.robin_location === "temple") {
    switch (Time.hour) {
      case 1: case 2: case 3: case 4: case 5:
        V.robin_templeWork = (Time.weekDay === 1? "sleep" : "pray");
        break;
      case 6:
        V.robin_templeWork = "pray";
        break;
      case 9: case 10:
        V.robin_templeWork = "garden";
        break;
      case 11: case 12:
        V.robin_templeWork = (Time.weekDay === 1 && V.daily.massAttended !== 1? "mass" : "pray");
        break;
      case 13: case 14: case 15:
        V.robin_templeWork = "quarters";
        break;
      case 21: case 22:
        V.robin_templeWork = (Time.weekDay === 1 && V.Maplebirch.robin.rank === "initiate" ? "anguish" : "pray");
        break;
      case 23: case 0:
        V.robin_templeWork = (Time.weekDay === 7? "sleep" : "pray");
        break;
      default:
        V.robin_templeWork = "pray";
    }
    if (Time.weekDay === 1 && Time.hour === 0) {
      V.robin_templeWork = "sleep";
    }
  } else {
    delete V.robin_templeWork;
  }

  T.robin_location_message = T.robin_location;

  if (robin.holiness >= 120) {
    if (robin.lust >= 60) {
      T.robinStatus = "belief lust";
    } else {
      T.robinStatus = "belief";
    }
  } else if (robin.holiness < 80) {
    if (robin.lust >= 60) {
      T.robinStatus = "desert lust";
    } else {
      T.robinStatus = "desert";
    }
  } else {
    if (robin.lust >= 60) {
      T.robinStatus = "lust";
    } else {
      T.robinStatus = "";
    }
  }

	if (robin.chastity.penis.includes("chastity belt") || robin.chastity.vagina.includes("chastity belt")) {
    T.robinChastity = 1;
    V.Maplebirch.robin.chastitybelt = true;
  }
	if (robin.virginity.vaginal && robin.virginity.penile) {T.robinVirgin = 1;}
  if (robin.chastity.penis !== "chastity belt" || robin.chastity.vagina !== "chastity belt") {
    V.Maplebirch.robin.chastitybelt = false;
    V.Maplebirch.robin.Chastityask = undefined;
  }
};

// Dom罗宾周收入联动
window.maplebirchDomRobinMoneyChange = function() {
  const fragment = document.createDocumentFragment();
  if (V.weeklyMoneyFixedChange && V.Maplebirch.robin.grace) {
    fragment.append(wikifier("weeklymoneycheck"));
    V.weeklyMoneyFixedChange += V.Maplebirch.robin.grace * 10;

    V.robinmoney += V.weeklyMoneyFixedChange + V.weeklyMoneyRandomChange - V.rentShouldPay;
    if (V.robinmoney < 0 && V.robinpaid !== 1) {
      if (!V.robinSoldConsole && V.robinconsole === 1 && V.robinconsolelost !== 1) {
        V.robinSoldConsole = true;
        V.robinmoney += 400;
        if (V.robinmoney < 0) V.robinmoney = 0;
      } else {
        V.robinInDebt = true;
        V.robinmoney = 0;
      }
    }
    if (V.weeklyMoneyFixedChange >= 3700) {
      if (V.robinPayBothMessage === undefined)V.robinPayBothMessage = 1;
      if (!V.robinPaySelfTalked)V.robinPaySelfMessage = 1;
      V.robinCouldPaySelf = true; 
    } else if (V.weeklyMoneyFixedChange >= 1700) {
      V.robinCouldPaySelf = true;
      if (!V.robinPaySelfTalked) V.robinPaySelfMessage = 1;
    } else {
      V.robinCouldPayBoth = false;
      V.robinCouldPaySelf = false;
    }
  }
};

window.isRobinRitualSeenLoction = function() {
  let locations = ["在孤儿院的大厅", "在学校的食堂", "在购物中心", "在公园", "在沙滩"]
  let others = locations.filter(loc => loc !== T.FirstRobinSeen);
  others = others.sort(() => Math.random() - 0.5);
  let fourRandom = others.slice(0, 4);
  let combined = [T.FirstRobinSeen, ...fourRandom].sort(() => Math.random() - 0.5);
  T.RobinSeen = combined;

  T.RobinMapping = {
    "在孤儿院的大厅": "orphanage",
    "在学校的食堂": "canteen",
    "在购物中心": "shopping_Centre",
    "在公园": "park",
    "在沙滩": "beach"
  };

  T.RobinSeen1 = T.RobinSeen[0];
  T.answer1 = T.RobinMapping[T.RobinSeen1];

  T.RobinSeen2 = T.RobinSeen[1];
  T.answer2 = T.RobinMapping[T.RobinSeen2];

  T.RobinSeen3 = T.RobinSeen[2];
  T.answer3 = T.RobinMapping[T.RobinSeen3];

  T.RobinSeen4 = T.RobinSeen[3];
  T.answer4 = T.RobinMapping[T.RobinSeen4];

  T.RobinSeen5 = T.RobinSeen[4];
  T.answer5 = T.RobinMapping[T.RobinSeen5];
};