import { LinkedList, LinkedListNode } from '@/data-structure/linked-list'

export const getIntersectionNode = (l1: LinkedList, l2: LinkedList) => {
  let listA: LinkedListNode | undefined = l1.head
  let listB: LinkedListNode | undefined = l2.head

  while (listA !== listB) {
    if (listA) {
      listA = listA.next
    } else {
      listA = l2.head
    }
    if (listB) {
      listB = listB.next
    } else {
      listB = l1.head
    }
  }
  return listA
}
