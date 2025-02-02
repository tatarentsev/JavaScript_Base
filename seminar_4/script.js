// Example #1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr.length);

// const array = ['a', 'b', 'c'];
// console.log(array);
// for (let j = 0; j < array.length; j++) {
//     array[j] = j+1;
// }

// console.log(array);

// Example #2
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 1;
//     console.log(arr[i]);
// }

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

// const arr = [3, 7, 1, 90, 12];
// const arg1 = arr.pop();
// const arg2 = arr.pop();
// console.log(arr.length);

// Example #3 
// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     } continue;
// }

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let num = 11;
// let count = 0;
// while (num < 1000) {
//     num *= 3;
//     count++;
// }

// console.log(num);
// console.log(count);

// Example #4
// const arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) { 
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     } continue;
// }

// let sumNums = 0;
// for (let j = 2; j < 100; j++) {
//     if (j % 2 === 0) {
//         sumNums += j;
//     } continue;
// }

// console.log(sumNums);

// const arr = [2, 5, 9, 3, 1, 4];
// let sumArrNums = 0;
// for (let i = 0; i < arr.length; i++) {
//     sumArrNums += arr[i];
// }

// console.log(sumArrNums);

// let str = "-";
// for (let i = 1; i < 10; i++) {
//     str += `${i}-`;
// }

// console.log(str);

const arr = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 0) {
        break;
    } continue;
}