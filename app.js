var selectedCells = document.querySelectorAll('.cell');
var winningMessage = document.querySelector('.winning-message');
var messageBlock = document.querySelector('.message-block');
var restartBtn = document.querySelector('.restart-btn');
var continueBtn = document.querySelector('.continue-btn');
var totalCountWins = document.querySelector('.total-count-wins');
var totalCountMessage = document.querySelector('.total-count-message');

var tadaSound = new Audio('sounds/Ta Da-Sound.mp3');
var alertSound = new Audio('sounds/alert-sound.mp3');
var holePunchSound = new Audio('sounds/Hole_Punch-sound.mp3');
var paperSound = new Audio('sounds/paper-rip-1.mp3');

var scissorsTurn = true;
var scissors = 'scissors';
var rock = 'rock';
var rockTurn = false;
var currentPlayer = '';
var fullBoard = [];
var totalScissorsWins = 0;
var totalRockWins = 0;
var totalGames = 0;

var winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame();

function clearBoard () {
    messageBlock.style.display = 'none';
    fullBoard = [];
    currentPlayer = '';
    scissorsTurn = true;
    rockTurn = false;
    
    selectedCells.forEach(function(selectedCell) {
        selectedCell.classList.remove(scissors);
        selectedCell.classList.remove(rock);
        selectedCell.removeEventListener('click', handleSelectedCell);
        selectedCell.addEventListener('click', handleSelectedCell, {once: true});
    })
}

function handleContinue() {
    clearBoard();
    paperSound.play();
    totalCountWins.style.display = 'flex'
    var currentTotalScissorsWins = totalScissorsWins;
    var currentTotalRockWins = totalRockWins;
    var tempTotalGame = totalGame;
    totalCountMessage.innerText = `Total games: ${tempTotalGame} \nScissors ${currentTotalScissorsWins} || Rock ${currentTotalRockWins}`;
    
}

function startGame() {
    totalScissorsWins = 0;
    totalRockWins = 0;
    totalCountWins.style.display = 'flex';
    clearBoard();
    // paperSound.play();
    totalGame = 0;
    totalCountMessage.innerText = `Total games: 0`; 
}


var checkRoundWin = function(currentPlayer) {
    return winningCombinations.some(function(winningCombination) {
        return winningCombination.every(function(indexOfCell) {
            return selectedCells[indexOfCell].classList.contains(currentPlayer)
        })
    })
}


var switchTurn = function() {
    scissorsTurn = !scissorsTurn;
}

function handleSelectedCell(event) {
    if (scissorsTurn) {
        currentPlayer = scissors;
        event.target.classList.add(currentPlayer);
        holePunchSound.play();
    } else {
        currentPlayer = rock;
        event.target.classList.add(currentPlayer);
        holePunchSound.play(); 
    }

    fullBoard.push(currentPlayer);

    if(checkRoundWin(currentPlayer)) {
        if (currentPlayer == scissors) {
            totalScissorsWins ++;
        } else { 
            totalRockWins ++; 
        }
        totalGame ++;
        messageBlock.style.display = 'grid';
        tadaSound.play();
        winningMessage.innerText = `${ currentPlayer } Winner!`;
    } else if (fullBoard.length === selectedCells.length) {
            messageBlock.style.display = 'grid';
            winningMessage.textContent = `Draw!`;
            alertSound.play();
            totalGame ++;

    } else switchTurn();
}  

restartBtn.addEventListener('click', startGame);
continueBtn.addEventListener('click', handleContinue);
