const maplebirchStatDisplay = {
	statChange(statType, amount, colorClass, condition = () => true) {
		amount = Number(amount);
		if (V.statdisable === "t" || !condition()) return document.createDocumentFragment();

		const fragment = document.createDocumentFragment();
		const span = document.createElement("span");
		span.className = colorClass;
		const prefix = amount < 0 ? "- " : "+ ";

		span.textContent = `${prefix.repeat(Math.abs(amount))}${statType}`;
		fragment.appendChild(document.createTextNode(" | "));
		fragment.appendChild(span);

		return fragment;
	},
	create(name, fn) {
		if (this[name] === undefined && !Macro.get(name)) {
			DefineMacro(name, function () {
				this.output.append(fn(...this.args));
			});
			this[name] = fn;
		} else {
			console.error(`A function with the name "${name}" already exists in maplebirchStatDisplay.`);
		}
	},
};
window.maplebirchStatDisplay = maplebirchStatDisplay;
// 罗宾
maplebirchStatDisplay.create("lrholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", -1, "teal"));
maplebirchStatDisplay.create("llrholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", -2, "teal"));
maplebirchStatDisplay.create("lllrholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", -3, "teal"));
maplebirchStatDisplay.create("grholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", 1, "lblue"));
maplebirchStatDisplay.create("ggrholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", 2, "lblue"));
maplebirchStatDisplay.create("gggrholiness", () => maplebirchStatDisplay.statChange("罗宾的神殿信仰", 3, "lblue"));
maplebirchStatDisplay.create("grpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", 1, "red"));
maplebirchStatDisplay.create("ggrpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", 2, "red"));
maplebirchStatDisplay.create("gggrpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", 3, "red"));
maplebirchStatDisplay.create("lrpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", -1, "green"));
maplebirchStatDisplay.create("llrpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", -2, "green"));
maplebirchStatDisplay.create("lllrpain", () => maplebirchStatDisplay.statChange("罗宾的痛苦", -3, "green"));
maplebirchStatDisplay.create("grarousal", () => maplebirchStatDisplay.statChange("罗宾的性欲", 1, "red"));
maplebirchStatDisplay.create("ggrarousal", () => maplebirchStatDisplay.statChange("罗宾的性欲", 2, "red"));
maplebirchStatDisplay.create("lrarousal", () => maplebirchStatDisplay.statChange("罗宾的性欲", -1, "green"));
maplebirchStatDisplay.create("llrarousal", () => maplebirchStatDisplay.statChange("罗宾的性欲", -2, "green"));
// 维安
maplebirchStatDisplay.create("lvlost", () => maplebirchStatDisplay.statChange("维安的迷失", -1, "teal"));
maplebirchStatDisplay.create("llvlost", () => maplebirchStatDisplay.statChange("维安的迷失", -2, "teal"));
maplebirchStatDisplay.create("lllvlost", () => maplebirchStatDisplay.statChange("维安的迷失", -3, "teal"));
maplebirchStatDisplay.create("gvlost", () => maplebirchStatDisplay.statChange("维安的迷失", 1, "red"));