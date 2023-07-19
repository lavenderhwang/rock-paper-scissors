const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
let playerScore = document.querySelector('.player-score span');
let computerScore = document.querySelector('.computer-score span');
const buttons = document.querySelectorAll('.btn');

/* GENERATING COMPUTER CHOICE */
function getComputerChoice() {
	let tempNum = Math.random() * 10;
	if (tempNum < 3) {
		return 'rock';
	} else if (tempNum < 6) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

/* PLAY ROUND */

let startPlayerScore = 0;
let startComputerScore = 0;
let winner;

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		winner = 'player';
		startPlayerScore++;
		playerScore.innerText = startPlayerScore;
	} else {
		winner = 'computer';
		startComputerScore++;
		computerScore.innerText = startComputerScore;
	}
	console.log(winner);
}

/* PLAY UNTIL 5*/

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playerChoice = button.innerText.toLowerCase();
		playRound(playerChoice, getComputerChoice());

		if (playerScore.innerText === '5' || computerScore.innerText === '5') {
			openPopup();
		}
	});
});

/* POPUP MODAL */

const winnerText = document.querySelector('.winner-text');

function declareWinner() {
	if (startPlayerScore > startComputerScore) {
		winnerText.innerText = 'Congrats! You win.';
	} else {
		winnerText.innerText = 'You lose. Better luck next time!';
	}
}

const popup = document.getElementById('popup');
const main = document.querySelector('.container');

function openPopup() {
	declareWinner();
	popup.classList.add('open-popup');
	main.classList.add('is-blurred');
}

function closePopup() {
	popup.classList.remove('open-popup');
	main.classList.remove('is-blurred');
	resetScores();
}

function resetScores() {
	startPlayerScore = 0;
	startComputerScore = 0;
	playerScore.innerText = '0';
	computerScore.innerText = '0';
}
