// Дано мат выражение строкой "2+3*5*(5+3)" Решить при помощи стека.
const operators = {
  ["+"]: { priority: 1, calc: (a, b) => a + b },
  ["-"]: { priority: 1, calc: (a, b) => a - b },
  ["*"]: { priority: 2, calc: (a, b) => a * b },
  ["/"]: { priority: 2, calc: (a, b) => a / b },
  ["^"]: { priority: 3, calc: (a, b) => Math.pow(a, b) },
};

let calculate = (arrOne, arrTwo) => {
  lastStackOperator = arrOne.pop();
  first = arrTwo.pop();
  second = arrTwo.pop();
  return arrTwo.push(operators[lastStackOperator].calc(second, first));
};

let evaluate = (expr) => {
  let stack = [];
  let output = [];
  let intermediateValue = "";

  for (let i = 0; i < expr.length; i++) {
    if (
      !isNaN(+expr[i]) ||
      (!isNaN(+expr[i]) && (!isNaN(+expr[i + 1]) || !isNaN(+expr[i - 1])))
    ) {
      intermediateValue += expr[i];
      if (expr[i + 1] === undefined) {
        output.push(+intermediateValue);
      }
    } else {
      if (intermediateValue != "") {
        output.push(+intermediateValue);
        intermediateValue = "";
      }
      if (expr[i] in operators) {
        let operator = operators[expr[i]];
        let lastStackOperator = stack[stack.length - 1];
        if (
          output[output.length - 2] !== "(" &&
          lastStackOperator &&
          operator.priority <= operators[lastStackOperator].priority
        )
          calculate(stack, output);
        stack.push(expr[i]);
      }
      if (expr[i] === "(") {
        output.push(expr[i]);
      }
      if (expr[i] === ")") {
        while (output[output.length - 2] !== "(") calculate(stack, output);
        let bracketedResult = output.pop();
        output.pop();
        output.push(bracketedResult);
      }
    }
  }
  while (stack.length != 0) calculate(stack, output);
  return output[0];
};

console.log(evaluate("(222^2-1+3*5*(5/3+3*(3^2-(1^3/6-3)+4*2-1/3)))/2"));


// Развернуть на GitHub репозиторий запушить код