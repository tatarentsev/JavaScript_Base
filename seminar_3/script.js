// Example #1 

function getNameSurAge () {
    let userName = prompt("Введите ваше имя: ");
    let userSurName = prompt("Введите вашу фамилию: ");
    let userAge = prompt("Введите ваш возраст: ");
    alert(`Привет ${userName} ${userSurName} с возрастом ${userAge}`)
}

// getNameSurAge();

// let userNum = Number(prompt('Введите число: '));
// let sqrt = userNum => console.log(userNum ** 2);
// sqrt(userNum);

let number = (n) => {
    if (n >= 0) {
        console.log("+++");
    } else {
        console.log("---");
    }
}

// number(10);

// Example #2

function sumOfThreeNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

// sumOfThreeNumbers(1, 2, 3);

// Example #3
function getPow(num) {
    let result = Math.sqrt(num);
    return result;
}

// let result1 = getPow(3);
// let result2 = getPow(4);
// console.log(Math.round(result1 + result2));

function getMinNum(number1, number2) {
    if (number1 < number2) {
        return number1;
    } return number2;
}

let r = getMinNum(11, 7);
// console.log(r);

// Example #4

// let k = Number(prompt('Введите число от 1 до 7'));
// switch (k) {
//     case 1:
//         console.log('Понедельник');
//         break;
    
//     case 2:
//         console.log('Вторник');
//         break;

//     case 3:
//         console.log('Среда');
//         break;
    
//     case 4:
//         console.log('Четверг');
//         break;

//     case 5:
//         console.log('Пятница');
//         break;
    
//     case 6:
//         console.log('Суббота');
//         break;

//     case 7:
//         console.log('Воскресенье');
//         break;
//     default:
//         console.log("Ваше число не в диапазоне");
//         break;
// }


function getTime(hours, name) {
        if (hours >= 6 && hours < 12) {
            console.log(`Доброе утро ${name}`);
        } 
        
        else if (hours >= 12 && hours < 18) {
            console.log(`Добрый день ${name}`);
        }

        else if (hours >= 18 && hours < 24) {
            console.log(`Добрый вечер ${name}`);
        }

        else if (hours > 0 && hours < 6) {
            console.log(`Доброй ночи ${name}`);
        }   
}

getTime(3, 'Илья');