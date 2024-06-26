

let buttons = document.querySelector("#sec1 > .buttons");
buttons.addEventListener('click',(event)=>{
    let target = event.target;
    const button_sel = document.querySelector(`#${target.id}`);
    button_sel.classList.add("nope");
    let comp = computer_choice();
    let human = target.id;
    playgame(human,comp);
});
function computer_choice(){
    let choice = Math.random()*3;
    let comp_choice = '';
    if(choice < 1){
        comp_choice="rock";
    }
    else if(choice < 2){
        comp_choice="paper";
    }
    else{
        comp_choice="scissors";
    }
    let button = document.querySelector("#sec3 > .buttons > #"+comp_choice);
    button.classList.add("nope");
    return comp_choice;
}
let humanScore = 0;
let computerScore = 0;
function playgame(humanChoice,computerChoice){
    let result = '';
    let resultType = '';
    function lose(){
        computerScore++;
        result =`You lose! ${computerChoice} beats ${humanChoice}`;
        resultType = 'lose';
        display(result,resultType);
        return true;
    }
    function win(){
        humanScore++;
        result=`You win! ${humanChoice} beats ${computerChoice}`;
        resultType = 'win';
        display(result,resultType);
        return true;
        
    }
    if(humanChoice == 'rock')
    {
        if(computerChoice == 'paper')
        {
            return lose();
        }
        else if(computerChoice == 'scissors')
        {
            return win();
        }
    }
    if(humanChoice == 'paper')
    {
        if(computerChoice == 'rock')
        {
            return win();
        }
        else if(computerChoice == 'scissors')
        {
            return lose();
        }
    }
    if(humanChoice == 'scissors')
    {
        if(computerChoice == 'rock')
        {
            return lose();
        }
        else if(computerChoice == 'paper')
        {
            return win();
        }
    }
    result=`Game tied! Both chose ${humanChoice}`;
    resultType = 'draw';
    display(result,resultType);
    return false;
}
function display(result,resultType){
    let section = document.querySelector("#sec2");
    section.textContent= result;
    section.classList.add(resultType);
}

/*

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

 */