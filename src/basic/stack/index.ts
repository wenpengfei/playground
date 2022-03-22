export default class Stack<T = any> {
  constructor() {}
  private list: T[] = []

  push(item: T) {
    this.list.push(item)
  }

  pop() {
    return this.list.pop()
  }

  current() {
    return this.list
  }
}
