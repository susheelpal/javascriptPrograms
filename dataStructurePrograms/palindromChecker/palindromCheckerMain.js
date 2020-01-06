let read=require('readline-sync');
let access=require('./palindromCheckerBL')
        let str= read.question("Enter the string :")
		let length=read.questionInt("Enter the  length :");
		let deque = new access.Dequeue();
	for (let i=length-1;i>=0;i--) {
		deque.addFirst(str.charAt(i));
	}
	let reverse="";
	for(let i=0;i<length;i++) {
		let ch=deque.removeLast();
		reverse+=ch;
	}
	if(str==reverse) {
		console.log("it is palindrome !!!");
	}
	else {
		console.log("it's not palindrome !!!");
	}
