let words = [
    'PEIXE',
    'BATATA',
    'ARROZ',
    'DEV',
    'PELO',
    'FIM',
    'MEIO',
    'START',
    'RESTART',
    'OLHA',
    'CACHORRO',
    'CRINA',
    'CAVALO',
    'LONTRA',
    'VASSOURA',
    'ARANHA',
    'PIAUI',
    'BRASIL',
    'MINAS',
    'LEONCIO'
];
//Vai retornar 3 palavras randomicas
let word1 = words[Math.floor(Math.random() * words.length)];
let word2 = words[Math.floor(Math.random() * words.length)];
let word3 = words[Math.floor(Math.random() * words.length)];
//Validar para que nao haja repetição de palavra
if (word1 == word2) {
    word2 = words[Math.floor(Math.random() * words.length)];
}
if (word3 == word2 || word3 == word1) {
    word3 = words[Math.floor(Math.random() * words.length)];
}
//Retorna as palavras de word 1 2 e 3 splitadas
let wordArray = word1.split('');
let wordArray2 = word2.split('');
let wordArray3 = word3.split('');



//timer do game com função de resetar

function myTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "Você tem exatos: " + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            alert('Desculpe seu tempo acabou, gerando outro jogo');
            window.onload(startTimer);
        }
    }, 1000);
}
//criar o caça palavras
function createWordFind() {    
    let table = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 10; i++) {
        table.push([])
    }
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < 10; j++) {
            table[i].push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        }
    }
    //criar o caça palavras

    //adicionar palavras na tabela
    let line = table[Math.floor(Math.random() * table.length)];

    let line1 = table[Math.floor(Math.random() * table.length)];

    let line2 = table[Math.floor(Math.random() * table.length)];
   
    while (line == line1) {
        line1 = table[Math.floor(Math.random() * table.length)];
    }  
    while (line2 == line1 || line2 == line) {
        line1 = table[Math.floor(Math.random() * table.length)];
    }



    let maxLength1 = 10 - wordArray.length;
    let letter = line[Math.floor(Math.random() * maxLength1)];
    let letterPlace = line.indexOf(letter);


    for (let i = 0; i < wordArray.length; i++) {
        line[letterPlace] = wordArray[i];
        letterPlace += 1
    }


    let maxLength2 = 10 - wordArray2.length;
    let letter1 = line1[Math.floor(Math.random() * maxLength2)];
    let letterPlace1 = line1.indexOf(letter1);


    for (let i = 0; i < wordArray2.length; i++) {
        line1[letterPlace1] = wordArray2[i];
        letterPlace1 += 1
    }


    let maxLength3 = 10 - wordArray3.length;
    let letter2 = line2[Math.floor(Math.random() * maxLength3)]
    let letterPlace2 = line2.indexOf(letter2);

    for (let i = 0; i < wordArray3.length; i++) {
        line2[letterPlace2] = wordArray3[i];
        letterPlace2 += 1
    }

    //adicionar palavras na tabela
    //imprime no document
    const cel = document.getElementsByTagName('td');
    let letters = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            letters.push(table[i][j])
        }
    }

    for (let i = 0; i < cel.length; i++) {
        cel[i].innerText = letters[i]
    }

    //imprime no document

}

// validação do encontro da palavra

const tabela = document.getElementById('table');

let geralPoint = 0;
let points1 = 0;

function isAVictory(){
    if(geralPoint === 3){
        alert('Parabéns você venceu!');
    }
}

function validation1(event) {
    let target = event.target.innerText;    
    let includes = wordArray.includes(target);
    
    if (points1 === wordArray.length -1){
        points1 = 0;
        geralPoint++;
        isAVictory();
        
    }

    if (includes === true) {
        points1++;
    }
   
    else{
        points1 = 0;
    }

    console.log(points1)
}

let points2 = 0;

function validation2(event) {
    let target = event.target.innerText;    
    let includes = wordArray2.includes(target);
    
    if (points2 === wordArray2.length -1){
        points2 = 0;
        geralPoint++;
        isAVictory();
                
    }

    if (includes === true) {
        points2++;
    }
   
    else{
        points2 = 0;
    }

    console.log(points2)
}

let points3 = 0;

function validation3(event) {
    let target = event.target.innerText;    
    let includes = wordArray3.includes(target);
    
    if (points3 === wordArray3.length -1){
        points3 = 0;
        geralPoint++;
        isAVictory();
       
    }

    if (includes === true) {
        points3++;
    }
   
    else{
        points3 = 0;
    }

    console.log(points3)
}
const play = document.querySelector('#play')

// iniciando o timer ao carregamento (mudar pra o botão iniciar o GAME ?)
function startTimer(){
    let duration = 60 * 1;
    display = document.querySelector('#timer');
    myTimer(duration, display); 
}



tabela.addEventListener('click', validation1)

tabela.addEventListener('click', validation2)

tabela.addEventListener('click', validation3)

play.addEventListener('click', startTimer, createWordFind)

createWordFind();