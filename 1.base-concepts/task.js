"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    arr.push((- b + Math.sqrt(d) ) / (2 * a), (- b - Math.sqrt(d) ) / (2 * a));
  } else if (d === 0) {
    arr.push(- b / (2 * a));
  }

  return arr;
}

solveEquation()

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let payment = countMonths * monthlyPayment;

  return Number(payment.toFixed(2));
}

calculateTotalMortgage(15, 0, 10000, 36);
