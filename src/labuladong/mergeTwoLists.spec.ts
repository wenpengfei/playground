import { LinkedList } from '@/data-structure/linked-list'
import { mergeTwoLists } from './mergeTwoLists'

test('mergeTwoLists', () => {
  const linkedList1 = new LinkedList()
  linkedList1.append('1')
  linkedList1.append('3')
  linkedList1.append('5')
  linkedList1.append('6')

  const linkedList2 = new LinkedList()
  linkedList2.append('2')
  linkedList2.append('4')
  linkedList2.append('7')
  linkedList2.append('8')

  const newList = mergeTwoLists(linkedList1, linkedList2)
  const displayNewList = newList.display()
  expect(displayNewList).toEqual(['1', '2', '3', '4', '5', '6', '7', '8'])
})
