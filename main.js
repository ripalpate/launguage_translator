const hindiLang = {
    "wish": "tamanna",
    "you": "tumhe",
    "a": "a",
    "merry": "merry",
    "christmas": "christmas",
    "and": "aur",
    "happy": "mubarak",
    "new": "naya",
    "year": "saal",
    "from": "se",
    "family": "parivaar",
    "have": "hai",
    "peace":"shaanti",
    "joy": "khushi",
    "love": "pyaar",
    "to": "seva mere",
    "your": "aapke"
};

const spanishLang = {
    "wish": "deseo",
    "you": "tu",
    "a": "un",
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "prospero",
    "new": "ano",
    "year": "nuevo",
    "from": "de",
    "family": "familia",
    "have": "tener",
    "peace":"paz",
    "joy": "alegría",
    "love": "amor",
    "to": "para",
    "your": "usted"
};

const italianLang = {
    "wish": "desiderio",
    "you": "tu",
    "a": "un",
    "merry": "buon",
    "christmas": "natale",
    "and": "e",
    "happy": "felice",
    "new": "anno",
    "year": "nuovo",
    "from": "a partire dal",
    "family": "famiglia",
    "have": "avere",
    "peace":"pace",
    "joy": "gioia",
    "love": "amore",
    "to": "alla",
    "your": "tua"
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}
let outputString = '';
const newLangStringBuilder = (language) => {
    outputString = ' ';
    let inputString = document.getElementById('input_textarea').value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i = 0; i < inputStringArray.length; i++) {
        outputString += `  ${language[inputStringArray[i]]}`;
        if (!language[inputStringArray[i]]){
            alert('Please try different words. word not found');
        }
    }
    printToDom(outputString, 'output_textarea');
}

const randLang = () => {
    randLangBox = Math.floor(Math.random()*3);
    if (randLangBox===0) {
        newLangStringBuilder(hindiLang);
    } else if (randLangBox===1){
        newLangStringBuilder(spanishLang);
    } else {
        newLangStringBuilder(italianLang);
    }
}

let hindiButton = document.getElementById("hindiBtn");
hindiButton.addEventListener("click", () => {
    newLangStringBuilder(hindiLang);
});

let spanishButton = document.getElementById("spanishBtn")
spanishButton.addEventListener("click", () => {
    newLangStringBuilder(spanishLang);
});

let italianButton = document.getElementById("italianBtn")
italianButton.addEventListener("click", () => {
    newLangStringBuilder(italianLang);
});

let luckyButton = document.getElementById("luckyBtn")
luckyButton.addEventListener("click", () => {
    randLang();
})





