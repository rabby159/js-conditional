

const myArray = [1, 2, 3];

const myCopyArray = [...myArray]; //[1, 2, 3]

myArray.push(4);
myCopyArray.push(5);

console.log(myArray);
console.log(myCopyArray);