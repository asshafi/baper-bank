// step-1: add event hanlder with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amoun from the withdraminput 
    // also make sure to convert the input into a number by using parsfloat()
    const withddrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withddrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the input field 
    withddrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get preivous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   

    // Step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insuficiant Balance');
        return;
    }
     // step-4: calculate total withdraw amount 
       // Step-4.5: set total withdraw amount
       const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
       withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculte new balance total and set 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




})