window.maplebirchFurniture = (() => {
    setup.maplebirchfurniture = setup.furniture;

	const Categories = Object.freeze({
		/* 通用类别 */
		bed: "bed",
		table: "table",
		chair: "chair",
		desk: "desk",
		wardrobe: "wardrobe",
		decoration: "decoration",
		windowsill: "windowsill",
		poster: "poster",
		wallpaper: "wallpaper",
		/* Kylar活动特别类别 */
		owlplushie: "owlplushie",
	});

	const Locations = Object.freeze({
		bedroom: "bedroom",
		cabin: "cabin",
		cottage: "cottage",
		lakeisland: "lakeisland"
	});

	let maplebirchtarget = Locations.lakeisland;

	function maplebirchFurnitureGet(category) {
		const area = V.furniture.lakeisland;
		const current = area[category];
		if (typeof current === "object" && current !== null) {
			const defaults = setup.maplebirchfurniture.get(current.id);
			const composite = Object.assign({}, defaults, current);
			return composite;
		} else {
			return null;
		}
	}
	
	function maplebirchFurnitureSet(id, category, overrides) {
		if (!setup.maplebirchfurniture.has(id)) {
			return false;
		}
		if (!Categories[category]) {
			return false;
		}
		const lakeisland = V.furniture[maplebirchtarget];

		lakeisland[category] = { id };
		if (typeof overrides === "object" && overrides !== null) {
			Object.assign(lakeisland[category], overrides);
		}
	}

	return Object.freeze({
		get: maplebirchFurnitureGet,
		set: maplebirchFurnitureSet,
		get maplebirchtarget() {
			return maplebirchtarget;
		},
	});
})();



