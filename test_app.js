var selectedSpots = document.querySelectorAll('.spot');
//var selectBoard = document.querySelector('.select-board');

// var boardPositions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8]
// ];
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

var playerOneClicked = null;
var playerTwoClicked = null;
var spotId = 0;
var playerOneGo = [];
var playerTwoGo = [];


var handleSelectedSpots = function(event) {
    if (playerOneClicked) {
        event.target.textContent = 'O';
        playerOneClicked = null;
        spotId = Number(event.target.id);
        playerTwoGo.push(spotId);
        haveWinner(playerTwoGo);
        
    } else {
        event.target.textContent = 'X';
        playerOneClicked = true;
        spotId = event.target.id;
        console.log(spotId);
        playerOneGo.push(spotId);
        console.log(playerOneGo);
        haveWinner(playerOneGo);
    }
}


var haveWinner = function(arr) {
    console.log('test');
    arr.forEach(function(winningCombinations.forEach(function(winningCombination) {
        winningCombination.forEach(function(rowElement)) {
                if (arrElement == rowElement0
            }
        }
        if (arr.includes(winningCombination)) {
            console.log('winner!')
        }
    })
}
//         if (arr.includes()) {
//             console.log('Winner!!!!!!')
//         }
//     }
// }
    
    
    
    
//     if(arr.includes('0') && arr.includes('1') && arr.includes('2')) {
//         setTimeout(gameOver, 3000);
//         console.log('we have a winner!');
//     }
// }

var gameOver = function() {
    selectedSpots.forEach(function(selectedSpot) {
        selectedSpot.textContent = '';
    })
}

selectedSpots.forEach(function(selectedSpot) {
    selectedSpot.addEventListener('click', handleSelectedSpots)
})

