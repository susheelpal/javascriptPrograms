
/******************************************************************************
 *  Execution       :   1. default node         cmd> node deckOfCardsMain.js
 *                      2. if nodemon installed cmd> nodemon deckOfCardsMain.js
 *
 *  Purpose         : playing card implementation.
 *
 *  @description    : Write a Program DeckOfCards.js, to initialize deck of cards having
 *                    suit ("Clubs", "Diamonds", "Hearts", "Spades") &
 *                    Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *                    Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and
 *                    Print the Cards the received by the 4 Players using 2D Array.
 *
 *  @file           : deckOfCardsMain.js
 *  @overview       : playing card implementation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-01-2020
 ******************************************************************************/

let read = require('readline-sync')
let call = require('./deckOfCardsBL')

