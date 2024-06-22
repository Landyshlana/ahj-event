import GoblinClick from "./game";


document.addEventListener('DOMContentLoaded', () => {
	const goblinPlay = new GoblinClick();
	goblinPlay.punshGoblin.bind(goblinPlay)();
})