import { LinkedList, LinkedListNode } from '@/data-structure/linked-list'

export class Stack extends LinkedList {
  top: LinkedListNode | undefined

  constructor() {
    super()
    this.top = undefined
  }

  push(name: string) {
    const node = this.append(name)
    this.top = node
  }

  pop() {
    const top = this.top
    if (top) {
      const prev = this.findPrev(top.name)
      if (prev) {
        prev.next = undefined
        return top
      }
    }
  }
}
