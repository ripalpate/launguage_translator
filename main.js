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

let outputStringHindi = '';
const newStringBuilderHindiLang = () => {
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i = 0; i < inputStringArray.length; i++) {
        outputStringHindi += `  ${hindiLang[inputStringArray[i]]}`;
    }
    printToDom(outputStringHindi, 'output_textarea');
}

let outputStringSpanish = '';
const newStringBuilderSpanishLang = () => {
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i= 0; i < inputStringArray.length; i++) {
        outputStringSpanish += `  ${spanishLang[inputStringArray[i]]} `;
    }
    printToDom(outputStringSpanish, 'output_textarea');   
}

let outputStringItalian = '';
const newStringBuilderItalianLang = () => {
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i= 0; i < inputStringArray.length; i++) {
        outputStringItalian += `  ${italianLang[inputStringArray[i]]} `;
    }
    printToDom(outputStringItalian, 'output_textarea');    
}








