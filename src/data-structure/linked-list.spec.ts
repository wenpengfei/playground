import { LinkedList } from './linked-list'

test('append', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  const node = linkedList.find('b')
  expect(node).toHaveProperty('name', 'b')
})

test('prev', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  linkedList.append('c')
  linkedList.append('d')
  const prevNode = linkedList.findPrev('c')
  expect(prevNode).toHaveProperty('name', 'b')
})

test('find', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  linkedList.append('c')

  const prevNode = linkedList.find('c')
  expect(prevNode).toHaveProperty('name', 'c')
})

test('delete', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  linkedList.append('c')
  linkedList.delete('c')
  const currentNode = linkedList.find('b')
  expect(currentNode).toHaveProperty('next', undefined)
})

test('insert', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  linkedList.append('c')
  linkedList.insert('d', 'b')

  const currentNode = linkedList.find('d')
  const prevNode = linkedList.findPrev('d')
  expect(prevNode).toHaveProperty('name', 'b')
  expect(currentNode).toHaveProperty('name', 'd')
  expect(currentNode).toHaveProperty('next.name', 'c')
})

test('display', () => {
  const linkedList = new LinkedList()
  linkedList.append('b')
  linkedList.append('c')
  const result = linkedList.display(linkedList.head)
  expect(result).toEqual(['b', 'c'])
})

test('reverse', () => {
  const linkedList = new LinkedList()
  linkedList.append('1')
  linkedList.append('2')
  linkedList.append('3')
  const reversed = linkedList.reverse()
  const result = linkedList.display(reversed)
  expect(result).toEqual(['3', '2', '1'])
})

test('findEndIndex', () => {
  const linkedList = new LinkedList()
  linkedList.append('1')
  linkedList.append('2')
  linkedList.append('3')
  const result = linkedList.findEndIndex(1)
  expect(result?.name).toEqual('2')
})
