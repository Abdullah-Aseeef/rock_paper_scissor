

let buttons = document.querySelector("#sec1 > .buttons");
buttons.addEventListener('click',(event)=>{

    let target = event.target.tagName == 'BUTTON'? event.target:event.target.parentElement;
    if(target.tagName != 'BUTTON'){
        return;
    }
    buttons.childNodes.forEach((button)=>{
        button.disabled = true;
    });

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
    if(humanScore == 5 || computerScore == 5){
        openPopUp();
        return;
    }
    let scores = document.querySelectorAll("h1");
    scores.forEach((score)=>{
        if(score.parentElement.id == 'sec1') score.textContent=humanScore;
        else score.textContent=computerScore; 
    });
    let section = document.querySelector("#sec2");
    section.textContent= result;
    section.classList.add(resultType);
    let button = document.createElement("button");
    button.textContent = "Play Again!";
    section.appendChild(button);
    button.addEventListener("click",(event)=>{
        section.classList.remove("lose","win","draw");
        button.remove();
        section.textContent="";
        let buttons = document.querySelectorAll("button");
        buttons.forEach((button)=>{
            button.classList.remove("nope");
            button.disabled = false;
        })
    });
}
function openPopUp(){
    const winMessage = document.getElementById("win-message");
    winMessage.querySelector("p").textContent = `${humanScore>computerScore?"Congratulations! You":"Better Luck Next time, Computer"} won 5 rounds!`;
    winMessage.classList.remove("hidden");
}


function restartGame() {

    window.location.href="./index.html";
}
