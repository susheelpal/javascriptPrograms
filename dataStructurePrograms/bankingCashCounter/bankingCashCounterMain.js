let queue=require('./bankingCashCounterBL') 
let q=new queue.Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log("---current queue---")
q.printQueue();
q.dequeue();
q.dequeue();
q.dequeue();