// // Дан массив из нескольких элементов(вывести все возможные перестановки)

let factorial = (n) => {
  let all = 1;
  for (let i = 2; i <= n; i++) {
    all *= i;
  }
  return all;
};

let allRearranging = (startArr) => {
  let resultArray = [];
  let expectedLen = factorial(startArr.length);
  allRearrangingInternal(startArr, resultArray, expectedLen);
  return resultArray;
};
let allRearrangingInternal = (startArr, resultArray, expectedLen) => {
  let replay = false;
  let findArray = [];
  let secondArr = [...startArr];
  let startArr1 = [...startArr];
  let item;
  while (secondArr[0] !== findArray[0]) {
    resultArray.push(startArr1);
    if (resultArray.length === expectedLen) {
      return;
    }
    item = startArr.shift();
    startArr.push(item);
    startArr1 = [...startArr];
    findArray = startArr;
  }
  for (let i = 0; i < resultArray.length; i++) {
    let newArrayValue = [...resultArray[i]];
    let first = newArrayValue[0];
    newArrayValue[0] = newArrayValue[1];
    newArrayValue[1] = first;
    for (let j = 0; j < resultArray.length; j++) {
      if (resultArray[j].join("") === newArrayValue.join("")) {
        replay = true;
        break;
      }
    }
    if (replay === false) {
      allRearrangingInternal(newArrayValue, resultArray, expectedLen);
    } else {
      replay = false;
    }
  }
};
let x = allRearranging([1, "a", 2, "b", 3]);
console.log(x);


let swapElement = (i, k, arr) => {
  let el = arr[i];
  arr[i] = arr[k];
  arr[k] = el;
};

let pushElement = (inputArr, changedArray, resultArray) => {
  for (i = 0; i < changedArray.length; i++) {
    changedArray[i] = inputArr[changedArray[i] - 1];
  }
  resultArray.push(changedArray);
};

let readln = (inputArr) => {
  let resultArray = [...[inputArr]];
  let B = [];
  for (i = 0; i < inputArr.length; i++) {
    B[i] = i + 1;
  }
  let N = B.length - 1;
  while (true) {
    i = N;
    while (i >= 0) {
      if (B[i] < B[i + 1]) break;
      if (i == 0) return resultArray;
      i--;
    }
    for (let j = i + 1; j <= N; j++) {
      if (B[j] > B[i]) {
        k = j;
      }
    }
    swapElement(i, k, B);
    let lastElementIndex = B.length - 1;
    j = i + 1;
    while (j < lastElementIndex) {
      swapElement(j, lastElementIndex, B);
      lastElementIndex--;
      j++;
    }
    let copy = [...B];
    pushElement(inputArr, copy, resultArray);
  }
};
let myArray = [2, 4, 5, "f"] 
console.log(readln(myArray));
