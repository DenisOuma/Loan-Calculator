// alculation of Elements
const calculation1 = document.getElementById("loan-form");
calculation1.addEventListener("submit", function(e){
    e.preventDefault()
    const loanAmount = document.getElementById("amount");
    const loanIntrest = document.getElementById("interest")
    const yearsPeriod = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const loanPayment = document.getElementById("total-payment");
    const totalIntrest = document.getElementById("total-interest");

    // Calculating the Monthly Payment Amount
    const calculatedIntrest = parseFloat(loanIntrest.value)/ 100 / 12;
    const calculatedPayment = parseFloat(yearsPeriod.value) * 12;
    const principal = parseFloat(loanAmount.value);
    // Calculation
    const digitsX = Math.pow(1 + calculatedPayment, calculatedIntrest);
    const monthly = (principal * digitsX * calculatedIntrest) / (digitsX - 1);
    // Checking conditions for monthly Payment
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        loanPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalIntrest.value = ((monthly * calculatedPayment)-principal).toFixed(2);
    }else{
        console.log('Please check yout numbers')
    }
});