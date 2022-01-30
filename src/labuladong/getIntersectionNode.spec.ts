import { LinkedList, LinkedListNode } from '@/data-structure/linked-list'
import { getIntersectionNode } from './getIntersectionNode'

test('getIntersectionNode', () => {
  const nodeC1 = new LinkedListNode('c1')
  const nodeC2 = new LinkedListNode('c2')
  const nodeC3 = new LinkedListNode('c3')

  nodeC1.next = nodeC2
  nodeC2.next = nodeC3

  const linkedListA = new LinkedList()
  linkedListA.append('a1')
  linkedListA.append('a2')
  const nodeATail = linkedListA.append('a3')
  nodeATail.next = nodeC1

  const linkedListB = new LinkedList()
  linkedListB.append('b1')
  const nodeBTail = linkedListB.append('b2')
  nodeBTail.next = nodeC1
  const commonNode = getIntersectionNode(linkedListA, linkedListB)
  expect(commonNode?.name).toEqual('c1')
})
