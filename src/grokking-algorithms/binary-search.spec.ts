import { binarySearch } from './binary-search'

test('index to be 1', () => {
  const result = binarySearch(2, [1, 2, 3, 4, 5, 6, 7])
  expect(result).toBe(1)
})

test('index to be 2', () => {
  const result = binarySearch(7, [1, 2, 3, 4, 5, 6, 7])
  expect(result).toBe(6)
})

test('index to be 0', () => {
  const result = binarySearch(1, [1, 2, 3, 4, 5, 6, 7])
  expect(result).toBe(0)
})
