(() => {
	// simple JS file
	console.log('fired! or loaded... or anything');

	// this is a single line comment
	var choice = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winorlose");

	function playGame() {
		// make the computer choose a random weapon
		computer = choice[Math.floor(Math.random() * choice.length)];
		var player_choice = player.value;

		//check for a tie first
		if (computer.toLowerCase() === player_choice.toLowerCase()) {
			//it's a tie
			status.textContent = "Tie! You live to shoot another day.";
		}

		else if (player_choice.toLowerCase() === "rock" ) {
			if (computer.toLowerCase() === "scissors") {
				//win
				status.textContent = `Win! ${player_choice} bests ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} bests ${player_choice}.`;
			}
		}

		else if (player_choice.toLowerCase() === "paper" ) {
			if (computer.toLowerCase() === "rock") {
				//win
				status.textContent = `Win! ${player_choice} bests ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} bests ${player_choice}.`;
			}
		}

		else if (player_choice.toLowerCase() === "scissors" ) {
			if (computer.toLowerCase() === "paper") {
				//win
				status.textContent = `Win! ${player_choice} bests ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} bests ${player_choice}.`;
			}
		}

		else {
			player.value = "";
			alert("You didn't pick a valid weapon... try again.")
		}
	}

	/*
	this
	is
	a
	block
	comment
	 */
	
	trigger.addEventListener("click", playGame);
})();
