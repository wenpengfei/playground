// 按照加入顺序检查搜索列表中的人，否则找到的就不是最短路径，所以搜索列表必须是队列
// 对于检查过的人，务必不要再去检查，否则可能导致死循环
export const bfs = (graph: Graph, startNode: string) => {
  const queue = graph[startNode]
  const path: string[] = [startNode]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current) {
      path.push(current)
      if (graph[current]) {
        graph[current].forEach((item) => {
          if (!path.includes(item)) {
            queue.push(item)
          }
        })
      }
    }
  }
  return path
}
