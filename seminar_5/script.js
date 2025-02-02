// Example #1
// const days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// console.log(days[2]);

// const user = {
//     name: "Илья", 
//     surname: "Татаренцев",
//     age: "19"
// }

// console.log(`${user.surname}-${user.name}-${user.age}`);

// user.otche = prompt("Введите ваше отчество: ")
// console.log(user);

// delete user.surname;

// console.log(user);

// Example #2
// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }

// for (value in obj) {
//     console.log(obj[value] ** 2);
// }

// Example #3
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },

//     key2: {
//         key1: 5,
//         key2: 4,
//         key3: 6,
//     },

//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;
// for (key in obj) {
//     for (key2 in obj[key]) {
//         sum += obj[key][key2];
//     }
// }

// console.log(sum);

// Example #4
const riddles = {
    question: "Зимой и летом одним цветом",
    answer: 'елка',
    askQuestion () {
        if (prompt(this.question).toLowerCase() == this.answer) {
            console.log('Вы угадали');
        } else console.log('Вы не угадали');
    }
}

riddles.askQuestion();