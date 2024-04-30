/**
 * Object Destructuring
 * 1.variable name is fixed by the object property name
 * 2. Position not fixed, It can be anywhere in object index
 */


const myDetails = {
    name: 'Md Rabby',
    age: 24,
    Education: "BSc in CSE",
    Phone: 1718554726
};

const {age, name, Phone, Education} = myDetails;

console.log(age, name, Phone, Education);