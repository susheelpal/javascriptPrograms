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
