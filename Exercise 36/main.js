/*
36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// 1st Method
function make_shirt(size, label) {
    // return size + label;
    return "My Shirt size is ".concat(size, " and label is ").concat(label);
}
var myAssignment = make_shirt(36, "The rainy day");
console.log(myAssignment);
// 2nd Method
// let myAssignment = (size: Number , label: String) =>{
// return `My Shirt size is ${size} and label is ${label}`
// } 
// console.log(myAssignment(36 , `The Rainy Day`));
