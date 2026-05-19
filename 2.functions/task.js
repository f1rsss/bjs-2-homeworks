// Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {min: undefined, max: undefined, avg: undefined};
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, x) => acc + x, 0);
  let avg = +(sum / arr.length).toFixed(2);
  
  return { min, max, avg };
}

// Задача 2 - насадки
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, x) => acc + x, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) return 0;
  return sumEvenElement / countEvenElement;
}

// Задача 3 - мясорубка
function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;
  
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++) {
    const currentResult = func(...arrOfArr[i]);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  
  return maxWorkerResult;
}