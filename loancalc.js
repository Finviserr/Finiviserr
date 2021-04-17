
const loanAmt = document.getElementById('loan-amount');
const calcBtn = document.querySelector(".btn-submit")
const intRate = document.getElementById("interestRate")
const loanMonths = document.getElementById("loan-months")
var monthlyPayment;


calcBtn.addEventListener("click", function(e){
    e.preventDefault();
var loanValue= loanAmt.value;
console.log(loanMonths.value)
monthlyPayment = (loanValue * (intRate*(Math.pow(1 + intRate)),loanMonths))/(Math.pow(1+intRate),loanMonths)-1
console.log(monthlyPayment)

})

  

