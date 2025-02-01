// Example #1
// let num1 = Number(prompt("Введите первое число: "));
// let num2 = Number(prompt("Введите второе число: "));

// if (num1 === 1) {
//     console.log(`Подходит! Число ${num1} равняется 1.`);
// } else if (num1 < 1) {
//     console.log(`Подходит! Число ${num1} меньше 1.`);
// } else {
//     console.log(`Не подходит! Число ${num1} больше  и не равняется 1.`);
// }

// if (num2 === 3) {
//     console.log(`Подходит! Число ${num2} равняется 3.`);
// } else if (num2 > 3) {
//     console.log(`Подходит! Число ${num2} больше 3.`);
// } else {
//     console.log(`Не подходит! Число ${num2} меньше и не равняется 3.`);
// }

// Example #2
// let test = true;
// (test == true) ? console.log('+++') : console.log('---');

// Example #3 
let day = 15;

let decade;
if (day >= 1 && day <= 10) {
    decade = 'первая';
} else if (day > 10 && day <= 20) {
    decade = 'вторая';
} else if (day > 20 && day <= 31) {
    decade = 'третья';
} else {
    decade = 'некорректное число';
}

console.log(`Число ${day} попадает в ${decade} декаду месяца.`);
