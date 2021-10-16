const questions = require("./questions")
var  a = require("readline-sync")
let score = 0
let log = console.log

let name = a.question("What is your name? ")
let message = `Hello ${name} !!`
log(message)
log("\nTake our COVID-19 quiz!")
log("\nThere will be 10 Questions..")
log(("+5 ponits for correct answer,"),(" -2 for wrong answer. "))


let n = a.question("\nHow many questions you want to Attempt ?   ")

if(n <= 10)
{
  for(let i = 0;i < n; i++){
  log("\n")
  log(questions[i]["q"+[i+1]])
  log(questions[i]["a"])
  log(questions[i]["b"])
  log(questions[i]["c"])
  log(questions[i]["d"])
  log("\n")
  let ans = a.question("Your Answer :")

  if(ans == questions[i]["ans"].charAt(0).toLowerCase() || ans == questions[i]["ans"].charAt(0).toUpperCase())
  {
    log("Correct")
    score = score + 5
    log("Your Score is :"+score)
  }
  else
  {
    log("Incorrect")
    log(("Correct Answer is : ")+questions[i]["ans"])
    score = score - 2
    log("Your Score is :"+score)
  }
}
}else{
  log("There will be only 10 Questions")
}
log("\n")
log("\n"+`${name}`+" Your Final Score is : "+score)