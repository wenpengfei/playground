export const dfs = (graph: Graph, startNode: string) => {
  const stack = graph[startNode]
  const path: string[] = [startNode]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current) {
      path.push(current)
      if (graph[current]) {
        graph[current].forEach((item) => {
          if (!path.includes(item)) {
            stack.push(item)
          }
        })
      }
    }
  }
  return path
}
