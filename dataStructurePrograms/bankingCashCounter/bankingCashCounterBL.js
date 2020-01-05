class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.back=null
    }

    isEmpty(){
        return this.front==null ? true : false
    }

    enqueue(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.front=this.back=node;
        }else{
            this.back.next=node;
            this.back=node
        }
    }

    printQueue(){
        if(this.isEmpty()){
            console.log('no data available')
        }else{
            let tempArr=[]
            let temp=this.front
            while(temp){
                tempArr.push(temp.value)
                temp=temp.next
            }
            console.log(tempArr);
        }
    }

    dequeue(){
        let node =this.front
        if(!this.isEmpty()){
            this.front=this.front.next;
        }

        if(!this.front){
            this.back=null
        }
        this.printQueue()
        return node
    }
}
module.exports={
    Node,
    Queue
}