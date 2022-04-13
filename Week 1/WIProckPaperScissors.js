
console.log("Loading.");
setTimeout(() => { console.log("Loading.."); }, 1000);
setTimeout(() => { console.log("Loading..."); }, 1300);
setTimeout(() => { console.log("Loading...."); }, 2000);
setTimeout(() => { console.log("Loading....."); }, 2100);
setTimeout(() => { console.log("Loading......"); }, 2200);
setTimeout(() => { console.log("Loading......."); }, 2200);
setTimeout(() => { console.log("Loading........ DONE!"); }, 3000);
setTimeout(() => { console.log("========================================="); }, 3000);

setTimeout(() => { console.log("Welcome To Rock, Paper, Scissors!"); }, 3000);

let rock = ["Rock", "rock"];
let paper = ["Paper", "paper"];
let scissors = ["Scissors","scissors"];

const gameVariables = ['Rock', 'Paper', 'Scissors'];
let randomVariable = Math.floor(Math.random() * gameVariables.length);
let variableRandom = gameVariables[Math.floor(Math.random() * gameVariables.length)];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  setTimeout(() => { readline.question(`What Is Your Hand? `, playerInput => {
    console.log(`You Threw ${playerInput}! The Opponent Threw: ${variableRandom}`)
    readline.close()

    if (playerInput === rock || playerInput === "rock" && variableRandom === 'Rock') {
        setTimeout(() => { console.log(`DRAW!`); }, 1000);
        }
        else if (playerInput === paper || playerInput === "paper" && variableRandom === 'Paper') {
            setTimeout(() => { console.log(`DRAW!`); }, 1000);
        }
        else if (playerInput === scissors || playerInput === "scissors" && variableRandom === 'Scissors') {
            setTimeout(() => { console.log(`DRAW!`); }, 1000);
        }
    //     else if (playerInput === rock || playerInput === "rock" && variableRandom === 'Paper') {
    //         setTimeout(() => { console.log(`You Lose!`); }, 1000);
    //     }
    //     else if (playerInput === paper || playerInput === "paper" && variableRandom === 'Scissors') {
    //         setTimeout(() => { console.log(`You Lose!`); }, 1000); 
    //     }
    //     else if (playerInput === scissors || playerInput === "scissors" && variableRandom === 'Rock') {
    //         setTimeout(() => { console.log(`You Lose!`); }, 1000); 
    //     }
    //     else if (playerInput === rock || playerInput === "rock" && variableRandom === 'Scissors') {
    //         setTimeout(() => { console.log(`You Win!`); }, 1000); 
    //     }
    //     else if (playerInput === paper || playerInput === "paper" && variableRandom === 'Rock') {
    //         setTimeout(() => { console.log(`You Win!`); }, 1000); 
    //     }
    //     else if (playerInput === scissors || playerInput === "scissors" && variableRandom === 'Paper') {
    //         setTimeout(() => { console.log(`You Win!`); }, 1000); 
    //     }

        }, 5500);
    }
)

// setTimeout(() => { console.log(`${variableRandom}`); }, 3000);
