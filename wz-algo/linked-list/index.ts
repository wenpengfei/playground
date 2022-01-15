export class LinkedListNode {
  name: string
  next?: LinkedListNode

  constructor(name: string) {
    this.name = name
  }
}

export class LinkedList {
  head: LinkedListNode

  constructor() {
    this.head = new LinkedListNode('head')
  }

  // 向链表末尾添加节点
  append(name: string) {
    const node = new LinkedListNode(name)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    return node
  }

  // 查找父节点
  findPrev(name: string) {
    let currentNode = this.head.next
    while (currentNode && currentNode.next && currentNode.next.name !== name) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 根据 name 查找节点
  find(name: string) {
    let currentNode = this.head.next
    while (currentNode && currentNode.next && currentNode.name !== name) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 根据 name 删除节点
  delete(name: string) {
    const prevNode = this.findPrev(name)
    if (prevNode) {
      prevNode.next = prevNode.next?.next
    }
  }

  // 向指定节点后插入节点
  insert(name: string, to: string) {
    let currentNode = this.find(to)
    if (!currentNode) {
      throw new Error('to 节点不存在')
    }
    const newNode = new LinkedListNode(name)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  // 所有节点按照顺序 append 到 array 中
  display(headNode: LinkedListNode) {
    let currentNode = headNode.next
    const result = []
    while (currentNode) {
      result.push(currentNode.name)
      currentNode = currentNode.next
    }
    return result
  }

  // 反转链表
  reverse() {
    let currentNode = this.head.next
    let prevNode = undefined
    let nextNode = undefined
    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
    }
    this.head.next = prevNode
    return this.head
  }
}
