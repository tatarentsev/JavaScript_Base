// Example #1
// Описание задачи: Используя цикл for, выведите в консоль 11 строк, где каждая
// строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
// число и т.д.).

// for (let i = 0; i < 11; i++) {
//     if (i === 0) console.log(`${i} - это ноль`);
//     else if (i % 2 !== 0) console.log(`${i} - нечетное число`);
//     else if (i % 2 === 0) console.log(`${i} - четное число`);
// }

// Example #2 
// Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
// элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(arr.indexOf(4), 1);
// arr.splice(arr.indexOf(5), 1);

// console.log(arr);

// Example #3 
// Описание задачи:
// 1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
// 2. Рассчитайте сумму элементов массива.
// 3. Найдите минимальное число в массиве.
// 4. Определите, есть ли в массиве число 3.

// const arr = [];
// function getRandomArray(arr, min, max) {
//     for (let i = 0; i < 5; i++) {
//         let rand = min + Math.random() * (max + 1 - min);
//         arr[i] = Math.floor(rand);
//     }
// }
// getRandomArray(arr, 1, 10);
// console.log(arr);

// let sumOfNumsArray = 0;
// for (let j = 0; j < arr.length; j++) {
//     sumOfNumsArray += arr[j];
// }
// console.log(sumOfNumsArray);

// let min = arr[0];
// for (let c = 1; c < arr.length + 1; c++) {
//     if (min > arr[c]) {
//         min = arr[c];
//     } continue;
// }

// console.log(min);
// let bool = false;
// for (let a = 0; a < arr.length; a++) {
//     if (arr[a] === 3) {
//         bool = true;
//         break;
//     }
// }

// if (bool) console.log("Число 3 находится в массиве");
// else console.log("Числа 3 нет в массиве");

// Example #4
// Описание задачи: Используя цикл for, выведите в консоль "горку" из символов x с 20
// рядами.

let x = "x";
for (let i = 0; i < 20; i++) {
    let j = "x"
    console.log(x);
    x += j;
}