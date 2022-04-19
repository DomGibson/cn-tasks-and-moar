function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[e]/gi).length;

    return count;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter Your Name! `, playerInput => {
    console.log(`Your Name: ${playerInput}!`)
    readline.close()
})

// take input

const result = countVowel();

console.log(result);

// INCOMPLETE, HARD