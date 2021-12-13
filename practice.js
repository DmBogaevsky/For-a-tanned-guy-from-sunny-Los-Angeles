// function List(someValue, b) {
//   this.someValue = someValue;
//   this.b = b;
// }

// List.prototype.create = function () {
//   const newArr = [];
//   newArr.push(this.someValue[0], this.b[0]);
//   return newArr.toString();
// };

// const userList = new List(["kolya", 26, "rostov"], ["petya", 25, "piter"]);

// console.log(userList.create());

// let d = Date()
// console.log(d.toString())
// for (const datum of d) console.log(datum) ;

// _________________________________________________________________________________________________
// const text = "This number is equal to";
// const value = 100;
// const random = Math.random() * value;

// function twoMarks1(someValue) {
//   return someValue.toFixed(2);
// }
// function twoMarks2(someValue) {
//   const parseint = parseInt(someValue * value) / value;
//   if (Math.round(someValue) === someValue) {
//     return parseint + ".00";
//   }
//   return parseint;
// }
// function twoMarks3(someValue) {
//   const mathFloor = Math.floor(someValue * value) / value;
//   if (Math.round(someValue) === someValue) {
//     return mathFloor + ".00";
//   }
//   return mathFloor;
// }

// console.log(`${text}  ${twoMarks1(value)}`, `${text}  ${twoMarks1(random)}`);
// console.log(`${text}  ${twoMarks2(value)}`, `${text}  ${twoMarks2(random)}`);
// console.log(`${text}  ${twoMarks3(value)}`, `${text}  ${twoMarks3(random)}`);
// console.log("\u2718");
// console.log(
//   "_________________________________________________________________"
// );

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 34,
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   get text() {
//     return (
//       "Hi my dear friend, " + this.fullName + "." + " Are you " + this.age + "?"
//     );
//   },
// };
// // let f = person.valueOf();
// // console.log(f);

// // console.log(person.fullName);
// const artist = {
//   nickname: "Boby Dy",
//   age: 24,
//   get text() {
//     return (
//       "Hi my dear friend, " + this.nickname + "." + " Are you " + this.age + "?"
//     );
//   },
// };
// const user = {
//   username: "Danny",
//   age: 21,
//   get text() {
//     return (
//       "Hi my dear friend, " + this.username + "." + " Are you " + this.age + "?"
//     );
//   },
// };

// function objectMessage(obj, type) {
//   if ((type = person)) {
//     return console.log(obj.text);
//   } else if (type == artist) {
//     return console.log(obj.text);
//   } else if (type == user) {
//     return console.log(obj.text);
//   }
// }

// function objectMessage1(obj, type) {
//   switch (type) {
//     case person:
//       return console.log(obj.text);
//     case artist:
//       return console.log(obj.text);
//     case user:
//       return console.log(obj.text);
//   }
// }
// function objectMessage2(obj, fieldName) {
//   return console.log(obj.text);
// }

// function objectMessage3(obj, getNameFn) {
//   const name = getNameFn(obj);
//   return console.log(`Hi! ${name}. Age ${obj.age}?`);
// }
// function getPersonName(person) {
//   return person.firstName + " " + person.lastName;
// }
// function getArtistName(artist) {
//   return artist.nickname;
// }

// person.firstName = "Roman";
// console.log(person.fullName);
// console.log(Object.keys(person));
// console.log(Object.getOwnPropertyNames(person));
// console.log(JSON.stringify(person));
// const jsonStringify = JSON.stringify(person);
// const jsonParse = JSON.parse(jsonStringify);
// console.log(jsonParse);

// const numbers = {
//   x: 3,
//   y: 4,
//   valueOf: function () {
//     return this.y + this.x;
//   },
// };
// console.log(Number(numbers));
// -----------------------------------------------------------------------------------------
// objectMessage(person, person);
// objectMessage1(user, user);
// objectMessage2(person, "fullName");
// objectMessage3(person, getPersonName);
// objectMessage3(artist, getArtistName);
// _________________________________________________________________________________ (создать однотипные объкты в одном мыссиве. написать функцию которая принимает ID и массив функция возвращает элениент из массива по ID, реализовать с помощью for, while, do/while; SeachByIdUsingWhile и т д сделать вторую функцию, которуя будет искать по чему угодно)(Сделать так, чтобы у всех массивах в системе был метод SeachBySomethingUsingWhile(один аргумент))

// let changeForPrintHelloText = function (obj) {
//   let fullName = obj.firstName + " " + obj.lastName;
//   let helloText = `Hello, my dear ${fullName}! You're already ${obj.age} years old?`;
//   if (obj.mother) {
//     return helloText + ` How's your mom, ${obj.mother}?`;
//   }
//   if (obj.friend) {
//     return helloText + ` Where's your friend - ${obj.friend}?`;
//   }
//   if (obj.lastName === "Whitley") {
//     return `Fuck you, redheaded shithead!`;   // Создать class myArr реализовать все методы массива и реализовать метод sort(). Сделать их ао цепочке.
//   }
// };

// let allPrint = function (someArray, printFn) {
//   let i = 0;
//   let allCurrentValueToArray = [];
//   while (i < someArray.length) {
//     let object = someArray[i];
//     let currentValue = printFn(object);
//     if (currentValue && typeof currentValue === "object")
//       allCurrentValueToArray.push(currentValue);
//     if (currentValue && typeof currentValue === "string")
//       allCurrentValueToArray += currentValue + " ";
//     i++;
//   }
//   return allCurrentValueToArray;
// };

// let notPrototype = function (printFn) {
//   let i = 0;
//   let allCurrentValueToArray = [];
//   while (i < this.length) {
//     let object = this[i];
//     let currentValue = printFn(object);
//     if (currentValue && typeof currentValue === "object")
//       allCurrentValueToArray.push(currentValue);
//     if (currentValue && typeof currentValue === "string")
//       allCurrentValueToArray += currentValue + " ";
//     i++;
//   }
//   return allCurrentValueToArray;
// };

// console.log(notPrototype.apply(arr, [changeForPrint]));
// console.log(notPrototype.apply(arr, [changeForPrintHelloText]));

// let result = array
//   .filter(x => x.age > 18)
//   .sort(x => x.age)
//   .map(x => `${x.firstName} ${x.lastName}`)
//   .filter(x => x.length <= 15);
let arr = [
  { id: 20, firstName: "Ron", lastName: "Whitley", age: 20 },
  {
    id: 25,
    firstName: "Hermione",
    lastName: "Granger",
    age: 18,
    friend: "Ron",
  },
  { id: 11, firstName: "Fred", lastName: "Weasley", age: 24 },
  // [{ id: 10, firstName: "George", lastName: "Weasley", age: 24 }],
  // [{ id: 12, firstName: "Oliver", lastName: "Wood", age: 20 }],
  { id: 17, firstName: "Viktor", lastName: "Krum", age: 24 },
  { id: 17, firstName: "Harry", lastName: "Potter", age: 20, mother: "Lily" },
];

class CustomArray {
  constructor(array) {
    this.array = array;
  }
  forEach(fn) {
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      fn(this.array[i], result);
    }
    return result;
  }

  map(mapFn) {
    let mapElementFn = function (element, result) {
      result.push(mapFn(element));
    };

    return this.forEach(mapElementFn);
  }

  filter(filterFn) {
    let filterElementFn = function (element, result) {
      if (filterFn(element)) {
        result.push(element);
      }
    };
    return this.forEach(filterElementFn);
  }
  concat(something) {
    let current;
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      current = this.array[i];
      result.push(current);
    }
    for (let item of something) {
      result.push(item);
    }
    return result;
  }

  slice(x, y) {
    let current;
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      current = this.array[i];
      if (i <= y && i >= x) result.push(current);
    }
    return result;
  }
  fill(context, x, y) {
    let current;
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      current = this.array[i];
      if (i >= x && i <= y) {
        current = context;
      }
      result.push(current);
    }
    return result;
  }

  find(fn) {
    let current;
    let result;
    for (let i = 0; i < this.array.length; i++) {
      current = fn(this.array[i]);
      if (current === true) {
        result = this.array[i];
        return result;
      }
    }
  }

  // reduce(fn, addElement) {
  //   let current;
  //   let valueFirst;
  //   valueFirst = addElement ? addElement : this.array[0];
  //   let i = addElement ? 0 : 1;
  //   for (; i < this.array.length; i++) {
  //     current = fn(valueFirst, this.array[i]);
  //     valueFirst = current;
  //   }

  //   return valueFirst;
  // }

  reduce(fn, addElement) {
    let copy = [];
    copy.push.apply(copy, this.array);
    let current;

    if (addElement) {
      copy.unshift(addElement);
    }
    let valueFirst = copy[0];
    for (let i = 1; i < copy.length; i++) {
      current = fn(valueFirst, copy[i]);
      valueFirst = current;
    }
    return valueFirst;
  }

  sort() {
    let complite = false;
    while (!complite) {
      complite = true;
      for (let i = 1; i < this.array.length; i++) {
        if (this.array[i - 1] > this.array[i]) {
          complite = false;
          let editValue = this.array[i - 1];
          this.array[i - 1] = this.array[i];
          this.array[i] = editValue;
        }
      }
    }

    return this.array;
  }
}

let newArr = [34, 5, 60, 7, -100, 1002];
let newArr2 = ["b", "c", "d", "a", "e"];

let myArray = new CustomArray(newArr);

console.log(myArray.map((x) => x * 2));
// console.log(newArr.map((x) => x * 2));

//написать код, который не сработает без метода bind()
const user = {
  name: "Robert",

  loginOk() {
    return console.log(`${this.name} logged in`);
  },

  loginOut() {
    return console.log(`${this.name} logged failed`);
  },
};

function password(yes, no) {
  console.log("Please enter your password", "");
  let passwordVerification = 123;
  if (passwordVerification === 123) yes();
  else no();
}
// password(user.loginOk.bind(user), user.loginOut.bind(user));

// _______________________________________
//найти max. элемент в массисе за одну итерацию.

// Дано мат выражение строкой "2+3*5*(5+3)" Решить при помощи стека.

function genralCode(array, fn) {
  let value = array[0];
  for (let i = 1; i < array.length; i++) {
    value = fn(value, array[i]) ? array[i] : value;
  }
  return value;
}

function findMax(ourArrey) {
  return "Max value = " + genralCode(ourArrey, (v, e) => v < e);
}

function findMin(ourArrey) {
  return "Min value = " + genralCode(ourArrey, (v, e) => v > e);
}

console.log(findMin(newArr));
console.log(findMax(newArr));
// _______________________________________
// вывести часть ряда фибонначи между заданным промежутком (отредактировано)
// т.е. вводятся ОТ и ДО значения и выводятся те числа фибонначи которые входят в это промежуток
// например fibonnachi(10, 60) = 13, 21, 34, 55/// пЕРЕПИСАТЬ В ОДИН ЦИКЛ

function fibonnachi(from, to) {
  let fb1 = 1,
    fb2 = 1,
    aux = 0;
  let carrentValue = [];

  while ((aux = fb1 + fb2) <= to) {
    if (aux >= from) {
      carrentValue.push(aux);
    }
    fb1 = fb2;
    fb2 = aux;
  }
  return carrentValue;
}

console.log(fibonnachi(10, 60));

// _______________________________________
// вывести все числа в промежутке ОТ и ДО которые делятся на 7 без остатка (отредактировано)
function allNumbers(from, to) {
  let numberArray = [];
  for (let i = from; i <= to; i++) {
    if (i % 7 === 0) numberArray.push(i);
  }
  return numberArray;
}
// console.log(allNumbers(1, 100));

// _______________________________________
// проверить является ли число палиндромом (одинаково пишется с начала и конца)
// например
// 12344321

// СДЕЛАТЬ НА FOR  НЕ ИСПОЛЬЗОВАТЬ TOSTRING
function palindrome(value) {
  let thatIsPalindrome = true;
  let arrMy = [];
  while (value > 0) {
    arrMy.push(value % 10);
    value = Math.floor(value / 10);
  }
  for (i = 0; i <= (arrMy.length - 1) / 2; i++) {
    if (arrMy[i] != arrMy[arrMy.length - (i + 1)]) {
      thatIsPalindrome = false;
      break;
    }
  }
  return thatIsPalindrome;
}

// function palindrome(value) {
//   let thatIsPalindrome = true;
//   let arrayValue = [...(value + "")].map((n) => (n = +n)); // Переписать на цифрах
//   for (i = 0; i <= (arrayValue.length - 1) / 2; i++) {
//     if (arrayValue[i] != arrayValue[arrayValue.length - (i + 1)]) {
//       thatIsPalindrome = false;
//       break;
//     }
//   }
//   return thatIsPalindrome;
// }
console.log(palindrome(12344321));

// ___________________________________________
// в строке вывести подстроку которая заключена между ## символами
// например
// ExtractString("##abc##def") → "abc"
// ExtractString("12####78") → empty string
// ExtractString("gar##d#en") → empty string
// ExtractString("++##--##++") → "--"
// т.е. ##подстрока##
//2 РЕШИТЬ В ОДНУ ИТЕРАЦИЮ ЦИКЛА
// function ExtractString(str) {
//   let start;
//   let finish;
//   let newStr = "";
//   let value;
//   let editValue;
//   let msg = "empty string";
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === value) {
//       start = i;
//       for (j = start + 1; j < str.length; j++) {
//         if (str[j] === editValue) {
//           finish = j;
//           for (m = start + 1; m < finish - 1; m++) {
//             newStr += str[m];
//           }
//         } else {
//           editValue = "";
//         }
//         if (str[j] === value) {
//           editValue = str[j];
//         }
//       }
//     } else {
//       value = "";
//     }
//     if (str[i] === "#") {
//       value = str[i];
//     }
//   }
//   return newStr ? newStr : msg;
// }
// console.log(ExtractString("12####78"));
// console.log(ExtractString("++##--##++"));
console.log(ExtractString("##221g#jorj#go##"));

function ExtractString(str) {
  let resultString = "";
  let finish;
  let emptyString = "empty string";
  let start;
  for (let i = 1; i < str.length - 2; i++) {
    if (str.length < 5) {
      return emptyString;
    }
    if (start) {
      resultString += str[i];
      if (str[i + 1] === "#" && str[i + 2] === "#") {
        finish = true;
        break;
      }
    }
    if (str[i - 1] === "#" && str[i] === "#") {
      start = true;
    }
  }
  if (finish) {
    return resultString;
  } else {
    return emptyString;
  }
}

// Массив из цифр (отвсортированый [1,7....]) Найти с помощью бинарного поиска индекс в массиве или вывести -1.

const biArray = [
  7, 8, 16, 22, 25, 28, 30, 33, 35, 36, 40, 41, 43, 44, 48, 49, 52, 54, 55, 60,
  62, 66, 77, 78, 81, 100, 1001,
];

function binaryFind(sortArray, serchValue) {
  let start = 0;
  let end = sortArray.length - 1;

  while (start < end) {
    let step = (end - start) / 2;
    let middle = start + step;
    if (step < 1) {
      return -1;
    }
    middle = Math.floor(middle);
    if (sortArray[middle] === serchValue) {
      return middle;
    } else if (sortArray[middle] > serchValue) {
      end = middle;
    } else if (serchValue > sortArray[middle]) {
      start = middle;
    }
  }
}
console.log(binaryFind(biArray, 56));

// Структуры данных. Массив(стек).

// Array.prototype.SeachBySomethingUsingWhile = function (printFn) {
//   let i = 0;
//   let allCurrentValueToArray = [];
//   while (i < this.length) {
//     let object = this[i];
//     let currentValue = printFn(object);
//     if (currentValue === true) allCurrentValueToArray.push(object);
//     i++;
//   }
//   return allCurrentValueToArray
//     .map((x) => x.firstName + " " + x.lastName)
//     .reduce((x, y) => x + ", " + y);
// };
// console.log(arr.SeachBySomethingUsingWhile(changeForPrint));

// function addition(n) {
//   return function summ(b) {
//     return n + b;
//   };
// }

// let summa = addition(4)(3);
// console.log(summa);

// let s = new Set();
// let a = [1, 2, 3]
// s.add(1).add(10).add(5)
// s.add(a);
// s.delete(a);
// let r= [...s]
// console.log(r);
// console.log(Math.max(...s));
// console.log(allPrint(arr, changeForPrint));
// console.log(allPrint(arr, changeForPrintHelloText));
// console.log(arr.SeachBySomethingUsingWhile(changeForPrintHelloText));
// console.log(arr.SeachBySomethingUsingWhile(changeForPrint));

// function SeachByIdUsingWhile(array, index) {
//   let i = 0;
//   let res;
//   while (i < array.length) {
//     if (i === index) {
//       res = array[i];
//     }
//     i++;
//   }
//   return res;
// }
// function SeachByIdUsingDoWhile(array, index) {
//   let i = 0;
//   let res;
//   do
//     if (i === index) {
//       res = array[i];
//     }
//   while (++i < array.length);
//   return res;
// }
// function SeachByIdUsingFor(array, index) {
//     let res;
//   for (let i = 0, len = array.length; i < len; i++)
//     if (i === index) {
//       res = array[i];
//     }
//     return res
// }

// function SeachBySomethingUsingWhile(array, value) {
//   let i = 0;
//   while (i < array.length) {
//     if (
//         array[i][value] ||
//         array[i] === array[value] ||
//       Object.values(array[i]).find((x) => x === value) === value
//     )
//       console.log(array[i]);
//     i++;
//   }
// }
// let controle = function (anyArray) {
//   let result;
//   let i = 0;
//   while (i < anyArray.length) {
//     if (anyArray[i]["age"] === 18) result = anyArray[i];
//     i++;
//   }
//   return result;
// };

// Array.prototype.SeachBySomethingUsingWhile = function (controleFn) {
//   let i = 0;
//   let res;
//   while (i < this.length) {
//     if (this[i] === controleFn(this)) res = this[i];
//     i++;
//   }
//   return res;
// };

// console.log(arr.SeachBySomethingUsingWhile(controle));
// console.log(SeachByIdUsingFor(arr, 1));
// SeachByIdUsingDoWhile(arr, 1);
// SeachByIdUsingFor(arr, 2);
// SeachBySomethingUsingWhile(arr, 17);
//----------------------------------------------------------------------------------
// const x = {
//   name: "hello world",
//   age: 64,
// };
// x.autor = "db";

// const arr = [1, 2, 3, 4];

// const user = [
//   {
//     name: "Nally",
//     age: 25,
//   },
//   {
//     name: "Tony",
//     age: 31,
//   },
// ];

// user.push({ name: "Lucy", age: 23 });
// user.reverse();

// user.medium = function () {
//   const userOne = this[0].age;
//   const userTwo = this[1].age;
//   const userThree = this[2].age;
//   const res =
//     "Our medium age is: " +
//     (userOne + userTwo + userThree) / this.length +
//     " years.";
//   return res;
// };
// console.log(user.medium());

// function factorial(n) {
//   let value = 1;
//   for (let i = 2; i <= n; i++) {
//     value *= i;
//   }
//   return value;
// }
// console.log(factorial(4));

// function fullName(x, y) {
//   const res = x + " " + y;
//   return res;
// }

// console.log(fullName("John", "Smith"));

// user[1].name = "Marry";

// arr[3] = 7;
// arr[2] = 6;
// console.log(x["autor"]);
// console.log(user);
// let numbers = [1, 2, 3, 4, -1, -5, 6, 13];
// console.log(...numbers);
