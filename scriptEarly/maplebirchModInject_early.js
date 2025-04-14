// 此处来源于Dom罗宾模组，话说如果要其它语言倒是可以在这该部分？
(() => {
  const modUtils = window.modUtils;
  const logger = modUtils.getLogger();
  const modSC2DataManager = window.modSC2DataManager;
  logger.log('[maplebirchModInject_early] 开始执行');
  
  function changeRobinSexFinish() {
    let targetPassages = [
        'Robin Bath Sex Finish',
        'Robin Mischief Sex Finish',
        'Robin Unwrap Sex Finish',
        'Robin Bush Sex Finish'
    ];

    targetPassages.forEach(passageName => {
        const passage2 = modUtils.getPassageData(passageName);
        if (!passage2) {
          logger.error(`[maplebirchMod] passage2未找到: ${passageName}`);
          return;
        }

        logger.log(`[maplebirchMod] 处理passage2: ${passage2.name}`);
        let regex = new RegExp("<br><br>.*", 'g');
        let content = passage2.content;

        // 执行替换
        let count = 0;
        let contentReplaced = content.replace(regex, (match) => {
          count++;
          if (content.match(regex).length === 4) {
            console.log("当前第一match成功替换");
            return count === 2 ? match.replace("<br><br>", "<br><br>\n<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>") : match;
          } else if (content.match(regex).length === 5) {
            console.log("当前第二match成功替换");
            return count === 4 ? match.replace("<br><br>", "<br><br>\n<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>") : match;
          } else if (content.match(regex).length === 6) {
            console.log("当前第三match成功替换");
            return count === 4 ? match.replace("<br><br>", "<br><br>\n<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>") : match;
          } else {
            console.log("当前match不做处理");
            return match;
          }
        });
        console.log("replace的结果是：" + contentReplaced)

        // 更新前做内容对比
        if (contentReplaced !== content) {
          modUtils.updatePassageData(
            passage2.name,
            contentReplaced,
            passage2.tags,
            passage2.id
          );
            logger.log(`[maplebirchMod] 成功更新: ${passage2.name}`);
        } else {
            logger.warn(`[maplebirchMod] 未检测到有效修改: ${passage2.name}`);
        }
    });
  }

  function changeRoomRobinSexFinish() {
    let targetPassages = [
      'Bed Robin Sex Finish',
      'Robin Room Bed Sex Finish'
    ];
    targetPassages.forEach(passageName => {
      const passage2 = modUtils.getPassageData(passageName);
      if (!passage2) {
        logger.error(`[maplebirchMod] passage2未找到: ${passageName}`);
        return;
      }

      logger.log(`[maplebirchMod] 处理passage2: ${passage2.name}`);
      let regex = new RegExp("<<His>>.*", 'g');
      let content = passage2.content;

        // 执行替换
        let count = 0;
        let contentReplaced = content.replace(regex, (match) => {
          count++;
          if (passageName === 'Bed Robin Sex Finish') {
            if (content.match(regex).length === 1) {
              console.log("当前match是：" + match);
              if (count === 1) {
                let replaceString = match.replace("<<His>>", "<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>\n<<His>>");
                console.log("BedRobin成功修改");
                return replaceString;
              } else {
                console.log("当前match不做处理");
                return match;
              }
            } else if (window.modUtils.getMod('DomRobin')) {
              console.log("当前match是：" + match);
              if (count === 1) {
                console.log("当前match不做处理");
                return match;
              } else {
                let replaceString = match.replace("<<His>>", "<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>\n<<His>>");
                console.log("BedRobin成功修改");
                return replaceString;
              }
            }
          } else if (passageName === 'Robin Room Bed Sex Finish') {
            console.log("当前match是：" + match);
            if (count === 1) {
              console.log("当前match不做处理");
              return match;
            } else {
              let replaceString = match.replace("<<His>>", "<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>\n<<His>>");
              console.log("RobinRoomBed成功修改");
              return replaceString;
            }
          } else {
            console.log("当前match不做处理");
            return match;
          }
      });
      console.log("replace的结果是：" + contentReplaced)
      
      // 更新前做内容对比
      if (contentReplaced !== content) {
        modUtils.updatePassageData(
          passage2.name,
          contentReplaced,
          passage2.tags,
          passage2.id
        );
        logger.log(`[maplebirchMod] 成功更新: ${passage2.name}`);
      } else {
        logger.warn(`[maplebirchMod] 未检测到有效修改: ${passage2.name}`);
      }
    });
  }

  function changeOtherRobinSexFinish() {
    let targetPassages = [
      'Canteen Robin Sex Finish',
      'Robin Cinema Sex Finish'
    ];
    targetPassages.forEach(passageName => {
      const passage2 = modUtils.getPassageData(passageName);
      if (!passage2) {
          logger.error(`[maplebirchMod] passage2未找到: ${passageName}`);
          return;
      }

      logger.log(`[maplebirchMod] 处理passage2: ${passage2.name}`);
      let regex = new RegExp("<</if>>.*", 'g');
      let content = passage2.content;

      // 执行替换
      let count = 0;
      let contentReplaced = content.replace(regex, (match) => {
          count++;
          if (passageName === 'Canteen Robin Sex Finish') {
            console.log("当前match是：" + match);
            if (count === 2) {
              let replaceString = match.replace("<</if>>", "<</if>>\n<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>");
              console.log("CanteenRobin成功修改");
              return replaceString;
            } else {
              console.log("当前match不做处理");
              return match;
            }
          } else if (passageName === 'Robin Cinema Sex Finish') {
            if (count === 2) {
              let replaceString = match.replace("<</if>>", "<</if>>\n<<robinFinishMaplebirch>><<RobinTempleInvitation_1>>");
              console.log("RobinCinema成功修改");
              return replaceString;
            } else {
              console.log("当前match不做处理");
              return match;
            }
          } else {
            console.log("当前match不做处理");
            return match;
          }
      });
      console.log("replace的结果是：" + contentReplaced)
      
      // 更新前做内容对比
      if (contentReplaced !== content) {
        modUtils.updatePassageData(
          passage2.name,
          contentReplaced,
          passage2.tags,
          passage2.id
        );
        logger.log(`[maplebirchMod] 成功更新: ${passage2.name}`);
      } else {
        logger.warn(`[maplebirchMod] 未检测到有效修改: ${passage2.name}`);
      }
    });
  }

  function maplebiechChangeDolTraits() {
    const passage2 = modUtils.getPassageData('Traits');
    if (passage2) {
      logger.log(`[maplebirchMod] 处理passage2: ${passage2.name}`);
      let content = passage2.content;
      let regex = new RegExp("name: .*", 'g');

      if (content.match(regex)) {
        let count = 0;
        let contentReplaced = content.replace(regex, function(match) {
          count++;
          if (window.modUtils.getMod('ModI18N')) {
            if(count === 4) {
              console.log("承诺仪式特质加载成功");
              return match.replace("承诺仪式：<<= $templePromised.replace('Sydney','悉尼')>>", "<<MaplebirchTemplePromised>>");
            } else if (count === 5) {
              console.log("破碎承诺特质加载成功");
              return match.replace("破碎的承诺：<<= $templePromised.replace('Sydney','悉尼')>>", "<<MaplebirchTemplePromisedBroken>>");
            } else {
              console.log("当前match不做处理");
              return match;
            }
          } else {
            if(count === 4) {
              console.log("承诺仪式特质加载成功");
              return match.replace("Rite of Promise: $templePromised", "<<MaplebirchTemplePromised>>");
            } else if (count === 5) {
              console.log("破碎承诺特质加载成功");
              return match.replace("Broken Promise: $templePromised", "<<MaplebirchTemplePromisedBroken>>");
            } else {
              console.log("当前match不做处理");
              return match;
            }
          }
        })

        console.log("replace的结果是：" + contentReplaced)
        modUtils.updatePassageData(
          passage2.name,
          contentReplaced,
          passage2.tags,
          passage2.id,
        );
      } else {
        logger.error(`[maplebirchModInject_early] 特质passage信息异常: [${passage2.name}]`);
      }
    } else {
      logger.error(`[maplebirchModInject_early] 特质获取passage信息失败`);
    }
  }

  function changeRobinAnguishTalk() {
    // 多语言处理器配置
    let processors = {
      cn: { // 中文处理
        'Temple Vigil 7'(content) {
          let count = 0;
          return content.replace(/.*悉尼.*/g, (match) => {
          count++;
          switch (count) {
            case 2:
              return match.replace("悉尼", "悉尼<<robin_anguish_talk_4>>");
            case 3:
              return match.replace(
                "悉尼紧紧地抱住你，你回应般地用麻木而颤抖的双臂环住了<<person6>><<him>>",
                "悉尼<<robin_anguish_talk_4>>紧紧地抱住你，你回应般地用麻木而颤抖的双臂环住了<<person6>><<him>><<if [\"initiate\"].includes(V.robin_temple_rank)>>们<</if>>"
              );
            default:
              return match;
          }
        });
      },
      'Temple Vigil 8'(content) {
        // 第一阶段替换
        let phase1Count = 0;
        let tempContent = content.replace(/.*悉尼.*/g, (match) => {
          phase1Count++;
          return phase1Count === 1 
            ? match.replace("悉尼", "悉尼<<robin_anguish_talk_4>>")
            : match.replace("悉尼", "悉尼<<if [\"initiate\"].includes(V.Maplebirch.robin.rank)>>和罗宾<</if>>");
        });
  
        // 第二阶段替换
        return tempContent.replace(/四/g, () => {
          return '<<if ["initiate"].includes(V.Maplebirch.robin.rank)>>五<<else>>四<</if>>';
        });
      },
      'Temple Vigil 10'(content) {
        let count = 0;
        return content.replace(/.*悉尼.*/g, (match) => {
          return ++count === 1 
            ? match.replace("悉尼", "<<robin_anguish_talk_5>>\n悉尼")
            : match;
        });
      }
    },
    en: { // 英文处理（示例）
      'Temple Vigil 7'(content) {
        return content.replace(/Sydney/g, "Sydney<!-- 要改变的内容 -->");
      }
        // 其他英文处理函数...
      }
    };

    // 获取当前语言
    let hasI18N = window.modUtils.getMod('ModI18N');
    let lang = hasI18N ? 'cn' : 'en';
    
    // 目标段落处理
    [
      'Temple Vigil 7',
      'Temple Vigil 8',
      'Temple Vigil 10'
    ].forEach(passageName => {
      const passage2 = modUtils.getPassageData(passageName);
      if (!passage2) {
        logger.error(`[maplebirchMod] Passage not found: ${passageName}`);
        return;
      }

      // 获取处理器
      let processor = processors[lang]?.[passageName];
      if (!processor) {
        logger.warn(`[maplebirchMod] No ${lang} processor for: ${passageName}`);
        return;
      }

      // 执行修改
      let newContent = processor(passage2.content);
      if (newContent !== passage2.content) {
        modUtils.updatePassageData(
          passage2.name,
          newContent,
          passage2.tags,
          passage2.id
        );
        logger.log(`[maplebirchMod] Updated ${lang} ${passageName}`);
      }
    });
  }

  function maplebirchNPCi18nNameInit() {
    let targetPassages = [
      'Statistics',
      'Widgets Settings'
    ];

    targetPassages.forEach(passageName => {
      const passage2 = modUtils.getPassageData(passageName);
      if (!passage2) {
        logger.error(`[maplebirchMod] passage2未找到: ${passageName}`);
        return;
      }

      if (window.modUtils.getMod('ModI18N')) {
        logger.log(`[maplebirchMod] 处理passage2: ${passage2.name}`);
        // 放宽正则表达式，允许空格和换行
        let regex = new RegExp(
          "[\\s\\S]*replace\\s*\\(\\s*\"Niki\"\\s*,\\s*\"尼奇\"\\s*\\)[\\s\\S]*",
          'g'
        );
        let content = passage2.content;

        let count = 0;
        let contentReplaced = content.replace(regex, (match) => {
          count++;
          console.log("汉化NPC名字注入成功");
          // 替换为新增多个replace
          return match.replace(
            "replace(\"Niki\",\"尼奇\")",
            "replace(\"Vivian\",\"维安\").replace(\"Karasveil\",\"卡拉斯维尔\").replace(\"Igniharp\",\"伊格尼哈普\").replace(\"Noctyaph\",\"诺克迪亚弗\").replace(\"Niki\",\"尼奇\")"
          );
        });
        console.log("replace的结果是：" + contentReplaced)

        // 更新前做内容对比
        if (contentReplaced !== content) {
          modUtils.updatePassageData(
            passage2.name,
            contentReplaced,
            passage2.tags,
            passage2.id
          );
            logger.log(`[maplebirchMod] 成功更新: ${passage2.name}`);
        } else {
            logger.warn(`[maplebirchMod] 未检测到有效修改: ${passage2.name}`);
        }
      } else {
        logger.log(`未检测到i18n汉化包无需注入`);
      }
    });
  }

  modSC2DataManager.getAddonPluginManager().registerAddonPlugin(
    'maplebirch', //  mod名称
    'maplebirch1', // 插件名称，必须唯一，一个mod可以挂多个插件，可以使用mod名称
    {

        // 参见类型定义：src/BeforeSC2/AddonPlugin.ts
        // export type AddonPluginHookPointEx =
        // AddonPluginHookPoint
        // & AddonPluginHookPointExOptional
        // & AddonPluginHookPointExMustImplement
        // & AddonPluginHookPointWhenSC2;
      registerMod: async(addonName, mod, modZip) => {
        // 其他mod使用addonPlugin注册到本插件时执行
        // !!!!! 必须实现此钩子 !!!!!(既然说是必须就不删了)
        console.log('[maplebirchModInject_early]', '  ', '其他mod注册到本mod时执行');
      },

      afterPatchModToGame: async() => {
        // 所有 mod 数据覆盖到游戏后
        // 可选钩子
        console.log('[maplebirchModInject_early]', '  ', '所有 mod 数据覆盖到游戏后');
        changeRobinSexFinish();
        changeRoomRobinSexFinish();
        changeOtherRobinSexFinish();
        maplebiechChangeDolTraits();
        changeRobinAnguishTalk();
        maplebirchNPCi18nNameInit();
      }
    },
  );

  modSC2DataManager.getModLoadController().addLifeTimeCircleHook(
    'maplebirch2',
    {
      // 监听每个模组加载完成事件
      ModLoaderLoadEnd: async () => {
        // ModLoader加载完毕后
        // 这是SC2开始执行前，ModLoader启动完成后，游戏启动前，的最后一个钩子
        // 可选钩子
        if (window.modUtils.getMod('Simple Frameworks')) {
          maplebirchSFModInit();
          console.log('检测到 Simple Frameworks 已加载，现在执行我的模组逻辑');
          logger.log(`[maplebirchMod] 成功检测: Simple Frameworks {v:2.0.5}`);
        } else {
          console.log('错误，未检测到 Simple Frameworks');
          logger.error(`[maplebirchMod] 未检测到有: Simple Frameworks {v:2.0.5}`);
        }
      }
    }
  );
})();