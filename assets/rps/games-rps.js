// Banco de Dados de Rock, Paper, Cissors
const cpuPlays = ["Pedra!","Papel!","Tesoura!"];
const humanPlays = ["Pedra!","Papel!","Tesoura!"];
const resultOfGame = ["Você venceu !","Você perdeu...", "Deu empate :("];

// variaveis mutáveis globais
    let pickCpu = [];
    let pickPlayer = [];
    let endGame = [];
    let scorePlayer = 0;
    let scoreCpu = 0;
    


// I.A. da nossa CPU
function cpuAnswer(){
    let randomize = Math.floor(Math.random() * (4 - 1)) +1;
    if(randomize === 1){
        pickCpu.push(cpuPlays[0]);
    }
    else if(randomize === 2){
        pickCpu.push(cpuPlays[1]);
    }
    else{
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
        alert('Você venceu...parabéns !');
        let alteraPlacarPlayer = document.getElementById("playerScore")
        alteraPlacarPlayer.innerText = 0;
        let alteraPlacarCpu = document.getElementById("cpuScore")
        alteraPlacarCpu.innerText = 0;
        scorePlayer = 0;
        scoreCpu = 0;
    }
    else if(scoreCpu === 3){
        alert('Você perdeu...tente novamente!');
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
        returnOfBet.innerText = "Cpu selecionou " + pickCpu;
        const uWon = document.createElement("span");
        pickCpu = [];
        pickPlayer = []; 
        returnOfBet.appendChild(uWon);    
        uWon.innerText = "Deu Draw(Empate)";
        
        
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
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Cpu selecionou " + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;
    
}
// const buttonPaper = document.getElementById("buttonPaper");
function playSelectPaper(){
    endGame = [];
    pickPlayer.push(humanPlays[1]);  
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Cpu selecionou " + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;  
}

// const buttonScissors = document.getElementById("buttonScissors");
function playSelectScissor(){
    endGame = [];
    pickPlayer.push(humanPlays[2]);
    cpuAnswer();
    const returnOfBet = document.getElementById("alert");
    returnOfBet.innerText = "Cpu selecionou " + pickCpu;
    const uWon = document.createElement("span");
    returnOfBet.appendChild(uWon);    
    evalPicks();
    uWon.innerText = endGame;      
}





