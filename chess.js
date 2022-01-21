// массив 8 элементов, каждый из которых массив из 8 элементов (сочетания, размещения и перестановки)

let place = [
  [1, 0, 3, 4, 9, 300, 1, 20],
  [4, 2, 4, 100, 3, 50, 8, 9],
  [0, 11, 15, 22, 0, 19, 6, 40],
  [3, 5, 18, 14, 64, 0, 0, 70],
  [67, 85, 71, 59, 0, 0, 0, 1],
  [78, 34, 57, 99, 140, 260, 543, 20],
  [14, 84, 14, 0, 0, 0, 0, 0],
  [0, 13, 6, 15, 29, 345, 419, 8],
];
let calc = (x) => {
  let sum = 0;
  for (q = 0; q < place.length; q++) {
    for (w = 0; w < place[q].length; w++) {
      sum += place[q][w];
    }
  }
  console.log(sum);
};
calc();

let decoder = (cordinates) => {
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (i = 0; i < arr.length; i++) {
    if (typeof cordinates === "string") {
      let cord = {};
      let j = [...cordinates];
      if (arr[i] === j[0]) {
        cord.x = i + 1;
        cord.y = +j[1];
        return cord;
      }
    }
    if (i === cordinates.x - 1) {
      return `${arr[i]}${cordinates.y}`;
    }
  }
};

let bestStepforHorse = (startCordinates, finishCordinates) => {
  startCordinates = decoder(startCordinates);
  finishCordinates = decoder(finishCordinates);
  let startArray = [startCordinates];
  let resultArray = [];
  let resultFinish = [];
  let replay = false;
  let currentSum = 0;
  let maxCurrentSum = 0;
  for (let i = 0; i < startArray.length; i++) {
    let steps = [
      { x: startArray[i].x - 1, y: startArray[i].y + 2 },
      { x: startArray[i].x + 1, y: startArray[i].y + 2 },
      { x: startArray[i].x + 1, y: startArray[i].y - 2 },
      { x: startArray[i].x - 1, y: startArray[i].y - 2 },
      { x: startArray[i].x - 2, y: startArray[i].y - 1 },
      { x: startArray[i].x - 2, y: startArray[i].y + 1 },
      { x: startArray[i].x + 2, y: startArray[i].y + 1 },
      { x: startArray[i].x + 2, y: startArray[i].y - 1 },
    ];
    for (let j = 0; j < steps.length; j++) {
      if (
        steps[j].x > 0 &&
        steps[j].y > 0 &&
        steps[j].x < 9 &&
        steps[j].y < 9
      ) {
        if (
          steps[j].x === finishCordinates.x &&
          steps[j].y === finishCordinates.y
        ) {
          steps[j].i = i;
          resultArray.unshift(steps[j]);
          let finishValue = steps[j].i;
          while (finishValue != 0) {
            resultArray.unshift(startArray[finishValue]);
            finishValue = resultArray[0].i;
          }
          resultArray.unshift(startCordinates);
          for (a = 0; a < resultArray.length; a++) {
            for (k = 0; k < place.length; k++) {
              if (resultArray[a].y === k + 1) {
                for (l = 0; l < place[k].length; l++) {
                  if (resultArray[a].x === l + 1) {
                    currentSum += place[k][l];
                    break;
                  }
                }
              }
            }
          }

          if (currentSum > maxCurrentSum) {
            maxCurrentSum = currentSum;
            resultFinish = resultArray;
            
          }
          resultArray = [];
          currentSum = 0;
        } else {
          steps[j].i = i;
          intermediateValue = steps[j].i;
          while (intermediateValue != 0) {
            intermediateValue = startArray[intermediateValue].i;
            if (
              startArray[intermediateValue].x === steps[j].x &&
              startArray[intermediateValue].y === steps[j].y
            ) {
              replay = true;
              break;
            }
          }
          if (replay === false) {
            startArray.push(steps[j]);
          } else replay = false;
        }
      }
    }
  }
  console.log(maxCurrentSum);
  return maxCurrentSum;
};
console.log(bestStepforHorse("G2", "E5"));

// try catch
