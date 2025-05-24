window.maplebirchItems = (() => {
    const maplebirchItem = {
        vivian_envelope: {
            index: 0,
            name: "vivian envelope",
            cn_name: "维维安的信封",
            description: "一封崭新的信件，上面还有维维安的印章。",
            quality: "white",
            effect: "",
            effect_description:"",
            type: ["letter", "stackable"],
            icon: "vivian_envelope.png",
        },
        fate_dice: {
            index: 1,
            name: "fate dice",
            cn_name: "命运的骰子",
            description: "命运飘忽不定，你能抓住它指引的方向吗？",
            quality: "azure",
            effect: "gift of fate",
            effect_description:"启用后每周将随机从'诡术'、'舞蹈'、'护理'、'游泳'、'运动'、'家务'中的一种进行百分比增幅。",
            type: ["token", "light", "useable"],
            icon: "fate_dice.gif"
        },
    }

    function maplebirchItemsInit() {
        const sorted = Object.keys(maplebirchItem).sort();
        setup.maplebirchItems = {};
        
        sorted.forEach(s => {
            setup.maplebirchItems[s] = maplebirchItem[s];
        });
    }

    function maplebirchItemsGet(target) {
        const Items = V.Maplebirch.player.items;
        
        if (!Object.hasOwn(Items, target)) {
            Items[target] = maplebirchItem[target];
            Items[target].num = (Object.keys(Items).length - 1);
            delete Items[target].index;
            if (Items[target].type.includes("stackable") && Items[target].amount === undefined) {
                Items[target].amount = 0;
            }
        }   
    }

    function showItemDetail(key, MainId, SecondaryId, SecondaryCss) {
        if (T.itemLastRow) {
            T.itemLastRow.remove();
        }

        const sort = key.num;

        // 计算插入位置
        const Main = document.getElementById(MainId);
        const Secondary = document.getElementById(SecondaryId).offsetWidth;
        const Secondaryamount = document.querySelectorAll(SecondaryCss);
        
        const columnCount = Math.round((Main.offsetWidth - (Secondary * 2/3)) / Secondary);
        // 创建新行
        const newRow = document.createElement('div');
        newRow.className = 'maplebirch-item-detail-row';
        const insertPos = Math.ceil((sort + 1) / columnCount) * columnCount;
        if (Secondaryamount.length < columnCount) {
            newRow.style.width = ((Secondaryamount.length * 54 + (Secondaryamount.length - 1) * 6) - 22) + "px";
        } else {
            newRow.style.width = ((columnCount * 54 + (columnCount - 1) * 6) - 22) + "px";
        }
        // 插入并移动模板内容
        Main.insertBefore(newRow, Main.children[insertPos]);
        const templateContent = document.getElementById('itemInfoTemp');
        newRow.appendChild(templateContent);
        // 记录状态
        T.itemLastRow = newRow;
        V.test1 = insertPos;
        V.test2 = columnCount;
        V.test3 = sort;
    }

    return Object.freeze({
		Init: maplebirchItemsInit,
        Get: maplebirchItemsGet,
        Show: showItemDetail,
	});
})();
