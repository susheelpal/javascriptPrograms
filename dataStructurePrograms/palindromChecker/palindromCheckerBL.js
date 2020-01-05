
/**
 * @class Node
 * @class Dequeue
 */
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
class Dequeue {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	addFirst(obj) {
		let node = new Node(obj);
		if (this.head == null) {
			this.head = node;
			return true;
		}
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
		return true;
	}
	removeLast() {
		if (this.head == null) {
			console.log("list is empty");
			return " ";
		}
		let temp = this.head;
		while (temp.next != null) {
			temp = temp.next;
		}
		let obj = temp.data;
		if (temp.prev != null)
			temp.prev.next = null;
		else
			this.head = null;
		return obj;
	}
}

module.exports = {
	Node, Dequeue
}