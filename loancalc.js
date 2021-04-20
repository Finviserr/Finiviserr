// import Big from 'big.js';


const loanAmt = document.getElementById('loan-amount');
const calcBtn = document.querySelector(".btn-submit")
const intRate = document.getElementById("interestRate")
const loanMonths = document.getElementById("loan-months")
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
console.log(loanMonths.value)
var interestRateMonthly = (((intRate.value)/100)/12).toFixed(4);
console.log(interestRateMonthly)
// monthlyPayment = (loanValue * (intRate*(Math.pow(1 + intRate)),loanMonths))/(Math.pow(1+intRate),loanMonths)-1
// console.log(monthlyPayment.toFixed(2))
let s = 1 + Number(interestRateMonthly);
var x = loanValue * interestRateMonthly * (Math.pow((s),loanMonths.value));
console.log(Math.pow((s),loanMonths.value))
console.log(s)
console.log((x))
var y = ((Math.pow((s),loanMonths.value))-1);
console.log(y)

console.log((x)/(y))
})

//let log10Y = Math.log(1+interestRateMonthly)*loanMonths.value/Math.log(10)

  
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
