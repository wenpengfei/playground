import { LinkedList, LinkedListNode } from './index'
test('append', () => {
  const ll = new LinkedList('a')
  ll.append('b')
  expect(ll.print()).toEqual(['a', 'b'])
})
