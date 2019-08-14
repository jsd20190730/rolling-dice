/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint: document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

// return random number between 1 and 6
function randomDie() {
	return Math.floor(Math.random() * 6) + 1
}

// listen for click event on button with id='roll dice', using .onclick event listener
// when event happens, call rollDice function
// HOISTS the rollDice function
document.getElementById('roll-dice').onclick = rollDice


// this function is called an event handler, meaning it gets called when an event happens
function rollDice() {

	// declare two variables with random number values
	let random1 = randomDie()
	let random2 = randomDie()

	// declare variables that are new class names for the two die
	let firstDieClass = `dice-${random1}`
	let secondDieClass = `dice-${random2}`

	// dynamically update HTML
	// by overwriting original class names for 'first-die' and 'secod-die'
	document.getElementById('first-die').className = firstDieClass
	document.getElementById('second-die').className = secondDieClass
}







