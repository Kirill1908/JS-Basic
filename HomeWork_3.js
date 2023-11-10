// Задание 3.1 (Яким буде результат виконання кожної з наступних строк коду та чому? Напишіть відповіді для кожної строки коду та коротке пояснення.)

'12' + 34  // '1234', потому что "бинарный +" при одном из оперантов с типом 'строка' конвертирует и второй оперант в строку.
12 + 34    // 46, с числами "бинарный +" работает предсказуемо.
100 / '10' // 10, базовые математические операции, кроме "+"", конвертируют операнты в числа.
100 * 'f'  // NaN, второй оперант не может быть переведён в число, поэтому ответ НЕ число.
'7' / null // Infinity, операция "деление" преобразует '7' и null в 7 и 0 соответственно, такое 'деление' в ВМ даёт бесконечность.

// Задание 3.2 (Нижче наведено дані та результат, який потрібно отримати (після стрілочки ->). Напишіть код для отримання заданого результату (всі відомі вам варіанти):)

'2' + '4' -> 6 (алгебраїчна сума)
// (+'2') + (+'4') -> 6 ("Унарный +" перед оперантом переводит его в число).
// '2'*1 + '4'*1 -> 6 ("Умножение" операнта на 1 переводит его в число).
// '2'**1 + '4'**1 -> 6("Возведение в степень 1" операнта переводит его в число).

7.2 / '1.2' -> 6 (ділення двох чисел) 
// Выражение работает корректно без изменений так, как "деление" преобразует оба операнта в числа.

'this' + ' simple' + ' string' -> 'this simple string' (конкатенація строк)
// Выражение работает корректно без изменений так, как "бинарный +" если все операнты 'строки' - объединяет их.

'answer' + ' is:' + '30' + 5 -> 'answer is 35' (сума з конкатенацією)
// 'answer' + ' is:' + (+'30' + 5) ("Унарный +" перед оперантом переводит его в число).


// Варианты через оглашение переменных я не использовал потому, что это решение уже больше чем в 1 строку :)