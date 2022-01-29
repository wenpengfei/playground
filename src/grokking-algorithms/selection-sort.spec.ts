import { findSmallest, selectionSort } from './selection-sort'

test('find smallest', () => {
  const result = findSmallest([1, 2, 3, 0, 4, 5, 6, 7])
  expect(result).toEqual(0)
})

test('selection', () => {
  const result = selectionSort([2, 3, 4, 1])
  expect(result).toEqual([1, 2, 3, 4])
})
