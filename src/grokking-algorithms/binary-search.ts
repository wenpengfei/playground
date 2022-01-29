export const binarySearch = (target: number, sortedArray: number[]) => {
  let low = 0,
    high = sortedArray.length - 1
  while (low <= high) {
    let guess = Math.round((low + high) / 2)
    if (target == sortedArray[guess]) {
      return guess
    }
    if (target > sortedArray[guess]) {
      low = guess + 1
    }
    if (target < sortedArray[guess]) {
      high = guess - 1
    }
  }
}

binarySearch(1, [1, 2, 3])
