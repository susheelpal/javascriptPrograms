
/******************************************************************************
 *  Execution       :   1. default node         cmd> node unorderedListMain.js
 *                      2. if nodemon installed cmd> nodemon unorderedListMain.js
 *
 *  Purpose         : use linked list and perform operations.
 *
 *  @description    : Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to 
 *                    search a Word in the List. If the Word is not found then add it to the list, and if it found then
 *                    remove the word from the List. In the end save the list into a file.
 *
 *  @file           : unorderedListMain.js
 *  @overview       : arrange words into linked list.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
const input = require('readline-sync');
let list = require('../../utility/linkedList');
let fs = require('fs');
let file = fs.readFileSync('../../utility/file.txt');
try {
    let linklist = new list.LinkedList()
    fileArr = file.toString().split(' ')
    console.log(fileArr)
    let name = input.question("Enter the data you want to search :");
    fileArr.forEach(element => {
        linklist.insert(element)
    });
    ifsearchDelElseadd = (name) => {
        if (linklist.findElement(name)) {
            linklist.deleteElement(name);
        }
        else {
            linklist.insert(name);
        }
        let arr = linklist.getArr()
        fs.writeFileSync('../../utility/file.txt', arr.join(' '))
        linklist.printList()
    }
    ifsearchDelElseadd(name)
}
catch (e) {
    console.log(e.message);
    console.log(e.name);
}