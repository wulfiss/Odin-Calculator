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
const displayCurrent = document.querySelector('#displayCurrent');
let currentValue = '';
let previousValue = '';
let operator = '';

let numButtonMap = {
    b_one: function(e){
        displayCurrent.textContent += '1';
        currentValue += '1';
    },
    b_two: function(e){
        displayCurrent.textContent += '2';
        currentValue += '2';
    },
    b_three: function(e){
        displayCurrent.textContent += '3';
        currentValue += '3';
    },
    b_four: function(e){
        displayCurrent.textContent += '4';
        currentValue += '4';
    },
    b_five: function(e){
        displayCurrent.textContent += '5';
        currentValue += '5';
    },
    b_six: function(e){
        displayCurrent.textContent += '6';
        currentValue += '6';
    },
    b_seven: function(e){
        displayCurrent.textContent += '7';
        currentValue += '7';
    },
    b_eight: function(e){
        displayCurrent.textContent += '8';
        currentValue += '8';
    },
    b_nine: function(e){
        displayCurrent.textContent += '9';
        currentValue += '9';
    },
    b_zero: function(e){
        displayCurrent.textContent += '0';
        currentValue += '0';
    },
    b_add: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayCurrent.textContent += ' + ';
        operator = "addition";
    },
    b_subtract: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayCurrent.textContent += ' - ';
        operator = "subtraction";
    },
    b_multiply: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayCurrent.textContent += ' * ';
        operator = "multiply";
    },
    b_divide: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayCurrent.textContent += ' / ';
        operator = "division";
    },
    b_remainder: function(e){
        previousValue = currentValue;
        currentValue = '';
        displayCurrent.textContent += ' % ';
        operator = "remainder";
    },
    b_equal: function(e){
        currentValue = operationsMap[operator](previousValue, currentValue);
        displayNum.textContent = Number(Number(currentValue).toFixed(3));
    },
    b_clear: function(e){
        currentValue = '';
        previousValue = '';
        operator = '';
        displayNum.textContent ='';
        displayCurrent.textContent = '';
    }
    
}

$buttons.addEventListener('click', (e) => {
    let target = e.target;
    let handler;
    if(target.nodeName == "BUTTON" && (handler = target.getAttribute('data-handler'))){
        numButtonMap[handler](e)
    }
});


