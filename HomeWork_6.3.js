// 3. Із строки у число
// Написати функцію, яка на вхід отримую число у форматі строки та повертає його у форматі числа, аналог методу parseInt(). Використовувати будь-які вбудовані функції заборонено, тільки власний код!
// Приклади роботи функції: (вхідні дані -> результат роботи):

// '15' -> 15
// '376' -> 376
// '100500' -> 100500

// Підказка: будь-яке число можна зобразити через систему числення з основою 10. Так, число 7 є 7 * (10^0), число 21: 2 * (10^1) + 1 * (10^0), а число 100 є 1 * (10^2). Конвертувати ж строкове однорозрядне  число можна за допомогою операції модульного ділення на основу ('число' % 10), або побітового OR з 0 ('число' | 0).
// Додаткове питання: що потрібно змінити, аби можна було задавати строку та довільну систему числення? Тобто, наприклад, для виклику функції з аргументами ('101', 2) результатом її роботи було число 5 (задане строкове значення переводимо у число з використанням системи числення з основою 2), з аргументами ('101', 5) результатом буде число 26 (система числення з осново 5), а з аргументами ('101', 8) отримуємо 65 (система числення з основою 8).
// Для спрощення рішення, система числення може бути довільна, але не більша 10, оскільки це потребуватиме більш складного рішення (наприклад, для системи числення з основою 16 потрібно додатково зберігати символьні коди для значень від 10 до 16).


function customParseInt(string, radix) {
    let negative = false;
    let result = 0;

    if (string[0] === '-') {
        negative = true;
        string = string.slice(1);
    }

    for (let i = 0; i < string.length; i++) {
        if (negative) {
            result -= string[i] * (radix ** (string.length - i - 1));
        } else {
            result += string[i] * (radix ** (string.length - i - 1));
        }
    }

    return result;
}

alert(customParseInt('1', 10));
alert(parseInt('1', 10));
alert(customParseInt('-567', 10));
alert(parseInt('-567', 10));
alert(customParseInt('225', 8));
alert(parseInt('225', 8));
alert(customParseInt('-123', 6));
alert(parseInt('-123', 6));
alert(customParseInt('441', 5));
alert(parseInt('441', 5));
alert(customParseInt('-213', 4));
alert(parseInt('-213', 4));
alert(customParseInt('0101001', 2));
alert(parseInt('0101001', 2));