class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    let current = this.first;

    if (this.size == 0) {
      this.first = node;
      this.last = node;
    }

    node.next = current;
    this.first = node;
    this.size++;

    return this;
  }

  pop() {
    let oldFirst = this.first;

    if (this.size == 1) {
      this.first = null;
      this.last = null;
    }

    if (this.size == 0) {
      return null;
    }

    this.first = this.first.next;

    this.size--;

    return oldFirst;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push
  push(val) {
    let node = new Node(val);

    if (this.size == 0) {
      this.first = node;
      this.last = node;
      this.size++;
      return this;
    }

    let last = this.last;
    this.size++;
    this.last = node;
    last.next = node;

    return this;
  }

  shift() {
    if (this.size == 1) {
      this.last = null;
    }

    if (this.size == 0) {
      return null;
    }

    this.first = this.first.next;
    this.size--;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let stack = new Stack();
let q = new Queues();

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
