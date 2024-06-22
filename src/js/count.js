export default class Count {
	constructor() {
		this.countDefeat = 0;
		this.countVictory = 0;
		this.defeat = document.querySelector(".defeat");
		this.victory = document.querySelector(".victory");
	}
	increaseDefeat() {
		this.countDefeat++;
		this.defeat.innerText = this.countDefeat;
	}

	increaseVictory() {
		this.countVictory++;
		this.victory.innerText = this.countVictory;
	}
}