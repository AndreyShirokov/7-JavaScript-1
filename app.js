// var - устарело сейчас - let используется.
// let инициализация переменной. 
// Повторное присваивание - без let

let a = 1;

console.log(a);

a = 'test';

console.log(a);

const b = 2;

console.log(b);

// b = 'test';   если так, то ошибка
// Uncaught TypeError: Assignment to constant variable.
// Присвоение постоянной переменной
console.log(b);