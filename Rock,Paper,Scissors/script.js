function playround (userChoice){
    var choices = [rock,paper,scissor];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result = '';
    if(userChoice == computerChoice) result = "Its a Tei";
    else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) result = "You Win";
    else result = "You Lose";

    return 
}