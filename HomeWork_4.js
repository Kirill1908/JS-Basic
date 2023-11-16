// №1. FizzBuzz game
// За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке число.
// Далі, в залежності від того, яке число ввів користувач, вивести відповідне повідомлення:

// Fizz, якщо число ділиться на 3 без залишку;
// Buzz, якщо число ділиться на 5 без залишку;
// FizzBuzz, якщо число одночасно ділиться на 3 та на 5 без залишку;
// Non Divisible, якщо число не ділиться на 3 чи на 5.


let n = prompt('Введіть будь-яке число');
if (n%3==0 && n%5!==0) { 
    alert('Fizz');
} else if (n%5==0 && n%3!==0) { 
    alert('Buzz');
} else if (n%3==0 && n%5==0) { 
    alert('FizzBuzz');
} else if (n!==3 && n!==5) { 
    alert('Non Divisible');    
} // Варіант 1 через if...else

let n = prompt('Введіть будь-яке число');
switch(true) {
    case (n%3==0 && n%5!==0):
        alert('Fizz');
        break;
    case (n%5==0 && n%3!==0):
        alert('Buzz');
        break;
    case (n%3==0 && n%5==0):
        alert('FizzBuzz');
        break;
    default:
        alert('Non Divisible');
} // Варіант 2 через switch\case


// №2. Що ввів користувач?
// За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке значення.
// Далі, в залежності від того, що ввів користувач, вивести відповідний тип даних за допомогою повідомлення You entered a {type}. 
// Якщо визначити тип даних однозначно не можливо - виводимо повідомлення You entered a complex data.

// Нарпиклад, користувач ввів: 
// 18 -> You entered a number;
// smth different -> You entered a string;
// False -> You entered a boolean;
// smth 18 very True -> You entered a complex data;

// Будьте уважні! Зверніть увагу на те, в якому регістрі введено дані (lower/upper case) - False та false мають бути однаково визначені як тип boolean.
// При вирішенні цих задач також зверніть увагу на обробку виключень: якщо, на вашу думку, вони можуть виникнути - використовуйте відповідну та коректну конструкцію коду для цього.


let n = prompt('Введіть будь-яке значення');
n=n.toLowerCase();

if (Number(n)) {
    alert('You entered a number');
} else if (n==='false' || n==='true') {
    alert('You entered a boolean');
} else {
    alert('You entered a complex data');
} // Варіант 1 через if...else


let n = prompt('Введіть будь-яке значення');
n=n.toLowerCase();

switch(true) {
    case !isNaN(+n): 
        alert('You entered a number');
        break;
    case n==='false' || n==='true':
        alert('You entered a boolean');
        break;
    default:
        alert('You entered a complex data');
} // Варіант 2 через switch\case

//В 69 строке возможна альтернатива-  case !isNaN(Number(n)):