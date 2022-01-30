import { LinkedList } from '@/data-structure/linked-list'

export const mergeTwoLists = (l1: LinkedList, l2: LinkedList) => {
  const newList = new LinkedList()
  let newL1 = l1.head.next
  let newL2 = l2.head.next
  let currentNode = newList.head

  // 比较元素大小，把小的直接追加在新的链表 next 上
  while (newL1 && newL2) {
    if (+newL1.name > +newL2.name) {
      currentNode.next = newL2
      newL2 = newL2.next
    } else {
      currentNode.next = newL1
      newL1 = newL1.next
    }
    // 对比过一轮后指针向前
    currentNode = currentNode.next
  }
  // 其中一个表已经走完，剩下一个直接合并
  if (newL1) {
    currentNode.next = newL1
  }
  if (newL2) {
    currentNode.next = newL2
  }
  return newList
}
