/**
 Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL,
 please write the methods for:
 - Shift() remove first el and return removed el
 - Unshift() add first el
 - Push() add last el
 - Pop() remove last el
 - Get() acces el
 - Set() create/update el
 - Insert() insert el
 - Remove() remove el
 * 
 */

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  push(val){ //add new node to end of list, return new length;
    let newNode = new Node(val);
    if(!this.length){
        this.head = newNode;
    }else{ //add new node as a new tail node;
        this.tail.next = newNode; //connect to the new node;
        this.tail = newNode;  //set new node as tail node;
    }
    this.length++;

  }

  pop(){ //remove last node
    let current = this.head; // create a temp node, start from left;
    let newTail = current; // create a new tail node, start where current node is; positioning.
    //use while loop to traverse the list; if the node next to current node hits last node, exit the loop.
    while(current.next){
        newTail = current; //but why??
        current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
  }

  shift() {
    if (this.length == 0) {
      return;
    }
    if (this.head) {
      this.head = null;
    }
    this.head;
  }
}

// test cases:
// empty linked list
// headnode
//head-> node1-> node2-> tail
