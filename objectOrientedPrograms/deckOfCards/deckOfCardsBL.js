let suit = ["Clubs", "Diamonds", "Hearts", "Spades"]
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let n = suit.length * rank.length;
//Deck inilization for store the value//
let deck = new Array(n);
for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
        deck[rank.length*i+j] = rank[j] + " of " + suit[i];
    }
}
// console.log(deck);

//For suffle the cards//
for (let i = 0; i < n; i++) {
    let r = i + parseInt(Math.random() * (n - i));
    let temp = deck[r];
    deck[r] = deck[i];
    deck[i] = temp;
}
//For Printing the resultant of Deck of cards..
for (let i = 0; i < 4; i++) {
    console.log("Person " + (i + 1));
    let k = 0;
    let arr = [];
    for (let j = 0; j < 9; j++) {
        //console.log(deck[i+j*4]+"( card"+(i+j*4)+")");
        arr[k++] = deck[i + j * 4];
    }
    console.log(arr);
}
