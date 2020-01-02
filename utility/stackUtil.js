class Mystack {
    constructor(data) {
        this.next = null
        this.data = data;
    }
}
/*-------------------------Defining Stack class-------------------------------*/
class stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    /*---------------------------check either stack is empty or not --------------------------*/
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    /*--------------------------add the element into the stack --------------------------*/
    Push(data) {
        let array;
        if (this.isEmpty()) {
            array = new Mystack(data);
            this.top = array;
            this.size++
            return;
        }
        else {
            array = new Mystack(data);
            array.next = this.top;
            this.top = array;
            this.size++;

        }
    }
    /*--------------------------Remove the element into the stack --------------------------*/
    pop() {
        //return datas which are in the stack
        if (this.isEmpty()) {
            return 'no datas'
        }
        let data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;

    }
    /*--------------------------peek the element into the stack --------------------------*/
    peek() {
        return this.top.data;
        //return the top value i.e added in the last
    }
    /*--------------------------display the element of stack --------------------------*/
    show() {
        let str = " ";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + " ";
            return str;
        }
    }
}
module.exports = {
    Mystack, stack
}