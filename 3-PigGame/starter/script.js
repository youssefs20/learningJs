'use strict';
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El=document.querySelector("#score--0");
const score1El= document.getElementById("score--1");
const Current0El=document.getElementById("current--0");
const Current1El=document.getElementById("current--1");

const diceEl=document.querySelector(".dice");
const btnNew=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");

//starting conditions
let scores ,currentScore ,activePlayer ,playing ;

function init (){
    scores = [0,0];
    currentScore = 0;
    activePlayer=0;
    playing =true;
    


    score0El.textContent=0;
    score1El.textContent=0;
    Current0El.textContent = 0;
    Current1El.textContent = 0;


    diceEl.classList.add("hidden")
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);

}

init ();

function switchPlayer (){
	document.getElementById(
        `current--${activePlayer}`)
        .textContent=0;
		currentScore = 0 ;
		activePlayer=activePlayer === 0 ? 1 : 0 ;
		player0El.classList.toggle("player--active");
		player1El.classList.toggle("player--active");
	
}
//rolling dice
btnRoll.addEventListener("click", function(){
    if(playing){
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random()*6)+1;
        
        //2. display dice 
        diceEl.classList.remove("hidden");
        diceEl.src=`/07-Pig-Game/starter/dice-${dice}.png`;
        //diceEl.src=`dice-${dice}.png`;
        
        
        //3.check for rolled 1.: if true, 
        if(dice!==1){
            //add dice to current score
            currentScore+=dice;
            
            document.getElementById(
                `current--${activePlayer}`)
                .textContent=currentScore;
        }
        else{
            //switch 
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function(){
    if(playing){
        //1.add current scote to active player
        scores[activePlayer]+=currentScore;
        document.getElementById(
            `score--${activePlayer}`)
            .textContent=scores[activePlayer];
            // console.log(currentScore);
        
        //2.check if player's score is >=100
        if(scores[activePlayer]>=25){
            playing= false;
            diceEl.classList.add("hidden");
            //finish the game
            document.querySelector(
                `.player--${activePlayer}`)
                .classList.add("player--winner");
            document.querySelector(
                `.player--${activePlayer}`)
                .classList.remove("player--active");
        }
        else{
        
            //switch
            switchPlayer();
        }
    }
	
	
});


btnNew.addEventListener("click", init);

