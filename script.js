
function getComputerChoice(){
    let choice = Math.random()*3;
    
    if(choice < 1){
        return "Rock";
    }
    else if(choice < 2){
        return "Paper";
    }
    return "Scissors";
}
function getHumanChoice(){
    let choice = prompt(`
    Enter 
        r for Rock
        p for Paper
        s for Scissors
    `);
    if(choice == 'r'){
        return "Rock";
    }
    else if(choice == 'p'){
        return "Paper";
    }
    else if(choice == 's')
        return "Scissors";
    alert("Enter a valid option")
    return getHumanChoice();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    function lose(){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`) ;
        return true;
    }
    function win(){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`) ;
        return true;
    }
    if(humanChoice == 'Rock')
    {
        if(computerChoice == 'Paper')
        {
            return lose();
        }
        else if(computerChoice == 'Scissors')
        {
            return win();
        }
    }
    if(humanChoice == 'Paper')
    {
        if(computerChoice == 'Rock')
        {
            return win();
        }
        else if(computerChoice == 'Scissors')
        {
            return lose();
        }
    }
    if(humanChoice == 'Scissors')
    {
        if(computerChoice == 'Rock')
        {
            return lose();
        }
        else if(computerChoice == 'Paper')
        {
            return win();
        }
    }
    console.log(`Game tied! Both chose ${humanChoice, computerChoice}`);
    return false;

}
function playGame()
{
    for(let i =0; i < 5;i++)
    {
        console.log("\n\nStarting new game of rock paper scissors")
        if(!playRound(getHumanChoice(),getComputerChoice()))
        {
            i--;
        }
    }
    console.log(`The winner of the game is ${ humanScore > computerScore ? "You!":"Computer!"}`);
}
// playGame();
