/**
 * 
 * template literal is more easy to understand and read and write code.
 */

const templateLiteral = (name) =>{
    // const msg = 'Hello ' +name + ', welcome to next level journey!';  //manual process 
    const templateMsg = `Hello ${name}, welcome to next level journey!` //template literal
    console.log(templateMsg);
};

templateLiteral('Md Rabby');