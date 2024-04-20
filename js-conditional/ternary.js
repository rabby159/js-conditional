// condition ? expressionIfTrue : expressionIfFalse;


// const age = 10;

// if( age > 18){
//     console.log('Go to vote');
// }
// else{
//     console.log('if you have political brother then you also can vote');
// }

//-------------------ternary--------------------
// const age = 20;
// age > 18 ? console.log('Go to vote') : console.log('gumao jao');
//-------------------ternary--------------------


// let price = 500;
// const isOwner = true;

// if(isOwner === true){
//     if(price > 300){
//         price = 0;
//     }
//     else{
//         price;
//     }
// }
// else{
//     price = price + 200;
// }

// console.log(price);

//-------------------ternary--------------------
let price = 800;
const isOwner = true;

price = isOwner === true ? price > 700 ? 0 : price : price + 200;

console.log(price);