let options = document.querySelector('.options');
playerList = ["✊","✋","✌️"]
computerList = ["✌️","✊","✋"]
computerWeapon = document.querySelector('.computer-choice');
playerWeapon = document.querySelector('.player-choice');

let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let resultDisplay = document.querySelector(".result");

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function play(p, c){
    if(playerList[p] == computerList[c]){
        return 0;
    }
    if(p == c){
        return 1;
    }
    else{
        return -1;
    }
}

function displayResult(result){
    if(result == 0){
        resultDisplay.innerHTML = "Draw";
    }
    else if(result == 1){
        resultDisplay.innerHTML = "You Win";
        playerScoreDisplay.innerHTML = parseInt(playerScoreDisplay.innerHTML) + 1;
    }
    else if(result == -1){
        resultDisplay.innerHTML = "Computer Win";
        computerScoreDisplay.innerHTML = parseInt(computerScoreDisplay.innerHTML) + 1;
    }
}

options.childNodes.forEach((option)=>{
    option.addEventListener('click', function(){
        let p = playerList.indexOf(option.id);
        let C = computerChoice();
        result = play(p, C);
        computerWeapon.innerHTML = computerList[C];
        computerWeapon.id = computerList[C];
        playerWeapon.innerHTML = playerList[p];
        playerWeapon.id = playerList[p];
        displayResult(result);
    } )
})