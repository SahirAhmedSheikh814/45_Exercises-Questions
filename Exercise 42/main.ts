/*
42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicians = [`Fayyaz` , `Ejaz` , `Shahid` , `Junaid` , `Shahab`]

function show_magicians (greet:String){
    for(let Names of magicians){
        console.log(greet, Names);
    } 
};

show_magicians(`The Great`)                    
show_magicians(`Hy, How are you Mr.`)
