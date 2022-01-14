export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr
  }

  const [flag, ...rest] = arr
  const left = rest.filter((item) => item <= flag)
  const right = rest.filter((item) => item > flag)

  return quickSort(left).concat([flag]).concat(quickSort(right))
}
