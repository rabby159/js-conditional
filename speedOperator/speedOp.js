

// const myArray = [1, 2, 3];

// const myCopyArray = [...myArray]; //[1, 2, 3]

// myArray.push(4);
// myCopyArray.push(5);

// console.log(myArray);  //[1, 2, 3]
// console.log(myCopyArray); //[1, 2, 3]


const myRestOp = (...rest) => {
    // console.log(rest);
    let sum = 0;
    rest.forEach((num) => {
        sum = sum + num;
    });
    console.log(sum);
};

myRestOp(2, 1, 4, 5, 8);