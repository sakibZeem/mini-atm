function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    inputField.value = '';
    if(isNaN(inputValueString)){
        alert('Please enter amount in digit');
        return;
    }

    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, newValue){
    if(isNaN(newValue)){
        return;
    }
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}