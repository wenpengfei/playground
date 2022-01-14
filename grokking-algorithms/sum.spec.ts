import { sum } from './sum'

test('sum to be 6', () => {
  const result = sum([1, 2, 3])
  expect(result).toBe(6)
})

test('sum to be 3', () => {
  const result = sum([1, 2])
  expect(result).toBe(3)
})

test('sum to be 1', () => {
  const result = sum([1])
  expect(result).toBe(1)
})

test('sum to be 0', () => {
  const result = sum([])
  expect(result).toBe(0)
})
