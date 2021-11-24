const myText = document.getElementsByTagName("p");
const retAnswer = document.getElementById("spanned");


document.getElementById("searchAnswer").onclick = function(){
    let myAnswer = Math.floor(Math.random() * (10 - 1) + 1);
    switch (myAnswer){
        case 1:
            retAnswer.innerText = "Sim !";           
            break
        case 2:
            retAnswer.innerText = "Não !!!";
            break
        case 3:
            retAnswer.innerText = "Provavelmente sim...";
            break
        case 4:
            retAnswer.innerText ="Sabe que também não sei." ;
            break
        case 5:
            retAnswer.innerText = "Vai";
            break
        case 6:
            retAnswer.innerText = "Nem ferrando...";
            break
        case 7:
            retAnswer.innerText = "Eu acho que sim";
            break
        case 8:
            retAnswer.innerText = "Pode ser que sim..." ;
            break
        case 9:
            retAnswer.innerText = "Pode ser que não...";
            break
        } 
}



   