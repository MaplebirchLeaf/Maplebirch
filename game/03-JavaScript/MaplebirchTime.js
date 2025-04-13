window.isMaplebirchTime = function(maplebirchtime) {
    switch (maplebirchtime) {
      case "RobinTempleTime":
        return isRobinTempleTime();
      case "SydneyTempleTime":
        return isSydneyTempleTime();
      default:
        return false;
    }
};

window.isRobinTempleTime = function() {
  const isMaplebirchRobinRank= ["initiate", "monk"].includes(V.Maplebirch.robin.rank);
  if (!isMaplebirchRobinRank) return false;

  const maplebirchRobinTime = 
    (!Time.schoolDay && !Time.isWeekEnd() && between(Time.hour, 9, 15)) || 
    ((Time.weekDay === 7 && Time.hour >= 21) || (Time.weekDay === 1 && Time.hour <= 6)) ||
    (Time.weekDay === 1 && between(Time.hour, 11, 12));

  const isMaplebirchRitualTime = isRobinTempleRitual();
  const isMaplebirchAnguishTime = isRobinTempleAnguish();
  const isMaplebirchExaminationTime = isRobinTempleExamination();

  return maplebirchRobinTime || (isMaplebirchRitualTime || isMaplebirchAnguishTime || isMaplebirchExaminationTime);
};

window.isSydneyTempleTime = function() {
  const fragment = document.createDocumentFragment();
    fragment.append(wikifier("sydneySchedule"));
    if (T.sydney_location === "temple") {
      return (
        (Time.weekDay === 1 && Time.hour < 6) || V.Maplebirch.sydney.retention === true
      );
    }
      return false;
};

// 午夜12时刷新
window.dailyMaplebirchCheck = function() {
  const fragment = document.createDocumentFragment();

  fragment.append(wikifier("maplebirch_daily_unset"));
  fragment.append(wikifier("maplebirch_daily_set"));
  fragment.append(dailyMaplebirchNPCEffects());
};

// 每日6时刷新点，含有每日变量
window.dailyMaplebirchReset =function() {
  const fragment = document.createDocumentFragment();

  fragment.append(wikifier("maplebirch_dawn_unset"));
  fragment.append(wikifier("maplebirch_dawn_set"));
};

// 每周刷新点，含有每周变量
window.weeklyMaplebirchReset =function() {
  const fragment = document.createDocumentFragment();

  fragment.append(wikifier("maplebirch_weekly_unset"));
  fragment.append(wikifier("maplebirch_weekly_set"));
  // 罗宾每周变量 
  if (window.modUtils.getMod('DomRobin')) {
    maplebirchDomRobinMoneyChange();
  } else {
    weekDayBaileyRobinExempt();
  }
};

