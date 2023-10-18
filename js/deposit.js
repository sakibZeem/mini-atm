
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get deposit field value using function
    const newDepositAmount = getInputValueById('deposit-amount');
    
    // get previous total deposit using function
    const previousTotalDeposit = getElementValueById('deposit-total');
    
    // new deposit total
    const newDepositTotal = previousTotalDeposit + newDepositAmount;

    // set total deposit by calling a function
    setElementValueById('deposit-total', newDepositTotal);

    // get previousBalance value
    const previousBalance = getElementValueById('balance-total');
    
    // set newBalance value
    const newBalance = previousBalance + newDepositAmount;
    setElementValueById('balance-total', newBalance);
    
})