import { Stack } from './linked-list'

test('push', () => {
  const stack = new Stack()
  stack.push('a')
  stack.push('b')
  expect(stack.head.next?.name).toEqual('a')
  expect(stack.head.next?.next?.name).toEqual('b')
  expect(stack.top?.name).toEqual('b')
})

test('pop', () => {
  const stack = new Stack()
  stack.push('a')
  stack.push('b')

  const node = stack.pop()
  expect(node?.name).toEqual('b')
  expect(stack.head.next?.name).toEqual('a')
  expect(stack.head.next?.next).toBeFalsy()
})
