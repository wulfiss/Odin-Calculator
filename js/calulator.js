const suma = (numOne, numTwo) => {
    return +numOne + +numTwo;
};

const resta = (numOne, numTwo) => {
    return +numOne - +numTwo;
};

const multi = (numOne, numTwo) => {
    return +numOne * +numTwo;
};

const divi = (numOne, numTwo) => {
    if(+numOne == 0 || +numTwo == 0){
        return "You can't divide 0!";
    }
    return +numOne / +numTwo;
};

const mod = (numOne, numTwo) => {
    return (+numOne % +numTwo + +numTwo) % +numTwo;
};

const equal = (previousValue, currentValue, operant) => {
    let result = 0;
    switch (operant) {
            case 'suma':
            result = suma(previousValue, currentValue);
            break;
        case 'resta':
            result = resta(previousValue, currentValue);
            break;
        case 'divi':
            result = divi(previousValue, currentValue);
            break;
        case 'mod':
            result = mod(previousValue, currentValue);
    }
    return result;
};

const $buttons = document.querySelector('.buttons');

const $add = document.querySelector('#sumaB');
const $divi = document.querySelector('#diviB');
const $subtraction = document.querySelector('#restaB');
const $mod = document.querySelector('#restB');
const $equal = document.querySelector('#equalB');

const displayNum = document.querySelector('#displayNum');
let currentValue = '';
let previousValue = '';
let operant = '';

/*
$add.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "suma";
});

$subtraction.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "resta";
});

$divi.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "divi";
});

$mod.addEventListener('click', e => {
    previousValue = currentValue;
    currentValue = '';
    displayNum.textContent ='';
    operant = "mod";
});

$equal.addEventListener('click', e => {
    currentValue = equal(previousValue, currentValue, operant);
    displayNum.textContent = currentValue;
});

*/
let numButtonMap = {
    b_one: function(e){
        displayNum.textContent += '1';
        currentValue += '1';
    },
    b_two: function(e){
        displayNum.textContent += '2';
        currentValue += '2';
    },
    b_three: function(e){
        displayNum.textContent += '3';
        currentValue += '3';
    },
    b_four: function(e){
        displayNum.textContent += '4';
        currentValue += '4';
    },
    b_five: function(e){
        displayNum.textContent += '5';
        currentValue += '5';
    },
    b_six: function(e){
        displayNum.textContent += '6';
        currentValue += '6';
    },
    b_seven: function(e){
        displayNum.textContent += '7';
        currentValue += '7';
    },
    b_eight: function(e){
        displayNum.textContent += '8';
        currentValue += '8';
    },
    b_nine: function(e){
        displayNum.textContent += '9';
        currentValue += '9';
    },
    b_zero: function(e){
        displayNum.textContent += '0';
        currentValue += '0';
    }
}

$buttons.addEventListener('click', (e) => {
    let target = e.target;
    let handler;
    if(target.nodeName == "BUTTON" && (handler = target.getAttribute('data-handler'))){
        numButtonMap[handler](e)
    }
});


