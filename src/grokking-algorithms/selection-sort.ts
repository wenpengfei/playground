const findSmallest = (array: number[]) => {
  let smallestIndex = 0
  let smallest = array[smallestIndex]
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (element < smallest) {
      smallestIndex = i
      smallest = element
    }
  }
  return smallest
}

const selectionSort = (array: number[]) => {
  let cloneArray = array
  let newArray = []
  while (cloneArray.length > 0) {
    const smallest = findSmallest(cloneArray)
    newArray.push(smallest)
    cloneArray = cloneArray.filter((item) => item !== smallest)
  }
  return newArray
}

export { findSmallest, selectionSort }
