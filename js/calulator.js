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
    }
}

function operationVerification(){
    if(currentValue && previousValue){
        currentValue = operationsMap[operator](previousValue, currentValue);
        displayCurrent.textContent = Number(Number(currentValue).toFixed(3));
    }else if(!currentValue && !previousValue){
        //currentValue = '';
        displayCurrent.textContent = '';
        operator = '';
    }
    showNewValue = true;
}

function clearDisplayCurrent(){
    if(showNewValue == true){
        displayCurrent.textContent = '';
        showNewValue = false;
    }
}


const $buttons = document.querySelector('.buttons');
const displayNum = document.querySelector('#displayNum');
const displayCurrent = document.querySelector('#displayCurrent');
let currentValue = '';
let previousValue = '';
let operator = '';
let showNewValue = false;



let numButtonMap = {
    b_dot: function(e){
        let matchDot = currentValue.match(/\./);
        if(!matchDot){
        displayCurrent.textContent += '.';
        currentValue += '.';
        }
    },
    b_one: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '1';
        currentValue += '1';
    },
    b_two: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '2';
        currentValue += '2';
    },
    b_three: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '3';
        currentValue += '3';
    },
    b_four: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '4';
        currentValue += '4';
    },
    b_five: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '5';
        currentValue += '5';
    },
    b_six: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '6';
        currentValue += '6';
    },
    b_seven: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '7';
        currentValue += '7';
    },
    b_eight: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '8';
        currentValue += '8';
    },
    b_nine: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '9';
        currentValue += '9';
    },
    b_zero: function(e){
        clearDisplayCurrent();
        displayCurrent.textContent += '0';
        currentValue += '0';
    },
    b_add: function(e){
        operationVerification();
        previousValue = currentValue;
        currentValue = '';
        operator = "addition";
        
    },
    b_subtract: function(e){
        operationVerification();
        previousValue = currentValue;
        currentValue = '';
        operator = "subtraction";
        
    },
    b_multiply: function(e){
        operationVerification();
        previousValue = currentValue;
        currentValue = '';
        operator = "multiply";
        
    },
    b_divide: function(e){
        operationVerification();
        previousValue = currentValue;
        currentValue = '';
        operator = "division";
        
    },
    b_remainder: function(e){
        operationVerification();
        previousValue = currentValue;
        currentValue = '';
        operator = "remainder";
        
    },
    b_equal: function(e){
        if(!previousValue){
            displayCurrent.textContent = currentValue;
        }
        operationVerification();
        previousValue = '';
        
    },
    b_clear: function(e){
        currentValue = '';
        previousValue = '';
        operator = '';
        displayCurrent.textContent = '';
    },
    b_backspace: function(e){
        currentValue = '';
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


