export const sum = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0
  }
  if (arr.length === 1) {
    return arr[0]
  }
  const [head, ...rest] = arr
  return head + sum(rest)
}
