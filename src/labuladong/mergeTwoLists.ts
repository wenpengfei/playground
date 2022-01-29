import { LinkedList } from '@/data-structure/linked-list'

export const mergeTwoLists = (l1: LinkedList, l2: LinkedList) => {
  const newList = new LinkedList()

  let newL1 = l1.head.next
  let newL2 = l2.head.next
  let currentNode = newList.head

  while (newL1 && newL2) {
    if (+newL1.name > +newL2.name) {
      currentNode.next = newL2
      newL2 = newL2.next
    } else {
      currentNode.next = newL1
      newL1 = newL1.next
    }
    currentNode = currentNode.next
  }

  if (newL1) {
    currentNode.next = newL1
  }

  if (newL2) {
    currentNode.next = newL2
  }
  return newList
}
