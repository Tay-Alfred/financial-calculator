// //function calculateMortgage() {
//   var loanAmount = Number(document.getElementById('loanAmount').value);
//   var interestRate = Number(document.getElementById('interestRate').value);
//   var loanTerm = Number(document.getElementById('loanTerm').value);

//   if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
//     document.getElementById('result').innerText = "Please enter valid positive numbers for all fields.";
//   } else {
//     var monthlyInterestRate = (interestRate / 100) / 12;
//     var totalPayments = loanTerm * 12;
//     var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

//     document.getElementById('result').innerText = "Monthly Payment: $" + monthlyPayment.toFixed(2);
//   }//

"use strict";

//grab all input from HTML
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");


//function to calculate the mortgage
function calculateMortgage(){
//calc
const loanAmount = parseFloat(document.getElementById("loanAmount").value);
const interestRate = parseFloat("interestRate".value);
const loanTerm = parseFloat("loanTerm".value);

//monthly interest rate
const monthlyInterestRate = interestRate /100 / 12;

// number of payments
const numberOfPayments = loanTerm * 12;

//calculate monthly mortgage payment
const monthlyPayment = loanAmount * monthlyInterestRate * (Math.pow(1 +monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
}



//trigger the html on button click
    document.getElementById('result').innerText = "Monthly Payment: $" + monthlyPayment.toFixed(2);