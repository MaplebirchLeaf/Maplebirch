// 记忆技能
window.maplebirchMemory = function(amount, choose) {
  if (isNaN(amount)) paramError("memory", "amount", amount, "需要一个数字");
  amount = Number(amount);

  if (amount) {
    if (choose === "wraith") {
      V.Maplebirch.dissimilation += amount * (((1 - V.purity) / 500) + 1);
    } else if (choose === "holy") {
      V.Maplebirch.dissimilation += amount * ((V.purity / 500) + 1);
    } else {
      V.Maplebirch.memoryskill += amount * ((V.Maplebirch.Sanity / 250) + 1);
    }
  } 

  maplebirchMemoryClamp();
};
DefineMacro("memory", maplebirchMemory);

window.maplebirchMemoryClamp = function() {
  V.Maplebirch.memoryskill = Math.clamp(V.Maplebirch.memoryskill, 0, 1000);
};

// 恐惧值相关
window.fear = function(amount, multiplierOverride) {
  if (isNaN(amount)) paramError("fear", "amount", amount, "需要一个数字");
  if (multiplierOverride && isNaN(multiplierOverride)) paramError("fear", "multiplierOverride", multiplierOverride, "需要一个数字");
  amount = Number(amount);
  multiplierOverride = Number(multiplierOverride);

  let stressMod = Math.clamp((V.stress / 50), 1, 200);
  let traumaMod = Math.clamp((V.trauma / 25), 1, 200);
  let controlMod = (Math.clamp(V.control / 5), 1, 200);
  let willpowerMod = Math.clamp((V.willpower / 5), 1, 200);
  let sanityMod = Math.clamp((V.Maplebirch.Sanity / 5), 1, 200);
  
  if (amount) {
    if (multiplierOverride) {
      V.Maplebirch.fear += amount * multiplierOverride;
    } else if (amount > 0) {
      V.Maplebirch.fear += amount * (stressMod * 0.4 + traumaMod * 0.3 + (200 - sanityMod) * 0.2 + (200 - controlMod) * 0.1) * 0.8;
    } else { 
      V.Maplebirch.fear += amount * (sanityMod * 0.35 + willpowerMod * 0.3 + controlMod * 0.25 + (200 - stressMod) * 0.1) * 0.8;
    }
  }
    //睡眠障碍sleeptrouble，噩梦/梦魇nightmares，焦虑anxiety
      /*V.sleeptrouble = V.trauma >= 1 ? 1 : 0;
      V.nightmares = V.trauma >= (V.traumamax / 10) * 1 ? 1 : 0;
  
      if (V.trauma >= (V.traumamax / 10) * 7) {
        V.anxiety = 2;
      } else if (V.trauma >= (V.traumamax / 10) * 2) {
        V.anxiety = 1;
      } else {
        V.anxiety = 0;
      }
  
      V.flashbacks = V.trauma >= (V.traumamax / 10) * 8 ? 1 : 0;
  
      if (V.trauma >= (V.traumamax / 10) * 6) {
        V.panicattacks = 2;
      } else if (V.trauma >= (V.traumamax / 10) * 4) {
        V.panicattacks = 1;
      } else {
        V.panicattacks = 0;
      }*/

      //updateHallucinations(); 幻觉
  fearClamp();
};
DefineMacro("fear", fear);

window.fearClamp = function () {
  if (V.Maplebirch.fear >= V.Maplebirch.fearmax) V.willpower -= (V.Maplebirch.fear - V.Maplebirch.fearmax) / 50;

  V.Maplebirch.fear = Math.clamp(V.Maplebirch.fear, 0, V.Maplebirch.fearmax);
};
DefineMacro("fearclamp", fearClamp);
