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
