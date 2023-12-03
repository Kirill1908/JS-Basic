// 2. Чи паліндром я?
// Паліндром - це така строка, яка має в собі "дзеркальні" символи (перший символ = останній символ, другий символ = передостанньому символу і т.д.). Приклади паліндромів: Анна, піп, mom, nun, taco cat.
// Написаті функцію, яка на вхід отримує строку довільного розміру та повертає true, якщо задана строка є паліндромом. Інакше повернути false. Використовувати будь-які вбудовані функції заборонено, тільки власний код!
// Приклади роботи функції (вхідна строка -> результат роботи):

// '' -> false
// 'b' -> true
// 'mom' -> true
// 'string' -> false
// 'bag' -> false

// Підказка: потрібно порівнювати символи від початку та з кінця.



function checkIsPalindrome(string) {
    if (string.length === 0) {
        return false;
    }

    let halfLen = string.length / 2;
    for (let i = 0; i < halfLen; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
}

alert(checkIsPalindrome(''));
alert(checkIsPalindrome('b'));
alert(checkIsPalindrome('mom'));
alert(checkIsPalindrome('string'));
alert(checkIsPalindrome('aabbcbbaa'));
alert(checkIsPalindrome('amanaplanacanalpanama'));