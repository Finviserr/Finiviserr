var s1 = document.getElementById('select1');
const calcBtn = document.querySelector(".btn-submit");
const savingsGoal = document.getElementById('savings-goal')
const interestRate =  document.getElementById('interest-rate')
const savingsMonths = document.getElementById('savings-duration-months');

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
// for now consider savingsMonthsInput = t (i-e time in years)

var savingsGoalInput = savingsGoal.value;
var interestRateInput = (interestRate.value)/100;
var savingsMonthsInput = savingsMonths.value;


// Calculation for Savings Goal (with Interest)
const numerator = savingsGoalInput * (interestRateInput/n);
console.log(numerator)
const denominator = (Math.pow((1+ (interestRateInput/n)),(n*savingsMonthsInput)))-1;
console.log(denominator)
const result = numerator/denominator;
console.log(result);
    
});

function populate(s1){
console.log("change")
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

