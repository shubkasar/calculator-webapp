const display = document.getElementById("display");

const appendToDisplay = (input) => {
    display.value += input;
}

const clearDisplay = (input) => {
    display.value = "";
}

const backspace = () => {
    display.value = display.value.slice(0,-1);
}

const parenthesis = () => {

    let openParanthesisMatches = display.value.match(/\(/g);
    let closeParanthesisMatches = display.value.match(/\)/g);

    let openParanthesisLength = openParanthesisMatches ? openParanthesisMatches.length : 0;
    let closeParanthesisLength = closeParanthesisMatches ? closeParanthesisMatches.length : 0;

    if(openParanthesisLength == closeParanthesisLength){
        appendToDisplay("(");
    }else{
        appendToDisplay(")");
    }
}

const calculate = (input) => {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

