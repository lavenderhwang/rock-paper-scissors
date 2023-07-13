let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
	let tempNum = Math.random() * 10;
	let response;

	if (tempNum < 3) {
		response = 'Rock';
	} else if (tempNum < 6) {
		response = 'Paper';
	} else {
		response = 'Scissors';
	}

	return response;
}

function roundResponse(whoWon, a, b) {
	if (whoWon == 'player') {
		response = 'You win! ' + a + ' beats ' + b;
	} else {
		response = 'You lose! ' + b + ' beats ' + a;
	}
	return response;
}

function playRound(playerSelection, computerSelection) {
	let winner;

	if (
		(playerSelection === 'rock' && computerSelection === 'Scissors') ||
		(playerSelection === 'paper' && computerSelection === 'Rock') ||
		(playerSelection === 'scissors' && computerSelection === 'Paper')
	) {
		winner = 'player';
		playerScore++;
	} else {
		winner = 'computer';
		computerScore++;
	}

	return roundResponse(winner, playerSelection, computerSelection);
}

function displayScore() {
	const score = document.createElement('p');
	score.classList.add('feedback');
	score.innerText = 'Score: ' + playerScore + ' - ' + computerScore;
	results.appendChild(score);
}

function addFinalScoreText(result) {
	const scoreText = document.createElement('p');
	scoreText.classList.add('finalScoreText', 'feedback');
	scoreText.innerText = result;
	results.appendChild(scoreText);
}

function checkWinner() {
	if (computerScore == 5 || playerScore == 5) {
		if (computerScore === playerScore) {
			addFinalScoreText('Good game! You tied.');
		} else if (computerScore > playerScore) {
			addFinalScoreText('You lost. Better luck next time!');
		} else {
			addFinalScoreText('Congrats! You won.');
		}
		return true;
	}
}

function playRoundResults(play) {
	const result = document.createElement('p');
	result.classList.add('feedback');
	result.textContent = playRound(play, getComputerChoice());

	results.appendChild(result);

	displayScore();
	checkWinner();
	endGame();
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const results = document.querySelector('.results');

rock.addEventListener('click', function (e) {
	playRoundResults('rock');
});
paper.addEventListener('click', function (e) {
	playRoundResults('paper');
});
scissors.addEventListener('click', function (e) {
	playRoundResults('scissors');
});

function endGame() {
	if (checkWinner()) {
		computerScore = 0;
		playerScore = 0;
		const restartButton = document.createElement('button');
		restartButton.classList.add('feedback', 'restartButton');
		restartButton.innerText = 'RESTART';
		results.appendChild(restartButton);
	}
}
