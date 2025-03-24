const robinChastityTest = new TimeEvent('onSec', 'robinChastityTest');

robinChastityTest.Cond(() => {
    return V.RobinTempleInvitation === "templetest" && (V.RobinChastitycheckTime === true || (Time.hour > 6 && Time.hour < 24));
})

robinChastityTest.Action(() => {
    robinChastityCheck();
});

window.robinChastityCheck = function() {
  let isRobinVirginity = C.npc.Robin.virginity.vaginal !== true || C.npc.Robin.virginity.penile !== true;
  if (V.RobinChastitycheckTime === true) {
    V.RobinTempleTestTip = true;
    V.RobinChastitycheckTime = undefined;
    V.RobinChastitycheckTime_lock = true;
    V.RobinChastityTestresult = true;
    const fragment = document.createDocumentFragment();
      if (isRobinVirginity) {
        V.RobinChastitycheck = "fail";
        fragment.append(wikifier("RobinChastityTestfail"));
      } else {
        V.RobinChastitycheck = "success";
        fragment.append(wikifier("RobinChastityTestsuccess"));
      }
  } else if (Time.hour > 6 && Time.hour < 24) {
    const fragment = document.createDocumentFragment();
      if (isRobinVirginity) {
        fragment.append(wikifier("RobinChastityTestfail"));
    } else {
        fragment.append(wikifier("RobinChastityTestsuccess"));
    }
  } 
};

window.setRobinGrace = function(value) {
  if (V.robin_grace === 100) return 100;
  if (typeof value === "number") {V.robin_grace = Math.max(0, Math.min(value, 100));}
  return V.robin_grace;
};

window.dailyUpdateRobinValue = function() {
  setRobinHoliness(setRobinHoliness() + 1);
  
  if (V.robin_grace === 100) return 100;
  if (typeof V.robin_grace !== "number") V.robin_grace = 0;
  let increment;
  if (!Time.schoolDay && !Time.isWeekEnd()) {
      increment = 3;
    } else if (!Time.schoolDay) {
      increment = 2;
    } else {
      increment = 1;
    }
  if (V.Maplebirch.Robin_pendant) {
    increment *= 2;
  }
  setRobinGrace(V.robin_grace + increment);
  return V.robin_grace;
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
    ["initiate", "monk"].includes(V.robin_temple_rank) && (V.isRobinTempleRitual === true)
  );
};

window.isRobinTempleAnguish = function() {
  return (
    ["initiate"].includes(V.robin_temple_rank) && (V.robin_anguish === true)
  );
};

window.isRobinTempleExamination = function() {
  return (
    ["initiate", "monk"].includes(V.robin_temple_rank) && (V.robin_examination === true)
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
        V.robin_templeWork = (Time.weekDay === 1 && V.robin_temple_rank === "initiate" ? "anguish" : "pray");
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
  };
  /*  V.Maplebirch.dailey
  const fragment = document.createDocumentFragment();

  fragment.append(wikifier("robinSchedule"));*/

  T.robin_location_message = T.robin_location;

  if (robin.holiness >= 50) T.robinStatus = "belief";
  else if (robin.holiness < 50) T.robinStatus = "unbelief";
  if (robin.lust >= 60) T.robingenitalsStatus = "Lust";

	if (robin.chastity.penis.includes("chastity belt") || robin.chastity.vagina.includes("chastity belt")) T.robinChastity = 1;
	if (robin.virginity.vaginal && robin.virginity.penile) T.robinVirgin = 1;
};

const maplebirchRobinTempleWork = new TimeEvent('onHour', 'maplebirchRobinTempleWork');

maplebirchRobinTempleWork.Cond(() => {
  statusCheck("Robin");
  return (T.robin_location === "temple" && ["initiate", "monk"].includes(V.robin_temple_rank) && V.temple_rank !== undefined && V.temple_rank !== "prospective");    
})

maplebirchRobinTempleWork.Action(() => {
  if (V.robin_templeWork === "garden") {
    V.temple_garden++;
  } else if (V.robin_templeWork === "quarters") {
    V.temple_quarters++;
  }
});

window.weekDayBaileyRobinExempt = function() {
  if (V.robin_grace === 100) return;
  if (["monk"].includes(V.robin_temple_rank) && V.robin_grace >= 80) {
    V.robinmoney += 400;
    setRobinGrace(V.robin_grace - 10);
  }
};
// Dom罗宾周收入联动
window.maplebirchDomRobinMoneyChange = function() {
  const fragment = document.createDocumentFragment();
  if (V.weeklyMoneyFixedChange && V.robin_grace) {
    fragment.append(wikifier("weeklymoneycheck"));
    V.weeklyMoneyFixedChange += V.robin_grace * 10;

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