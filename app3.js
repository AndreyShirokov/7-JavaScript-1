// порядок вычислений
// isSuited - подходит (ящик влезает в коробку) 
const box = 100;
const size = 90;
const isSuited = box - 10 > size - 5;
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// сначала выполняются операции с более высоким приоритетом 12 а поом 10 
// 1. box - 10 (приоритет 12)
// 2. size - 5 (приоритет 12)
// 3. > - сравнение (приоритет 10)
console.log(isSuited);

const a = 6 + 10 / 2; //  10 / 2 = 5 next 6 + 5 = 11
console.log(a);

const x = (6 + 10) / 2; //  10 + 6 = 16 next 16 / 2 = 8
console.log(x);

let b;
let c;
c = b = 100 + 50;
// + имеет приоритет 12 (сначала) 
// = имеет приоритет 2  (потом и справа налево)
// b = 150, потом c = b (тоже 150)
console.log(c);
console.log(b);
