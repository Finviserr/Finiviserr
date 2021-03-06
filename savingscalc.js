var s1 = document.getElementById('select1');
const calcBtn = document.querySelector(".btn-submit");
const savingsGoal = document.getElementById('savings-goal')
const interestRate =  document.getElementById('interest-rate')
const savingsYears = document.getElementById('savings-duration-years');
const savingsMonths = document.getElementById('savings-duration-months')
const savingInterestOutput = document.getElementById('saving-interest-amount')
const monthlyDeposit = document.getElementById("monthly-payment")
const breakDownGrid = document.querySelector('.breakdown-grid')
const close = document.getElementById('close')

// The following function limits the savings amt to decimal places
function decimalCheck(){
    var dec = document.getElementById('savings-goal').value;
    if(dec.includes(".")){
        var res = dec.substring(dec.indexOf(".")+1);
        var kl = res.split("");
        if(kl.length > 1){
         document.getElementById('savings-goal').value=(parseInt(dec * 100) / 
          100).toFixed(2);
        }
      }
    }



calcBtn.addEventListener("click", function(e){
e.preventDefault();

let n=12;
// for now consider savingsYearsInput = t (i-e time in years)

var savingsGoalInput = savingsGoal.value;
var interestRateInput = (interestRate.value)/100;
var savingsYearsInput = (savingsYears.value)/12;
var savingsMonthsInput = savingsMonths.value;
var monthlyDepositInput = monthlyDeposit.value;


// Calculation for Savings Goal (with Interest)
const numerator = savingsGoalInput * (interestRateInput/n);
console.log(numerator)
const denominator = (Math.pow((1+ (interestRateInput/n)),(n*savingsYearsInput)))-1;
console.log(denominator)
const result = numerator/denominator;
console.log(result);

// Calculation for Savings Goal (without Interest)
var resultNoInterest= savingsGoalInput / savingsMonthsInput;
console.log(resultNoInterest)

// Calculation for Future Value of Savings(with Interest)
const numeratorFuture = monthlyDepositInput * ((Math.pow((1+ (interestRateInput/n)),(n*savingsYearsInput)))-1);
const denomFuture =  interestRateInput/n;
const resultFuture = numeratorFuture / denomFuture;

// Calculation for Future Value of Savings(without Interest)
var resultFutureNoInterest= monthlyDepositInput * savingsMonthsInput;
console.log(resultFutureNoInterest)


if(s1.value === 'monthly-saving-no-interest'){
  displayResultsNoInterest(resultNoInterest)
} else if(s1.value === 'monthly-saving-interest'){
  displayResultsWithInterest(result)
} else if(s1.value === 'future-saving-no-interest'){
  displayResultsFutureNoInterest(resultFutureNoInterest)
} else {
  displayResultFutureInterest(resultFuture)
}


});

// calcBtn.addEventListener('click',(e)=>{
//   breakDownGrid.style.display="block";
//   console.log(breakDownGrid)
//   // close.style.display="block"
  
// })

// close.addEventListener('click', ()=> {
//   breakDownGrid.style.display="none";
// })

function populate(s1,intDiv,savingsDurationDiv,savingDurMonthly,savingAmtDiv,monthlyPaymentDiv){
var s1 = document.getElementById(s1)
var interestDiv = document.getElementById('interest-rate-div')
var savingsDurationDiv = document.getElementById("savings-duration-div")
var savingsDurationMonthly = document.getElementById("savings-duration-div-monthly");
var savingsAmountDiv = document.getElementById("savings-amount-div")
var monthlyPaymentDiv = document.getElementById("monthly-payment-div")

if(s1.value === 'monthly-saving-no-interest'){
interestDiv.classList.add('hide')
savingsDurationDiv.classList.add('hide');
monthlyPaymentDiv.classList.add('hide')

} else if(s1.value === 'monthly-saving-interest'){
interestDiv.classList.remove('hide') 
savingsDurationDiv.classList.remove('hide')
savingsDurationMonthly.classList.add("hide");
monthlyPaymentDiv.classList.add('hide')
} else if(s1.value === 'future-saving-no-interest'){
interestDiv.classList.add('hide');
monthlyPaymentDiv.classList.remove('hide')
savingsAmountDiv.classList.add('hide')
savingsDurationDiv.classList.add('hide');
savingsDurationMonthly.classList.remove("hide");
}
else {
savingsDurationDiv.classList.remove("hide")
savingsAmountDiv.classList.add('hide')
savingsDurationMonthly.classList.add("hide") 
monthlyPaymentDiv.classList.remove('hide')
interestDiv.classList.remove('hide')
}
}

function displayResultsWithInterest(result){
  savingInterestOutput.innerHTML=`$ ${result.toLocaleString()}`
}

function displayResultsNoInterest(resultNoInt){
  savingInterestOutput.innerHTML=`$ ${resultNoInt.toLocaleString()}`
}

function displayResultFutureInterest(futureResult){
console.log(futureResult)
savingInterestOutput.innerHTML=`$ ${futureResult.toLocaleString()}`
}

function displayResultsFutureNoInterest(result){
savingInterestOutput.innerHTML=`$ ${result.toLocaleString()}`
}



// ERROR HANDLING
function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function(input){
      if(input.value.trim() === ''){
        showError(input, `Input is required`)
        isRequired = true;
      } else {
        showSuccess(input)
     }
})
}

