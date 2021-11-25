
// Nosso Modal

const modal = document.getElementById("myModal");
const retAnswer = document.getElementById("victory");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("searchAnswer").onclick = function () {
    let myAnswer = Math.floor(Math.random() * (10 - 1) + 1);
    switch (myAnswer) {
        case 1:
            modal.style.display = "block"
            retAnswer.innerText = "Sim !";
            break
        case 2:
            modal.style.display = "block"
            retAnswer.innerText = "Não !!!";
            break
        case 3:
            modal.style.display = "block"
            retAnswer.innerText = "Provavelmente sim...";
            break
        case 4:
            modal.style.display = "block"
            retAnswer.innerText = "Sabe que também não sei.";
            break
        case 5:
            modal.style.display = "block"
            retAnswer.innerText = "Vai";
            break
        case 6:
            modal.style.display = "block"
            retAnswer.innerText = "Nem ferrando...";
            break
        case 7:
            modal.style.display = "block"
            retAnswer.innerText = "Eu acho que sim";
            break
        case 8:
            modal.style.display = "block"
            retAnswer.innerText = "Pode ser que sim...";
            break
        case 9:
            modal.style.display = "block"
            retAnswer.innerText = "Pode ser que não...";
            break
    }
}



