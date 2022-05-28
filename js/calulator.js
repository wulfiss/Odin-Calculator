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
        return +previousValue == 0 || +currentValue == 0 ? "ERROR" : (+previousValue / +currentValue);
    },
    remainder: function(previousValue, currentValue){
        return (+previousValue % +currentValue + +currentValue) % +currentValue;
    },    
 }

function operationVerification(){
    if(currentValue && previousValue){
        currentValue = operationsMap[operator](previousValue, currentValue);
        displayCurrent.textContent = scientificNotation(currentValue);
    }else if(!currentValue && !previousValue){
        currentValue = '';
        displayCurrent.textContent = '';
        operator = '';
    }
    showNewValue = true;
}

function scientificNotation(currentValue){
    if(currentValue.length > 4){
        return (+currentValue).toExponential(2);
    }else{
        return (+currentValue);
    }
}

function displayNumorNot(num, currentValue1){
    
    let x = currentValue.length;

    if(x < 4){
        return currentValue;
    }else{
        return scientificNotation(currentValue1); 
    }
}

function clearDisplayCurrent(){
    if(showNewValue == true){
        displayCurrent.textContent = '';
        currentValue = '';
        showNewValue = false;
    }
}
function checkCurrentValue(){
    if(currentValue != ''){
        previousValue = currentValue;
        currentValue = '';
    };
}

function negative(currentValue){
   if(!currentValue){
        showNewValue = false;
        return "-";
   }else{
        return currentValue * -1;
   }
} 

function operationChar(content){
    if(content.length > 26){
        displayPrevious.textContent = '...';
    }else{
        return content;
    }
}

function nowShowingMoreSign(sign){
    let x = displayPrevious.textContent.length;
    if(displayCurrent.textContent != ''){
        if(showNewSign == true){
            displayPrevious.textContent += displayCurrent.textContent + " " + sign + " ";
            showNewSign = false;
        }
    }
}


function replaceSign(sign){
    let x = displayPrevious.textContent.length;
    let str = '';
    if(showNewSign == false){
       str = displayPrevious.textContent.split('');
       str[x-2] = sign;
       displayPrevious.textContent = '';
       displayPrevious.textContent = str.join(''); 
    }
}

const $buttons = document.querySelector('.buttons');
const displayNum = document.querySelector('#displayNum');
const displayCurrent = document.querySelector('#displayCurrent');
const displayPrevious = document.querySelector('#displayPrevious');

let currentValue = '';
let previousValue = '';
let operator = '';
let showNewValue = false;
let showNewSign = false;


let numButtonMap = {
    Period: function(e){
        let matchDot = currentValue.match(/\./);
        if(matchDot == null && currentValue != ''){
        displayCurrent.textContent += '.';
        currentValue += '.';
        }
    },
    Digit1: function(e){
        clearDisplayCurrent();
        currentValue += '1';
        displayCurrent.textContent = displayNumorNot('1', currentValue);
        showNewSign = true;
    },
    Digit2: function(e){
        clearDisplayCurrent();
        currentValue += '2';
        displayCurrent.textContent = displayNumorNot('2', currentValue);
        showNewSign = true;
    },
    Digit3: function(e){
        clearDisplayCurrent();
        currentValue += '3';
        displayCurrent.textContent = displayNumorNot('3', currentValue);
        showNewSign = true;
    },
    Digit4: function(e){
        clearDisplayCurrent();
        currentValue += '4';
        displayCurrent.textContent = displayNumorNot('4', currentValue);
        showNewSign = true;
    },
    Digit5: function(e){
        clearDisplayCurrent();
        currentValue += '5';
        displayCurrent.textContent = displayNumorNot('5', currentValue);
        showNewSign = true;
    },
    Digit6: function(e){ 
        clearDisplayCurrent();
        currentValue += '6';
        displayCurrent.textContent = displayNumorNot('6', currentValue);
        showNewSign = true;
    },
    Digit7: function(e){
        clearDisplayCurrent();
        currentValue += '7';
        displayCurrent.textContent = displayNumorNot('7', currentValue);
        showNewSign = true;
    },
    Digit8: function(e){
        clearDisplayCurrent();
        currentValue += '8';
        displayCurrent.textContent = displayNumorNot('8', currentValue);
        showNewSign = true;
    },
    Digit9: function(e){
        clearDisplayCurrent();
        currentValue += '9';
        displayCurrent.textContent = displayNumorNot('9', currentValue);
        showNewSign = true;
    },
    Digit0: function(e){
        clearDisplayCurrent();
        currentValue += '0';
        displayCurrent.textContent = displayNumorNot('0', currentValue);
        showNewSign = true;
    },
    NumpadAdd: function(e){
        nowShowingMoreSign('+');
        replaceSign('+');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "addition";
    },
    NumpadSubtract: function(e){
        nowShowingMoreSign('-');
        replaceSign('-');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "subtraction";
    },
    NumpadMultiply: function(e){
        nowShowingMoreSign('x');
        replaceSign('x');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "multiply";
        
    },
    Slash: function(e){
        nowShowingMoreSign('/');
        replaceSign('/');
        operationChar(displayPrevious.textContent);
        operationVerification();
        checkCurrentValue();
        operator = "division";
        
    },
    b_negative: function(e){
        currentValue = negative(currentValue);
        displayCurrent.textContent = currentValue;
    },
    Equal: function(e){
        if(!previousValue){
            displayCurrent.textContent = currentValue;
        }
        operationVerification();
        previousValue = '';
        displayPrevious.textContent = '';
    },
    b_clear: function(e){
        currentValue = '';
        previousValue = '';
        operator = '';
        displayCurrent.textContent = '';
        displayPrevious.textContent = '';
    },
    Backspace: function(e){
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

window.addEventListener('keydown', (e) =>{
    numButtonMap[e.code](e);
});

