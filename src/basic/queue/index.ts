class Queue<T = any> {
  constructor() {}
  private list: T[] = []

  push(item: T) {
    this.list.push(item)
  }

  shift() {
    return this.list.shift()
  }
}
