/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/


let magicians = [`Fayyaz` , `Ejaz` , `Shahid` , `Junaid` , `Shahab`]


let magiciancopy = [...magicians]
function show_magicians (greet:String){
    let withgreetings = ``
    for(let Names of magiciancopy){
        withgreetings+= `${greet} ${Names}\n`;
    } 
    return withgreetings;
};
let mygreetings = show_magicians(`Hello`);
let makeArray = mygreetings.split(`\n`);
console.log(makeArray);
//Original Array
console.log(magicians);