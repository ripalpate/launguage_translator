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
    outputStringHindi = ' ';
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i = 0; i < inputStringArray.length; i++) {
        outputStringHindi += `  ${hindiLang[inputStringArray[i]]}`;
        if (!hindiLang[inputStringArray[i]]){
            alert('Please try different message. words not found');
        }
    }
    printToDom(outputStringHindi, 'output_textarea');
}

let outputStringSpanish = '';
const newStringBuilderSpanishLang = () => {
    outputStringSpanish = ' ';
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i= 0; i < inputStringArray.length; i++) {
        outputStringSpanish += `  ${spanishLang[inputStringArray[i]]} `;
        if (!hindiLang[inputStringArray[i]]){
            alert('Please try different message. words not found');
        }
    }
    printToDom(outputStringSpanish, 'output_textarea');   
}

let outputStringItalian = '';
const newStringBuilderItalianLang = () => {
    outputStringItalian = ' ';
    let inputString1 = document.getElementById('input_textarea');
    let inputString = inputString1.value.toLowerCase();
    let inputStringArray = inputString.split(' ');
    for (let i= 0; i < inputStringArray.length; i++) {
        outputStringItalian += `  ${italianLang[inputStringArray[i]]} `;
        if (!hindiLang[inputStringArray[i]]){
            alert('Please try different message. words not found');
        }
    }
    printToDom(outputStringItalian, 'output_textarea');    
}

let hindiButton = document.getElementById("hindiBtn");
hindiButton.addEventListener("click", () => {
    newStringBuilderHindiLang();
});

let spanishButton = document.getElementById("spanishBtn")
spanishButton.addEventListener("click", () => {
    newStringBuilderSpanishLang();
});

let italianButton = document.getElementById("italianBtn")
italianButton.addEventListener("click", () => {
    newStringBuilderItalianLang();
});







