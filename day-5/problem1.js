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

  push(val) {
    //add new node to end of list, return new length;
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
    } else {
      //add new node as a new tail node;
      this.tail.next = newNode; //connect to the new node;
      this.tail = newNode; //set new node as tail node;
    }
    this.length++;
    return this; //return new list;
  }

  pop() {
    //remove last node
    if (!this.length) return;

    let current = this.head; // create a temp node, start from left;
    let newTail = current; // create a new tail node, start where current node is; positioning.
    while (current.next) {
      //use while loop to traverse the list; if the node next to current node hits last node, exit the loop.
      newTail = current; //but why duplicate this from outside loop??
      current = current.next;
    }
    this.tail = newTail; //assign property to new tail node;
    this.tail.next = null; //
    this.length--;

    if (this.length === 0) {
      // if head is the only node, after removal, the list is empty
      this.head = null;
      this.tail = null;
    }
    return current; //return removed tail value
  }

  shift() {
    //remove first node, return removed node
    if (!this.length) return;

    let removedHead = this.head;
    this.head = removedHead.next; //re-assigned the head node to the next node
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedHead; //return the value of removed head node;
  }

  unshift(val) { //add new node to be the new head
    let newNode = new Node(val); //create a new node, passing a value;
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;  //connecting newNode to current head
      this.head = newNode; //re-assign head property to the new node;
    }
    this.length++;
    return this; //return new list;
  }
}

// test cases:
// empty linked list
// headnode
//head-> node1-> node2-> tail
