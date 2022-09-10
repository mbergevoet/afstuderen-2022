console.log('Gekoppelt!')

const xhr = new XMLHttpRequest();

// Global consts voor de elementen uit de html
const form = document.querySelector("form");
const radioBtnOne = document.querySelector("#radioOne");
const radioBtnTwo = document.querySelector("#radioTwo");
const startDate = document.querySelector("#begindatum");
const endDate = document.querySelector("#einddatum");
const rangeOne = document.querySelector("#lesstof");
const rangeTwo = document.querySelector("#uitleg");
const rangeThree = document.querySelector("#eigeninzicht");

// functie die checkt of localStorage beshcikbaar is
// Bron: https://gist.github.com/antoine-pous/c73e5a3a3b1e9507597d 
localStorageChecker = function () {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

// Met hulp van Oussama
// Schrijft de ingevulde waarde weg in een object in localStorage
form.addEventListener('blur', (event) => {
    const formData = new FormData(form);
    let formEntryData = {};

    for (const pair of formData.entries()) {
        formEntryData[pair[0]] = pair[1];
    }

    if (localStorageChecker()) {
        localStorage.setItem(form.id, JSON.stringify(formEntryData));
    }

}, true);

// Met hulp van Oussama
// Schrijft de opgeslagen data terug in het formulier als het is opgeslagen
function loadFormDataFromLocalStorage() {
    const storedFormData = localStorage.getItem(form.id);

    if (localStorageChecker()) {
        if (storedFormData) {
            const parsedStoredFormData = JSON.parse(storedFormData);

            for (var pair of Object.entries(parsedStoredFormData)) {
                const pairDomElement = document.getElementById(pair[0]);

                if (pairDomElement) {
                    pairDomElement.value = pair[1];

                    if (pairDomElement.type == 'range' && pairDomElement.value == pair[1]) {
                        const outputDomElement = document.getElementsByClassName(pair[0])[0];
                        outputDomElement.innerHTML = pair[1];
                    }
                } else {
                    const pairDomElements = document.getElementsByClassName(pair[0]);

                    for (const pairDomElement of pairDomElements) {
                        if (pairDomElement.type == 'radio' && pairDomElement.value == pair[1]) {
                            pairDomElement.checked = true;
                        }
                    }
                }
            }
        }
    }
}

// Op DOMContentLoaded zal de functie om de opgeslagen data te laten zien worden getriggert 
document.addEventListener('DOMContentLoaded', function () {
    loadFormDataFromLocalStorage();
}, false);

// Functies die het check icoontje laten zien door een class toe te voegen die de opacity op 1 zet
radioBtnOne.addEventListener('click', function () {
    const icon = document.querySelector('#iconOne')
    if (radioBtnOne.checked === true) {
        icon.classList.add('visible')
    }
})

radioBtnTwo.addEventListener('click', function () {
    const icon = document.querySelector('#iconTwo')
    if (radioBtnTwo.checked === true) {
        icon.classList.add('visible')
    }
})

startDate.addEventListener('focusout', function () {
    const icon = document.querySelector('#iconThree')
    if (startDate.value != '') {
        icon.classList.add('visible')
    }
})

endDate.addEventListener('focusout', function () {
    const icon = document.querySelector('#iconFour')
    if (endDate.value != '') {
        icon.classList.add('visible')
    }
})

rangeOne.addEventListener('focusout', function () {
    const icon = document.querySelector('#iconFive')
    if (rangeOne.value != 0 || rangeTwo.value != null) {
        icon.classList.add('visible')
    }
})

rangeTwo.addEventListener('focusout', function () {
    const icon = document.querySelector('#iconSix')
    if (rangeTwo.value != 0 || rangeTwo.value != null) {
        icon.classList.add('visible')
    }
})

rangeThree.addEventListener('focusout', function () {
    const icon = document.querySelector('#iconSeven')
    if (rangeThree.value != '') {
        icon.classList.add('visible')
    }
})