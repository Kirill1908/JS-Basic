// Декорування - умовне "додавання" додаткової поведінки до функції/методу без зміни самої функції. Тобто, ми жодним чином не змінюємо оригінальну функцію та її поведінку, а розширюємо її.
// Вам потрібно зробити логуючий декоратор (декоратор логуівння) loggingDecorator, який буде логувати назву функцію та всі аргументи, з якими вона викливається, у консоль (використовуємо для цього console.log).
// Формат логування: functionName, args: arg1, arg2, ..., argnN.

// Підказки:
// згадайте, про що ми говорили під час розгляду теми Прив"язки контексту;
// для виведення імені функції використовуйте її властивість name;
// враховуйте, що оригінальна функція може повертати якесь значення - ви маєте його так само повернути, аби воно не "загубилось".


// Приклад роботи (схематичний):

// const someFn = (param1, param2,..., paramN) => { ... };
// const loggedFn = loggingDecorator(someFn);
// loggedFn(1, 2, 3) // має вивести у консоль someFn, args: 1, 2, 3
// loggedFn('test') // має вивести у консоль someFn, args: test


const someFn = (param1, param2, ...additional) => {
    if (additional.length > 0) {
        console.log(additional);
    }
    return param2 ? param1 + param2 : param1;
};

const loggingDecorator = (fn) => {
    return (...arguments) => {
        console.log(`functionName: ${fn.name}, args: ${arguments}`);
        return fn(...arguments);
    }
}

const loggedFn = loggingDecorator(someFn);

loggedFn('w', 'q', 'e', 't', 'p');
loggedFn(1, 2, 3);

console.log(loggedFn(1, 2, 3));
console.log(loggedFn('test'));