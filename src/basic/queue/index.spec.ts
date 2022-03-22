import Queue from './index'

test('append', () => {
  const queue = new Queue()
  queue.push('1')
  queue.push('2')
  expect(queue.current()).toEqual(['1', '2'])
  expect(queue.shift()).toEqual('1')
  expect(queue.current()).toEqual(['2'])
})
