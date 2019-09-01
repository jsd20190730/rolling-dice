/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

//listen for click event on button with id = 'rollDice'
//When click event happends call the rollDice function
document.getElementById('roll-dice').onclick = rollDice

function rollDice() {
  //console.log('dice is being rolled')

  //generate random number between 1 to 6
  let random1 = randomDie()
  let random2 = randomDie()

  //console.log(`1st Die: ${random1}`)
  //console.log(`2nd Die: ${random2}`)

  //generate dynamic class name for dice
  let firstDieClass = `dice-${random1}`
  let secondDieClass = `dice-${random2}`

  //console.log(firstDieClass)
  //console.log(secondDieClass)

  //update html with new dice
  document.getElementById('first-die').className = firstDieClass
  document.getElementById('second-die').className = secondDieClass
}

//declare a function called randomDie
function randomDie() {
  return (Math.floor(Math.random() * 6) + 1)
}
