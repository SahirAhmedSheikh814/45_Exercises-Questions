/*
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/



let guestlist: string[] = ["Sahir" , "Ali" , "Ahmed" , "Hunaid"]
 console.log (guestlist);

console.log('Now we have three more friends to invite');

guestlist.unshift ('Muhammad');
 console.log (guestlist);

guestlist.splice (3,0,'Saim');
 console.log (guestlist);

guestlist.push ('Areeb');
 console.log (guestlist);

for(let i=0; i<guestlist.length;i++){
    console.log (`Mr  ${guestlist[i]}! I would like to invite you at dinner on Monday `)
}

