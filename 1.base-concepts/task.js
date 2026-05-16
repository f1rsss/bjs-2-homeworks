function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootOne, rootTwo);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInDecimal = percent / 100;
  let monthlyRate = percentInDecimal / 12;
  let loanBody = amount - contribution;
  
  if (loanBody <= 0) return 0;
  
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  let roundedTotal = Math.round(totalAmount * 100) / 100;
  
  return roundedTotal;
}