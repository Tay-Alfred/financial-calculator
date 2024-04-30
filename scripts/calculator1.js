function calculateMortgage() {
  var loanAmount = Number(document.getElementById('loanAmount').value);
  var interestRate = Number(document.getElementById('interestRate').value);
  var loanTerm = Number(document.getElementById('loanTerm').value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
    document.getElementById('result').innerText = "Please enter valid positive numbers for all fields.";
  } else {
    var monthlyInterestRate = (interestRate / 100) / 12;
    var totalPayments = loanTerm * 12;
    var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    document.getElementById('result').innerText = "Monthly Payment: $" + monthlyPayment.toFixed(2);
  }
}