// import Big from 'big.js';


const loanAmt = document.getElementById('loan-amount');
const calcBtn = document.querySelector(".btn-submit")
const intRate = document.getElementById("interestRate")
const loanMonths = document.getElementById("loan-months")
const monthlyRepayAmount = document.getElementById("monthly-repay-amount")
const monthlyIncome = document.getElementById("month-income")
const loanResults = document.getElementById('loan-results')

var monthlyPayment;

// The following function limits the loan amt to decimal places
function decimalCheck(){
    var dec = document.getElementById('loan-amount').value;
    if(dec.includes(".")){
        var res = dec.substring(dec.indexOf(".")+1);
        var kl = res.split("");
        if(kl.length > 1){
         document.getElementById('loan-amount').value=(parseInt(dec * 100) / 
          100).toFixed(2);
        }
      }
    }

    function decimalCheckInterest(){
        var int = document.getElementById('interestRate').value;
        if(int.includes(".")){
            var res = int.substring(int.indexOf(".")+1);
            var kl = res.split("");
            if(kl.length > 1){
             document.getElementById('interestRate').value=(parseInt(int * 1000) / 
              1000).toFixed(3);
            }
          }
}

calcBtn.addEventListener("click", function(e){
e.preventDefault();
var loanValue= loanAmt.value;
var interestRateMonthly = (((intRate.value)/100)/12).toFixed(4);
// converting the interest rate to number and then increment by 1
let s = 1 + Number(interestRateMonthly);
var x = loanValue * interestRateMonthly * (Math.pow((s),loanMonths.value));
var y = ((Math.pow((s),loanMonths.value))-1);
var resultMonthlyPayments = x / y;
console.log(resultMonthlyPayments)

displayResults(resultMonthlyPayments);

})

function displayResults(result){

monthlyRepayAmount.innerHTML = `$ ${result.toFixed(3)}`

var halfMonthlyIncome = monthlyIncome.value * 0.5;
console.log(monthlyIncome.value)
console.log(halfMonthlyIncome)

if(result > halfMonthlyIncome){
loanResults.classList.add('red')
loanResults.innerHTML= `Caution: <br>We noticed that your monthly repayment is greater than 50% of your
                        net monthly income (Given that you're not servicing any other loans or debt).
                        We would like to suggest, that you go for a loan with lower amount.`

} else if(result < halfMonthlyIncome){
  loanResults.classList.add('green');
  loanResults.innerHTML = `Good to go! <br> We noticed that your monthly repayment is less than 50% of your
                            net monthly income (Given that you're not servicing any other loans or debt).
                            We believe that repaying the loan won't be difficult for you.`
}
}
