// Business Logic
function Game() {
  let player1 = new Player();
  let player2 = new Player();
  this.players = [player1, player2];
  this.currentPlayer = 0;
  this.currentRoll = 0;
}

// this.players.forEach
Game.prototype.resetGame = function() {
  let player1 = new Player();
  let player2 = new Player();
  this.players = [player1, player2];
  this.currentPlayer = 0;
  this.currentRoll = 0;
}

Game.prototype.playRound = function() {
  this.currentRoll = this.players[this.currentPlayer].roll();
  console.log(this.currentRoll);

  if (this.currentRoll === 1) {
    this.players[this.currentPlayer].turnScore = 0;
    this.endRound();
  } else {
    this.players[this.currentPlayer].turnScore += this.currentRoll;
  }

  return this.isCurrentPlayerWinner();
}

Game.prototype.endRound = function() {
  let playerCheck = this.currentPlayer + 1;

  if (playerCheck > this.players.length - 1) {
    playerCheck = 0;
  }

  this.currentRoll = 0;
  this.players[this.currentPlayer].totalScore += this.players[this.currentPlayer].turnScore;
  this.players[this.currentPlayer].turnScore = 0;
  this.currentPlayer = playerCheck;
};

Game.prototype.isCurrentPlayerWinner = function() {
  if (this.players[this.currentPlayer].totalScore + this.players[this.currentPlayer].turnScore >= 100) {
    this.resetGame();
    return true;
  } else {
    return false;
  };
};

function Player() {
  this.totalScore = 0;
  this.turnScore = 0;
};

// Roll our Dice
Player.prototype.roll = function() {
  // min will always be 1
  let min = 1;
  let max = 6;

  return Math.floor(Math.random() * max + min);
};

// User Interface Logic
let newGame = new Game();

function winnerScreen() {
  let declareWinner = 'Player ' + (newGame.currentPlayer+1) + ' is the Winner!';
  alert(declareWinner);
}

function updateDisplay() {
  console.log(newGame);
  $("#diceOutput").html('<h3>Current Roll: ' + newGame.currentRoll + '</h3>');
  $("#playerOneTotalScore").html(newGame.players[0].totalScore);
  $("#playerOneTurnScore").html(newGame.players[0].turnScore);
  $("#playerTwoTotalScore").html(newGame.players[1].totalScore);
  $("#playerTwoTurnScore").html(newGame.players[1].turnScore);
};

function attachContactListeners() {
  $("#roll").on("click", function() {
    // Winner check!
    if (newGame.playRound()) {
      newGame.endRound();
      updateDisplay();
      winnerScreen();
      newGame.resetGame();
    }
    updateDisplay();
  });
  $("#hold").on("click", function() {
    newGame.endRound();
    updateDisplay();
  });
  $("#resetGame").on("click", function() {
    newGame.resetGame();
    updateDisplay();
  });
  $("#review").on("click", function() {
    $(".gameInstructions").toggle();
  });
};

$(document).ready(function() {
  attachContactListeners();
});

