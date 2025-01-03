const user = {
    name: 'Вася',
    age: 18
};                  // это объект - набор ключей и значений

// всего 7 примитивных типов данных (примитивы)

const age = 18;                  // числа                         1.

const surname = 'Иванов';       // строки  или в '' или в ""      2.

const isAdmin = true;         // булево значение                  3.

const isUser = undefined;        //      undefined                4.
let data;                        // тоже undefined

let data1 = null;                // пустое значение               5.

const admin = Symbol('Admin'); // уникальное неизменное значение 6.

const big = BigInt(9999999999999999999999999); // большие числа  7.

let a = 5;
let b = 5.6;
console.log(typeof a); // number
console.log(typeof b); // number
a = 'строка';
console.log(typeof a); // string
console.log(typeof isAdmin); // boolean

let isBMoreThan10 = b > 10;
console.log(isBMoreThan10); // false      typeof - boolean

let c;
console.log(typeof c); // c - undefined; typeof c - undefined
c = 5
console.log(typeof c);

let d = null;
console.log(typeof d); // object
console.log(d == null); // true