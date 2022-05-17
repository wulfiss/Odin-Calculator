const operationsMap ={
    addition: function(previousValue, currentValue){
        return +previousValue + +currentValue;
    },
    subtraction: function(previousValue, currentValue){
        return +previousValue - +currentValue;
    },
    multiply: function(previousValue, currentValue){
        return +previousValue * +currentValue;
    },
    division: function(previousValue, currentValue){
        return (+previousValue == 0 || +currentValue == 0) ? "You cannot divide by 0" : +previousValue / +currentValue;
    },
    remainder: function(previousValue, currentValue){
        return (+previousValue % +currentValue + +currentValue) % +currentValue;
    },
}

const $buttons = document.querySelector('.buttons');
const displayNum = document.querySelector('#displayNum');
let currentValue = '';
let previousValue = '';
let operant = '';

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
    },
    b_add: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayNum.textContent ='';
        operant = "addition";
    },
    b_subtract: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayNum.textContent ='';
        operant = "subtraction";
    },
    b_multiply: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayNum.textContent ='';
        operant = "multiply";
    },
    b_divide: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayNum.textContent ='';
        operant = "division";
    },
    b_remainder: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayNum.textContent ='';
        operant = "remainder";
    },
    b_equal: function(e){
        currentValue = operationsMap[operant](previousValue, currentValue);
        displayNum.textContent = currentValue;
    }
}

$buttons.addEventListener('click', (e) => {
    let target = e.target;
    let handler;
    if(target.nodeName == "BUTTON" && (handler = target.getAttribute('data-handler'))){
        numButtonMap[handler](e)
    }
});


