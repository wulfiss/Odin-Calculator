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

const $one = document.querySelector('#oneB');
const $two = document.querySelector('#twoB');
const $zero = document.querySelector('#zeroB');

const $add = document.querySelector('#sumaB');
const $divi = document.querySelector('#diviB');
const $subtraction = document.querySelector('#restaB');
const $mod = document.querySelector('#restB');
const $equal = document.querySelector('#equalB');

const displayNum = document.querySelector('#displayNum');
let currentValue = '';
let previousValue = '';
let operant = '';

$one.addEventListener('click', e => {
    displayNum.textContent += '1';
    currentValue += '1';
});

$two.addEventListener('click', e => {
    displayNum.textContent += '2';
    currentValue += '2';
});

$zero.addEventListener('click', e => {
    displayNum.textContent += '0';
    currentValue += '0';
})

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

