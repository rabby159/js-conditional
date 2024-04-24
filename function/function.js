//structure

// function functionName(parameter1, parameter2, ...) {
//     // Function body: code block that defines what the function does
//     // It can contain any valid JavaScript statements
//     // Optionally, the function can return a value using the return statement
//   

// function sum(a, b){
//    total =  a + b;
//     return total;
// }

// let result = sum(5, 7);
// console.log(result);

// function details(){
//     console.log('Okey');
//     console.log('Not Okey');
// };

// details();

//string parameter function

// function strParams(str){
//     const name = str;
//     const size = str.length;

//     console.log(name, size);
// };

// const result = strParams('Rabby');
// // console.log(result);

//Problem1: Write a function to give me the sum of all numbers in an array.
/**
 * step1: declare function
 * step2: call function properly
 * step3: declare parameter
 * step4: check task step by step
 */


function sumOfAllNumber(arrNumbers){
    let arrSum = 0;
    for(const arrNumber of arrNumbers){
        // console.log(arrNumbs);
        arrSum = arrSum + arrNumber;
    }
    return arrSum;
}

const arr = [2, 1, 3, 9, 0, 2, 1, 2, 4];
const totalSum = sumOfAllNumber(arr);
console.log('Total sum of you ID: ',totalSum);