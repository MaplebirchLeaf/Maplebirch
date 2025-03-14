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
  const isMaplebirchRobinRank= ["initiate", "monk"].includes(V.robin_temple_rank);
  if (!isMaplebirchRobinRank) return false;

  const maplebirchRobinTime = 
    (!Time.schoolDay && !Time.isWeekEnd() && between(Time.hour, 9, 15)) || 
    ((Time.weekDay === 7 && Time.hour >= 21) || (Time.weekDay === 1 && Time.hour <= 6)) ||
    (Time.weekDay === 1 && between(Time.hour, 11, 12));

  const isMaplebirchRitualTime = isRobinTempleRitual();
  const isMaplebirchAnguishTime = isRobinTempleAnguish();
  const isMaplebirchExaminationTime = isRobinTempleExamination()

  return maplebirchRobinTime || (isMaplebirchRitualTime || isMaplebirchAnguishTime || isMaplebirchExaminationTime);
};

window.isSydneyTempleTime = function() {
  const fragment = document.createDocumentFragment();
    fragment.append(wikifier("sydneySchedule"));
    if (T.sydney_location == "temple") {
      return (
        (Time.weekDay === 1 && Time.hour < 6)  
      );
    }
      return false;
};