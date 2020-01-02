const input = require('readline-sync');
let list = require('./unorderedListBL');
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