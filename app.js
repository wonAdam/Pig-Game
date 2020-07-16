/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice; 

activePlayer = 0;
initScore();
initRound();


document.querySelector('.btn-roll').addEventListener('click', () => {
    rollDice();
})

document.querySelector('.btn-hold').addEventListener('click', () => {
    addRoundScoreToTotal();
})

document.querySelector('.btn-new').addEventListener('click', () => {
    switchPlayer(0);
    initScore();
    initRound();
})

function rollDice(){
    dice = Math.ceil(Math.random() * 6);
    dice_img = document.querySelector(".dice");
    dice_img.style.display = 'block';
    dice_img.src = "dice-"+dice.toString()+".png";

    if(dice !== 1){
        roundScore += dice;
        document.getElementById("current-"+activePlayer.toString()).textContent = roundScore;
    }
    else{
        activePlayer === 0 ? switchPlayer(1) : switchPlayer(0);
    }
}

function initRound(){
    roundScore = 0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
}

function initScore(){
    scores= [0,0];
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
}

function switchPlayer(player){
    if(player === 1){
        activePlayer = 1;
        document.querySelector(".player-1-panel").classList.add('active');
        document.querySelector(".player-0-panel").classList.remove('active')
    }else{
        activePlayer = 0;
        document.querySelector(".player-0-panel").classList.add('active');
        document.querySelector(".player-1-panel").classList.remove('active')
    }

    initRound()
}

function addRoundScoreToTotal(){
    scores[activePlayer] += roundScore;
    document.getElementById("score-"+activePlayer.toString()).textContent = scores[activePlayer];
    activePlayer === 0 ? switchPlayer(1) : switchPlayer(0);
}

