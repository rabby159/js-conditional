// AND (&&): The && operator evaluates to true if both conditions on its left and right are true. Otherwise, it evaluates to false.
// OR (||): The || operator evaluates to true if at least one of the conditions on its left or right is true. It evaluates to false only if both conditions are false.
// NOT (!): The ! operator negates the result of a condition. If a condition is true, ! makes it false, and if it's false, ! makes it true.


// const salary = 25000;
// const isGovt = false;

// if(salary > 20000 && isGovt == true){   //so when I need both condition true then I use AND(&&) operator
//     console.log('I will marry you!');
// }
// else{
//     console.log('Please next candidate.');
// }

// const salary = 25000;
// const isGovt = false;

// if(salary > 26000 || isGovt != true){  //so when I have two condition but if they full-field at least one condition then we go true.
//     console.log('I will marry you!');
// }
// else{
//     console.log('Please next candidate');
// }

//-----------------------complex condition----------------------------

// const isIphone = true;
// const income = 30000;
// const isCar = false;

// if((income > 25000 && isIphone == true) || isCar == true){  
//     console.log('I will date you my jaan!');
// }
// else{
//     console.log('oh! tahole allah hafeez');
// }

const isIphone = false;
const income = 30000;
const isCar = true;

if((income > 25000 || isIphone == true) && isCar == true){  
    console.log('I will date you my jaan!');
}
else{
    console.log('oh! tahole allah hafeez');
}