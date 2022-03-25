export class LinkedListNode<T = any> {
  value: T
  next?: LinkedListNode<T>

  constructor(value: T) {
    this.value = value
    this.next = undefined
  }
}

export class LinkedList<T = any> {
  head: LinkedListNode<T>

  constructor(value: T) {
    const head = new LinkedListNode(value)
    this.head = head
  }

  append(value: T) {
    const node = new LinkedListNode(value)
    let currentNode = this.head
    while (currentNode?.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    return this.head
  }

  print() {
    let result = [this.head.value]
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
      result.push(currentNode.value)
    }
    return result
  }
}
