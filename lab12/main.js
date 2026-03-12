// --- ВАРІАНТ 2 ---

// Завдання 1: Функція знаходження максимального числа
// Іменована функція (Function Declaration)
function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    // Або коротше: return Math.max(a, b);
}
console.log("Завдання 1 (Максимум з 10 та 25):", findMax(10, 25)); // 25


// Завдання 2: Функціональний вираз для віднімання
// (Function Expression)
const subtract = function(a, b) {
    return a - b;
};
console.log("Завдання 2 (10 - 4):", subtract(10, 4)); // 6


// Завдання 3: Стрілкова функція для обчислення кореня
// (Arrow Function)
const sqrt = (n) => Math.sqrt(n);
console.log("Завдання 3 (Корінь з 64):", sqrt(64)); // 8


// Завдання 4: Рекурсивна функція суми геометричної прогресії
// Обчислює суму перших n членів.
// Формула n-го члена: a * r^(n-1).
// Рекурсія: Сума(n) = (n-й член) + Сума(n-1)
function geometricProgression(n, a, r) {
    // Базовий випадок: якщо потрібно додати лише 1 елемент, повертаємо "a"
    if (n === 1) return a;
    
    // Рекурсивний крок: поточний член + сума попередніх
    const currentTerm = a * Math.pow(r, n - 1);
    return currentTerm + geometricProgression(n - 1, a, r);
}
// Перевірка: b1=2, r=3, n=3. Члени: 2, 6, 18. Сума = 26.
console.log("Завдання 4 (Геом. прогресія n=3, a=2, r=3):", geometricProgression(3, 2, 3)); 


// Завдання 5: Функція-замикання createDivider
// Створює функцію, яка ділить передане число на divisor
function createDivider(divisor) {
    return function(number) {
        return number / divisor;
    };
}
const divideByTwo = createDivider(2);
const divideByFive = createDivider(5);

console.log("Завдання 5 (10 розділити на 2):", divideByTwo(10)); // 5
console.log("Завдання 5 (50 розділити на 5):", divideByFive(50)); // 10


// Завдання 6*: Функція вищого порядку для Set
function processSet(set, callback) {
    set.forEach((value) => {
        callback(value);
    });
}
// Перевірка
const mySet = new Set([100, 200, 300]);
console.log("Завдання 6 (Вивід елементів Set):");
processSet(mySet, (val) => console.log(`Елемент: ${val}`));