import { LinkedList, LinkedListNode } from '@/data-structure/linked-list'
import { getIntersectionNode } from './getIntersectionNode'

test('getIntersectionNode', () => {
  const nodeC1 = new LinkedListNode('c1')
  const nodeC2 = new LinkedListNode('c2')
  const nodeC3 = new LinkedListNode('c3')

  nodeC1.next = nodeC2
  nodeC2.next = nodeC3

  const nodeA = new LinkedList()
  nodeA.append('a1')
  nodeA.append('a2')
  const nodeATail = nodeA.append('a3')
  nodeATail.next = nodeC1

  const nodeB = new LinkedList()
  nodeB.append('b1')
  nodeB.append('b2')
  const nodeBTail = nodeB.append('b3')
  nodeBTail.next = nodeC1
})
