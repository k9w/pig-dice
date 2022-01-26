

// Only 2 players for our games right now.
function Game() {
  this.players = [];
  // this.currentRound = 0;
}

Game.prototype.startGame = function() {
  let player1 = new Player();
  let player2 = new Player();
  this.players.push(player1, player2);
  this.currentTurn = 1; 
}

Game.prototype.winCheck = function(player1,player2) {
  if(player1.totalScore === 100) {
    return "Player 1 wins!";
  } else if(player2.totalScore === 100) {
    return "Player 2 wins!";
  } else {
    currentTurn += 1;
  }
}

Game.prototype.currentPlayer = function() {
  if (this.currentTurn % 2 === 0) {
    return player1;
  } else {
    return player2;
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
  // Math.random * 6 will generate a number between 0 and 6 (will never actually
  // be 6 because it will be a decimal number), following order of operations,
  // it will multiply the number we have set as the max first, and then add the
  // min. 

  let dieVal = Math.floor(Math.random() * max + min);
  if (dieVal === 1) {
    turnScore = 0;
    //*pass turn*
  } else {
    turnScore += dieVal;
  }
  return turnScore;
};

Player.prototype.hold = function() {
  // call winCheck
  return totalScore += turnScore;
}

// let player1 = new Player();
// let player2 = new Player();

