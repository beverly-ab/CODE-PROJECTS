/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Selecting elements

const score0El = document.querySelector('#score-0')
const score1El = document.getElementById('score-1')
const current0El = document.getElementById('current-0')
const current1El = document.getElementById('current-1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')

//Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const score = [0, 0]
let currentScore = 0
let activePlayer = 0

//Rolling dice function

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`
  if (dice !== 1) {
    currentScore += dice
    document.textContent.getElementById(`current-${activePlayer}`).textContent =
      currentScore
  } else {
  }
})
