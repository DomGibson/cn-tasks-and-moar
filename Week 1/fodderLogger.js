monday = "Turkey";
tuesday = "Lamb";
wednesday = "Kebab";

console.log(`This Weeks Meals:`);
console.log(`-------------------------`);
console.log(`Monday: ${monday}`);
console.log(`Tuesday: ${tuesday}`);
console.log(`Wednesday: ${wednesday}`);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`What are you eating Today?`, foodOne => {
    console.log(`Mmmm! ${foodOne} Sounds Delicious!`)
  readline.question(`What are you eating Tomorrow?`, foodTwo => {
    console.log(`Scrumptious ${foodTwo}! Can't Wait To Try It!`)
    readline.close()
  })
})


