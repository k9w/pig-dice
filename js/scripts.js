function Game(){
  this.players ={};
  this.currentRound = 1;
}


Game.prototype.winCheck = function(player1,player2){
  if(player1.totalScore === 100){
    return "Player 1 wins!";
  }else if(player2.totalScore === 100){
    return "Player 2 wins!";
  }else{
    currentRound += 1;
  }
}

/* 





Game start method

 set current round to 0, create two player objects with scores of 0 create dice object

Player Constructor

totalScore
roundScore


roll method
 increment player's round score until  they roll a 1
 let val = newDice.roll()
 if (val === 1) {
    roundScore = 0;
    *pass turn*
} else (){
  roundScore += val;
}


//hold method
set event handler to hold button which allows player to roll dice and start accumulating round score.
adds round score to player's total score 

*/

// Dice constructor
function Dice() {
  // Only using 6 sided die
  this.sides = 6;
}

// Roll our Dice
Dice.prototype.roll = function() {
  // min will always be 1
  let min = 1;
  let max = this.sides;
  // Math.random * 6 will generate a number between 0 and 6 (will never actually
  // be 6 because it will be a decimal number), following order of operations,
  // it will multiply the number we have set as the max first, and then add the
  // min. 
    return Math.floor(Math.random() * max + min);
};

let newDice = new Dice();

for (let i = 0; i < 10; i++) {
  console.log(newDice.roll());
}

win logic (check player1, player2)
if (player1score === 100) {
 return "Player 1 wins!"
} Else if (player2score === 100) {
 return "Player 2 wins!"
} else {
  currentRound  + 1;
}



