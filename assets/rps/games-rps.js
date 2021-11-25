// Banco de Dados de Rock, Paper, Cissors
const cpuPlays = ["Pedra!","Papel!","Tesoura!"];
const humanPlays = ["Pedra!","Papel!","Tesoura!"];
const resultOfGame = [" Você me venceu!"," Você perdeu...", "Deu empate :("];

// variaveis mutáveis globais
    let pickCpu = [];
    let pickPlayer = [];
    let endGame = [];
    let scorePlayer = 0;
    let scoreCpu = 0;
    
// Nosso Modal

    const modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];


    
    

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }



// I.A. da nossa CPU
function cpuAnswer(){
    document.getElementById("cpuSelectRock").style.opacity = "0.1";
    document.getElementById("cpuSelectPaper").style.opacity = "0.1";
    document.getElementById("cpuSelectScissor").style.opacity = "0.1";
    let randomize = Math.floor(Math.random() * ( 3 )) +1;
    if(randomize === 1){
        document.getElementById("cpuSelectRock").style.opacity = "1";
        pickCpu.push(cpuPlays[0]);
    }
    else if(randomize === 2){
        document.getElementById("cpuSelectPaper").style.opacity = "1";
        pickCpu.push(cpuPlays[1]);
    }
    else{
        document.getElementById("cpuSelectScissor").style.opacity = "1";
        pickCpu.push(cpuPlays[2]);
    }
}
//funções do placar

function scorePlusPlayer(){
    scorePlayer++;
    let alteraPlacarPlayer = document.getElementById("playerScore")
    alteraPlacarPlayer.innerText = scorePlayer;
    
}
function scorePlusCpu(){
    scoreCpu++;
    let alteraPlacarCpu = document.getElementById("cpuScore")
    alteraPlacarCpu.innerText = scoreCpu;
}
function scorePlusTotal(){      
    if(scorePlayer === 3){
        modal.style.display = "block";
        const playerWins = document.getElementById("victory")
        playerWins.innerText = 'Parabéns humano...Você é bom...'
        let alteraPlacarPlayer = document.getElementById("playerScore")
        alteraPlacarPlayer.innerText = 0;
        let alteraPlacarCpu = document.getElementById("cpuScore")
        alteraPlacarCpu.innerText = 0;
        scorePlayer = 0;
        scoreCpu = 0;
    }
    else if(scoreCpu === 3){
        modal.style.display = "block";
        const playerWins = document.getElementById("victory")
        playerWins.innerText = 'HaHaHa...Lido como um livro!'
        let alteraPlacarCpu = document.getElementById("cpuScore")
        alteraPlacarCpu.innerText = 0;
        let alteraPlacarPlayer = document.getElementById("playerScore")
        alteraPlacarPlayer.innerText = 0;
        scorePlayer = 0;
        scoreCpu = 0;
    }    
}         
    

function evalPicks(){                        

    if(pickCpu[0] === pickPlayer[0]){
        endGame.push(resultOfGame[2]);        
        const returnOfBet = document.getElementById("alert");
        returnOfBet.innerText = "Robot selecionou " + pickCpu;
        const uWon = document.createElement("span");
        pickCpu = [];
        pickPlayer = []; 
        returnOfBet.appendChild(uWon);    
        uWon.innerText = " Deu Draw(Empate)";
        
        
    }   
    else if(pickCpu[0] === cpuPlays[0] && pickPlayer[0] === humanPlays[1]){
        endGame.push(resultOfGame[0]);
        pickCpu = [];
        pickPlayer = [];        
        scorePlusPlayer();
        scorePlusTotal();
        
        
    }
    else if(pickCpu[0] === cpuPlays[1] && pickPlayer[0] === humanPlays[2]){
        endGame.push(resultOfGame[0]);
        pickCpu = [];
        pickPlayer = [];
        scorePlusPlayer();
        scorePlusTotal();
        
        
    }
    else if(pickCpu[0] === cpuPlays[2] && pickPlayer[0] === humanPlays[0]){
        endGame.push(resultOfGame[0]);
        pickCpu = [];
        pickPlayer = [];
        scorePlusPlayer();
        scorePlusTotal();
        
        
    }
    else if(pickCpu[0] === cpuPlays[0] && pickPlayer[0] === humanPlays[2]){
        endGame.push(resultOfGame[1]);
        pickCpu = [];
        pickPlayer = [];
        scorePlusCpu();
        scorePlusTotal();
        
        
    }
    else if(pickCpu[0] === cpuPlays[1] && pickPlayer[0] === humanPlays[0]){
        endGame.push(resultOfGame[1]);
        pickCpu = [];
        pickPlayer = [];
        scorePlusCpu();
        scorePlusTotal();
        

    }
    else if(pickCpu[0] === cpuPlays[2] && pickPlayer[0] === humanPlays[1]){
        endGame.push(resultOfGame[1]);
        pickCpu = [];
        pickPlayer = [];
        scorePlusCpu();
        scorePlusTotal();
        
        
    }     
    
    return endGame;
}



// const buttonRock = document.getElementById("buttonRock");
function playSelectRock(){    
    endGame = [];    
    pickPlayer.push(humanPlays[0]);
    document.getElementById("playerSelectRock").style.opacity = "1";
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Robot selecionou " + ' ' + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;
    document.getElementById("playerSelectPaper").style.opacity = "0.1";
    document.getElementById("playerSelectScissor").style.opacity = "0.1";
    
    
}
// const buttonPaper = document.getElementById("buttonPaper");
function playSelectPaper(){
    endGame = [];
    
    pickPlayer.push(humanPlays[1]);  
    document.getElementById("playerSelectPaper").style.opacity = "1";
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Robot selecionou " + ' ' + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;  
    document.getElementById("playerSelectRock").style.opacity = "0.1";
    document.getElementById("playerSelectScissor").style.opacity = "0.1";
}

// const buttonScissors = document.getElementById("buttonScissors");
function playSelectScissor(){
    endGame = [];
    
    pickPlayer.push(humanPlays[2]);
    document.getElementById("playerSelectScissor").style.opacity = "1";
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Robot selecionou " + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;     
    document.getElementById("playerSelectRock").style.opacity = "0.1";
    document.getElementById("playerSelectPaper").style.opacity = "0.1";
    
}





