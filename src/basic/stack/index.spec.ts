import Stack from './index'

test('append', () => {
  const stack = new Stack()
  stack.push('1')
  stack.push('2')
  expect(stack.current()).toEqual(['1', '2'])
  expect(stack.pop()).toEqual('2')
  expect(stack.current()).toEqual(['1'])
})
