    
    const incomeField =document.getElementById('income');
    
    function calculateExpenses (){
        const foodField=document.getElementById("food");
        const incomeValue =parseFloat(incomeField.value);
       
        const foodValue =parseFloat( foodField.value);
        const rentField =document.getElementById("rent");
        const rentValue = parseFloat(rentField.value);
        const clothsField=document.getElementById("clothes");
        const clothsValue=parseFloat(clothsField.value);


        const allExpense=foodValue + rentValue + clothsValue;

        const totalExpense= document.getElementById("total-expense");
        totalExpense.innerText=allExpense;

        const afterExpenseBalance=incomeValue-allExpense;
        console.log(incomeValue,allExpense);
        const remainingBalaceText= document.getElementById("balance")
        remainingBalaceText.innerText=afterExpenseBalance;
}


function calculateSavings(){
    const saveField=document.getElementById("save")
    const saveFieldVlaue=parseFloat(saveField.value);
    const  afterExpenseBalanceText= document.getElementById('balance').innerText;
    const afterExpenseBalance=parseFloat(afterExpenseBalanceText)
   
    const savingAmountText=document.getElementById("saving-amount")
    const remainingBalace=document.getElementById("remaining-balance")
    const incomeValue=parseFloat(incomeField.value)
    const savingAmount = (saveFieldVlaue/100) *incomeValue;
    savingAmountText.innerText=savingAmount;
    const afterSavingBalance =  afterExpenseBalance-savingAmount;
    
    remainingBalace.innerText=afterSavingBalance;
}

