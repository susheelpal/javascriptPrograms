
/******************************************************************************
 *  Execution       :   1. default node         cmd> node orderedListMain.js
 *                      2. if nodemon installed cmd> nodemon orderedListMain.js
 *
 *  Purpose         : create an order list.
 *
 *  @description    : Read a List of Numbers from a file and arrange it ascending Order in a Linked List. 
 *                    Take user input for a number, if found then pop the number out of the list else insert the number 
 *                    in appropriate position.

 *
 *  @file           : orderedListMain.js
 *  @overview       : create an ordered list.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/

const input = require('readline-sync');
let list = require('../unorderedList/unorderedListBL');
let fs = require('fs');
let file = fs.readFileSync("../../utility/file1.txt");
let olist = new list.LinkedList() //object
fileArr = file.toString().split(' ');
console.log(fileArr);
try {
    fileArr.forEach(element => {
        olist.insert(parseInt(element))
        olist.sortList(parseInt(element))
    });
    olist.printList()
    let num = input.questionInt("Enter the number to found")

    ifsearchDelElseadd = (num) => {
        if (olist.findElement(num)) {
            olist.deleteElement(num)
        }
        else {
            console.log("not found")
            olist.insert(num)
            olist.sortList(num)
        }
        arr = olist.getArr()
        fs.writeFileSync("../../utility/file1.txt", arr.join(' '))
        olist.printList()
    }
    ifsearchDelElseadd(num)
}
catch (e) {
    console.log(e.message)
    console.log(e.name)
}
