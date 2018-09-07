let hindiLang = {
    "merry": "merry",
    "christmas": "christmas",
    "and": "aur",
    "happy": "mubarak",
    "new": "naya",
    "year": "saal"
};

let spanishLang = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "prospero",
    "new": "ano",
    "year": "nuevo"
};

let italianLang = {
    "merry": "buon",
    "christmas": "natale",
    "and": "e",
    "happy": "felice",
    "new": "anno",
    "year": "nuovo"
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

let outputString = '';
const newStringBuilder = () => {
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i = 0; i < inputStringArray.length; i++) {
        outputString += ' '+ hindiLang[inputStringArray[i]];
    }
    printToDom(outputString, 'output_textarea');
}
