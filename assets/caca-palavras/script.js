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

let word1 = words[Math.floor(Math.random() * words.length)];
let word2 = words[Math.floor(Math.random() * words.length)];
let word3 = words[Math.floor(Math.random() * words.length)];
if (word1 == word2) {
    word2 = words[Math.floor(Math.random() * words.length)];
}
if (word3 == word2 || word3 == word1) {
    word3 = words[Math.floor(Math.random() * words.length)];
}

const replyWord1 = document.getElementById("word01");
replyWord1.innerText = word1;
const replyWord2 = document.getElementById("word02");
replyWord2.innerText = word2;
const replyWord3 = document.getElementById("word03");
replyWord3.innerText = word3;

let wordArray = word1.split('');
let wordArray2 = word2.split('');
let wordArray3 = word3.split('');

let line = null;
let line1 = null;
let line2 = null;


//timer

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        if (seconds < 1){
            alert('acabou o tempo')
            createWordFind();
           
        }
    }, 1000);
}
window.onload = function () {
    let duration = 10  ; 
        display = document.querySelector('#timer'); 
    startTimer(duration, display);
};

function createWordFind() {

    //criar o caça palavras

    //adicionar palavras na tabela
    line = table[Math.floor(Math.random() * table.length)];

    line1 = table[Math.floor(Math.random() * table.length)];

    line2 = table[Math.floor(Math.random() * table.length)];

    while (line == line1) {
        line1 = table[Math.floor(Math.random() * table.length)];
    }
    while (line2 == line1 || line2 == line) {
        line2 = table[Math.floor(Math.random() * table.length)];
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

//Validação

createWordFind();
const tabela = document.getElementById('table');


let i = 0
let points = 0;
let totalPoints = 0;
let colunaWord = line.indexOf(wordArray[0]);
let linhaWord = table.indexOf(line);
function validation(event) {
    let target = event.target;
    let linhaClick = target.parentElement.rowIndex;
    let celClick = target.cellIndex;





    console.log(celClick);
    console.log(colunaWord);
    console.log(i)
    console.log('===============')
    if (celClick == colunaWord && linhaClick == linhaWord) {

        colunaWord++
        points++;
        target.classList.add('red')
        if (points == wordArray.length) {
            totalPoints++
            console.log('achei1')
        }
    }
    console.log(line)

    vitoria()

}



let points1 = 0;

let colunaWord1 = line1.indexOf(wordArray2[0]);
let linhaWord1 = table.indexOf(line1);
function validation1(event) {
    let target = event.target;
    let linhaClick = target.parentElement.rowIndex;
    let celClick = target.cellIndex;





    console.log(celClick);
    console.log(colunaWord1);
    console.log('===============')
    if (celClick == colunaWord1 && linhaClick == linhaWord1) {

        colunaWord1++
        points1++;
        target.classList.add('red')
        if (points1 == wordArray2.length) {
            totalPoints++
            console.log('achei2')
        }
    }
    console.log(line1)

    vitoria()

}



let points2 = 0;
let colunaWord2 = line2.indexOf(wordArray3[0]);
let linhaWord2 = table.indexOf(line2);
function validation2(event) {
    let target = event.target;
    let linhaClick = target.parentElement.rowIndex;
    let celClick = target.cellIndex;





    console.log(celClick);
    console.log(colunaWord2);
    console.log('===============')
    if (celClick == colunaWord2 && linhaClick == linhaWord2) {

        colunaWord2++
        points2++;
        target.classList.add('red')
        if (points2 == wordArray3.length) {
            totalPoints++
            console.log('achei3')
        }
    }
    console.log(line2)

    vitoria()
}


tabela.addEventListener('click', function (event) {
    let target = event.target
    console.log(target.cellIndex)
    if (target.cellIndex == colunaWord && target.parentElement.rowIndex == linhaWord) {
        validation(event)
    } else if (target.cellIndex == colunaWord1 && target.parentElement.rowIndex == linhaWord1) {
        validation1(event)
    } else if (target.cellIndex == colunaWord2 && target.parentElement.rowIndex == linhaWord2) {
        validation2(event)
    }
})


function vitoria() {
    if (totalPoints === 3) {
        alert('você achou as 3 palavras, pede música no fantastico')
    }
}


/*console.log(table.indexOf(line))
console.log(line)
console.log(line.indexOf(wordArray[0]))
console.log(table.indexOf(line1))
console.log(line1)
console.log(line1.indexOf(wordArray2[0]))
console.log(table.indexOf(line2))
console.log(line2)*/