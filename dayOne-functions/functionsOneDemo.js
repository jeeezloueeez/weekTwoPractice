// let jonSnowHealth = 100

// textVersion = String(jonSnowHealth)
// boolVersion = Boolean(jonSnowHealth)

// let theWinnerIs = `Jamie is the winner.`

// let theNewWinnerIs = theWinnerIs.replace(`Jamie`, `Jon`)

// // if (theNewWinnerIs.includes('Jon')) {
// //   console.log(`replaced jamie with jon inside of new winner`)
// // }

// function isJonAlive() {
//   if (jonSnowHealth > 0) {
//     console.log(`Jon Snow is alive with a health level of ${jonSnowHealth}`)
//   } else {
//     console.log(`RIP Jon Snow`)
//   }
// }

// isJonAlive()

// function surpriseAttack(damage) {
//   jonSnowHealth -= damage // this is equivilent to jonSnowHealth = jonSnowHealth - damage
//   isJonAlive()
// }

// surpriseAttack(20)
// surpriseAttack(12)
// surpriseAttack(6)


// function greeting(person1, person2) {
//   console.log(`${person1} and ${person2} say hello to each other`)
// }

// greeting(`Jon Snow`, `Ned`)



function rollDice() {
  let possibleRoles = [1, 2, 3, 4, 5, 6]
  let randomRole = Math.floor(Math.random() * possibleRoles.length)
  return possibleRoles[randomRole]
}

// let firstRoll = rollDice();
// let secondRoll = rollDice();

// console.log( firstRoll, secondRoll)

function diceMultiplier(){
  let firstRoll = rollDice();
  let secondRoll = rollDice();
  return firstRoll * secondRoll
}
console.log(diceMultiplier())