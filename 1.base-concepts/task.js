"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let d1;
  let d2;

  if (d > 0) {
    d1 = (- b + Math.sqrt(d) ) / (2 * a);
    d2 = (- b - Math.sqrt(d) ) / (2 * a);
    arr.push(d1, d2);
  } else if (d === 0) {
    d = - b / (2 * a);
    arr.push(d);
  } else if (d < 0) {
    arr = [];
  } 

  return arr;
}

solveEquation()

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let payment = contribution + (countMonths * monthlyPayment);

  return Number(payment.toFixed(2));
}

calculateTotalMortgage(15, 0, 10000, 36);
