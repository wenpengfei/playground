import { quickSort } from './quick-sort'

test('sort success 1', () => {
  const result = quickSort([6, 2, 1, 3])
  expect(result).toEqual([1, 2, 3, 6])
})

test('sort success 2', () => {
  const result = quickSort([1])
  expect(result).toEqual([1])
})

test('sort success 3', () => {
  const result = quickSort([])
  expect(result).toEqual([])
})
