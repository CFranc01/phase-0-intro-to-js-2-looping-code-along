// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length;i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// console.log(wrapGifts(gifts));


//Assignment

function writeCards(names) {
    const TYmessage = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        TYmessage.push(message);
    }
    return TYmessage;
}
const names = ['Guadalupe', 'Ollie', 'Aki'];
const TYmessage = writeCards(names);
console.log(TYmessage);


function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
    return countDown;
}

