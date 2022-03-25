type LinkedListNodeType<T> = LinkedListNode<T> | null

class LinkedListNode<T = any> {
  value: T
  next: LinkedListNodeType<T>

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T = any> {
  head: LinkedListNode
  tail: LinkedListNode
  constructor() {
    const head = new LinkedListNode('head')
    this.head = head
    this.tail = head
  }

  append(value: T) {
    this.tail.next = new LinkedListNode(value)
  }
}
