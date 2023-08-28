//importing readline module to read input from cmd line
const readline = require('readline');

// procesess input from cmd line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

function askLimit(){
    rl.question("attempts ", (limit) =>{
        numAttempts = Number(limit)
        askRange()
    })
}

let  numAttempts;
let  secretNumber;
function randomInRange(min,max){
return Math.floor(Math.random() * (max -min+1) + min)
}

// checks  if num is less then or more then or = to secretNumber
const checkGuess = function(num){
   if(num > secretNumber){
    console.log("too high")
    numAttempts --
    return false
   }

   else if(num < secretNumber){
    console.log("too low")
    numAttempts --
    return false
   }

   else{
     console.log("correct");
     return true;
   }

};

function askGuess(){
    if(numAttempts === 0){
        console.log("gameOver")
        rl.close();
        return;
    }
    rl.question("guess a number ", (answer) =>{
        const newAnswer = Number(answer);


      if (checkGuess(newAnswer)){
        console.log("you got it!!")
        rl.close()
      } else {

        askGuess()
      }
    })
}
// askGuess()

function askRange(){
    rl.question("enter min ", (min) =>{
    rl.question("enter max ", (max) =>{
        console.log(`im thinking of a number between ${min} and ${max}`)
        secretNumber = randomInRange(Number(min), Number(max))
        askGuess()
    })
    })
}

askLimit()
