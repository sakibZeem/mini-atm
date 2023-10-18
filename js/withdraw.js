document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = getInputValueById('withdraw-amount');
    const previousTotalWithdraw = getElementValueById('withdraw-total');
    const newTotalWithdraw = previousTotalWithdraw + withdrawAmount;
    
    const currentBalance = getElementValueById('balance-total');
    const newBalance = currentBalance - withdrawAmount;
    if(withdrawAmount > currentBalance){
        alert('Insufficient Balance');
        return;
    }
    else{
        setElementValueById('withdraw-total', newTotalWithdraw);
        setElementValueById('balance-total', newBalance);
    }
})