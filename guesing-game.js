//importing readline module to read input from cmd line
const readline = require('readline');

// procesess input from cmd line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})


const secretNumber =11;


// checks  if num is less then or more then or = to secretNumber
const checkGuess = function(num){
   if(num > secretNumber){
    console.log("too high")
    return false
   }

   else if(num < secretNumber){
    console.log("too low")
    return false
   }

   else{
     console.log("correct");
     return true;
   }
};

function askGuess(){
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
askGuess()
