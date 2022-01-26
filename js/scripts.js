// Business Logic

function Game() {
  let player1 = new Player();
  let player2 = new Player();
  this.players = [player1, player2];
  this.currentPlayer = 0;
}

Game.prototype.resetGame = function() {
  let player1 = new Player();
  let player2 = new Player();
  this.players = [player1, player2];
  this.currentPlayer = 0;
}

Game.prototype.playRound = function() {
  let newRoll = this.players[this.currentPlayer].roll();
  console.log(newRoll);

  if (newRoll === 1) {
    this.players[this.currentPlayer].turnScore = 0;
    this.endRound();
  } else {
    this.players[this.currentPlayer].turnScore += newRoll;
  }
}

Game.prototype.endRound = function() {
  let playerCheck = this.currentPlayer + 1;

  if (playerCheck > this.players.length - 1) {
    playerCheck = 0;
  }

  this.players[this.currentPlayer].totalScore += this.players[this.currentPlayer].turnScore;
  this.players[this.currentPlayer].turnScore = 0;
  this.currentPlayer = playerCheck;
}

Game.prototype.isCurrentPlayerWinner = function() {
  if (this.players[this.currentPlayer].totalScore + this.players[this.currentPlayer].turnScore >= 100) {
    this.resetGame();
    return true;
  } else {
    return false;
  }
}

function Player() {
  this.totalScore = 0;
  this.turnScore = 0;
}

// Roll our Dice
Player.prototype.roll = function() {
  // min will always be 1
  let min = 1;
  let max = 6;

  return Math.floor(Math.random() * max + min);
}


// User Interface Logic



